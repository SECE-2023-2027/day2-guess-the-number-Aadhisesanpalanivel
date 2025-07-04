var res=document.getElementById("results_value");
var score=document.getElementById("value1");
let random=Math.trunc( Math.random() * 20)+1;
var num=document.getElementById("number");
var high_score=document.getElementById("high_score");
var check1=document.getElementById("checking");
var lar=0;
console.log(random)

const check=()=>{
     var value=document.getElementById('value').value;
     if(value===""){
         res.textContent="🔢 Enter The Number..";
          res.style.color='yellow';
     }
     else if(value==random){
         res.textContent="✅ Right Answer..";
         res.style.color='green';
            lar=parseInt(score.textContent);
            high_score.textContent=(parseInt(high_score.textContent)+parseInt(score.textContent)).toString();
         num.textContent=random;

     }
     else{
        res.textContent="❌ Incorrect Answer....";
        res.style.color='red';
        if(parseInt(score.textContent)>0){
        score.textContent=(parseInt(score.textContent)-1).toString();
        }
        else if(parseInt(score.textContent)==0){
            check1.style.display='none';

        }
     }
}

const refer=()=>{
    random=Math.trunc( Math.random() * 20)+1;
    console.log(random)
    score.textContent=parseInt(20).toString();
     res.textContent="Start Gaming....";
        res.style.color='white';
         num.textContent='?';
         check1.style.display='flex';
}