// Detectar idioma del dispositivo
const lang = navigator.language.startsWith("es") ? "es" : "en";

// Textos bilingües
const textos = {
  es: {
    descripcion: "Diseños de bordado, Fotos de sublimación y Alfombras custom."
  },
  en: {
    descripcion: "Embroidery Designs, Sublimation Images, and Custom Rugs."
  }
};

// Insertar texto según idioma
document.getElementById("descripcion").textContent = textos[lang].descripcion;
