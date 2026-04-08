import { useFadeInUp } from "@/hooks/use-fade-in-up";

const steps = [
  { num: "01", title: "On échange", text: "Un court appel ou un message pour comprendre votre activité et vos besoins." },
  { num: "02", title: "On crée", text: "Je conçois et développe votre site. Vous validez, on ajuste." },
  { num: "03", title: "On lance", text: "Votre site est en ligne. Vous recevez toutes les clés en main." },
];

const ProcessSection = () => {
  const ref = useFadeInUp();

  return (
    <section className="bg-surface-alt py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="fade-in-up font-heading text-2xl md:text-4xl font-bold text-foreground text-center mb-16">
          Comment ça se passe ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="fade-in-up text-center" style={{ transitionDelay: `${i * 120}ms` }}>
              <span className="font-heading text-5xl font-bold text-primary">{step.num}</span>
              <h3 className="font-heading text-lg font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
