import IComponent from './icomponent';
import { System } from '../enums';

export default class Node {

    components: IComponent[];
    system: System;

    constructor(system: System, components?: IComponent[]) {

        this.system = system;

        this.components = [];

        this.addComponents(components);
    }

    addComponent(component: IComponent) {

        this.components.push(component);
    }

    addComponents(components: IComponent[]) {

        components.map(this.addComponent.bind(this));
    }
}
