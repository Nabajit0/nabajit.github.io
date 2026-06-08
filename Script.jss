const texts=[
"Electrical Engineering Student",
"IoT Enthusiast",
"Future Engineer",
"Technology Learner"
];

let index=0;
let char=0;

const typing=document.getElementById("typing");

function type(){

if(char<texts[index].length){

typing.textContent+=texts[index].charAt(char);

char++;

setTimeout(type,100);

}

else{

setTimeout(erase,1500);

}

}

function erase(){

if(char>0){

typing.textContent=texts[index].substring(0,char-1);

char--;

setTimeout(erase,50);

}

else{

index++;

if(index>=texts.length){

index=0;

}

setTimeout(type,500);

}

}

type();

document
.getElementById("themeBtn")
.addEventListener("click",()=>{

document.body.classList.toggle("light");

});
