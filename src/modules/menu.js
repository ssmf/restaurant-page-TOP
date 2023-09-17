export default function renderMenuPage() {
    const contentWrapper = document.getElementById('content');

    const mainSection = document.createElement('div');
    mainSection.classList.add('mainSection');
    contentWrapper.appendChild(mainSection);

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menuGrid');
    mainSection.appendChild(menuGrid);

    function createcard() {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menuCard');
        menuGrid.appendChild(menuCard);
    
        const cardImg = document.createElement('img');
        cardImg.src = '../assets/home-main-img.jpg';
        menuCard.appendChild(cardImg);
    
        const cardHeading = document.createElement('h2');
        cardHeading.textContent = 'Blossmd Apple';
        menuCard.appendChild(cardHeading);
    
        const cardParagraph = document.createElement('p');
        cardParagraph.textContent = 'This is a default description of blossmd apple! ssmf.';
        menuCard.appendChild(cardParagraph);
    };

    createcard();
    createcard();
    createcard();
    createcard();
    createcard();
    createcard();

};