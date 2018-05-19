import IEntity from '../entities/ientity';
import IManager from './imanager';
import Block from '../entities/block.ts';

export default class EntityManager implements IManager {

    private entities: IEntity[];

    private static instance: EntityManager;

    private constructor() {

        this.entities = [];
    }

    static getInstance() {

        this.instance = this.instance || new EntityManager();

        return this.instance;
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
