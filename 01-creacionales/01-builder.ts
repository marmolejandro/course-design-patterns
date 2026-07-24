/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from '../helpers/colors.ts';

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string = 'gpu - not defined';

    displayConfiguration(): void {
        console.log(`Configuración de la computadora: 
        CPU: ${this.cpu}
        RAM: ${this.ram}
        Almacenamiento: ${this.storage}
        GPU: ${this.gpu}
        `);
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram: string): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage: string): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu: string): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build(): Computer {
        return this.computer;
    }
}

function main(){
    const computer: Computer = new ComputerBuilder()
        .setCPU('Intel i3')
        .setRAM('12GB')
        .setStorage('512GB SSD')
        .build();

    console.log('%cConfiguración de la computadora construida:', COLORS.blue);
    computer.displayConfiguration();

    const gamingComputer: Computer = new ComputerBuilder()
        .setCPU('Intel i9')
        .setRAM('32GB')
        .setStorage('1TB SSD')
        .setGPU('NVIDIA RTX 4090')
        .build();

    console.log('%cConfiguración de la gaming computadora:', COLORS.blue);
    gamingComputer.displayConfiguration();
}

main();
