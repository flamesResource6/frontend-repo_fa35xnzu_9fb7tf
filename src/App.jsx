import { useMemo, useState } from "react";
import {
  Globe,
  School,
  ShieldCheck,
  Sparkles,
  Users,
  CalendarCheck2,
  FileText,
  BellRing,
  Check,
} from "lucide-react";

const LANGS = [
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

const T = {
  it: {
    nav: {
      features: "Funzionalità",
      pricing: "Prezzi",
      testimonials: "Testimonianze",
      contact: "Contatti",
    },
    hero: {
      badge: "Pensato per nidi e scuole dell'infanzia",
      title: "Easy.School",
      subtitle:
        "La piattaforma semplice e moderna per gestire comunicazioni, presenze e documenti per bambini da 0 a 6 anni.",
      primary: "Inizia gratis",
      secondary: "Guarda come funziona",
    },
    features: {
      title: "Tutto quello che ti serve, in un unico posto",
      items: [
        {
          icon: "Users",
          title: "Iscrizioni e anagrafiche",
          desc: "Gestisci famiglie, sezioni e autorizzazioni con pochi clic.",
        },
        {
          icon: "CalendarCheck2",
          title: "Presenze e uscite",
          desc: "Registra presenze, ingressi e uscite in modo veloce e sicuro.",
        },
        {
          icon: "BellRing",
          title: "Comunicazioni smart",
          desc: "Invia messaggi e avvisi alle famiglie con conferma di lettura.",
        },
        {
          icon: "FileText",
          title: "Documenti e modulistica",
          desc: "Condividi documenti, deleghe e modulistica sempre aggiornata.",
        },
        {
          icon: "ShieldCheck",
          title: "Privacy by design",
          desc: "Dati in Europa, controlli granulari e conformità GDPR.",
        },
        {
          icon: "Sparkles",
          title: "Semplice e intuitiva",
          desc: "Un'interfaccia pulita pensata per educatrici e famiglie.",
        },
      ],
    },
    pricing: {
      title: "Prezzi chiari e trasparenti",
      monthly: "al mese",
      cta: "Prova ora",
      plans: [
        {
          name: "Starter",
          price: "0€",
          tagline: "Per provare in una sezione",
          features: [
            "1 sezione",
            "Fino a 25 bambini",
            "Comunicazioni base",
            "Assistenza via email",
          ],
        },
        {
          name: "Pro",
          price: "59€",
          tagline: "Per scuole complete",
          features: [
            "Sezioni illimitate",
            "Presenze e uscite",
            "Documenti e modulistica",
            "Reportistica e esportazioni",
            "Assistenza prioritaria",
          ],
          highlight: true,
        },
        {
          name: "Enterprise",
          price: "Su richiesta",
          tagline: "Per reti e comuni",
          features: [
            "Multi-sede",
            "Single Sign-On",
            "Integrazioni personalizzate",
            "SLA dedicato",
          ],
        },
      ],
    },
    testimonials: {
      title: "Amato da scuole e famiglie",
      items: [
        {
          quote:
            "Finalmente meno carte e più tempo con i bambini. Le famiglie sono sempre aggiornate.",
          author: "Sara, Coordinatrice",
        },
        {
          quote:
            "Ricevo avvisi e documenti direttamente sul telefono. Tutto semplice e chiaro.",
          author: "Marco, Genitore",
        },
      ],
    },
    footer: {
      tagline: "La piattaforma per la scuola dell'infanzia del futuro.",
      links: ["Privacy", "Termini", "Contatti"],
      made: "Creato con cura in Europa",
    },
  },
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      testimonials: "Stories",
      contact: "Contact",
    },
    hero: {
      badge: "Designed for nurseries and preschools",
      title: "Easy.School",
      subtitle:
        "A clean, modern platform to manage communication, attendance and paperwork for children aged 0–6.",
      primary: "Start free",
      secondary: "See how it works",
    },
    features: {
      title: "Everything you need in one place",
      items: [
        {
          icon: "Users",
          title: "Admissions & profiles",
          desc: "Manage families, rooms and permissions in a few clicks.",
        },
        {
          icon: "CalendarCheck2",
          title: "Attendance & pickups",
          desc: "Record daily attendance, check-ins and check-outs safely.",
        },
        {
          icon: "BellRing",
          title: "Smart communication",
          desc: "Send messages and alerts to families with read receipts.",
        },
        {
          icon: "FileText",
          title: "Documents & forms",
          desc: "Share delegations, consents and up-to-date forms.",
        },
        {
          icon: "ShieldCheck",
          title: "Privacy by design",
          desc: "EU data hosting, granular controls and GDPR compliance.",
        },
        {
          icon: "Sparkles",
          title: "Simple and intuitive",
          desc: "A clear interface for teachers and families alike.",
        },
      ],
    },
    pricing: {
      title: "Clear, transparent pricing",
      monthly: "per month",
      cta: "Try now",
      plans: [
        {
          name: "Starter",
          price: "$0",
          tagline: "Try with one room",
          features: [
            "1 room",
            "Up to 25 children",
            "Basic messaging",
            "Email support",
          ],
        },
        {
          name: "Pro",
          price: "$59",
          tagline: "For full schools",
          features: [
            "Unlimited rooms",
            "Attendance & pickups",
            "Documents & forms",
            "Reports & exports",
            "Priority support",
          ],
          highlight: true,
        },
        {
          name: "Enterprise",
          price: "Custom",
          tagline: "For groups and municipalities",
          features: [
            "Multi-site",
            "Single Sign-On",
            "Custom integrations",
            "Dedicated SLA",
          ],
        },
      ],
    },
    testimonials: {
      title: "Loved by schools and families",
      items: [
        {
          quote:
            "Less paperwork, more time with the children. Families stay informed.",
          author: "Sarah, Head Teacher",
        },
        {
          quote:
            "I receive alerts and documents on my phone. Everything is clear.",
          author: "Mark, Parent",
        },
      ],
    },
    footer: {
      tagline: "The preschool platform of the future.",
      links: ["Privacy", "Terms", "Contact"],
      made: "Crafted with care in Europe",
    },
  },
  fr: {
    nav: {
      features: "Fonctionnalités",
      pricing: "Tarifs",
      testimonials: "Témoignages",
      contact: "Contact",
    },
    hero: {
      badge: "Conçu pour crèches et maternelles",
      title: "Easy.School",
      subtitle:
        "Une plateforme moderne et épurée pour gérer communication, présences et documents pour les 0–6 ans.",
      primary: "Commencer gratuitement",
      secondary: "Voir le fonctionnement",
    },
    features: {
      title: "Tout ce dont vous avez besoin, au même endroit",
      items: [
        {
          icon: "Users",
          title: "Inscriptions et profils",
          desc: "Gérez familles, classes et autorisations en quelques clics.",
        },
        {
          icon: "CalendarCheck2",
          title: "Présences et sorties",
          desc: "Enregistrez les arrivées et départs en toute sécurité.",
        },
        {
          icon: "BellRing",
          title: "Communication intelligente",
          desc: "Envoyez messages et alertes avec accusés de lecture.",
        },
        {
          icon: "FileText",
          title: "Documents et formulaires",
          desc: "Partagez délégations, consentements et formulaires.",
        },
        {
          icon: "ShieldCheck",
          title: "Confidentialité intégrée",
          desc: "Données en UE, contrôles fins et conformité RGPD.",
        },
        {
          icon: "Sparkles",
          title: "Simple et intuitive",
          desc: "Une interface claire pour équipes et familles.",
        },
      ],
    },
    pricing: {
      title: "Des tarifs clairs et transparents",
      monthly: "par mois",
      cta: "Essayer",
      plans: [
        {
          name: "Starter",
          price: "0€",
          tagline: "Pour tester avec une classe",
          features: [
            "1 classe",
            "Jusqu'à 25 enfants",
            "Messagerie de base",
            "Support par email",
          ],
        },
        {
          name: "Pro",
          price: "59€",
          tagline: "Pour les écoles complètes",
          features: [
            "Classes illimitées",
            "Présences et sorties",
            "Documents et formulaires",
            "Rapports et exports",
            "Support prioritaire",
          ],
          highlight: true,
        },
        {
          name: "Enterprise",
          price: "Sur devis",
          tagline: "Pour réseaux et municipalités",
          features: [
            "Multi-site",
            "Single Sign-On",
            "Intégrations sur mesure",
            "SLA dédié",
          ],
        },
      ],
    },
    testimonials: {
      title: "Plébiscité par écoles et familles",
      items: [
        {
          quote:
            "Moins de papiers, plus de temps avec les enfants. Les familles sont informées.",
          author: "Claire, Directrice",
        },
        {
          quote:
            "Je reçois alertes et documents sur mon téléphone. Tout est clair.",
          author: "Marc, Parent",
        },
      ],
    },
    footer: {
      tagline: "La plateforme maternelle de demain.",
      links: ["Confidentialité", "Conditions", "Contact"],
      made: "Conçu avec soin en Europe",
    },
  },
};

