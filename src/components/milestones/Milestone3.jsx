import "./milestones.css";
import "./milestone1.css";

export function Milestone3() {
  return (
    <div
      className="milestone_page"
      id="milestone3"
      role="tabpanel"
      aria-labelledby="tab-milestone3"
    >
      <div className="milestone_intro">
        <span className="decorative_shape floating_shape_one" />
        <span className="decorative_shape decorative_orb decorative_orb_one" />

        <div className="content_wrapper">
          <div>
            <h3>Milestone 3</h3>
            <nav className="milestone1_navigation" aria-label="Secțiuni Milestone 3">
              <a href="#m3-figma-mockup">Figma Mockup</a>
              <a href="#m3-landing-page">Landing Page</a>
            </nav>
          </div>
        </div>
      </div>

      <section className="content_band" id="m3-figma-mockup">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Figma Mockup</h2>
          </div>
          <div className="milestone3_links">
            <a
              href="https://www.figma.com/proto/xwD8DlxCeDnzKn6xnhwaqA/HelpingHands?node-id=1-2&starting-point-node-id=56%3A2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma Mockup ↗
            </a>
          </div>
        </div>
      </section>

      <section className="content_band light_background" id="m3-landing-page">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Landing Page</h2>
          </div>
          <div className="milestone3_links">
            <a
              href="https://alexandra200312.github.io/Helping-Hands/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Landing Page ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
