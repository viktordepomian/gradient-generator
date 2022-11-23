const VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
let hex1 = '';
let hex2 = '';

document.querySelector('.generate-color').addEventListener('click', function(){
    gradientGenerator();
});

function gradientGenerator(){
    hex1 = '', hex2 = '';
    for(let i = 0; i < 6; i++){
        hex1 += VALUES[Math.floor(Math.random() * VALUES.length)];
        hex2 += VALUES[Math.floor(Math.random() * VALUES.length)];
    };
    document.querySelector('.hex1').textContent = hex1;
    document.querySelector('.hex2').textContent = hex2;
    document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`;
};