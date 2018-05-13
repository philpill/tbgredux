import IManager from './imanager';
import IEntity from '../entities/ientity';
import Node from '../components/node';
import { System as SystemType } from '../enums';

export interface INodes {
        [key: string] : Node[];
} 

export default class NodeManager implements IManager {

    nodes: INodes;

    constructor() {

        this.nodes = {};
    }

    init() {

    }

    update(time: number) {

    }

    insertNode(node: Node) {
        
        this.nodes[node.system] = [node, ...this.nodes[node.system]];
        
    }

    insertNodes(nodes: Node[]) {

        nodes.map(this.insertNode.bind(this));
    }

    getNodesByType(systemType: SystemType) {

        return [...this.nodes[systemType]];
    }
}
