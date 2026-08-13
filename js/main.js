/* ========================================================
   GRADIENT: i18n, contact form, booking link, scroll reveals
   ======================================================== */

// -------- CONFIG --------
// TODO: replace {{BOOKING_URL}} with the real scheduling link (Cal.com, Calendly, etc.)
const BOOKING_URL = "{{BOOKING_URL}}";

// TODO: replace {{FORM_ENDPOINT}} with the real form endpoint.
// Any endpoint that accepts a POST with JSON works: Formspree, Basin, Formsubmit,
// a Vercel Function at /api/contact, etc. It must respond 2xx on success.
const FORM_ENDPOINT = "{{FORM_ENDPOINT}}";

// -------- 1. TRANSLATIONS --------
const translations = {
  es: {
    "nav.sectors": "Sectores",
    "nav.how": "Cómo funciona",
    "nav.proof": "Cómo trabajamos",
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

    "method.title": "De diagnóstico a sistema en producción",
    "method.s1.title": "Diagnóstico",
    "method.s1.body": "Mapeamos un flujo de trabajo concreto y medimos cuánto tiempo cuesta hoy.",
    "method.s2.title": "Piloto",
    "method.s2.body": "Construimos un agente funcional para ese flujo en 2-3 semanas.",
    "method.s3.title": "Build",
    "method.s3.body": "Ampliamos a 2-4 flujos, integrados con tus herramientas actuales.",
    "method.s4.title": "Cuidado continuo",
    "method.s4.body": "Monitorizamos, ajustamos y añadimos mejoras cada mes.",

    "why.title": "Un chatbot con guion no es un agente",
    "why.body": "Casi todo lo que se vende hoy como «IA» para despachos profesionales es un panel con reglas o un chatbot con respuestas predefinidas. Un agente de verdad lee lo que entra, decide qué hacer, actúa sobre tus sistemas y deja constancia de cada paso, sin intervención manual y sin plantillas genéricas con el logo cambiado. Esa es la diferencia técnica. La otra es de confianza: trabajamos con datos sensibles de tus clientes, así que el cumplimiento RGPD no es un añadido, es la base.",

    "proof.title": "Cómo trabajamos, en concreto",
    "proof.video.title": "Un agente real, en dos minutos",
    "proof.video.placeholder": "Vídeo próximamente",
    "proof.video.caption": "Grabación de un flujo real, de entrada a resultado, sin cortes.",
    "proof.repo.title": "El código, abierto",
    "proof.repo.body": "Puedes ver cómo está construido esto, y algunos de nuestros agentes de ejemplo, en el repositorio público.",
    "proof.repo.cta": "Ver el repositorio en GitHub",
    "proof.portfolio.title": "Estás pronto, y eso te conviene",
    "proof.portfolio.body": "Gradient es un estudio nuevo. Los precios publicados son precios de portfolio para los primeros clientes: el mismo trabajo, con más tiempo dedicado a tu caso y con acceso directo al que construye. Cuando el portfolio se cierre, esas condiciones se cierran con él.",

    "pricing.title": "Precios fijos, sin sorpresas",
    "pricing.subtitle": "La mayoría de estudios cotizan por hora, tras un descubrimiento largo, con un precio final que nadie sabe hasta el cierre. Aquí no: tres paquetes, precio fijo, publicado antes de que hables con nosotros.",
    "pricing.badge": "Más elegido",
    "pricing.t1.name": "Step",
    "pricing.t1.note": "pago único",
    "pricing.t1.desc": "Web profesional más una automatización directa para tu primer flujo. El primer paso, sin complicarte.",
    "pricing.t2.name": "Momentum",
    "pricing.t2.note": "pago único",
    "pricing.t2.desc": "Web más un agente a medida que resuelve tu mayor cuello de botella. Nuestro paquete más elegido.",
    "pricing.t3.name": "Convergence",
    "pricing.t3.note": "pago único",
    "pricing.t3.desc": "Web más 2 a 4 agentes integrados en tus herramientas actuales. Para negocios listos para automatizar de verdad.",
    "pricing.t4.name": "Drift",
    "pricing.t4.desc": "Cuidado continuo tras cualquier paquete: monitorización, ajustes y mejoras cada mes.",
    "pricing.permo": "/mes",
    "pricing.footnote": "¿Ya tienes web? Cada paquete tiene una versión solo de agentes, más económica. Pregúntanos.",

    "founding.title": "Plazas limitadas mientras construimos nuestro portfolio",
    "founding.body": "Gradient trabaja con un número reducido de despachos a la vez para dar seguimiento cercano a cada proyecto. Los precios de arriba son los mismos para todos: sin descuentos ocultos, sin sorpresas. Pero solo abrimos un puñado de plazas cada trimestre mientras documentamos nuestros primeros casos.",
    "founding.cta": "Reserva tu plaza",

    "contact.title": "Hablemos de tu despacho",
    "contact.body": "Cuéntanos qué tarea os quita más tiempo cada semana. En 24 horas te decimos si tiene sentido automatizarla.",
    "contact.book": "Reserva una llamada",
    "contact.or": "o escríbenos abajo",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.company": "Empresa",
    "contact.message": "¿Qué tarea os quita más tiempo?",
    "contact.consent": "He leído y acepto la <a href=\"/privacidad.html\">política de privacidad</a>.",
    "contact.send": "Enviar",
    "contact.status.sending": "Enviando…",
    "contact.status.ok": "Gracias. Te respondemos en menos de 24 horas.",
    "contact.status.error": "No hemos podido enviar el mensaje. Escríbenos directamente o reserva una llamada.",
    "contact.status.consent": "Necesitamos tu consentimiento para tratar los datos del formulario.",
    "contact.data.pre": "Trabajamos con documentos de tus clientes. Aquí explicamos ",
    "contact.data.link": "cómo tratamos esos datos",
    "contact.data.post": ".",

    "footer.tagline": "Gradient · Barcelona, España",
    "footer.tagline2": "Donde termina el trabajo repetitivo",
    "footer.legal": "Estudio independiente de automatización con IA. RGPD por diseño.",
    "footer.link.legal": "Aviso legal",
    "footer.link.privacy": "Privacidad",
    "footer.link.cookies": "Cookies",
    "footer.link.data": "Datos de clientes"
  },
  en: {
    "nav.sectors": "Sectors",
    "nav.how": "How it works",
    "nav.proof": "How we work",
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

    "method.title": "From diagnostic to production system",
    "method.s1.title": "Diagnostic",
    "method.s1.body": "We map one concrete workflow and measure what it costs today.",
    "method.s2.title": "Pilot",
    "method.s2.body": "We build a working agent for that workflow in 2-3 weeks.",
    "method.s3.title": "Build",
    "method.s3.body": "We expand to 2-4 workflows, integrated with your existing tools.",
    "method.s4.title": "Ongoing care",
    "method.s4.body": "We monitor, tune, and add improvements every month.",

    "why.title": "A scripted chatbot is not an agent",
    "why.body": "Most of what is sold today as “AI” for professional-services firms is a rules panel or a chatbot with prewritten answers. A real agent reads what comes in, decides what to do, acts on your systems, and logs each step, with no manual intervention and no generic template with the logo swapped. That is the technical difference. The other one is trust: we work with your clients' sensitive data, so GDPR compliance isn't an add-on, it's the foundation.",

    "proof.title": "How we work, in concrete terms",
    "proof.video.title": "A real agent, in two minutes",
    "proof.video.placeholder": "Video coming soon",
    "proof.video.caption": "A recording of a real workflow, from input to result, uncut.",
    "proof.repo.title": "The code, in the open",
    "proof.repo.body": "You can see how this is built, and some of our example agents, in the public repository.",
    "proof.repo.cta": "See the repository on GitHub",
    "proof.portfolio.title": "You're early, and that works for you",
    "proof.portfolio.body": "Gradient is a new studio. The published prices are portfolio pricing for our first clients: the same work, more time on your case, and direct access to the person building it. When the portfolio closes, those terms close with it.",

    "pricing.title": "Fixed prices, no surprises",
    "pricing.subtitle": "Most studios quote by the hour, after a long discovery process, with a final number nobody knows until the end. Here it's three packages, fixed price, published before you ever talk to us.",
    "pricing.badge": "Most chosen",
    "pricing.t1.name": "Step",
    "pricing.t1.note": "flat fee",
    "pricing.t1.desc": "A professional website plus one direct automation for your first workflow. The simplest way to take the first step.",
    "pricing.t2.name": "Momentum",
    "pricing.t2.note": "flat fee",
    "pricing.t2.desc": "A website plus one custom-built agent that solves your single biggest bottleneck. Our most popular package.",
    "pricing.t3.name": "Convergence",
    "pricing.t3.note": "flat fee",
    "pricing.t3.desc": "A website plus 2 to 4 agents integrated with your existing tools. For businesses ready to automate for real.",
    "pricing.t4.name": "Drift",
    "pricing.t4.desc": "Ongoing care after any package: monitoring, tuning, and small improvements every month.",
    "pricing.permo": "/mo",
    "pricing.footnote": "Already have a website? Each package has a cheaper agents-only version. Just ask.",

    "founding.title": "Limited slots while we build our portfolio",
    "founding.body": "Gradient works with a small number of firms at a time, so every project gets close, hands-on attention. The prices above are the same for everyone, no hidden discounts, no surprises, but we only open a handful of slots each quarter while we document our first cases.",
    "founding.cta": "Claim your spot",

    "contact.title": "Let's talk about your office",
    "contact.body": "Tell us which task eats the most time every week. Within 24 hours we'll tell you whether it's worth automating.",
    "contact.book": "Book a call",
    "contact.or": "or write to us below",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.message": "Which task eats the most time?",
    "contact.consent": "I have read and accept the <a href=\"/privacidad.html\">privacy policy</a>.",
    "contact.send": "Send",
    "contact.status.sending": "Sending…",
    "contact.status.ok": "Thanks. We'll get back to you within 24 hours.",
    "contact.status.error": "We couldn't send your message. Please write to us directly or book a call.",
    "contact.status.consent": "We need your consent to process the form data.",
    "contact.data.pre": "We work with your clients' documents. Here is ",
    "contact.data.link": "how we handle that data",
    "contact.data.post": ".",

    "footer.tagline": "Gradient · Barcelona, Spain",
    "footer.tagline2": "Where repetitive work ends",
    "footer.legal": "Independent AI automation studio. GDPR by design.",
    "footer.link.legal": "Legal notice",
    "footer.link.privacy": "Privacy",
    "footer.link.cookies": "Cookies",
    "footer.link.data": "Client data"
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
  try { localStorage.setItem("gradient_lang", lang); } catch(_) {}
}

const langToggle = document.getElementById("langToggle");
if (langToggle) {
  langToggle.addEventListener("click", () => {
    const current = document.documentElement.lang === "en" ? "en" : "es";
    setLanguage(current === "es" ? "en" : "es");
  });
}

try {
  const savedLang = localStorage.getItem("gradient_lang");
  if (savedLang === "en") setLanguage("en");
} catch(_) {}

// -------- 3. BOOKING LINKS --------
// Any element with [data-booking] opens BOOKING_URL in a new tab.
document.querySelectorAll("[data-booking]").forEach(el => {
  el.addEventListener("click", (e) => {
    // If URL is still the placeholder, fall back to the contact anchor
    // so the button never leads to a dead link during setup.
    if (!BOOKING_URL || BOOKING_URL.indexOf("{{") === 0) return;
    e.preventDefault();
    window.open(BOOKING_URL, "_blank", "noopener,noreferrer");
  });
});

// -------- 4. CONTACT FORM (real POST, inline states) --------
const form = document.getElementById("contactForm");
if (form) {
  const statusEl = document.getElementById("formStatus");
  const submitBtn = form.querySelector('button[type="submit"]');

  const t = (key) => {
    const lang = document.documentElement.lang === "en" ? "en" : "es";
    return (translations[lang] && translations[lang][key]) || "";
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Honeypot: if filled, silently succeed (do not tip off the bot).
    if (form.website && form.website.value.trim() !== "") {
      statusEl.className = "form-status is-ok";
      statusEl.textContent = t("contact.status.ok");
      form.reset();
      return;
    }

    if (!form.consent.checked) {
      statusEl.className = "form-status is-error";
      statusEl.textContent = t("contact.status.consent");
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    statusEl.className = "form-status is-pending";
    statusEl.textContent = t("contact.status.sending");
    submitBtn.disabled = true;

    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      company: form.company.value.trim(),
      message: form.message.value.trim(),
      lang: document.documentElement.lang || "es",
      submitted_at: new Date().toISOString()
    };

    try {
      // If the endpoint hasn't been configured yet, treat submit as an error
      // rather than a network call to a literal "{{FORM_ENDPOINT}}" URL.
      if (!FORM_ENDPOINT || FORM_ENDPOINT.indexOf("{{") === 0) {
        throw new Error("FORM_ENDPOINT not configured");
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Bad response: " + res.status);

      statusEl.className = "form-status is-ok";
      statusEl.textContent = t("contact.status.ok");
      form.reset();
    } catch (err) {
      statusEl.className = "form-status is-error";
      statusEl.textContent = t("contact.status.error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// -------- 5. SCROLL REVEAL --------
const revealTargets = document.querySelectorAll(
  "section h2, .sector-card, .price-card, .step, .stat, .proof-item"
);
revealTargets.forEach(el => el.setAttribute("data-reveal", ""));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => observer.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add("is-visible"));
}
