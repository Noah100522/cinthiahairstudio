const contact = {
  // Troque pelo número real no formato 55DDDNUMERO quando a cliente confirmar.
  whatsappNumber: "5541997543502",
  instagramUrl: "https://www.instagram.com/cinthiahairstudio/",
  message:
    "Oi, Cinthia! Vim pelo site e gostaria de agendar um horario para cuidar do meu cabelo.",
};

const fallbackUrl = contact.instagramUrl;
const whatsappUrl = contact.whatsappNumber
  ? `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(contact.message)}`
  : fallbackUrl;

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noreferrer";
});
