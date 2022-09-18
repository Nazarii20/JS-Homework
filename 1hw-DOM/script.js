const btnRed = document.querySelector(".background-red");
btnRed.addEventListener('click', function onClickRed(event){
document.body.style.background ='red';
});
const btnGreen = document.querySelector(".background-green");
btnGreen.addEventListener('click', function onClickGreen(event){
    document.body.style.background = 'green';
});
const btnWhite = document.querySelector(".background-white");
btnWhite.addEventListener('click', function onClickWhite(event){
    document.body.style.background = 'white';
});
const btnSmallText = document.querySelector(".small-text");
btnSmallText.addEventListener('click', event => {
document.body.style.fontSize = 'small';
});
const btnNormalText = document.querySelector(".normal-text");
btnNormalText.addEventListener('click', event => {
    document.body.style.fontSize = 'medium';
});
const btnLargeText = document.querySelector(".large-text");
btnLargeText.addEventListener('click', event => {
    document.body.style.fontSize = 'larger';
});
const btnLeftHeader = document.querySelector(".header-left");
btnLeftHeader.addEventListener('click', event => {
    element.style.cssText =`
    position: absolute;
    left: 0;
    `;
});
const btnCenterHeader = document.querySelector(".header-center");
const element = document.querySelector(".header");
btnCenterHeader.addEventListener('click', event => {
    element.style.cssText =`
    position: absolute;
    left: 50%;
    `;
});
const btnRightHeader = document.querySelector(".header-right");
btnRightHeader.addEventListener('click', event => {
    element.style.cssText =`
    position: absolute;
    right: 0;
    `;
});
let url = document.querySelector(".up");

let link1 = prompt("Enter first link");
let firstSite = document.createElement('a');
let firstSiteLink = document.createTextNode(link1);
firstSite.appendChild(firstSiteLink);
firstSite.href = link1;
url.appendChild(firstSite);

let link2 = prompt("Enter second link");
let secondSite = document.createElement('a');
let secondSiteLink = document.createTextNode(link2);
secondSite.appendChild(secondSiteLink);
secondSite.href = link2;
url.appendChild(secondSite);

let link3 = prompt("Enter third link");
let thirdSite = document.createElement('a');
let thirdSiteLink = document.createTextNode(link3);
thirdSite.appendChild(thirdSiteLink);
thirdSite.href = link3;
url.appendChild(thirdSite);

const btnlinkyellowbackground = document.querySelector(".yellow-background-button");
btnlinkyellowbackground.addEventListener('click', function onClickWhite(event){
    url.style.backgroundColor = 'yellow';
});

const btnlinkgreybackground = document.querySelector(".grey-background-button");
btnlinkgreybackground.addEventListener('click', function onClickWhite(event){
    url.style.backgroundColor = 'grey';
});

const btnlinkwhitebackground = document.querySelector(".white-background-button");
btnlinkwhitebackground.addEventListener('click', function onClickWhite(event){
    url.style.backgroundColor = 'white';
});

var box = document.querySelector(".link-color");
    colors = ['purple', 'yellow', 'orange', 'brown', 'black'];

box.onclick = function () {
    color = colors.shift();
    colors.push(color);

    url.style.color = color;
};
const MainDiv = document.querySelector(".Main-div");
const btnDivInsideColor = document.querySelector(".div-inside-color");
colors1 = ['purple', 'yellow', 'orange', 'brown', 'black'];
btnDivInsideColor.onclick = function () {
    color1 = colors1.shift();
    colors1.push(color1);

    MainDiv.style.color = color1;
};
const btnDivInsideSize = document.querySelector(".div-inside-size");
sizes = ['small', 'medium', 'larger'];
btnDivInsideSize.onclick = function (){
    size = sizes.shift();
    sizes.push(size);

    MainDiv.style.fontSize = size;
}
const btnDivInsideWeight = document.querySelector(".div-inside-weight");
weights = ['bold', '800','normal'];
btnDivInsideWeight.onclick = function (){
    weight = weights.shift();
    weights.push(weight);

    MainDiv.style.fontWeight = weight;
}
 const typesforli = document.querySelector(".types-li");
 const btnListStyleType = document.querySelector('.button-markers');
 types = ['circle', 'square','upper-roman', 'lower-alpha'];
 btnListStyleType.onclick = function (){
    type = types.shift();
    types.push(type);

   typesforli.style.listStyleType = type;
 }
// let url = document.querySelector(".up");
// let link2 = prompt("Enter second link");
// let secondtSite = document.createElement('a');
// let secondSiteLink = document.createTextNode(link2);
// secondSite.appendChild(secondSiteLink);
// secondSite.href = link2;
// url.appendChild(secondSite);


