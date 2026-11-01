import "./milestones.css";
import "./milestone1.css";
import "./milestone2.css";
import { InterviewCarousel } from "../interview/InterviewCarousel.jsx";
import { interviews } from "../interview/interviewData.jsx";

function ExpandableSection({ id, title, children, defaultOpen = false }) {
  return (
    <details className="milestone2_details" id={id} open={defaultOpen}>
      <summary>{title}</summary>
      <div className="milestone2_details_content">{children}</div>
    </details>
  );
}

export function Milestone2() {
  return (
    <div className="milestone_page" id="milestone2" role="tabpanel" aria-labelledby="tab-milestone2">
      <div className="milestone_intro">
        <span className="decorative_shape floating_shape_one" />
        <span className="decorative_shape decorative_orb decorative_orb_one" />
        <div className="content_wrapper">
          <div>
            <h3>M2 · Customer Discovery</h3>
            <p>Înțelegerea problemelor și validarea nevoilor utilizatorilor.</p>
            <nav className="milestone1_navigation" aria-label="Secțiuni Milestone 2">
              <a href="#m2-identificarea-problemei">Identificarea problemei</a>
              <a href="#m2-solutia">Soluția la care ne-am gândit</a>
              <a href="#m2-customer-discovery">Strategia de Customer Discovery</a>
              <a href="#m2-procesul">Procesul</a>
              <a href="#m2-impact-insight-uri">Impactul insight-urilor asupra produsului</a>
              <a href="#m2-concluzie">Concluzie</a>
            </nav>
          </div>
        </div>
      </div>

      <section className="content_band milestone2_content">
        <div className="content_wrapper">
          <section className="milestone2_section" id="m2-identificarea-problemei">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Identificarea problemei</h2>
            </div>
            <p className="placeholder_text">Conținutul va fi adăugat aici.</p>
          </section>

          <section className="milestone2_section" id="m2-solutia">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Soluția la care ne-am gândit</h2>
            </div>
            <p className="placeholder_text">Conținutul va fi adăugat aici.</p>
          </section>

          <section className="milestone2_section" id="m2-customer-discovery">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Strategia de Customer Discovery</h2>
            </div>
            <p className="placeholder_text">Conținutul va fi adăugat aici.</p>
          </section>

          <section className="milestone2_section" id="m2-procesul">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Procesul</h2>
            </div>
            <div className="milestone2_process_topics">
              <section className="milestone2_process_topic" id="m2-proces-descriere">
                <h3>Descriere</h3>
                <p className="placeholder_text">Conținutul va fi adăugat aici.</p>
              </section>
              <section className="milestone2_process_topic" id="m2-proces-metode">
                <h3>Tipurile de metode</h3>
                <p className="placeholder_text">Conținutul va fi adăugat aici.</p>
              </section>
              <section className="milestone2_process_topic" id="m2-proces-date">
                <h3>Colectarea și analiza datelor</h3>
                <p className="placeholder_text">Conținutul va fi adăugat aici.</p>
              </section>
            </div>

            <div className="milestone2_research">
              <ExpandableSection id="m2-interviuri" title="Interviuri">
                <div className="interview_cards">
                  {["client", "mester"].map((category) => (
                    <section className="interview_category" key={category}>
                      <h3>{category === "client" ? "Clienți" : "Meșteri"}</h3>
                      <InterviewCarousel
                        interviews={interviews.filter(
                          (interview) => interview.category === category,
                        )}
                      />
                    </section>
                  ))}
                </div>
              </ExpandableSection>
              <ExpandableSection id="m2-chestionare" title="Chestionare">
                <div className="questionnaire_placeholder">
                  <h3>Statistici</h3>
                  <p className="placeholder_text">Spațiu rezervat pentru statistici.</p>
                  <h3>Întrebări</h3>
                  <p className="placeholder_text">Spațiu rezervat pentru întrebările chestionarului.</p>
                </div>
              </ExpandableSection>
            </div>

            <div className="milestone2_process_topic" id="m2-probleme-identificate">
              <h3>Problemele identificate</h3>
              <p className="placeholder_text">Conținutul va fi adăugat aici.</p>
            </div>
          </section>

          <section className="milestone2_section" id="m2-impact-insight-uri">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Impactul insight-urilor asupra produsului</h2>
            </div>
            <p className="placeholder_text">Conținutul va fi adăugat aici.</p>
          </section>

          <section className="milestone2_section milestone2_conclusion" id="m2-concluzie">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Concluzie</h2>
            </div>
            <h3>Suntem pregătiți pentru etapa de Customer Validation?</h3>
            <p className="placeholder_text">Concluzia va fi adăugată aici.</p>
          </section>
        </div>
      </section>
    </div>
  );
}
