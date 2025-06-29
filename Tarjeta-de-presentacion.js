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
      url: "https://facebook.com/tuusuario",
      className: "facebook",
    },
    {
      name: "Twitter",
      iconClass: "fab fa-twitter",
      url: "https://twitter.com/tuusuario",
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
      url: "https://instagram.com/tuusuario",
      className: "instagram",
    },
    {
      name: "Email",
      iconClass: "fas fa-envelope",
      url: "mailto:tu@email.com",
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
