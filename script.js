
function calculateBMI(){
let height=parseInt(document.getElementById("height").value);
let weight=parseInt(document.getElementById("weight").value);
let output=document.getElementById("output");
    
let BMI=weight/((height/100)**2);

BMI=BMI.toFixed(2);
let classification; 

if(BMI<16){
    classification="Underweight";
}
else if(BMI>16 && BMI<17){
    classification="Moderately underweight";
}
else if(BMI>17 && BMI<18.5){
    classification="Normal Thinness"
}
else if(BMI>18.5 && BMI<25){
    classification="Normal"
}
else if(BMI>25 && BMI<30){
    classification="Overweight"
}
else if(BMI>30 && BMI<35){
    classification="Obese Class I"
}
else if(BMI>35 && BMI<40){
    classification="Obesity class II"
}
else if(BMI>40){
    classification="Obesity class III"
}
else{classification='Extreme'}

output.innerHTML=`BMI range:${BMI}|${classification}`;
}