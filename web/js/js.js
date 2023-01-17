'use strict';

let section = document.querySelector('.section1');


let sliders = document.querySelectorAll('.slider');


let i=0;

for(let slider of sliders){
   slider.addEventListener('click',function(){
    i++
    if(i>=sliders.length){
        sliders[i-1].classList.remove('active')

        i=0;

        sliders[i].classList.add('active')

    }else{
        sliders[i-1].classList.remove('active')

        sliders[i].classList.add('active')
    }
})
}


