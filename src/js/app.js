let prevStep = document.getElementById('prevStep');
let nextStep = document.getElementById('nextStep');

let currentStep = 1;

prevStep.addEventListener('click', () => {
    if(currentStep > 1) {
        document.getElementById('step-' + currentStep).classList.add('hidden');
        document.getElementById('step-' + String(currentStep - 1)).classList.remove('hidden');
        nextStep.classList.remove('disable');
        currentStep--;
    }

    if(currentStep == 1) {
        prevStep.classList.add('disable')
    }else {
        prevStep.classList.remove('disable')
    }
});

nextStep.addEventListener('click', () => {
    if(currentStep < 4) {
        document.getElementById('step-' + currentStep).classList.add('hidden');
        document.getElementById('step-' + String(currentStep + 1)).classList.remove('hidden');
        prevStep.classList.remove('disable');
        currentStep++;
    }

    if(currentStep == 4) {
        nextStep.classList.add('disable')
    }else {
        nextStep.classList.remove('disable')
    }
});