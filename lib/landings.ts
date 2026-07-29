// Contenido de las landing pages por servicio. Todo se redacta reorganizando
// lo ya verificado en lib/content.ts (services, faqs, segments, legalFramework)
// contra el notebook "Migracion Colombia - Marco Legal y Procedimientos".
// No se introducen normas, cifras ni afirmaciones jurídicas nuevas.

import type { FaqItem, Service, TimelineStep } from "@/lib/content";
import { faqs } from "@/lib/content";

export type LandingContent = {
  slug: string;
  icon: Service["icon"];
  serviceTitle: string;
  breadcrumbTitle: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    badgeLabel: string;
    primaryCta: string;
    secondaryCta: string;
  };
  problem: {
    title: string;
    paragraphs: string[];
  };
  risks: {
    title: string;
    items: string[];
  };
  procedure: {
    title: string;
    steps: TimelineStep[];
  };
  faq: {
    title: string;
    items: FaqItem[];
  };
  applicableCases: {
    title: string;
    items: string[];
  };
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
  };
};

const faqByQuestion = (question: string): FaqItem => {
  const found = faqs.find((f) => f.question === question);
  if (!found) throw new Error(`FAQ no encontrada: ${question}`);
  return found;
};

export const landings = {
  defensaSancionatoria: {
    slug: "defensa-sancionatoria",
    icon: "scale",
    serviceTitle: "Defensa Administrativa Sancionatoria",
    breadcrumbTitle: "Defensa Administrativa Sancionatoria",
    seo: {
      title: "Defensa en Procesos Administrativos Sancionatorios Migratorios",
      description:
        "Representación jurídica en procesos sancionatorios de Migración Colombia: descargos, recursos, deportación y expulsión. Evaluación preliminar en 24 horas.",
      keywords: [
        "defensa migratoria Colombia",
        "proceso administrativo sancionatorio Migración Colombia",
        "recurso contra sanción migratoria",
        "deportación Colombia defensa",
        "expulsión Colombia defensa",
      ],
    },
    hero: {
      eyebrow: "Defensa Migratoria Estratégica",
      title: "¿Migración Colombia inició una actuación administrativa en su contra?",
      subtitle:
        "Defendemos sus derechos mediante una estrategia jurídica especializada en procedimientos administrativos sancionatorios, recursos, control de legalidad y derecho migratorio colombiano.",
      badgeLabel: "Defensa Administrativa Sancionatoria",
      primaryCta: "Solicitar defensa jurídica",
      secondaryCta: "Ver procedimiento",
    },
    problem: {
      title: "Un proceso sancionatorio migratorio tiene términos cortos y consecuencias serias",
      paragraphs: [
        "Cuando Migración Colombia notifica cargos por presunta permanencia irregular u otra infracción, se abre un procedimiento administrativo sancionatorio con plazos definidos para responder.",
        "No actuar dentro del término, o hacerlo sin una estrategia jurídica clara, reduce las opciones de defensa disponibles antes de que la decisión quede en firme.",
      ],
    },
    risks: {
      title: "Lo que está en juego",
      items: [
        "Restricción de reingreso de 6 meses a 5 años en caso de deportación.",
        "Restricción de reingreso de 5 a 10 años en caso de expulsión.",
        "Sanciones económicas (multas) derivadas del proceso.",
        "Pérdida del estatus migratorio regular si el proceso no se atiende a tiempo.",
      ],
    },
    procedure: {
      title: "¿Cómo trabajamos su caso?",
      steps: [
        { step: "Notificación", description: "Recepción y lectura del acto administrativo que da inicio a la actuación." },
        { step: "Análisis jurídico", description: "Revisión de competencia, legalidad del procedimiento y término disponible." },
        { step: "Diseño de estrategia", description: "Definición de la línea de defensa según los hechos y las pruebas del caso." },
        { step: "Descargos", description: "Presentación de descargos y solicitud de pruebas dentro del término legal." },
        { step: "Pruebas", description: "Aporte y controversia del material probatorio pertinente." },
        { step: "Recursos", description: "Reposición y apelación contra la decisión, cuando hay lugar a ellos." },
        { step: "Seguimiento", description: "Monitoreo del expediente hasta la resolución definitiva." },
      ],
    },
    faq: {
      title: "Preguntas sobre defensa administrativa",
      items: [
        {
          question: "¿Cuánto tiempo tengo para presentar descargos?",
          answer:
            "15 días desde la notificación de cargos, término dentro del cual puede presentar descargos y solicitar pruebas.",
          citation: "Procedimiento sancionatorio — notificación de cargos y descargos.",
        },
        faqByQuestion("¿Cuál es la diferencia entre deportación y expulsión?"),
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Recibió una notificación de cargos por parte de Migración Colombia.",
        "Está en riesgo de un proceso de deportación por permanencia irregular.",
        "Enfrenta un proceso de expulsión por una conducta tipificada como infracción gravísima.",
        "Fue notificado de una sanción económica (multa) migratoria.",
        "Quiere presentar recursos de reposición o apelación contra un acto administrativo migratorio.",
      ],
    },
    cta: {
      eyebrow: "Expediente Nº 2026-0010",
      heading: "Reciba una evaluación jurídica preliminar en 24 horas",
      description:
        "Cuéntenos los detalles de su notificación o proceso sancionatorio. Analizamos su expediente y le indicamos la estrategia de defensa disponible.",
    },
  },

  visasColombia: {
    slug: "visas-colombia",
    icon: "id",
    serviceTitle: "Visas Colombianas",
    breadcrumbTitle: "Visas Colombianas",
    seo: {
      title: "Visas Colombianas para Extranjeros — Visitante, Migrante y Residente",
      description:
        "Asesoría jurídica para elegir y tramitar la visa colombiana correcta según su situación: Visitante, Migrante o Residente.",
      keywords: ["visa colombiana", "visa de trabajo Colombia", "visa Colombia extranjeros", "abogado migratorio Colombia"],
    },
    hero: {
      eyebrow: "Visas de Ingreso a Colombia",
      title: "¿Necesita una visa colombiana y quiere evitar errores en el trámite?",
      subtitle:
        "Asesoría jurídica para elegir y tramitar la visa correcta — Visitante, Migrante o Residente — según su situación y propósito de viaje en Colombia.",
      badgeLabel: "Visas Colombianas",
      primaryCta: "Consultar mi visa",
      secondaryCta: "Ver procedimiento",
    },
    problem: {
      title: "Elegir la visa equivocada retrasa su ingreso o permanencia en Colombia",
      paragraphs: [
        "Colombia tiene tres tipos de visa —Visitante, Migrante y Residente— cada una con categorías, requisitos y tiempos de vigencia distintos según el propósito del viaje.",
        "Una solicitud mal fundamentada, o presentada bajo el tipo de visa incorrecto, puede significar negación del trámite o pérdida de tiempo y documentos.",
      ],
    },
    risks: {
      title: "Errores que pueden costarle el trámite",
      items: [
        "Solicitar bajo el tipo de visa que no corresponde a su situación (Visitante, Migrante o Residente).",
        "No acreditar solvencia económica o el seguro de salud exigido.",
        "Formulario e-FUT o documentos de soporte incompletos.",
        "No cumplir el tiempo acumulado en visa Migrante exigido para acceder a la Residente (2 a 5 años según categoría).",
      ],
    },
    procedure: {
      title: "¿Cómo tramitamos su visa?",
      steps: [
        { step: "Diagnóstico", description: "Determinación del tipo y categoría de visa según su situación." },
        { step: "Documentación", description: "Formulario e-FUT, pasaporte vigente y soportes según la categoría." },
        { step: "Solvencia y seguro", description: "Acreditación de solvencia económica y seguro de salud con cobertura en Colombia." },
        { step: "Radicación", description: "Presentación de la solicitud ante la autoridad competente." },
        { step: "Seguimiento", description: "Monitoreo de la solicitud hasta su resolución." },
      ],
    },
    faq: {
      title: "Preguntas sobre visas",
      items: [
        {
          question: "¿Cuánto dura la vigencia de una visa de Residente?",
          answer:
            "La visa de Residente tiene vigencia indefinida, aunque la etiqueta debe renovarse cada 5 años y expira si el titular se ausenta de Colombia por más de 2 años continuos.",
          citation: "Resolución 5477/2022.",
        },
        {
          question: "¿Qué necesito para acumular tiempo hacia la visa de Residente?",
          answer:
            "Debe acumular entre 2 y 5 años en visa Migrante, según la categoría, para poder aplicar a la visa de Residente.",
          citation: "Art. 90 Resolución 5477/2022.",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Viene a Colombia por turismo, negocios o tratamiento médico de corta duración (Visa Visitante).",
        "Quiere establecerse en Colombia como trabajador, inversionista o pensionado (Visa Migrante).",
        "Es cónyuge de un nacional colombiano.",
        "Ya acumuló tiempo en visa Migrante y quiere aplicar a la Residente.",
        "Su empresa necesita contratar personal extranjero y requiere asesoría sobre el tipo de visa correcto.",
      ],
    },
    cta: {
      eyebrow: "Expediente Nº 2026-0011",
      heading: "Reciba una evaluación jurídica preliminar en 24 horas",
      description: "Cuéntenos su situación migratoria y el propósito de su viaje. Le indicamos qué visa aplica y qué documentos necesita.",
    },
  },

  sire: {
    slug: "sire",
    icon: "building",
    serviceTitle: "Cumplimiento Empresarial SIRE",
    breadcrumbTitle: "Cumplimiento Empresarial SIRE",
    seo: {
      title: "Cumplimiento SIRE para Empresas — Reporte de Extranjeros",
      description:
        "Acompañamiento jurídico para hoteles, hospitales, empresas y agencias marítimas en el cumplimiento del reporte de extranjeros vía SIRE.",
      keywords: ["SIRE Migración Colombia", "reporte de extranjeros Colombia", "cumplimiento migratorio empresarial"],
    },
    hero: {
      eyebrow: "Cumplimiento Empresarial",
      title: "¿Su empresa reporta extranjeros correctamente ante Migración Colombia?",
      subtitle:
        "Acompañamiento jurídico para hoteles, hospitales, empresas y agencias marítimas en el cumplimiento del reporte de extranjeros a través del SIRE.",
      badgeLabel: "Cumplimiento Empresarial SIRE",
      primaryCta: "Solicitar diagnóstico de cumplimiento",
      secondaryCta: "Ver procedimiento",
    },
    problem: {
      title: "El incumplimiento del reporte SIRE expone a la empresa a un proceso sancionatorio",
      paragraphs: [
        "Hoteles, hospitales, empresas y agencias marítimas que vinculen o alojen extranjeros están obligados a reportarlos a través del SIRE, con información mínima y plazos definidos.",
        "En el caso marítimo y fluvial, el reporte de emigración debe hacerse con un máximo de 3 horas de antelación a la salida — un plazo estrecho que exige procesos internos claros.",
      ],
    },
    risks: {
      title: "Riesgos de un reporte SIRE deficiente",
      items: [
        "Omisión o reporte tardío de extranjeros alojados o vinculados.",
        "Información incompleta: nombres, nacionalidad, fecha/lugar de nacimiento o número de documento.",
        "Incumplimiento del plazo de 3 horas antes de zarpe en el sector marítimo y fluvial.",
        "Exposición de la empresa a un proceso administrativo sancionatorio por incumplimiento migratorio.",
      ],
    },
    procedure: {
      title: "¿Cómo acompañamos el cumplimiento SIRE?",
      steps: [
        { step: "Diagnóstico", description: "Revisión de los procesos actuales de reporte de extranjeros de la empresa." },
        { step: "Ajuste de procedimientos", description: "Definición de protocolos internos para cumplir la información y los plazos exigidos." },
        { step: "Capacitación", description: "Orientación al personal responsable del reporte SIRE." },
        { step: "Acompañamiento continuo", description: "Seguimiento jurídico ante requerimientos o alertas de la autoridad migratoria." },
      ],
    },
    faq: {
      title: "Preguntas sobre SIRE",
      items: [
        faqByQuestion("¿Qué debe reportar mi empresa a través del SIRE y en qué plazo?"),
        {
          question: "¿Quiénes están obligados a reportar por el SIRE?",
          answer:
            "Hoteles, hospitales, agencias marítimas, empresas de transporte y cualquier persona jurídica que vincule o preste servicios a extranjeros.",
          citation: "Fuentes operativas de reporte migratorio empresarial (SIRE).",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Su hotel u hospedaje aloja huéspedes extranjeros.",
        "Su empresa contrata o vincula personal extranjero.",
        "Opera una agencia marítima o fluvial con pasajeros extranjeros.",
        "Ha recibido un requerimiento de Migración Colombia por reporte SIRE.",
      ],
    },
    cta: {
      eyebrow: "Expediente Nº 2026-0012",
      heading: "Reciba una evaluación jurídica preliminar en 24 horas",
      description: "Cuéntenos cómo opera su empresa. Le indicamos qué debe reportar y en qué plazo.",
    },
  },

  salidaMenores: {
    slug: "salida-menores",
    icon: "family",
    serviceTitle: "Salida de Menores",
    breadcrumbTitle: "Salida de Menores",
    seo: {
      title: "Permiso de Salida de Menores de Colombia — Asesoría Jurídica",
      description:
        "Asesoría jurídica para tramitar el permiso de salida de menores de Colombia y garantizar el acceso a salud y educación de NNA.",
      keywords: ["permiso de salida menor Colombia", "salida de menores del país", "derecho migratorio menores Colombia"],
    },
    hero: {
      eyebrow: "Menores y Unificación Familiar",
      title: "¿Necesita el permiso de salida del país para su hijo o hija?",
      subtitle:
        "Asesoría jurídica para tramitar el permiso de salida de menores de Colombia, y para garantizar el acceso a salud y educación de niños, niñas y adolescentes migrantes.",
      badgeLabel: "Salida de Menores",
      primaryCta: "Solicitar asesoría",
      secondaryCta: "Ver procedimiento",
    },
    problem: {
      title: "Un permiso de salida mal elaborado puede impedir el viaje del menor",
      paragraphs: [
        "Para que un menor salga de Colombia se requiere un documento de permiso de salida suscrito por los padres o representantes legales, autenticado ante notario o autoridad consular.",
        "El documento debe indicar destino, propósito, fecha de salida y de regreso, y debe acompañarse del registro civil de nacimiento del menor — omisiones aquí son la causa más común de que un menor no pueda viajar.",
      ],
    },
    risks: {
      title: "Errores frecuentes en el permiso de salida",
      items: [
        "Permiso no autenticado ante notario o autoridad consular.",
        "Falta el registro civil de nacimiento del menor.",
        "El documento no indica destino, propósito o fechas de salida y regreso.",
        "Para menores venezolanos con PPT: no se aportan los mismos requisitos exigidos a los colombianos.",
      ],
    },
    procedure: {
      title: "¿Cómo tramitamos el permiso de salida?",
      steps: [
        { step: "Verificación de documentos", description: "Registro civil de nacimiento y documentos de identidad del menor y de los padres." },
        { step: "Redacción del permiso", description: "Elaboración del documento con destino, propósito y fechas de viaje." },
        { step: "Autenticación", description: "Firma ante notario o autoridad consular." },
        { step: "Verificación previa al viaje", description: "Revisión de que el permiso cumple los requisitos exigidos en el puesto de control migratorio." },
      ],
    },
    faq: {
      title: "Preguntas sobre salida de menores",
      items: [
        faqByQuestion("¿Qué necesito para que mi hijo salga del país?"),
        {
          question: "¿Los niños migrantes tienen derecho a salud y educación en Colombia?",
          answer:
            "Sí. Todos los NNA, independientemente de su nacionalidad o estatus migratorio, tienen derecho a atención médica de urgencia y a acceder al sistema educativo mediante matrícula en el SIMAT.",
          citation: "Derechos de NNA — salud y educación.",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Va a viajar con su hijo o hija fuera de Colombia y uno de los padres no viaja.",
        "Su hijo o hija es venezolano/a con PPT y necesita salir del país.",
        "Necesita matricular a su hijo o hija en el sistema educativo colombiano.",
        "Su hijo o hija requiere atención médica y tiene estatus migratorio irregular.",
      ],
    },
    cta: {
      eyebrow: "Expediente Nº 2026-0013",
      heading: "Reciba una evaluación jurídica preliminar en 24 horas",
      description: "Cuéntenos los detalles del viaje o la situación de su hijo o hija. Le indicamos qué documentos necesita.",
    },
  },

  proteccionInternacional: {
    slug: "proteccion-internacional",
    icon: "globe",
    serviceTitle: "Protección Internacional",
    breadcrumbTitle: "Protección Internacional",
    seo: {
      title: "Solicitud de Refugio en Colombia — Protección Internacional",
      description:
        "Orientación jurídica para solicitar el reconocimiento de la condición de refugiado ante la Cancillería y su compatibilidad con el PPT.",
      keywords: ["refugio Colombia", "asilo Colombia", "protección internacional migrantes Colombia"],
    },
    hero: {
      eyebrow: "Refugio y Asilo",
      title: "¿Necesita protección internacional en Colombia?",
      subtitle:
        "Orientación jurídica para solicitar el reconocimiento de la condición de refugiado ante la Cancillería, y para entender su compatibilidad con el PPT.",
      badgeLabel: "Protección Internacional",
      primaryCta: "Solicitar orientación",
      secondaryCta: "Ver procedimiento",
    },
    problem: {
      title: "La solicitud de refugio tiene un término y reglas de compatibilidad con el PPT",
      paragraphs: [
        "La solicitud de reconocimiento de la condición de refugiado debe presentarse ante la Cancillería (CONARE) dentro de los 6 meses siguientes al ingreso a Colombia.",
        "El PPT es en principio incompatible con el estatus de refugiado, aunque la Sentencia SU-543 de 2023 de la Corte Constitucional ordenó inaplicar esa incompatibilidad para personas en extrema vulnerabilidad.",
      ],
    },
    risks: {
      title: "Riesgos que pueden afectar su solicitud",
      items: [
        "Presentar la solicitud de refugio fuera del término de 6 meses desde el ingreso.",
        "Perder el PPT por no conocer las reglas de compatibilidad con la solicitud de refugio.",
        "No aportar un relato suficientemente detallado de los hechos que motivan el temor de persecución.",
      ],
    },
    procedure: {
      title: "¿Cómo se tramita la solicitud de refugio?",
      steps: [
        { step: "Solicitud", description: "Presentación ante la Cancillería (CONARE) dentro de los 6 meses de ingreso." },
        { step: "Salvoconducto SC-2", description: "Expedición gratuita para regularizar la permanencia mientras se resuelve la solicitud." },
        { step: "Entrevista", description: "Relato detallado de los hechos que motivan el temor de persecución." },
        { step: "Resolución", description: "Decisión de la autoridad sobre el reconocimiento de la condición de refugiado." },
      ],
    },
    faq: {
      title: "Preguntas sobre refugio y protección internacional",
      items: [
        faqByQuestion("Si ya solicité refugio, ¿puedo tramitar también el PPT?"),
        {
          question: "¿El salvoconducto SC-2 tiene costo?",
          answer:
            "No. El salvoconducto SC-2 se expide de forma gratuita al solicitante de refugio para regularizar su permanencia mientras se resuelve la solicitud.",
          citation: "Procedimiento de refugio ante la Cancillería (CONARE).",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Huye de su país por persecución, conflicto o violencia y busca protección en Colombia.",
        "Ya solicitó refugio y no sabe si puede tramitar también el PPT.",
        "Está en situación de extrema vulnerabilidad y quiere mantener su solicitud de refugio activa.",
        "Necesita el salvoconducto SC-2 mientras se resuelve su solicitud.",
      ],
    },
    cta: {
      eyebrow: "Expediente Nº 2026-0014",
      heading: "Reciba una evaluación jurídica preliminar en 24 horas",
      description: "Cuéntenos su situación. Le explicamos sus opciones de protección internacional y su compatibilidad con el PPT.",
    },
  },

  regularizacionVenezolanos: {
    slug: "regularizacion-venezolanos",
    icon: "verify",
    serviceTitle: "Regularización Venezolana",
    breadcrumbTitle: "Regularización Venezolana",
    seo: {
      title: "Regularización Migratoria para Venezolanos en Colombia — ETPV y PPT",
      description:
        "Asesoría jurídica para el tránsito de PEP a PPT, el registro en el RUMV y el cumplimiento de los requisitos del Estatuto Temporal de Protección.",
      keywords: ["ETPV Colombia", "PPT Colombia requisitos", "regularización venezolanos Colombia", "PEP a PPT"],
    },
    hero: {
      eyebrow: "Regularización Venezolana",
      title: "¿Necesita regularizar su estatus migratorio venezolano en Colombia?",
      subtitle:
        "Asesoría jurídica para el tránsito de PEP a PPT, el registro en el RUMV y el cumplimiento de los requisitos del Estatuto Temporal de Protección (ETPV).",
      badgeLabel: "Regularización Venezolana",
      primaryCta: "Solicitar asesoría",
      secondaryCta: "Ver procedimiento",
    },
    problem: {
      title: "El PEP está siendo eliminado y no todos han transitado al PPT",
      paragraphs: [
        "Desde el Decreto 216 de 2021 no se expiden más PEP. Quien no complete el tránsito al PPT queda sujeto a sanciones administrativas y pierde su estatus migratorio regular al vencer su permiso anterior.",
        "El PPT tiene una vigencia de 10 años (hasta el 30 de mayo de 2031), pero exige registro previo en el RUMV y el cumplimiento de requisitos específicos, incluida la prueba de permanencia en Colombia antes del 31 de enero de 2021 para quienes estaban en situación irregular.",
      ],
    },
    risks: {
      title: "Lo que puede perder si no regulariza a tiempo",
      items: [
        "Perder el estatus migratorio regular por no transitar del PEP al PPT a tiempo.",
        "No cumplir el registro en el RUMV (prerregistro, encuesta socioeconómica y biometría).",
        "No contar con prueba sumaria idónea de permanencia en Colombia antes del 31 de enero de 2021 (la TMF sola no es suficiente).",
        "Tener antecedentes penales o medidas de expulsión/deportación vigentes que impidan el PPT.",
      ],
    },
    procedure: {
      title: "¿Cómo se tramita la regularización?",
      steps: [
        { step: "Prerregistro virtual", description: "Carga de datos biográficos y documentos en el portal de Migración Colombia." },
        { step: "Encuesta socioeconómica", description: "Diligenciamiento de información sobre salud, educación e integración." },
        { step: "Registro biométrico", description: "Fotografía, huellas dactilares y firma ante la autoridad migratoria." },
        { step: "Verificación de requisitos", description: "Revisión de antecedentes, medidas migratorias y prueba de permanencia." },
        { step: "Expedición del PPT", description: "Emisión del documento con vigencia hasta el 30 de mayo de 2031." },
      ],
    },
    faq: {
      title: "Preguntas sobre PEP, PPT y RUMV",
      items: [
        faqByQuestion("¿Mi PEP sigue vigente o debo tramitar el PPT?"),
        faqByQuestion("¿Cuáles son los requisitos para el PPT?"),
        faqByQuestion("¿Puedo trabajar o abrir una cuenta bancaria con mi PPT?"),
        faqByQuestion("¿El PPT me da derechos políticos o la nacionalidad colombiana?"),
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Es ciudadano venezolano y su PEP está por vencer o ya no es válido.",
        "Aún no se ha registrado en el RUMV.",
        "Estuvo en situación irregular en Colombia antes del 31 de enero de 2021.",
        "Ya tiene el PPT pero tiene dudas sobre lo que le permite hacer.",
      ],
    },
    cta: {
      eyebrow: "Expediente Nº 2026-0015",
      heading: "Reciba una evaluación jurídica preliminar en 24 horas",
      description: "Cuéntenos su situación migratoria actual. Le indicamos los pasos para regularizarse.",
    },
  },
} satisfies Record<string, LandingContent>;
