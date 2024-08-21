let display=document.querySelector('#display');
let btn1=document.querySelector('.val1');
btn1.addEventListener('click',function(){
    display.value+=btn1.value
})
let btn2=document.querySelector('.val2');
btn2.addEventListener('click',function(){
    display.value+=btn2.value
})
let btn3=document.querySelector('.val3');
btn3.addEventListener('click',function(){
    display.value+=btn3.value
})
let btn4=document.querySelector('.val4');
btn4.addEventListener('click',function(){
    display.value+=btn4.value
})
let btn5=document.querySelector('.val5');
btn5.addEventListener('click',function(){
    display.value+=btn5.value
})
let btn6=document.querySelector('.val6');
btn6.addEventListener('click',function(){
    display.value+=btn6.value
})
let btn7=document.querySelector('.val7');
btn7.addEventListener('click',function(){
    display.value+=btn7.value
})
let btn8=document.querySelector('.val8');
btn8.addEventListener('click',function(){
    display.value+=btn8.value
})
let btn9=document.querySelector('.val9');
btn9.addEventListener('click',function(){
    display.value+=btn9.value
})
let btn0=document.querySelector('.val0');
btn0.addEventListener('click',function(){
    display.value+=btn0.value
})
let add=document.querySelector('.add');
add.addEventListener('click',function(){
    display.value+=add.value
})
let sub=document.querySelector('.sub');
sub.addEventListener('click',function(){
    display.value+=sub.value
})
let mul=document.querySelector('.mul');
mul.addEventListener('click',function(){
    display.value+=mul.value
})
let div=document.querySelector('.div');
div.addEventListener('click',function(){
    display.value+=div.value
})
let dot=document.querySelector('.dot');
dot.addEventListener('click',function(){
    display.value+=dot.value
})
let root=document.querySelector('.root');
root.addEventListener('click',function(){
    display.value=Math.sqrt(display.value)
})
let result=document.querySelector('#result');
result.addEventListener('click',function(){
    display.value=eval(display.value)
})
let clear=document.querySelector('.ac');
clear.addEventListener('click',function(){
    display.value=''
})
let del=document.querySelector('.del');
del.addEventListener('click',function(){
    display.value=display.value/10|0
    let l=display.value;
    if(l==0){
        display.value='';
    }
})