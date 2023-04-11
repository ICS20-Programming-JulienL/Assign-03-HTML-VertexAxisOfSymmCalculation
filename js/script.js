// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";

function calculateVolumeSurfaceArea() {
  // get the length from user input
  let coefficientA= parseFloat(document.getElementById("coefficient-a").value)

	// get the height from user input
  let coefficientB= parseFloat(document.getElementById("coefficient-b").value)

  // get the width from user input
  let constantC= parseFloat(document.getElementById("constant-c").value)


  //calculate the volume 
  let axisOfSymm = (-1*coefficientB)/(2*coefficientA);
  let yCoordinate = coefficientA*axisOfSymm**2+coefficientB*axisOfSymm+constantC

  // display the volume and surface area
  
  document.getElementById('answer1').innerHTML = "The volume of your rectangular prism is " +axisOfSymm.toFixed(2)+"cm<sup>3</sup>.";
  // display how much the government will pay
  document.getElementById('answer2').innerHTML = "The surface area of your rectangular prism is "+yCoordinate.toFixed(2)+"cm<sup>2</sup>."; 
}

