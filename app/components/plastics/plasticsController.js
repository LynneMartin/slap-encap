// Controller is responsible for...
//user controls; interactions between the data and the user,
//draw function
//giveItem
//reset
//attacks

import PlasticsService from './plasticsService.js';

let _plasticsService = new PlasticsService()

function draw() {
  let target = _plasticsService.Target
  let template = `
  <div class="card">
      <h2>${target.name}</h2>
      <h4>Health: ${target.health}</h4>
  </div>
  `
  //you will need to modify your template string to be whatever you want and then set it as the innerHTML 
  //of an element on the DOM
}

//any other private functions you may want

export default class PlasticsController {
  constructor() {
    console.log("plastics controller works") //to make sure it works
  }

  addItemToTarget(itemIndex) {
    _plasticsService.addItemToTarget(itemIndex)
  }

  attackTarget(attackName) {
    _plasticsService.attackTarget(attackName)
    draw()
  }

  //any other public methods you may want
}