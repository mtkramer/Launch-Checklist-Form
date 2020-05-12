function id(x) { return document.getElementById(x); }

function validateInput() {

   let pilotName = id('pilotName').value;
   let copilotName = id('copilotName').value;
   let fuelLevel = id('fuelLevel').value;
   let cargoMass = id('cargoMass').value;

   if (!pilotName || !copilotName || !fuelLevel || !cargoMass) {
      alert("Please fill out all fields before submitting form.");
   }

   else if (/[^A-Z]/ig.test(pilotName)) {
      event.preventDefault();
      alert(pilotName + " is not a valid Pilot Name.\nPlease enter only letters for Pilot Name.");
      id('pilotName').value = "";
   }
   else if (/[^A-Z]/ig.test(copilotName)) {
      event.preventDefault();
      alert(copilotName + " is not a valid Co-Pilot Name.\nPlease enter only letters for Co-Pilot Name");
      id('copilotName').value = "";
   }
   else if (/[^0-9]/ig.test(fuelLevel)) {
      event.preventDefault();
      alert(fuelLevel + " is not a valid Fuel Level.\nPlease enter a number for Fuel Level");
      id('fuelLevel').value = "";
   }
   else if (/[^0-9]/ig.test(cargoMass)) {
      event.preventDefault();
      alert(cargoMass + " is not a valid Cargo Mass.\nPlease enter a number for Cargo Mass");
      id('cargoMass').value = "";
   }
   else {
      event.preventDefault();
      console.log("All inputs are good!");
   }

}

window.addEventListener('DOMContentLoaded', () => {
   id('formSubmit').addEventListener('click', () => {
      validateInput();
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
