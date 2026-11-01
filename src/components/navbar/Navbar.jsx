import { useState } from "react";
import "./navbar.css";
import { MilestoneIcon, TeamIcon } from "../navigation_icons/NavigationIcons.jsx";
import { milestones } from "../milestones/milestoneData.js";

export function Navbar({ activeMilestone, onMilestoneSelect, onSectionSelect }) {
  const [isMilestonesOpen, setIsMilestonesOpen] = useState(false);

  return (
    <nav
      className="main_navigation"
      aria-label="Navigare"
      onMouseEnter={() => setIsMilestonesOpen(true)}
      onMouseLeave={() => setIsMilestonesOpen(false)}
    >
      <div className="content_wrapper">
        <a className="navigation_link" href="#echipa">
          <TeamIcon />
          Echipa
        </a>
        <button
          className="navigation_link navigation_toggle"
          type="button"
          aria-expanded={isMilestonesOpen}
          aria-controls="milestones_navigation"
        >
          <MilestoneIcon />
          Milestones
        </button>
      </div>

      {isMilestonesOpen && (
        <div
          className="milestones_navigation"
          id="milestones_navigation"
          style={{ "--milestone-count": milestones.length }}
        >
          <div className="content_wrapper">
            {milestones.map((milestone) => (
              <div
                className={`milestone_navigation_group ${
                  activeMilestone === milestone.id ? "is-active" : ""
                }`}
                key={milestone.id}
              >
                <button
                  className="milestone_navigation_title"
                  type="button"
                  disabled={milestone.id !== "milestone1"}
                  onClick={() => onMilestoneSelect(milestone.id)}
                >
                  {milestone.label}
                </button>
                {milestone.sections.length > 0 && (
                  <div className="milestone_navigation_sections">
                    {milestone.sections.map((section) => (
                      <a
                        href={`#${section.id}`}
                        key={section.id}
                        onClick={(event) => {
                          event.preventDefault();
                          onSectionSelect(milestone.id, section.id);
                        }}
                      >
                        {section.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
