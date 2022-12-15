// create a function that takes in a lambda term and return its normal form

const normalForm = (term) => {
  let result = term;
  let counter = 0;
  while (counter < 100) {
    result = betaReduce(result);
    counter += 1;
  }
  return result;
}

// write beta reduction function

const betaReduce = (term) => {
    if (typeof term === 'string') {
        return term;
    } else if (term[0] === 'lambda') {
        return term;
    } else if (term[0] === 'apply') {
        const left = betaReduce(term[1]);
        const right = betaReduce(term[2]);
        if (left[0] === 'lambda') {
        return betaReduce(substitute(left[1], left[2], right));
        } else {
        return ['apply', left, right];
        }
    }
}

// write substitution function

const substitute = (variable, term, value) => {
    if (typeof term === 'string') {
        if (term === variable) {
            return value;
        } else {
            return term;
        }
    } else if (term[0] === 'lambda') {
        if (term[1] === variable) {
            return term;
        } else {
            return ['lambda', term[1], substitute(variable, term[2], value)];
        }
    } else if (term[0] === 'apply') {
        return ['apply', substitute(variable, term[1], value), substitute(variable, term[2], value)];
    }
}


// write example lambda terms

const term1 = ['apply', ['lambda', 'x', ['apply', 'x', 'x']], ['lambda', 'x', ['apply', 'x', 'x']]];
const term2 = ['apply', ['lambda', 'x', ['apply', 'x', 'x']], ['lambda', 'x', ['apply', 'x', 'y']]];

// console log normal form reducation of example terms

console.log(normalForm(term1));
console.log(normalForm(term2));

// write a function that takes an img as an argument, flips it upside down and returns it in a div

const flipImage = (img) => {
    const imgDiv = document.createElement('div');
    imgDiv.style.transform = 'rotate(180deg)';
    imgDiv.appendChild(img);
    return imgDiv;
}

// write a function that connects to nasa api and returns a random image

const getNasaImage = () => {
    const url = 'https://api.nasa.gov/planetary/apod?api_key'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const img = document.createElement('img');
            img.src = data.url;
            const imgDiv = flipImage(img);
            document.body.appendChild(imgDiv);
        })
}

// create a swiper component that takes in an array of images and returns a swiper

const swiper = (images) => {
    const swiperDiv = document.createElement('div');
    swiperDiv.className = 'swiper-container';
    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper';
    images.forEach(image => {
        const swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';
        swiperSlide.appendChild(image);
        swiperWrapper.appendChild(swiperSlide);
    })
    swiperDiv.appendChild(swiperWrapper);
    return swiperDiv;
}

















