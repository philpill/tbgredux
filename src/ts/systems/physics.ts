import ISystem from './isystem';
import { IComponent } from '../components/icomponent';
import Node from '../components/node';
import { System as SystemType } from '../enums.ts';

export default class PhysicsSystem implements ISystem  {

    systemType = SystemType.PHYSICS;

    constructor() {

    }

    init() {

    }

    update(delta: number) {

    }

    getNodesByComponents(components: IComponent[]): Node[] {

        return [];

    }
}
