import { IRenderComponent } from './icomponent';
import { Component as ComponentType } from '../enums';

export default class RenderComponent implements IRenderComponent {

    componentType = ComponentType.RENDER;

    threeId: number;
    threeObj: THREE.Object3D;

    constructor() {

    }

    init() {

    }
}
