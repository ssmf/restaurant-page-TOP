export default function connectPage() {
    const contentWrapper = document.getElementById('content');

    const mainSection = document.createElement('div');
    mainSection.classList.add('mainSection');
    contentWrapper.appendChild(mainSection);

    const connectSection = document.createElement('div');
    connectSection.classList.add('connectSection');
    mainSection.appendChild(connectSection);

    const mainbox = document.createElement('div');
    mainbox.classList.add('mainBox');
    mainSection.appendChild(mainbox);

    const connectHeading = document.createElement('h2');
    connectHeading.classList.add('mainHeading');
    connectHeading.textContent = 'Connect with us!';
    mainbox.appendChild(connectHeading);

    function connectInfo(type, value, link) {
        const newConnect = document.createElement('p');
        newConnect.classList.add('connectContent');
        newConnect.textContent = `${type}: `;
        
        const newLink = document.createElement('a');
        newConnect.appendChild(newLink);
        newLink.textContent = value;
        newLink.href = link;
        newLink.setAttribute('target', '_blank');
        mainbox.appendChild(newConnect);
    };

    connectInfo('Instagram', 'blossm1', 'https://www.instagram.com/blossm1/')
    connectInfo('Soundcloud', '1w0', 'https://soundcloud.com/1w0');
    
};