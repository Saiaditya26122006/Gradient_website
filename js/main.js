/* ========================================================
   GRADIENT — i18n, contact form, scroll reveals
   ======================================================== */

// -------- 1. TRANSLATIONS --------
// NOTE: business email below is a placeholder (founder's personal inbox).
// Swap CONTACT_EMAIL for a dedicated business address once the domain is live.
const CONTACT_EMAIL = "tsaiaditya1234@gmail.com";

const translations = {
  es: {
    "nav.sectors": "Sectores",
    "nav.how": "Cómo funciona",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "nav.cta": "Auditoría gratuita",

    "hero.eyebrow": "Automatización inteligente para negocios profesionales",
    "hero.title": "Convertimos el trabajo repetitivo en sistemas que trabajan por ti.",
    "hero.sub": "Gradient diseña webs y agentes de IA a medida para bufetes, inmobiliarias y gestorías en Barcelona. Menos horas perdidas en tareas manuales, más tiempo para lo que realmente importa.",
    "hero.cta1": "Solicita tu auditoría gratuita",
    "hero.cta2": "Ver cómo funciona ↓",

    "problem.title": "El mismo problema, todos los días",
    "problem.body": "Facturas que se transcriben a mano. Documentos que se clasifican uno a uno. Clientes que preguntan lo mismo por email cada semana. Plazos que se persiguen en una hoja de cálculo. Son tareas que consumen entre 20 y 40 horas al mes en un despacho de 4 a 10 personas — y ninguna de ellas requiere criterio humano.",
    "problem.stat1": "horas/mes recuperables en una oficina de 4-10 personas",
    "problem.stat2": "de esas horas requiere criterio humano",
    "problem.stat3": "semanas para tener el primer piloto funcionando",

    "sectors.title": "Construido para tu sector, no para “empresas”",
    "sectors.legal.title": "Bufetes de abogados",
    "sectors.legal.body": "Un agente que hace el triaje de nuevos casos, comprueba conflictos de interés básicos y agenda la primera consulta — antes de que tú intervengas.",
    "sectors.legal.tag": "Nunca sustituye el consejo legal — solo la admisión",
    "sectors.realestate.title": "Inmobiliarias",
    "sectors.realestate.body": "Cualifica leads automáticamente por presupuesto, zona y plazos, y hace seguimiento de los que se enfrían — para que no se pierda ni un contacto.",
    "sectors.realestate.tag": "Integrado con tu calendario de visitas",
    "sectors.gestoria.title": "Gestorías y asesorías",
    "sectors.gestoria.body": "Lee facturas entrantes, extrae las partidas y las registra en tu software de contabilidad — sin retipear nada.",
    "sectors.gestoria.tag": "Compatible con Kit Digital",

    "method.title": "De diagnóstico a sistema en producción",
    "method.s1.title": "Diagnóstico",
    "method.s1.body": "Mapeamos un flujo de trabajo concreto y medimos cuánto tiempo cuesta hoy.",
    "method.s2.title": "Piloto",
    "method.s2.body": "Construimos un agente funcional para ese flujo en 2-3 semanas.",
    "method.s3.title": "Build",
    "method.s3.body": "Ampliamos a 2-4 flujos, integrados con tus herramientas actuales.",
    "method.s4.title": "Cuidado continuo",
    "method.s4.body": "Monitorizamos, ajustamos y añadimos mejoras cada mes.",

    "why.title": "Por qué Gradient, y no una plantilla de n8n",
    "why.body": "Casi todo lo que se vende hoy como «IA» para negocios profesionales es un panel o un chatbot con guion. Un agente de verdad lee, decide, actúa y deja constancia de principio a fin, sin intervención manual — esa es la diferencia técnica. La otra es de confianza: trabajamos con datos sensibles de tus clientes, así que el cumplimiento RGPD no es un añadido, es la base.",

    "pricing.title": "Precios claros, sin sorpresas",
    "pricing.badge": "Más elegido",
    "pricing.t1.name": "Diagnóstico + Piloto",
    "pricing.t1.note": "pago único · 2-3 semanas",
    "pricing.t1.desc": "Un flujo de trabajo, mapeado y automatizado. La forma de probar el enfoque antes de comprometerte a más.",
    "pricing.t2.name": "Build a medida",
    "pricing.t2.note": "por proyecto · 3-6 semanas",
    "pricing.t2.desc": "2 a 4 flujos de trabajo, integrados con tu email, tu software de gestión y tus herramientas actuales.",
    "pricing.t3.name": "Cuidado y optimización",
    "pricing.t3.note": "continuo",
    "pricing.t3.desc": "Monitorización, ajustes, integraciones que se rompen, y pequeñas mejoras cada mes.",
    "pricing.footnote": "Los proyectos elegibles pueden financiarse total o parcialmente a través del programa Kit Digital.",

    "founding.title": "Buscamos 3 clientes fundadores este trimestre",
    "founding.body": "Gradient es un estudio nuevo — y lo decimos sin rodeos. A cambio de ser un caso de estudio documentado, con cifras reales de horas ahorradas y errores evitados, tu primer proyecto piloto tiene un precio reducido. Oferta limitada a 3 despachos.",
    "founding.cta": "Reserva tu plaza",

    "contact.title": "Hablemos de tu despacho",
    "contact.body": "Cuéntanos qué tarea os quita más tiempo cada semana. En 24 horas te decimos si tiene sentido automatizarla.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.company": "Empresa",
    "contact.message": "¿Qué tarea os quita más tiempo?",
    "contact.send": "Enviar",
    "contact.note": "Se abrirá tu cliente de correo con el mensaje ya redactado.",

    "footer.tagline": "Gradient — Barcelona, España",
    "footer.legal": "Estudio independiente de automatización con IA. RGPD por diseño."
  },
  en: {
    "nav.sectors": "Sectors",
    "nav.how": "How it works",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.cta": "Free audit",

    "hero.eyebrow": "Intelligent automation for professional-services businesses",
    "hero.title": "We turn repetitive work into systems that work for you.",
    "hero.sub": "Gradient builds custom websites and AI agents for law firms, real estate agencies, and gestorías in Barcelona. Fewer hours lost to manual tasks, more time for what actually matters.",
    "hero.cta1": "Get your free audit",
    "hero.cta2": "See how it works ↓",

    "problem.title": "The same problem, every day",
    "problem.body": "Invoices typed in by hand. Documents sorted one by one. Clients asking the same question by email every week. Deadlines chased in a spreadsheet. These tasks eat 20 to 40 hours a month in a 4-to-10-person office — and none of them actually need human judgment.",
    "problem.stat1": "hours/month recoverable in a 4-10 person office",
    "problem.stat2": "of those hours require human judgment",
    "problem.stat3": "weeks to get the first pilot running",

    "sectors.title": "Built for your sector, not for “businesses”",
    "sectors.legal.title": "Law firms",
    "sectors.legal.body": "An agent that triages new cases, runs basic conflict checks, and books the first consultation — before you ever get involved.",
    "sectors.legal.tag": "Never replaces legal advice — only intake",
    "sectors.realestate.title": "Real estate agencies",
    "sectors.realestate.body": "Automatically qualifies leads by budget, area, and timeline, and follows up on the ones going cold — so no contact falls through the cracks.",
    "sectors.realestate.tag": "Integrated with your viewing calendar",
    "sectors.gestoria.title": "Gestorías & accounting firms",
    "sectors.gestoria.body": "Reads incoming invoices, extracts line items, and posts them directly into your accounting software — no retyping.",
    "sectors.gestoria.tag": "Kit Digital compatible",

    "method.title": "From diagnostic to production system",
    "method.s1.title": "Diagnostic",
    "method.s1.body": "We map one concrete workflow and measure what it costs today.",
    "method.s2.title": "Pilot",
    "method.s2.body": "We build a working agent for that workflow in 2-3 weeks.",
    "method.s3.title": "Build",
    "method.s3.body": "We expand to 2-4 workflows, integrated with your existing tools.",
    "method.s4.title": "Ongoing care",
    "method.s4.body": "We monitor, tune, and add improvements every month.",

    "why.title": "Why Gradient, not another n8n template",
    "why.body": "Almost everything sold as “AI” for professional services today is a dashboard or a scripted chatbot. A real agent reads, decides, acts, and logs what it did — start to finish, without manual intervention. That's the technical difference. The other one is trust: we work with your clients' sensitive data, so GDPR compliance isn't an add-on, it's the foundation.",

    "pricing.title": "Clear pricing, no surprises",
    "pricing.badge": "Most chosen",
    "pricing.t1.name": "Diagnostic + Pilot",
    "pricing.t1.note": "flat fee · 2-3 weeks",
    "pricing.t1.desc": "One workflow, mapped and automated. The way to prove the approach before committing to more.",
    "pricing.t2.name": "Custom Build",
    "pricing.t2.note": "project fee · 3-6 weeks",
    "pricing.t2.desc": "2 to 4 workflows, integrated with your email, your management software, and your existing tools.",
    "pricing.t3.name": "Care & Optimization",
    "pricing.t3.note": "ongoing",
    "pricing.t3.desc": "Monitoring, tuning, fixing broken integrations, and small improvements every month.",
    "pricing.footnote": "Eligible projects can be partially or fully funded through Spain's Kit Digital program.",

    "founding.title": "We're taking on 3 founding clients this quarter",
    "founding.body": "Gradient is a new studio — and we're not going to pretend otherwise. In exchange for being a documented case study, with real numbers on hours saved and errors caught, your first pilot project comes at a reduced rate. Limited to 3 firms.",
    "founding.cta": "Claim your spot",

    "contact.title": "Let's talk about your office",
    "contact.body": "Tell us which task eats the most time every week. Within 24 hours we'll tell you whether it's worth automating.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Which task eats the most time?",
    "contact.send": "Send",
    "contact.note": "This opens your email client with the message pre-written.",

    "footer.tagline": "Gradient — Barcelona, Spain",
    "footer.legal": "Independent AI automation studio. GDPR by design."
  }
};

// -------- 2. LANGUAGE TOGGLE --------
function setLanguage(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll("[data-lang-opt]").forEach(el => {
    el.classList.toggle("is-active", el.getAttribute("data-lang-opt") === lang);
  });
  localStorage.setItem("gradient_lang", lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  const current = document.documentElement.lang === "en" ? "en" : "es";
  setLanguage(current === "es" ? "en" : "es");
});

// restore saved preference on load
const savedLang = localStorage.getItem("gradient_lang");
if (savedLang === "en") setLanguage("en");

// -------- 3. CONTACT FORM → mailto fallback --------
// No backend yet, so this opens the visitor's email client with a pre-filled message.
// Replace with a real form handler (e.g. a Vercel serverless function) once the
// business has a dedicated inbox and wants a no-redirect submit experience.
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const company = this.company.value;
  const message = this.message.value;
  const subject = encodeURIComponent(`Consulta de ${name}${company ? " (" + company + ")" : ""}`);
  const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\n\n${message}`);
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

// -------- 4. SCROLL REVEAL --------
const revealTargets = document.querySelectorAll("section h2, .sector-card, .price-card, .step, .stat");
revealTargets.forEach(el => el.setAttribute("data-reveal", ""));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => observer.observe(el));
