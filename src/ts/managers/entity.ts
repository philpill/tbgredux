import IEntity from '../entities/ientity';
import IManager from './imanager';
import Block from '../entities/block.ts';

export default class EntityManager implements IManager {

    private entities: IEntity[];

    constructor() {

        this.entities = [];
    }

    init() {

        this.entities.push(new Block());
    }

    update(delta: number) {

    }

    getAll() {
        return this.entities;
    }
}
