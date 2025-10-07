console.log("Hello, World!");

const myName = "Bren";
console.log(myName);

const h1 = document.querySelector(".heading-primary");
console.log(h1);

// h1.addEventListener("click", function () {
// h1.textContent = myName;
// h1.style.backgroundColor = "red";
// h1.style.padding = "5rem";
// });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Set current year
const yearEl = document.querySelector(".year");
const currentDate = new Date().getFullYear();
yearEl.textContent = currentDate;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// No needed, since safari 2025 already include the smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(link);

    // Scroll back to top
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if ((href !== "#") & href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      console.log(sectionEl);

      sectionEl.scrollIntoView({
        behavior: "smooth",
      });

      // Close mobile navigation
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    }
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null, // viewport
    threshold: 0, // trigger when 0% visible
    rootMargin: "-80px", // offset = nav height
  }
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
