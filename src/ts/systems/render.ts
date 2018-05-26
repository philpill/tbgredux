import ISystem from './isystem';
import { IComponent, IRenderComponent } from '../components/icomponent';
import RenderComponent from '../components/render';
import Node from '../components/node';
import { Component as ComponentType, System as SystemType } from '../enums';

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

    update(time: number, nodes: Node[]) {

        nodes.map((node: Node) => {

            let component = node.components[ComponentType.RENDER][0] as IRenderComponent;

            let id = component.threeId;

            if (!id) {
                var geometry = new THREE.BoxGeometry( 1, 1, 1 );
                var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
                var cube = new THREE.Mesh( geometry, material );

                component.threeId = cube.id;
                component.threeObj = cube;

                this.scene.add(cube);
            }

        });
    }

    getNodesByComponents(components: IComponent[]): Node[] {

        components = components.filter((component: IComponent) => {
            return component.componentType === ComponentType.RENDER || component.componentType === ComponentType.PHYSICS;
        });

        let node = new Node(this.systemType, components);

        return [node];
    }
};
