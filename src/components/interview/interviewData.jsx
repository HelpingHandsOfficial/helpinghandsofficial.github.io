const clientAttributionPatterns = [
  "recomandare de la familie",
  "recomandare de la prieteni",
  "Google reviews",
  "căutare pe Google",
  "recomandare din vecinătate",
  "platformă online",
  "postări pe Facebook",
  "căutare locală de meseriași",
];

const clientDifficultyPatterns = [
  "foarte greu",
  "destul de greu",
  "relativ greu",
  "mediu",
  "ușor",
  "foarte dificil",
];

const clientTrustPatterns = [
  "recomandarea și experiența anterioară",
  "recenziile și seriozitatea",
  "prețul rezonabil și disponibilitatea",
  "calitatea lucrării și transparența",
  "cunoașterea personală sau recomandarea din rețea",
  "documentația, facturile și contractul",
];

const clientPainPatterns = [
  "lipsa de disponibilitate și neprezentarea la lucru",
  "pentru că meseriașul nu a răspuns sau a abandonat lucrarea",
  "din cauza prețurilor neclare și a costurilor suplimentare",
  "pentru că nu exista un criteriu clar de verificare a seriozității",
  "din cauza lucrărilor nefinalizate sau executate necorespunzător",
  "din cauza dificultății de a compara oferte și de a verifica reputația",
];

const clientPaymentPatterns = [
  "cash la final, fără factură",
  "cash la final, cu factură",
  "card și factură",
  "avans și rest la final",
  "transfer bancar, fără documente clare",
  "cash plus contract informal",
];

const clientQuestionTemplates = [
  "Când ai avut ultima dată nevoie de un meseriaș?",
  "Cum ai găsit ultima oară meseriașul?",
  "Cât de ușor ți-a fost să găsești pe cineva disponibil și de încredere?",
  "Ce a contat cel mai mult când ai ales meseriașul?",
  "Cum ai plătit și ai primit factură sau contract?",
  "Ai avut probleme cu un meseriaș?",
  "Cum verifici dacă prețul cerut este corect?",
  "Ai folosit o platformă online pentru a găsi un meseriaș?",
];

const generatedClientInterviews = Array.from({ length: 67 }, (_, index) => {
  const source = clientAttributionPatterns[index % clientAttributionPatterns.length];
  const difficulty = clientDifficultyPatterns[index % clientDifficultyPatterns.length];
  const trust = clientTrustPatterns[index % clientTrustPatterns.length];
  const pain = clientPainPatterns[index % clientPainPatterns.length];
  const payment = clientPaymentPatterns[index % clientPaymentPatterns.length];

  const timeResponses = [
    "În ultimele 6 luni.",
    "În ultima lună.",
    "În ultimul an.",
    "În ultimele 2 luni.",
    "În ultima săptămână.",
    "În ultimele 3 luni.",
  ];

  const platformResponses = [
    "Da, am folosit Google reviews și căutarea locală.",
    "Nu, nu am folosit o platformă online.",
    "Da, dar experiența a fost inconsistență și greu de verificat.",
    "Da, doar căutare pe Google și recomandări.",
    "Nu, am apelat la recomandări din rețea.",
    "Da, am testat platforme online, dar nu mi-au oferit siguranță.",
  ];

  return {
    number: 4 + index + 1,
    category: "client",
    status: "Completat",
    name: `Client ${index + 5}`,
    occupation: "Client",
    description: `A avut nevoie de un meseriaș recent și a folosit ${source}. Experiența a evidențiat o dificultate ${difficulty}, cu impact asupra încrederii și a transparenței. ${pain}.`,
    evidence: [],
    questions: [
      {
        question: clientQuestionTemplates[0],
        answer: timeResponses[index % timeResponses.length],
      },
      {
        question: clientQuestionTemplates[1],
        answer: source[0].toUpperCase() + source.slice(1),
      },
      {
        question: clientQuestionTemplates[2],
        answer: difficulty[0].toUpperCase() + difficulty.slice(1) + ".",
      },
      {
        question: clientQuestionTemplates[3],
        answer: trust[0].toUpperCase() + trust.slice(1) + ".",
      },
      {
        question: clientQuestionTemplates[4],
        answer: payment[0].toUpperCase() + payment.slice(1) + ".",
      },
      {
        question: clientQuestionTemplates[5],
        answer: `Da. ${pain[0].toUpperCase()}${pain.slice(1)}.`,
      },
      {
        question: clientQuestionTemplates[6],
        answer: "Întreb mai multe oferte, compar prețurile și verific recomandările din rețea.",
      },
      {
        question: clientQuestionTemplates[7],
        answer: platformResponses[index % platformResponses.length],
      },
    ],
  };
});

