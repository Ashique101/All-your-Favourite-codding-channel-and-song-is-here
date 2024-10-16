const alanImage = document.getElementById('alan-image');
const marshImage = document.getElementById('marsh-image');
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('clicked'); 


        if (button.textContent.includes('Alan')) {
            alanImage.classList.add('animated');
            setTimeout(() => {
                button.classList.remove('clicked');
                alanImage.classList.remove('animated');
            }, 300); 
        } else if (button.textContent.includes('Marsh')) {
            marshImage.classList.add('animated');
            setTimeout(() => {
                button.classList.remove('clicked');
                marshImage.classList.remove('animated');
            }, 300); 
        }
    });
});
