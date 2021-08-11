const pilComp = function (){
    const ran = Math.random()
    if (ran <= 0.34) return 'gajah';
    if (ran >0.34 && ran <= 0.67) return 'orang';
    return 'semut';
}
const rules = function(pilPlayer,comp){
    if (pilPlayer == comp) return 'SERI';
    if (pilPlayer == 'gajah') return (comp == 'semut') ? 'KALAH' : 'MENANG';
    if (pilPlayer == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';
    if (pilPlayer == 'semut') return (comp == 'orang') ? 'KALAH' : 'MENANG';
}
function putar(){
    const igc = document.querySelector('.img-computer');
    const gb = ['gajah','semut','orang'];
    let i = 0;
    const mulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime()-mulai >1000){
            clearInterval;
            return;
        }
    igc.setAttribute('src','img/'+gb[i++]+'.png');
    if (i == gb.length)i=0;
    },100)
}
const player = document.querySelectorAll('li img');
let skor1 = 0;
let skor2 = 0;
player.forEach(image);
function image(e){
    e.addEventListener('click', function(){
    const pilPlayer = e.className;
    const comp = pilComp();
    const hasil = rules(pilPlayer,comp);
    putar();
    setTimeout(function() {
    const inf = document.querySelector('.info');
    inf.innerHTML = (hasil);
    const komp = document.querySelector('.img-computer');
    komp.setAttribute('src', 'img/'+comp+'.png');
   const p1 = document.getElementById('sComp');
   const p2 = document.getElementById('sPlayer');
   if(hasil == 'MENANG'){
       skor2++;
   } else if (hasil == 'KALAH'){
       skor1++;
   } else if (hasil == 'SERI'){
       skor1++;
       skor2++;
   }
   p1.innerHTML=('skor : ' + skor1 );
   p2.innerHTML=('skor : ' + skor2 );
    },1000);
    });
};