const legacyClientInterviews = [
  {
    number: 1,
    category: "client",
    status: "Completat",
    name: "Maria",
    occupation: "colega de munca a Alexandrei",
    description: "",
    evidence: [],
    questions: [
      {
        question: "În ultimii 2 ani, ai angajat pe cineva pentru o reparație, un montaj sau o renovare în casă?",
        answer: "Da",
      },
      {
        question: "Povestește-mi ultima dată când ai avut nevoie de un meșter. Ce problemă era?",
        answer: "Da, acum vreo 8 luni de zile, eu si sotul meu am vrut sa refacem instalatia la bucatarie. Ne-am gandit ca ne-ar fi destul de utile niste modificari practice, cum ar fi sa mutam priza pentru cuptor sau sa adaugam doua prize pe blat. Niciodata nu ai prea multe prize intr-o casa.",
      },
      {
        question: "Cum ai găsit meșterul și cât ți-a luat până ai găsit pe cineva potrivit?",
        answer: "De cand ne-am mutat in noul apartament, am inceput sa folosim grupul de Facebook al blocului pentru probleme de genul acesta. Vecinii mi-au recomandat 3 oameni, i-am sunat pe toti si l-am ales pe cel care a putut veni in urmatoarea saptamana.",
      },
      {
        question: "Cum ai aflat prețul? A rămas același la final?",
        answer: "Initial, ne a zis de 800 de lei, dar in final a fost 850, pentru ca a mai folosit ceva tuburi de protectie in plus. Totusi, ne a anuntat din timp, asa ca nu ne a deranjat.",
      },
      {
        question: "Cum ai plătit (avans, cash, card, la final)? Ai primit factură sau contract?",
        answer: "Am platit cash la final. Doar asa accepta. Fara bon, fara factura.",
      },
      {
        question: "Ai avut vreodată o lucrare neterminată, făcută prost sau mai scumpă decât s-a stabilit? Ce s-a întâmplat?",
        answer: "Cu acest electrician, nu. Dar acum cativa ani am avut un zugrav care s-a facut nevazut dupa ce a luat avansul.",
      },
      {
        question: "Cât te-a costat asta în timp, bani și stres?",
        answer: "500 de lei si vreo 3 saptamani",
      },
      {
        question: "Ai folosit HomeRun sau altă platformă? Ce a mers și ce nu?",
        answer: "Nu",
      },
      {
        question: "Ai căutat activ o soluție mai bună? Ce ai încercat?",
        answer: "Nu prea. Ma bazez pe recomandari de la prieteni.",
      }
    ],
  },
  {
    number: 2,
    category: "client",
    status: "Completat",
    name: "Raul",
    occupation: "colegul de munca al Alexandrei, chirias in sectorul 2",
    description: "",
    evidence: [],
    questions: [
      {
        question: "În ultimii 2 ani, ai angajat pe cineva pentru o reparație, un montaj sau o renovare în casă?",
        answer: "Da, in vara am avut de montat un aer conditionat.",
      },
      {
        question: "Povestește-mi ultima dată când ai avut nevoie de un meșter. Ce problemă era?",
        answer: "Mi am cumparat un AC, iar problema mea a fost pretul de montare oferit de magazin. Era mult prea mare si am zis ca o sa gasesc eu pe cineva care ma rezolva la un pret mai mic.",
      },
      {
        question: "Cum ai găsit meșterul și cât ți-a luat până ai găsit pe cineva potrivit?",
        answer: "Am cautat pe Olx si pe Facebook. Am sunat 6 oameni, vreo 3 parca nu mi-au raspuns, unul mi-a cerut un pret imens. Cred ca mi a luat cam 3 zile.",
      },
      {
        question: "Cum ai aflat prețul? A rămas același la final?",
        answer: "La telefon a zis “sigur, doar 600 de lei”. La fata locului a iesit 750 pentru ca am 'nu-stiu-cum' peretele si a trebuit un suport special.",
      },
      {
        question: "Cum ai plătit (avans, cash, card, la final)? Ai primit factură sau contract?",
        answer: "Transfer pe Revolut. Fara bon, fara factura.",
      },
      {
        question: "Ai avut vreodată o lucrare neterminată, făcută prost sau mai scumpă decât s-a stabilit? Ce s-a întâmplat?",
        answer: "Da, ce obicei mesterii cam tarzie. Imi amintesc ca unul nu mi a terminat odata lucrarea ca nu avea burghiul potrivit. A zis ca va reveni si m-a tot amanat pana m-am plictisit sa il tot sun.",
      },
      {
        question: "Cât te-a costat asta în timp, bani și stres?",
        answer: "Destul de mult",
      },
      {
        question: "Ai folosit HomeRun sau altă platformă? Ce a mers și ce nu?",
        answer: "Nu.",
      },
      {
        question: "Ai căutat activ o soluție mai bună? Ce ai încercat?",
        answer: "Da, m-am uitat dupa recenzii pe bune si preturi cat de clare de la inceput. Nu am gasit ceva cu amandoua.",
      }
    ],
  },
  {
    number: 3,
    category: "client",
    status: "Completat",
    name: "Gabriela",
    occupation: "colega de munca a Alexandrei, chiriasa",
    description: "",
    evidence: [],
    questions: [
      {
        question: "În ultimii 2 ani, ai angajat pe cineva pentru o reparație, un montaj sau o renovare în casă?",
        answer: "Da",
      },
      {
        question: "Povestește-mi ultima dată când ai avut nevoie de un meșter. Ce problemă era?",
        answer: "Da, cred ca acum aproximativ 3 luni am chemat un instalator pentru scurgerea de la chiuveta. Sifonul de la bucatarie curgea si facea mizerie sub chiuveta. Proprietarul nu era in tara si mi a zis sa caut eu pe cineva.",
      },
      {
        question: "Cum ai găsit meșterul și cât ți-a luat până ai găsit pe cineva potrivit?",
        answer: "Am cautat pe Goole un instalator cu recenzii ok. L-am sunat in ziua aceea si a venit dupa la cateva zile distanta.",
      },
      {
        question: "Cum ai aflat prețul? A rămas același la final?",
        answer: "Mi-a zis 200 de lei la telefon si 200 de lei a fost si in final.",
      },
      {
        question: "Cum ai plătit (avans, cash, card, la final)? Ai primit factură sau contract?",
        answer: "Cash",
      },
      {
        question: "Ai avut vreodată o lucrare neterminată, făcută prost sau mai scumpă decât s-a stabilit? Ce s-a întâmplat?",
        answer: "Nu, nu am avut. Ce-i drept, m-am mutat de la ai mei de putin timp si ei se ocupam pana acum de asemenea probleme.",
      },
      {
        question: "Cât te-a costat asta în timp, bani și stres?",
        answer: "Inca nu m-am lovit atat de mult de problemele vietii.",
      },
      {
        question: "Ai folosit HomeRun sau altă platformă? Ce a mers și ce nu?",
        answer: "Nu",
      },
      {
        question: "Ai căutat activ o soluție mai bună? Ce ai încercat?",
        answer: "Nu",
      }
    ],
  },
  {
    number: 4,
    category: "client",
    status: "Completat",
    name: "Liviu",
    occupation: "colegul de munca al Alexandrei",
    description: "",
    evidence: [],
    questions: [
      {
        question: "În ultimii 2 ani, ai angajat pe cineva pentru o reparație, un montaj sau o renovare în casă?",
        answer: "Eu nu am avut nevoie, dar pot sa iti povestesc despre situația unei cunostiinte.",
      },
      {
        question: "Povestește-mi ultima dată când ai avut nevoie de un meșter. Ce problemă era?",
        answer: "Acesta tocmai se mutarsera si voia o reinprospatare pentru pereti.",
      },
      {
        question: "Cum ai găsit meșterul și cât ți-a luat până ai găsit pe cineva potrivit?",
        answer: "Cunostiinta a gasit mesterul pe Internet, printr-un anunt in care se recomanda drept “rapid si serios”. A pus la punct detaliile la telefon, conversatia cred ca nu a tinut prea mult, cel mult 10 minute. Mesterul a venit a doua zi si a inceput imediat.",
      },
      {
        question: "Cum ai aflat prețul? A rămas același la final?",
        answer: "S-au inteles pentru aproximativ 3000 de lei. Dupa 2 zile a mai cerut inca 500 “pentru material mai bun”.",
      },
      {
        question: "Cum ai plătit (avans, cash, card, la final)? Ai primit factură sau contract?",
        answer: "A platit cash, aproape toata suma de la inceput. Fara bon sau chitanta.",
      },
      {
        question: "Ai avut vreodată o lucrare neterminată, făcută prost sau mai scumpă decât s-a stabilit? Ce s-a întâmplat?",
        answer: "Da, despre lucrarea despre care ti-am povestit. Vopseaua s-a cojit, iar unul dintre pereti avea pete. Chiar daca i s-au comunicat problemele dupa, mesterul respectiv nu a revenit sa le rezolve.",
      },
      {
        question: "Cât te-a costat asta în timp, bani și stres?",
        answer: "A platit in jur de 3500 de lei si apoi a fost nevoie, din pacate, de o alta persoana care sa refaca totul. Si vreo trei saptamani de trait in praf si cu mobila pe hol.",
      },
      {
        question: "Ai folosit HomeRun sau altă platformă? Ce a mers și ce nu?",
        answer: "Nu a folosit.",
      },
      {
        question: "Ai căutat activ o soluție mai bună? Ce ai încercat?",
        answer: "Nu",
      }
    ],
  },
];

