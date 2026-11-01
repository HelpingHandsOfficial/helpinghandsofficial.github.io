import { useState } from "react";
import { InterviewCard } from "./InterviewCard.jsx";

export function InterviewCarousel({ interviews }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (interviews.length === 0) {
    return null;
  }

  const activeInterview = interviews[activeIndex];

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + interviews.length) % interviews.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % interviews.length);
  }

  return (
    <div className="interview_carousel">
      <div className="interview_carousel_stage">
        <InterviewCard interview={activeInterview} />
        {interviews.length > 1 && (
          <>
            <button
              className="interview_carousel_control interview_carousel_previous"
              type="button"
              onClick={showPrevious}
              aria-label="Interviul anterior"
            >
              ‹
            </button>
            <button
              className="interview_carousel_control interview_carousel_next"
              type="button"
              onClick={showNext}
              aria-label="Interviul următor"
            >
              ›
            </button>
          </>
        )}
      </div>
      {interviews.length > 1 && (
        <div className="interview_carousel_status" aria-live="polite">
          Interviul {activeIndex + 1} din {interviews.length}
        </div>
      )}
    </div>
  );
}
