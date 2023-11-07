let buttons = document.querySelectorAll('#wrong');
buttons.forEach(buttons => {
    buttons.onclick = () => {
       document.querySelector('label').innerHTML = 'WRONG';
       document.querySelector('#correct').style.display = 'none';
       document.querySelector('#correct').onclick = () => {
        document.querySelector('label').innerHTML = 'WRONG';
        
       }
    }
})