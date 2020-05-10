const questionsList = [
	{
		text: 'Pensez-vous avoir eu de la fièvre ces derniers jours (frissons, sueurs) ?',
		choices: `<label class="questions__form__label" id="oui"  >
					<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
					<span class="questions__form__label__span"  ></span>
				</label>
				<label class="questions__form__label for="nom" >
					<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
					<span class="questions__form__label__span"  ></span>
				</label>`,
		number: 1
	},
	{
		text: 'quelle est votre température ?',
		choices: `<label class="questions__form__num" for="numerique"></label>
        <input class="questions__form__num" type="number" id="numerique"> Degrée`,
		number: 2
	},
	{
		text: 'Avez-vous une toux ou une augmentation de votre toux habituelle ces derniers jours ?',
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 3
	},
	{
		text: 'Avez-vous des douleurs musculaires ou des courbatures inhabituelles ces derniers jours ? ',
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 4
	},
	{
		text: 'Avez-vous un mal de gorge apparu ces derniers jours ? ',
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 5
	},
	{
		text: 'Avez-vous de la diarrhée ces dernières 24 heures (au moins 3 selles molles) ?',
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 6
	},
	{
		text: 'Avez-vous une fatigue inhabituelle ces derniers jours ?',
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 7
	},
	{
		text: 'Cette fatigue vous oblige-t-elle à vous reposer plus de la moitié de la journée ?',
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 8
	},
	{
		text: 'Avez-vous des difficultés importantes pour vous alimenter ou boire depuis plus de 24h ? ',
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 9
	},
	{
		text:
			'Avez-vous vu apparaître une gêne respiratoire ou une augmentation de votre gêne respiratoire habituelle ? ',
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 10
	},
	{
		text: 'Comment vous sentez-vous ? ',
		choices: `<label class="questions__form__label" id="fatigue"   >
		<input class="questions__form__label__input for="fatigue" type="radio" value="Oui" name="choice"> Fatigué
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="bien"  >
		<input class="questions__form__label__input id="bien"  type="radio" value="Nom" name="choice"> Bien
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label" id="trop-fatigue"   >
		<input class="questions__form__label__input for="trop-fatigue" type="radio" value="Oui" name="choice"> Trop fatigué
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label" id="moyen" >
		<input class="questions__form__label__input for="moyen"  type="radio" value="Oui" name="choice"> Moyen
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 11
	},
	{
		text: `Quel est votre âge ? 
        Ceci, afin de calculer un facteur de risque spécifique.`,
		choices: `<label class="questions__form__num" for="numerique"></label>
        <input class="questions__form__num" type="number" id="numerique" name="choice"> Ans`,
		number: 12
	},
	{
		text: `Quel est votre taille ? 
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label class="questions__form__num" for="numerique"></label>
        <input class="questions__form__num" type="number" id="numerique" name="choice"> Cm`,
		number: 13
	},
	{
		text: `Quel est votre poids ?
        Afin de calculer l’indice de masse corporelle qui est un facteur influençant le risque de complications de l’infection.`,
		choices: `<label class="questions__form__num" for="numerique"></label>
        <input class="questions__form__num" type="number" id="numerique" name="choice"> Kg`,
		number: 14
	},
	{
		text: `Avez-vous de l’hypertension artérielle ? Ou avez-vous une maladie cardiaque ou vasculaire ? Ou prenez-vous un traitement à visée cardiologique ?`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label" id="sspas"   >
		<input class="questions__form__label__input for="sspas" type="radio" value="Oui" name="choice"> Ne sait pas
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 15
	},
	{
		text: `Êtes-vous diabétique ?`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 16
	},
	{
		text: `Avez-vous ou avez-vous eu un cancer ?`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 17
	},
	{
		text: `Avez-vous une maladie respiratoire ? Ou êtes-vous suivi par un pneumologue ?
        Ou êtes-vous suivi par un pneumologue ?`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 18
	},
	{
		text: `Avez-vous une insuffisance rénale chronique dialysée ?`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 19
	},
	{
		text: `Avez-vous une maladie chronique du foie ?`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 20
	},
	{
		text: `Êtes-vous enceinte ?`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label" id="oui" id="sspas" >
		<input class="questions__form__label__input for="sspas"  type="radio" value="Oui" name="choice"> Non applicable
		<span class="questions__form__label__span"  ></span>
	</label>`,

		number: 21
	},
	{
		text: `Avez-vous une maladie connue pour diminuer vos défenses immunitaires ?`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label" id="oui" id="sspas"  >
		<input class="questions__form__label__input for="sspas" type="radio" value="Oui" name="choice"> Ne sait pas
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 22
	},
	{
		text: `Prenez-vous un traitement immunosuppresseur ?
        C’est un traitement qui diminue vos défenses contre les infections.
        Voici quelques exemples : corticoïdes, méthotrexate, ciclosporine, tacrolimus, azathioprine, cyclophosphamide (liste non exhaustive).`,
		choices: `<label class="questions__form__label" id="oui"  >
		<input class="questions__form__label__input for="oui" type="radio" value="Oui" name="choice"> Oui
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label for="nom" >
		<input class="questions__form__label__input id="nom" type="radio" value="Nom" name="choice"> Nom
		<span class="questions__form__label__span"  ></span>
	</label>
	<label class="questions__form__label" id="oui" id="sspas"  >
		<input class="questions__form__label__input for="sspas" type="radio" value="Oui" name="choice"> Ne sait pas
		<span class="questions__form__label__span"  ></span>
	</label>`,
		number: 23
	}
];

