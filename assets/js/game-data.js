// Kahoot: ¿Qué le ocurre al corazón de Carlos?
// Basado en: Kahoot_Carlos_Falla_Cardiaca_30_Preguntas.docx

const GAME_TITLE = "¿Qué le ocurre al corazón de Carlos?";

const GAME_QUESTIONS = [
  { q: "Carlos consulta por disnea y edema. ¿Qué antecedente aumenta más el riesgo de insuficiencia cardíaca?", options: ["Edad", "Infarto agudo de miocardio hace 5 años", "Vivir en zona rural", "Tener una hija"], correct: 1 },
  { q: "Si el infarto comprometió el ventrículo izquierdo, ¿qué función se altera primero?", options: ["Recibir sangre venosa", "Bombear sangre a la circulación sistémica", "Llevar sangre a pulmones", "Generar eritrocitos"], correct: 1 },
  { q: "¿Qué cavidad presenta mayor alteración funcional?", options: ["Aurícula derecha", "Ventrículo derecho", "Aurícula izquierda", "Ventrículo izquierdo"], correct: 3 },
  { q: "La disnea se explica mejor por:", options: ["Aumento de eritrocitos", "Congestión pulmonar secundaria a falla del VI", "Disminución del volumen sanguíneo", "Broncoespasmo"], correct: 1 },
  { q: "¿Qué síntoma sugiere congestión venosa sistémica?", options: ["Tos", "Dolor torácico", "Edema de miembros inferiores", "Palpitaciones"], correct: 2 },
  { q: "¿Qué válvula comunica la aurícula izquierda con el ventrículo izquierdo?", options: ["Tricúspide", "Pulmonar", "Mitral", "Aórtica"], correct: 2 },
  { q: "La sangre oxigenada sale del corazón por:", options: ["Tronco pulmonar", "Aorta", "Vena cava", "Vena pulmonar"], correct: 1 },
  { q: "La sangre oxigenada llega a la aurícula izquierda por:", options: ["Vena cava superior", "Tronco pulmonar", "Venas pulmonares", "Aorta"], correct: 2 },
  { q: "El infarto agudo de miocardio lesionó principalmente:", options: ["Endocardio", "Miocardio", "Epicardio", "Pericardio"], correct: 1 },
  { q: "¿Qué válvula evita el reflujo de sangre del ventrículo izquierdo a la aurícula izquierda?", options: ["Tricúspide", "Mitral", "Pulmonar", "Aórtica"], correct: 1 },
  { q: "Tras un infarto, el tejido que reemplaza a los cardiomiocitos muertos es:", options: ["Cartílago", "Músculo liso", "Tejido fibroso", "Tejido adiposo"], correct: 2 },
  { q: "La fibrosis disminuye la función cardíaca porque:", options: ["Produce nuevos cardiomiocitos", "Aumenta la contractilidad", "No se contrae", "Produce más vasos sanguíneos"], correct: 2 },
  { q: "¿Cuál es la principal célula contráctil del corazón?", options: ["Fibroblasto", "Cardiomiocito de trabajo", "Neutrófilo", "Célula endotelial"], correct: 1 },
  { q: "¿Qué estructura conduce más rápido el impulso eléctrico?", options: ["Endocardio", "Fibras de Purkinje", "Epicardio", "Miocardio"], correct: 1 },
  { q: "¿Cuál es la túnica del corazón con mayor cantidad de músculo?", options: ["Endocardio", "Miocardio", "Epicardio", "Pericardio"], correct: 1 },
  { q: "La disminución de la contractilidad produce:", options: ["Mayor volumen sistólico", "Menor fracción de eyección", "Mayor gasto cardíaco", "Hiperventilación"], correct: 1 },
  { q: "¿Qué fase del ciclo cardíaco expulsa la sangre del ventrículo?", options: ["Llenado rápido", "Diástasis", "Eyección ventricular", "Relajación isovolumétrica"], correct: 2 },
  { q: "Si el ventrículo no expulsa suficiente sangre en cada latido:", options: ["Disminuye el volumen residual", "Aumenta el volumen residual", "Desaparece la precarga", "Se detiene el nodo SA"], correct: 1 },
  { q: "¿Cuál es el marcapasos normal del corazón?", options: ["Nodo AV", "Haz de His", "Nodo SA", "Fibras de Purkinje"], correct: 2 },
  { q: "El retraso de conducción en el nodo AV permite:", options: ["Aumentar la presión arterial", "Completar el llenado ventricular", "Cerrar la válvula aórtica", "Disminuir el gasto cardíaco"], correct: 1 },
  { q: "El edema de Carlos se explica principalmente por:", options: ["Hipoglucemia", "Activación del sistema RAAS", "Hiperventilación", "Anemia"], correct: 1 },
  { q: "Ante la caída del gasto cardíaco, la primera compensación del cuerpo es:", options: ["Disminución de la actividad simpática", "Activación del sistema simpático", "Hipotermia", "Vasodilatación generalizada"], correct: 1 },
  { q: "La diabetes de Carlos favorece la insuficiencia cardíaca porque:", options: ["Produce nuevos cardiomiocitos", "Genera daño vascular y aterosclerosis", "Disminuye el colesterol", "Produce hipertrofia pulmonar"], correct: 1 },
  { q: "¿Qué antecedente de Carlos favoreció directamente el infarto agudo de miocardio?", options: ["La edad", "El tabaquismo", "Vivir en Tenjo", "El sexo"], correct: 1 },
  { q: "Las primeras células inflamatorias en llegar tras un infarto son:", options: ["Linfocitos B", "Neutrófilos", "Eosinófilos", "Mastocitos"], correct: 1 },
  { q: "¿Qué célula participa activamente en la reparación del tejido tras el infarto?", options: ["Eritrocito", "Macrófago", "Plaqueta", "Basófilo"], correct: 1 },
  { q: "Una inflamación persistente tras el infarto favorece:", options: ["Regeneración completa del tejido", "Remodelado cardíaco patológico", "Formación de nuevas válvulas", "Hipotensión sostenida"], correct: 1 },
  { q: "¿Qué secuencia resume mejor la evolución del caso de Carlos?", options: ["Diabetes → neumonía", "IAM → fibrosis → disminución de contractilidad → insuficiencia cardíaca", "Tabaquismo → bronquitis", "Hipertensión → anemia"], correct: 1 },
  { q: "¿Qué disciplina explica mejor la menor fuerza de contracción del corazón de Carlos?", options: ["Anatomía", "Histología", "Fisiología", "Las tres, integradas"], correct: 3 },
  { q: "Para explicar por completo el caso de Carlos se requiere integrar:", options: ["Solo anatomía", "Anatomía y fisiología", "Anatomía, histología, fisiología e inmunología", "Solo fisiología"], correct: 2 },
];
