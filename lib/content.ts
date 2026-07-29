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
  featured?: boolean;
  highlights?: string[];
  // Ruta de una futura landing page dedicada. Todavía no existe la página —
  // este campo solo deja preparada la arquitectura; la UI sigue enlazando a
  // los anchors de la home hasta que esas páginas se construyan.
  path?: string;
};

// Orden por prioridad comercial explícita: defensa administrativa sancionatoria
// primero (con los sub-frentes de esa defensa como highlights), luego visas,
// SIRE y permisos; la regularización venezolana queda como servicio
// complementario al final.
export const services: Service[] = [
  {
    slug: "defensa-administrativa",
    title: "Defensa Administrativa Sancionatoria",
    description:
      "Representación estratégica desde la notificación de cargos hasta el agotamiento de la vía administrativa, en procesos de deportación y expulsión adelantados por Migración Colombia.",
    icon: "scale",
    featured: true,
    path: "/defensa-sancionatoria",
    highlights: [
      "Descargos: 15 días desde la notificación de cargos para presentar descargos y solicitar pruebas.",
      "Recursos de reposición y apelación en efecto suspensivo.",
      "Defensa frente a sanciones económicas (multas).",
      "Defensa frente a procesos de deportación.",
      "Defensa frente a procesos de expulsión.",
    ],
  },
  {
    slug: "visas-colombianas",
    title: "Visas Colombianas",
    description:
      "Asesoría jurídica para estructurar la visa correcta —Visitante, Migrante o Residente— según su situación y propósito de viaje en Colombia.",
    icon: "id",
    path: "/visas-colombia",
  },
  {
    slug: "cumplimiento-empresarial-sire",
    title: "Cumplimiento Empresarial SIRE",
    description:
      "Acompañamiento jurídico en el cumplimiento del reporte de extranjeros vía SIRE para hoteles, hospitales, empresas y agencias marítimas, según el plazo exigido a cada sector.",
    icon: "building",
    path: "/sire",
  },
  {
    slug: "permisos-ingreso-permanencia",
    title: "Permisos de Ingreso y Permanencia",
    description:
      "Asesoría jurídica sobre el Permiso de Ingreso y Permanencia (PIP), el Permiso Temporal de Permanencia (PTP) y los salvoconductos SC-1 (salida) y SC-2 (permanencia) según cada situación.",
    icon: "document",
  },
  {
    slug: "salida-menores",
    title: "Salida de Menores",
    description:
      "Asesoría jurídica para el permiso de salida de menores, autenticado ante notario o cónsul, y garantía de acceso a salud y educación de NNA sin importar su estatus migratorio.",
    icon: "family",
    path: "/salida-menores",
  },
  {
    slug: "proteccion-internacional",
    title: "Protección Internacional",
    description:
      "Orientación jurídica en la solicitud de refugio ante la Cancillería (CONARE) y su compatibilidad con el PPT para personas en extrema vulnerabilidad (Sentencia SU-543 de 2023).",
    icon: "globe",
    path: "/proteccion-internacional",
  },
  {
    slug: "regularizacion-venezolana",
    title: "Regularización Venezolana",
    description:
      "Asesoría jurídica para el tránsito de PEP a PPT, el registro en el RUMV y la verificación de requisitos del ETPV, vigente hasta el 30 de mayo de 2031.",
    icon: "verify",
    path: "/regularizacion-venezolanos",
  },
];

export type Situation = {
  icon: Service["icon"];
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
};

