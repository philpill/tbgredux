import IComponent from '../components/icomponent';
import Node from '../components/node';
import { System as SystemType } from '../enums.ts';

export default interface ISystem {

    systemType: SystemType;
    init();
    update(delta: number);
    getNodesByComponents(components: IComponent[]): Node[];
}
