import IComponent from '../components/icomponent';

export default interface IEntity {

    init();
    components: IComponent[];
}
