document.addEventListener("DOMContentLoaded", function() {
    //to the traffic light elements
    const redLight = document.querySelector(".red");
    const yellowLight = document.querySelector(".yellow");
    const greenLight = document.querySelector(".green");
    
    //to the controller elements
    const redButton = document.querySelector(".re");
    const yellowButton = document.querySelector(".yell");
    const greenButton = document.querySelector(".gree");
    
    // Function to turn off all lights
    function turnOffLights() {
    redLight.style.backgroundColor = "rgba(208, 47, 19, 0.7)";
    yellowLight.style.backgroundColor = "rgba(199, 199, 28, 0.7)";
    greenLight.style.backgroundColor = "rgba(69, 193, 15, 0.7)";
    }
    
    // Function to control the traffic lights
    function controlTrafficLight(color) {
    turnOffLights(); // Turn off all lights first
    
    // Turn on the specified light
    if (color === "red") {
    redLight.style.backgroundColor = "red";
    } else if (color === "yellow") {
    yellowLight.style.backgroundColor = "yellow";
    } else if (color === "green") {
    greenLight.style.backgroundColor = "green";
    }
    }
    
    // Event listeners for the controller buttons
    redButton.addEventListener("click", function() {
    controlTrafficLight("red");
    });
    
    yellowButton.addEventListener("click", function() {
    controlTrafficLight("yellow");
    });
    
    greenButton.addEventListener("click", function() {
    controlTrafficLight("green");
    });
    });