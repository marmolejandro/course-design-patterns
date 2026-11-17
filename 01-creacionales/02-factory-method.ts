/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
    prepare(): void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing %cChicken Hamburger', COLORS.red);
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing %cBeef Hamburger', COLORS.brown);
    }
}
class BeanHamburger implements Hamburger {
    prepare(): void {
        console.log('Preparing %cBean Hamburger', COLORS.green);
    }
}

// Este es la factoria abstracta que define el método de creación de hamburguesas y el flujo de pedido de un restaurante
abstract class Restaurant {
    protected abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger = this.createHamburger();
        hamburger.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeefHamburger();
    }
}

class BeanRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeanHamburger();
    }
}


function main(): void {
    let restaurant: Restaurant;

    const burgerType = prompt("Which burger do you want? (chicken/beef/bean)")?.toLowerCase();

    switch (burgerType) {
        case "chicken":
            restaurant = new ChickenRestaurant();
            break;
        case "beef":
            restaurant = new BeefRestaurant();
            break;
        case "bean":
            restaurant = new BeanRestaurant();
            break;
        default:
            console.log("Invalid burger type");
            return;
    }

    restaurant.orderHamburger();
}

main();