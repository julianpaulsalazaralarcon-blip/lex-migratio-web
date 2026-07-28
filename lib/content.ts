// Todo el contenido jurídico de este archivo está redactado a partir de las
// fuentes normativas provistas en el notebook "Migracion Colombia - Marco
// Legal y Procedimientos" (Decreto 216/2021, Resolución 971/2021, Decreto
// 1067/2015, Resolución 5477/2022, Resolución 2061/2020, Sentencia SU-543
// de 2023, Constitución Política). No incluye normas ni jurisprudencia no
// verificadas contra esas fuentes.

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: "document" | "id" | "scale" | "family" | "verify" | "building" | "globe";
};

export const services: Service[] = [
  {
    slug: "regularizacion-etpv-ppt",
    title: "Regularización y Estatus",
    description:
      "Tránsito de PEP a PPT, registro en el RUMV (prerregistro, encuesta socioeconómica y biometría) y verificación de requisitos del ETPV, vigente hasta el 30 de mayo de 2031.",
    icon: "document",
  },
  {
    slug: "visas-y-permisos",
    title: "Visas y Permisos",
    description:
      "Visas de Visitante, Migrante y Residente, permisos PIP y PTP, y salvoconductos SC-1 (salida) y SC-2 (permanencia) según cada situación.",
    icon: "id",
  },
  {
    slug: "defensa-administrativa",
    title: "Defensa Administrativa",
    description:
      "Representación en procesos de deportación (permanencia irregular) y expulsión (conductas penales o riesgo a la seguridad), con derecho de defensa, contradicción e intérprete gratuito.",
    icon: "scale",
  },
  {
    slug: "menores-unificacion-familiar",
    title: "Menores y Unificación Familiar",
    description:
      "Permiso de salida autenticado ante notario o cónsul, y garantía de acceso a salud y educación de NNA sin importar su estatus migratorio.",
    icon: "family",
  },
  {
    slug: "verificacion-forense",
    title: "Verificación Forense",
    description:
      "Documentología, grafología y dactiloscopia para casos de sospecha de falsedad documental o suplantación de identidad.",
    icon: "verify",
  },
  {
    slug: "cumplimiento-empresarial-sire",
    title: "Cumplimiento Empresarial",
    description:
      "Reporte oportuno de extranjeros vía SIRE para hoteles, hospitales, empresas y agencias marítimas, con el plazo de 3 horas antes de zarpe en el sector marítimo.",
    icon: "building",
  },
  {
    slug: "proteccion-internacional",
    title: "Protección Internacional",
    description:
      "Solicitud de refugio ante la Cancillería (CONARE) y su compatibilidad con el PPT para personas en extrema vulnerabilidad (Sentencia SU-543 de 2023).",
    icon: "globe",
  },
];

export type Segment = {
  slug: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
};

export const segments: Segment[] = [
  {
    slug: "venezolanos",
    label: "Ventanilla 01 — Venezolanos",
    title: "Migrantes venezolanos",
    description:
      "Acceso al Estatuto Temporal de Protección (ETPV), vigente hasta el 30 de mayo de 2031, con tránsito de PEP a PPT y registro previo en el RUMV (prerregistro, encuesta socioeconómica y biometría).",
    tags: ["ETPV", "RUMV", "PEP → PPT"],
  },
  {
    slug: "refugiados",
    label: "Ventanilla 02 — Refugiados",
    title: "Refugiados y solicitantes de asilo",
    description:
      "Solicitud ante la Cancillería (CONARE) dentro de los 6 meses de ingreso; el salvoconducto SC-2 regulariza la permanencia mientras se resuelve. Desde la Sentencia SU-543 de 2023, quienes están en extrema vulnerabilidad pueden mantener su solicitud de refugio mientras tramitan el PPT.",
    tags: ["Refugio", "CONARE", "SC-2", "SU-543/2023"],
  },
  {
    slug: "familias-con-menores",
    label: "Ventanilla 03 — Familias con menores",
    title: "Familias con menores (NNA)",
    description:
      "Permiso de salida autenticado ante notario o cónsul (con registro civil de nacimiento), y acceso garantizado a salud de urgencia y a educación vía matrícula en el SIMAT, sin importar el estatus migratorio del menor.",
    tags: ["Permiso de salida", "SIMAT"],
  },
  {
    slug: "poblaciones-vulnerables",
    label: "Ventanilla 04 — Poblaciones vulnerables",
    title: "Poblaciones vulnerables",
    description:
      "Adultos mayores, gestantes y NNA menores de 12 años tienen prelación en los Puestos de Control Migratorio; víctimas de trata reciben asistencia inmediata de 5 días prorrogables (alojamiento, salud, asesoría jurídica).",
    tags: ["Trato prioritario", "Trata de personas"],
  },
  {
    slug: "viajeros-can-mercosur",
    label: "Ventanilla 05 — Viajeros CAN/MERCOSUR",
    title: "Viajeros CAN / MERCOSUR",
    description:
      "Ingreso, tránsito y salida con cédula nacional en vez de pasaporte (Decisión 503 CAN y Decisión 046 MERCOSUR); ciudadanos MERCOSUR en irregularidad pueden acceder a SC-2 y revocatoria de multas al tramitar su residencia.",
    tags: ["CAN", "MERCOSUR"],
  },
  {
    slug: "empresas-operadores",
    label: "Ventanilla 06 — Empresas y operadores",
    title: "Empresas y operadores",
    description:
      "Reporte obligatorio vía SIRE para hoteles, hospitales, agencias marítimas y empresas de transporte que vinculen o alojen extranjeros, con plazo máximo de 3 horas antes de la salida en el caso marítimo/fluvial.",
    tags: ["SIRE", "Reporte de extranjeros"],
  },
];

