import ContactForm from "@/components/contact/contact-form"
import { Mail, Phone, MapPinIcon } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      <section className="bg-primary text-primary-foreground pb-16 pt-32 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Spojme sa!</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Sme tu pre Vás aby sme Vám odpovedali na všetky otázky
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Napíšte Nám správu</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontaktné informácie</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <MapPinIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>123 Construction Ave, Buildtown, ST 54321, USA</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="tel:+11234567890" className="hover:text-primary">
                    +421 911 123 456
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="mailto:info@turnkeyhomes.com" className="hover:text-primary">
                    info@epdomy.sk
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Otváracie hodiny</h3>
              <p className="text-muted-foreground">Pondelok - Piatok: 9:00 - 5:00</p>
              <p className="text-muted-foreground">Sobota: 10:00 - 2:00</p>
              <p className="text-muted-foreground">Nedela: Zatvorené</p>
            </div>
            {/* Optional: Add a map embed here */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2000000000003!2d-73.98513088459243!3d40.74881797932674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1617298765432!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Company Location Map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