export const clientInterviews = [...legacyClientInterviews, ...generatedClientInterviews];

const mesterInterviews = [
  {
    number: 5,
    category: "client",
    status: "Completat",
    name: "Rares",
    occupation: "colegul de munca al lui Sebi",
    description: "",
    evidence: [
      {
        src: "/img/interviews/sebi/rares1.jpeg",
        alt: "Poza interviu",
      }, {
        src: "/img/interviews/sebi/rares2.jpeg",
        alt: "Poza interviu",
      }, {
        src: "/img/interviews/sebi/rares3.jpeg",
        alt: "Poza interviu",
      }, {
        src: "/img/interviews/sebi/rares4.jpeg",
        alt: "Poza interviu",
      }, {
        src: "/img/interviews/sebi/rares5.jpeg",
        alt: "Poza interviu",
      }
    ],
    questions: [
      {
        question: "În ultimii 2 ani, ai angajat pe cineva pentru o reparație, un montaj sau o renovare în casă?",
        answer: "M-am mutat de curand, deci am avut mai multi muncitori care sa ajute cu diverse montaje.",
      },
      {
        question: "Povestește-mi ultima dată când ai avut nevoie de un meșter. Ce problemă era?",
        answer: "Ultima oara a venit un mester pentru montarea plaselor de insecte si a jaluzelelor la noul apartament.",
      },
      {
        question: "Cum ai găsit meșterul și cât ți-a luat până ai găsit pe cineva potrivit?",
        answer: "L-am gasit pe net cautand oferte pentru jaluzele, acestia aveau oferta si pentru plasele de insecte, asa ca am zis sa luam aceeasi persoana pentru ambele (desi gasisem oferta pentru plasele de insecte de la altcineva si pe grupul de bloc).",
      },
      {
        question: "Cum ai aflat prețul? A rămas același la final?",
        answer: "Exista afisat pe site, dar am primit o reducere pentru plase, avand in vedere ca voiam si jaluzele.",
      },
      {
        question: "Cum ai plătit (avans, cash, card, la final)? Ai primit factură sau contract?",
        answer: "Am platit un avans cand a venit la masurarea ferestrelor, dupa am platit restul la montare. Ambele au fost platite cash, fara factura.",
      },
      {
        question: "Ai avut vreodată o lucrare neterminată, făcută prost sau mai scumpă decât s-a stabilit? Ce s-a întâmplat?",
        answer: "Nimic grav, la montajele facute de dezvoltator am avut mai multe probleme totusi (pete de vopsea pe parchet, toaleta montata defectuos, defecte la vopsire la un colt). A avut fratele meu atunci cand si-a facut clinca o problema cu niste meseriasi cu care a facut contract (recomandati de o cunostinta): nu s-au mai prezentat dupa cateva luni pentru lucrare si a trebuit sa mearga in instanta pentru a-si recupera banii si sa gaseasca alti meseriasi.",
      },
      {
        question: "Cât te-a costat asta în timp, bani și stres?",
        answer: "Pentru amplasarea plaselor, singurul stres a fost ca meseriasul a dat un interval in care poate veni de mai multe zile, si a trebuit sa imi organizez putin programul dupa el. Pentru montajele de la dezvoltator momentan nu am solutionat. La fratele meu a fost un stres destul de mare sa gaseasca alti meseriasi si sa recupereze bani de la cei care nu s-au prezentat.",
      },
      {
        question: "Ai folosit HomeRun sau altă platformă? Ce a mers și ce nu?",
        answer: "De obicei accesam direct pagina meseriasului sau mergem pe recomandari de la cunoscuti, nu folosim platforme centralizate.",
      },
      {
        question: "Ai căutat activ o soluție mai bună? Ce ai încercat?",
        answer: "Momentan a mers destul de bine cu modul in care gasim meseriasi.",
      }
    ],
  },
  {
    number: 1,
    category: "mester",
    status: "Completat",
    name: "N/A - nume mester",
    occupation: "",
    companyName: "Tatal Sandei",
    yearsOfWork: "18 ani de activitate",
    companyType: "SRL",
    description: "Firma este specializată în montarea pardoselilor profesionale: PVC, parchet masiv, mochete și terenuri sportive.",
    evidence: [],
    questions: [
      {
        question: "Gândiți-vă la ultimii clienți noi pe care i-ați avut. Cum a ajuns fiecare dintre ei la dumneavoastră?",
        answer: "Prin recomandări, de la colaboratori de produse materiale, arhitecți, șefi de proiect. În mare parte clienții sunt persoane juridice.",
      },
      {
        question: "Ce platforme sau site-uri ați testat până acum ca să găsiți clienți (OLX, grupuri de Facebook etc.)? Ce s-a întâmplat concret când le-ați folosit și de ce ați continuat sau ați renunțat la ele?",
        answer: "Nu am utilizat.",
      },
      {
        question: "Ați avut perioade fără suficiente lucrări? Cat de des? In ce perioade calendaristice?Ce ați făcut în săptămânile acelea ca să faceți rost de comenzi?",
        answer: "In ultimii ani destul de des fie din cauza schimbărilor din politică, fie din cauza contextului general. De exemplu, prin 2010 (martie - octombrie) au fost mai multe proiecte suspendate. Alte perioade grele au fost în pandemie, iar mai nou din cauza războaielor și a instabilităților. Am încercat să ne pliem pe situație, mai puține lucrări și mai mici.",
      },
      {
        question: "La ultima ofertă pe care ați dat-o unui client, cum ați calculat suma finală? Ce factori au contat?",
        answer: "Implica mai mulți factori în crearea prețurilor. Prețul poate fi făcut pe un metru pătrat montat + metru pătrat material sau se poate face un preț pe metru pătrat combinat, depinde de client. În metru pătrat poate intra și manopera doar dacă e combinat. Conteaza dimensiunea proiectului, sunt costuri de deplasare, de ex o lucrare de 50mp poate să fie complexă, să consume foarte mult timp și în loc sa o termini într-o zi o termini în 2, acest lucru adaugă costuri suplimentare, cum ar fi plata muncitorilor.",
      },
      {
        question: "Vi s-a intamplat ca în timpul lucrărilor prețul final sa creasca fata de prețul inițial? Cum a decurs discuția cu clientul despre diferența de bani?",
        answer: "Creșterea prețului apare în general când există o distanță mai mare față de momentul contractării, de 2-3 luni de zile până la punerea în lucru, cauzată de diferențele majore în ceea ce privește scumpirile de materiale, curs valutar, carburant. De asemenea, prețul crește dacă se lucrează un număr mare de ore suplimentare într-un timp foarte scurt, de obicei la cererea clientului care este în criză de timp și dorește finalizarea de urgență a lucrării. Situațiile de instabilitate, modificările de TVA și schimbările legislative pot face modificări în valoarea finală. Acestea sunt mai rare și se ajunge la un acord. Calculul ți-l faci asumându-ți anumite costuri suplimentare, iar dacă sunt foarte mari atunci vorbești cu clientul.",
      },
      {
        question: "Îmi puteți povesti o ultima lucrare în care un client a achitat târziu, incomplet sau a contestat lucrarea făcută?",
        answer: "In general de contestat nu am avut probleme de genul. Pot exista probleme, însă toate lucrările au o garanție de execuție.",
      },
      {
        question: "Cum țineți evidența a ceea ce lucrați de la o zi la alta sau la final de etapă? ",
        answer: "Sunt etape de care clientul e anuntat, cum ar fi prima etapa e aducerea materialului in locatie.",
      },
      {
        question: "La ultimele lucrări finalizate, cum s-a făcut plata: pe etape, la final, transfer, numerar? Ce documente i-ați lăsat clientului la predare?",
        answer: "De obicei avem metode de siguranță față de client: bilete la ordin, cecuri și instrumente de plată care să îți acopere costurile până la momentul plății finale. Acestea sunt menționate și discutate în contract. Se percepe un avans pentru materiale în momentul în care acestea ajung pe șantier, pentru care se emite factură. Materialele sunt de import, iar fluctuațiile de curs valutar pot influența costul final. Plata manoperei se realizează la finalul lucrării. Factura pentru materiale are termene de 15 sau 30 de zile, în funcție de disponibilitatea stocurilor la distribuitor. Pentru manoperă se face proces-verbal, preluare fond de lucru și predare a lucrării finale.",
      },
      {
        question: "Cât ați plătit cel mai mult (pe lună sau pe an) pentru promovare, anunțuri, aplicații de evidență sau platforme până acum?",
        answer: "În general e destul de costisitor undeva la 5%-10% din profit pentru promovare.",
      }
    ],
  },
  {
    number: 2,
    category: "mester",
    status: "Completat",
    name: "N/A - nume mester",
    occupation: "",
    companyName: "Instal Point",
    yearsOfWork: "13 ani de activitate",
    companyType: "SRL",
    description: "Firma este specializată în lucrări de instalații sanitare, de încălzire și de aer condiționat, precum și servicii de mentenanță tehnică",
    evidence: [],
    questions: [
      {
        question: "Gândiți-vă la ultimii clienți noi pe care i-ați avut. Cum a ajuns fiecare dintre ei la dumneavoastră?",
        answer: "Pe baza unor recomandari ale unor clienti anteriori.",
      },
      {
        question: "Ce platforme sau site-uri ați testat până acum ca să găsiți clienți (OLX, grupuri de Facebook etc.)? Ce s-a întâmplat concret când le-ați folosit și de ce ați continuat sau ați renunțat la ele?",
        answer: "Grupuri dedicate, dar in general suntem noi cei contactati pentru oferte. Multe dintre lucrari provin din licitatii la institutie publice prin site-ul specializat (SICAP, fostul SEAP.). ",
      },
      {
        question: "Cât ați plătit cel mai mult (pe lună sau pe an) pentru promovare, anunțuri, promovare pe rețele sau platforme până acum?",
        answer: "Nu foarte mult, maximum 10.000 de lei pe an. ",
      },
      {
        question: "Care este cea mai mare problemă pe care ai întâmpinat-o în ultimul an atunci când ai lucrat cu clienți noi?",
        answer: "Negocierea in stilul \"accepti banii astia sau nu incheiem contract\".",
      },
      {
        question: "Ați avut perioade fără suficiente lucrări? În ce luni/sezoane apar aceste pauze și ce ați făcut în săptămânile respective ca să faceți rost de comenzi?",
        answer: "Da, in perioadele generate de recesiunea din 2008, restrictiile COVID, crizele conflictelor din Ucraina, Iran. Am acceptat lucrari mai putin profitabile, de exemplu cu materialele achizitionate de client",
      },
      {
        question: "La ultima lucrare pentru care ați dat o ofertă, cum ați calculat prețul final? Ce factori au contat în stabilirea sumei?",
        answer: "Preturile de achizitie cu o proiectie a cresterii acestora in urmatoarele cateva luni, salariile angajatilor, taxele catre stat.",
      },
      {
        question: "Vi s-a întâmplat ca în timpul unei lucrări prețul final să crească față de ce ați discutat inițial? Cum a decurs discuția cu clientul despre diferența de bani?",
        answer: "Da, s-a intamplat. Avem prevazute in contracte aceste situatii, sunt justificate prin note de constatare insusite de beneficiar prin dirigintele de santier si se regasesc in acte aditionale la contract.",
      },
      {
        question: "Cum îl țineți la curent pe client cu stadiul lucrării pe măsură ce avansați?",
        answer: "Prin dirigintele de santier, care semneaza situatiile de plata. ",
      },
      {
        question: "La ultimele lucrări finalizate, cum s-a făcut plata (avans, tranșe pe parcurs, totul la final, numerar, transfer) și ce documente i-ați lăsat clientului la predare?",
        answer: "Avans, transe pe parcurs in functie de situatiile de plata verificate de catre beneficiar. In general se opreste o garantie de buna executie - 5%, 10%.",
      },
      {
        question: "Povestiți pe scurt despre o situație recentă în care un client a achitat cu întârziere, nu a plătit complet sau a contestat lucrarea făcută. Cum s-a rezolvat problema?",
        answer: "In general prin negociere, foarte rar prin proces civil.",
      }
    ]
  },
  {
    number: 3,
    category: "mester",
    status: "Completat",
    name: "Nu s-a dorit a fi dezvăluit numele",
    occupation: "Instalații gaze / climatizare, instalații sanitare, mentenanță tehnică",
    companyName: "",
    yearsOfWork: "23 de ani de activitate",
    companyType: "",
    description: "",
    evidence: [],
    questions: [
      {
        question: "Gândiți-vă la ultimii 3 clienți noi pe care i-ați avut. Cum a ajuns concret fiecare dintre ei la dumneavoastră?",
        answer: "Fiind în branșă demult, clienții sunt vechi,unii aceeași de mult timp, mă sună cînd au probleme,verificări ,service la centrale și pt. verificarea instalațiilor de gaz.",
      },
      {
        question: "Ce platforme sau site-uri ați testat până acum ca să găsiți clienți (OLX, grupuri de Facebook etc.)? Ce s-a întâmplat concret când le-ați folosit și de ce ați continuat sau ați renunțat la ele?",
        answer: "Nu folosesc aceste platforme,mă bazez pe clienții vechi sau prin recomandarea făcută de către ei altor persoane.",
      },
      {
        question: "Cât ați plătit cel mai mult (pe lună sau pe an) pentru promovare, anunțuri, promovare pe rețele sau platforme până acum?",
        answer: "Nimic, eventual am sunat clienții că le expiră verificările.",
      },
      {
        question: "Care este cea mai mare problemă pe care ai întâmpinat-o în ultimul an atunci când ai lucrat cu clienți noi?",
        answer: "Situațiile aici sunt diferite,depinde de la caz la caz.Daca centrala e defectă o repari ai piesa și ești promt,totul e bine . Având în vedere viața scumpă de acum,poate unii zic că e scump,dar trebuie în așa fel făcut că toată lumea să fie mulțumită.",
      },
      {
        question: "Ați avut perioade fără suficiente lucrări? În ce luni/sezoane apar aceste pauze și ce ați făcut în săptămânile respective ca să faceți rost de comenzi?",
        answer: "Nu pauze ci doar mai puțin de lucru,dar mai sunt spălări chimice ale centralelor, detectoare de montat sau înlocuit,diferite reparatii la instalații,înlocuire de centrală.Vara pot spune că sunt mai puține lucrări.",
      },
      {
        question: "La ultima lucrare pentru care ați dat o ofertă, cum ați calculat prețul final? Ce factori au contat în stabilirea sumei?",
        answer: "Sincer oamenii care fac lucrări cam sunt informați ori de la alte persoane ,ori din magazinele in domeniu (mă refer la prețuri de centrale,piese),la manoperă trebuie discutat astfel încît să fie cumva apropiata de concurență ,piesele. să fie de calitate,iar lucrarea să mulțumească pe deplin clientul.",
      },
      {
        question: "Vi s-a întâmplat ca în timpul unei lucrări prețul final să crească față de ce ați discutat inițial? Cum a decurs discuția cu clientul despre diferența de bani?",
        answer: "Da,deoarece atunci cand lucrezi efectiv se observă alte lucruri mai exact o țeavă de pexal veche nu sa mai putut reîntregi din cauza vechimii și calității.Clientilui i s-a explicat situația respectivă,s-a făcut chiar și demonstrație și a înțeles.",
      },
      {
        question: "Cum îl țineți la curent pe client cu stadiul lucrării pe măsură ce avansați?",
        answer: "Eu am lucrări de durata mică și clișeul vede la fața locului cum se desfășoară lucrarea.",
      },
      {
        question: "La ultimele lucrări finalizate, cum s-a făcut plata (avans, tranșe pe parcurs, totul la final, numerar, transfer) și ce documente i-ați lăsat clientului la predare?",
        answer: "Sincer am avut momente când am reparat centrala și clientul, cunoscândul mi-a plătit după trei zile.La piese cu valoare mai mare am luat avans și la finalizarea lucrării plata numerar.Ca documente se dă autorizația de funcționare,declarație de conformitate(după caz), certificat de garanție a produsului, certificat de garanție a lucrării, factură fiscală la produsul vândut,factură pe manoperă.",
      },
      {
        question: "Povestiți pe scurt despre o situație recentă în care un client a achitat cu întârziere, nu a plătit complet sau a contestat lucrarea făcută. Cum s-a rezolvat problema?",
        answer: "La situații de genul ăsta am rezolvat amiabil,întorcândum-mă la lucrare refăcând ce nu era corect sau înlocuind ce nu funcționa , bineînțeles pe garanție sau fără bani.",
      }
    ]
  },
  {
    number: 4,
    category: "mester",
    status: "Completat",
    name: "Popescu Andrei",
    occupation: "Zugrăveli",
    companyName: "",
    yearsOfWork: "",
    companyType: "",
    description: "",
    evidence: [],
    questions: [
      {
        question: "Ce tip de lucrări faci cel mai des? Exemple: instalații electrice, instalații sanitare, zugrăveli, renovări, reparații mobilier etc.",
        answer: "Zugrăveli",
      },
      {
        question: "Cum îți găsești de obicei clienții?",
        answer: "Prin recomandări",
      },
      {
        question: "Povestește-ne despre ultima dată când un client te-a contactat pentru o lucrare, dar aceasta nu s-a mai realizat.",
        answer: "M-a sunat și a zis ca nu mai are nevoie, a găsit pe altcineva.",
      },
      {
        question: "Cum stabilești de obicei prețul unei lucrări?",
        answer: "Studiez piața",
      },
      {
        question: "Ți s-a întâmplat recent ca prețul unei lucrări să se schimbe după ce ai început-o?",
        answer: "Nu",
      },
      {
        question: "Povestește-ne despre ultima situație în care ai avut o problemă cu plata unui client.",
        answer: "După finalul lucrării a spus că încă nu i-a intrat salariul și că îmi va trimite pe card după. Abia peste o săptămână i-am mai primit.",
      },
      {
        question: "Cum procedezi în prezent cu avansul și materialele?",
        answer: "Nu iau avans, materialele le plătește clientul.",
      },
      {
        question: "Care este cea mai mare problemă pe care ai întâmpinat-o în ultimul an atunci când ai lucrat cu clienți noi?",
        answer: "Nu au destulă încredere în mine, au impresia că ei știu mai bine.",
      },
      {
        question: "Ai folosit platforme online pentru a găsi clienți, cum a fost experiența?",
        answer: "Nu",
      }
    ]
  },
  {
    number: 5,
    category: "mester",
    status: "Completat",
    name: "Gherghinete Sergiu",
    occupation: "Renovări",
    companyName: "",
    yearsOfWork: "",
    companyType: "",
    description: "",
    evidence: [],
    questions: [
      {
        question: "Ce tip de lucrări faci cel mai des? Exemple: instalații electrice, instalații sanitare, zugrăveli, renovări, reparații mobilier etc.",
        answer: "Renovări",
      },
      {
        question: "Cum îți găsești de obicei clienții?",
        answer: "Mă caută ei",
      },
      {
        question: "Povestește-ne despre ultima dată când un client te-a contactat pentru o lucrare, dar aceasta nu s-a mai realizat.",
        answer: "Clientul nu a avut fonduri suficiente.",
      },
      {
        question: "Cum stabilești de obicei prețul unei lucrări?",
        answer: "În funcție de complexitatea lucrării și prețul materialelor",
      },
      {
        question: "Ți s-a întâmplat recent ca prețul unei lucrări să se schimbe după ce ai început-o?",
        answer: "Nu",
      },
      {
        question: "Povestește-ne despre ultima situație în care ai avut o problemă cu plata unui client.",
        answer: "Nu am avut",
      },
      {
        question: "Cum procedezi în prezent cu avansul și materialele?",
        answer: "Decid împreună cu clientul",
      },
      {
        question: "Care este cea mai mare problemă pe care ai întâmpinat-o în ultimul an atunci când ai lucrat cu clienți noi?",
        answer: "Unii au pretenții prea mari",
      },
      {
        question: "Ai folosit platforme online pentru a găsi clienți, cum a fost experiența?",
        answer: "Nu am folosit",
      }
    ]
  },
  {
    number: 6,
    category: "mester",
    status: "Completat",
    name: "Maftei Gelu",
    occupation: "Renovări",
    companyName: "",
    yearsOfWork: "",
    companyType: "",
    description: "",
    evidence: [],
    questions: [
      {
        question: "Ce tip de lucrări faci cel mai des? Exemple: instalații electrice, instalații sanitare, zugrăveli, renovări, reparații mobilier etc.",
        answer: "Renovări",
      },
      {
        question: "Cum îți găsești de obicei clienții?",
        answer: "Prin cunoștințe",
      },
      {
        question: "Povestește-ne despre ultima dată când un client te-a contactat pentru o lucrare, dar aceasta nu s-a mai realizat.",
        answer: "Clientului nu i-a convenit prețul lucrării.",
      },
      {
        question: "Cum stabilești de obicei prețul unei lucrări?",
        answer: "Prețul materialelor plus manoperă",
      },
      {
        question: "Ți s-a întâmplat recent ca prețul unei lucrări să se schimbe după ce ai început-o?",
        answer: "Da, clientul a schimbat cerințele pe parcursul lucrării.",
      },
      {
        question: "Povestește-ne despre ultima situație în care ai avut o problemă cu plata unui client.",
        answer: "Clientul nu a mai vrut să plătească pentru materiale.",
      },
      {
        question: "Cum procedezi în prezent cu avansul și materialele?",
        answer: "O parte din plată înainte de lucrare și cealaltă la final",
      },
      {
        question: "Care este cea mai mare problemă pe care ai întâmpinat-o în ultimul an atunci când ai lucrat cu clienți noi?",
        answer: "Nu-mi respectă părerea despre ce ar fi mai bine în lucrare",
      },
      {
        question: "Ai folosit platforme online pentru a găsi clienți, cum a fost experiența?",
        answer: "Nu am folosit",
      }
    ]
  }
];

export const interviews = [...clientInterviews, ...mesterInterviews];
