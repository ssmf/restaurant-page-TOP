import homePage from './modules/home.js';
import menupage from './modules/menu.js';
import connectPage from './modules/connect.js';
import tabs from './modules/tabs.js';

tabs();


function selectId(idValue) {return document.getElementById(idValue)};

const mainWrapper = selectId('main');

const contentWrapper = document.createElement('div');
contentWrapper.classList.add('content');
contentWrapper.setAttribute('id', 'content');
mainWrapper.appendChild(contentWrapper);

const homeBtn = selectId('home');
const menuBtn = selectId('menu');
const connectBtn = selectId('connect');

function changeContent() {
    contentWrapper.replaceChildren();
};

homePage();

homeBtn.onclick = () => {changeContent(), homePage()};
menuBtn.onclick = () => {changeContent(), menupage()};
connectBtn.onclick = () => {changeContent(), connectPage()};