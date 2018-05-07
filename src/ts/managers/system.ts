import ISystem from '../systems/isystem';
import IManager from '../managers/imanager';
import NodeManager from '../managers/node.ts';
import RenderSystem from '../systems/render.ts';

export default class SystemManager implements IManager {

    private systems: ISystem[];
    private nodeManager: NodeManager;

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

    update(delta: number) {
        
        this.systems.map((system: ISystem) => {
            
            system.update(delta);
        });
    }

    getAll() {

        return this.systems;
    }
}
