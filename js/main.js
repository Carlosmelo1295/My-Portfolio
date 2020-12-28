"use strict";

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
	const windowTop = window.pageYOffset + (window.innerHeight * 3) / 3;
	getDataAnime.forEach(function (elemento) {
		if (windowTop > elemento.offsetTop) {
			elemento.classList.add("animate");
		} else {
			elemento.classList.remove("animate");
		}
	});
};
setTimeout(animeScroll, 1000);

if (getDataAnime.length) {
	window.addEventListener(
		"scroll",
		debounce(() => {
			animeScroll();
		}, 100)
	);
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

const repoTomato = document
	.querySelector("#git-tomatao")
	.addEventListener("click", () => {
		window.open("https://github.com/Tklao/Tomatao", "", "width=500,height=300");
	});

const repoLista = document
	.querySelector("#git-tarefas")
	.addEventListener("click", () => {
		window.open(
			"https://github.com/Tklao/To-do-list",
			"",
			"width=500,height=300"
		);
	});

const repoOrkut = document
	.querySelector("#git-orkut")
	.addEventListener("click", () => {
		window.open(
			"  https://github.com/Tklao/Orkut-initial-page",
			"",
			"width=500,height=300"
		);
	});

function percentageSkill(fistSkill, secondSkill, thirdSkill, fourthSkill) {

	fistSkill = (percentage, width) => {
		const skill1 = document.querySelector(".skil1-dentro");
		const newElement = document.createElement("i");
		skill1.insertAdjacentElement("beforeend", newElement);
		let interval1 = setInterval(() => {
			if (width > 95) {
				clearInterval(interval1);
			} else {
				width++;
				skill1.style.width = `${width}%`;
				newElement.textContent = `${percentage++}%⚡️`;
			}
		}, 30);
	};
	fistSkill(0, 0)

	//👽

	secondSkill = (percentage, width) => {
		const skill2 = document.querySelector(".skil2-dentro");
		const newElement = document.createElement("i");
		skill2.insertAdjacentElement("beforeend", newElement);

		let interval2 = setInterval(() => {
			if (width > 97) {
				clearInterval(interval2);
			} else {
				width++;
				skill2.style.width = `${width}%`;
				newElement.textContent = `${percentage++}%⚡️`;
			}
		}, 30);
	};
	secondSkill(0, 0)

	//👽

	thirdSkill = (percentage, width) => {
		const skill3 = document.querySelector(".skil3-dentro");
		const newElement = document.createElement("i");
		skill3.insertAdjacentElement("beforeend", newElement);

		let interval3 = setInterval(() => {
			if (width > 40) {
				clearInterval(interval3);
			} else {
				width++;
				skill3.style.width = `${width}%`;
				newElement.textContent = `${percentage++}%⚡️`;
			}
		}, 40);
	};
	thirdSkill(0, 0)

	//👽

	fourthSkill = (percentage, width) => {
		const skill4 = document.querySelector(".skil4-dentro");
		const newElement = document.createElement("i");
		skill4.insertAdjacentElement("beforeend", newElement);

		let interval4 = setInterval(() => {
			if (width > 92) {
				clearInterval(interval4);
			} else {
				width++;
				skill4.style.width = `${width}%`;
				newElement.textContent = `${percentage++}%⚡️`;
			}
		}, 40);
	};
	fourthSkill(0, 0)

}
percentageSkill()

let slide = document.querySelector(".slideInside")

function deslizarDireita() {
	if (slide.style.float == "left") {
		slide.style.float = "right"
		document.body.style.backgroundColor = '#1B2431'
		document.body.style.color = "#F2ECFF"		

	} else {
		slide.style.float = "left"
		document.body.style.backgroundColor = '#F2ECFF'
		document.body.style.color = "#0C0C0C"
	}


}



slide.addEventListener("click", deslizarDireita)