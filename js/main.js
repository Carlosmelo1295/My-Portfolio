setTimeout(() => {
  const fistArticle = document.querySelector(".sobre");
  fistArticle.style.transform = "translate(0px)";
  fistArticle.style.opacity = "1";
  fistArticle.style.transition = "1s";
}, 1000);

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
