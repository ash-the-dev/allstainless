"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { wipTrack } from "../lib/wipTrack";

const HERO_GALLERY_IMAGES = [
  ...[16, 17].map((n) => ({
    src: `/image-${n}.jpg`,
    alt: `Recent commercial stainless project ${n}`,
  })),
  ...[7, 8, 9, 10, 11, 12, 13, 14, 15].map((n) => ({
    src: `/image-${n}.jpg`,
    alt: `Commercial stainless kitchen installation ${n}`,
  })),
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    src: `/image-${n}.jpg`,
    alt: `Commercial stainless kitchen installation ${n}`,
  })),
];

function visibleCountForWidth(w) {
  if (w <= 600) return 1;
  if (w <= 960) return 2;
  return 3;
}

export default function HomeHeroGallery() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [reduceMotion, setReduceMotion] = useState(false);
  const wrapRef = useRef(null);
  const n = HERO_GALLERY_IMAGES.length;
  const touchStartX = useRef(null);

  const maxIdx = Math.max(0, n - visible);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width ?? window.innerWidth;
      setVisible(visibleCountForWidth(w));
    });
    ro.observe(el);
    setVisible(visibleCountForWidth(el.getBoundingClientRect().width));
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIdx));
  }, [maxIdx]);

  useEffect(() => {
    if (reduceMotion || maxIdx <= 0) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i >= maxIdx ? 0 : i + 1));
    }, 4800);
    return () => window.clearInterval(id);
  }, [reduceMotion, maxIdx]);

  const goPrev = useCallback(() => {
    wipTrack("gallery_click", {
      category: "engagement",
      properties: { source: "hero_gallery_prev" },
    });
    setIndex((i) => (i <= 0 ? maxIdx : i - 1));
  }, [maxIdx]);

  const goNext = useCallback(() => {
    wipTrack("gallery_click", {
      category: "engagement",
      properties: { source: "hero_gallery_next" },
    });
    setIndex((i) => (i >= maxIdx ? 0 : i + 1));
  }, [maxIdx]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start == null) return;
    const end = e.changedTouches[0]?.clientX;
    if (end == null) return;
    const dx = end - start;
    if (Math.abs(dx) < 48) return;
    if (dx > 0) goPrev();
    else goNext();
  };

  const trackWidthPct = (n / visible) * 100;
  const from = index + 1;
  const to = Math.min(index + visible, n);

  return (
    <div className="heroGalleryBlock" ref={wrapRef}>
      <div
        className="heroGallery"
        role="region"
        aria-roledescription="carousel"
        aria-label="Project photo gallery"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="heroGalleryViewport">
          <div
            className="heroGalleryTrack"
            style={{
              width: `${trackWidthPct}%`,
              transform: `translateX(-${(index * 100) / n}%)`,
              transition: reduceMotion ? "none" : "transform 0.7s cubic-bezier(0.25, 0.9, 0.35, 1)",
            }}
          >
            {HERO_GALLERY_IMAGES.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="heroGallerySlide"
                style={{ flex: `0 0 ${100 / n}%` }}
                aria-hidden={i < index || i > index + visible - 1}
              >
                <div className="heroGallerySlideInner">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
                    className="heroGalleryImg"
                    priority={i < 3}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="heroGalleryChrome">
          <p className="heroGalleryCount" aria-live="polite">
            Showing photos {from}–{to} of {n}
          </p>
          <div className="heroGalleryControls">
            <button type="button" className="heroGalleryBtn" onClick={goPrev} aria-label="Show previous photos">
              ‹
            </button>
            <button type="button" className="heroGalleryBtn" onClick={goNext} aria-label="Show next photos">
              ›
            </button>
          </div>
        </div>
      </div>

      <p className="heroGalleryCaption">
        A rotating look at the caliber of fabrication and field installation we bring to
        commercial kitchens—real sites, real stainless, and the finish quality we stake our
        name on every time we are on a job.
      </p>
    </div>
  );
}
