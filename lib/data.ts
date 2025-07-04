import type { House, Project } from "./types"

export const houses: House[] = [
  {
    id: "1",
    slug: "APOLI",
    name: "APOLI",
    shortDescription: "Udržateľné bývanie sa snúbi s moderným dizajnom. 200 m², 4 izby, 2 kúpeľne.",
    longDescription:
      "Moderný Eko Dom je navrhnutý pre tých, ktorí hľadajú harmonické spojenie ekologického bývania a modernej estetiky. Vďaka pasívnemu solárnemu dizajnu, zberu dažďovej vody a lokálne získaným udržateľným materiálom tento dom minimalizuje svoju environmentálnu stopu a zároveň maximalizuje komfort a štýl. Veľké, energeticky úsporné okná zaplavujú otvorené obytné priestory prirodzeným svetlom.",
    mainImage: "/apoli/main.jpg",
    images: [
      "/apoli/1-den.jpg",
      "/apoli/3-den.jpg",
      "/apoli/15-den.jpg",
      "/apoli/20-den.jpg",
      "/apoli/50-den.jpg",
      "/apoli/70-den.jpg",
      "/apoli/183-den.jpg",
    ],
    features: [
      "Solárne panely",
      "Zber dažďovej vody",
      "Integrácia inteligentnej domácnosti",
      "Otvorený koncept dispozície",
      "Recyklované materiály",
    ],
    sqft: 200,
    bedrooms: 4, // Assuming "izby" means rooms in general, often used for bedrooms
    bathrooms: 2,
    priceRange: "od 250 000 €",
  },
  {
    id: "2",
    slug: "ELI",
    name: "ELI",
    shortDescription: "Priestranný a útulný, ideálny pre rastúce rodiny. 280 m², 5 izieb, 3 kúpeľne.",
    longDescription:
      "Klasický Rodinný Dom ponúka nadčasovú príťažlivosť svojimi veľkorysými proporciami a rodinne orientovanou dispozíciou. Veľká gurmánska kuchyňa, útulný krb vo veľkej obývacej izbe a dostatok vonkajšieho priestoru ho robia ideálnym pre zábavu aj každodenný život. Kvalitné remeselné spracovanie a tradičné dizajnové prvky zaručujú, že tento dom bude cenený po generácie.",
    mainImage: "/eli/main.jpg",
    images: [
      "/eli/Eli-01.jpg",
      "/eli/Eli-02.jpg",
      "/eli/Eli-05.jpg",
      "/eli/Eli-06.jpg",
      "/eli/Eli-09.jpg",
      "/eli/Eli-12.jpg",
      "/eli/Eli-15.jpg",
    ],
    features: ["Gurmánska kuchyňa", "Drevené podlahy", "Veľká záhrada", "Domáca kancelária", "Herňa"],
    sqft: 280,
    bedrooms: 5,
    bathrooms: 3,
    priceRange: "od 320 000 €",
  },
  {
    id: "3",
    slug: "VIERA",
    name: "VIERA",
    shortDescription: "Priestranný a útulný, ideálny pre rastúce rodiny. 280 m², 5 izieb, 3 kúpeľne.",
    longDescription:
      "Klasický Rodinný Dom ponúka nadčasovú príťažlivosť svojimi veľkorysými proporciami a rodinne orientovanou dispozíciou. Veľká gurmánska kuchyňa, útulný krb vo veľkej obývacej izbe a dostatok vonkajšieho priestoru ho robia ideálnym pre zábavu aj každodenný život. Kvalitné remeselné spracovanie a tradičné dizajnové prvky zaručujú, že tento dom bude cenený po generácie.",
    mainImage: "/viera/main.jpg",
    images: [
      "/viera/Viera-01.jpg",
      "/viera/Viera-02.jpg",
      "/viera/Viera-03.jpg",
      "/viera/Viera-04.jpg",
      "/viera/Viera-05.jpg",
      "/viera/Viera-07.jpg",
      "/viera/Viera-09.jpg",
    ],
    features: ["Gurmánska kuchyňa", "Drevené podlahy", "Veľká záhrada", "Domáca kancelária", "Herňa"],
    sqft: 280,
    bedrooms: 5,
    bathrooms: 3,
    priceRange: "od 320 000 €",
  },
  {
    id: "4",
    slug: "dom-pre-narocnych",
    name: "Dom pre náročných",
    shortDescription: "Priestranný a útulný, ideálny pre rastúce rodiny. 280 m², 5 izieb, 3 kúpeľne.",
    longDescription:
      "Klasický Rodinný Dom ponúka nadčasovú príťažlivosť svojimi veľkorysými proporciami a rodinne orientovanou dispozíciou. Veľká gurmánska kuchyňa, útulný krb vo veľkej obývacej izbe a dostatok vonkajšieho priestoru ho robia ideálnym pre zábavu aj každodenný život. Kvalitné remeselné spracovanie a tradičné dizajnové prvky zaručujú, že tento dom bude cenený po generácie.",
    mainImage: "/viera/main.jpg",
    images: [
      "/placeholder.svg?width=1200&height=800",
      "/placeholder.svg?width=1200&height=800",
      "/placeholder.svg?width=1200&height=800",
    ],
    features: ["Gurmánska kuchyňa", "Drevené podlahy", "Veľká záhrada", "Domáca kancelária", "Herňa"],
    sqft: 280,
    bedrooms: 5,
    bathrooms: 3,
    priceRange: "od 320 000 €",
  },
]

