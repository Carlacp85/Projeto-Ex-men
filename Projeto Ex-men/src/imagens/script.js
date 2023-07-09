const characterList = document. querySelectorAll(".character");

characterList.forEach((character) => {
	character.addEventListener ("mouseenter" , () => {
		if(window.innerWidth <450) {
			window.scrollTo({top: 0, behavior: "smooth"});
		}
		
		removerSelecaoDoPersonagem();

		character.classList.add("selected");

		alterarImagemPersonagemSelecionado(character);

		alterarNomePersonagemSelecionado(character);

		const characterDescription = document.getElementById("description");

		characterDescription.innerText = character.getAttribute("data-description");

	

	})
})

function alterarNomePersonagemSelecionado(character) {
	const nameCharacter = document.getElementById("name-character");

	nameCharacter.innerText = character.getAttribute("data-name");
}

function alterarImagemPersonagemSelecionado(character) {
	const imageCharacterBig = document.querySelector(".character-big");

	const idCharacter = character.attributes.id.value;
	imageCharacterBig.src = `./src/imagens/card-${idCharacter}.png`;
}

function removerSelecaoDoPersonagem() {
	const characterSelected = document.querySelector(".selected");
	characterSelected.classList.remove("selected");
}
