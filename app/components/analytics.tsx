"use client";

export function Analytics() {
  const token = "3a8699a1-5881-40f4-a022-6bbabe949e10";
  if (!token) {
    return null;
  }
  return (
    <script
      src="https://beamanalytics.b-cdn.net/beam.min.js"
      data-token={token}
      async
    />
  );
}
