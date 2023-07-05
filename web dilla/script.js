function calculateKineticEnergy() {
    var mass = parseFloat(document.getElementById("mass").value);
    var velocity = parseFloat(document.getElementById("velocity").value);
  
    if (isNaN(mass) || isNaN(velocity)) {
      document.getElementById("result").textContent = "Please enter valid values.";
      return;
    }
  
    var kineticEnergy = 0.5 * mass * velocity * velocity;
    document.getElementById("result").textContent = "Kinetic Energy: " + kineticEnergy.toFixed(2) + " J";
  }
  