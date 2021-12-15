import AnimaNumber from "./anima-number.js";

export default function fetchAnimais(url, target) {
    const numerosGrid = document.querySelector(target);

    function createAnimal(animal) {
        const div = document.createElement("div");
        div.classList.add("numero-animal");
        div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    function animaAnimaisNumeros() {
        const animaNumber = new AnimaNumber(
            "[data-numero]",
            ".numeros",
            "ativo"
        );
        animaNumber.init();
    }

    async function criarAnimais() {
        try {
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();

            animaisJSON.forEach((animal) => preencherAnimais(animal));
            animaAnimaisNumeros();
        } catch (error) {
            console.log(Error(error));
        }
    }

    return criarAnimais();
}
