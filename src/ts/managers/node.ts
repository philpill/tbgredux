import IManager from './imanager';
import IEntity from '../entities/ientity';
import Node from '../components/node';
import { System as SystemType } from '../enums';

export interface INodes {
        [key: string] : Node[];
} 

export default class NodeManager implements IManager {

    nodes: INodes;
    private static instance: NodeManager;

    private constructor() {

        this.nodes = {};
    }

    static getInstance() {

        this.instance = this.instance || new NodeManager();

        return this.instance;
    }

    init() {

    }

    update(time: number) {

    }

    insertNode(node: Node) {

        let nodes = this.nodes[node.system] || [];

        this.nodes[node.system] = [node, ...nodes];
    }

    insertNodes(nodes: Node[]) {

        nodes.map(this.insertNode.bind(this));
    }

    getNodesByType(systemType: SystemType) {

        return [...this.nodes[systemType]];
    }
}
