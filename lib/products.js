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
import collarePassaggioFiloQuadrato from "@/assets/collare-passaggio-filo-quadrato.webp";
import collarePassaggioFiloQuadrato2 from "@/assets/collare-passaggio-filo-quadrato-2.webp";
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
    dimensions: "70x70mm; 80x80mm; 90x90mm**",
    images: [collareQuadratoTesta, collareQuadratoTesta2],
  },
  {
    name: "Collare rotondo di testa",
    slug: "collare-rotondo-testa",
    categorySlug: "collari-di-testata",
    category: "Collari di testata-ancoraggio",
    description:
      "Collare rotondo in lamiera S235 2x2,5mm* per collegamento a palo di testa a sezione rotonda",
    dimensions: "Ø 80mm; Ø 90mm; Ø 100mm",
    images: [collareRotondoTesta, collareRotondoTesta2],
  },
  {
    name: "Collare rotondo doppio",
    slug: "collare-rotondo-doppio",
    categorySlug: "collari-intermedi",
    description:
      "Collare in lamiera S235 2x2,5mm* di sostegno DOPPIO per traversine",
    dimensions: "Ø 60mm; Ø 70mm; Ø 80mm; Ø 100mm; Ø 120mm**",
    images: [collareRotondoDoppio, collareRotondoDoppio2],
  },
  {
    name: "Collare rotondo singolo",
    slug: "collare-rotondo-singolo",
    categorySlug: "collari-intermedi",
    description:
      "Collare in lamiera S235 2x2,5mm* di sostegno singolo per traversine",
    dimensions: "Ø 65mm; Ø 80mm; Ø 100mm; Ø 120mm**",
    images: [collareRotondoSingolo, collareRotondoSingolo2],
  },
  {
    name: "Collare quadrato doppio",
    slug: "collare-quadrato-doppio",
    categorySlug: "collari-intermedi",
    description:
      "Collare in lamiera S235 2x2,5mm* di sostegno DOPPIO per traversine",
    dimensions: "70x70mm; 80x80mm; 90x90mm**",
    images: [collareQuadratoDoppio, collareQuadratoDoppio2],
  },
  {
    name: "Collare quadrato singolo",
    slug: "collare-quadrato-singolo",
    categorySlug: "collari-intermedi",
    description:
      "Collare in lamiera S235 2x2,5mm* di sostegno singolo per traversine, composto da 2 pezzi a omega e un corpo singolo a C",
    dimensions: "70x70mm; 80x80mm; 90x90mm",
    images: [collareQuadratoSingolo, collareQuadratoSingolo2],
  },
  {
    name: "Collare per passaggio filo quadrato",
    slug: "collare-passaggio-filo-quadrato",
    categorySlug: "collari-intermedi",
    description: "Collare in lamiera S235 2x2,5* con anello di passaggio filo",
    dimensions: "70x70mm; 80x80mm; 90x90mm; 120x120mm**",
    images: [collarePassaggioFiloQuadrato, collarePassaggioFiloQuadrato2],
  },
  {
    name: "Cavallotto a sezione quadrata",
    slug: "cavallotto-sezione-quadrata",
    categorySlug: "cavallotti",
    description:
      "Cavallotto ferma traversina a sezione quadrata, in trafilato filettato con piastrina 25x10mm*",
    dimensions: "Sezione: M6; M8",
    images: [cavallottoSezioneQuadrata, cavallottoSezioneQuadrata2],
  },
  {
    name: "Cavallotto a sezione rotonda",
    slug: "cavallotto-sezione-rotonda",
    categorySlug: "cavallotti",
    description:
      "Cavallotto ferma traversina a sezione rotonda, in trafilato filettato con piastrina 25x10mm*",
    dimensions: "Sezione: M6; M8",
    images: [cavallottoSezioneRotonda, cavallottoSezioneRotonda2],
  },
  {
    name: "Cavallotto portatubo di testa",
    slug: "cavallotto-portatubo-testa",
    categorySlug: "accessori-testata",
    description:
      "Cavallotto per collegamento tra tubo e palo di testa, con barra filettata M10 con piastra 30x10mm*",
    dimensions: '1" 1⁄2 - Ø 40; 2" - Ø 50; 2 1⁄2 - Ø 60-65**',
    images: [cavallottoPortatuboTesta, cavallottoPortatuboTesta2],
  },
  {
    name: "Collare doppio con catena per sistema a spalliera",
    slug: "collare-doppio-catena-spalliera",
    categorySlug: "collari-di-testata",
    description:
      "Collare con catena di testa doppio, per tensionamento filo di ferro per sistema a spalliera, in lamiera S235 2x2,5*",
    dimensions: "70x70mm; 80x80mm; 90x90mm; Ø 100mm; Ø 110mm; Ø 120mm",
    images: [collareDoppioCatena, collareDoppioCatena2, collareDoppioCatena3],
  },
];