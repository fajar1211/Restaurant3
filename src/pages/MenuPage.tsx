import HeroSection from "@/components/HeroSection";
import menuImg from "@/assets/menu-hero.jpg";

const menuItems = [
  { category: "Signature Bakso", items: [
    { name: "Bakso Urat", desc: "Classic beef tendon meatball with rich, chewy texture", price: "Included" },
    { name: "Bakso Telur", desc: "Egg-filled meatball — a perfect combo of savory and creamy", price: "Included" },
    { name: "Bakso Keju", desc: "Melted cheese center that oozes with every bite", price: "Included" },
    { name: "Bakso Ikan", desc: "Fresh fish meatball with a delicate ocean flavor", price: "Included" },
    { name: "Bakso Aci", desc: "Chewy tapioca-based meatball, a Sundanese classic", price: "Included" },
    { name: "Pentol Pedas", desc: "Spicy fried meatball — crispy outside, fiery inside", price: "Included" },
    { name: "Bakso Mercon", desc: "Explosive chili meatball for the brave", price: "Included" },
    { name: "Bakso Lobster", desc: "Premium lobster-infused meatball, our chef's special", price: "Included" },
    { name: "Bakso Jamur", desc: "Mushroom-filled meatball with earthy, umami depth", price: "Included" },
    { name: "Bakso Gepeng", desc: "Flat-pressed meatball, extra surface for that broth soak", price: "Included" },
  ]},
  { category: "Noodles & Sides", items: [
    { name: "Mie Kuning", desc: "Yellow egg noodles, perfectly springy", price: "Included" },
    { name: "Bihun", desc: "Silky rice vermicelli, light and satisfying", price: "Included" },
    { name: "Tahu Goreng", desc: "Golden fried tofu, crispy exterior and soft inside", price: "Included" },
    { name: "Tetelan", desc: "Slow-braised beef tendon — our famous free topping", price: "FREE" },
  ]},
  { category: "Beverages", items: [
    { name: "Es Teh Manis", desc: "Classic sweet iced tea", price: "IDR 10K" },
    { name: "Es Jeruk Segar", desc: "Fresh-squeezed orange juice on ice", price: "IDR 15K" },
    { name: "Kopi Susu Aren", desc: "Palm sugar latte, rich and creamy", price: "IDR 20K" },
  ]},
];

const MenuPage = () => (
  <main>
    <HeroSection
      image={menuImg}
      title="Our Menu"
      subtitle="15+ handcrafted varieties — pay once, eat unlimited"
    />

    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full font-bold tracking-widest uppercase text-sm mb-4">
            All-You-Can-Eat
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-glow">
            IDR 45,000 / Person
          </h2>
          <p className="text-muted-foreground mt-2">Unlimited bakso, noodles, sides & free tetelan topping</p>
        </div>

        {menuItems.map((section, si) => (
          <div key={si} className="mb-16">
            <h3 className="font-display text-2xl font-bold text-primary mb-8 border-b border-border pb-4">
              {section.category}
            </h3>
            <div className="space-y-6">
              {section.items.map((item, ii) => (
                <div key={ii} className="flex justify-between items-start gap-4 group">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                  </div>
                  <span className={`text-sm font-bold tracking-wider ${item.price === "FREE" ? "text-bamboo-light" : item.price === "Included" ? "text-primary" : "text-foreground"}`}>
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

export default MenuPage;
