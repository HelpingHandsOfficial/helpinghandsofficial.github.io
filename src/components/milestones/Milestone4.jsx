import "./milestones.css";
import "./milestone1.css";

export function Milestone4() {
  return (
    <div className="milestone_page" id="milestone4" role="tabpanel" aria-labelledby="tab-milestone4">
      <div className="milestone_intro">
        <span className="decorative_shape floating_shape_one" />
        <span className="decorative_shape decorative_orb decorative_orb_one" />
        <div className="content_wrapper">
          <div>
            <h3>M4 · Cercetare cu utilizatorii</h3>
            <p>Interviuri – persona – povești de utilizator – fluxuri – wireframe-uri actualizate.</p>
            <nav className="milestone1_navigation" aria-label="Secțiuni Milestone 4">
              <a href="#interviuri">Interviuri</a>
              <a href="#persona">Persona</a>
              <a href="#povesti">Povești de utilizator</a>
              <a href="#fluxuri">Cazuri de utilizare</a>
            </nav>
          </div>
        </div>
      </div>

      {/* INTERVIURI */}
      <section className="content_band" id="interviuri">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Interviuri față în față</h2>
            <p>Interviuri cu potențiali utilizatori din segmentul principal: clienți B2C din mediul urban.</p>
          </div>

          <div className="content_panel problem_intro">
            <p>
              Metodă: utilizatorul a primit prototipul aplicației și a încercat să
              ducă la capăt sarcini simple (găsirea unui meșter, rezervarea unei
              intervenții urgente), în timp ce a fost observat și întrebat ce gândește.
            </p>
          </div>

          <div className="advantage_grid" style={{ marginTop: "2rem" }}>
            <article className="advantage_card">
              <span>Interviu 1</span>
              <h3>Marian, 20 de ani, chiriaș</h3>
              <p><strong>Data / locul:</strong> Online, pe Discord</p>
              <p><strong>Cum a decurs:</strong> a folosit aplicația cu ușurință și i s-a părut intuitivă.</p>
              <p><strong>Ce i-a plăcut:</strong> simplitatea fluxului și claritatea ecranelor.</p>
              <p><strong>Ce a lipsit:</strong> și-ar fi dorit o secțiune clară despre certificările meșterilor.</p>
              <p><strong>Dificultate observată:</strong> fără o indicație din partea mea, nu ar fi găsit ușor secțiunea de rezervări urgente.</p>
              <p><strong>Dovada:</strong>
                <a href="https://drive.google.com/file/d/1c1dYLdRCYXE8iFrHQIlgs6VNRpE1ptG9/view?usp=drive_link" target="_blank">
                Vezi dovada aici
                </a></p>
            </article>
            {/* <article className="advantage_card">
              <span>Interviu 2</span>
              <h3>[Nume, vârstă, ocupație]</h3>
              <p>[de completat: context, sarcini testate, observații, citate scurte, probleme]</p>
            </article>
            <article className="advantage_card">
              <span>Interviu 3</span>
              <h3>[Nume, vârstă, ocupație]</h3>
              <p>[de completat: context, sarcini testate, observații, citate scurte, probleme]</p>
            </article> */}
          </div>
        </div>
      </section>


      {/* PERSONA */}
      <section className="content_band" id="persona">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Persona principală</h2>
            <p>Utilizatorul tipic din segmentul de lansare: persoane între 25 și 45 de ani din București și marile orașe.</p>
          </div>
          <div className="market_cards">
            <article className="market_card market_card_primary">
              <span className="market_tag">Persona principală</span>
              <h3>Andreea, 32 de ani, București</h3>
              <p>Lucrează într-o companie, locuiește într-un apartament în care a investit și are un program încărcat. Rezolvă totul de pe telefon și are puțin timp pentru telefoane și negocieri.</p>
              <strong>Obiective</strong>
              <p>Vrea să găsească un meșter de încredere, să știe dinainte prețul și să primească acte în regulă, fără riscul de a fi păcălită.</p>
            </article>
            <article className="market_card">
              <h3>Frustrări</h3>
              <ul>
                <li>Anunțurile online sunt o loterie, iar recomandările din cunoștințe sunt limitate.</li>
                <li>Nu știe dinainte cât costă și cât durează lucrarea.</li>
                <li>Plata în avans nu are garanție, iar plata cash nu vine cu acte.</li>
                <li>Pierde timp cu căutarea, negocierea și programarea.</li>
              </ul>
            </article>
            <article className="market_card">
              <h3>Ce așteaptă de la aplicație</h3>
              <ul>
                <li>Meșteri verificați, cu certificări și recenzii vizibile.</li>
                <li>Plată sigură, în escrow, și acte generate automat.</li>
                <li>Prețuri și termene clare.</li>
                <li>Un proces simplu, de la căutare la plată, într-un singur loc.</li>
              </ul>
            </article>
            <article className="market_card">
              <h3>Comportament digital</h3>
              <p>Caută servicii online, citește recenziile și ratingurile înainte să aleagă și preferă să plătească sigur, direct din aplicație.</p>
            </article>
          </div>
        </div>
      </section>

      {/* POVESTI DE UTILIZATOR */}
      <section className="content_band light_background" id="povesti">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Povești de utilizator</h2>
          </div>
          <div className="metrics_table_wrapper">
            <table className="metrics_table">
              <thead>
                <tr>
                  <th>Rol</th>
                  <th>Poveste</th>
                  <th>Criteriu de acceptare</th>
                </tr>
              </thead>
              <tbody>
                <tr className="metric_category_offer">
                  <th>Client</th>
                  <td>Ca locatar, vreau să rezerv rapid un meșter pentru o urgență, ca să rezolv avaria în aceeași zi.</td>
                  <td>Butonul „Am o urgență” este vizibil pe primul ecran.</td>
                </tr>
                <tr className="metric_category_quality">
                  <th>Client</th>
                  <td>Ca locatar, vreau să văd certificările unui meșter, ca să am încredere înainte să rezerv.</td>
                  <td>Profilul are o secțiune dedicată, cu insigne de verificare.</td>
                </tr>
                <tr className="metric_category_offer">
                  <th>Client</th>
                  <td>Ca utilizator, vreau să compar tarifele și recenziile, ca să aleg meșterul potrivit.</td>
                  <td>Rezultatele pot fi filtrate după preț, scor și disponibilitate.</td>
                </tr>
                <tr className="metric_category_quality">
                  <th>Client</th>
                  <td>Ca utilizator, vreau să plătesc în escrow, ca banii să fie eliberați doar după confirmare.</td>
                  <td>Plata este blocată până la confirmarea lucrării.</td>
                </tr>
                <tr className="metric_category_offer">
                  <th>Client</th>
                  <td>Ca utilizator, vreau contract și factură automate, ca să am actele în regulă.</td>
                  <td>Documentele sunt generate și descărcabile după rezervare.</td>
                </tr>
                <tr className="metric_category_quality">
                  <th>Meșter</th>
                  <td>Ca meșter, vreau să-mi încarc certificările, ca să primesc mai mulți clienți.</td>
                  <td>Documentele încărcate sunt verificate și afișate în profil.</td>
                </tr>
                <tr className="metric_category_offer">
                  <th>Meșter</th>
                  <td>Ca meșter, vreau să știu că banii sunt garantați, ca să accept lucrarea fără risc.</td>
                  <td>Statusul escrow este vizibil înainte de începerea lucrării.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CAZURI DE UTILIZARE / FLUXURI */}
      <section className="content_band" id="fluxuri">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Cazuri de utilizare și fluxuri</h2>
          </div>

          <div className="solution_flow">
            <h3>Flux 1: rezervare urgentă (actualizat)</h3>
            <div className="flow_steps">
              <div className="flow_step">
                <span className="flow_number" data-number="1">1</span>
                <strong>Apasă „Am o urgență”</strong>
                <span>Buton vizibil pe primul ecran.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="2">2</span>
                <strong>Alege problema</strong>
                <span>Categorie/ rating mester/ disponibilitate/ distanta </span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="3">3</span>
                <strong>Vede meșterii disponibili</strong>
                <span>Scor/tarif</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="4">4</span>
                <strong>Confirmă și plătește</strong>
                <span>Contract automat, plată în escrow.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="5">5</span>
                <strong>Confirmă lucrarea</strong>
                <span>Banii sunt eliberați, lasă recenzie.</span>
              </div>
            </div>
          </div>

          <div className="solution_flow" style={{ marginTop: "1.6rem" }}>
            <h3>Flux 2: verificarea unui meșter</h3>
            <div className="flow_steps">
              <div className="flow_step">
                <span className="flow_number" data-number="1">1</span>
                <strong>Caută meșterul</strong>
                <span>Filtrează după serviciu și scor.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="2">2</span>
                <strong>Deschide profilul</strong>
                <span>Vede tarife și recenzii.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="3">3</span>
                <strong>Vede certificările</strong>
                <span>Secțiune nouă, cu documente verificate.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="4">4</span>
                <strong>Programează</strong>
                <span>Alege data și continuă spre plată.</span>
              </div>
            </div>
          </div>

          <div className="content_tile" style={{ marginTop: "1.6rem" }}>
            <h3>Caz de utilizare: rezervare urgentă</h3>
            <ul>
              <li><strong>Actor:</strong> client (locatar).</li>
              <li><strong>Precondiție:</strong> utilizatorul are cont și o problemă urgentă în locuință.</li>
              <li><strong>Scenariu principal:</strong> alege „Am o urgență”, descrie problema, alege meșterul, plătește în escrow, confirmă lucrarea.</li>
              <li><strong>Alternativ:</strong> niciun meșter disponibil, iar aplicația propune programarea pentru prima zi liberă.</li>
              <li><strong>Rezultat:</strong> problemă rezolvată, contract și factură generate, recenzie lăsată.</li>
            </ul>
          </div>
        </div>
      </section>

    
    </div>
  );
}
