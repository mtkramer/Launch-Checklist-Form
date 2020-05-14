window.addEventListener('DOMContentLoaded', () => {

   fetch("https://handlers.education.launchcode.org/static/planets.json").then((response) => {
      response.json().then((json) => {

         id('missionTarget').innerHTML = `
            <label for="selectTarget" id="selectTargetLabel">Please select a destination
               <select id="selectTarget" name="selectTarget">
                  <option value="none">None</option>
               </select>
            </label>
            <div id="destination"
            style="display:flex; flex-direction: column; justify-content: center; align-items: center; margin: 8 0;"></div>
         `;

         id('selectTarget').innerHTML += json.map((planet, index) => {
            let option = planet.name;
            return `<option value="${index}">${option}</option>`;
         });

         id('selectTarget').addEventListener('change', () => {

            let index = id('selectTarget').value;
            if (index >= 0) {
               id('destination').innerHTML = `
                  <h2>Mission Destination</h2>
                     <ol>
                        <li>Name: ${json[index].name}</li>
                        <li>Diameter: ${json[index].diameter}</li>
                        <li>Star: ${json[index].star}</li>
                        <li>Distance from Earth: ${json[index].distance}</li>
                        <li>Number of Moons: ${json[index].moons}</li>
                     </ol>
                  <img src="${json[index].image}" alt="picture of destination planet"></img>
               `;
            }
            else {
               id('destination').innerHTML = "";
            }
         });

      });

   });

   id('formSubmit').addEventListener('click', () => {

      let fuelLevel;
      let cargoMass;
      let launchIsReady = false;
      let fuelIsReady = false;
      let cargoIsReady = false;

      if (validateInput()) {
         id('pilotStatus').innerText = `${id('pilotName').value} Ready`;
         id('pilotStatus').style.backgroundColor = 'green';
         id('copilotStatus').innerText = `${id('copilotName').value} Ready`;
         id('copilotStatus').style.backgroundColor = 'green';
         fuelLevel = Number(id('fuelLevel').value);
         cargoMass = Number(id('cargoMass').value);
      }

      if (fuelLevel > 10000) {
         id('fuelStatus').innerText = "Fuel level high enough for launch";
         id('fuelStatus').style.backgroundColor = 'green';
         fuelIsReady = true;
      }
      else {
         id('fuelStatus').innerText = "Not enough fuel for launch";
         id('fuelStatus').style.backgroundColor = 'red';
      }

      if (cargoMass > 0 && cargoMass < 10000) {
         id('cargoStatus').innerText = "Cargo mass low enough for launch";
         id('cargoStatus').style.backgroundColor = 'green';
         cargoIsReady = true;
      }
      else {
         id('cargoStatus').innerText = "Too much cargo mass for lift off";
         id('cargoStatus').style.backgroundColor = 'red';
      }

      if (fuelIsReady && cargoIsReady) {
         launchIsReady = true;
      }

      updateLaunchStatus(launchIsReady);

   });

});

function id(x) { return document.getElementById(x); }

function validateInput() {

   let pilotName = id('pilotName').value;
   let copilotName = id('copilotName').value;
   let fuelLevel = id('fuelLevel').value;
   let cargoMass = id('cargoMass').value;
   id('pilotStatus').innerText = "Pilot not ready";
   id('pilotStatus').style.backgroundColor = "red";
   id('copilotStatus').innerText = "Co-Pilot not ready";
   id('copilotStatus').style.backgroundColor = "red";

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

