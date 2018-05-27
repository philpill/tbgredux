import IEntity from './ientity';
import { IComponent } from '../components/icomponent';
import RenderComponent from '../components/render';
import InputComponent from '../components/input';

export default class BlockEntity implements IEntity {

    components: IComponent[];

    constructor() {

        let render = new RenderComponent();
        let input = new InputComponent();

        this.components = [render, input];
    }

    init() {

    }
}
