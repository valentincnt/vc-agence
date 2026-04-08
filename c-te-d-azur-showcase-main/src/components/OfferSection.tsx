import { useFadeInUp } from "@/hooks/use-fade-in-up";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const inclusions = [
  "Site vitrine sur-mesure, développé avec soin",
  "Design adapté à votre activité et votre image",
  "Optimisé pour les mobiles et les tablettes",
  "Référencement naturel de base intégré (SEO)",
  "Formulaire de contact fonctionnel",
  "Livraison en 7 à 10 jours ouvrés",
];

const OfferSection = () => {
  const ref = useFadeInUp();

  return (
    <section id="offre" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="fade-in-up font-heading text-3xl md:text-[40px] font-bold text-foreground text-center mb-14">
          Une offre claire. Un seul tarif.
        </h2>
        <div className="fade-in-up max-w-[580px] mx-auto border border-primary/30 rounded-2xl shadow-sm p-8 md:p-10 bg-background" style={{ transitionDelay: '150ms' }}>
          <div className="flex justify-center mb-6">
            <span className="bg-primary text-primary-foreground font-body text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Création de site vitrine
            </span>
          </div>
          <div className="text-center mb-2">
            <span className="font-heading text-6xl md:text-7xl font-bold text-primary">659&nbsp;€</span>
          </div>
          <p className="text-center font-body text-sm text-muted-foreground mb-8">TTC — paiement unique</p>
          <div className="border-t border-border mb-8" />
          <ul className="space-y-4 mb-10">
            {inclusions.map((item, i) => (
              <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground">
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <a
              href="#contact"
              className="inline-block bg-primary text-primary-foreground font-body text-base font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all shadow-md hover:shadow-lg"
            >
              Démarrer mon projet
            </a>
            <p className="font-body text-xs text-muted-foreground mt-4">
              Formules de maintenance disponibles après la création.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
