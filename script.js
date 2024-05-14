const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.querySelector('.parrafito');

const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#resultado');

form.addEventListener('submit',btnOnClick);

function btnOnClick(event){
   // console.log({event});
    event.preventDefault();
     
const sumaInputs=input1.value+input2.value;
pResult.innerHTML="Resultado: "+sumaInputs;
}
