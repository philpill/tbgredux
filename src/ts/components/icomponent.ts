import { Component as ComponentType } from '../enums';

interface IRenderComponent extends IComponent {

    threeId: number;
    threeObj: any;
}

interface IComponent {
    
    componentType: ComponentType;
    init();
}

export { IComponent, IRenderComponent };