const launch = document.querySelector('.launch');
const launchBtn = document.querySelector('.launch__button');
const preambule = document.querySelector('.preambule');
const progress = document.querySelector('.progress');
const questions = document.querySelector('.questions');
const previous = document.querySelector('.buttons__previous');
const next = document.querySelector('.buttons__next');
const questionText = document.querySelector('.questions__text');
const form = document.querySelector('.questions__form');
const answer = document.getElementsByName('choice');
const circles = document.querySelectorAll('.circle');
const reprendre = document.querySelector('.resultat__reprendre');
const resultat = document.querySelector('.resultat');

console.log(circles);

circles[0].style.display = 'block';

let counter = 0;
let values = [];

// launching the test

launchBtn.addEventListener('click', () => {
	launch.classList.add('invisible');
	preambule.classList.add('invisible');
	questions.classList.add('visible');
	progress.classList.add('flex');
	counter = 1;
	renderQuestions(counter);
	addProgress(counter);
	circles[0].style.display = 'none';
	circles[1].style.display = 'block';
});

reprendre.addEventListener('click', () => {
	values = [];
	circles[2].style.display = 'none';
	circles[1].style.display = 'block';
	resultat.style.display = 'none';
	next.textContent = 'Question suivante';

	questions.classList.add('visible');
	progress.classList.add('flex');
	counter = 1;
	renderQuestions(counter);
	addProgress(counter);
});

//returning to the previous question and deleting the last value

previous.addEventListener('click', () => {
	if (counter <= 1) {
		previous.classList.remove('visible');
	}

	if (counter < 23) {
		next.textContent = 'Question suivante';
	}

	if (counter === 3 && values[0] === 'non') {
		values.pop();
		counter -= 1;
		previous.classList.remove('visible');
	}
	if (counter === 9 && values[6] === 'non') {
		values.pop();
		counter -= 1;
	}

	counter -= 1;

	values.pop();

	console.log(values);

	renderQuestions(counter);
	addProgress(counter);
});

//going to next question and adding a value

