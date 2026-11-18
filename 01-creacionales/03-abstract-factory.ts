/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from "../helpers/colors.ts";

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
  prepare(): void;
}

interface Drink {
  serve(): void;
}

class ChickenBurger implements Hamburger {
  prepare(): void {
    console.log('%cPreparando hamburguesa de pollo...', COLORS.yellow);
  }
}

class BeefBurger implements Hamburger {
  prepare(): void {
    console.log('%cPreparando hamburguesa de res...', COLORS.red);
  }
}

class Water implements Drink {
  serve(): void {
    console.log('%cSirviendo agua...', COLORS.blue);
  }
}

class Soda implements Drink {
  serve(): void {
    console.log('%cSirviendo refresco...', COLORS.brown);
  }
}


interface RestaurantFactory {
  createHamburger(): Hamburger;
  createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new BeefBurger();
  }

  createDrink(): Drink {
    return new Soda();
  }
}

class GourmetRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new ChickenBurger();
  }

  createDrink(): Drink {
    return new Water();
  }
}

function main(factory: RestaurantFactory) {
  const hamburger = factory.createHamburger();
  const drink = factory.createDrink();

  hamburger.prepare();
  drink.serve();
}


main(new FastFoodRestaurantFactory());
// main(new GourmetRestaurantFactory());