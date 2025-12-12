export interface Beer {
  id: string
  name: string
  type: string
  description: string
  origin: string
  alcoholContent: number
  ibu: number
  color: string
  ingredients: string[]
  servingTemperature: string
  glassType: string
  taste: string[]
  image: string
}

export const beers: Beer[] = [
  {
    id: "schneider-aventinus",
    name: "Schneider Aventinus",
    type: "Weizenbock",
    description:
      "Der Aventinus ist ein bayerischer Weizenbock mit kraftvollem Charakter. Dieses traditionelle Bier vereint die fruchtigen Aromen eines Weizenbiers mit der Stärke eines Bockbiers. Mit seiner tiefdunklen Farbe und dem cremigen Schaum ist es ein wahres Meisterwerk deutscher Braukunst.",
    origin: "Kelheim, Bayern",
    alcoholContent: 8.2,
    ibu: 16,
    color: "Dunkelbraun mit rubinroten Reflexen",
    ingredients: ["Weizenmalz", "Gerstenmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "8-10°C",
    glassType: "Weizenglas",
    taste: ["Banane", "Nelke", "Trockenfrüchte", "Karamell", "Leicht würzig"],
    image: "/dark-wheat-beer-bottle.jpg",
  },
  {
    id: "paulaner-salvator",
    name: "Paulaner Salvator",
    type: "Doppelbock",
    description:
      "Der Salvator ist der Archetyp des Doppelbocks und ein Münchner Original seit 1773. Mit seinem malzbetonten Charakter und der tiefdunklen Farbe verkörpert er bayerische Brautradition in Perfektion. Ein kraftvolles Bier mit samtiger Textur.",
    origin: "München, Bayern",
    alcoholContent: 7.9,
    ibu: 28,
    color: "Tiefes Mahagoni",
    ingredients: ["Münchner Malz", "Pilsner Malz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "8-9°C",
    glassType: "Willibecher",
    taste: ["Malz", "Karamell", "Brot", "Nüsse", "Leichte Röstaromen"],
    image: "/dark-bock-beer-glass.jpg",
  },
  {
    id: "weihenstephaner-vitus",
    name: "Weihenstephaner Vitus",
    type: "Weizenbock",
    description:
      "Das Vitus aus der ältesten Brauerei der Welt verbindet die Leichtigkeit eines Weizenbiers mit der Kraft eines Bockbiers. Ein bernsteinfarbenes Juwel mit komplexem Aromaprofil und vollmundigem Geschmack.",
    origin: "Freising, Bayern",
    alcoholContent: 7.7,
    ibu: 16,
    color: "Bernsteinfarben mit goldenen Reflexen",
    ingredients: ["Weizenmalz", "Gerstenmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "8-10°C",
    glassType: "Weizenglas",
    taste: ["Banane", "Zitrus", "Honig", "Gewürze", "Malz"],
    image: "/amber-wheat-beer-glass.jpg",
  },
  {
    id: "augustiner-edelstoff",
    name: "Augustiner Edelstoff",
    type: "Exportbier",
    description:
      "Das Edelstoff ist ein vollmundiges Exportbier aus München mit ausgewogenem Charakter. Ein Klassiker, der Tradition und Qualität vereint. Mit seinem goldenen Glanz und der feinen Hopfenbittere ist es ein zeitloser Favorit.",
    origin: "München, Bayern",
    alcoholContent: 5.6,
    ibu: 24,
    color: "Goldgelb mit klarem Glanz",
    ingredients: ["Pilsner Malz", "Münchner Malz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "7-9°C",
    glassType: "Bierkrug oder Seidel",
    taste: ["Malz", "Hopfen", "Brot", "Leichte Süße", "Ausgewogen"],
    image: "/golden-lager-beer-mug.jpg",
  },
  {
    id: "spaten-oktoberfest",
    name: "Spaten Oktoberfestbier",
    type: "Märzen",
    description:
      "Das Original Oktoberfestbier von Spaten ist ein bernsteinfarbenes Märzen mit malzigem Charakter. Seit 1872 auf dem Oktoberfest ausgeschenkt, verkörpert es bayerische Festkultur und Brautradition.",
    origin: "München, Bayern",
    alcoholContent: 5.9,
    ibu: 20,
    color: "Bernsteinfarben bis kupferrot",
    ingredients: ["Wiener Malz", "Münchner Malz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "8-10°C",
    glassType: "Maßkrug",
    taste: ["Malz", "Karamell", "Brot", "Leicht süßlich", "Ausgewogen"],
    image: "/amber-oktoberfest-beer-stein.jpg",
  },
  {
    id: "andechs-doppelbock-dunkel",
    name: "Andechser Doppelbock Dunkel",
    type: "Doppelbock",
    description:
      "Aus dem Kloster Andechs stammt dieser kraftvolle Doppelbock mit tiefdunkler Farbe und reichhaltigem Geschmack. Ein Bier mit Tradition seit 1455, das Mönchsbraukunst und bayerische Kultur vereint.",
    origin: "Andechs, Bayern",
    alcoholContent: 7.1,
    ibu: 22,
    color: "Dunkelbraun bis schwarz",
    ingredients: ["Münchner Malz", "Karamellmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "8-10°C",
    glassType: "Willibecher oder Kelch",
    taste: ["Röstmalz", "Schokolade", "Kaffee", "Trockenfrüchte", "Karamell"],
    image: "/dark-monastery-beer-chalice.jpg",
  },
  {
    id: "schneider-weisse-tap-7",
    name: "Schneider Weisse Original",
    type: "Hefeweizen",
    description:
      "Das Original Hefeweizen von Schneider Weisse ist ein klassisches bayerisches Weißbier mit bernsteinfarbener Tönung. Seit 1872 nach traditionellem Rezept gebraut, bietet es ein harmonisches Zusammenspiel fruchtiger und würziger Noten.",
    origin: "Kelheim, Bayern",
    alcoholContent: 5.4,
    ibu: 15,
    color: "Bernsteinfarben bis kupferrot",
    ingredients: ["Weizenmalz", "Gerstenmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "7-9°C",
    glassType: "Weizenglas",
    taste: ["Banane", "Nelke", "Karamell", "Brot", "Fruchtig"],
    image: "/amber-wheat-beer-bavarian.jpg",
  },
  {
    id: "erdinger-pikantus",
    name: "Erdinger Pikantus",
    type: "Weizenbock",
    description:
      "Der Pikantus ist ein dunkler Weizenbock mit pikant-würzigem Charakter und samtiger Textur. Ein kraftvolles Bier, das die Tradition der bayerischen Weizenbiere mit der Stärke eines Bockbiers verbindet.",
    origin: "Erding, Bayern",
    alcoholContent: 7.3,
    ibu: 18,
    color: "Tiefbraun mit rubinroten Reflexen",
    ingredients: ["Weizenmalz", "Gerstenmalz", "Karamellmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "8-10°C",
    glassType: "Weizenglas",
    taste: ["Banane", "Nelke", "Schokolade", "Karamell", "Würzig"],
    image: "/dark-wheat-bock-beer.jpg",
  },
  {
    id: "kostritzer-schwarzbier",
    name: "Köstritzer Schwarzbier",
    type: "Schwarzbier",
    description:
      "Das Köstritzer Schwarzbier ist ein klassisches deutsches Schwarzbier aus Thüringen mit mildem Charakter. Trotz seiner dunklen Farbe überrascht es mit einem weichen, leicht süßlichen Geschmack und feinherber Note.",
    origin: "Bad Köstritz, Thüringen",
    alcoholContent: 4.8,
    ibu: 30,
    color: "Tiefschwarz mit rubinroten Reflexen",
    ingredients: ["Pilsner Malz", "Röstmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "7-9°C",
    glassType: "Tulpenglas",
    taste: ["Röstmalz", "Schokolade", "Kaffee", "Leicht süßlich", "Mild"],
    image: "/black-lager-beer-dark.jpg",
  },
  {
    id: "schumacher-alt",
    name: "Schumacher Alt",
    type: "Altbier",
    description:
      "Ein traditionelles Düsseldorfer Altbier mit kupferroter Farbe und malzigem Charakter. Das Schumacher Alt wird nach alter Handwerkstradition obergärig gebraut und kühl gelagert, was ihm seinen einzigartigen Charakter verleiht.",
    origin: "Düsseldorf, Nordrhein-Westfalen",
    alcoholContent: 4.8,
    ibu: 35,
    color: "Kupferrot bis bernsteinfarben",
    ingredients: ["Pilsner Malz", "Münchner Malz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "6-8°C",
    glassType: "Altbierglas (0,2l)",
    taste: ["Malz", "Hopfen", "Brot", "Leicht bitter", "Trocken"],
    image: "/copper-alt-beer-glass.jpg",
  },
  {
    id: "ayinger-celebrator",
    name: "Ayinger Celebrator",
    type: "Doppelbock",
    description:
      "Der Celebrator ist ein weltbekannter Doppelbock aus Bayern mit tiefdunkler Farbe und komplexem Aromaprofil. Mit seiner cremigen Textur und den intensiven Malzaromen ist er ein Meisterwerk der Braukunst und wurde international mehrfach ausgezeichnet.",
    origin: "Aying, Bayern",
    alcoholContent: 6.7,
    ibu: 25,
    color: "Tiefdunkelbraun bis schwarz",
    ingredients: ["Münchner Malz", "Pilsner Malz", "Karamellmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "8-10°C",
    glassType: "Willibecher",
    taste: ["Schokolade", "Kaffee", "Pflaumen", "Karamell", "Nüsse"],
    image: "/dark-doppelbock-beer-bottle-glass-celebrator.jpg",
  },
  {
    id: "franziskaner-weissbier",
    name: "Franziskaner Weissbier",
    type: "Hefeweizen",
    description:
      "Das Franziskaner Weissbier ist ein klassisches Münchner Hefeweizen mit goldgelber Farbe und typischem Bananenduft. Seit 1363 wird in München unter diesem Namen gebraut, was es zu einer der traditionsreichsten Weißbiermarken macht.",
    origin: "München, Bayern",
    alcoholContent: 5.0,
    ibu: 12,
    color: "Goldgelb mit leichter Trübung",
    ingredients: ["Weizenmalz", "Gerstenmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "6-8°C",
    glassType: "Weizenglas",
    taste: ["Banane", "Zitrus", "Vanille", "Gewürznelke", "Fruchtig"],
    image: "/golden-wheat-beer-weizen-glass-franziskaner.jpg",
  },
  {
    id: "jever-pilsener",
    name: "Jever Pilsener",
    type: "Pilsner",
    description:
      "Das Jever Pilsener ist bekannt für seine markante Hopfenbittere und den herben Geschmack. Aus Friesland stammend, repräsentiert es den norddeutschen Bierstil mit klarer goldener Farbe und charakteristischer Herbheit.",
    origin: "Jever, Niedersachsen",
    alcoholContent: 4.9,
    ibu: 42,
    color: "Hellgoldgelb, klar",
    ingredients: ["Pilsner Malz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "6-8°C",
    glassType: "Pilsglas oder Tulpe",
    taste: ["Hopfen", "Herb", "Grasig", "Zitrus", "Trocken"],
    image: "/clear-golden-pilsner-beer-glass-jever.jpg",
  },
  {
    id: "maisel-weisse",
    name: "Maisel's Weisse Original",
    type: "Hefeweizen",
    description:
      "Ein fränkisches Weißbier aus Bayreuth mit ausgewogenem Charakter. Maisel's Weisse verbindet traditionelle Braukunst mit modernem Geschmack und bietet ein harmonisches Zusammenspiel von Fruchtigkeit und Würze.",
    origin: "Bayreuth, Franken",
    alcoholContent: 5.2,
    ibu: 14,
    color: "Goldgelb bis bernsteinfarben",
    ingredients: ["Weizenmalz", "Gerstenmalz", "Hopfen", "Hefe", "Wasser"],
    servingTemperature: "7-9°C",
    glassType: "Weizenglas",
    taste: ["Banane", "Nelke", "Honig", "Zitrus", "Weich"],
    image: "/amber-wheat-beer-weizen-maisel.jpg",
  },
  {
    id: "rothaus-tannen-zapfle",
    name: "Rothaus Tannenzäpfle",
    type: "Pilsner",
    description:
      "Das Tannenzäpfle aus dem Schwarzwald ist ein süddeutsches Kultbier mit ausgewogenem Charakter. Gebraut mit reinem Schwarzwälder Wasser auf über 1000 Metern Höhe, bietet es eine perfekte Balance zwischen Malz und Hopfen.",
    origin: "Grafenhausen, Baden-Württemberg",
    alcoholContent: 5.1,
    ibu: 36,
    color: "Goldgelb mit leicht grünlichem Schimmer",
    ingredients: ["Pilsner Malz", "Hopfen", "Hefe", "Schwarzwälder Wasser"],
    servingTemperature: "6-8°C",
    glassType: "Bierglas oder Humpen",
    taste: ["Hopfen", "Malz", "Ausgewogen", "Leicht herb", "Erfrischend"],
    image: "/golden-pilsner-beer-bottle-rothaus-tannenzapfle.jpg",
  },
]

export const getStrongestBeer = () => {
  return beers.reduce((strongest, current) => (current.alcoholContent > strongest.alcoholContent ? current : strongest))
}

export const getBeerById = (id: string) => {
  return beers.find((beer) => beer.id === id)
}

export const getBeerTypes = () => {
  return [...new Set(beers.map((beer) => beer.type))].sort()
}
