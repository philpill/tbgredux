import ISystem from '../systems/isystem';
import IManager from '../managers/imanager';
import NodeManager from '../managers/node';
import RenderSystem from '../systems/render';

export default class SystemManager implements IManager {

    private systems: ISystem[];
    private nodeManager: NodeManager;

    private static instance: SystemManager;

    private constructor() {
        
        this.systems = [];
        
        this.register(new RenderSystem());

        this.nodeManager = NodeManager.getInstance();
    }

    static getInstance() {

        this.instance = this.instance || new SystemManager();

        return this.instance;
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


            let nodes = this.nodeManager.getNodesByType(system.systemType);

            system.update(delta, nodes);
        });
    }

    getAll() {

        return this.systems;
    }
}
