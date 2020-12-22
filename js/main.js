"use strict"

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


const getDataAnime = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  getDataAnime.forEach(function (elemento) {
    if (windowTop > elemento.offsetTop) {
      elemento.classList.add("animate");
    } else {
      elemento.classList.remove("animate");
    }
  });
};
animeScroll();


if (getDataAnime.length) {
  window.addEventListener("scroll", debounce(() => {
    animeScroll();
  }, 100))
}



//--------------------------------------------------

const iconGit = document
  .querySelector(".icon-tabler-brand-github")
  .addEventListener("click", () => {
    window.open("https://github.com/Tklao");
  });

const iconInstagram = document
  .querySelector(".icon-tabler-brand-instagram")
  .addEventListener("click", () => {
    window.open("https://www.instagram.com/538melo/");
  });

const iconEmail = document
  .querySelector(".icon-tabler-mail")
  .addEventListener("click", () => {
    window.open(
      "https://mail.google.com/mail/u/0/?hl=pt-BR#inbox?compose=CllgCHrfTDtFzsRSBkhpXHKSxnrGwqRbXWqTnlfXwdNFFHpfjTwbBTfWxRGnTMNvnFkwQblPjVV"
    );
  });