import { useState, FormEvent } from "react";
import { useFadeInUp } from "@/hooks/use-fade-in-up";

const ContactSection = () => {
  const ref = useFadeInUp();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // TODO: Replace with your Formspree form ID
      // Create a form at https://formspree.io for vc.agenceweb@gmail.com
      await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer ou envoyer un email directement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-background py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 md:px-8 max-w-lg">
        <h2 className="fade-in-up font-heading text-2xl md:text-4xl font-bold text-foreground text-center mb-4">
          Parlons de votre projet
        </h2>
        <p className="fade-in-up font-body text-base text-muted-foreground text-center mb-12">
          Répondez à deux questions, je vous recontacte sous 24h.
        </p>

        {submitted ? (
          <div className="fade-in-up visible text-center py-12">
            <p className="font-heading text-2xl font-semibold text-foreground mb-2">Merci !</p>
            <p className="font-body text-muted-foreground">Votre demande a bien été envoyée. Je reviens vers vous très vite.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="fade-in-up space-y-5" style={{ transitionDelay: '150ms' }}>
            <div>
              <label htmlFor="prenom" className="block font-body text-sm font-medium text-foreground mb-1.5">Votre prénom</label>
              <input
                id="prenom"
                name="prenom"
                type="text"
                required
                className="w-full font-body text-sm px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="activite" className="block font-body text-sm font-medium text-foreground mb-1.5">Votre activité <span className="text-muted-foreground">(ex : plombier, coiffeur, électricien…)</span></label>
              <input
                id="activite"
                name="activite"
                type="text"
                required
                className="w-full font-body text-sm px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-1.5">Votre email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full font-body text-sm px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-1.5">Votre besoin en quelques mots <span className="text-muted-foreground">(optionnel)</span></label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full font-body text-sm px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-primary-foreground font-body text-base font-semibold px-8 py-4 rounded-lg hover:brightness-110 transition-all shadow-md hover:shadow-lg disabled:opacity-60"
            >
              {loading ? "Envoi…" : "Envoyer ma demande"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
