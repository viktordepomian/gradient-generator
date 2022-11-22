const VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const BODY = document.body;
let gradientText = document.querySelector('.gradient-text');

function outputAll(color){
    gradientText.textContent = `background: linear-gradient(45deg, ${color}, ${color})`;
}

function gradientGenerator(){
    let hex = '#';

    for(let i = 0; i < 6; i++){
        const index = Math.floor(Math.random() * VALUES.length);
        hex += VALUES[index];
    };
    BODY.style.backgroundColor = hex;
    return hex;
};

outputAll(gradientGenerator());