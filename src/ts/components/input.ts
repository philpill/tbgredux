import { IComponent } from './icomponent';
import { Component as ComponentType } from '../enums';

export default class InputComponent implements IComponent {

    componentType = ComponentType.INPUT;

    constructor() {

    }

    init() {

    }
}
