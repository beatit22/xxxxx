let char = [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'
];

console.log(char.length)
let k1=Math.floor(Math.random()*62)
let k2=Math.floor(Math.random()*62)
let k3=Math.floor(Math.random()*62)
let k4=Math.floor(Math.random()*62)
let k5=Math.floor(Math.random()*62)
let k6=Math.floor(Math.random()*62)

let robot=document.getElementById('robot')

robot.innerText=`${char[k1]} ${char[k2]} ${char[k3]} ${char[k4]} ${char[k5]} ${char[k6]} `

let yenile1 = document.getElementById('yenile');
yenile1.onclick=function(){
window.location.href='index1.html'

}


