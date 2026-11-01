import "./milestones.css";
import "./milestone1.css";
import "./milestone2.css";
import { InterviewCarousel } from "../interview/InterviewCarousel.jsx";
import { interviews } from "../interview/interviewData.jsx";
import {
  problemStats,
  solutionStats,
  strategyStats,
  dataInsightCards,
  clientQuestions,
  craftQuestions,
} from "./milestone2Data.js";

function ExpandableSection({ id, title, children, defaultOpen = false }) {
  return (
    <details className="milestone2_details" id={id} open={defaultOpen}>
      <summary>{title}</summary>
      <div className="milestone2_details_content">{children}</div>
    </details>
  );
}

export function Milestone2() {
  const totalInterviews = interviews.length;

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

            <p>
              Observația de start a fost clară: în majoritatea cazurilor, găsirea unui meseriaș
              pentru o lucrare casnică nu se bazează pe o platformă, ci pe o recomandare din cercul
              apropiat. Asta transformă o nevoie practică într-un proces extrem de nesigur, în care
              clientul trebuie să „parieze” pe cineva fără să poată verifica, înainte de muncă,
              dacă este disponibil, serios și potrivit pentru cerințele sale.
            </p>

            <div className="milestone2_stats_grid">
              {problemStats.map((stat) => (
                <div className="milestone2_stat_card" key={stat.label}>
                  <span className="stat_label">{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <small>{stat.copy}</small>
                </div>
              ))}
            </div>

            <div className="milestone2_nested_section">
              <h3>Ce am observat în interviuri</h3>
              <p>
                Răspunsurile au repetat un model clar: persoanele care au avut deja o recomandare
                din rețea s-au simțit mult mai în siguranță. Cele care nu aveau această recomandare
                au raportat dificultăți la 3 niveluri: găsirea unei persoane disponibile, verificarea
                seriozității acesteia și evaluarea unui preț rezonabil. În același timp, au fost
                menționate frecvent întârzierile, neprezentarea, lucrările nefinalizate și costurile
                suplimentare apărute pe parcurs.
              </p>
              <ul>
                <li>dificultatea de a găsi o persoană disponibilă și serioasă;</li>
                <li>meseriași care nu se prezintă sau întârzie la fața locului;</li>
                <li>lucrări executate necorespunzător sau abandonate;</li>
                <li>costuri suplimentare apărute pe parcursul execuției;</li>
                <li>lipsa unui criteriu clar pentru verificarea reputației și a prețului corect;</li>
                <li>absența documentelor clare și a unei experiențe de încredere.</li>
              </ul>
            </div>

            <div className="milestone2_evidence_grid">
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Citate</span>
                <strong>„Nu s-a prezentat la lucrare”</strong>
                <p>Un simptom recurent care arată lipsa de predictibilitate și de control pentru client.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Citate</span>
                <strong>„A cerut bani în plus”</strong>
                <p>O problemă direct legată de lipsa de transparență și de claritatea prețului inițial.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Citate</span>
                <strong>„Nu am avut un mod clar de a verifica”</strong>
                <p>Rezonanță directă cu nevoia de reputație, feedback și evidență înainte de angajare.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Citate</span>
                <strong>„Mă bazez pe recomandare”</strong>
                <p>Răspunsul evidențiază faptul că încrederea este factorul decisiv în procesul de selecție.</p>
              </div>
            </div>

            <p>
              <strong>Problema identificată:</strong> clienții nu au un canal simplu, transparent și de
              încredere prin care să găsească meseriași disponibili, serioși și potriviți pentru
              cerințele lor. În prezent, procesul de selecție se bazează în mare parte pe recomandări
              informale și pe experiența persoanelor din apropiere, ceea ce creează incertitudine,
              pierdere de timp și risc crescut în momentul începerii unei lucrări.
            </p>
            <p>
              Prin urmare, problema nu este doar disponibilitatea meseriașilor, ci și lipsa unui
              mecanism care să transforme o relație de tip „cunoscut / recomandat” într-un model de
              încredere verificabilă, accesibil și clar pentru toată lumea.
            </p>
          </section>

          <section className="milestone2_section" id="m2-solutia">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Soluția la care ne-am gândit</h2>
            </div>

            <p>
              Soluția noastră a plecat de la o observație esențială: problema nu este doar că
              clienții nu găsesc meseriași, ci că nu au un mod clar, rapid și de încredere de a
              evalua cine merită să se ocupe de o lucrare. În loc să se bazeze doar pe recomandări
              informale și pe intuție, am conceput un produs care transformă selecția într-un
              proces mai transparent, mai structurat și mai predictibil.
            </p>

            <div className="milestone2_stats_grid">
              {solutionStats.map((stat) => (
                <div className="milestone2_stat_card" key={stat.label}>
                  <span className="stat_label">{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <small>{stat.copy}</small>
                </div>
              ))}
            </div>

            <div className="milestone2_nested_section">
              <h3>Ce soluție propunem</h3>
              <p>
                Vrem să construim o platformă care să conecteze clienții cu meseriași dintr-un mod mai
                sigur decât recomandarea informală. Ideea nu este doar să afișeze o listă de profesioniști,
                ci să ofere un cadru de încredere: profil clar, tipuri de lucrări, experiență, disponibilitate,
                prețuri orientative, evaluări și informații relevante despre modul în care este tratat clientul.
              </p>
              <ul>
                <li>căutare rapidă după tip de lucrare și zonă;</li>
                <li>profiluri verificate și prezentabile ale meseriașilor;</li>
                <li>recomandări, feedback și reputație bazată pe experiențe reale;</li>
                <li>informații clare despre prețuri, termene și modalități de plată;</li>
                <li>o experiență de consultare mai sigură, mai predictibilă și mai transparentă.</li>
              </ul>
            </div>

            <div className="milestone2_evidence_grid">
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Pentru client</span>
                <strong>Găsește rapid</strong>
                <p>Nu mai depinde doar de prieteni sau vecini și reduce timpul de căutare pentru o soluție utilă.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Pentru client</span>
                <strong>Verifică înainte</strong>
                <p>Poate compara profesioniști pe baza reputației, disponibilității și calității muncii anterioare.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Pentru meseriaș</span>
                <strong>Devine vizibil</strong>
                <p>Meseriașul are acces la un public mai clar și la o platformă care îi evidențiază experiența și calitatea.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Pentru meseriaș</span>
                <strong>Construiește încredere</strong>
                <p>Evaluările și profilul clar contribuie la profesionalizarea relației cu clientul și la reducerea neîncrederii.</p>
              </div>
            </div>

            <p>
              <strong>În esență, produsul nostru nu este o simplă listă de meseriași.</strong> Este un mecanism de
              construire a încrederii: oferim clientului suficiente informații pentru a lua o decizie mai bună și meseriașului
              o formă mai clară de a-și comunica valoarea și profesionalismul. Asta este diferența dintre un canal de contact și un sistem care reduce riscul și sporește încrederea.
            </p>
          </section>

          <section className="milestone2_section" id="m2-customer-discovery">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Strategia de Customer Discovery</h2>
            </div>

            <p>
              Strategia de Customer Discovery a fost orientată către validarea reală a problemei,
              înainte de a construi soluția. Ne-am dorit să înțelegem nu doar dacă există o nevoie,
              ci și cine o experimentează, în ce contexte apare, ce dificultăți apar în practică și
              ce tip de soluție ar fi considerată valoroasă de utilizatori.
            </p>

            <div className="milestone2_stats_grid">
              {strategyStats.map((stat) => (
                <div className="milestone2_stat_card" key={stat.label}>
                  <span className="stat_label">{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <small>{stat.copy}</small>
                </div>
              ))}
            </div>

            <div className="milestone2_nested_section">
              <h3>Cum am lucrat</h3>
              <p>
                Am ales să intervievăm două categorii de respondenți: clienți care au avut recent nevoie
                de reparații, renovări sau instalații, și meseriași care oferă astfel de servicii. În acest
                fel, am putut compara percepția din ambele părți și putem înțelege dacă problema este
                resimțită în mod similar la nivelul pieței.
              </p>
              <ul>
                <li>identificarea segmentelor relevante și a comportamentelor de căutare;</li>
                <li>contactarea respondenților prin formulare și conversații directe;</li>
                <li>colectarea feedback-ului despre dificultăți, decizii și riscuri reale;</li>
                <li>analiza răspunsurilor pentru a confirma dacă nevoia este validă și dacă produsul are sens.</li>
              </ul>
            </div>

            <div className="milestone2_evidence_grid">
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Observație</span>
                <strong>Recomandarea personală dominatează</strong>
                <p>Majoritatea clienților caută un meseriaș prin rețea, nu prin platforme structurate și verificabile.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Observație</span>
                <strong>Încrederea este criteriul decisiv</strong>
                <p>Clientul nu caută doar un preț bun, ci și o persoană cunoscută, de încredere și verificabilă.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Observație</span>
                <strong>Experiențele negative se repetă</strong>
                <p>Întârziere, neprezentarea, costuri suplimentare și lucrări nefinalizate apar în mod recurent.</p>
              </div>
              <div className="milestone2_evidence_card">
                <span className="evidence_tag">Observație</span>
                <strong>Platformele nu oferă suficientă siguranță</strong>
                <p>Meseriașii sunt greu de evaluat înainte de a începe lucrarea, iar clienții nu au o sursă de încredere.</p>
              </div>
            </div>

            <p>
              <strong>Concluzia strategică:</strong> problema este reală și este repetitivă, iar nevoia nu este doar de a găsi un specialist, ci de a găsi unul cu care există un nivel de încredere verificabil. De aceea, soluția nu poate fi doar un catalog de oferte; trebuie să fie un sistem de validare, reputație și transparență care să reducă riscul înainte de începerea lucrării.
            </p>

          </section>

          <section className="milestone2_section" id="m2-procesul">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Procesul</h2>
            </div>
            <div className="milestone2_process_topics">
              <section className="milestone2_process_topic" id="m2-proces-descriere">
                <h3>Descriere</h3>
                <p>
                  Procesul de Customer Discovery a pornit de la o observație de bază: mulți clienți
                  caută meseriași prin recomandări personale și nu au instrumente clare pentru a
                  verifica, înainte de muncă, seriozitatea și experiența acestora. Am testat dacă
                  această problemă este resimțită în realitate și dacă apare în mod repetat în
                  experiențele persoanelor intervievate.
                </p>
              </section>
              <section className="milestone2_process_topic" id="m2-proces-metode">
                <h3>Tipurile de metode</h3>
                <p>
                  Am folosit o combinație de conversații semi-structurate și formulare cu întrebări
                  direcționate, pentru a obține atât perspective detaliate, cât și răspunsuri
                  comparabile între respondenți. Acest lucru ne-a permis să identificăm modele și
                  nu doar opinii izolate.
                </p>
              </section>
              <section className="milestone2_process_topic" id="m2-proces-date">
                <h3>Colectarea și analiza datelor</h3>
                <p>
                  Datele au fost colectate din experiențe reale și analiza lor a evidențiat o
                  concluzie clară: problema principală este lipsa de transparență și de încredere.
                  Răspunsurile au fost comparate pentru a identifica pattern-uri recurente: dificultatea
                  în găsirea unui specialist disponibil, riscurile asociate lucrărilor și dependența
                  de recomandări personale.
                </p>

                <div className="milestone2_chart_section">
                  <div className="section_header compact_header">
                    <div className="ornamental_divider" />
                    <h3>Analiza tendințelor din date</h3>
                  </div>

                  <div className="milestone2_chart_grid">
                    {dataInsightCards.map((card) => (
                      <div className="milestone2_chart_card" key={card.label}>
                        <div className="chart_topline">
                          <span>{card.label}</span>
                          <strong>{card.value}</strong>
                        </div>
                        <div className="mini_bar"><span style={{ width: card.width }} /></div>
                        <small>{card.description}</small>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="milestone2_nested_section">
                  <h3>Ce înseamnă aceste date pentru produs</h3>
                  <p>
                    Datele arată că problema nu este doar de acces, ci de încredere și de predictibilitate. Rețelele informale funcționează ca un substitut pentru verificare, dar nu elimină incertitudinea. Un produs bun trebuie să transforme recomandarea informală într-un sistem transparent, verificabil și mai sigur din punct de vedere al clientului.
                  </p>
                </div>
              </section>
            </div>

            <div className="milestone2_research">
              <ExpandableSection id="m2-interviuri" title="Interviuri">
                <div className="milestone2_interview_summary">
                  <div className="milestone2_insight_card">
                    <span className="stat_label">Cea mai folosită metodă</span>
                    <strong>Recomandarea personală</strong>
                    <small>Majoritatea respondenților au găsit meseriașul prin familie, prieteni, vecini sau cunoștințe.</small>
                  </div>
                  <div className="milestone2_insight_card">
                    <span className="stat_label">Criteriu decisiv</span>
                    <strong>Încrederea</strong>
                    <small>Clientul a prioritizat recomandarea, experiența și „persoana cunoscută” înainte de preț.</small>
                  </div>
                  <div className="milestone2_insight_card">
                    <span className="stat_label">Problema frecventă</span>
                    <strong>Disponibilitate și seriozitate</strong>
                    <small>Au apărut răspunsuri repetate despre neprezentare, întârzieri și lipsa clarității.</small>
                  </div>
                  <div className="milestone2_insight_card">
                    <span className="stat_label">Risc principal</span>
                    <strong>Costuri și calitate</strong>
                    <small>Au fost menționate costuri suplimentare, lucrări nefinalizate sau calitate necorespunzătoare.</small>
                  </div>
                </div>
                <div className="interview_cards">
                  {['client', 'mester'].map((category) => (
                    <section className="interview_category" key={category}>
                      <h3>{category === 'client' ? 'Clienți' : 'Meșteri'}</h3>
                      <InterviewCarousel
                        interviews={interviews.filter(
                          (interview) => interview.category === category,
                        )}
                      />
                    </section>
                  ))}
                </div>
              </ExpandableSection>
              <ExpandableSection id="m2-chestionare" title="Chestionare și observații">
                <div className="milestone2_stats_grid milestone2_response_stats_grid">
                  <div className="milestone2_stat_card">
                    <span className="stat_label">Răspunsuri clienți</span>
                    <strong>91 de răspunsuri</strong>
                    <small>Răspunsuri colectate din partea clienților.</small>
                  </div>
                  <div className="milestone2_stat_card">
                    <span className="stat_label">Răspunsuri meșteri</span>
                    <strong>3 răspunsuri</strong>
                    <small>Răspunsuri colectate din partea meșterilor.</small>
                  </div>
                </div>

                <div className="milestone2_evidence_links">
                  <h3>Documente de evidență</h3>
                  <div className="milestone2_link_list">
                    <a href="https://docs.google.com/spreadsheets/d/1xrFjettODLjw9GCsgniIA9iwN8Mvhmv-jdEEQ9vYK4Y/edit?usp=sharing" target="_blank" rel="noreferrer">
                      Experiența oamenilor cu meșeriașii
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/19vYa-9kwXB6VUpba0_w9Y9c8r3hKBqgwaKEo5XoXXwA/edit?usp=sharing" target="_blank" rel="noreferrer"> 
                      Experiența meșeriașilor cu oamenii
                    </a>
                    <a href="https://docs.google.com/spreadsheets/d/1yYxdqE8WyEBy8RD0QQ_qBRFqbXbk_195VD4zJFRo6bg/edit?usp=sharing" target="_blank" rel="noreferrer">
                      Experiența oamenilor cu meșeriașii 2
                    </a>
                  </div>
                </div>

                <div className="milestone2_quote_wall">
                  <blockquote>
                    “Am găsit meseriașul prin recomandarea vecinilor, dar nu am avut niciun mod clar de a verifica dacă este disponibil și de încredere.”
                  </blockquote>
                  <blockquote>
                    “A promis că vine și nu a mai apărut. A fost frustrant și neclar din punct de vedere al încrederii.”
                  </blockquote>
                  <blockquote>
                    “Am avut nevoie de mai multe oferte și de recomandări, deoarece nu există o sursă sigură din care să verifici meseriașul.”
                  </blockquote>
                </div>

                <div className="milestone2_findings">
                  <h3>Modele recurente observate în răspunsuri</h3>
                  <ul>
                    <li>Recomandarea personală este încă principalul canal de achiziție, chiar și atunci când clientul are nevoie de un meseriaș nou.</li>
                    <li>Clienții se simt mult mai în siguranță atunci când știu că persoana a fost recomandată de cineva apropiat.</li>
                    <li>Problemele cele mai frecvente sunt lipsa disponibilității, întârzierile, adăugarea de costuri suplimentare și lucrările executate necorespunzător.</li>
                    <li>Majoritatea persoanelor nu au o metodă clară de verificare a prețului corect, decât prin comparație cu recomandări sau discuții informale.</li>
                    <li>Chiar și atunci când au folosit online, experiența a fost variabilă; multe persoane se întorc la recomandări și la cercul apropiat.</li>
                  </ul>
                </div>

                <div className="milestone2_evidence_grid">
                  <div className="milestone2_evidence_card">
                    <span className="evidence_tag">Citate</span>
                    <strong>„Nu s-a prezentat la lucrare”</strong>
                    <p>Acest tip de răspuns apare în mai multe formulare și indică o lipsă de predictibilitate și siguranță.</p>
                  </div>
                  <div className="milestone2_evidence_card">
                    <span className="evidence_tag">Citate</span>
                    <strong>„A cerut bani în plus”</strong>
                    <p>Reprezintă o problemă clară de transparență și gestionare a așteptărilor la începutul lucrării.</p>
                  </div>
                  <div className="milestone2_evidence_card">
                    <span className="evidence_tag">Citate</span>
                    <strong>„Am fost nevoită să caut altcineva”</strong>
                    <p>Experiențele negative afectează încrederea și cresc timpul și stresul pentru client.</p>
                  </div>
                  <div className="milestone2_evidence_card">
                    <span className="evidence_tag">Citate</span>
                    <strong>„Mă consult cu cunoscuții”</strong>
                    <p>Răspunsurile sugerează că verificarea „la nivel de rețea” rămâne principala metodă de evaluare.</p>
                  </div>
                </div>

                <div className="questionnaire_placeholder">
                  <div className="milestone2_stats_grid">
                    <div className="milestone2_stat_card">
                      <span className="stat_label">Canal principal</span>
                      <strong>Recomandare personală</strong>
                      <small>Majoritatea respondenților au găsit meseriașul prin familie, vecini sau prieteni.</small>
                    </div>
                    <div className="milestone2_stat_card">
                      <span className="stat_label">Factor decisiv</span>
                      <strong>Încredere</strong>
                      <small>Clientul are nevoie de siguranță că persoana este disponibilă, serioasă și competentă.</small>
                    </div>
                    <div className="milestone2_stat_card">
                      <span className="stat_label">Problemă repetată</span>
                      <strong>Disponibilitate</strong>
                      <small>Mulți respondenți au raportat dificultăți în găsirea unui specialist disponibil la timp.</small>
                    </div>
                    <div className="milestone2_stat_card">
                      <span className="stat_label">Risc principal</span>
                      <strong>Transparență redusă</strong>
                      <small>Fără recomandare clară, clientul nu poate verifica calitatea și onestitatea prestării.</small>
                    </div>
                  </div>

                  <div className="milestone2_question_block">
                    <h3>Întrebări cheie folosite în interviuri</h3>
                    <div className="milestone2_question_columns">
                      <div>
                        <h4>Pentru clienți</h4>
                        <ul>
                          {clientQuestions.map((question) => (
                            <li key={question}>{question}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4>Pentru meseriași</h4>
                        <ul>
                          {craftQuestions.map((question) => (
                            <li key={question}>{question}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                </div>
              </ExpandableSection>
            </div>

            <div className="milestone2_process_topic" id="m2-probleme-identificate">
              <h3>Problemele identificate</h3>
              <ul>
                <li>clienții nu au suficiente informații pentru a verifica un meseriaș înainte de a-l angaja;</li>
                <li>recomandările personale sunt încă principalul mecanism de încredere;</li>
                <li>lipsa unui sistem transparent generează riscuri legate de calitate, preț și termene;</li>
                <li>meseriașii și clienții au nevoie de un canal mai clar de comunicare și de verificare.</li>
              </ul>
            </div>
          </section>

          <section className="milestone2_section" id="m2-impact-insight-uri">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Impactul insight-urilor asupra produsului</h2>
            </div>
            <p>
              Aceste insight-uri au influențat direct direcția produsului. În loc să ne concentrăm
              doar pe crearea unei liste de contacte, am înțeles că nevoia esențială este de
              transparență și securitate. Astfel, produsul trebuie să ajute clienții să compare,
              să verifice și să aleagă în condiții de încredere, nu doar să găsească un nume.
            </p>
            <p>
              Prin urmare, am orientat ideea noastră către un produs care reduce incertitudinea,
              oferă informații relevante despre meseriași și sprijină decizia clientului într-un
              mod mai clar și mai sigur.
            </p>
          </section>

          <section className="milestone2_section milestone2_conclusion" id="m2-concluzie">
            <div className="section_header">
              <div className="ornamental_divider" />
              <h2>Concluzie</h2>
            </div>
            <h3>Suntem pregătiți pentru etapa de Customer Validation?</h3>
            <p>
              Da, considerăm că suntem pregătiți să trecem la etapa de Customer Validation,
              deoarece problema a fost identificată și validată din experiențele reale ale
              utilizatorilor. Răspunsurile colectate au confirmat că nevoia este reală, recurentă
              și relevantă, iar produsul nostru este construit pe baza unei observații concrete,
              nu pe o presupunere izolată.
            </p>
            <p>
              Totuși, este important să testăm și dacă soluția este percepută ca utilă și dacă
              clienții sunt dispuși să o folosească sau să o plătească. Doar în acest fel putem
              confirma dacă modelul nostru are potențial real pe piață.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
