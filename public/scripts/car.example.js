class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div style="width: 333px; box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15); border-radius: 8px; padding: 20px; height: fit-content; margin-bottom: 35px;">
    <img src=${this.image} alt="${this.manufacture}" style="width: 100%; height: 222px; border-radius: 3px;">
    <p style="margin: 16px 0px 8px 0px; font-family: 'Helvetica'; font-style: normal; font-weight: 400;font-size: 14px; line-height: 20px;">${this.manufacture} ${this.model}</p>
    <h5 style="margin-bottom: 8px; font-family: 'Helvetica'; font-style: normal; font-weight: 700; font-size: 16px; line-height: 24px;">${this.rentPerDay} / hari</h5>
    <h6 style="height: 60px; margin-bottom: 16px; font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 20px;">${this.description}</h6>
    <div style="display: flex; ">
        <div style="margin-right: 8px; padding: 0px;"> 
            <i class="bi bi-people" aria-hidden="true" style="font-size:24px;"></i>
        </div> 
        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
        ${this.capacity} Orang
        </p>
    </div>
    <div style="display: flex; ">
        <div style="margin-right: 12px; padding: 2px 0px;"> 
            <i class="bi bi-gear" aria-hidden="true" style="font-size:20px;"></i>
        </div> 
        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
        ${this.transmission}
        </p>
    </div>
    <div style="display: flex;">
        <div style="margin-right: 12px; padding: 2px 0px;"> 
            <i class="bi bi-calendar4" aria-hidden="true" style="font-size:20px;"></i>
        </div> 
        <p style="font-family: 'Helvetica'; font-style: normal; font-weight: 300; font-size: 14px; line-height: 26px;">
        ${this.year}
        </p>
    </div>
    <button style="margin-top:8px; width: 100%; padding: 14px 0px; background: #5CB85F; border-radius: 3px; border: none; color: white; text-align: center; text-decoration: none; font-family: 'Helvetica';
    font-style: normal;
    font-weight: 700;
    font-size: 14px; font-family: 'Helvetica'; line-height: 20px;">
        Pilih Mobil
    </button>
</div>
    `;
  }
}
