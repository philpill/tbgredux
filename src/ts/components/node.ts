import IComponent from './icomponent';
import { System } from '../enums';

export interface IComponents {
    [key: string]: IComponent[];
}

export default class Node {

    components: IComponents;
    system: System;

    constructor(system: System, components?: IComponent[]) {

        this.system = system;

        this.components = {};

        this.addComponents(components);
    }

    addComponent(component: IComponent) {

        this.components[component.componentType] = [component, ...this.components[component.componentType]];
    }

    addComponents(components: IComponent[]) {

        components.map(this.addComponent.bind(this));
    }
}
