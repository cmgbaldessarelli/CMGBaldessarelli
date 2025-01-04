import tensionatore from "@/assets/tensionatore.webp";
import tensionatore2 from "@/assets/tensionatore-2.webp";
import collareQuadratoTesta from "@/assets/collare-quadrato-testa.webp";
import collareQuadratoTesta2 from "@/assets/collare-quadrato-testa-2.webp";
import collareRotondoTesta from "@/assets/collare-rotondo-testa.webp";
import collareRotondoTesta2 from "@/assets/collare-rotondo-testa-2.webp";
import collareRotondoDoppio from "@/assets/collare-rotondo-doppio.webp";
import collareRotondoDoppio2 from "@/assets/collare-rotondo-doppio-2.webp";
import collareRotondoSingolo from "@/assets/collare-rotondo-singolo.webp";
import collareRotondoSingolo2 from "@/assets/collare-rotondo-singolo-2.webp";
import collareQuadratoDoppio from "@/assets/collare-quadrato-doppio.webp";
import collareQuadratoDoppio2 from "@/assets/collare-quadrato-doppio-2.webp";
import collareQuadratoSingolo from "@/assets/collare-quadrato-singolo.webp";
import collareQuadratoSingolo2 from "@/assets/collare-quadrato-singolo-2.webp";
import cavallottoSezioneQuadrata from "@/assets/cavallotto-sezione-quadrata.webp";
import cavallottoSezioneQuadrata2 from "@/assets/cavallotto-sezione-quadrata-2.webp";
import cavallottoSezioneRotonda from "@/assets/cavallotto-sezione-rotonda.webp";
import cavallottoSezioneRotonda2 from "@/assets/cavallotto-sezione-rotonda-2.webp";
import cavallottoPortatuboTesta from "@/assets/cavallotto-portatubo.webp";
import cavallottoPortatuboTesta2 from "@/assets/cavallotto-portatubo-2.webp";
import collareDoppioCatena from "@/assets/collare-doppio-catena-spalliera.webp";
import collareDoppioCatena2 from "@/assets/collare-doppio-catena-spalliera-2.webp";
import collareDoppioCatena3 from "@/assets/collare-doppio-catena-spalliera-3.webp";

