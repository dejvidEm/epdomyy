import AnimatedSection from "@/components/animated-section"
import ContactForm from "@/components/contact/contact-form"
import { Mail, Phone, MapPinIcon } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      <AnimatedSection className="bg-primary text-primary-foreground pb-16 pt-32 md:pt-48 md:pb-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            We're here to answer your questions and help you start your dream home journey. Reach out to us today!
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4 text-lg">
                <p className="flex items-start gap-3">
                  <MapPinIcon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>123 Construction Ave, Buildtown, ST 54321, USA</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="tel:+11234567890" className="hover:text-primary">
                    (123) 456-7890
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <a href="mailto:info@turnkeyhomes.com" className="hover:text-primary">
                    info@turnkeyhomes.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
              <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-muted-foreground">Saturday: 10:00 AM - 2:00 PM (By Appointment)</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
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
      </AnimatedSection>
    </div>
  )
}