const IconMap = {
  Users,
  CalendarCheck2,
  BellRing,
  FileText,
  ShieldCheck,
  Sparkles,
};

function LanguageSelector({ lang, setLang }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Globe className="h-4 w-4" />
      <select
        aria-label="Language selector"
        className="bg-white/80 backdrop-blur border border-gray-200 rounded-md py-1.5 pl-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      >
        {LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState("it");
  const t = useMemo(() => T[lang], [lang]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-indigo-50 to-fuchsia-50 text-gray-800">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-white/40">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-content-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-sm">
              <School className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold">Easy.School</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-gray-900">{t.nav.features}</a>
            <a href="#pricing" className="hover:text-gray-900">{t.nav.pricing}</a>
            <a href="#testimonials" className="hover:text-gray-900">{t.nav.testimonials}</a>
            <a href="#contact" className="hover:text-gray-900">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSelector lang={lang} setLang={setLang} />
            <a
              href="#pricing"
              className="hidden sm:inline-flex items-center rounded-full bg-indigo-600 text-white text-sm font-medium px-4 py-2 shadow hover:bg-indigo-700"
            >
              {t.hero.primary}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -right-24 h-72 w-72 rounded-full bg-fuchsia-300/40 blur-3xl" />
          <div className="absolute top-20 -left-28 h-72 w-72 rounded-full bg-sky-300/40 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:grid lg:grid-cols-2 lg:gap-10 lg:pt-24 lg:pb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/70 border border-white/60 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-fuchsia-600" />
              {t.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              {t.hero.title}
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">
              {t.hero.subtitle}
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center rounded-full bg-indigo-600 text-white text-sm font-semibold px-5 py-3 shadow-lg hover:bg-indigo-700"
              >
                {t.hero.primary}
              </a>
              <a
                href="#features"
                className="inline-flex items-center rounded-full bg-white text-gray-800 text-sm font-semibold px-5 py-3 border border-gray-200 hover:bg-gray-50"
              >
                {t.hero.secondary}
              </a>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="relative mx-auto max-w-lg">
              <div className="aspect-[4/3] rounded-2xl bg-white/70 border border-white/60 shadow-xl p-6 flex flex-col gap-4">
                <div className="grid grid-cols-3 gap-3">
                  {["🍎", "🎨", "📚", "🧩", "🍼", "🎵", "🖍️", "🧸", "🧠"].map((emo, i) => (
                    <div
                      key={i}
                      className="h-24 rounded-xl grid place-content-center text-3xl bg-gradient-to-br from-indigo-50 to-fuchsia-50 border border-white"
                    >
                      {emo}
                    </div>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-600">
                  Demo preview — your school, your branding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t.features.title}
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((f, idx) => {
            const Icon = IconMap[f.icon];
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/80 border border-white/60 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-content-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-white/70 border-y border-white/60">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            {t.pricing.title}
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {t.pricing.plans.map((p, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 border shadow-sm bg-white/80 ${
                  p.highlight ? "ring-2 ring-indigo-500" : ""
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-2xl font-bold">{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{p.tagline}</p>
                <ul className="mt-4 space-y-2">
                  {p.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="h-5 w-5 grid place-content-center rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
                        <Check className="h-3 w-3" />
                      </span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 inline-flex w-full justify-center rounded-full px-4 py-2 text-sm font-semibold shadow ${
                    p.highlight
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-white border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {t.pricing.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          {t.testimonials.title}
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {t.testimonials.items.map((q, i) => (
            <blockquote key={i} className="rounded-2xl bg-white/80 border border-white/60 p-6 shadow-sm">
              <p className="text-gray-800 text-lg">“{q.quote}”</p>
              <footer className="mt-4 text-sm text-gray-600">— {q.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Contact/Footer */}
      <footer id="contact" className="border-t border-white/60 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 grid place-content-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-sm">
                <School className="h-5 w-5" />
              </div>
              <span className="text-lg font-semibold">Easy.School</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">{t.footer.tagline}</p>
            <p className="mt-6 text-sm text-gray-500">{t.footer.made}</p>
          </div>
          <div className="md:justify-self-end">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  lang === "it"
                    ? "Grazie! Ti contatteremo presto."
                    : lang === "fr"
                    ? "Merci ! Nous vous contacterons bientôt."
                    : "Thank you! We'll be in touch soon."
                );
              }}
              className="rounded-2xl bg-white/80 border border-white/60 p-6 shadow-sm max-w-md"
            >
              <h3 className="font-semibold mb-3">
                {lang === "it"
                  ? "Richiedi una demo"
                  : lang === "fr"
                  ? "Demander une démo"
                  : "Request a demo"}
              </h3>
              <div className="grid gap-3">
                <input
                  type="text"
                  required
                  placeholder={
                    lang === "it"
                      ? "Nome scuola"
                      : lang === "fr"
                      ? "Nom de l'école"
                      : "School name"
                  }
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
                <input
                  type="email"
                  required
                  placeholder={
                    lang === "it" ? "Email" : lang === "fr" ? "Email" : "Email"
                  }
                  className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
                <button
                  type="submit"
                  className="mt-1 inline-flex justify-center rounded-full bg-indigo-600 text-white text-sm font-semibold px-4 py-2 shadow hover:bg-indigo-700"
                >
                  {lang === "it"
                    ? "Invia"
                    : lang === "fr"
                    ? "Envoyer"
                    : "Send"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-6">
            {T[lang].footer.links.map((l, i) => (
              <a key={i} href="#" className="hover:text-gray-900">
                {l}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} Easy.School</p>
        </div>
      </footer>
    </div>
  );
}
