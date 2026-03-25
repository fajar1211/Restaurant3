import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-home.jpg";
import menuImg from "@/assets/menu-hero.jpg";
import experienceImg from "@/assets/experience-hero.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import HeroSection from "@/components/HeroSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import { ChefHat, Flame, Users, Infinity } from "lucide-react";

const features = [
  { icon: Flame, title: "Live Cooking", desc: "Watch our chefs fry pentol right before your eyes" },
  { icon: Infinity, title: "Unlimited Feast", desc: "Pay once, eat as much as you want — no limits" },
  { icon: ChefHat, title: "15+ Varieties", desc: "From bakso urat to cheese-filled, every craving covered" },
  { icon: Users, title: "Family Friendly", desc: "Perfect for young crowds and budget-savvy families" },
];

const Index = () => {
  return (
    <main>
      <HeroSection
        image={heroImg}
        title="Connective"
        subtitle="Premium All-You-Can-Eat Bakso Prasmanan — Where Neon Meets Bamboo"
      />

      <MarqueeStrip />

      {/* Features */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-4 text-glow">
            The Experience
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Inspired by the viral bakso prasmanan culture of Pontianak & Sumedang
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass rounded-lg p-8 text-center hover:neon-border transition-shadow duration-500 group"
              >
                <f.icon className="mx-auto mb-5 text-primary group-hover:animate-float" size={36} />
                <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature highlight */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-glow">
              Signature Bakso<br />Like No Other
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our long prasmanan table is loaded with over 15 varieties of handcrafted bakso — from the classic
              beef tendon urat to the indulgent cheese-filled, spicy pentol, fish balls, and aci. Paired with
              fresh mie, bihun, tahu, and our legendary free tetelan topping.
            </p>
            <Link
              to="/menu"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-semibold tracking-widest uppercase text-sm rounded hover:opacity-90 transition"
            >
              Explore Menu
            </Link>
          </div>
          <div className="relative">
            <img src={menuImg} alt="Signature Bakso" className="rounded-lg w-full object-cover h-[400px]" loading="lazy" width={1920} height={1080} />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg opacity-30" />
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* Experience preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img src={experienceImg} alt="Live Cooking" className="rounded-lg w-full object-cover h-[400px]" loading="lazy" width={1920} height={1080} />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-glow">
              Live Pentol<br />Frying Station
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Experience the sizzle and aroma as our chefs fry fresh pentol right in front of you.
              The theatrical cooking show adds excitement to every visit — perfect for Instagram-worthy moments.
            </p>
            <Link
              to="/experience"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 font-semibold tracking-widest uppercase text-sm rounded hover:opacity-90 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
            A Glimpse Inside
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[gallery3, gallery5, gallery6].map((img, i) => (
              <div key={i} className="overflow-hidden rounded-lg group">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={1280}
                  height={960}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block border border-primary text-primary px-8 py-3 font-semibold tracking-widest uppercase text-sm rounded hover:bg-primary hover:text-primary-foreground transition"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-glow">
          Ready to Feast?
        </h2>
        <p className="text-muted-foreground mb-10 max-w-lg mx-auto">
          Pay once, eat unlimited. Bring your family, bring your crew — everyone's welcome at Connective.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 font-semibold tracking-widest uppercase text-sm rounded hover:opacity-90 transition"
        >
          Reserve a Table
        </Link>
      </section>
    </main>
  );
};

export default Index;