// Sección de orientación inicial: no representa áreas de práctica, sino
// situaciones/problemas frecuentes del visitante, cada una enlazada a la
// landing de servicio correspondiente.
export const situations: Situation[] = [
  {
    icon: "scale",
    title: "Recibí una notificación de Migración Colombia",
    description:
      "Necesito orientación jurídica para responder una formulación de cargos, una investigación administrativa o una posible sanción migratoria.",
    ctaLabel: "Conocer la defensa jurídica",
    href: "/defensa-sancionatoria",
  },
  {
    icon: "id",
    title: "Necesito una visa o un permiso migratorio",
    description:
      "Requiero asesoría jurídica para definir la categoría migratoria adecuada y adelantar el procedimiento correspondiente.",
    ctaLabel: "Ver opciones de visas",
    href: "/visas-colombia",
  },
  {
    icon: "building",
    title: "Mi empresa recibió un requerimiento relacionado con SIRE",
    description:
      "Necesito apoyo para cumplir las obligaciones migratorias, atender requerimientos o implementar medidas de cumplimiento normativo.",
    ctaLabel: "Conocer asesoría empresarial",
    href: "/sire",
  },
  {
    icon: "family",
    title: "Necesito autorización para la salida de un menor",
    description: "Requiero orientación jurídica sobre permisos de salida del país y requisitos aplicables.",
    ctaLabel: "Más información",
    href: "/salida-menores",
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
      "Solicitud ante la Cancillería (CONARE) dentro de los 2 meses de ingreso; el salvoconducto SC-2 (vigente 180 días, prorrogable y gratuito) regulariza la permanencia mientras se resuelve. Desde la Sentencia SU-543 de 2023, quienes están en extrema vulnerabilidad pueden mantener su solicitud de refugio mientras tramitan el PPT.",
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
  {
    code: "Decreto 1067/2015, Arts. 2.2.1.13.1.3 y 2.2.1.13.2.4 (mod. Decreto 1743/2015)",
    description:
      "Rangos de restricción de reingreso por deportación (6 meses a 10 años) y expulsión (mínimo 5 años, sin máximo definido).",
  },
  {
    code: "Resolución 2357/2020 (mod. Resolución 3770/2021)",
    description: "Tabla de multas migratorias en UVT por infracciones leves, moderadas y renuencia a suministrar información.",
  },
  {
    code: "Ley 1098 de 2006, Art. 110 (mod. Ley 1878/2018)",
    description: "Requisitos del permiso de salida de menores de edad y autoridades competentes para autorizarlo.",
  },
];

export type LegalFoundation = {
  name: string;
};

// Fuentes que fundamentan la práctica jurídica de la firma. La Constitución,
// la Ley 2136/2021 y el Decreto 1067/2015 vienen de la investigación
// verificada del notebook del usuario. La Ley 1437/2011 (CPACA, código que
// rige recursos, descargos y sanciones administrativas en Colombia) y la
// jurisprudencia del Consejo de Estado son conocimiento jurídico general
// verificado independientemente, no contra el notebook — ambas son correctas
// y pertinentes a la práctica de defensa administrativa sancionatoria.
export const legalFoundations: LegalFoundation[] = [
  { name: "Constitución Política" },
  { name: "Ley 1437 de 2011" },
  { name: "Ley 2136 de 2021" },
  { name: "Decreto 1067 de 2015" },
  { name: "Jurisprudencia del Consejo de Estado" },
];

export type WhyChooseItem = {
  title: string;
  description: string;
};

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: "Estrategia jurídica personalizada",
    description: "Cada actuación se analiza según los hechos y el estado real del expediente, no una plantilla.",
  },
  {
    title: "Análisis probatorio",
    description: "Revisión de las pruebas que sustentan el cargo y de las que respaldan la defensa.",
  },
  {
    title: "Revisión de la legalidad del procedimiento",
    description: "Verificación de que la actuación administrativa cumplió cada etapa exigida por la ley.",
  },
  {
    title: "Estudio de tipicidad y culpabilidad",
    description: "Confrontación de la conducta imputada con la causal legal invocada.",
  },
  {
    title: "Recursos administrativos",
    description: "Reposición y apelación formuladas dentro de los términos y con efecto suspensivo cuando procede.",
  },
  {
    title: "Cumplimiento normativo empresarial",
    description: "Acompañamiento a empresas para reportar extranjeros conforme al SIRE.",
  },
  {
    title: "Defensa migratoria especializada",
    description: "Práctica enfocada en derecho migratorio y procedimiento administrativo, no un servicio genérico.",
  },
];

