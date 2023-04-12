// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: April 2023
// This file contains the JS functions for index.html

"use strict";

function calculateVolumeSurfaceArea() {
  // get coefficient a
  let coefficientA= parseFloat(document.getElementById("coefficient-a").value)

	// get coefficient b
  let coefficientB= parseFloat(document.getElementById("coefficient-b").value)

  // get constant c
  let constantC= parseFloat(document.getElementById("constant-c").value)


  //calculate the axis of symmetry
  let axisOfSymm = (-1*coefficientB)/(2*coefficientA);
  //calculate the y-coordinate of the vertex
  let yCoordinate = coefficientA*axisOfSymm**2+coefficientB*axisOfSymm+constantC

  // display the axis of symmetry and y-coordinate of the vertex
  document.getElementById('answer1').innerHTML = "The volume of your rectangular prism is " +axisOfSymm.toFixed(2)+"cm<sup>3</sup>.";
  // display how much the government will pay
  document.getElementById('answer2').innerHTML = "The surface area of your rectangular prism is "+yCoordinate.toFixed(2)+"cm<sup>2</sup>."; 
}

