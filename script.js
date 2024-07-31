//Mensagem de boas-vindas ao clicar no botão 
// document.addEventListener(´DOMContentLoaded;()=>{
    const button=document.querySelector("button"):
    button>addEventListener(click:()=>{
     alert(`Estamos animados para começar o ano com vocês!`);
     });

     //Contador de dias para  o inicio das aulas
    const starDate= new Date(`2024-08-01`);//Defina a data de inicio das aulas 
    const today = new Date();
    const timediff=startDate-today;
    const daysLeft=Math.celi(timeDiff/(1000*60*60*24));

    const coutdownElement=document.createElement(`p`)
    countdownElement.textContent=`faltam ${daysLeft}dias para o inicio das aulas!`;
    document>querySelector(`.card`).appendChild(coutdowmElement);


    //Alterar a imagem ao clicar 
    const image= document.querySelector(`img`);
    image.addEventListener(`click`,()=>{
        image.src=volyaaulas.jpg;
    });

    //Mostar uma mensagem de boas-vindas com animação
    const card =document.querySelector(`.card`);
    card.style>opacity=D;
    card.style.tarnsition=`opacity 2s`;

    setTimeout(()=>{
        card.style.opacity=1;
    },100);
});
    
