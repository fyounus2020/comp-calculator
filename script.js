function updateValues() {
    let salaryInput = document.getElementById("salary");
    let equityInput = document.getElementById("equity");
    let salaryOutput = document.getElementById("salaryOutput");
    let equityOutput = document.getElementById("equityOutput");
    let titleOutput = document.getElementById("titleOutput");

    // Update the salary display
    salaryOutput.value = parseInt(salaryInput.value).toLocaleString();

    let adjustedEquity;
    let salaryVal = parseInt(salaryInput.value);

    // Adjust equity based on salary using piecewise linear functions
    if (salaryVal <= 72000) {
        adjustedEquity = 200000 + (salaryVal - 60000) * (160000 - 200000) / (72000 - 60000);
    } else if (salaryVal <= 80000) {
        adjustedEquity = 160000 + (salaryVal - 72000) * (100000 - 160000) / (80000 - 72000);
    } else {
        adjustedEquity = 100000 + (salaryVal - 80000) * (50000 - 100000) / (100000 - 80000);
    }

    equityInput.value = adjustedEquity;

    // Update the equity display
    equityOutput.value = parseInt(equityInput.value).toLocaleString();

    // Update title based on equity
    titleOutput.textContent = parseInt(equityInput.value) > 150000 ? "Founding Engineer" : "Lead Full-Stack Engineer";  
}

// Initial setup
updateValues();
