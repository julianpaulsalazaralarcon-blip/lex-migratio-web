// Contenido de las landing pages por servicio. Todo se redacta a partir de
// consultas verificadas contra el notebook "Migracion Colombia - Marco Legal
// y Procedimientos" (Decreto 1067/2015 y sus modificaciones, Decreto 216/2021,
// Resolución 971/2021, Resolución 5477/2022, Resolución 2357/2020 y
// 3770/2021, Ley 1437/2011, Ley 1098/2006, Sentencia SU-543/2023, Decreto
// 089/2025, Constitución Política). No se introducen normas ni cifras no
// verificadas contra esas fuentes.

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
        "Cuando Migración Colombia formula cargos mediante auto motivado, se abre un procedimiento administrativo sancionatorio regido por la Ley 1437 de 2011 (CPACA) y el Decreto 1067 de 2015, con plazos estrictos para ejercer su defensa.",
        "Las infracciones que pueden derivar en deportación —ingreso o salida irregular, permanencia tras vencimiento de visa, fraude migratorio, actividades no autorizadas, mora en multas, entre otras— están tipificadas en el Art. 2.2.1.13.1.2 del Decreto 1067/2015 y la Resolución 2357 de 2020. Las que derivan en expulsión —infracciones gravísimas como el incumplimiento de una deportación previa, documentación fraudulenta o condena penal— están tipificadas en el Art. 2.2.1.13.2.1 del mismo decreto.",
        "No actuar dentro del término, o hacerlo sin una estrategia jurídica clara, reduce las opciones de defensa disponibles antes de que la decisión quede en firme y sea ejecutable.",
      ],
    },
    risks: {
      title: "Lo que está en juego",
      items: [
        "Restricción de reingreso de 6 meses a 10 años en caso de deportación (Art. 2.2.1.13.1.3 Decreto 1067/2015, mod. Decreto 1743/2015).",
        "Restricción de reingreso de mínimo 5 años y sin máximo definido en caso de expulsión (Art. 2.2.1.13.2.4 Decreto 1067/2015); si supera los 10 años requiere consulta previa al Director General.",
        "Multas entre 26,31 y 210,50 UVT por infracciones leves, y entre 105,25 y 2.631,30 UVT por infracciones moderadas (Resolución 2357/2020, mod. Res. 3770/2021).",
        "Pérdida del estatus migratorio regular si el proceso no se atiende dentro del término.",
        "Ejecución de la sanción si no se interponen los recursos de reposición o apelación dentro del término legal.",
      ],
    },
    procedure: {
      title: "¿Cómo se defiende un proceso sancionatorio?",
      steps: [
        { step: "Formulación de cargos", description: "Auto motivado que señala los hechos, las normas presuntamente vulneradas y las posibles sanciones." },
        { step: "Notificación", description: "Personal; si no es posible, por aviso fijado 5 días o por medio electrónico aceptado por el investigado." },
        { step: "Descargos", description: "15 días hábiles desde la notificación para presentar defensa y solicitar pruebas." },
        { step: "Período probatorio", description: "Hasta 30 días hábiles para practicar las pruebas solicitadas y aportadas." },
        { step: "Alegatos de conclusión", description: "10 días hábiles para presentar los argumentos finales antes de la decisión." },
        { step: "Decisión", description: "Resolución motivada dentro de los 30 días siguientes al vencimiento de los alegatos." },
        { step: "Recursos", description: "Reposición y/o apelación dentro de 10 días hábiles, con efecto suspensivo salvo en la expulsión discrecional." },
      ],
    },
    faq: {
      title: "Preguntas sobre defensa administrativa",
      items: [
        {
          question: "¿Cuánto tiempo tengo para presentar descargos?",
          answer:
            "15 días hábiles desde la notificación de cargos, término dentro del cual puede presentar descargos y solicitar pruebas.",
          citation: "Ley 1437 de 2011 (CPACA); Guía MVG.12 de Migración Colombia.",
        },
        faqByQuestion("¿Cuál es la diferencia entre deportación y expulsión?"),
        {
          question: "¿Los recursos contra la sanción suspenden su ejecución?",
          answer:
            "Sí. Los recursos de reposición y apelación contra multas o contra la expulsión se conceden en efecto suspensivo, por lo que la sanción no se ejecuta hasta que se resuelvan, salvo en los casos de expulsión discrecional por seguridad nacional u orden público.",
          citation: "Resolución 2357 de 2020, Art. 15.",
        },
        {
          question: "¿Tengo derecho a un intérprete si no hablo español?",
          answer:
            "Sí. Todo extranjero que no domine el castellano tiene derecho a un traductor gratuito durante el proceso, como garantía de su derecho de defensa.",
          citation: "Sentencia SU-543 de 2023.",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Recibió una notificación de cargos por parte de Migración Colombia.",
        "Está en riesgo de deportación por ingreso/salida irregular, permanencia tras vencimiento de visa o fraude migratorio.",
        "Enfrenta un proceso de expulsión por incumplimiento de una deportación previa, condena penal o documentación fraudulenta.",
        "Fue notificado de una sanción económica (multa) migratoria.",
        "Fue sancionado 2 o más veces por la misma entidad en el último año (reincidencia).",
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
      title: "Elegir la visa o categoría equivocada retrasa su ingreso o permanencia en Colombia",
      paragraphs: [
        "La Resolución 5477 de 2022 (Art. 22) define tres tipos de visa —Visitante (V), Migrante (M) y Residente (R)— y dentro de cada tipo existen numerosas categorías (turismo, negocios, estudiante, cónyuge de nacional, trabajador, inversionista, pensionado, entre otras), cada una con requisitos y vigencia propios.",
        "El trámite es 100% digital a través de la plataforma SITAC del Ministerio de Relaciones Exteriores, y la Autoridad de Visas tiene facultad discrecional para pedir documentos adicionales, citar a entrevista o negar la solicitud sin que ello constituya un derecho adquirido del solicitante.",
        "Una solicitud mal fundamentada, con documentos incompletos o presentada bajo la categoría incorrecta, puede significar inadmisión o negación del trámite.",
      ],
    },
    risks: {
      title: "Errores que pueden costarle el trámite",
      items: [
        "Solicitar bajo el tipo o categoría de visa que no corresponde a su situación.",
        "No acreditar solvencia económica (mínimo 10 SMLMV mensuales si es a título personal) o el seguro de salud con cobertura en Colombia.",
        "Formulario e-FUT o documentos de soporte incompletos, ilegibles o sin apostilla/traducción oficial.",
        "Tener antecedentes penales o un proceso administrativo sancionatorio migratorio vigente.",
        "No cumplir el tiempo acumulado exigido en visa Migrante para acceder a la Residente.",
        "No tramitar la Cédula de Extranjería dentro de los 15 días siguientes cuando la visa supera 3 meses de vigencia.",
      ],
    },
    procedure: {
      title: "¿Cómo tramitamos su visa?",
      steps: [
        { step: "Preparación", description: "Determinación del tipo y categoría de visa, y reunión de los requisitos: e-FUT, pasaporte, foto, solvencia y seguro de salud." },
        { step: "Registro en SITAC", description: "Diligenciamiento del formulario electrónico y cargue de los documentos de soporte." },
        { step: "Pago del estudio", description: "Pago por concepto de estudio de la solicitud ante la Autoridad de Visas." },
        { step: "Estudio de la autoridad", description: "La Autoridad de Visas puede solicitar documentos adicionales o citar a entrevista." },
        { step: "Decisión", description: "Notificación de otorgamiento, inadmisión o negación por correo electrónico." },
        { step: "Expedición y cédula", description: "Generación de la e-visa; si su vigencia supera 3 meses, trámite de Cédula de Extranjería dentro de los 15 días siguientes." },
      ],
    },
    faq: {
      title: "Preguntas sobre visas",
      items: [
        {
          question: "¿Cuánto dura la vigencia de una visa de Residente?",
          answer:
            "La visa de Residente tiene vigencia indefinida, aunque la etiqueta o documento debe renovarse mediante traspaso cada 5 años.",
          citation: "Art. 17, Resolución 5477 de 2022.",
        },
        {
          question: "¿Cuánto tiempo debo acumular en visa Migrante para aplicar a la Residente?",
          answer:
            "Depende de la categoría: 3 años si es cónyuge de nacional colombiano; 2 años si es padre/madre de nacional por nacimiento o bajo Mercosur/Andina; y 5 años para el resto de categorías (trabajador, socio, profesional independiente, pensionado, inversionista, refugiado) y para venezolanos bajo el ETPV con PPT vigente. La continuidad se pierde si permanece fuera de Colombia más de 6 meses continuos.",
          citation: "Art. 90, Resolución 5477 de 2022.",
        },
        {
          question: "¿Por qué puede negarse o inadmitirse una visa?",
          answer:
            "Las causales más comunes son inexactitudes o datos falsos en el formulario, documentación defectuosa (ilegible, incompleta o sin apostilla/traducción), antecedentes penales o procesos sancionatorios migratorios vigentes, y la facultad discrecional del Estado por razones de soberanía.",
          citation: "Resolución 5477 de 2022.",
        },
        {
          question: "¿Debo tramitar la cédula de extranjería después de obtener la visa?",
          answer:
            "Sí, si la vigencia de la visa otorgada supera los 3 meses, debe tramitar su Cédula de Extranjería ante Migración Colombia dentro de los 15 días siguientes a su expedición.",
          citation: "Resolución 5477 de 2022.",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Viene a Colombia por turismo, negocios o tratamiento médico de corta duración (Visa Visitante).",
        "Es cónyuge o compañero permanente de un nacional colombiano.",
        "Quiere establecerse en Colombia como trabajador con contrato, inversionista, socio o pensionado (Visa Migrante).",
        "Ya acumuló el tiempo exigido en visa Migrante y quiere aplicar a la Residente.",
        "Su empresa necesita contratar personal extranjero y requiere asesoría sobre el tipo de visa correcto.",
        "Le negaron o inadmitieron una solicitud de visa y quiere entender sus opciones.",
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
        "El Art. 2.2.1.11.5.1 del Decreto 1067 de 2015 y el Art. 2° de la Resolución 2357 de 2020 obligan a reportar en el SIRE a toda persona natural o jurídica que tenga un vínculo con extranjeros: hospedaje, contratación laboral, salud, educación, transporte marítimo/fluvial y terrestre, inmobiliario, ONG y organizaciones religiosas.",
        "Cada sector tiene su propio plazo de reporte: el mismo día en hospedaje, 15 días calendario en vínculo laboral, 30 días calendario en matrícula educativa, y plazos específicos en el sector marítimo y fluvial (6 a 48 horas antes del arribo, y 1 a 3 horas antes del zarpe).",
        "Reportar tarde, de forma incompleta o no reportar constituye una infracción moderada que puede derivar en un proceso administrativo sancionatorio contra la empresa.",
      ],
    },
    risks: {
      title: "Riesgos de un reporte SIRE deficiente",
      items: [
        "Multas entre 105,25 y 2.631,30 UVT por no reportar, reportar tarde o con información incompleta (Resolución 2357/2020, mod. Res. 3770/2021).",
        "Multas sucesivas entre 26,31 y 2.631,30 UVT por negarse a suministrar información en una investigación.",
        "Incumplimiento de los plazos específicos de cada sector: mismo día en hospedaje, 15 días en contratación, 30 días en matrícula educativa, o los plazos marítimos de ingreso (6-48h) y salida (1-3h).",
        "Obligación de asumir los gastos de repatriación del extranjero si, por incumplimiento del reporte, procede su deportación o expulsión.",
      ],
    },
    procedure: {
      title: "¿Cómo acompañamos el cumplimiento SIRE?",
      steps: [
        { step: "Inscripción", description: "Registro de la empresa con RUT, certificado de Cámara de Comercio y documento del representante legal." },
        { step: "Activación", description: "Migración Colombia valida los documentos y envía usuario y contraseña de acceso al SIRE." },
        { step: "Diagnóstico y protocolos", description: "Revisión de los procesos actuales de la empresa y definición de protocolos internos según el sector." },
        { step: "Cargue de información", description: "Reporte individual (formulario en línea) o masivo (archivo Excel/TXT) dentro del plazo de cada sector." },
        { step: "Confirmación y seguimiento", description: "Verificación del número de registro generado y acompañamiento continuo ante requerimientos de la autoridad." },
      ],
    },
    faq: {
      title: "Preguntas sobre SIRE",
      items: [
        faqByQuestion("¿Qué debe reportar mi empresa a través del SIRE y en qué plazo?"),
        {
          question: "¿Quiénes están obligados a reportar por el SIRE?",
          answer:
            "Hoteles y demás establecimientos de hospedaje, empresas que contraten o vinculen extranjeros, clínicas y hospitales que los atiendan en urgencias u hospitalización, instituciones educativas que los matriculen, agencias marítimas/fluviales, empresas de transporte intermunicipal, inmobiliarias, y ONG u organizaciones religiosas que vinculen cooperantes o voluntarios extranjeros.",
          citation: "Art. 2.2.1.11.5.1 Decreto 1067/2015; Art. 2° Resolución 2357/2020.",
        },
        {
          question: "¿Cuánto tiempo tiene mi empresa para reportar una contratación?",
          answer:
            "15 días calendario siguientes al inicio o a la terminación de la labor o contrato con el extranjero.",
          citation: "Art. 6°, Resolución 2357 de 2020.",
        },
        {
          question: "¿Qué pasa si mi empresa no reporta a tiempo?",
          answer:
            "El incumplimiento constituye una infracción moderada sancionable con multa entre 105,25 y 2.631,30 UVT, que puede agravarse según el número de extranjeros no reportados.",
          citation: "Resolución 2357 de 2020, mod. Resolución 3770 de 2021.",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Su hotel, hostal o apartahotel aloja huéspedes extranjeros.",
        "Su empresa contrata, emplea o vincula personal extranjero.",
        "Su clínica u hospital atiende extranjeros en urgencias u hospitalización.",
        "Su institución educativa matricula estudiantes extranjeros.",
        "Opera una agencia marítima/fluvial o una empresa de transporte intermunicipal con pasajeros extranjeros.",
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
        "El Art. 110 de la Ley 1098 de 2006 (mod. Ley 1878/2018) y el Art. 2.2.1.11.6.1 del Decreto 1067 de 2015 exigen que, cuando un menor no viaja con ambos padres, quien no lo acompaña suscriba un permiso de salida autenticado ante notario o autoridad consular, con destino, propósito, fecha de salida y fecha de regreso.",
        "Cuando un padre está ausente, es de paradero desconocido, falleció o se niega a firmar, el permiso debe tramitarse ante el Defensor de Familia (ICBF), el Comisario de Familia o Inspector de Policía (donde no haya Defensor de Familia), o un Juez de Familia si hay desacuerdo entre los padres.",
        "El Oficial de Migración verifica rigurosamente el permiso en el puesto de control: si hay inconsistencias que no se puedan validar o falta información obligatoria, se niega la salida del menor hasta que se subsane.",
      ],
    },
    risks: {
      title: "Errores frecuentes en el permiso de salida",
      items: [
        "Permiso no autenticado ante notario o autoridad consular, o sin apostilla/traducción si se firmó ante autoridad extranjera.",
        "Falta el Registro Civil de Nacimiento del menor para acreditar la filiación.",
        "El documento no indica destino, propósito o fechas de salida y regreso.",
        "No se gestiona el permiso ante el Defensor de Familia, Comisario o Juez de Familia cuando un padre está ausente, es desconocido o hay desacuerdo.",
        "Documentos con indicios de alteración pueden derivar en judicialización de los adultos responsables por falsedad documental.",
      ],
    },
    procedure: {
      title: "¿Cómo tramitamos el permiso de salida?",
      steps: [
        { step: "Verificación de documentos", description: "Registro Civil de Nacimiento y documentos de identidad del menor y de los padres." },
        { step: "Identificación de la situación", description: "Define si viajan ambos padres, uno solo, un tercero, o el menor viaja solo." },
        { step: "Redacción del permiso", description: "Elaboración del documento con destino, propósito y fechas de viaje." },
        { step: "Autenticación", description: "Firma ante notario en Colombia o consulado colombiano en el exterior." },
        { step: "Casos especiales", description: "Gestión ante Defensor de Familia (ICBF), Comisario de Familia o Juez de Familia si un padre está ausente, es desconocido, falleció o hay desacuerdo." },
        { step: "Verificación previa al viaje", description: "Revisión de que el permiso cumple los requisitos exigidos en el puesto de control migratorio." },
      ],
    },
    faq: {
      title: "Preguntas sobre salida de menores",
      items: [
        faqByQuestion("¿Qué necesito para que mi hijo salga del país?"),
        {
          question: "¿Qué pasa si no sé dónde está el otro padre o se niega a dar el permiso?",
          answer:
            "El Defensor de Familia (ICBF) es la autoridad competente para otorgar el permiso cuando se desconoce el paradero del padre o madre, o este no está en condiciones de otorgarlo. En municipios sin Defensor de Familia, actúan el Comisario de Familia o el Inspector de Policía. Si hay desacuerdo entre los padres, se acude a un Juez de Familia mediante proceso verbal sumario.",
          citation: "Ley 1098 de 2006, Art. 110.",
        },
        {
          question: "¿Puede un menor venezolano viajar con el PPT en vez de pasaporte?",
          answer:
            "Sí. Los NNA venezolanos pueden identificarse y salir con su PPT físico o virtual, o con su pasaporte venezolano (aceptado incluso con hasta 10 años de vencido), además del Acta de Nacimiento venezolana para acreditar la filiación.",
          citation: "Ley 1098 de 2006, aplicada a titulares de PPT.",
        },
        {
          question: "¿Los niños migrantes tienen derecho a salud y educación en Colombia?",
          answer:
            "Sí. La atención de urgencias es gratuita e inmediata para todo NNA, sin importar su estatus migratorio, y puede incluir tratamientos de enfermedades catastróficas cuando el médico tratante certifique la necesidad. En educación, ningún NNA puede ser rechazado por falta de visa o permiso: si está en situación irregular, la Secretaría de Educación asigna un Número Establecido por la Secretaría (NES) para formalizar su matrícula en el SIMAT.",
          citation: "Const. Pol. Arts. 49, 50 y 67; Sentencia T-614 de 2016.",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Va a viajar con su hijo o hija y uno de los padres no viaja.",
        "El otro padre está ausente, es de paradero desconocido o se niega a firmar el permiso.",
        "Uno de los padres falleció y necesita tramitar el Registro Civil de Defunción para el proceso.",
        "Su hijo o hija es venezolano/a con PPT y necesita salir del país.",
        "Necesita matricular a su hijo o hija en el sistema educativo colombiano (SIMAT).",
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
      title: "La solicitud de refugio tiene un término corto y reglas propias de compatibilidad con el PPT",
      paragraphs: [
        "Quien ya se encuentra en Colombia debe presentar su solicitud de refugio ante la Cancillería (CONARE) dentro de los 2 meses siguientes al ingreso; fuera de ese término, debe documentar las razones de la extemporaneidad.",
        "El PPT es en principio incompatible con el estatus de refugiado, aunque la Sentencia SU-543 de 2023 de la Corte Constitucional ordenó inaplicar esa incompatibilidad para personas en extrema vulnerabilidad (NNA, mujeres embarazadas, madres cabeza de familia, personas con discapacidad y adultos mayores), que pueden mantener el SC-2 y el PPT de forma simultánea.",
        "El proceso puede tomar varios años en resolverse; mientras tanto, el salvoconducto SC-2 debe renovarse cada 180 días y no habilita para salir del país ni desplazarse a zonas de frontera distintas a la de ingreso.",
      ],
    },
    risks: {
      title: "Riesgos que pueden afectar su solicitud",
      items: [
        "Presentar la solicitud fuera del término de 2 meses desde el ingreso sin documentar la extemporaneidad.",
        "No asistir a la entrevista de elegibilidad sin justificación, lo que cancela el salvoconducto SC-2.",
        "Desplazarse fuera del país o a zonas de frontera distintas a la de ingreso portando el SC-2.",
        "No conocer las reglas de compatibilidad con el PPT y perder el acceso a uno de los dos mecanismos.",
        "Bajo el SC-2 existen barreras para obtener diplomas o convalidar títulos profesionales.",
      ],
    },
    procedure: {
      title: "¿Cómo se tramita la solicitud de refugio?",
      steps: [
        { step: "Presentación", description: "Solicitud ante la Cancillería (CONARE) dentro de los 2 meses del ingreso, o documentando la extemporaneidad." },
        { step: "Remisión en frontera", description: "Si se solicita al ingresar, la autoridad migratoria remite el caso a la Cancillería en máximo 24 horas." },
        { step: "Admisibilidad", description: "La CONARE decide sobre la admisión de la solicitud en hasta 30 días hábiles." },
        { step: "Ratificación", description: "El solicitante ratifica o amplía su solicitud dentro de los 5 días hábiles siguientes a la admisión." },
        { step: "Entrevista de elegibilidad", description: "Relato de los hechos que motivan el temor de persecución, con aporte de las evidencias disponibles." },
        { step: "Resolución y seguimiento", description: "El SC-2 se prorroga cada 180 días mientras el proceso, que puede tomar varios años, continúa en curso." },
      ],
    },
    faq: {
      title: "Preguntas sobre refugio y protección internacional",
      items: [
        faqByQuestion("Si ya solicité refugio, ¿puedo tramitar también el PPT?"),
        {
          question: "¿El salvoconducto SC-2 tiene costo y cuánto dura?",
          answer:
            "Es gratuito para los solicitantes de refugio o asilo. Se otorga por hasta 180 días calendario y es prorrogable por lapsos iguales mientras el proceso esté en curso, previa autorización de la CONARE.",
          citation: "Procedimiento de refugio ante la Cancillería (CONARE).",
        },
        {
          question: "¿Qué pasa si niegan mi solicitud de refugio?",
          answer:
            "Procede el recurso de reposición, el único admitido contra la decisión de fondo, con efecto suspensivo mientras se resuelve. Una vez ejecutoriada la negación, Migración Colombia cancela el SC-2 y expide un SC-1 con vigencia de hasta 30 días para que el extranjero abandone el país o se regularice por otra vía.",
          citation: "Procedimiento de refugio ante la Cancillería (CONARE).",
        },
        {
          question: "¿Puedo trabajar mientras se resuelve mi solicitud de refugio?",
          answer:
            "El SC-2 tradicionalmente no habilitaba para trabajar, pero desde el Decreto 089 de 2025 el salvoconducto de refugio permite ejercer actividades u ocupaciones conforme a la ley laboral y tributaria vigente. También es documento válido para afiliarse al Sistema General de Seguridad Social en Salud.",
          citation: "Decreto 089 de 2025.",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Huye de su país por persecución, conflicto o violencia y busca protección en Colombia.",
        "Está dentro de los 2 meses de haber ingresado a Colombia y quiere solicitar refugio.",
        "Ya solicitó refugio y no sabe si puede tramitar también el PPT.",
        "Está en situación de extrema vulnerabilidad (NNA, embarazo, discapacidad, adulto mayor) y quiere mantener su solicitud de refugio activa.",
        "Le negaron el refugio y necesita evaluar sus recursos o su regularización por otra vía.",
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
      title: "El PEP ya no se expide y el RUMV está cerrado salvo para NNA",
      paragraphs: [
        "Todos los PEP vigentes quedaron prorrogados automáticamente hasta el 28 de febrero de 2023 para facilitar el tránsito al PPT; ya no se expiden PEP nuevos, y quien no transitó a tiempo incurre en permanencia irregular y queda sujeto a proceso administrativo sancionatorio.",
        "El RUMV, paso obligatorio para acceder al PPT, estuvo abierto hasta el 28 de mayo de 2022 (ingresos antes de enero de 2021) y hasta el 24 de noviembre de 2023 (ingresos regulares posteriores); hoy solo permanece abierto hasta el 30 de mayo de 2031 para niños, niñas y adolescentes escolarizados o vinculados a procesos del ICBF.",
        "Quien estuvo en situación irregular debe acreditar con prueba sumaria idónea —contratos de arrendamiento, matrículas escolares, historias clínicas expedidos por entidades identificables— su permanencia en Colombia antes del 31 de enero de 2021; la Tarjeta de Movilidad Fronteriza (TMF) por sí sola no es prueba suficiente, al estar diseñada para tránsito pendular y no para residencia.",
      ],
    },
    risks: {
      title: "Lo que puede perder si no regulariza a tiempo",
      items: [
        "Permanencia irregular y proceso administrativo sancionatorio por no haber transitado del PEP al PPT dentro de los plazos.",
        "Imposibilidad de acceder al PPT si no completó el RUMV dentro de los plazos (cerrado desde 2023, salvo NNA hasta 2031).",
        "No contar con prueba sumaria idónea de permanencia antes del 31 de enero de 2021 (la TMF sola no es suficiente).",
        "Tener antecedentes penales, medidas de expulsión/deportación vigentes, o ser ya refugiado reconocido en otro país.",
        "Ausentarse de Colombia por más de 180 días calendario continuos puede hacer perder el PPT.",
      ],
    },
    procedure: {
      title: "¿Cómo se tramita la regularización?",
      steps: [
        { step: "Prerregistro virtual", description: "Creación de usuario y carga de datos biográficos y documentos de identificación en el portal de Migración Colombia." },
        { step: "Encuesta socioeconómica", description: "Caracterización sobre salud, educación e ingresos, requisito para continuar el trámite." },
        { step: "Registro biométrico", description: "Huellas dactilares, firma y fotografía presenciales en un Punto Visible o Centro Facilitador." },
        { step: "Verificación de requisitos", description: "Revisión de antecedentes, medidas migratorias vigentes y prueba sumaria de permanencia." },
        { step: "Expedición del PPT", description: "Emisión del documento, válido hasta el 30 de mayo de 2031 y no prorrogable." },
      ],
    },
    faq: {
      title: "Preguntas sobre PEP, PPT y RUMV",
      items: [
        faqByQuestion("¿Mi PEP sigue vigente o debo tramitar el PPT?"),
        faqByQuestion("¿Cuáles son los requisitos para el PPT?"),
        faqByQuestion("¿Puedo trabajar o abrir una cuenta bancaria con mi PPT?"),
        faqByQuestion("¿El PPT me da derechos políticos o la nacionalidad colombiana?"),
        {
          question: "¿Hasta cuándo puedo registrarme en el RUMV?",
          answer:
            "El registro general ya cerró (28 de mayo de 2022 para ingresos antes de enero de 2021, y 24 de noviembre de 2023 para ingresos regulares posteriores). Solo permanece abierto hasta el 30 de mayo de 2031 para niños, niñas y adolescentes escolarizados o vinculados a procesos de protección del ICBF.",
          citation: "Resolución 971 de 2021.",
        },
      ],
    },
    applicableCases: {
      title: "Casos en los que aplica",
      items: [
        "Es ciudadano venezolano y su PEP quedó prorrogado pero aún no ha transitado al PPT.",
        "Aún no se ha registrado en el RUMV y su hijo/a es menor de edad escolarizado o está en un proceso del ICBF.",
        "Estuvo en situación irregular en Colombia antes del 31 de enero de 2021 y necesita reunir prueba de permanencia.",
        "Ya tiene el PPT pero tiene dudas sobre lo que le permite hacer.",
        "Necesita que el tiempo acumulado con PEP/PPT cuente para aplicar a la visa de Residente.",
      ],
    },
    cta: {
      eyebrow: "Expediente Nº 2026-0015",
      heading: "Reciba una evaluación jurídica preliminar en 24 horas",
      description: "Cuéntenos su situación migratoria actual. Le indicamos los pasos para regularizarse.",
    },
  },
} satisfies Record<string, LandingContent>;
