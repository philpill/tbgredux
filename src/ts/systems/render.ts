import ISystem from './isystem';
import IComponent from '../components/icomponent';
import RenderComponent from '../components/render.ts';
import Node from '../components/node.ts';
import { System as SystemType } from '../enums.ts';

import * as THREE from 'three';

export default class RenderSystem implements ISystem {

    scene;
    renderer;
    camera;

    systemType = SystemType.RENDER;

    constructor() {

    }

    init() {

        console.log('RenderSystem.init()');

        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

        this.camera.position.z = 5;

        this.renderer = new THREE.WebGLRenderer( { antialias: true } );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( this.renderer.domElement );

        this.renderer.render(this.scene, this.camera);
    }

    update(delta: number) {

    }

    getNodesByComponents(components: IComponent[]): Node[] {

        components = components.filter((component: IComponent) => {

            return component instanceof RenderComponent;
        });

        let node = new Node(components);

        return [node];
    }
};
