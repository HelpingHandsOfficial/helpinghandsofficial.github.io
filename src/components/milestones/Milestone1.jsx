import "./milestones.css";
import "./milestone1.css";

export function Milestone1() {
  return (
    <div className="milestone_page" id="milestone1" role="tabpanel" aria-labelledby="tab-milestone1">
      <div className="milestone_intro">
        <span className="decorative_shape floating_shape_one" />
        <span className="decorative_shape decorative_orb decorative_orb_one" />
        <div className="content_wrapper">
          <div>
            <h3>M1 · Descrierea proiectului</h3>
            <p>
              Prezentarea problemei - soluția - modelul de business.
            </p>
            {/* Sectiuni milestone mini nav*/}
            <nav className="milestone1_navigation" aria-label="Secțiuni Milestone 1">
              <a href="#problema">Problema</a>
              <a href="#solutie">Soluția</a>
              <a href="#piata">Segmentul de clienți</a>
              <a href="#competitia">Competiția</a>
              <a href="#avantaj">Avantajul față de competiție</a>
              <a href="#metricile">Indicatori-cheie</a>
              <a href="#bani">Structura costurilor</a>
              <a href="#venituri">Surse de venit</a>
            </nav>
          </div>
        </div>
      </div>

      {/* PROBLEMA */}
      <section className="content_band" id="problema">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Problema</h2>
          </div>
          <div className="content_panel problem_intro">
            <span className="decorative_shape floating_shape_one" />
            <span className="decorative_shape decorative_orb decorative_orb_one" />
            <p>
              Când ai o problemă în casă, de la o priză defectă până la o renovare
              completă, trebuie să dai bani și acces în locuință unei persoane pe
              care nu o cunoști. Nu ai de unde să știi dacă lucrarea se termină,
              dacă prețul rămâne cel stabilit sau dacă materialele sunt cele
              declarate.
            </p>
          </div>
          <div className="tile_grid problem_grid">
            <div className="content_tile">
              <h3>Pentru clienți</h3>
              <ul>
                <li>
                  <strong>Lipsa de încredere:</strong> anunțurile online sunt o
                  loterie, iar recomandările din cunoștințe sunt limitate.
                </li>
                <li>
                  <strong>Lipsa transparenței:</strong> nu știi dinainte cât
                  costă și cât durează lucrarea.
                </li>
                <li>
                  <strong>Risc financiar:</strong> plata în avans nu are nicio
                  garanție, iar plata cash înseamnă lipsa actelor și a garanției.
                </li>
                <li>
                  <strong>Probleme la renovări:</strong> lucrări prelungite fără
                  explicație, materiale declarate la preț mare și sume cerute în
                  plus pe parcurs.
                </li>
                <li>
                  <strong>Proces fragmentat:</strong> cauți pe un site,
                  negociezi la telefon, plătești în numerar, iar contractul și
                  factura lipsesc.
                </li>
              </ul>
            </div>
            <div className="content_tile">
              <h3>Pentru meșteri</h3>
              <ul>
                <li>Primesc clienți aproape doar din recomandări, deci venitul este imprevizibil.</li>
                <li>Nu au garanția că vor fi plătiți la timp sau integral.</li>
                <li>Un client poate contesta lucrarea, iar meșterul nu are dovezi.</li>
                <li>Nu au o reputație digitală care să dovedească seriozitatea.</li>
              </ul>
            </div>
          </div>
          <div className="content_panel problem_cause">
            <p>
              <strong>Cauza comună</strong>
              <br />
                Lipsa de încredere și lipsa dovezilor
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIA */}
      <section className="content_band light_background" id="solutie">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Soluția</h2>
          </div>
          <div className="content_panel solution_intro">
            <p>
              Găsești un meșter verificat, îl programezi și plătești în
              siguranță, cu acte în regulă, direct din aplicație. Iar dacă este
              vorba despre o renovare, plătești pe etape, doar pentru ce a fost
              terminat.
            </p>
          </div>

          <div className="solution_block">
            <div className="section_header">
              <h3>Nucleul de încredere</h3>
              <p>Siguranță și transparență pentru clienți și meșteri.</p>
            </div>
            <div className="tile_grid">
              <div className="content_tile">
                <h3>Meșteri verificați</h3>
                <p>Identitate, acreditări și istoric, cu un scor mediu de minimum 4/5.</p>
              </div>
              <div className="content_tile">
                <h3>Plată în escrow</h3>
                <p>Banii sunt eliberați meșterului doar după confirmarea lucrării.</p>
              </div>
              <div className="content_tile">
                <h3>Acte și recenzii</h3>
                <p>Contractul și factura se generează automat, iar recenziile sunt transparente.</p>
              </div>
              <div className="content_tile">
                <h3>Dispute soluționate</h3>
                <p>Un sistem de dispute ajută la rezolvarea conflictelor dintre părți.</p>
              </div>
            </div>
          </div>

          <div className="solution_block">
            <div className="section_header">
              <h3>Două moduri de lucru</h3>
            </div>
            <div className="solution_modes">
              <div className="content_tile">
                <h3>Intervenție rapidă</h3>
                <p>Potrivită pentru reparații rapide, precum un robinet, o priză sau montajul unei mobile.</p>
                <ul>
                  <li>Valoare: 100–2.000 lei</li>
                  <li>O singură plată, eliberată după confirmare</li>
                  <li>Confirmare în aplicație și rating</li>
                  <li>Contract standard, generat automat</li>
                  <li>Prețul este tariful din profilul meșterului</li>
                </ul>
              </div>
              <div className="content_tile">
                <h3>Proiect (RenoSafe)</h3>
                <p>Pentru renovări complexe pentru apartamente, băi sau bucătării.</p>
                <ul>
                  <li>Valoare: 5.000–50.000 lei și peste</li>
                  <li>Plată pe etape, cu poze și bonuri pentru materiale</li>
                  <li>Contract cu termene și costuri detaliate</li>
                  <li>Estimare pe baza unor lucrări similare</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="solution_flow">
            <h3>Parcursul utilizatorului</h3>
            <div className="flow_steps">
              <div className="flow_step">
                <span className="flow_number" data-number="1">1</span>
                <strong>Cauți și filtrezi</strong>
                <span>Găsești meșterul potrivit.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="2">2</span>
                <strong>Verifici profilul</strong>
                <span>Compari tarifele și recenziile.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="3">3</span>
                <strong>Programezi lucrarea</strong>
                <span>Alegi data și stabilești detaliile.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="4">4</span>
                <strong>Contract și escrow</strong>
                <span>Semnezi contractul, iar banii sunt blocați în siguranță.</span>
              </div>
              <span className="flow_arrow" aria-hidden="true">⟶</span>
              <div className="flow_step">
                <span className="flow_number" data-number="5">5</span>
                <strong>Confirmi lucrarea</strong>
                <span>Vezi dovezile, confirmi rezultatul, banii sunt eliberați și lași feedback.</span>
              </div>
            </div>
          </div>

          <div className="solution_highlights">
          <div className="solution_highlight innovation_highlight">
              <h3>Inovația</h3>
              <p>
                Nu vindem doar accesul la meșteri, cum fac alte platforme.
                Integrăm tot procesul, de la căutare și verificare până la
                contract, plată, dovezi și feedback, pentru o lucrare mai sigură
                și mai transparentă pentru ambele părți.
              </p>
            </div>
            <div className="solution_highlight">
              <h3>Meșterii cresc în nivel</h3>
              <p>
                Un meșter nou începe cu intervenții rapide. După un număr de
                lucrări bune și un scor de peste 4.0, deblochează modul Proiect.
                Astfel crește calitatea ofertei, iar verificarea devine
                credibilă.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEGMENTUL DE CLIENTI */}
      <section className="content_band" id="piata">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Segmentul de clienți</h2>
            <p>Începem în București și în marile zone urbane, cu disponibilitate națională ulterior.</p>
          </div>
          <div className="market_segments">
            <div className="market_cards">
              <article className="market_card market_card_primary">
                <span className="market_tag">Segment de lansare</span>
                <h3>B2C – persoane fizice</h3>
                <p>Persoane între 20 și 60 de ani, în special 25–45, angajați, freelanceri și familii tinere, cu venituri medii și peste medie.</p>
                <strong>Nevoia principală</strong>
                <p>Meșteri de încredere, plată sigură, acte legale și siguranță la renovări.</p>
              </article>
              <article className="market_card">
                <h3>Furnizori de servicii / meșteri</h3>
                <p>Profesioniști independenți și echipe de 1–5 persoane, cu peste un an de experiență, în mediul urban.</p>
                <strong>Nevoia principală</strong>
                <p>Clienți noi, plată garantată și o reputație online credibilă.</p>
              </article>
              <article className="market_card">
                <span className="market_tag">Etapa 2</span>
                <h3>B2B – afaceri mici și mijlocii</h3>
                <p>Restaurante, cafenele, magazine și birouri; proprietari, manageri sau responsabili de întreținere.</p>
                <strong>Nevoia principală</strong>
                <p>Mentenanță recurentă și intervenții rapide, cu documente.</p>
              </article>
              <article className="market_card">
                <span className="market_tag">Etapa 3</span>
                <h3>B2G – instituții publice</h3>
                <p>Primării, școli și clădiri administrative.</p>
                <strong>Nevoia principală</strong>
                <p>Reparații și întreținere de clădiri, într-un mod transparent.</p>
              </article>
            </div>
            <div className="market_behavior content_tile">
              <h3>Comportament și obiceiuri de consum</h3>
              <ul>
                <li>Caută servicii online și verifică recenziile și ratingurile înainte să angajeze.</li>
                <li>Vor să plătească sigur și să primească documente legale.</li>
                <li>Sunt deschiși la găsire, programare, plată și contract într-o singură aplicație.</li>
                <li>Abordăm diferit utilizatorii potențiali, cei care cunosc produsul, existenți și fideli, prin promoții, notificări, recomandări și abonamente.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* COMPETITIA */}
      <section className="content_band competition_section" id="competitia">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Competiția</h2>
            <p>Nu concurăm doar prin numărul de servicii, ci prin încrederea și siguranța procesului.</p>
          </div>
          <div className="competition_table_wrapper">
            <table className="competition_table">
              <thead>
                <tr>
                  <th>Competitor</th>
                  <th>Tip</th>
                  <th>Ce face bine</th>
                  <th>Spațiu pentru Helping Hands</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>HomeRun</th>
                  <td>Direct</td>
                  <td>Rețea mare, cu peste 30.000 de profesioniști, aproximativ 1.500 de tipuri de servicii și acoperire națională. Cererile sunt distribuite automat prin algoritmi.</td>
                  <td>Acoperirea largă face dificilă garantarea calității fiecărui meșter. Trebuie verificat dacă oferă plată pe etape, dovezi și contract integrat.</td>
                </tr>
                <tr>
                  <th>Artful Living</th>
                  <td>Direct · premium</td>
                  <td>Aplicație pentru servicii premium de întreținere, orientată spre dezvoltatori și administratori de ansambluri rezidențiale.</td>
                  <td>Este o nișă premium, cu un număr mai mic de furnizori, care nu se adresează publicului larg.</td>
                </tr>
                <tr>
                  <th>OLX, grupuri de Facebook, Google Maps</th>
                  <td>Indirect</td>
                  <td>Oferă acces gratuit la mulți meșteri disponibili.</td>
                  <td>Nu oferă verificare, garanții sau acte integrate.</td>
                </tr>
                <tr>
                  <th>Recomandări din cunoștințe</th>
                  <td>Indirect</td>
                  <td>Oferă un nivel ridicat de încredere.</td>
                  <td>Sunt limitate la cercul personal și nu acoperă toate nevoile.</td>
                </tr>
                <tr>
                  <th>Meșteri independenți și firme tradiționale</th>
                  <td>Indirect</td>
                  <td>Au relații consolidate și experiență.</td>
                  <td>Nu au o platformă cu transparență a prețurilor sau a plății.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="competition_conclusion">
            <strong>Concluzie</strong>
            <p>
              Nu concurăm cu numărul de servicii, ci cu încrederea și siguranța
              procesului. HomeRun și alte platforme conectează clientul cu
              meșterul, dar rareori controlează ce se întâmplă după.
            </p>
          </div>
        </div>
      </section>

      {/* AVANTAJUL FATA DE COMPETITIE */}
      <section className="content_band advantage_section" id="avantaj">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Avantajul față de competiție</h2>
            <p>Construim încrederea și siguranța întregului proces.</p>
          </div>
          <div className="advantage_grid">
            <article className="advantage_card">
              <span>01</span>
              <h3>Lanț de încredere complet</h3>
              <p>Căutare, verificare, contract, plată, dovezi și feedback într-o singură aplicație.</p>
            </article>
            <article className="advantage_card">
              <span>02</span>
              <h3>Protecție financiară pentru ambele părți</h3>
              <p>Escrow la intervenții și plată pe etape la renovări: clientul este protejat, iar meșterul știe că banii există.</p>
            </article>
            <article className="advantage_card">
              <span>03</span>
              <h3>Calitate selectată, nu doar volum</h3>
              <p>Acceptăm meșteri verificați, cu un scor minim de 4.0/5, pentru a deveni alegerea sigură.</p>
            </article>
            <article className="advantage_card">
              <span>04</span>
              <h3>Transparența costurilor</h3>
              <p>Contracte clare, bonuri pentru materiale și estimări de preț pentru lucrări similare.</p>
            </article>
            <article className="advantage_card">
              <span>05</span>
              <h3>Conformitate legală</h3>
              <p>Contracte și facturi generate automat, în locul plății la negru.</p>
            </article>
            <article className="advantage_card">
              <span>06</span>
              <h3>Date proprii care cresc în timp</h3>
              <p>Fiecare proiect finalizat îmbunătățește estimările de preț și istoricul meșterilor.</p>
            </article>
            <article className="advantage_card">
              <span>07</span>
              <h3>Retenție naturală</h3>
              <p>Reparațiile mici țin clientul în aplicație, iar la renovare ne alege din nou.</p>
            </article>
            <article className="advantage_card">
              <span>08</span>
              <h3>Costuri reduse</h3>
              <p>Model pe comision și colaboratori externi, fără angajați full-time pentru operare.</p>
            </article>
            <article className="advantage_card">
              <span>09</span>
              <h3>Venituri diversificate</h3>
              <p>Surse de venit din segmentele B2C, B2B și B2G.</p>
            </article>
          </div>
          <div className="advantage_risk">
            <strong>Riscul de recunoscut</strong>
            <p>
              O platformă mare poate copia escrow-ul. Răspunsul nostru este
              viteza de execuție și reputația construită pe un nucleu de meșteri
              verificați.
            </p>
          </div>
        </div>
      </section>

      {/* INDICATORI-CHEIE */}
      <section className="content_band metrics_section" id="metricile">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Indicatori-cheie</h2>
            <p>Măsurăm încrederea, calitatea, creșterea și sustenabilitatea proiectului.</p>
          </div>
          <div className="metrics_table_wrapper">
            <table className="metrics_table">
              <thead>
                <tr>
                  <th>Categorie</th>
                  <th>Indicator</th>
                  <th>Țintă</th>
                </tr>
              </thead>
              <tbody>
                <tr className="metric_category_offer"><th rowSpan="2">Ofertă</th><td>Meșteri verificați în primele 3 luni</td><td>Minimum 50</td></tr>
                <tr className="metric_category_offer"><td>Meșteri acreditați și verificați la finalul anului 2</td><td>90%</td></tr>
                <tr className="metric_category_quality"><th rowSpan="3">Încredere și calitate</th><td>Scor mediu de satisfacție</td><td>Peste 4.0/5</td></tr>
                <tr className="metric_category_quality"><td>Rata de recenzii</td><td>Minimum 60%</td></tr>
                <tr className="metric_category_quality"><td>Lucrări terminate în termenul din contract</td><td>Peste 80%</td></tr>
                <tr className="metric_category_payments"><th rowSpan="3">Plăți</th><td>Tranzacții prin escrow</td><td>Minimum 95%</td></tr>
                <tr className="metric_category_payments"><td>Rata disputelor</td><td>&lt; 5% intervenții · &lt; 10% proiecte</td></tr>
                <tr className="metric_category_payments"><td>Etape confirmate fără dispută</td><td>Peste 90%</td></tr>
                <tr className="metric_category_evidence"><th>Dovezi (modul proiect)</th><td>Etape cu poze și bonuri complete</td><td>100%</td></tr>
                <tr className="metric_category_growth"><th rowSpan="2">Creștere</th><td>Creșterea utilizatorilor activi</td><td>+20% în 12 luni</td></tr>
                <tr className="metric_category_growth"><td>Utilizatori atrași prin parteneriate</td><td>75 în 6 luni</td></tr>
                <tr className="metric_category_loyalty"><th>Fidelitate</th><td>Rata de repetare a clienților și NPS</td><td>NPS peste 40</td></tr>
                <tr className="metric_category_technical"><th rowSpan="2">Tehnic</th><td>Disponibilitatea aplicației</td><td>Minimum 99,5%</td></tr>
                <tr className="metric_category_technical"><td>Incidente majore de securitate</td><td>Zero</td></tr>
                <tr className="metric_category_financial"><th rowSpan="2">Financiar</th><td>Venituri anuale / profit anual</td><td>80.000 lei / 20.000 lei</td></tr>
                <tr className="metric_category_financial"><td>Recuperarea investiției</td><td>2–2,5 ani</td></tr>
              </tbody>
            </table>
          </div>
          <div className="metrics_revenue">
            <h3>Cum se leagă metricile de venituri</h3>
            <p>
              La un comision mediu de 5%, scenariul orientativ estimează circa
              45.000 lei pe an din comisioane B2C.
            </p>
            <ul>
              <li>20 de proiecte de renovare × 20.000 lei = aproximativ 20.000 lei comision.</li>
              <li>1.700 de intervenții × 300 lei = aproximativ 25.000 lei comision.</li>
              <li>Totalul estimat este de aproximativ 45.000 lei anual.</li>
            </ul>
            <p>
              Cu 50 de meșteri verificați, ținta este de aproximativ 3 intervenții
              pe meșter pe lună. Cifrele sunt orientative și se ajustează după
              faza pilot.
            </p>
          </div>
        </div>
      </section>

      {/* STRUCTURA COSTURILOR */}
      <section className="content_band light_background costs_section" id="bani">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Structura costurilor</h2>
            <p>Investiția inițială și costurile necesare pentru funcționarea produsului.</p>
          </div>
          <div className="cost_structure_grid">
            <article className="cost_structure_card">
              <span className="cost_label">Investiția inițială</span>
              <strong className="cost_amount">≈ 40.800 lei</strong>
              <p>
                Costul de pornire este mic și vine mai ales din dezvoltarea
                aplicației (MVP), echipamente și marketingul de lansare.
                Restul sunt costuri de bază: taxe de înființare, hosting și
                licențe, cheltuieli administrative și fond de rulment.
              </p>
              <h3>Finanțare</h3>
              <p>Aportul propriu al asociaților, un grant sau fonduri nerambursabile și capitalul social.</p>
            </article>
            <article className="cost_structure_card">
              <span className="cost_label">Costuri anuale de funcționare</span>
              <strong className="cost_amount">≈ 60.000 lei / an</strong>
              <p>
                Principalele categorii sunt salariile, marketingul și
                publicitatea, hostingul, mentenanța și asistentul AI, serviciile
                externe precum contabilitatea și partea juridică.
              </p>
              <h3>Costuri care apar odată cu creșterea</h3>
              <p>
                Comisionul procesatorului de plăți, stocarea pozelor și bonurilor
                și medierea disputelor.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* SURSE DE VENIT */}
      <section className="content_band light_background revenue_section" id="venituri">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>Surse de venit</h2>
            <p>
              Helping Hands câștigă din tranzacțiile facilitate și din servicii
              pentru meșteri și afaceri, introduse pe măsură ce platforma crește.
            </p>
          </div>
          <div className="revenue_table_wrapper">
            <table className="revenue_table">
              <thead>
                <tr>
                  <th>Sursă</th>
                  <th>Cum funcționează</th>
                  <th>Etapă</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Comision per tranzacție<br />(3–10% din valoarea lucrării)</th>
                  <td>Este reținut din plata prin escrow, la intervenții rapide și proiecte. Procentul este mai mic la proiectele mari, iar la început comisionul este redus pentru atragerea meșterilor.</td>
                  <td>De la lansare</td>
                </tr>
                <tr>
                  <th>Promovare meșteri în aplicație</th>
                  <td>Taxă de listare, upgrade de profil și apariție prioritară.</td>
                  <td>După ce platforma are clienți și istoric</td>
                </tr>
                <tr>
                  <th>Servicii premium</th>
                  <td>Funcții opționale pentru clienți și meșteri, precum intervențiile prioritare.</td>
                  <td>Ulterior</td>
                </tr>
                <tr>
                  <th>Abonamente B2B</th>
                  <td>Contracte recurente pentru afaceri: mentenanță periodică și intervenții rapide.</td>
                  <td>Etapa 2</td>
                </tr>
                <tr>
                  <th>B2G</th>
                  <td>Contracte punctuale sau proiecte pilot cu instituții publice.</td>
                  <td>Etapa 3</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
