import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Psychiatric Evaluation",
      description: "A comprehensive 60-90 minute initial assessment to understand your history, current struggles, and goals for treatment.",
      features: ["Detailed history taking", "Diagnosis clarification", "Treatment planning"]
    },
    {
      title: "Individual Psychotherapy",
      description: "Weekly or bi-weekly 45-minute sessions focused on insight, relationship patterns, and emotional processing.",
      features: ["Psychodynamic approach", "Supportive therapy", "Trauma-informed care"]
    },
    {
      title: "Medication Management",
      description: "Careful prescribing and monitoring of psychiatric medications when indicated, often in conjunction with therapy.",
      features: ["Evidence-based prescribing", "Side-effect monitoring", "Deprescribing support"]
    }
  ];

  return (
    <div className="pt-32 pb-24 container mx-auto px-6">
      <h1 className="text-5xl font-bold tracking-tight mb-6 text-center">Clinical Services</h1>
      <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto mb-24">
        Integrated mental health care tailored to your unique needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {services.map((service, idx) => (
          <div key={idx} className="bg-surface p-8 rounded-3xl border border-border hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-muted-foreground mb-8 min-h-[80px]">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-accent" />
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-secondary/5 rounded-3xl p-12">
        <h2 className="text-3xl font-semibold mb-8">Conditions Treated</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Depression", "Anxiety Disorders", "PTSD / Trauma", "Life Transitions", "Relationship Issues", "Professional Burnout", "Grief & Loss", "Identity Issues"].map((item) => (
            <div key={item} className="bg-white p-4 rounded-xl text-center text-sm font-medium border border-border/50">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}