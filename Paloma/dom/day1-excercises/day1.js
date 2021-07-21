const city = {
    name: "Paris",
    description: "This is the capitol of France and is the biggest city of France located along the Seine River, in the north-central part of the country. Paris is one of the world’s most important and attractive cities, famed for its gastronomy, haute couture, painting, literature, and intellectual community.",
    country: "France",
    urlpicture: "resources/paris-2017-home.jfif",
    coordinateLongitude: "48.8566",
    coordinateLatitude: "2.3522",
};

function createCityCard(city) {


    const descriptionParagraph = document.createElement('p');
    const cityName = document.createElement('h4');
    const coordinateslat = document.createElement('h3');
    const coordinateslong = document.createElement('h3');
    const cityImage = document.createElement('img');
    const countryName = document.createElement('h4');
    const divHeader = document.createElement('div');
    const divInfo = document.createElement('div');
    const article = document.createElement('article');
    const main = document.createElement('main');
    const body = document.createElement('body');

    descriptionParagraph.textContent = city.description;
    cityName.textContent = city.name;
    coordinateslat.textContent = city.coordinateLatitude;
    coordinateslong.textContent = city.coordinateslong;
    cityImage.src = city.urlpicture;
    countryName.textContent = city.country;


    divHeader.appendChild(cityImage);
    divHeader.appendChild(cityName);
    divInfo.appendChild(coordinateslat);
    divInfo.appendChild(coordinateslong);
    divInfo.appendChild(countryName);
    divInfo.appendChild(descriptionParagraph);

    main.classList.add('container');
    article.classList.add('card');
    divHeader.classList.add('header');
    cityImage.classList.add('citypicture');
    cityName.classList.add('citytitle');
    divInfo.classList.add('cardbody');

    document.body.appendChild(divHeader);
    document.body.appendChild(divInfo);
    document.article.appendChild(body);
    document.main.appendChild(article);

    return cardMainContainer;
}

function printCities (cities){
    cities.forEach (city => document.body.appendChild(createCityCard)(city)));
}