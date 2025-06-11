'use strict';

const populations = [...document.querySelectorAll('population')];

const total = populations.reduce((acc, val) => +acc + +val, 0);
const average = total / populations.length;

const totalPopulation = document.querySelector('total-population');
const averagePopulation = document.querySelector('average-population');

totalPopulation.textContent = total;
averagePopulation.textContent = average;
