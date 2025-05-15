function formatString(input: string, toUpper?: boolean) {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

class vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`${this.make} ${this.year}`);
  }
}

class car extends vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`${this.model}`);
  }
}

const myCar = new car("Toyota", 2020, "Corolla");

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    throw new Error("type not matched");
  }
}

interface product {
  name: string;
  price: number;
}

function findHighestPrice(products: product[]): product | null {
  if (products.length === 0) {
    return null;
  }
  let highestPriceProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > highestPriceProduct.price) {
      highestPriceProduct = products[i];
    }
  }

  return highestPriceProduct;
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  switch (day) {
    case Day.Monday:
      return "Weekday";
    case Day.Tuesday:
      return "Weekday";
    case Day.Wednesday:
      return "Weekday";
    case Day.Thursday:
      return "Weekday";
    case Day.Friday:
      return "Weekday";
    case Day.Saturday:
      return "Weekend";
    case Day.Sunday:
      return "Weekend";
    default:
      return "Invalid day";
  }
}

async function squareAsync(num: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if (num < 0) {
      reject("Error: Negative number not allowed");
    } else {
      setTimeout(() => {
        resolve(num * num);
      }, 1000);
    }
  });
}
