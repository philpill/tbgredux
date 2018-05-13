import IComponent from './icomponent';
import { Component as ComponentType } from '../enums.ts';

export default class InputComponent implements IComponent {

    componentType = ComponentType.INPUT;

    constructor() {

    }

    init() {

    }
}
