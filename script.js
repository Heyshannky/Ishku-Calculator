let currentInput = '';
let operation = '';
let secondInput = '';

const compliments = [
    "Ishku, you're the reason I believe in magic! ✨",
    "Every calculation reminds me of how wonderful you are, Ishku! 💖",
    "Ishku, your smile is more beautiful than any number! 🌸",
    "Dekho dekho kese blush kar rhi hai ye ladki💖",
    "Just like this calculation, you add joy to my life, Ishku! ❤️",
    "Ishku, you make my heart race faster than this calculator! 💕",
    "Hasti rhe tu hasti rhe, haya ki laali khilti rhe😊",
    "In a world full of numbers, you’re my favorite, Ishku! 🌈",
    "You light up my world like a bright calculation, Ishku! 🌟",
    "Ishku, every number reminds me of your brilliance! 😊",
    "With you, every moment feels like a perfect equation, Ishku! 🥳",
    "You're the only variable I want in my equation, Ishku! 💕",
    "Aap itne cute ku ho?🌟",
    "Apsara ho tum, ya koi pari?😊",
];

// Focus the calculator on page load
window.onload = function() {
    document.getElementById('calculator').focus();
};

// Add keyboard support
document.getElementById('calculator').addEventListener('keydown', (event) => {
    if (/\d/.test(event.key)) {
        appendNumber(event.key);
    } else if (['+', '-', '*', '/'].includes(event.key)) {
        setOperation(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'c' || event.key === 'C') {
        clearDisplay();
    }
});

function appendNumber(number) {
    if (operation) {
        secondInput += number;
        updateDisplay(); // Update display with both inputs
    } else {
        currentInput += number;
        updateDisplay(); // Update display with the current input
    }
}

function setOperation(op) {
    if (currentInput === '') return;
    operation = op;
    updateDisplay(); // Update display to show current input and operation
}

function calculate() {
    if (currentInput === '' || operation === '' || secondInput === '') return;

    let result;
    const num1 = parseFloat(currentInput);
    const num2 = parseFloat(secondInput);

    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
    }

    displayCompliment();
    clearInputs();
}

function clearDisplay() {
    clearInputs();
    document.getElementById('display').innerText = '';
}

function clearInputs() {
    currentInput = '';
    secondInput = '';
    operation = '';
    document.getElementById('compliment').innerText = '';
}

function displayCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    document.getElementById('display').innerText = compliments[randomIndex];
}

function updateDisplay() {
    let displayText = currentInput;
    if (operation) {
        displayText += ` ${operation} ${secondInput}`;
    }
    document.getElementById('display').innerText = displayText;
}
