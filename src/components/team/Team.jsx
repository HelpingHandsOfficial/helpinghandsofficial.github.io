import { team } from "./teamData.js";
import "./team.css";

export function Team() {
  return (
    <div className="team_grid">
      {team.map((member, index) => (
        <article
          className="team_member"
          key={member.email}
          style={{
            "--card_color": member.card_color,
            "--glow_color": member.glow_color,
            "--animation_delay": `${index * -1.5}s`,
          }}
        >
          <div className="member_photo">
            {member.name.trim()[0] || "?"}
            <img
              src={member.photo}
              alt={`Fotografie ${member.name}`}
              onError={(event) => {
                event.currentTarget.remove();
              }}
            />
          </div>
          <h3>{member.name}</h3>
          <span className="member_role">{member.role}</span>
          <a href={`mailto:${member.email}`}>{member.email}</a>
        </article>
      ))}
    </div>
  );
}
