document.addEventListener("DOMContentLoaded", () => {
  const socialGrid = document.querySelector(".social-grid");
  const socialLinks = [
    {
      name: "GitHub",
      iconClass: "fab fa-github",
      url: "https://github.com/rolando-2001",
      className: "github",
    },
    {
      name: "Facebook",
      iconClass: "fab fa-facebook-f",
      url: "https://www.facebook.com/profile.php?id=61577719362437",
      className: "facebook",
    },
    {
      name: "Twitter",
      iconClass: "fab fa-twitter",
      url: "https://x.com/CasapaicoH80096",
      className: "twitter",
    },
    {
      name: "LinkedIn",
      iconClass: "fab fa-linkedin-in",
      url: "https://www.linkedin.com/in/rolando-casapaico/",
      className: "linkedin",
    },
    {
      name: "Instagram",
      iconClass: "fab fa-instagram",
      url: "https://www.instagram.com/rcasapaico2001/",
      className: "instagram",
    },
    {
      name: "Email",
      iconClass: "fas fa-envelope",
      url: "mailto:rolando.casapaico@tecsup.edu.pe",
      className: "email",
    },
  ];

  socialGrid.innerHTML = socialLinks
    .map(
      (link) => `
      <a href="${link.url}" class="social-link ${link.className}" target="_blank">
        <i class="${link.iconClass}"></i>
        <span>${link.name}</span>
      </a>`
    )
    .join("");
});
