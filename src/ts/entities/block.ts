import IEntity from './ientity';
import IComponent from '../components/icomponent';
import RenderComponent from '../components/render.ts';

export default class BlockEntity implements IEntity {

    components: IComponent[];

    constructor() {

        this.components = [];

        let render = new RenderComponent();

        this.components.push(render);
    }

    init() {

    }
}
