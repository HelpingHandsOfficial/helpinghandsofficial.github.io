import { useEffect, useState } from "react";
import { DecorativeShapes, Milestone1, Milestone2, Milestone3, MilestoneIcon, Team, TeamIcon, milestones, } from "./components/index.js";

const milestoneComponents = {
  milestone1: Milestone1,
  milestone2: Milestone2,
  milestone3: Milestone3,
};

function getInitialMilestone() {
  const requestedMilestone = window.location.hash.slice(1);

  return milestones.some(({ id }) => id === requestedMilestone)
    ? requestedMilestone
    : milestones[0].id;
}

export default function App() {
  const [activeMilestone, setActiveMilestone] = useState(getInitialMilestone);

  useEffect(() => {
    window.history.replaceState(null, "", `#${activeMilestone}`);
  }, [activeMilestone]);

  function selectMilestone(id, focus = false) {
    setActiveMilestone(id);

    if (focus) {
      document.getElementById(`tab-${id}`)?.focus();
    }

    window.setTimeout(() => {
      document.getElementById("milestones")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  }

  function handleTabKeyDown(event, index) {
    const direction =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;

    if (direction) {
      event.preventDefault();
      const nextIndex = (index + direction + milestones.length) % milestones.length;
      selectMilestone(milestones[nextIndex].id, true);
    }
  }

  return (
    <>
      {/* Navbar */}
      <nav className="main_navigation" aria-label="Navigare">
        <div className="content_wrapper">
          <a className="navigation_link" href="#echipa">
            <TeamIcon />
            Echipa
          </a>
          <a className="navigation_link" href="#milestones">
            <MilestoneIcon />
            Milestones
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero_section">
        <DecorativeShapes />
        <div className="content_wrapper">
          <div className="hero_content">
            <div>
              <h1>Helping Hands</h1>
              <p className="hero_subtitle">
                Aplicația ce repară problemele vieții de adult – de la un
                robinet până la o renovare întreagă, în siguranță!
              </p>
            </div>
            <img
              className="hero_logo"
              src="/img/logo_helping_hands.png"
              alt="Logo Helping Hands"
            />
          </div>
        </div>
      </header>

      {/* Echipa */}
      <section className="content_band light_background" id="echipa">
        <div className="content_wrapper">
          <div className="milestones_header">
            <h2>Echipa noastră</h2>
            <p>Cunoaște echipa din spatele proiectului.</p>
          </div>
          <Team />
        </div>
      </section>

      {/* Milestones */}
      <section className="content_band milestones_section" id="milestones">
        <div className="content_wrapper">
          <div className="milestones_header">
            <h2>Milestones</h2>
            <p>Progresul proiectului.</p>
          </div>
          <div className="tabs_container" role="tablist" aria-label="Milestones">
            {milestones.map((milestone, index) => (
              <button
                className="milestone_tab"
                id={`tab-${milestone.id}`}
                key={milestone.id}
                role="tab"
                aria-controls={milestone.id}
                aria-selected={activeMilestone === milestone.id}
                tabIndex={activeMilestone === milestone.id ? 0 : -1}
                disabled={milestone.id !== "milestone1"} // modifica cand este necesar pentru a activa/dezactiva milestones
                onClick={() => selectMilestone(milestone.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {milestone.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Continut Milestone */}
      {milestones.map(({ id }) => {
        const Milestone = milestoneComponents[id];

        return (
          <div key={id} hidden={activeMilestone !== id}>
            <Milestone />
          </div>
        );
      })}

      <footer className="site_footer">
        <div className="content_wrapper">
          <p>© 2026 HelpingHands. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </>
  );
}