next.addEventListener('click', () => {
	const detail = document.querySelector('#numerique');

	if (form.children[1].id === 'numerique') {
		if (detail.value === '') {
			alert('please enter valid infos');
			return;
		} else if (counter === 2 && (detail.value < 34 || detail.value > 42)) {
			alert('la temperature doit etre comprise entre 34 et 42');
			return;
		} else if (counter === 12 && detail.value > 110) {
			alert("l'age doit etre inferieure a 110");
			return;
		} else if (counter === 13 && (detail.value < 80 || detail.value > 250)) {
			alert('la taille doit etre comprise entre 80 et 250');
			return;
		} else if (counter === 14 && (detail.value < 20 || detail.value > 250)) {
			alert('le poids doit etre compris entre 20 et 250');
			return;
		} else {
			values.push(detail.value);
			console.log(detail.value);
			counter += 1;
		}
	} else {
		for (i = 0; i < answer.length; i++) {
			if (answer[i].checked) {
				if (counter === 1 && answer[i].value === 'non') {
					values.push(answer[i].value);
					values.push(37);
					counter += 2;
				} else if (counter === 7 && answer[i].value === 'non') {
					values.push(answer[i].value);
					values.push('non');
					counter += 2;
				} else {
					values.push(answer[i].value);
					counter += 1;
				}
			}
		}
	}

	console.log(counter);
	console.log(values);

	if (counter === 23) {
		next.textContent = 'Enregistrer et continuer';
	}
	if (counter > 1) {
		previous.classList.add('visible');
	}

	renderQuestions(counter);
	addProgress(counter);

	getResult(values, counter);
});

//rendering questions and inputs in the UI from their objects

function renderQuestions(step) {
	if (step < 24) {
		let currentQuestion = questionsList.find((ques) => {
			return ques.number == step;
		});

		questionText.textContent = currentQuestion.text;
		form.innerHTML = currentQuestion.choices;
	}
}

function addProgress(valeur) {
	progress.firstElementChild.firstElementChild.style.width = `${100 / 23 * valeur}%`;
	progress.lastElementChild.textContent = `${valeur}/23`;
}

//function that gets the result of the test

