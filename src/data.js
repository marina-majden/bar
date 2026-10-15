/* ========================================================
   BarMen — Master Brand & Content Data
   Preserving all original content + luxury metadata expansions
   ======================================================== */

// Import local cocktail images
import cloverClubImg from "./assets/cocktails/Clover-Club-Cocktail.jpg";
import elixirImg from "./assets/cocktails/Elixir-Cocktail.jpg";
import espressoMartiniImg from "./assets/cocktails/Espresso-Martini-cocktail.jpg";
import hugoSpritzImg from "./assets/cocktails/Hugo-Spritz-cocktail.jpg";
import naomiImg from "./assets/cocktails/Naomi-cocktail.jpg";
import palomaImg from "./assets/cocktails/Paloma-cocktail.jpg";
import royalMojitoImg from "./assets/cocktails/Royal-Mojito-cocktail.jpg";
import skinnyBeachImg from "./assets/cocktails/Skinny-Beach-cocktail.jpg";
import whiskeySourImg from "./assets/cocktails/Whiskey-sour-cocktail.jpg";

// Diagram images from original BarMen recipe guides
import ginTonicDiagram from "./assets/cocktails/gin-and-tonic-diagram.jpg";
import aperolSpritzDiagram from "./assets/cocktails/aperol-spritz-diagram.jpg";
import pornstarMartiniDiagram from "./assets/cocktails/pornstar-martini-diagram.jpg";
import moscowMuleDiagram from "./assets/cocktails/moscow-mule-diagram.jpg";
import negroniDiagram from "./assets/cocktails/negroni-diagram.jpg";

