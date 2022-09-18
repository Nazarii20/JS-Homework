var divColor = document.querySelector('.main');
var colors = ['red', 'yellow','green'];
divColor.addEventListener('mouseover', () => {
    var currentColor = colors[0];
    colors.push(colors.shift());
    divColor.style.backgroundColor = currentColor;

})

divColor.addEventListener('mouseout', function handleMouseOut() {
    divColor.style.backgroundColor = 'purple';
  });