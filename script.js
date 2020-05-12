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
      id('fuelStatus').innerText = "Not enough fuel for journey";
      id('fuelStatus').style.backgroundColor = 'red';
      id('cargoStatus').innerText = "Too much cargo mass for lift off";
      id('cargoStatus').style.backgroundColor = 'red';
      return true;
   }

   console.log("validateInput() error");
   return false;

}

function updateLaunchStatus(ready) {
   if (ready) {
      id('launchStatus').innerText = "Shuttle ready for launch";
      id('launchStatus').style.backgroundColor = 'green';
   }
   else {
      id('launchStatus').innerText = "Shuttle not ready for launch";
      id('launchStatus').style.backgroundColor = 'red';
   }

   id('faultyItems').style.visibility = 'visible';

}

window.addEventListener('DOMContentLoaded', () => {
   id('formSubmit').addEventListener('click', () => {

      let fuelLevel;
      let cargoMass;
      let launchIsReady = false;
      let fuelIsReady = false;
      let cargoIsReady = false;

      if (validateInput()) {
         id('pilotStatus').innerText = `${id('pilotName').value} Ready`;
         id('copilotStatus').innerText = `${id('copilotName').value} Ready`;
         fuelLevel = Number(id('fuelLevel').value);
         cargoMass = Number(id('cargoMass').value);
      }

      if (fuelLevel > 10000) {
         id('fuelStatus').innerText = "Fuel level high enough for launch";
         id('fuelStatus').style.backgroundColor = '#ECF0F1';
         fuelIsReady = true;
      }

      if (cargoMass > 0 && cargoMass < 10000) {
         id('cargoStatus').innerText = "Cargo mass low enough for launch";
         id('cargoStatus').style.backgroundColor = '#ECF0F1';
         cargoIsReady = true;
      }

      if (fuelIsReady && cargoIsReady) {
         launchIsReady = true;
      }

      updateLaunchStatus(launchIsReady);

   });
});

/*
If the user submits a cargo mass that is too large (more than 10,000 kilograms),
change the list to visible with an updated cargo status stating that there is too much mass for the shuttle to take off.
The text of launchStatus should also change to "Shuttle not ready for launch" and the color should change to red
*/

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
