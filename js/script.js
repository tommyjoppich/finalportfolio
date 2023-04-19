function sayWelcome(){
    const fonts = ['Arial', 'Helvetica', 'Verdana', 'Times New Roman', 'Courier New', 'Georgia', 'Palatino', 'Comic Sans MS', 'Impact'];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const welcomeButton = document.querySelector('button');
    const welcomeMessage = document.createElement('p');
    welcomeMessage.innerText = '--> Welcome!';
    welcomeMessage.style.color = 'white';
    welcomeMessage.style.fontFamily = randomFont;
    welcomeMessage.style.display = 'inline-block';
    welcomeButton.insertAdjacentElement('afterend', welcomeMessage);
}

const text = document.querySelector('#tommyText');
const image = document.querySelector('#tommyPic');

text.addEventListener('click', function() {
  image.style.display = 'block';
});
