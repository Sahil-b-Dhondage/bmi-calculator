document.getElementById('bmiForm').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    
    const bmi = (weight / (height * height)).toFixed(2);
    let weightRange = '';
    let weightStatus = '';
    let healthRisks = [];

    if (bmi < 18.5) {
        weightStatus = 'Underweight';
        weightRange = `Healthy weight range: ${(18.5 * height * height).toFixed(2)} kg - ${(24.9 * height * height).toFixed(2)} kg`;
        healthRisks = ['Malnutrition', 'Vitamin deficiencies', 'Anemia', 'Osteoporosis'];
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        weightStatus = 'Normal weight';
        weightRange = `Healthy weight range: ${(18.5 * height * height).toFixed(2)} kg - ${(24.9 * height * height).toFixed(2)} kg`;
    } else if (bmi >= 25 && bmi <= 29.9) {
        weightStatus = 'Overweight';
        weightRange = `Healthy weight range: ${(18.5 * height * height).toFixed(2)} kg - ${(24.9 * height * height).toFixed(2)} kg`;
        healthRisks = ['High blood pressure', 'Type 2 diabetes', 'Heart disease', 'Stroke'];
    } else {
        weightStatus = 'Obese';
        weightRange = `Healthy weight range: ${(18.5 * height * height).toFixed(2)} kg - ${(24.9 * height * height).toFixed(2)} kg`;
        healthRisks = ['High blood pressure', 'Type 2 diabetes', 'Heart disease', 'Stroke', 'Gallbladder disease'];
    }

    document.getElementById('bmiResult').innerText = `Your BMI is ${bmi}`;
    document.getElementById('weightRange').innerText = weightRange;
    document.getElementById('weightStatus').innerText = `You are ${weightStatus}`;

    const healthRisksList = document.getElementById('healthRisks');
    healthRisksList.innerHTML = '';
    healthRisks.forEach(risk => {
        const li = document.createElement('li');
        li.innerText = risk;
        healthRisksList.appendChild(li);
    });

    document.getElementById('resultCard').style.display = 'block';
}
