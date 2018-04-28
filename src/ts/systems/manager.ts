import { ISystem } from './isystem';

export default class SystemManager {

    systems: ISystem[];

    constructor() {
        
        this.systems = [];
    }

    register(system: ISystem) {

        this.systems.push(system);
    }

    init() {

        this.systems.map((system: ISystem) => {

            system.init();
        });
    }

    update() {
        
        this.systems.map((system: ISystem) => {
            
            system.update();
        });
    }
}
