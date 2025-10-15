import Link from 'next/link';

type ProgramCardProps = {
  title: string;
  features: string[];
  icon: React.ReactNode;
  ctaText: string;
  ctaLink: string;
  bgColor: string;
}

function ProgramCard({ title, features, icon, ctaText, ctaLink, bgColor }: ProgramCardProps) {
  return (
    <div className={`p-8 rounded-2xl shadow-md transition-transform hover:-translate-y-2 ${bgColor}`}>
      <div className="text-primary-green text-3xl mb-4">
        {icon}
      </div>
      <h3 className="text-2xl font-heading font-semibold text-primary-green mb-4">
        {title}
      </h3>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-green mr-2 flex-shrink-0 mt-1">
              {feature.startsWith('✅') ? '' : '•'}
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Link href={ctaLink} className="inline-block text-primary-green font-semibold hover:underline transition-colors">
        {ctaText} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function Programs() {
  const programsData = [
    {
      title: "30-Day Transformation Program",
      features: [
        "✅ HIIT + Yoga + Zumba combo",
        "✅ Personalized nutrition guidance",
        "✅ Progress tracking & weekly check-ins"
      ],
      icon: <span>🧩</span>,
      ctaText: "Join the Next Batch",
      ctaLink: "#contact",
      bgColor: "bg-white"
    },
    {
      title: "Mindful Nutrition Coaching",
      features: [
        "🥗 Customized Herbalife-based meal plans",
        "🌿 Gut health & lifestyle reset"
      ],
      icon: <span>🥗</span>,
      ctaText: "Get My Plan",
      ctaLink: "#contact",
      bgColor: "bg-white"
    },
    {
      title: "1:1 Wellness Coaching",
      features: [
        "💬 Personalized mentoring",
        "💚 Habit-building, motivation & accountability"
      ],
      icon: <span>💬</span>,
      ctaText: "Book a Free Consultation",
      ctaLink: "#contact",
      bgColor: "bg-white"
    },
    
  ];

  return (
    <section id="programs" className="py-20 bg-warm-sand/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary-green mb-4">
            💪 Transform with Me
          </h2>
          <p className="text-lg text-dark-text">
            Every individual's journey is unique — find the program that fits your lifestyle and pace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programsData.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
