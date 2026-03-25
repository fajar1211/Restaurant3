import HeroSection from "@/components/HeroSection";
import contactImg from "@/assets/contact-hero.jpg";
import { MapPin, Phone, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const ContactPage = () => (
  <main>
    <HeroSection
      image={contactImg}
      title="Find Us"
      subtitle="We'd love to see you. Walk in or reserve a table."
    />

    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h2 className="font-display text-4xl font-bold mb-8 text-glow">Get In Touch</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={22} />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground text-sm">
                    Jl. Gajah Mada No. 88, Pontianak<br />
                    West Kalimantan, Indonesia 78121
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 flex-shrink-0" size={22} />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground text-sm">+62 561 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 flex-shrink-0" size={22} />
                <div>
                  <h3 className="font-semibold mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon – Thu: 10:00 AM – 10:00 PM<br />
                    Fri – Sun: 10:00 AM – 11:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="glass w-12 h-12 rounded-full flex items-center justify-center hover:neon-border transition-shadow">
                  <Facebook className="text-primary" size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="glass w-12 h-12 rounded-full flex items-center justify-center hover:neon-border transition-shadow">
                  <Instagram className="text-primary" size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="glass w-12 h-12 rounded-full flex items-center justify-center hover:neon-border transition-shadow">
                  <Youtube className="text-primary" size={20} />
                </a>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="glass w-12 h-12 rounded-full flex items-center justify-center hover:neon-border transition-shadow">
                  <MapPin className="text-primary" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="glass rounded-lg overflow-hidden neon-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.89!2d109.3425!3d-0.0263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d59c7b0c0b6df%3A0x4030bfbca7d2fe0!2sPontianak!5e0!3m2!1sen!2sid!4v1700000000000"
              width="100%"
              height="500"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Connective Location"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default ContactPage;
