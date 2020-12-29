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

const getAllSkills = document.querySelectorAll(".skillDentro");

getAllSkills.forEach(function (elementos) {
	const newElement = document.createElement("i");
	elementos.insertAdjacentElement("beforeend", newElement);
});

const htmlSkill = (width = 0, percentage = 0) => {
	let interval1 = setInterval(() => {
		if (width > 95) {
			clearInterval(interval1);
		} else {
			width++;
			getAllSkills[0].style.width = `${width}%`;
			getAllSkills[0].textContent = `${percentage++}%⚡️`;
		}
	}, 30);
};

const cssSkill = (width = 0, percentage = 0) => {
	let interval2 = setInterval(() => {
		if (width > 97) {
			clearInterval(interval2);
		} else {
			width++;
			getAllSkills[1].style.width = `${width}%`;
			getAllSkills[1].textContent = `${percentage++}%⚡️`;
		}
	}, 30);
};
const jsSkill = (width = 0, percentage = 0) => {
	let interval3 = setInterval(() => {
		if (width > 40) {
			clearInterval(interval3);
		} else {
			width++;
			getAllSkills[2].style.width = `${width}%`;
			getAllSkills[2].textContent = `${percentage++}%⚡️`;
		}
	}, 40);
};

const psSkill = (width = 0, percentage = 0) => {
	let interval4 = setInterval(() => {
		if (width > 99) {
			clearInterval(interval4);
		} else {
			width++;
			getAllSkills[3].style.width = `${width}%`;
			getAllSkills[3].textContent = `${percentage++}%⚡️`;
		}
	}, 30);
};
htmlSkill();
cssSkill();
jsSkill();
psSkill();

let slide = document.querySelector(".slideInside");
let boxSlide = document.querySelector(".slideBox")

function deslizarDireita() {
	if (slide.style.float != "right") {
		slide.style.float = "right";
		document.body.style.backgroundColor = "#1B2431";
		boxSlide.style.backgroundColor = "#F2ECFF";
		document.body.style.color = "#F2ECFF";
		slide.style.backgroundColor = "#1B2431"
	} else {
		slide.style.float = "left";
		document.body.style.backgroundColor = "#F2ECFF";
		boxSlide.style.backgroundColor = "#1B2431";
		document.body.style.color = "#0C0C0C";
		slide.style.backgroundColor = " #8685EF"
	}
}

slide.addEventListener("click", deslizarDireita);