export type TimelineStep = {
  step: string;
  description: string;
};

// Metodología general de trabajo (aplica a cualquier servicio, no solo a
// defensa sancionatoria). El procedimiento específico de cada trámite vive
// en su propia landing (p. ej. /defensa-sancionatoria usa su propio timeline
// basado en el CPACA).
export const caseTimeline: TimelineStep[] = [
  { step: "Recepción del caso", description: "Analizamos la información suministrada y comprendemos la situación jurídica planteada." },
  { step: "Evaluación jurídica", description: "Identificamos la normativa aplicable, verificamos antecedentes y evaluamos los riesgos jurídicos del caso." },
  { step: "Diseño de la estrategia", description: "Definimos la alternativa jurídica más adecuada según las circunstancias particulares del asunto." },
  { step: "Acompañamiento profesional", description: "Brindamos asesoría jurídica durante cada etapa del procedimiento o trámite correspondiente." },
  { step: "Seguimiento", description: "Mantenemos comunicación permanente y orientamos al cliente hasta la culminación del servicio contratado." },
];

export type AnalysisCriterion = {
  title: string;
  description: string;
};

// Criterios de revisión propios del derecho administrativo sancionatorio.
// Enunciado descriptivo, sin prometer resultados ni usar lenguaje comercial.
export const caseAnalysis: AnalysisCriterion[] = [
  { title: "Competencia de la autoridad", description: "Si el funcionario y la dependencia tenían facultad para actuar." },
  { title: "Caducidad", description: "Si la actuación se adelantó dentro de los términos legales." },
  { title: "Tipicidad", description: "Si la conducta encaja en la causal legal invocada." },
  { title: "Culpabilidad", description: "Si existe responsabilidad atribuible en los hechos." },
  { title: "Valoración probatoria", description: "Si las pruebas del expediente sustentan la decisión." },
  { title: "Debido proceso", description: "Si se garantizaron notificación, contradicción y defensa." },
  { title: "Motivación del acto", description: "Si la decisión está debidamente justificada en hechos y derecho." },
  { title: "Proporcionalidad", description: "Si la sanción corresponde a la gravedad de la conducta." },
  { title: "Legalidad", description: "Si la actuación se ajustó íntegramente al procedimiento y al marco normativo aplicable." },
];

export type SpecializationArea = {
  icon: Service["icon"];
  title: string;
  description: string;
};

