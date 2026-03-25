import { Facebook, Instagram, Youtube, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="font-display text-2xl font-bold text-primary text-glow mb-4">CONNECTIVE</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Where tradition meets innovation. Premium all-you-can-eat bakso experience inspired by the viral prasmanan culture.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Visit Us</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Jl. Gajah Mada No. 88<br />
            Pontianak, West Kalimantan<br />
            Indonesia 78121
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Hours</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Mon – Thu: 10:00 AM – 10:00 PM<br />
            Fri – Sun: 10:00 AM – 11:00 PM<br />
            Open Daily
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-foreground mb-4">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={22} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Youtube size={22} />
            </a>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <MapPin size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-8 text-center">
        <p className="text-muted-foreground text-xs tracking-widest uppercase">
          © 2026 Connective. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
