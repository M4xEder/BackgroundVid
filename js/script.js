let i = 0;
const video = [ "HomemAranhaToby1.mp4", 'homemAranhaG1.mp4', 'spider-manT01.mp4',"Os3hJuntos.mp4"];
const vid = document.querySelector('#vid'); //obs
const parag = document.querySelector('#parag');
const ex = document.querySelector('#ex');
let tempo=18;
// ex.addEventListener("click", tempo());
function mudar(){
    vid.src ="./video/" + video[i];
    parag.innerHTML = "Video: <b>" + video[i] + "<b>"
    i++;
    if(i == video.length) { i = 0; }
    setTimeout(function () { mudar () }, tempo * 1000);
}
mudar(); 