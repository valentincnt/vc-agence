import { Link } from "react-router-dom";
import { useFadeInUp } from "@/hooks/use-fade-in-up";

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const Abonnements = () => {
  const ref = useFadeInUp();

  return (
    <div className="min-h-screen bg-background" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 py-12">
        <Link to="/" className="inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          ← Retour
        </Link>

        <h1 className="fade-in-up font-heading text-3xl md:text-[44px] md:leading-[1.2] font-bold text-foreground text-center mb-4">
          Votre site reste entre de bonnes mains.
        </h1>
        <p className="fade-in-up font-body text-base md:text-lg text-muted-foreground text-center max-w-[520px] mx-auto mb-16" style={{ transitionDelay: '100ms' }}>
          Après la création, deux formules de suivi pour que votre site reste en ligne, à jour et utile.
        </p>

        <div className="fade-in-up grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto" style={{ transitionDelay: '200ms' }}>
          {/* Essentiel */}
          <div className="border border-border rounded-2xl p-8 bg-background">
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-muted-foreground border border-border px-3 py-1 rounded-full mb-6">
              Essentiel
            </span>
            <p className="font-heading text-3xl font-bold text-foreground mb-1">29,99&nbsp;€<span className="text-base font-normal text-muted-foreground">/mois</span></p>
            <p className="font-heading text-sm italic text-muted-foreground mb-6">Votre site reste en ligne, à jour et sécurisé.</p>
            <ul className="space-y-3 mb-8">
              {["Hébergement + nom de domaine", "Maintenance technique", "Support par email (réponse sous 48h)"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground">
                  <CheckIcon /><span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:vc.agenceweb@gmail.com?subject=Formule Essentiel" className="font-body text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors">
              Me contacter pour cette formule
            </a>
          </div>

          {/* Sérénité */}
          <div className="border-[1.5px] border-primary rounded-2xl p-8 bg-background relative">
            <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest bg-primary text-primary-foreground px-3 py-1 rounded-full mb-6">
              Sérénité
            </span>
            <p className="font-heading text-3xl font-bold text-foreground mb-1">49,99&nbsp;€<span className="text-base font-normal text-muted-foreground">/mois</span></p>
            <p className="font-heading text-sm italic text-muted-foreground mb-6">Votre site évolue avec votre activité.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Tout l'Essentiel inclus",
                "Modifications de contenu (textes, photos, horaires, prix) — 1 à 2 demandes/mois",
                "Ajout ou suppression d'une section simple",
                "Rapport mensuel de performance (visites, pages vues)",
                "Support prioritaire (réponse sous 24h)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-body text-sm text-foreground">
                  <CheckIcon /><span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:vc.agenceweb@gmail.com?subject=Formule Sérénité" className="font-body text-sm text-muted-foreground hover:text-foreground underline-offset-4 hover:underline transition-colors">
              Me contacter pour cette formule
            </a>
          </div>
        </div>

        <p className="font-body text-xs text-muted-foreground text-center mt-12">
          Ces formules sont proposées après la création de votre site. Aucun engagement minimum.
        </p>
      </div>
    </div>
  );
};

export default Abonnements;
