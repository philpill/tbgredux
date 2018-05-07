import IComponent from './icomponent';
import { Component as ComponentType } from '../enums';
export default class UserComponent implements IComponent {

    componentType = ComponentType.USER;

    constructor() {

    }

    init() {

    }
}
