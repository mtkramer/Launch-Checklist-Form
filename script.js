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
      alert("Please enter valid Pilot Name");
   }
   else if (/[^A-Z]/ig.test(copilotName)) {
      event.preventDefault();
      alert("Please enter valid Co-Pilot Name");
   }
   else if (/[^0-9]/ig.test(fuelLevel)) {
      event.preventDefault();
      alert("Please enter a number for Fuel Level");
   }
   else if (/[^0-9]/ig.test(cargoMass)) {
      event.preventDefault();
      alert("Please enter a number for Cargo Mass");
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
