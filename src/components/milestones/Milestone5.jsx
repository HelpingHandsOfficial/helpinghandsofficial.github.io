import "./milestones.css";
import "./milestone1.css";
import "./milestone5.css";

function EvidenceImage({ src, alt, caption }) {
  return (
    <figure className="milestone5_figure">
      <img src={`/img/${src}`} alt={alt} loading="lazy" />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function Milestone5() {
  return (
    <div
      className="milestone_page"
      id="milestone5"
      role="tabpanel"
      aria-labelledby="tab-milestone5"
    >
      <div className="milestone_intro">
        <span className="decorative_shape floating_shape_one" />
        <span className="decorative_shape decorative_orb decorative_orb_one" />
        <div className="content_wrapper">
          <div>
            <h3>Milestone 5: Generarea și colectarea de clienți potențiali</h3>
            <nav className="milestone1_navigation" aria-label="Secțiuni Milestone 5">
              <a href="#m5-obiectiv">Obiectiv și colectarea datelor</a>
              <a href="#m5-metrici">Metrici în PostHog</a>
              <a href="#m5-trafic">Date și trafic web</a>
              <a href="#m5-funnel">Analiza funnel-urilor</a>
              <a href="#m5-campanie">Campania de lead-uri</a>
              <a href="#m5-heatmaps">Sesiuni și heatmaps</a>
            </nav>
          </div>
        </div>
      </div>

      <section className="content_band" id="m5-obiectiv">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>1. Obiectiv și arhitectura de colectare a datelor</h2>
          </div>
          <div className="milestone5_text_block">
            <p>
              În cadrul acestui milestone, am integrat platforma de analiză
              PostHog pe Landing Page-ul Helping Hands pentru a măsura interesul
              real al utilizatorilor față de o platformă de servicii tehnice la
              domiciliu. Am optat pentru o abordare minimalistă, potrivită
              etapei incipiente a proiectului:
            </p>
            <ul>
              <li>
                Două butoane de tip Call-to-Action (CTA): „Intră pe listă” (în
                bara de navigare) și „Vreau acces anticipat” (în secțiunea
                principală / Hero), ambele direcționând utilizatorul către
                formularul de înscriere la newsletter-ul de lansare.
              </li>
              <li>
                Scopul măsurătorii: Evaluarea proporției de vizitatori care își
                exprimă intenția concretă de a utiliza aplicația prin lăsarea
                adresei de e-mail.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content_band light_background" id="m5-metrici">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>2. Configurarea metricilor în PostHog (Analytics)</h2>
            <p>
              Pentru a urmări parcursul complet al vizitatorilor fără a complica
              inutil colectarea datelor în această fază, am monitorizat trei
              indicatori esențiali:
            </p>
          </div>
          <ol className="milestone5_numbered_list">
            <li>
              Numărul de utilizatori unici care accesează pagina (Pageview).
            </li>
            <li>
              Interacțiunea cu butoanele CTA care conduc către formularul de
              înscriere (cta_click).
            </li>
            <li>
              Rata de finalizare a formularului, respectiv numărul de
              utilizatori care își trimit efectiv adresa de e-mail
              (waitlist_submit).
            </li>
          </ol>
        </div>
      </section>

      <section className="content_band" id="m5-trafic">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>3. Rezumatul datelor și traficului web</h2>
            <p>
              Analiza datelor din PostHog (filtrate pe domeniul public al
              aplicației) confirmă un interes real și un nivel ridicat de
              implicare din partea vizitatorilor:
            </p>
          </div>
          <ul className="milestone5_detail_list">
            <li>
              <strong>Vizitatori unici și conversii:</strong> Din 186 de
              vizitatori unici înregistrați în funnel-ul de conversie pe GitHub
              Pages, 33 de persoane au finalizat înscrierea pe lista de
              așteptare (waitlist_submit), rezultând o rată totală de conversie
              de 17,74% și un timp median până la conversie de 25 de secunde.
              (Notă: În vizualizarea generală Web Analytics apar 185 de
              vizitatori unici datorită filtrării automate a sesiunilor
              non-umane, iar în Product Analytics apar 188 de utilizatori
              incluzând și sesiunile de testare locale).
            </li>
            <li>
              <strong>Volum și calitate a traficului (Web Analytics):</strong>{" "}
              Cei 185 de vizitatori unici au generat 243 de sesiuni și 309
              vizualizări de pagină.
            </li>
            <li>
              <strong>Engagement:</strong> Durata medie a unei sesiuni a fost de
              1 minut și 32 de secunde, iar rata de respingere (Bounce Rate)
              s-a situat la un nivel scăzut de 42%, ceea ce indică faptul că
              utilizatorii parcurg conținutul paginii.
            </li>
            <li>
              <strong>Dispozitive și proveniență:</strong> Traficul a provenit
              preponderent de pe dispozitive mobile (143 de vizitatori / 249
              vizualizări) față de desktop (43 de vizitatori / 60 vizualizări),
              majoritatea utilizatorilor fiind din România (165 de vizitatori).
            </li>
          </ul>
          <div className="milestone5_gallery milestone5_analytics_gallery">
            <EvidenceImage
              src="statistici1.png"
              alt="Web Analytics Overview cu indicatorii generali de trafic"
              caption="Web Analytics Overview"
            />
            <EvidenceImage
              src="statistici2.png"
              alt="Defalcarea traficului pe dispozitive și țări"
              caption="Defalcarea pe dispozitive/țări"
            />
          </div>
          <div className="milestone5_gallery milestone5_comparison_gallery">
            <EvidenceImage
              src="vizualizari_vs_submit.png"
              alt="Funnel general cu vizitatori GitHub și înscrieri pe lista de așteptare"
              caption="Funnel general"
            />
          </div>
        </div>
      </section>

      <section className="content_band light_background" id="m5-funnel">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>4. Analiza funnel-urilor de conversie și a comportamentului</h2>
            <p>
              Pentru a înțelege exact cum ajung utilizatorii la formular, am
              configurat două scenarii distincte de conversie:
            </p>
          </div>

          <article className="milestone5_funnel_card">
            <h3>
              Scenariul 1: Parcursul complet (indiferent dacă folosesc sau nu
              butoanele CTA)
            </h3>
            <ul>
              <li>Pageview (Accesare pagină): 186 de persoane (100%)</li>
              <li>
                waitlist_section_viewed (Vizualizarea formularului prin scroll):
                103 persoane (55,38% din total; timp median de 13 secunde)
              </li>
              <li>
                waitlist_form_started (Începerea completării câmpului de e-mail):
                38 de persoane (20,43% din total; rată de trecere de 36,89% din
                cei care au văzut formularul)
              </li>
              <li>
                waitlist_submit (Trimiterea e-mailului): 33 de persoane (17,74%
                rată totală de conversie; 86,84% dintre cei care au început
                completarea au și trimis formularul)
              </li>
            </ul>
          </article>
          <div className="milestone5_gallery milestone5_funnel_gallery">
            <EvidenceImage
              src="caz1_funnel.png"
              alt="Funnel Caz 1: parcursul complet până la trimiterea formularului"
              caption="Funnel Caz 1"
            />
          </div>

          <article className="milestone5_funnel_card milestone5_second_funnel">
            <h3>
              Scenariul 2: Parcursul prin apăsarea butoanelor CTA (cta_click)
            </h3>
            <ul>
              <li>Pageview (Accesare pagină): 186 de persoane (100%)</li>
              <li>
                cta_click (Click pe „Intră pe listă” sau „Vreau acces
                anticipat”): 34 de persoane (18,28%)
              </li>
              <li>waitlist_section_viewed: 23 de persoane (12,37%)</li>
              <li>waitlist_form_started: 16 persoane (8,60%)</li>
              <li>
                waitlist_consent_checked (Bifarea acordului GDPR): 13 persoane
                (6,99%)
              </li>
              <li>
                waitlist_submit (Trimiterea e-mailului): 12 persoane (6,45%
                rată de conversie prin acest traseu; timp median de 24 de
                secunde)
              </li>
            </ul>
          </article>
          <div className="milestone5_gallery milestone5_funnel_gallery">
            <EvidenceImage
              src="caz2_funnel.png"
              alt="Funnel Caz 2: parcursul prin apăsarea butoanelor CTA"
              caption="Funnel Caz 2"
            />
          </div>

          <div className="milestone5_comparative_conclusion">
            <strong>Concluzie comparativă:</strong>
            <p>
              Din cele 33 de conversii totale, doar 12 au venit în urma apăsării
              butoanelor CTA, în timp ce 21 de utilizatori au ajuns la formular
              derulând natural pagina (scroll). Acest comportament arată că
              utilizatorii preferă să citească mai întâi informațiile despre
              cum funcționează platforma înainte de a-și lăsa datele de contact.
            </p>
          </div>
        </div>
      </section>

      <section className="content_band" id="m5-campanie">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>5. Campania de generare de lead-uri și lecții învățate</h2>
            <p>
              Promovarea Landing Page-ului s-a realizat organic prin postări
              dedicate pe grupuri de Facebook (ex. „Caut meseriaș!”) și grupuri
              de WhatsApp.
            </p>
          </div>
          <ul className="milestone5_detail_list">
            <li>
              <strong>Limitare identificată:</strong> Deoarece am distribuit
              același URL standard (
              https://helpinghandsofficial.github.io/HelpingHands/) pe toate
              canalele, traficul apare grupat aproape integral ca trafic direct
              ($direct – 181 de vizitatori), fără a putea diferenția exact
              performanța WhatsApp față de Facebook.
            </li>
            <li>
              <strong>Direcție pentru etapa următoare:</strong> Vom utiliza
              linkuri personalizate cu parametri UTM (ex.
              ?utm_source=facebook, ?utm_source=whatsapp) pentru fiecare canal
              și sesiune de promovare, pentru a măsura precis randamentul
              fiecărei surse.
            </li>
          </ul>
          <div className="milestone5_gallery milestone5_promotion_gallery">
            <EvidenceImage
              src="dovada_facebook_form.jpeg"
              alt="Postarea de pe Facebook în grupul Caut meseriaș"
              caption="Postarea de pe Facebook"
            />
            <EvidenceImage
              src="dovada_WhatsApp_form.jpeg"
              alt="Mesajul de promovare distribuit pe WhatsApp"
              caption="Mesajul de pe WhatsApp"
            />
          </div>
        </div>
      </section>

      <section className="content_band light_background" id="m5-heatmaps">
        <div className="content_wrapper">
          <div className="section_header">
            <div className="ornamental_divider" />
            <h2>
              6. Vizualizarea sesiunilor (Session Recordings &amp; Heatmaps)
            </h2>
            <p>
              Analiza înregistrărilor de sesiuni și a hărților de interacțiune
              (Heatmaps, preponderent pe rezoluția de mobil de 375px) a scos la
              iveală câteva comportamente importante de utilizare:
            </p>
          </div>
          <ul className="milestone5_detail_list">
            <li>
              <strong>Preferința pentru explorare prin scroll:</strong>{" "}
              Majoritatea utilizatorilor nu folosesc scurtăturile din butoanele
              CTA de sus, ci parcurg întreaga pagină până la secțiunea finală de
              înscriere.
            </li>
            <li>
              <strong>Intenția de interacțiune cu aplicația:</strong> S-au
              observat numeroase click-uri pe logo-ul Helping Hands și pe
              machetele de telefon (mockup-urile care ilustrează cei 3 pași ai
              aplicației și lista de meșteri), semn că utilizatorii percep
              elementele vizuale ca fiind interactive și își doresc să testeze
              efectiv funcționalitățile platformei.
            </li>
            <li>
              <strong>Zona fierbinte a formularului:</strong> Cele mai intense
              interacțiuni se concentrează pe căsuța de bifare a consimțământului
              și pe butonul portocaliu „Anunță-mă”, confirmând claritatea și
              eficiența secțiunii finale de conversie.
            </li>
          </ul>
          <div className="milestone5_gallery milestone5_heatmap_gallery">
            <EvidenceImage
              src="HeatMap.png"
              alt="Heatmap 1 al landing page-ului pe mobil"
              caption="Heatmap 1"
            />
            <EvidenceImage
              src="HeatMap2.png"
              alt="Heatmap 2 al paginii pe mobil"
              caption="Heatmap 2"
            />
            <EvidenceImage
              src="HeatMap3.png"
              alt="Heatmap 3 al formularului de înscriere pe mobil"
              caption="Heatmap 3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
