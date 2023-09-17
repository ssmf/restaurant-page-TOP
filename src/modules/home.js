export default function renderHomePage() {
    const contentWrapper = document.getElementById('content');

    const mainSection = document.createElement('div');
    mainSection.classList.add('mainSection');
    contentWrapper.appendChild(mainSection);

    const mainbox = document.createElement('div');
    mainbox.classList.add('mainBox');
    mainSection.appendChild(mainbox);

    const p1 = mainbox.appendChild(document.createElement('p'));
    p1.textContent = 'Best apples in your country';
    const p2 = mainbox.appendChild(document.createElement('p'));
    p2.textContent = 'Made with love since 1983';


    const homePageImg = document.createElement('img');
    homePageImg.src = './assets/home-main-img.jpg';
    mainbox.appendChild(homePageImg);

    const p3 = mainbox.appendChild(document.createElement('p'));
    p3.textContent = 'Order online or in person!';
};