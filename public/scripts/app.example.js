class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    // this.driver = document.querySelector('#driver');
    // this.date = document.querySelector('#date');
    // this.time = document.querySelector('#time');
    // this.penumpang = document.querySelector('#passanger');

    this.driver = document.getElementById("driver");
    this.date = document.getElementById("date");
    this.time = document.getElementById("time");
    this.penumpang = document.getElementById("passanger");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {
    // Car.list.forEach((car) => {
    //   const node = document.createElement("div");
    //   node.innerHTML = car.render();
    //   this.carContainerElement.appendChild(node);
    // });

    Car.list.forEach((car)=>{
      let dateTime = this.date.value + "T" + this.time.value;
      let formdate = Date.parse(dateTime);
      let time = Date.parse(car['availableAt']);
      let penumpang = this.penumpang.value;
      let driver = this.driver.value;
      if (driver == "true"){
        driver = true;
      }else{
        driver = false;
      }


      if (car['available'] == driver && time >= formdate && car['capacity'] >= penumpang){
        const node = document.createElement("div");
        node.className = 'col-sm-4';
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
      }
    })
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
