window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);

document.addEventListener("DOMContentLoaded", () => {
  const imageWrappers = document.querySelectorAll(".image-wrapper");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  imageWrappers.forEach((wrapper) => observer.observe(wrapper));
});

function showSidebar() {
  const sidebar = document.querySelector(".side-nav");
  sidebar.style.display = "flex";
}
function hideSidebar() {
  const sidebar = document.querySelector(".side-nav");
  sidebar.style.display = "none";
}
function setScrollVar() {
  const htmlElement = document.documentElement;
  const percentOfScreenHeightScrolled =
    (htmlElement.scrollTop /
      (htmlElement.scrollHeight - htmlElement.clientHeight)) *
    100;
  console.log(percentOfScreenHeightScrolled + "%");
  htmlElement.style.setProperty(
    "--scroll",
    percentOfScreenHeightScrolled + "%"
  );
}

setScrollVar();