export type LegalRef = {
  code: string;
  description: string;
};

export const legalFramework: LegalRef[] = [
  {
    code: "Ley 2136 / 2021",
    description: "Política Integral Migratoria (PIM) — marco general de la gestión migratoria.",
  },
  {
    code: "Decreto 216/2021, Arts. 3, 4, 11, 12, 19",
    description:
      "Adopción del ETPV: elegibilidad, vigencia de 10 años, derechos y requisitos del PPT, consecuencias de no transitar de PEP.",
  },
  {
    code: "Resolución 971/2021, Arts. 1, 3, 5, 9, 14, 15, 38",
    description:
      "Lineamientos operativos del ETPV: procedimiento del RUMV, requisitos del PPT y plazos de transición PEP → PPT.",
  },
  {
    code: "Decreto 1067/2015, Arts. 2.2.1.11.2.6 / .7 / .4.9",
    description:
      "Decreto Único Reglamentario Sector Relaciones Exteriores: PIP, PTP y salvoconductos SC-1/SC-2.",
  },
  {
    code: "Resolución 5477 / 2022, Arts. 22-24 y 90",
    description: "Tipos y requisitos de las visas de Visitante, Migrante y Residente.",
  },
  {
    code: "Resolución 2061 / 2020, Arts. 37, 38, 40 y 41",
    description: "Régimen y vigencias de los salvoconductos SC-1 y SC-2.",
  },
  {
    code: "Sentencia SU-543 / 2023",
    description:
      "Corte Constitucional: compatibilidad entre solicitud de refugio y PPT para personas en extrema vulnerabilidad.",
  },
  {
    code: "Const. Pol., Arts. 29 y 100",
    description: "Debido proceso y derechos de las personas extranjeras en Colombia.",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
  citation: string;
};

export const faqs: FaqItem[] = [
  {
    question: "¿Puedo trabajar o abrir una cuenta bancaria con mi PPT?",
    answer:
      "Sí. El PPT autoriza ejercer cualquier actividad u ocupación legal, incluida la formalización de contratos laborales, y faculta la apertura de cuentas bancarias y productos financieros.",
    citation: "Art. 11 Decreto 216/2021; Art. 14 Resolución 971/2021.",
  },
  {
    question: "¿Mi PEP sigue vigente o debo tramitar el PPT?",
    answer:
      "Tras el Decreto 216 de 2021 no se expiden más PEP. Los permisos vigentes quedaron prorrogados automáticamente para facilitar el cambio al PPT; quien no transite queda sujeto a sanciones administrativas y pierde su estatus regular al vencer el permiso anterior.",
    citation: "Art. 19 Decreto 216/2021; Art. 38 Resolución 971/2021.",
  },
  {
    question: "Si ya solicité refugio, ¿puedo tramitar también el PPT?",
    answer:
      "El PPT es en principio incompatible con la condición de refugiado. Sin embargo, la Sentencia SU-543 de 2023 ordenó inaplicar esa incompatibilidad para personas en extrema vulnerabilidad, que pueden mantener su solicitud de refugio mientras se tramita el PPT.",
    citation: "Art. 23-24 Decreto 216/2021; Sentencia SU-543 de 2023.",
  },
  {
    question: "¿Cuáles son los requisitos para el PPT?",
    answer:
      "Registro en el RUMV, no tener antecedentes penales ni medidas de expulsión/deportación vigentes, no estar reconocido como refugiado en otro país, y —si se estaba en situación irregular— acreditar con prueba sumaria la permanencia en Colombia antes del 31 de enero de 2021 (la TMF por sí sola no es prueba suficiente).",
    citation: "Art. 12 Decreto 216/2021; Art. 15 Resolución 971/2021.",
  },
  {
    question: "¿Qué necesito para que mi hijo salga del país?",
    answer:
      "Un documento de permiso de salida suscrito por los padres o representantes legales, autenticado ante notario o autoridad consular, que indique destino, propósito, fecha de salida y de regreso, junto con el registro civil de nacimiento del menor.",
    citation: "Fuentes operativas de control migratorio de menores.",
  },
  {
    question: "¿El PPT me da derechos políticos o la nacionalidad colombiana?",
    answer:
      "No. El PPT es un mecanismo de regularización migratoria temporal; no otorga derechos políticos ni la nacionalidad colombiana.",
    citation: "Decreto 216/2021.",
  },
];

export type GlossaryTerm = {
  term: string;
  definition: string;
};

export const glossary: GlossaryTerm[] = [
  { term: "RUMV", definition: "Registro de Migración Colombia para identificar a la población venezolana migrante (datos biográficos y biométricos)." },
  { term: "SIRE", definition: "Sistema para reportar a la autoridad migratoria la vinculación, servicio o alojamiento a extranjeros." },
  { term: "PPT", definition: "Documento de regularización que autoriza a venezolanos a permanecer y trabajar legalmente en Colombia." },
  { term: "PEP", definition: "Facilitación migratoria temporal previa al PPT, acceso a salud/educación/trabajo hasta 2 años." },
  { term: "ETPV", definition: "Estatuto que crea y regula el mecanismo de protección temporal para migrantes venezolanos." },
  { term: "PIP", definition: "Autorización de estancia corta al ingreso para nacionalidades exentas de visa." },
  { term: "PTP", definition: "Prórroga administrativa de permanencia para quien ingresó con un PIP." },
  { term: "SC-1", definition: "Salvoconducto temporal que autoriza exclusivamente la salida del país." },
  { term: "SC-2", definition: "Salvoconducto temporal que autoriza la permanencia mientras se resuelve una situación jurídica." },
  { term: "NNA", definition: "Niños y niñas (hasta 12 años) y adolescentes (12-18 años), sujetos de especial protección." },
  { term: "PLATINUM", definition: "Plataforma de información única migratoria: historial, registros y verificaciones." },
  { term: "Biomig", definition: "Facilitación migratoria voluntaria por reconocimiento de iris." },
  { term: "Check-Mig", definition: "Precarga de información de viaje antes del control migratorio." },
  { term: "CONARE", definition: "Organismo de la Cancillería que tramita y determina solicitudes de refugio." },
  { term: "TMF", definition: "Tarjeta de Movilidad Fronteriza: tránsito circunstancial en zonas de frontera terrestre." },
];

export const siteConfig = {
  name: "LEX MIGRATIO",
  monogram: "LM",
  fullName: "LEX MIGRATIO — Firma Especializada en Derecho Migratorio Colombiano",
  slogan: "Rigor jurídico. Soluciones migratorias.",
  tagline: "Firma Especializada en Derecho Migratorio Colombiano",
  // [correo@pendiente.com] y [Dirección pendiente] siguen siendo marcadores
  // temporales — reemplazar con los datos reales cuando estén disponibles.
  contact: {
    phone: "+57 300 632 1243",
    email: "[correo@pendiente.com]",
    address: "[Dirección pendiente]",
    whatsappUrl:
      "https://wa.me/573006321243?text=" +
      encodeURIComponent("Hola LEX MIGRATIO, quiero agendar una consulta sobre mi caso migratorio."),
  },
  nav: [
    { label: "Servicios", href: "#servicios" },
    { label: "¿Quién te puede ayudar?", href: "#ventanillas" },
    { label: "Recursos", href: "#recursos" },
    { label: "Marco Legal", href: "#confianza" },
  ],
};
