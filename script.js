// Função para mostrar/esconder a section de acordo com imagem animal clicada
function initTabNav() {
  const activeClass = "ativo";
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add(activeClass);

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass);
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", function () {
      activeTab(index);
    });
  });
}

initTabNav();

//Função para accordion da FAQ

function initAccordion() {
  const activeClass = "ativo";
  const accordionList = document.querySelectorAll(".js-accordion dt");
  accordionList[0].classList.add(activeClass);
  accordionList[0].nextElementSibling.classList.add(activeClass);

  function activateAccordion(event) {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activateAccordion);
  });
}

initAccordion();

//Função para scroll suave

function initSmoothScrool() {
  const menuItems = document.querySelectorAll('.js-menu a[href^="#"]');
  function scrollOnClick(event) {
    event.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
    console.log(href);
  }

  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", scrollOnClick);
  });
}

initSmoothScrool();

//Função para quando slide left quando scrollar para certas sessões;

function initSlideSections() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.8;

  console.log(windowMetade);

  function scrollSections(element) {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade;
      if (isSectionVisible < 0) {
        console.log("teste");
        section.classList.add("ativo");
      }
    });
  }
  scrollSections();
  window.addEventListener("scroll", scrollSections);
}

initSlideSections();