export const siteData = {
    brand: {
        name: "BarMen",
        founder: "Ivan Kurak",
        title: "Cocktail Catering Hrvatska",
        tagline: "Umjetnost miksologije na vašoj lokaciji",
        established: "2019",
        region: "Cijela Hrvatska • Zagreb • Istra • Dalmacija • Slavonija",
    },

    header: {
        title: "Cocktail Catering Hrvatska",
        navigation: [
            { label: "O nama", href: "/about" },
            { label: "Ponuda", href: "/offer" },
            { label: "Šankovi", href: "/mobile-bar" },
            { label: "Galerija", href: "/gallery" },
            { label: "Kontakt", href: "#contact" },
        ],
        socialLinks: [
            {
                name: "Instagram",
                url: "https://instagram.com",
                handle: "@barmen.catering",
            },
            {
                name: "Facebook",
                url: "https://facebook.com",
                handle: "BarMen Cocktail Catering",
            },
            {
                name: "Youtube",
                url: "https://youtube.com",
                handle: "BarMen Hrvatska",
            },
        ],
    },

    partners: [
        "Catering Kvatric",
        "Nomadik",
        "Legrand",
        "Daniel's Bar",
        "Fisherija",
        "Oasis",
    ],

    // Featured Hero Interactive Cocktails (grounded in the 5 reference recipe posters)
    featuredCocktails: [
        {
            id: "gin-tonic",
            name: "Gin & Tonic",
            subtitle: "Botanički osvježavajući klasik",
            color: "#e8d78a",
            colorRgb: "232, 215, 138",
            glowColor: "rgba(232, 215, 138, 0.2)",
            diagramImg: ginTonicDiagram,
            tasteProfile: "Osvježavajuće • Suho • Citrusno",
            glassware: "Highball / Collins čaša",
            ingredients: [
                { name: "Gin", role: "Premium London Dry baza" },
                { name: "Tonic", role: "Artisan pjenušavi tonik" },
                { name: "Dehidrirana limeta", role: "Aromatična dehidracija" },
                { name: "Limeta", role: "Svježi citrusni sok" },
                { name: "Perzijske ruže", role: "Mirisne botaničke latice" },
                {
                    name: "Duge & male kocke leda",
                    role: "Kristalno prozirni led",
                },
            ],
            notes: "Savršen balans craft gina i premium tonika, oplemenjen mirisnim perzijskim pupoljcima ruže i dehidriranim citrusom.",
        },
        {
            id: "aperol-spritz",
            name: "Aperol Spritz",
            subtitle: "Talijanska ikona sunčanih aperitiva",
            color: "#e05a2b",
            colorRgb: "224, 90, 43",
            glowColor: "rgba(224, 90, 43, 0.25)",
            diagramImg: aperolSpritzDiagram,
            tasteProfile: "Gorko-slatko • Pjenušavo • Voćno",
            glassware: "Velika vinska čaša",
            ingredients: [
                { name: "Aperol", role: "Talijanski gorko-slatki liker" },
                { name: "Prosecco", role: "Veneto pjenušavo vino" },
                { name: "Soda", role: "Gazirana mineralna voda" },
                { name: "Naranča", role: "Dehidrirani kotač naranče" },
                { name: "Male kocke leda", role: "Čisti kockasti led" },
                { name: "Slamka", role: "Ekološki elegantni završetak" },
            ],
            notes: "Zlatni omjer 3-2-1 donosi živahnu narančastu boju, lagane mjehuriće i neodoljivu aperitivnu svježinu.",
        },
        {
            id: "pornstar-martini",
            name: "Pornstar Martini",
            subtitle: "Egzotična senzacija s marakujom",
            color: "#f5a623",
            colorRgb: "245, 166, 35",
            glowColor: "rgba(245, 166, 35, 0.25)",
            diagramImg: pornstarMartiniDiagram,
            tasteProfile: "Egzotično • Baršunasto • Slatko-kiselkasto",
            glassware: "Coupe čaša uz Prosecco shooter",
            ingredients: [
                { name: "Vodka", role: "Čista žitna vodka" },
                { name: "Passion fruit", role: "Pire od marakuje" },
                { name: "Citrus", role: "Svježe cijeđeni limun" },
                { name: "Prosecco", role: "Pjenušavi shot sa strane" },
                { name: "Perzijske ruže", role: "Elegancija dekoracije" },
                { name: "Velike kocke leda", role: "Ručno rezani blok leda" },
            ],
            notes: "Jedan od najtraženijih modernih koktela današnjice: baršunasta tekstura tropske marakuje poslužena uz ritualni gutljaj Prosecca.",
        },
        {
            id: "moscow-mule",
            name: "Moscow Mule",
            subtitle: "Oštri pikantni đumbir & svježi citrus",
            color: "#d4cb4e",
            colorRgb: "212, 203, 78",
            glowColor: "rgba(212, 203, 78, 0.2)",
            diagramImg: moscowMuleDiagram,
            tasteProfile: "Pikantno • Osvježavajuće • Đumbir",
            glassware: "Bakrena šalica ili tumbler",
            ingredients: [
                { name: "Vodka", role: "Premium destilirana baza" },
                { name: "Ginger", role: "Pikantno pivo od đumbira" },
                { name: "Citrus", role: "Limeta & citrus infuzija" },
                { name: "Dehidrirana limeta", role: "Rustikalna dekoracija" },
                { name: "Duge kocke leda", role: "Specijalni ice spear" },
                { name: "Male kocke leda", role: "Kvalitetno hlađenje" },
            ],
            notes: "Pikantna energija đumbira i kiselkaste note limete donose eksploziju svježine koja savršeno rashlađuje ljetne i večernje evente.",
        },
        {
            id: "negroni",
            name: "Negroni",
            subtitle: "Vječna kraljevska gorko-slatka harmonija",
            color: "#9e1d1d",
            colorRgb: "158, 29, 29",
            glowColor: "rgba(158, 29, 29, 0.25)",
            diagramImg: negroniDiagram,
            tasteProfile: "Gorko • Biljno • Sofisticirano",
            glassware: "Old Fashioned / Rocks čaša",
            ingredients: [
                { name: "Gin", role: "Biljni craft gin" },
                { name: "Campari", role: "Ikonski talijanski bitter" },
                { name: "Vermouth rosso", role: "Slatki crveni vermut" },
                { name: "Naranča", role: "Karamelizirani kotačić naranče" },
                { name: "Velike kocke leda", role: "Čisti prozirni ice cube" },
                { name: "Male kocke leda", role: "Kontrola temperature" },
            ],
            notes: "Jednaki dijelovi gina, Camparija i crvenog vermuta. Čista esencija profinjenosti i bezvremenskog barmenskog stila.",
        },
    ],

    // Extended Cocktail Menu Catalog
    cocktailMenu: [
        {
            name: "Whiskey Sour",
            category: "Classic",
            image: whiskeySourImg,
            flavor: "Bogat, svilenkast i balansiran s baršunastom bjelanjak pjenom",
            alcohol: "Bourbon Whiskey",
        },
        {
            name: "Espresso Martini",
            category: "Signature",
            image: espressoMartiniImg,
            flavor: "Svježi espresso, liker od kave i nježna krema za noćne zabave",
            alcohol: "Vodka & Kahlua",
        },
        {
            name: "Paloma",
            category: "Refreshing",
            image: palomaImg,
            flavor: "Tequila Blanco, ružičasti grejp, limeta i solni obrub",
            alcohol: "Tequila 100% Agave",
        },
        {
            name: "Clover Club",
            category: "Pre-Prohibition",
            image: cloverClubImg,
            flavor: "Ružičasti klasik s malinama, limunom i svilenkastom teksturom",
            alcohol: "Dry Gin",
        },
        {
            name: "Hugo Spritz",
            category: "Spritz",
            image: hugoSpritzImg,
            flavor: "Sirup od bazge, svježa menta, limeta i ohlađeni Prosecco",
            alcohol: "Prosecco DOC",
        },
        {
            name: "Royal Mojito",
            category: "Luxury",
            image: royalMojitoImg,
            flavor: "Kubanski bijeli rum, svježa menta, limeta i šampanjac umjesto sode",
            alcohol: "Aged White Rum",
        },
        {
            name: "Elixir Cocktail",
            category: "Signature",
            image: elixirImg,
            flavor: "Autorska biljna fuzija s mirisnim dimnim aromama",
            alcohol: "Bespoke Spirit",
        },
        {
            name: "Naomi Cocktail",
            category: "Exotic",
            image: naomiImg,
            flavor: "Egzotično voće, hibiskus infuzija i delikatan cvjetni završetak",
            alcohol: "Infused Gin",
        },
        {
            name: "Skinny Beach",
            category: "Low-Calorie",
            image: skinnyBeachImg,
            flavor: "Lagana, osvježavajuća kreacija bez dodanih šećera s bobičastim voćem",
            alcohol: "Ultra-Premium Vodka",
        },
    ],

    features: {
        title: "Zašto baš mi?",
        intro: "Kada birate mobilni cocktail bar, želite više od pića – želite iskustvo koje će vaš event učiniti nezaboravnim. Evo zašto smo mi pravi izbor za vas:",
        items: [
            {
                number: "01",
                title: "Vrhunski kokteli & neograničene mogućnosti",
                description:
                    "Nudimo više od 80 različitih koktela, od klasičnih do signature kombinacija kreiranih samo za vaš event. Osim toga, nudimo potpunu personalizaciju – brendirane koktele, unikatne jelovnike i dekoracije koje se uklapaju u vašu temu.",
                highlight: "80+ vrsta koktela & unikatni jelovnici",
            },
            {
                number: "02",
                title: "Spektakl u čaši",
                description:
                    "Naši show barmeni nisu samo majstori miksologije, već i vrhunski zabavljači. S atraktivnim trikovima, interakcijom s gostima i neodoljivom energijom, osiguravaju da svaki trenutak bude dinamičan i poseban.",
                highlight: "Show barmeni & interaktivni trikovi",
            },
            {
                number: "03",
                title: "Inovativan i prilagodljiv setup",
                description:
                    "Naš elegantni inox šank na kotačima dolazi u dvije veličine i prilagođava se prostoru i tipu događanja. Opremljen je profesionalnim sustavima za higijenu i magnetskim panelima koji omogućuju brendiranje i personalizaciju.",
                highlight: "Inox šank u 2 veličine s brendiranjem",
            },
            {
                number: "04",
                title: "Dolazimo bilo gdje",
                description:
                    "Bez obzira organizirate li event na otvorenom, u luksuznoj dvorani, na festivalu ili u privatnom prostoru, naš tim dolazi na bilo koju lokaciju, brzo se postavlja i stvara savršenu atmosferu.",
                highlight: "Pokrivamo cijelu Hrvatsku",
            },
            {
                number: "05",
                title: "Iskustvo i profesionalnost",
                description:
                    "Naši barmeni su stručnjaci s dugogodišnjim iskustvom, posvećeni kvaliteti i detaljima. Cilj nam je osigurati da vaši gosti ne samo uživaju u piću, već i u nezaboravnom doživljaju.",
                highlight: "Vrhunski barmenski certifikati & pedantnost",
            },
        ],
    },

    aboutUs: {
        title: "O nama",
        subtitle: "Strast prema miksologiji i umjetnost gostoprimstva",
        description:
            "Mi smo tvrtka koja donosi vrhunsku koktel avanturu izravno na vašu lokaciju! Naš pokretni cocktail bar sadrži sve što vam treba na jednom mjestu – od premium sastojaka do profesionalne opreme, pružajući jedinstveno iskustvo koje podiže svaki event na višu razinu. Dolazimo gdje god želite i prilagođavamo se svakom prostoru, bilo da je riječ o elegantnom vjenčanju, korporativnom eventu, privatnoj proslavi, festivalu, rođendanu, team buildingu ili bilo kojoj drugoj posebnoj prigodi. S više od 80 vrsta koktela i bezbroj mogućnosti personalizacije, jamčimo da će svaki gost pronaći svoj savršeni okus. Naš setup izgleda zapanjujuće i besprijekorno se uklapa u bilo koji ambijent, dok naši iskusni barmeni ne samo da pripremaju vrhunske koktele, već i stvaraju nezaboravne trenutke uz interakciju, show i besprijekornu uslugu.",
        stats: [
            { value: "80+", label: "Receptura koktela" },
            { value: "300", label: "Maksimalan broj gostiju" },
            { value: "100%", label: "Mobilnost po RH" },
            { value: "5/5", label: "Zadovoljstvo klijenata" },
        ],
    },

    mobileBar: {
        title: "Mobilni bar vrhunskog dizajna",
        subtitle:
            "Spoj industrijskog inoxa, LED ambijentalne rasvjete i modularnog brendiranja",
        description:
            "Naš pokretni cocktail bar nudi savršenu kombinaciju elegancije, funkcionalnosti i vrhunske usluge, prilagođenu svakom eventu. Donosimo sve što vam treba za nezaboravno koktel iskustvo – od vrhunskih pića do spektakularne izvedbe naših barmena.",
        points: [
            "Više od 80 vrsta koktela – Klasični, signature i custom kokteli prilagođeni vašem eventu.",
            "Show barmeni – Vrhunska zabava uz atraktivne barmenske trikove i interakciju s gostima.",
            "Potpuna personalizacija – Brendirani šank, posebne dekoracije i custom koktel jelovnici.",
            "Dolazimo bilo gdje – Bez obzira na lokaciju, naš bar se savršeno uklapa u svaki prostor.",
        ],
        specs: [
            {
                title: "2 Veličine Šanka",
                desc: "Kompaktni (1.5m) za intimne zabave i prošireni (3m) za veće proslave do 300 uzvanika.",
            },
            {
                title: "Magnetski Paneli",
                desc: "Potpuno brendiranje prednje i bočnih fronti vašim logotipom, monogramom ili grafikom eventa.",
            },
            {
                title: "Profesionalna Higijena",
                desc: "Integrirani sustavi za pranje čaša, neovisni dovod/odvod vode i rashladne jedinice.",
            },
            {
                title: "Brza Montaža",
                desc: "Postavljanje i puni operativni pogon unutar samo 60 minuta od dolaska na lokaciju.",
            },
        ],
    },

    events: {
        title: "Želite svoj event učiniti nezaboravnim?",
        subtitle:
            "Organiziramo sve vrste događanja – od rođendana do vjenčanja, stvarajući nezaboravne trenutke!",
        categories: [
            {
                name: "Vjenčanja",
                desc: "Ekskluzivni signature kokteli mladenaca, raskošan doček gostiju i spektakl na plesnom podiju.",
            },
            {
                name: "Korporativna događanja",
                desc: "Brendirani šank s logotipom tvrtke, tematski kokteli i besprijekoran VIP nivo usluge.",
            },
            {
                name: "Djevojačke večeri",
                desc: "Interaktivne cocktail radionice, Flavour Blaster aromatični mjehurići i bezbrižna zabava.",
            },
            {
                name: "Rođendani",
                desc: "Vrhunski show barmeni, personalizirana karta pića i nezaboravan party u vašem domu ili vili.",
            },
            {
                name: "Najam šanka",
                desc: "Samostalni najam profesionalnog inox mobilnog šanka sa svom pratećom opremom.",
            },
            {
                name: "Najam barskih stolova",
                desc: "Elegantni visoki barski stolovi s navlakama za upotpunjavanje cocktail zone.",
            },
            {
                name: "Eventi & Festivali",
                desc: "Visokoproduktivni cocktail šank spreman za brzo posluživanje velikog broja gostiju.",
            },
            {
                name: "OSTALE USLUGE",
                desc: "Bespoke rješenja po vašoj želji, tematske dekoracije i privatne degustacijske večeri.",
            },
        ],
    },

    cateringTaste: {
        title: "Cocktail catering baš po vašem ukusu",
        subtitle:
            "Senzorno iskustvo: Flavour Blaster™, degustacije i poklon shooter runde",
        description:
            "Kako bi što više povećali iskustvo naših kupaca, koristimo Flavour Blaster. On nam omogućava stvaranje mirisnih mjehurića na koktelima, te ih čini vizualno spektakularnijima uz dodavanje dodatnih slojeva arome. Tako naši klijenti mogu osjetiti nove dimenzije okusa čineći koktel doživljaj posebnim i nezaboravnim. Prilikom dogovora za event, nudimo degustaciju koktela kako bismo olakšali odabir savršene cocktail karte za klijentov događaj. U konačnici kao dodatnu pogodnost, nudimo besplatnu rundu shootera po odabiru barmena, čime svaki događaj dobiva poseban završni dojam. Naš tim specijaliziran je za organizaciju evenata malih i srednjih kapaciteta, do 300 osoba, s mogućnošću djelovanja diljem cijele Hrvatske.",
        perks: [
            {
                title: "Flavour Blaster™ Tehnologija",
                desc: "Mirisni dimni mjehurići s aromama citrusa, vanilije, ružmarina ili bobičastog voća koji pucaju pred gostom.",
            },
            {
                title: "Besplatna Degustacija",
                desc: "Prije vašeg eventa isprobavamo kombinacije i zajedno biramo cocktail kartu idealnu za vaše goste.",
            },
            {
                title: "Gratis Runda Shootera",
                desc: "Poseban dar našeg show barmena za vrhunac večeri – spektakularna runda craft shootera za sve uzvanike.",
            },
            {
                title: "Kapacitet do 300 Osoba",
                desc: "Specijalizirani za privatne i korporativne evente malih i srednjih formata s punom posvećenošću detaljima.",
            },
        ],
    },

    gallery: [
        {
            title: "Artisan Smoke & Aroma",
            category: "Flavour Blaster",
            url: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
            caption: "Mirisni aromatični mjehurići i vizualni spektakl u čaši",
        },
        {
            title: "Pre-event Bar Setup",
            category: "Mobilni Bar",
            url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
            caption: "Inox mobilni bar u punom sjaju spreman za goste",
        },
        {
            title: "Craft Ice & Mixology",
            category: "Detalji",
            url: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1200&auto=format&fit=crop",
            caption: "Ručno rezani kristalni led i botaničke dekoracije",
        },
        {
            title: "Show Barmen Experience",
            category: "Zabava",
            url: "https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1200&auto=format&fit=crop",
            caption: "Interakcija s gostima i dinamični show elementi",
        },
        {
            title: "Vjenčanja na otvorenom",
            category: "Vjenčanja",
            url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
            caption: "Gala koktel doček mladenaca u mediteranskom ambijentu",
        },
        {
            title: "Pjenušavi Spritz Trenuci",
            category: "Kokteli",
            url: "https://images.unsplash.com/photo-1560512823-829485b8bf24?q=80&w=1200&auto=format&fit=crop",
            caption: "Osvježavajući aperitivi za ljetne korporativne večeri",
        },
    ],

    footer: {
        newsletter:
            "Saznajte prvi o novostima i prilikama koje nudimo. Prijavite se za naš newsletter.",
        contact: {
            email: "ivan@barmenik.com.hr",
            phone: "+385 99 3364 844",
            location: "Zagreb & cijela Hrvatska",
            workingHours: "Dostupni 0-24 za dogovore i upite",
        },
        copyright: "Copyright © 2026 Barmenik | Powered by Nolu Design",
    },
};
