document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("dynamicHeading");
  const text = heading.textContent;
  const numLetters = text.length;
  const startColor = [255, 255, 255];
  const endColor = [128, 128, 128];

  heading.innerHTML = '';

  for (let i = 0; i < numLetters; i++) {
      const color = calculateColor(i, numLetters, startColor, endColor);
      const span = document.createElement('span');
      span.style.color = color;
      span.textContent = text[i];
      heading.appendChild(span);
  }

  function calculateColor(index, total, startColor, endColor) {
      const r = startColor[0] + (endColor[0] - startColor[0]) * (index / (total - 1));
      const g = startColor[1] + (endColor[1] - startColor[1]) * (index / (total - 1));
      const b = startColor[2] + (endColor[2] - startColor[2]) * (index / (total - 1));

      return `rgb(${r}, ${g}, ${b})`;
  }
  // Added code for updating heading text
  const firstInput = document.querySelector('input');
  firstInput.addEventListener('change', function () {
    if (firstInput.checked) {
      heading.textContent = "Research";
    } else {
      heading.textContent = "What to Expect";
    }
  });
  
});

const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');

openModalButton.addEventListener('click', () => {
  modal.showModal();
});

closeModalButton.addEventListener('click', () => {
  modal.close();
});

document.getElementById('submitRequestAccess').addEventListener('click', () => {
  window.open('thankyou.html', '_blank');
});


document.addEventListener('keydown', function(event) {
  if (event.key === 'A' || event.key === 'a') {
    if (event.target.nodeName !== 'INPUT' && event.target.nodeName !== 'TEXTAREA') {
      event.preventDefault();
      openModalButton.click();
    }
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'l' || event.key === 'L') {
    event.preventDefault();
      window.open('learnmore.html', '_blank');
  }
});






