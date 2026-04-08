import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center md:text-left">
          <div>
            <p className="font-heading text-base font-semibold mb-1">VC Agence — Côte d'Azur</p>
            <a href="mailto:vc.agenceweb@gmail.com" className="font-body text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">
              vc.agenceweb@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center gap-2">
            <a href="#accueil" className="font-body text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Accueil</a>
            <a href="#offre" className="font-body text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">L'offre</a>
            <a href="#contact" className="font-body text-sm text-footer-foreground/70 hover:text-footer-foreground transition-colors">Contact</a>
          </div>
          <div className="md:text-right">
            <p className="font-body text-sm text-footer-foreground/70">Auto-entrepreneur</p>
            <p className="font-body text-sm text-footer-foreground/70">SIRET [à compléter]</p>
          </div>
        </div>
        <div className="border-t border-footer-foreground/10 mt-8 pt-6 text-center">
          <Link
            to="/abonnements"
            className="font-body text-xs text-footer-foreground/40 hover:underline hover:text-footer-foreground/60 transition-colors"
          >
            Formules de suivi →
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
