import { Header } from './Header/index.js';
import { Intro } from './Intro/index.js';
import { Pose } from './Pose/index.js';

const introInfo = {
  heading: 'Vítejte mezi Jogíny',
  text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
};

const headerInfo = {
  title: 'Jogíni',
  links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
};

const poseInfo = {
  src: 'img/yoga-pose.jpg',
};

const appElm = document.querySelector('#app');
appElm.innerHTML = Intro(introInfo) + Header(headerInfo) + Pose(poseInfo);
