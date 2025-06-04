import Image from "next/image"
import AnimatedSection from "@/components/animated-section"
import { Users, Target, Eye, Award } from "lucide-react"

export default function AboutUsPage() {
  return (
    <>
      <AnimatedSection className="bg-primary text-primary-foreground pb-16 pt-32 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">O spoločnosti <span className="text-slate-300 font-light">EP</span>Domy</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Už viac ako 15 rokov staviame s vášňou, precíznosťou a osobným prístupom.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Náš príbeh</h2>
            <p className="text-muted-foreground mb-4">
              Spoločnosť EPDomy bola založená v roku 2005 s jednoduchým cieľom: sprístupniť sen o krásne
              navrhnutom, kvalitnom dome bez stresu. Uvedomovali sme si, že stavba domu je jednou z najväčších životných
              investícií, a chceli sme vytvoriť proces, ktorý je transparentný, spolupracujúci a príjemný pre našich klientov.
            </p>
            <p className="text-muted-foreground">
              Počas rokov sme sa stali dôveryhodným menom v stavebníctve, známym pre inovatívne návrhy, udržateľné
              stavebné praktiky a neochvejný záväzok voči spokojnosti zákazníkov. Náš tím architektov, dizajnérov a
              staviteľov pracuje v súlade na naplnení vašej vízie.
            </p>
          </div>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about.jpg"
              alt="Stavebný plán na stavenisku"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Naše hodnoty</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-primary mb-4" />,
                title: "Kvalitné remeselné spracovanie",
                description: "Používame tie najlepšie materiály a precízne techniky pre trvalú hodnotu.",
              },
              {
                icon: <Users className="h-10 w-10 text-primary mb-4" />,
                title: "Prístup zameraný na klienta",
                description: "Vaše potreby a vízia sú stredobodom všetkého, čo robíme.",
              },
              {
                icon: <Target className="h-10 w-10 text-primary mb-4" />,
                title: "Integrita a transparentnosť",
                description: "Úprimná komunikácia a jasné procesy budujú dôveru.",
              },
              {
                icon: <Eye className="h-10 w-10 text-primary mb-4" />,
                title: "Inovácia a udržateľnosť",
                description: "Využívame moderné riešenia pre efektívne a ekologické domy.",
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-background rounded-lg shadow hover:text-blue-300">
                {value.icon}
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  )
}