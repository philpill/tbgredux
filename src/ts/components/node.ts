import IComponent from './icomponent';

export default class Node {

    components: IComponent[];

    constructor(components?: IComponent[]) {

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
