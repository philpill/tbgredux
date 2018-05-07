import * as THREE from 'three';
import SystemManager from './managers/system.ts';
import EntityManager from './managers/entity.ts';
import ISystem from './systems/isystem';
import IEntity from './entities/ientity';

export class Main {

    private systemManager: SystemManager;
    private entityManager: EntityManager;

    constructor() {

        this.entityManager = new EntityManager();
        this.systemManager = new SystemManager();

    }

    init() {

        this.entityManager.init();
        this.systemManager.init();

        // get all systems
        let systems = this.systemManager.getAll();

        // get all entites
        let entities = this.entityManager.getAll();

        // load entities into systems to get nodes
        let nodes = systems.map((system: ISystem) => {

            return entities.map((entity: IEntity) => {

                return system.getNodesByComponents(entity.components);
            });
        });

        // load nodes into systems

        nodes = [].concat.apply([], nodes);

        console.log(nodes);

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
