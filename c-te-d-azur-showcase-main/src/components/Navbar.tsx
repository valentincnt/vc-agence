const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <a href="#accueil" className="font-heading text-xl font-bold tracking-tight text-foreground">
          VC Agence
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#accueil" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Accueil</a>
          <a href="#offre" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">L'offre</a>
          <a href="#contact" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors">Contact</a>
        </div>
        <a
          href="#offre"
          className="hidden md:inline-block bg-primary text-primary-foreground font-body text-sm font-medium px-5 py-2.5 rounded-lg hover:brightness-110 transition-all"
        >
          Obtenir mon site
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
