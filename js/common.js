let cardElements = [];
let elements = document.querySelectorAll('[id="card"]');
elements.forEach(function(element) {
    cardElements.push(element);
});

const informationDiv = document.getElementById('information');

cardElements.forEach(function(card, index) {
    card.addEventListener('click', function() {
        if (index===0){
            informationDiv.innerHTML = '';
            const spanElement = document.createElement('span');
            spanElement.classList.add('accent2');
            spanElement.textContent = `СВ Окна`;
            const spanElement1 = document.createElement('p');
            spanElement1.classList.add('mt-3');
            spanElement1.textContent = `Деревянные окна и двери со стеклопакетом , стандартные и изготовление по Вашим размерам.
            Являясь официальным дилером компании СВ Окна уже много лет мы предлагаем наилучший продукт на рынке.`;
            const spanElement2 = document.createElement('p');
            const text = `
            Сроки изготовления окон без покраски - 5 рабочих дней.
            Сроки изготовления окон с покраской - 10 рабочих дней.
            Гибкая система скидок !`;
            const newText = text.split('.').join('.<br>');
            spanElement2.innerHTML = newText;
            const spanElement3 = document.createElement('p');
            spanElement3.textContent = `Мы работаем на рынке более 15 лет и определили для себя достойных производителей с лучшими ценами и качеством для Вас !`;
            informationDiv.appendChild(spanElement);
            informationDiv.appendChild(spanElement1);
            informationDiv.appendChild(spanElement2);
            informationDiv.appendChild(spanElement3);
        } else if (index===1){
            informationDiv.innerHTML = '';
            const spanElement = document.createElement('span');
            spanElement.classList.add('accent2');
            spanElement.textContent = `Окна спаренные двойного остекления (ОС)`;
            const spanElement2 = document.createElement('p');
            spanElement2.classList.add('mt-3');
            spanElement2.textContent = `Все стандартные размеры .
            (остекленные + силиконовый уплотнитель)`;
            const spanElement3 = document.createElement('p');
            spanElement3.textContent = `Размеры :
            30х30 , 30х40 , 40х40 , 40х50 , 40х60 , 50х60 , 50х50 , 60х60 , 60х90/90х60,
            90х90 , 60х120/120х60 , 100х100 , 120х100/100х120 , 120х90/90х120,
            120х120 , 120х130.5/130.5х120 , 120х150/150х120 , 120х180 , 130.5х60,
            130.5х90 , 130.5х100 , 130.5х130.5 , 130.5х180 , 130.5х210 , 150х60,
            150х90/90х150 , 150х130.5/130.5х150 , 150х150 , 150х180 , 150х210`;
            informationDiv.appendChild(spanElement);
            informationDiv.appendChild(spanElement2);
            informationDiv.appendChild(spanElement3);
        } else {
            informationDiv.innerHTML = '';
            const spanElement = document.createElement('span');
            spanElement.classList.add('accent2');
            spanElement.textContent = `Входные металлические двери`;
            const spanElement2 = document.createElement('p');
            spanElement2.classList.add('mt-3');
            spanElement2.textContent = `Размеры :
            2050х860 , 2050х960`;
            const spanElement3 = document.createElement('p');
            spanElement3.textContent = `Не стандарт :
            1900х860 ,1900х960`;
            informationDiv.appendChild(spanElement);
            informationDiv.appendChild(spanElement2);
            informationDiv.appendChild(spanElement3);
        }
    });
});

function includeHeaderandFooter() {
    fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });
    fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
}
window.onload = includeHeaderandFooter;

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById('header');
    const links = header.querySelectorAll('.nav-link');
    console.log(links);
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            links.forEach(function(link) {
                link.classList.remove('link-secondary');
                link.classList.add('link-body-emphasis');
            });

            link.classList.remove('link-body-emphasis');
            link.classList.add('link-secondary');
        });
    });
    
    initMap();

    async function initMap() {
        await ymaps3.ready;
        const {YMap, YMapDefaultSchemeLayer} = ymaps3;
        const map = new YMap(
            document.getElementById('map'),
            {
                location: {
                    center: [37.411393, 54.955394],
                    zoom:20
                }
            }
        );
        map.addChild(new YMapDefaultSchemeLayer());

        // const markerElement = document.createElement('div');
        // markerElement.className = 'marker-class';
        // markerElement.innerText = "I'm marker!";

        // const marker = new YMapMarker(
        // {
        //     source: 'markerSource',
        //     coordinates: [37.411393, 54.955394],
        //     draggable: true,
        //     mapFollowsOnDrag: true
        // },
        // markerElement
        // );

        // map.addChild(marker);
        
    }
});