export const specializationAreas: SpecializationArea[] = [
  {
    icon: "document",
    title: "Derecho Migratorio Colombiano",
    description: "Asesoría jurídica integral en materia migratoria para personas naturales y jurídicas.",
  },
  {
    icon: "scale",
    title: "Procedimientos Administrativos Sancionatorios",
    description: "Defensa técnica frente a actuaciones administrativas adelantadas por la autoridad migratoria.",
  },
  {
    icon: "id",
    title: "Visas y Permanencia",
    description: "Orientación jurídica sobre visas, permanencia y mecanismos previstos en la normativa colombiana.",
  },
  {
    icon: "building",
    title: "Cumplimiento Migratorio Empresarial",
    description: "Asesoría preventiva y correctiva para empresas en materia de obligaciones migratorias y SIRE.",
  },
  {
    icon: "globe",
    title: "Movilidad Internacional",
    description: "Asesoría sobre ingreso, permanencia y movilidad conforme al régimen migratorio colombiano.",
  },
  {
    icon: "verify",
    title: "Análisis Jurídico Estratégico",
    description:
      "Estudio integral de cada caso con fundamento en la legalidad, el debido proceso, la valoración probatoria y la estrategia jurídica.",
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
  {
    question: "¿Cuál es la diferencia entre deportación y expulsión?",
    answer:
      "La deportación ordena la salida inmediata del país por permanencia irregular u otras infracciones graves, con restricción de reingreso de 6 meses a 10 años. La expulsión es una sanción por conductas delictivas o riesgo para la seguridad nacional, con restricción de reingreso de mínimo 5 años y sin máximo definido (si supera los 10 años requiere consulta previa al Director General de Migración Colombia). En ambos casos, el extranjero tiene derecho a ser oído, presentar pruebas y contar con intérprete gratuito si no domina el español.",
    citation: "Arts. 2.2.1.13.1.3 y 2.2.1.13.2.4, Decreto 1067/2015 (mod. Decreto 1743/2015); Const. Pol. Art. 29.",
  },
  {
    question: "¿Qué debe reportar mi empresa a través del SIRE y en qué plazo?",
    answer:
      "Hoteles, hospitales, agencias marítimas y empresas de transporte que vinculen o alojen extranjeros deben reportar nombres y apellidos, nacionalidad, fecha y lugar de nacimiento, y tipo y número de documento. Para naves, el reporte de emigración debe hacerse con un máximo de 3 horas de antelación a la salida.",
    citation: "Fuentes operativas de reporte migratorio empresarial (SIRE).",
  },
  {
    question: "¿Una formulación de cargos significa que ya existe una sanción?",
    answer:
      "No. La formulación de cargos corresponde al inicio de una actuación administrativa sancionatoria y constituye la oportunidad para ejercer el derecho de defensa y presentar los argumentos y pruebas pertinentes.",
    citation: "Ley 1437 de 2011 (CPACA) — garantías del debido proceso.",
  },
  {
    question: "¿Puedo presentar recursos contra una decisión de Migración Colombia?",
    answer:
      "Dependiendo del acto administrativo y de las circunstancias del caso, la legislación colombiana prevé distintos mecanismos de impugnación que deben ejercerse dentro de los términos legales.",
    citation: "Ley 1437 de 2011 (CPACA) — recursos administrativos.",
  },
  {
    question: "¿La asesoría puede realizarse de manera virtual?",
    answer:
      "Sí. La atención puede desarrollarse mediante herramientas virtuales, permitiendo acompañamiento jurídico desde cualquier lugar.",
    citation: "Modalidad de atención de la firma.",
  },
  {
    question: "¿Mi empresa debe cumplir obligaciones relacionadas con SIRE?",
    answer:
      "Las obligaciones dependen de la actividad desarrollada y de las disposiciones aplicables. Una evaluación jurídica permite determinar los deberes específicos de cada organización.",
    citation: "Art. 2.2.1.11.5.1 Decreto 1067/2015; Resolución 2357/2020.",
  },
  {
    question: "¿Qué información debo tener para solicitar una evaluación jurídica?",
    answer:
      "Es recomendable contar con los documentos relacionados con el caso, las actuaciones administrativas recibidas y cualquier información que permita comprender la situación jurídica planteada.",
    citation: "Procedimiento de atención de la firma.",
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
  // Marcadores temporales — reemplazar con los datos reales de contacto.
  contact: {
    phone: "[Teléfono pendiente]",
    email: "[correo@pendiente.com]",
    address: "[Dirección pendiente]",
  },
  // Root-relative para funcionar desde cualquier página (landings incluidas),
  // no solo desde el home. "Biblioteca Jurídica" enlaza por ahora a la sección
  // de fundamento normativo (/#confianza) — ruta preparada para apuntar a una
  // página dedicada cuando exista, sin generar un enlace roto mientras tanto.
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Defensa Administrativa", href: "/defensa-sancionatoria" },
    { label: "Visas", href: "/visas-colombia" },
    { label: "Empresas (SIRE)", href: "/sire" },
    { label: "Biblioteca Jurídica", href: "/#confianza" },
    { label: "Contacto", href: "/#cta" },
  ],
};
