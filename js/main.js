/* ========================================================
   GRADIENT: i18n, contact form, scroll reveals
   ======================================================== */

// -------- 1. TRANSLATIONS --------
// Dedicated Gradient inbox (gradient2607@gmail.com), not the founder's personal
// address. Swap again for a proper @domain address (with forwarding into this
// inbox, or full Workspace hosting) once the domain is live.
const CONTACT_EMAIL = "gradient2607@gmail.com";

const translations = {
  es: {
    "nav.sectors": "Sectores",
    "nav.how": "Cómo funciona",
    "nav.testimonials": "Testimonios",
    "nav.pricing": "Precios",
    "nav.contact": "Contacto",
    "nav.cta": "Auditoría gratuita",

    "hero.eyebrow": "Automatización inteligente para negocios profesionales",
    "hero.title": "Convertimos el trabajo repetitivo en sistemas que trabajan por ti.",
    "hero.sub": "Gradient diseña webs y agentes de IA a medida para bufetes, inmobiliarias y gestorías en Barcelona. Menos horas perdidas en tareas manuales, más tiempo para lo que realmente importa.",
    "hero.cta1": "Solicita tu auditoría gratuita",
    "hero.cta2": "Ver cómo funciona ↓",

    "problem.title": "El mismo problema, todos los días",
    "problem.body": "Facturas que se transcriben a mano. Documentos que se clasifican uno a uno. Clientes que preguntan lo mismo por email cada semana. Plazos que se persiguen en una hoja de cálculo. Son tareas que consumen entre 20 y 40 horas al mes en un despacho de 4 a 10 personas, y ninguna de ellas requiere criterio humano.",
    "problem.stat1": "horas/mes recuperables en una oficina de 4-10 personas",
    "problem.stat2": "de esas horas requiere criterio humano",
    "problem.stat3": "semanas para tener el primer piloto funcionando",

    "sectors.title": "Construido para tu sector, no para “empresas”",
    "sectors.legal.title": "Bufetes de abogados",
    "sectors.legal.body": "Un agente que hace el triaje de nuevos casos, comprueba conflictos de interés básicos y agenda la primera consulta, antes de que tú intervengas.",
    "sectors.legal.tag": "Nunca sustituye el consejo legal: solo la admisión",
    "sectors.realestate.title": "Inmobiliarias",
    "sectors.realestate.body": "Cualifica leads automáticamente por presupuesto, zona y plazos, y hace seguimiento de los que se enfrían para que no se pierda ni un contacto.",
    "sectors.realestate.tag": "Integrado con tu calendario de visitas",
    "sectors.gestoria.title": "Gestorías y asesorías",
    "sectors.gestoria.body": "Lee facturas entrantes, extrae las partidas y las registra en tu software de contabilidad, sin retipear nada.",
    "sectors.gestoria.tag": "Sin retipear nunca más una factura",
    "sectors.legal.more": "Saber más →",
    "sectors.realestate.more": "Saber más →",
    "sectors.gestoria.more": "Saber más →",

    "method.title": "De diagnóstico a sistema en producción",
    "method.s1.title": "Diagnóstico",
    "method.s1.body": "Mapeamos un flujo de trabajo concreto y medimos cuánto tiempo cuesta hoy.",
    "method.s2.title": "Piloto",
    "method.s2.body": "Construimos un agente funcional para ese flujo en 2-3 semanas.",
    "method.s3.title": "Build",
    "method.s3.body": "Ampliamos a 2-4 flujos, integrados con tus herramientas actuales.",
    "method.s4.title": "Cuidado continuo",
    "method.s4.body": "Monitorizamos, ajustamos y añadimos mejoras cada mes.",

    "why.title": "La herramienta correcta para cada tarea, no una plantilla genérica",
    "why.body": "Usamos n8n cuando tiene sentido. Para automatizaciones directas de integración y flujo de datos es rápido y fiable. Pero cuando la tarea requiere criterio real (leer un caso, decidir cómo triarlo, actuar en consecuencia), construimos un agente a medida, no una plantilla genérica con el logo cambiado. Esa es la diferencia técnica. La otra es de confianza: trabajamos con datos sensibles de tus clientes, así que el cumplimiento RGPD no es un añadido, es la base.",

    "testimonials.title": "Empresas que ya han automatizado con Gradient",
    "testimonials.t1.quote": "Gradient nos construyó una web nueva y varios agentes hechos a medida para el negocio. Todo el proceso fue fácil, entendieron lo que necesitábamos y lo cumplieron. Muy contentos con la web y con cómo los agentes han asumido tareas que antes hacíamos a mano.",
    "testimonials.t1.name": "Damodar",
    "testimonials.t1.service": "Paquete Momentum: web + agente a medida",
    "testimonials.t1.stat1": "<strong>15\u201320h/semana \u2192 &lt;2h</strong>tiempo del equipo en consultas iniciales",
    "testimonials.t1.stat2": "<strong>350\u2013450/mes</strong>consultas gestionadas en todos los anuncios",
    "testimonials.t1.stat3": "<strong>6 meses</strong>en producci\u00f3n, cero leads perdidos en fin de semana",
    "testimonials.t2.quote": "Gran trabajo montando la automatización con n8n. Nos ha ahorrado tiempo de verdad en tareas que hacíamos a mano, y funciona sin complicaciones.",
    "testimonials.t2.name": "Usha Rekha",
    "testimonials.t2.service": "Paquete Step: automatización con n8n (solo agentes)",
    "testimonials.t2.stat1": "<strong>25+h/semana \u2192 1\u20132h</strong>tiempo dedicado a facturas y recibos",
    "testimonials.t2.stat2": "<strong>~1.200/mes</strong>facturas y recibos procesados",
    "testimonials.t2.stat3": "<strong>8 meses</strong>en producci\u00f3n, cero errores en la declaraci\u00f3n trimestral",
    "testimonials.t3.quote": "Excelente trabajo. Los agentes hechos a medida han sido muy útiles en el día a día, y el servicio de Gradient en general ha sido excelente de principio a fin.",
    "testimonials.t3.name": "Deva Nag Varsheeth",
    "testimonials.t3.service": "Paquete Momentum: agente a medida (solo agentes)",
    "testimonials.t3.stat1": "<strong>30h/semana \u2192 casi nada</strong>tiempo en tickets de \u00abd\u00f3nde est\u00e1 mi pedido\u00bb",
    "testimonials.t3.stat2": "<strong>~1.800/mes</strong>interacciones de soporte gestionadas",
    "testimonials.t3.stat3": "<strong>de 6h a &lt;1 min</strong>tiempo de respuesta al cliente",

    "pricing.title": "Precios fijos, sin sorpresas",
    "pricing.subtitle": "La mayoría de estudios cotizan por hora, tras un descubrimiento largo, con un precio final que nadie sabe hasta el cierre. Aquí no: tres paquetes, precio fijo, publicado antes de que hables con nosotros.",
    "pricing.badge": "Más elegido",
    "pricing.t1.name": "Step",
    "pricing.t1.note": "pago único",
    "pricing.t1.desc": "Web profesional más una automatización rápida con n8n. El primer paso, sin complicarte.",
    "pricing.t2.name": "Momentum",
    "pricing.t2.note": "pago único",
    "pricing.t2.desc": "Web más un agente a medida que resuelve tu mayor cuello de botella. Nuestro paquete más elegido.",
    "pricing.t3.name": "Convergence",
    "pricing.t3.note": "pago único",
    "pricing.t3.desc": "Web más 2 a 4 agentes integrados en tus herramientas actuales. Para negocios listos para automatizar de verdad.",
    "pricing.t4.name": "Drift",
    "pricing.t4.desc": "Cuidado continuo tras cualquier paquete: monitorización, ajustes y mejoras cada mes.",
    "pricing.permo": "/mes",
    "pricing.footnote": "¿Ya tienes web? Cada paquete tiene una versión solo de agentes, más económica. Pregúntanos. Recuperando esas 20-40 horas al mes, la mayoría de los negocios amortiza Momentum en su primer trimestre de uso, sin depender de ninguna subvención.",

    "founding.title": "Plazas limitadas mientras construimos nuestro portfolio",
    "founding.body": "Gradient trabaja con un número reducido de despachos a la vez para dar seguimiento cercano a cada proyecto. Los precios de arriba son los mismos para todos: sin descuentos ocultos, sin sorpresas. Pero solo abrimos un puñado de plazas cada trimestre mientras documentamos nuestros primeros casos de estudio.",
    "founding.cta": "Reserva tu plaza",

    "contact.title": "Hablemos de tu despacho",
    "contact.body": "Cuéntanos qué tarea os quita más tiempo cada semana. En 24 horas te decimos si tiene sentido automatizarla.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.company": "Empresa",
    "contact.message": "¿Qué tarea os quita más tiempo?",
    "contact.send": "Enviar",
    "contact.note": "Se abrirá tu cliente de correo con el mensaje ya redactado.",

    "footer.tagline": "Gradient · Barcelona, España",
    "footer.tagline2": "Donde termina el trabajo repetitivo",
    "footer.legal": "Estudio independiente de automatización con IA. RGPD por diseño."
  },
  en: {
    "nav.sectors": "Sectors",
    "nav.how": "How it works",
    "nav.testimonials": "Testimonials",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.cta": "Free audit",

    "hero.eyebrow": "Intelligent automation for professional-services businesses",
    "hero.title": "We turn repetitive work into systems that work for you.",
    "hero.sub": "Gradient builds custom websites and AI agents for law firms, real estate agencies, and gestorías in Barcelona. Fewer hours lost to manual tasks, more time for what actually matters.",
    "hero.cta1": "Get your free audit",
    "hero.cta2": "See how it works ↓",

    "problem.title": "The same problem, every day",
    "problem.body": "Invoices typed in by hand. Documents sorted one by one. Clients asking the same question by email every week. Deadlines chased in a spreadsheet. These tasks eat 20 to 40 hours a month in a 4-to-10-person office, and none of them actually need human judgment.",
    "problem.stat1": "hours/month recoverable in a 4-10 person office",
    "problem.stat2": "of those hours require human judgment",
    "problem.stat3": "weeks to get the first pilot running",

    "sectors.title": "Built for your sector, not for “businesses”",
    "sectors.legal.title": "Law firms",
    "sectors.legal.body": "An agent that triages new cases, runs basic conflict checks, and books the first consultation, before you ever get involved.",
    "sectors.legal.tag": "Never replaces legal advice: only intake",
    "sectors.realestate.title": "Real estate agencies",
    "sectors.realestate.body": "Automatically qualifies leads by budget, area, and timeline, and follows up on the ones going cold so no contact falls through the cracks.",
    "sectors.realestate.tag": "Integrated with your viewing calendar",
    "sectors.gestoria.title": "Gestorías & accounting firms",
    "sectors.gestoria.body": "Reads incoming invoices, extracts line items, and posts them directly into your accounting software. No retyping.",
    "sectors.gestoria.tag": "Never retype an invoice again",
    "sectors.legal.more": "Learn more →",
    "sectors.realestate.more": "Learn more →",
    "sectors.gestoria.more": "Learn more →",

    "method.title": "From diagnostic to production system",
    "method.s1.title": "Diagnostic",
    "method.s1.body": "We map one concrete workflow and measure what it costs today.",
    "method.s2.title": "Pilot",
    "method.s2.body": "We build a working agent for that workflow in 2-3 weeks.",
    "method.s3.title": "Build",
    "method.s3.body": "We expand to 2-4 workflows, integrated with your existing tools.",
    "method.s4.title": "Ongoing care",
    "method.s4.body": "We monitor, tune, and add improvements every month.",

    "why.title": "The right tool for each task, not a generic template",
    "why.body": "We use n8n when it makes sense. It's fast and reliable for straightforward integration and data-flow work. But when a task needs real judgment (reading a case, deciding how to triage it, acting on it), we build a custom agent, not a generic template with the logo swapped. That's the technical difference. The other one is trust: we work with your clients' sensitive data, so GDPR compliance isn't an add-on, it's the foundation.",

    "testimonials.title": "Businesses already automating with Gradient",
    "testimonials.t1.quote": "Gradient built us a new website and a set of custom-coded agents for the business. The whole process was smooth, they understood what we needed and delivered it properly. Really happy with both the site and how the agents have taken over work we used to do manually.",
    "testimonials.t1.name": "Damodar",
    "testimonials.t1.service": "Momentum package: website + custom agent",
    "testimonials.t1.stat1": "<strong>15\u201320h/week \u2192 &lt;2h</strong>team time on initial inquiries",
    "testimonials.t1.stat2": "<strong>350\u2013450/mo</strong>inquiries handled across all listings",
    "testimonials.t1.stat3": "<strong>6 months</strong>in production, zero leads lost on weekends",
    "testimonials.t2.quote": "Great work setting up automation for us with n8n. It's saved us real time on tasks we used to do by hand, and it just works, no fuss.",
    "testimonials.t2.name": "Usha Rekha",
    "testimonials.t2.service": "Step package: n8n automation (agents-only)",
    "testimonials.t2.stat1": "<strong>25+h/week \u2192 1\u20132h</strong>time spent on invoices and receipts",
    "testimonials.t2.stat2": "<strong>~1,200/mo</strong>invoices and receipts processed",
    "testimonials.t2.stat3": "<strong>8 months</strong>in production, zero errors in quarterly filing",
    "testimonials.t3.quote": "Excellent work. The custom-built agents have been really useful day to day, and Gradient's service overall has been excellent from start to finish.",
    "testimonials.t3.name": "Deva Nag Varsheeth",
    "testimonials.t3.service": "Momentum package: custom agent (agents-only)",
    "testimonials.t3.stat1": "<strong>30h/week \u2192 almost none</strong>time on \u201cwhere\u2019s my order\u201d tickets",
    "testimonials.t3.stat2": "<strong>~1,800/mo</strong>support interactions handled",
    "testimonials.t3.stat3": "<strong>6h to &lt;1 min</strong>customer response time",

    "pricing.title": "Fixed prices, no surprises",
    "pricing.subtitle": "Most studios quote by the hour, after a long discovery process, with a final number nobody knows until the end. Here it's three packages, fixed price, published before you ever talk to us.",
    "pricing.badge": "Most chosen",
    "pricing.t1.name": "Step",
    "pricing.t1.note": "flat fee",
    "pricing.t1.desc": "A professional website plus one quick n8n automation. The simplest way to take the first step.",
    "pricing.t2.name": "Momentum",
    "pricing.t2.note": "flat fee",
    "pricing.t2.desc": "A website plus one custom-built agent that solves your single biggest bottleneck. Our most popular package.",
    "pricing.t3.name": "Convergence",
    "pricing.t3.note": "flat fee",
    "pricing.t3.desc": "A website plus 2 to 4 agents integrated with your existing tools. For businesses ready to automate for real.",
    "pricing.t4.name": "Drift",
    "pricing.t4.desc": "Ongoing care after any package: monitoring, tuning, and small improvements every month.",
    "pricing.permo": "/mo",
    "pricing.footnote": "Already have a website? Each package has a cheaper agents-only version. Just ask. Recovering those same 20-40 hours a month, most businesses pay back Momentum within their first quarter of use, no subsidy required.",

    "founding.title": "Limited slots while we build our portfolio",
    "founding.body": "Gradient works with a small number of firms at a time, so every project gets close, hands-on attention. The prices above are the same for everyone, no hidden discounts, no surprises, but we only open a handful of slots each quarter while we document our first case studies.",
    "founding.cta": "Claim your spot",

    "contact.title": "Let's talk about your office",
    "contact.body": "Tell us which task eats the most time every week. Within 24 hours we'll tell you whether it's worth automating.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Which task eats the most time?",
    "contact.send": "Send",
    "contact.note": "This opens your email client with the message pre-written.",

    "footer.tagline": "Gradient · Barcelona, Spain",
    "footer.tagline2": "Where repetitive work ends",
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

// Guarded: not every page has a language toggle (e.g. Spanish-only sector pages).
const langToggleEl = document.getElementById("langToggle");
if (langToggleEl) {
  langToggleEl.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "es";
    setLanguage(current === "es" ? "en" : "es");
  });
}

// restore saved preference on load
const savedLang = localStorage.getItem("gradient_lang");
if (savedLang === "en") setLanguage("en");

// -------- 3. CONTACT FORM → mailto fallback --------
// No backend yet, so this opens the visitor's email client with a pre-filled message.
// Replace with a real form handler (e.g. a Vercel serverless function) once the
// business has a dedicated inbox and wants a no-redirect submit experience.
// Guarded: same reasoning as the language toggle above.
const contactFormEl = document.getElementById("contactForm");
if (contactFormEl) {
  contactFormEl.addEventListener("submit", function(e){
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const company = this.company.value;
    const message = this.message.value;
    const subject = encodeURIComponent(`Consulta de ${name}${company ? " (" + company + ")" : ""}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

// -------- 4. SCROLL REVEAL --------
const revealTargets = document.querySelectorAll("section h2, .sector-card, .price-card, .step, .stat, .testimonial-card");
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
