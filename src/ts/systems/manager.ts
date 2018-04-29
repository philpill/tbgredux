import ISystem from './isystem';

import RenderSystem from './render.ts';

export default class SystemManager {

    systems: ISystem[];

    constructor() {
        
        this.systems = [];
        this.register(new RenderSystem());
    }

    register(system: ISystem) {

        this.systems.push(system);
    }

    init() {

        console.log('SystemManager.init()');

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
