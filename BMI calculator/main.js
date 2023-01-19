let btnElement = document.querySelector('.calc')
let weightInput = document.querySelector('.kg')
let heightInput = document.querySelector('.cm')
let resultElement = document.querySelector('.result')
let genderElement = document.querySelector('#gender')

btnElement.addEventListener('click', calc)

function calc(){
    let res = weightInput.value / ((heightInput.value * heightInput.value) /10000)
    let height=  Number(heightInput.value)
    res = parseFloat(res.toFixed(2))
    weightInput.value='';
    heightInput.value='';
    resultElement.innerHTML='';
    
    if(res !== NaN){
        if(res <18.5){
            let p1= document.createElement("p");
            p1.textContent = res
            p1.classList.add('BMI-num', 'underweight')
            let p2 = document.createElement("p");
            p2.textContent = 'Underweight'
            p2.classList.add('text', 'underweight')
            resultElement.appendChild(p1)
            resultElement.appendChild(p2)
        }else if(res >=18.5 & res < 25){
            let p1= document.createElement("p");
            p1.textContent = res
            p1.classList.add('BMI-num', 'normal')
            let p2 = document.createElement("p");
            p2.textContent = 'Normal'
            p2.classList.add('text', 'normal')
            resultElement.appendChild(p1)
            resultElement.appendChild(p2)
        }else if(res >=25 & res < 30){
            let p1= document.createElement("p");
            p1.textContent = res
            p1.classList.add('BMI-num', 'overweight')
            let p2 = document.createElement("p");
            p2.textContent = 'Overweight'
            p2.classList.add('text', 'overweight')
            resultElement.appendChild(p1)
            resultElement.appendChild(p2)
        }else if(res >=30 ){
            let p1= document.createElement("p");
            p1.textContent = res
            p1.classList.add('BMI-num', 'obese')
            let p2 = document.createElement("p");
            p2.textContent = 'Obese'
            p2.classList.add('text', 'obese')
            resultElement.appendChild(p1)
            resultElement.appendChild(p2)
        }
    }

    if( resultElement.innerHTML !== ""){
        if (genderElement.value === 'Female'){
            let idealBodyWeight = height - 108;
            let p3 = document.createElement('p');
            p3.classList.add('IBW')
            p3.textContent= `Ideal weight for your height is ${idealBodyWeight} kg`
            resultElement.appendChild(p3)
        }else if (genderElement.value === 'Male'){
            let idealBodyWeight = height - 105;
            let p3 = document.createElement('p');
            p3.classList.add('IBW')
            p3.textContent= `Ideal weight for your height is ${idealBodyWeight} kg`
            resultElement.appendChild(p3)
        }
    }
 
}