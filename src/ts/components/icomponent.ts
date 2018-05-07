import { Component as ComponentType } from '../enums';

export default interface IComponent {
    
    componentType: ComponentType;
    init();
}
