import { useEffect, useState } from "react";

export function EvidenceGallery({ evidence = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState(null);
  const pageSize = 3;
  const pageCount = Math.ceil(evidence.length / pageSize);
  const visibleEvidence = evidence.slice(
    activeIndex * pageSize,
    activeIndex * pageSize + pageSize,
  );

  useEffect(() => {
    if (!expandedImage) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setExpandedImage(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [expandedImage]);

  if (evidence.length === 0) {
    return null;
  }

  function showPreviousPage() {
    setActiveIndex((index) => (index - 1 + pageCount) % pageCount);
  }

  function showNextPage() {
    setActiveIndex((index) => (index + 1) % pageCount);
  }

  return (
    <>
      <section className="evidence_section" aria-label="Dovezi">
        <h4>Dovezi</h4>
        <div className="evidence_grid">
          {visibleEvidence.map((image) => (
            <button
              className="evidence_image_button"
              type="button"
              key={image.src}
              onClick={() => setExpandedImage(image)}
              aria-label={`Deschide imaginea ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} />
            </button>
          ))}
          {pageCount > 1 && (
            <>
              <button
                className="evidence_carousel_control evidence_carousel_previous"
                type="button"
                onClick={showPreviousPage}
                aria-label="Dovezi anterioare"
              >
                ‹
              </button>
              <button
                className="evidence_carousel_control evidence_carousel_next"
                type="button"
                onClick={showNextPage}
                aria-label="Dovezi următoare"
              >
                ›
              </button>
            </>
          )}
        </div>
        {pageCount > 1 && (
          <div className="evidence_controls">
            <span>{activeIndex + 1} / {pageCount}</span>
          </div>
        )}
      </section>

      {expandedImage && (
        <div
          className="evidence_lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={expandedImage.alt}
          onClick={() => setExpandedImage(null)}
        >
          <button
            className="evidence_lightbox_close"
            type="button"
            onClick={() => setExpandedImage(null)}
            aria-label="Închide imaginea"
          >
            ×
          </button>
          <img
            src={expandedImage.src}
            alt={expandedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
