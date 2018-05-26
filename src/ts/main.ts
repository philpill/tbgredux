import * as THREE from 'three';
import SystemManager from './managers/system';
import EntityManager from './managers/entity';
import NodeManager from './managers/node';
import ISystem from './systems/isystem';
import IEntity from './entities/ientity';
import Node from './components/node';

export class Main {

    private systemManager: SystemManager;
    private entityManager: EntityManager;
    private nodeManager: NodeManager;

    constructor() {

        this.entityManager = EntityManager.getInstance();
        this.systemManager = SystemManager.getInstance();
        this.nodeManager = NodeManager.getInstance();
    }

    init() {

        this.entityManager.init();
        this.systemManager.init();

        // get all systems
        let systems = this.systemManager.getAll();

        // get all entites
        let entities = this.entityManager.getAll();

        // load entities into systems to get nodes
        let nodes: Node[] = [];
        
        systems.map((system: ISystem) => {

            entities.map((entity: IEntity) => {

                let components = system.getNodesByComponents(entity.components) || [];

                nodes = [...nodes, ...components];

                nodes.map((node: Node) => {
                    
                    

                });
            });
        });
        
        // load nodes
        this.nodeManager.insertNodes(nodes);

        // load nodes into systems

        this.update();
    }

    update(before = 0) {

        let now = performance.now();

        let delta = (now - before)/1000;

        // magic number to prevent massive 
        // delta when tab not active
        delta = Math.min(delta, 0.1); 

        requestAnimationFrame(() => {

            this.systemManager.update(delta);

            this.update(now);
        });
    }
}

let main = new Main();
main.init();