export const projects: Project[] = [
  {
    id: "p1",
    slug: "APOLI",
    name: "APOLI",
    shortDescription: "Luxusná vila s úchvatným panoramatickým výhľadom.",
    longDescription:
      "Tento projekt na mieru zahŕňal komplexné plánovanie pozemku s cieľom maximalizovať ohromujúce výhľady zo svahu. Vila Slnečný Vrch disponuje rozsiahlymi presklenými stenami, viacúrovňovými terasami a infinity bazénom, všetko navrhnuté tak, aby sa dokonale integrovalo s prírodnou krajinou. Interiér sa pýši zákazkovým stolárstvom, špičkovými povrchovými úpravami a najmodernejšími technológiami.",
    mainImage: "/apoli/main.jpg",
    images: [
      "/apoli/1-den.jpg",
      "/apoli/3-den.jpg",
      "/apoli/15-den.jpg",
      "/apoli/20-den.jpg",
      "/apoli/50-den.jpg",
      "/apoli/70-den.jpg",
      "/apoli/183-den.jpg",
    ],
    location: "Prestížne Kopce, SK",
    yearCompleted: 2023,
    category: "Luxusné Rezidenčné",
    clientTestimonial:
      '"Pozornosť k detailom a záväzok ku kvalite boli výnimočné. Náš vysnívaný dom je teraz realitou!"',
  },
  {
    id: "p2",
    slug: "ELI",
    name: "ELI",
    shortDescription: "Moderné radové domy navrhnuté pre kompaktné mestské bývanie.",
    longDescription:
      "Tento projekt premenil nevyužitý mestský pozemok na živú komunitu moderných radových domov. Každá jednotka sa vyznačuje inteligentným využitím priestoru, súkromnými strešnými terasami a udržateľnými stavebnými postupmi. Projekt oživil štvrť a poskytol veľmi potrebné možnosti súčasného bývania.",
    mainImage: "/eli/main.jpg",
    images: ["/eli/Eli-01.jpg",
      "/eli/Eli-02.jpg",
      "/eli/Eli-05.jpg",
      "/eli/Eli-06.jpg",
      "/eli/Eli-09.jpg",
      "/eli/Eli-12.jpg",
      "/eli/Eli-15.jpg",],
    location: "Centrum Mesta, SK",
    yearCompleted: 2022,
    category: "Viacgeneračné Rezidenčné",
  },
  {
    id: "p3",
    slug: "VIERA",
    name: "VIERA",
    shortDescription: "Elegantný a funkčný dom s priamym prístupom k jazeru.",
    longDescription:
      "Navrhnutý s dôrazom na jednoduchosť a spojenie s prírodou, tento dom ponúka pokojné útočisko. Veľké okná rámujú výhľady na jazero a okolitú krajinu. Interiér je charakteristický čistými líniami a prírodnými materiálmi.",
    mainImage: "/viera/main.jpg",
    images: ["/viera/Viera-01.jpg",
      "/viera/Viera-02.jpg",
      "/viera/Viera-03.jpg",
      "/viera/Viera-04.jpg",
      "/viera/Viera-05.jpg",
      "/viera/Viera-07.jpg",
      "/viera/Viera-09.jpg",],
    location: "Jazerná Dolina, SK",
    yearCompleted: 2024,
    category: "Rekreačné Bývanie",
  },
  {
    id: "p4",
    slug: "dom-pre-narocnych",
    name: "Dom pre náročných",
    shortDescription: "Citlivá obnova historickej budovy v srdci mesta.",
    longDescription:
      "Tento náročný projekt sa zameral na obnovu pôvodných architektonických prvkov historickej budovy pri súčasnom začlenení moderných technológií a komfortu. Výsledkom je unikátne spojenie histórie a súčasnosti.",
    mainImage: "/apoli/main.jpg",
    images: ["/placeholder.svg?width=1200&height=800", "/placeholder.svg?width=1200&height=800"],
    location: "Staré Mesto, SK",
    yearCompleted: 2023,
    category: "Rekonštrukcia",
  },
]

export const getHouseBySlug = async (slug: string): Promise<House | undefined> => houses.find((h) => h.slug === slug)
export const getProjectBySlug = (slug: string): Project | undefined => projects.find((p) => p.slug === slug)
