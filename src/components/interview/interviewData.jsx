export const interviews = [
  {
    number: 1,
    category: "client",
    status: "De completat",
    name: "Numele clientului",
    occupation: "Ocupația clientului",
    description: "Informațiile vor fi adăugate aici.",
    evidence: [ // nu e obligatorie se poate lasa []
      {
        src: "/img/dovada-1.jpg",
        alt: "Descrierea imaginii",
      }, {
        src: "/img/dovada-2.jpg",
        alt: "Descrierea imaginii",
      }, {
        src: "/img/dovada-3.jpg",
        alt: "Descrierea imaginii",
      }, {
        src: "/img/dovada-4.jpg",
        alt: "Descrierea imaginii",
      }
    ],
    questions: [
      {
        question: "Întrebarea va fi adăugată aici.",
        answer: "Răspunsul va fi adăugat aici.",
      },
    ],
  },
  {
    number: 1,
    category: "mester",
    status: "Completat",
    name: "N/A - nume mester", // daca exista numele la firma, Name (nume mester) nu o sa apara si invers la fel; puneti "" daca nu exista
    occupation: "",
    companyName: "Tatal Sandei",
    yearsOfWork: "18 ani de activitate",
    companyType: "SRL", //"SRL / PFA / Fără firmă"
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
        answer: "Implica mai mulți factori în crearea prețurilor. Prețul poate fi făcut pe un metru pătrat montat + metru pătrat material sau se poate face un preț pe metru pătrat combinat, depinde de client.\n În metru pătrat poate intra și manopera doar dacă e combinat.\nConteaza dimensiunea proiectului, sunt costuri de deplasare, de ex o lucrare de 50mp poate să fie complexă, să consume foarte mult timp și în loc sa o termini într-o zi o termini în 2, acest lucru adaugă costuri suplimentare, cum ar fi plata muncitorilor.",
      },
      {
        question: "Vi s-a intamplat ca în timpul lucrărilor prețul final sa creasca fata de prețul inițial? Cum a decurs discuția cu clientul despre diferența de bani?",
        answer: `Creșterea prețului apare în general când există o distanță mai mare față de momentul contractării, de 2-3 luni de zile până la punerea în lucru, cauzată de diferențele majore în ceea ce privește scumpirile de materiale, curs valutar, carburant.

          De asemenea, prețul crește dacă se lucrează un număr mare de ore suplimentare într-un timp foarte scurt, de obicei la cererea clientului care este în criză de timp și dorește finalizarea de urgență a lucrării.

          Situațiile de instabilitate, modificările de TVA și schimbările legislative pot face modificări în valoarea finală.

          Acestea sunt mai rare și se ajunge la un acord. Calculul ți-l faci asumându-ți anumite costuri suplimentare, iar dacă sunt foarte mari atunci vorbești cu clientul.`,
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
        answer: `De obicei avem metode de siguranță față de client: bilete la ordin, cecuri și instrumente de plată care să îți acopere costurile până la momentul plății finale. Acestea sunt menționate și discutate în contract.

          Se percepe un avans pentru materiale în momentul în care acestea ajung pe șantier, pentru care se emite factură. Materialele sunt de import, iar fluctuațiile de curs valutar pot influența costul final. Plata manoperei se realizează la finalul lucrării.

          Factura pentru materiale are termene de 15 sau 30 de zile, în funcție de disponibilitatea stocurilor la distribuitor.

          Pentru manoperă se face proces-verbal, preluare fond de lucru și predare a lucrării finale.`,
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
        answer: "Pe baza unor recomandari  ale unor clienti anteriori.",
      },
      {
        question: "Ce platforme sau site-uri ați testat până acum ca să găsiți clienți (OLX, grupuri de Facebook etc.)? Ce s-a întâmplat concret când le-ați folosit și de ce ați continuat sau ați renunțat la ele?",
        answer: "Grupuri dedicate, dar in general suntem noi cei contactati pentru oferte. Multe dintre lucrari provin din licitatii la institutiu publice prin site-ul specializat (SICAP, fostul SEAP.). ",
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
        answer: `Preturile de achizitie cu o proiectie a cresterii acestora in urmatoarele cateva luni, salariile angajatilor, taxele catre stat.`,
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
        answer: `Avans, transe pe parcurs in functie de situatiile de plata verificate de catre beneficiar. In general se opreste o garantie de buna executie - 5%, 10%.`,
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
        answer: `Sincer oamenii care fac lucrări cam sunt informați ori de la alte persoane ,ori din magazinele in domeniu (mă refer la prețuri de centrale,piese),la manoperă trebuie discutat astfel încît să fie cumva apropiata de concurență ,piesele. să fie de calitate,iar lucrarea să mulțumească pe deplin clientul.`,
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
        answer: `Sincer am avut momente când am reparat centrala și clientul, cunoscândul mi-a plătit după trei zile.La piese cu valoare mai mare am luat avans și la finalizarea lucrării plata numerar.Ca documente se dă autorizația de funcționare,declarație de conformitate(după caz), certificat de garanție a produsului, certificat de garanție a lucrării, factură fiscală la produsul vândut,factură pe manoperă.`,
      }, 
      {
        question: "Povestiți pe scurt despre o situație recentă în care un client a achitat cu întârziere, nu a plătit complet sau a contestat lucrarea făcută. Cum s-a rezolvat problema?",
        answer: "La situații de genul ăsta am rezolvat amiabil,întorcândum-mă la lucrare refăcând ce nu era corect sau înlocuind ce nu funcționa , bineînțeles pe garanție sau fără bani.",
      } 
    ]
  },
];
