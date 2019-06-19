export default class Plastics {
  constructor(name, health, hairPull, scratch, boobPunch) {
    this.name = name
    this.health = health
    this.attacks = {
      "hairPull": hairPull,
      "scratch": scratch,
      "boobPunch": boobPunch
    }
    this.items = []
    this.hits = 0
  }
}

