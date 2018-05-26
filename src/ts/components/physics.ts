import { IComponent } from './icomponent';
import { Component as ComponentType }  from '../enums';

export default class PhysicsComponent implements IComponent {

    componentType = ComponentType.PHYSICS;

    constructor() {

    }

    init() {

    }
}
