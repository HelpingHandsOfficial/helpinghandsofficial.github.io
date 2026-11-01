import "./interview.css";
import { EvidenceGallery } from "./EvidenceGallery.jsx";

export function InterviewCard({ interview }) {
  return (
    <article className="interview_card">
      <div className="interview_card_heading">
        <span>Interviu {interview.number}</span>
        <span className="placeholder_badge">{interview.status}</span>
      </div>
      <div className="interview_card_fields">
        {interview.category === "mester" ? (
          <>
            {(interview.companyName || interview.name || interview.occupation) && (
              <div className="interview_identity interview_business_name">
                {(interview.companyName || interview.name) && (
                  <strong>{interview.companyName || interview.name}</strong>
                )}
                {interview.occupation && <span>{interview.occupation}</span>}
              </div>
            )}
            {(interview.yearsOfWork || interview.companyType) && (
              <div className="interview_business_meta">
                {interview.yearsOfWork && <span>{interview.yearsOfWork}</span>}
                {interview.companyType && <span>{interview.companyType}</span>}
              </div>
            )}
          </>
        ) : (interview.name || interview.occupation) ? (
          <div className="interview_identity">
            {interview.name && <strong>{interview.name}</strong>}
            {interview.occupation && <span>{interview.occupation}</span>}
          </div>
        ) : null}
        {interview.description && (
          <div className="interview_field">
            <strong>Descriere</strong>
            <span>{interview.description}</span>
          </div>
        )}
        <div className="interview_questions">
          <h4>Întrebări și răspunsuri</h4>
          {interview.questions.map((question, index) => (
          <div className="interview_field" key={`${interview.number}-${index}`}>
              <strong>Q: {question.question}</strong>
              <span>A: {question.answer}</span>
            </div>
          ))}
        </div>
        <EvidenceGallery evidence={interview.evidence} />
      </div>
    </article>
  );
}
