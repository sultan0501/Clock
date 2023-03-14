const hours=document.querySelector('.hours')
const minutes=document.querySelector('.minutes')


 
function clock() {




let hour= new Date().getHours()
let minut=new Date().getMinutes()
let sec=new Date().getSeconds()

 
hours.textContent=hour
minutes.textContent=minut


const s=document.querySelector('.s')
const m=document.querySelector('.m')
const h=document.querySelector('.h')


setTimeout(() => {
    clock()
}, 1000);

s.style.transform=`rotate(${sec*6}deg)`
h.style.transform=`rotate(${hour*6}deg)`
m.style.transform=`rotate(${minut*6}deg)`



}

clock()