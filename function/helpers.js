function disappear(){
    const m1 = document.querySelector('.main1') //main1 container
    const m2 = document.querySelector('.main2') //main2 container
    m1.classList.add('hidden')
    m2.classList.remove('displayNone'), m2.classList.add('visible')
}

//calculates BMI
function calculateBmi(weight, height){
    return Math.ceil(weight/(height**2));
}

//calculates the result predictions
function resultPrediction(bmi, age){
    let res;
    if(age >= 20){
        if(bmi < 16)
            res = "Severe Thinness";
        if(bmi=>16 && bmi<17)
            res = "Moderate Thinness";
        if(bmi=>17 && bmi <= 18.5)
            res = "Mild Thinness";
        if(bmi >= 18.5 &&  bmi < 25)
            res = "Normal";
        if(bmi >= 25 && bmi<30)
            res = "Overweight";
        if(bmi >= 30 && bmi < 35)
            res = "Obese class 1";
        if(bmi >= 35 && bmi <= 40)
            res = "Obese class 2";
        if(bmi > 40 )
            res = "Obese class 3";
    }
    else{
        res = "Not Available"
    }
    return res;
}

//gives recommendation
function giveRecommendation(bmi, age){
    let res;
    if(age >= 20){
        if(bmi < 16)
            res = "Consult a doctor or Nutrionist.";
        if(bmi=>16 && bmi<17)
            res = "Consult a doctor or Nutrionist.";
        if(bmi=>17 && bmi <= 18.5)
            res = "Have some more food and you are almost there.";
        if(bmi >= 18.5 &&  bmi < 25)
            res = "You are alright! But keep working out to keep BMI normal";
        if(bmi >= 25 && bmi<30)
            res = "Do some workout and control diet.";
        if(bmi >= 30 && bmi < 35)
            res = "Do some workout, control diet and mainly avoid sugar and fast foods.";
        if(bmi >= 35 && bmi <= 40)
            res = "You need to have go for some intense workout.Join a gym.";
        if(bmi > 40 )
            res = "You are in a health risk!Consult a doctor now!!!";
    }
    else{
        res = "Not Available"
    }
    return res;
}

export {disappear, calculateBmi, giveRecommendation, resultPrediction};