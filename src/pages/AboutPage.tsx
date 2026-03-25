import HeroSection from "@/components/HeroSection";
import aboutImg from "@/assets/about-hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const AboutPage = () => (
  <main>
    <HeroSection
      image={aboutImg}
      title="Our Story"
      subtitle="From the streets of Pontianak & Sumedang to a premium dining revolution"
    />

    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6 text-glow">Born From Viral Culture</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Connective was born from the explosive bakso prasmanan trend sweeping Pontianak and Sumedang.
              We saw long lines, excited families, and a genuine love for communal dining — and we knew
              we had to elevate it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combined the soul of street-side warung prasmanan with contemporary design:
              neon-lit bamboo interiors rooted in Kalimantan heritage, long buffet tables equipped with
              portable stoves, and a curated selection of over 15 bakso varieties handcrafted daily.
            </p>
          </div>
          <img src={gallery1} alt="Our restaurant" className="rounded-lg w-full h-[400px] object-cover" loading="lazy" width={1280} height={960} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img src={gallery6} alt="Neon ambiance" className="rounded-lg w-full h-[400px] object-cover order-2 lg:order-1" loading="lazy" width={1280} height={960} />
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl font-bold mb-6 text-glow">Neon × Bamboo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our interior pays homage to Kalimantan's bamboo craftsmanship while embracing the electric
              energy of modern neon aesthetics. Every corner is designed for the perfect photo — and the
              perfect bowl of bakso.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Connective, dining isn't just eating — it's an experience. From the sizzling live
              pentol station to the warm glow of amber neon reflecting off bamboo walls, every detail
              is crafted to connect people through food and atmosphere.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
