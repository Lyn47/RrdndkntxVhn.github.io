const text = document.getElementById("color-changing-text");
const letters = Array.from(text.textContent);
text.textContent = '';

letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.className = 'letter';
    text.appendChild(span);
    span.style.animationDelay = `${index * 0.1}s`;
});