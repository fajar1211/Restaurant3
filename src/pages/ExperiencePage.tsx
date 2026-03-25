import HeroSection from "@/components/HeroSection";
import experienceImg from "@/assets/experience-hero.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import { Flame, Utensils, Camera, Heart } from "lucide-react";

const steps = [
  { icon: Utensils, title: "Grab Your Bowl", desc: "Pick your favorite bowl and head to the prasmanan buffet table." },
  { icon: Flame, title: "Load Up", desc: "Choose from 15+ bakso varieties, noodles, tahu, and sides — unlimited." },
  { icon: Camera, title: "Watch the Show", desc: "Our chefs fry fresh pentol right in front of you. Snap a photo!" },
  { icon: Heart, title: "Free Tetelan", desc: "Top it all off with our legendary braised beef tendon — always free." },
];

const ExperiencePage = () => (
  <main>
    <HeroSection
      image={experienceImg}
      title="The Experience"
      subtitle="Pay once. Eat unlimited. Live the vibe."
    />

    <section className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-glow">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center glass rounded-lg p-8 hover:neon-border transition-shadow duration-500">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <step.icon className="text-primary" size={28} />
              </div>
              <div className="text-primary font-display text-sm font-bold tracking-widest mb-3">
                STEP {i + 1}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-display text-4xl font-bold mb-6 text-glow">Perfect For Everyone</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✦</span>
              Young crowds looking for trendy, affordable dining
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✦</span>
              Families seeking a fun, budget-friendly feast
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✦</span>
              Food enthusiasts chasing the viral bakso experience
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">✦</span>
              Content creators who love photogenic restaurants
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src={gallery4} alt="Noodle bowls" className="rounded-lg w-full h-48 object-cover" loading="lazy" width={1280} height={960} />
          <img src={gallery5} alt="Tetelan" className="rounded-lg w-full h-48 object-cover" loading="lazy" width={1280} height={960} />
        </div>
      </div>
    </section>
  </main>
);

export default ExperiencePage;