export const products = [
  // FARE COME QUESTO PER OGNI PRODOTTO
  {
    name: "Tensionatore",
    slug: "tensionatore",
    description:
      "Tensionatore in trafilato di acciaio per tensionamento filo in ferro",
    categorySlug: "tenditori",
    informations: {
      articles: [
        {
          code: "308",
          description: "TENDITORE T Ø 8 - per fili di ferro",
        },
        {
          code: "310",
          description: "TENDITORE T Ø 10 - per fili di ferro",
        },
      ],
    },
    images: [tensionatore, tensionatore2],
  },
  {
    name: "Collare quadrato di testa",
    slug: "collare-quadrato-testa",
    categorySlug: "collari-di-testata",
    description:
      "Collare quadrato in lamiera S235 3x2,5mm* per collegamento a palo di testa a sezione quadrata",
    informations: {
      articles: [
        {
          code: "103-7",
          description:
            "Collare rettangolare di TESTATA-ANCORAGGIO - palo 7x7 con bulloneria inclusa (bullone M10)",
        },
        {
          code: "103-8",
          description:
            "Collare rettangolare di TESTATA-ANCORAGGIO - palo 8x8 con bulloneria inclusa (bullone M10)",
        },
        {
          code: "103-9",
          description:
            "Collare rettangolare di TESTATA-ANCORAGGIO - palo 9x9 con bulloneria inclusa (bullone M10)",
        },
        {
          code: "103-15",
          description:
            "Collare rettangolare di TESTATA-ANCORAGGIO per palo (su richiesta) con bulloneria inclusa (bullone M10)",
        },
      ],
    },
    images: [collareQuadratoTesta, collareQuadratoTesta2],
  },
  {
    name: "Collare rotondo di testa",
    slug: "collare-rotondo-testa",
    categorySlug: "collari-di-testata",
    category: "Collari di testata-ancoraggio",
    description:
      "Collare rotondo in lamiera S235 2x2,5mm* per collegamento a palo di testa a sezione rotonda",
    informations: {
      articles: [
        {
          code: "203-7",
          description:
            "Collare rotondo di TESTATA-ANCORAGGIO per palo Ø 70 con bulloneria inclusa (bullone M10)",
        },
        {
          code: "203-8",
          description:
            "Collare rotondo di TESTATA-ANCORAGGIO per palo Ø 80 con bulloneria inclusa (bullone M10)",
        },
        {
          code: "203-9",
          description:
            "Collare rotondo di TESTATA-ANCORAGGIO per palo Ø 90 con bulloneria inclusa (bullone M10)",
        },
        {
          code: "203-10",
          description:
            "Collare rotondo di TESTATA-ANCORAGGIO per palo Ø 100 con bulloneria inclusa (bullone M10)",
        },
        {
          code: "203-12",
          description:
            "Collare rotondo di TESTATA-ANCORAGGIO per palo Ø 120 con bulloneria inclusa (bullone M10)",
        },
        {
          code: "203-15",
          description:
            "Collare rotondo di TESTATA-ANCORAGGIO per palo (su richiesta) con bulloneria inclusa (bullone M10)",
        },
      ],
    },
    images: [collareRotondoTesta, collareRotondoTesta2],
  },
  {
    name: "Collare rotondo doppio",
    slug: "collare-rotondo-doppio",
    categorySlug: "collari-intermedi",
    description:
      "Collare in lamiera S235 2x2,5mm* di sostegno DOPPIO per traversine",
    informations: {
      articles: [
        {
          code: "202-6",
          description:
            "Collare rotondo, per DOPPIA CANTINELLA - palo Ø 60 con bulloneria inclusa",
        },
        {
          code: "202-7",
          description:
            "Collare rotondo, per DOPPIA CANTINELLA - palo Ø 70 con bulloneria inclusa",
        },
        {
          code: "202-8",
          description:
            "Collare rotondo, per DOPPIA CANTINELLA - palo Ø 80 con bulloneria inclusa",
        },
        {
          code: "202-9",
          description:
            "Collare rotondo, per DOPPIA CANTINELLA - palo Ø 90 con bulloneria inclusa",
        },
        {
          code: "202-10",
          description:
            "Collare rotondo, per DOPPIA CANTINELLA - palo Ø 100 con bulloneria inclusa",
        },
        {
          code: "202-12",
          description:
            "Collare rotondo, per DOPPIA CANTINELLA - palo Ø 120 con bulloneria inclusa",
        },
        {
          code: "202-15",
          description:
            "Collare rotondo, per DOPPIA CANTINELLA - palo (su richiesta) con bulloneria inclusa",
        },
      ],
    },
    images: [collareRotondoDoppio, collareRotondoDoppio2],
  },
  {
    name: "Collare rotondo singolo",
    slug: "collare-rotondo-singolo",
    categorySlug: "collari-intermedi",
    description:
      "Collare in lamiera S235 2x2,5mm* di sostegno singolo per traversine",
    informations: {
      articles: [
        {
          code: "201-6",
          description:
            "Collare rotondo, per SINGOLA CANTINELLA - palo Ø 60 con bulloneria inclusa",
        },
        {
          code: "201-7",
          description:
            "Collare rotondo, per SINGOLA CANTINELLA - palo Ø 70 con bulloneria inclusa",
        },
        {
          code: "201-8",
          description:
            "Collare rotondo, per SINGOLA CANTINELLA - palo Ø 80 con bulloneria inclusa",
        },
        {
          code: "201-9",
          description:
            "Collare rotondo, per SINGOLA CANTINELLA - palo Ø 90 con bulloneria inclusa",
        },
        {
          code: "201-10",
          description:
            "Collare rotondo, per SINGOLA CANTINELLA - palo Ø 100 con bulloneria inclusa",
        },
        {
          code: "201-12",
          description:
            "Collare rotondo, per SINGOLA CANTINELLA - palo Ø 120 con bulloneria inclusa",
        },
        {
          code: "201-15",
          description:
            "Collare rotondo, per SINGOLA CANTINELLA - palo (su richiesta) con bulloneria inclusa",
        },
      ],
    },
    images: [collareRotondoSingolo, collareRotondoSingolo2],
  },
  {
    name: "Collare quadrato doppio",
    slug: "collare-quadrato-doppio",
    categorySlug: "collari-intermedi",
    description:
      "Collare in lamiera S235 2x2,5mm* di sostegno DOPPIO per traversine",
    informations: {
      articles: [
        {
          code: "102-7",
          description:
            "Collare rettangolare, per DOPPIA CANTINELLA - palo 7x7 con bulloneria inclusa",
        },
        {
          code: "102-8",
          description:
            "Collare rettangolare, per DOPPIA CANTINELLA - palo 8x8 con bulloneria inclusa",
        },
        {
          code: "102-9",
          description:
            "Collare rettangolare, per DOPPIA CANTINELLA - palo 9x9 con bulloneria inclusa",
        },
        {
          code: "102-15",
          description:
            "Collare rettangolare, per DOPPIA CANTINELLA - palo (su richiesta) con bulloneria inclusa",
        },
      ],
    },
    images: [collareQuadratoDoppio, collareQuadratoDoppio2],
  },
  {
    name: "Collare quadrato singolo",
    slug: "collare-quadrato-singolo",
    categorySlug: "collari-intermedi",
    description:
      "Collare in lamiera S235 2x2,5mm* di sostegno singolo per traversine, composto da 2 pezzi a omega e un corpo singolo a C",
    informations: {
      articles: [
        {
          code: "101-7",
          description:
            "Collare rettangolare, per SINGOLA CANTINELLA - per palo 7x7 con bulloneria inclusa",
        },
        {
          code: "101-8",
          description:
            "Collare rettangolare, per SINGOLA CANTINELLA - per palo 8x8 con bulloneria inclusa",
        },
        {
          code: "101-9",
          description:
            "Collare rettangolare, per SINGOLA CANTINELLA - per palo 9x9 con bulloneria inclusa",
        },
        {
          code: "101-15",
          description:
            "Collare rettangolare, per SINGOLA CANTINELLA - per palo (su richiesta) con bulloneria inclusa",
        },
      ],
    },
    images: [collareQuadratoSingolo, collareQuadratoSingolo2],
  },
  {
    name: "Cavallotto a sezione quadrata",
    slug: "cavallotto-sezione-quadrata",
    categorySlug: "cavallotti",
    description:
      "Cavallotto ferma traversina a sezione quadrata, in trafilato filettato con piastrina 25x10mm*",
    informations: {
      articles: [
        {
          code: "501-70",
          description:
            "Cavallotto rettangolare SOSTEGNO CANTINELLA-CANTINELLA passo M8 - da mm 70x90 completo di bulloneria (bullone M8)",
        },
        {
          code: "501-80",
          description:
            "Cavallotto rettangolare SOSTEGNO CANTINELLA-CANTINELLA passo M8 - da mm 80x90 completo di bulloneria (bullone M8)",
        },
        {
          code: "503-105",
          description:
            "Cavallotto rettangolare SOSTEGNO CANTINELLA-PALO passo M8 - da mm 105x125 completo di bulloneria (bullone M8)",
        },
      ],
    },
    images: [cavallottoSezioneQuadrata, cavallottoSezioneQuadrata2],
  },
  {
    name: "Cavallotto a sezione rotonda",
    slug: "cavallotto-sezione-rotonda",
    categorySlug: "cavallotti",
    description:
      "Cavallotto ferma traversina a sezione rotonda, in trafilato filettato con piastrina 25x10mm*",
    informations: {
      articles: [
        {
          code: "504-105",
          description:
            "Cavallotto rotondo SOSTEGNO CANTINELLA-PALO passo M8 - da mm 105x125 completo di bulloneria (bullone M8)",
        },
      ],
    },
    images: [cavallottoSezioneRotonda, cavallottoSezioneRotonda2],
  },
  {
    name: "Cavallotto portatubo di testa",
    slug: "cavallotto-portatubo-testa",
    categorySlug: "accessori-testata",
    description:
      "Cavallotto per collegamento tra tubo e palo di testa, con barra filettata M10 con piastra 30x10mm*",
    informations: {
      articles: [
        {
          code: "408",
          description:
            "Cavallotto PORTA TUBO TESTATA M8 - piastra con bulloneria inclusa",
        },
        {
          code: "410",
          description:
            "Cavallotto PORTA TUBO TESTATA M10 - piastra con bulloneria inclusa (bullone M10)",
        },
      ],
    },
    images: [cavallottoPortatuboTesta, cavallottoPortatuboTesta2],
  },
  {
    name: "Collare doppio con catena per sistema a spalliera",
    slug: "collare-doppio-catena-spalliera",
    categorySlug: "collari-di-testata",
    description:
      "Collare con catena di testa doppio, per tensionamento filo di ferro per sistema a spalliera, in lamiera S235 2x2,5*",
    informations: {
      articles: [
        {
          code: "120-7",
          description:
            "Collare rettangolare di testata per spalliera AGGANCIO CATENELLE o FILI - palo 7x7 con bulloneria inclusa",
        },
        {
          code: "120-8",
          description:
            "Collare rettangolare di testata per spalliera AGGANCIO CATENELLE o FILI - palo 8x8 con bulloneria inclusa",
        },
        {
          code: "120-9",
          description:
            "Collare rettangolare di testata per spalliera AGGANCIO CATENELLE o FILI - palo 9x9 con bulloneria inclusa",
        },
        {
          code: "120-15",
          description:
            "Collare rettangolare di testata per spalliera AGGANCIO CATENELLE o FILI - palo (su richiesta) con bulloneria inclusa",
        },
      ],
    },
    images: [collareDoppioCatena, collareDoppioCatena2, collareDoppioCatena3],
  },
];