import { IComponent } from '../components/icomponent';
import Node from '../components/node';
import { System as SystemType } from '../enums';

export default interface ISystem {

    systemType: SystemType;
    init();
    update(delta: number, nodes: Node[]);
    getNodesByComponents(components: IComponent[]): Node[];
}
