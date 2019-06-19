// Service is responsible for all data and data manipulation
function plasticsService() {
  //private
  function Target(name, health, hairPull, scratch, boobPunch) {
    this.name = name
    this.health = health
    this.attacks = {
      hairPull: hairPull,
      scratch: scratch,
      boobPunch: boobPunch
    }
    this.hits = 0
    this.items = []
  }
}

import Target from '../models/Target.js'
import Item from '../models/Item.js'

let _target = new Target("Scarecrow", 100, 1, 5, 10);
let hat = new Item("Straw Hat", 5, "It's my good hat");

let _items = [hat] //create and add as many items as you like

export default class PlasticsService {
  constructor() {
    console.log("plastics service works") //to make sure it works
  }

  get Plastics() {
    return {
      name: _target.name,
      health: _target.health,
      attacks: _target.attacks,
      items: _target.items,
      hits: _target.hits,
    }
  }

  addItemToTarget(itemIndex) {
    // you will need to write the logic to check if the item is already in the target's items before you add it again
    let targetItem = _items[itemIndex]
    _target.items.push(targetItem)
  }

  attackTarget(attackName) {
    // you will need to write the logic to account for items your target may have
    // you will also need to write the logic to check whether the target is alive or dead
    let attackDamage = _target.attacks[attackName]
    _target.health -= attackDamage
    _target.hits++
  }

  //any other methods you might want on your service
}