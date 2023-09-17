export default function tabs() {
    const main = document.getElementById('main');

    const tabWrapper = document.createElement('div');
    tabWrapper.classList.add('tabWrapper');
    main.appendChild(tabWrapper);

    const createbtn = function(content) {
        let currentBtn = document.createElement('button');
        tabWrapper.appendChild(currentBtn);
        currentBtn.classList.add('tabBtn');
        currentBtn.setAttribute('id', content.toLowerCase());
        currentBtn.textContent = content;
    };

    createbtn('Home');
    createbtn('Menu');
    createbtn('Connect');
};