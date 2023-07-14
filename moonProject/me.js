let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mount3 = document.getElementById('mountains3');
let mount4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let bout = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mount3.style.top = value * 2 + 'px';
    mount4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    bout.style.top = value + 'px';
    bout.style.left = value * 3 + 'px';
    nouvil.style.fontSize = value  + 'px';
    if (scrolly >= 336){
        nouvil.style.fontSize = `${336}px`;
        nouvil.style.position = 'fixed' ;
        if(scrollY >= 478){
            nouvil.style.display = 'none';

        }else{
            nouvil.style.display = 'block';

        }
if(scrolly >= 127){
    document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
}else{
    document.querySelector('.main').style.background = 'linear-gradient(rgb(34, 0, 0),rgb(19, 0, 53)'

}
    }

}