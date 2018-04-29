import * as THREE from 'three';

import SystemManager from './systems/manager.ts';

export class Main {

    systemManager: SystemManager;


    constructor() {

        this.loadSystems();
    }

    loadSystems() {
        
        this.systemManager = new SystemManager();
    }
    
    init() {

        this.systemManager.init();
    }

    update() {

        this.systemManager.update();
    }
}

let main = new Main();
main.init();
