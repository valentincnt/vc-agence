const HeroPattern = () => (
  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C9A84C" strokeWidth="0.5" opacity="0.04" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hero-grid)" />
  </svg>
);

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      <HeroPattern />
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="font-heading text-4xl md:text-[56px] md:leading-[1.15] font-bold text-foreground mb-6">
          Votre présence en ligne, pensée pour votre métier.
        </h1>
        <p className="font-body text-lg md:text-xl text-secondary mb-10 max-w-xl mx-auto">
          VC Agence conçoit des sites vitrines clés en main pour les professionnels de la Côte d'Azur.
        </p>
        <a
          href="#offre"
          className="inline-block bg-primary text-primary-foreground font-body text-base font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all shadow-md hover:shadow-lg"
        >
          Obtenir mon site — 659&nbsp;€ TTC
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