function getResult(list, counter) {
	let pro = list.slice(11);
	let symp = list.slice(0, 5);

	//symptomes positive

	let fievre = list[0] === 'oui';
	let toux = list[2] === 'oui';
	let malGorge = list[4] === 'oui';
	let courbatures = list[3] === 'oui';
	let diarrhee = list[5] === 'oui';

	//symptomes négatives

	let noFievre = list[0] === 'non';
	let noToux = list[2] === 'non';
	let noMalGorge = list[4] === 'non';
	let noCourbatures = list[3] === 'non';
	let noDiarrhee = list[5] === 'non';

	//pas de symptomes

	let noSypms = !symp.includes('oui');

	//facteurs pronostiques

	let facPro = pro.includes('oui');
	let noFacPro = !pro.includes('oui');

	//gravité mineures positives

	let hauteFievre = list[1] > 39;
	let fatigue = list[7] === 'oui';
	let malaise = list[10] === 'fatigué' || list[10] === 'trop-fatigué';

	//gravité mineures négatives

	let noHauteFievre = list[1] < 39;
	let noFatigue = list[7] === 'non';
	let noMalaise = list[10] === 'bien' || list[10] === 'moyen';

	// gravité majeures positives

	let basseFievre = list[1] < 35.4;
	let gene = list[9] === 'oui';
	let diffAlim = list[8] === 'oui';

	// gravité majeures négatives

	let noBasseFievre = list[1] > 35.4;
	let noGene = list[9] === 'non';
	let noDiffAlim = list[8] === 'non';

	// paramétres

	let age = list[11];

	if (counter === 13 && age < 15) {
		circles[1].style.display = 'none';
		circles[2].style.display = 'block';
		questions.classList.remove('visible');
		progress.classList.remove('flex');
		resultat.style.display = 'block';

		resultat.children[1].lastElementChild.textContent =
			'Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15';
	}

	if (counter === 24) {
		circles[1].style.display = 'none';
		circles[2].style.display = 'block';
		questions.classList.remove('visible');
		progress.classList.remove('flex');
		resultat.style.display = 'block';

		if (fievre || (toux && malGorge) || (toux && courbatures)) {
			if (basseFievre || gene || diffAlim) {
				resultat.children[1].lastElementChild.textContent = 'veuillez appeler le numéro 141';
			} else if (
				(facPro &&
					noGene &&
					noDiffAlim &&
					noBasseFievre &&
					((hauteFievre && fatigue && malaise) ||
						(hauteFievre && fatigue) ||
						(fatigue && malaise) ||
						(hauteFievre && malaise))) ||
				(facPro && noGene && noDiffAlim && noBasseFievre && hauteFievre && noFatigue && noMalaise) ||
				(facPro && noGene && noDiffAlim && noBasseFievre && fatigue && noHauteFievre && noMalaise) ||
				(facPro && noGene && noDiffAlim && noBasseFievre && malaise && noHauteFievre && noFatigue)
			) {
				resultat.children[1].lastElementChild.textContent = 'veuillez appeler le numéro 141';
			} else if (facPro && noHauteFievre && noFatigue && noMalaise && noGene && noDiffAlim && noBasseFievre) {
				resultat.children[1].firstElementChild.textContent =
					'téléconsultation ou médecin généraliste ou visite à domicile ';
				resultat.children[1].lastElementChild.textContent =
					'appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent';
			} else if (
				(age > 50 &&
					age <= 69 &&
					(noFacPro && noHauteFievre && noFatigue && noMalaise && noGene && noDiffAlim && noBasseFievre)) ||
				(noFacPro && noBasseFievre && noGene && noDiffAlim && (hauteFievre || fatigue || malaise))
			) {
				resultat.children[1].firstElementChild.textContent =
					'téléconsultation ou médecin généraliste ou visite à domicile ';
				resultat.children[1].lastElementChild.textContent =
					'appelez le 141 si une gêne respiratoire ou des difficultés importantes pour s’alimenter ou boire pendant plus de 24h apparaissent';
			} else if (
				age < 50 &&
				noFacPro &&
				noHauteFievre &&
				noFatigue &&
				noMalaise &&
				noGene &&
				noDiffAlim &&
				noBasseFievre
			) {
				resultat.children[1].lastElementChild.textContent =
					'nous vous conseillons de rester à votre domicile et de contacter votre médecin en cas d’apparition de nouveaux symptômes. Vous pourrez aussi utiliser à nouveau l’application pour réévaluer vos symptômes';
			} else {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
			}
		} else if (
			(fievre && noToux && noDiarrhee) ||
			(noFievre && toux && noMalGorge && noCourbatures) ||
			(noFievre && noToux && malGorge) ||
			(noToux && courbatures) ||
			(noFievre && diarrhee)
		) {
			if (noHauteFievre && noFatigue && noMalaise && noGene && noDiffAlim && noBasseFievre) {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. Consultez votre médecin au moindre doute.';
			} else if (
				(noFacPro && noGene && noDiffAlim && noBasseFievre && hauteFievre && noFatigue && noMalaise) ||
				(noFacPro && noGene && noDiffAlim && noBasseFievre && fatigue && noHauteFievre && noMalaise) ||
				(noFacPro && noGene && noDiffAlim && noBasseFievre && malaise && noHauteFievre && noFatigue) ||
				(facPro && noGene && noDiffAlim && noBasseFievre && noMalaise && noHauteFievre && noFatigue)
			) {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. Un avis médical est recommandé. Au moindre doute, appelez le 141. ';
			} else {
				resultat.children[1].lastElementChild.textContent =
					'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
			}
		} else {
			resultat.children[1].lastElementChild.textContent =
				'Votre situation ne relève probablement pas du Covid-19. N’hésitez pas à contacter votre médecin en cas de doute. Vous pouvez refaire le test en cas de nouveau symptôme pour réévaluer la   situation.   Pour   toute information concernant   le   Covid-19 allez vers la page d’accueil.';
		}
	}
}
