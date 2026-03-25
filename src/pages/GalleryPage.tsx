import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import heroHome from "@/assets/hero-home.jpg";
import menuHero from "@/assets/menu-hero.jpg";
import experienceHero from "@/assets/experience-hero.jpg";

const images = [
  { src: heroHome, alt: "Prasmanan buffet table", span: "md:col-span-2 md:row-span-2" },
  { src: gallery1, alt: "Customers at buffet", span: "" },
  { src: gallery6, alt: "Neon bakso sign", span: "" },
  { src: menuHero, alt: "Bakso varieties overhead", span: "md:col-span-2" },
  { src: gallery2, alt: "Meatball assortment", span: "" },
  { src: gallery3, alt: "Family dining", span: "" },
  { src: gallery4, alt: "Steaming noodle bowls", span: "" },
  { src: gallery5, alt: "Tetelan topping", span: "" },
  { src: experienceHero, alt: "Live cooking station", span: "md:col-span-2" },
];

const GalleryPage = () => (
  <main className="pt-24">
    <section className="px-6 py-12">
      <div className="container mx-auto">
        <h1 className="font-display text-5xl md:text-6xl font-bold text-center mb-4 text-glow">Gallery</h1>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
          A visual journey through our neon-lit bamboo paradise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-lg group ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full min-h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default GalleryPage;
