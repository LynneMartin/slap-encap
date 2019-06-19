import PlasticsController from './components/plastics/PlasticsController.js'

class App {
  constructor() {
    this.controllers = {
      plasticsController: new PlasticsController()
    }
  }
}

window["app"] = new App()