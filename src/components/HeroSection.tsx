interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  overlay?: boolean;
}

const HeroSection = ({ image, title, subtitle, overlay = true }: HeroSectionProps) => (
  <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    {overlay && (
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
    )}
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground text-glow leading-tight mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-foreground/70 font-light tracking-wide max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default HeroSection;
