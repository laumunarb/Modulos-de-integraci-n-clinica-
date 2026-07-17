// Caso clínico Semana 1 — Carlos, 84 años
// Basado en: Caso clínico Semana 1.docx

const CASE_STEPS = [
  {
    label: "Motivo de consulta",
    text: "Carlos es un adulto mayor de 84 años. Vive en un área rural del municipio de Tenjo, Cundinamarca, con su esposa. Asiste con una de sus hijas al centro de salud. Consulta por <b>disnea</b> y <b>edema de miembros inferiores</b>.",
    question: "Antes de seguir, revisas sus antecedentes: Diabetes Mellitus tipo 2, Infarto Agudo de Miocardio hace 5 años, y tabaquismo (no activo). ¿Cuál de estos antecedentes aumenta más el riesgo de que Carlos esté cursando con insuficiencia cardíaca?",
    options: [
      { text: "La edad", correct: false },
      { text: "El infarto agudo de miocardio hace 5 años", correct: true },
      { text: "Vivir en zona rural", correct: false },
      { text: "Tener una hija que lo acompaña", correct: false },
    ],
    feedbackCorrect: "Correcto. Un infarto previo deja tejido cardíaco que ya no se contrae igual, y ese daño estructural es el principal impulsor hacia la insuficiencia cardíaca. La edad y el contexto rural son relevantes para el manejo, pero no explican el mecanismo.",
    feedbackWrong: "No es el antecedente con mayor peso fisiopatológico aquí. Piensa en cuál de estos antecedentes deja una lesión estructural directa en el músculo cardíaco.",
  },
  {
    label: "Explorando la disnea",
    text: "Le preguntas a Carlos desde cuándo tiene la dificultad para respirar. Te cuenta que ha empeorado en las últimas semanas, y que se agita incluso al caminar dentro de la casa.",
    question: "Si el infarto de Carlos comprometió su ventrículo izquierdo, ¿qué mecanismo explica mejor su disnea?",
    options: [
      { text: "Aumento de eritrocitos", correct: false },
      { text: "Congestión pulmonar secundaria a la falla del ventrículo izquierdo", correct: true },
      { text: "Disminución del volumen sanguíneo total", correct: false },
      { text: "Broncoespasmo", correct: false },
    ],
    feedbackCorrect: "Correcto. Si el ventrículo izquierdo no bombea con suficiente fuerza, la sangre se represa hacia atrás, hacia la circulación pulmonar. Esa congestión pulmonar es lo que Carlos percibe como falta de aire.",
    feedbackWrong: "Vuelve a la infografía de disnea: la clave está en qué pasa \"hacia atrás\" del ventrículo izquierdo cuando este no bombea bien.",
  },
  {
    label: "El edema de miembros inferiores",
    text: "Al examinar a Carlos, encuentras edema con fóvea en ambos miembros inferiores, hasta la mitad de la pierna.",
    question: "¿Qué explica mejor la aparición de este edema en el contexto de Carlos?",
    options: [
      { text: "Congestión venosa sistémica secundaria a la falla cardíaca", correct: true },
      { text: "Una reacción alérgica reciente", correct: false },
      { text: "Deshidratación severa", correct: false },
      { text: "Un efecto normal del envejecimiento", correct: false },
    ],
    feedbackCorrect: "Correcto. Cuando el corazón no bombea con eficacia, la presión se acumula \"aguas arriba\" en el sistema venoso. Eso aumenta la presión hidrostática capilar y empuja líquido hacia el intersticio, generando edema, tal como viste en la infografía de fuerzas de Starling.",
    feedbackWrong: "Repasa la infografía de fuerzas de Starling y edema: piensa en qué pasa con la presión en las venas cuando el corazón no logra vaciar la sangre que le llega.",
  },
  {
    label: "El peso de los antecedentes",
    text: "Revisas con más detalle la historia de Carlos: fue fumador activo durante 30 años, aproximadamente 1 paquete diario, y tiene Diabetes Mellitus tipo 2 diagnosticada hace varios años.",
    question: "¿Por qué la diabetes de Carlos también contribuye al riesgo de insuficiencia cardíaca?",
    options: [
      { text: "Porque produce nuevos cardiomiocitos", correct: false },
      { text: "Porque favorece daño vascular y aterosclerosis", correct: true },
      { text: "Porque disminuye el colesterol", correct: false },
      { text: "Porque genera hipertrofia pulmonar", correct: false },
    ],
    feedbackCorrect: "Correcto. La diabetes acelera el daño en los vasos sanguíneos y la aterosclerosis, lo que aumenta el riesgo de nuevos eventos isquémicos y de deterioro progresivo de la función cardíaca.",
    feedbackWrong: "Piensa en qué le hace la diabetes a los vasos sanguíneos con el paso de los años, no en el corazón directamente.",
  },
  {
    label: "Integrando el caso",
    text: "Con toda la información reunida: antecedente de IAM, diabetes, tabaquismo, disnea progresiva y edema de miembros inferiores, ya tienes una hipótesis clínica clara para Carlos.",
    question: "¿Cuál de las siguientes secuencias resume mejor la evolución fisiopatológica que probablemente vivió Carlos?",
    options: [
      { text: "Diabetes → neumonía", correct: false },
      { text: "IAM → fibrosis del miocardio → disminución de la contractilidad → insuficiencia cardíaca", correct: true },
      { text: "Tabaquismo → bronquitis crónica", correct: false },
      { text: "Hipertensión → anemia", correct: false },
    ],
    feedbackCorrect: "Exacto. Este es el hilo conductor de todo el caso: el infarto dejó tejido fibroso que no se contrae, eso redujo la fuerza de bombeo del corazón, y esa caída en la contractilidad es lo que hoy se manifiesta como disnea y edema. Estás listo para el juego de repaso.",
    feedbackWrong: "Repasa el orden de los eventos: todo comienza con el infarto de hace 5 años. ¿Qué le queda al tejido cardíaco después de un infarto, y qué efecto tiene eso sobre su capacidad de contraerse?",
  },
];
