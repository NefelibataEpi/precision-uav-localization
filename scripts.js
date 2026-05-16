const steps = document.querySelectorAll(".step");

let currentStep = 0;

function updateWorkflow() {
  steps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  currentStep = (currentStep + 1) % steps.length;
}

setInterval(updateWorkflow, 1200);