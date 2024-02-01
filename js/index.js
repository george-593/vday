const img = document.querySelector("#image");

const yesBtn = document.querySelector("#btn-yes");
const noBtn = document.querySelector("#btn-no");

const textLn1 = document.querySelector("#text-ln1");
const textLn2 = document.querySelector("#text-ln2");

const yesBtnClick = () => {
	img.src = "assets/yes.jpg";

	textLn1.innerHTML = "See you on the 14th!";
	textLn2.innerHTML = "I love you ❤";
};

const noBtnClick = () => {
	img.src = "assets/no.gif";

	textLn1.innerHTML = "The no button was only for show";
	textLn2.innerHTML = "";

	// Move no button to random position
	noBtn.style.position = "absolute";
	noBtn.style.left = Math.random() * 100 + "%";
	noBtn.style.top = Math.random() * 100 + "%";
};

yesBtn.addEventListener("click", yesBtnClick);
noBtn.addEventListener("click", noBtnClick);
