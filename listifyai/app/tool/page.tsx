"use client";

import { useState, useRef, useCallback } from "react";
import CopyButton from "@/components/CopyButton";

interface ListingResult {
  title: string;
  description: string;
  priceRange: string;
  keywords: string[];
  socialCaption: string;
}

export default function ToolPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ListingResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file.");
      return;
    }
    setImage(file);
    setPreview(URL.createObjectURL(file));
    setResult(null);
    setError(null);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  const handleAnalyze = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image", image);
      const res = await fetch("/api/analyze", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Analysis failed");
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-3">
            Generate your listing
          </h1>
          <p className="text-gray-500 text-base">
            Upload a photo and get a complete product listing in seconds.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Upload panel */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              1. Upload photo
            </h2>

            {!preview ? (
              <div
                onDrop={handleDrop}
                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onClick={() => fileInputRef.current?.click()}
                className={`relative rounded-xl border-2 border-dashed cursor-pointer transition-all flex flex-col items-center justify-center gap-3 py-16 px-6 text-center ${
                  dragOver
                    ? "border-violet-400 bg-violet-50"
                    : "border-gray-200 bg-gray-50 hover:border-violet-300 hover:bg-violet-50/50"
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: "var(--accent)" }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 text-sm">
                    Drag & drop or <span style={{ color: "var(--accent)" }}>click to upload</span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, WEBP up to 20MB</p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                />
              </div>
            ) : (
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="Product preview"
                  className="w-full rounded-xl object-cover max-h-64"
                />
                <button
                  onClick={reset}
                  className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-500 hover:text-red-500 transition-colors text-sm"
                >
                  ✕
                </button>
              </div>
            )}

            {error && (
              <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-100 text-red-600 text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={!image || loading}
              className="mt-5 w-full py-3 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 active:scale-95 flex items-center justify-center gap-2"
              style={{ background: "var(--accent)" }}
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Analyzing…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate listing
                </>
              )}
            </button>
          </div>

          {/* Results panel */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 min-h-[300px]">
            <h2 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
              2. Your listing
            </h2>

            {loading && (
              <div className="space-y-4 animate-pulse">
                {[80, 100, 60, 40, 90].map((w, i) => (
                  <div key={i} className="shimmer rounded-lg h-8" style={{ width: `${w}%` }} />
                ))}
                <p className="text-center text-sm text-gray-400 pt-4">AI is analyzing your product…</p>
              </div>
            )}

            {!loading && !result && !error && (
              <div className="flex flex-col items-center justify-center h-48 text-center gap-3 text-gray-400">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl">
                  📋
                </div>
                <p className="text-sm">Your listing will appear here after analysis.</p>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-5 animate-fade-in-up">
                <ResultField label="Title" value={result.title} />
                <ResultField label="Description" value={result.description} multiline />
                <ResultField label="Price Range" value={result.priceRange} />
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Keywords</span>
                    <CopyButton text={result.keywords.join(", ")} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {result.keywords.map((kw) => (
                      <span
                        key={kw}
                        className="text-xs font-medium px-2.5 py-1 rounded-full border text-violet-700 border-violet-200 bg-violet-50"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
                <ResultField label="Social Caption" value={result.socialCaption} />

                <button
                  onClick={reset}
                  className="mt-2 w-full py-2.5 rounded-xl border border-gray-200 text-sm text-gray-600 hover:bg-gray-50 transition-colors font-medium"
                >
                  Analyze another product
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultField({
  label,
  value,
  multiline = false,
}: {
  label: string;
  value: string;
  multiline?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</span>
        <CopyButton text={value} />
      </div>
      <div className={`text-sm text-gray-800 bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-100 leading-relaxed ${multiline ? "" : "truncate"}`}>
        {value}
      </div>
    </div>
  );
}
