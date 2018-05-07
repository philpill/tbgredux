import IComponent from './icomponent';
import { Component as ComponentType } from '../enums.ts';

export default class RenderComponent implements IComponent {

    componentType = ComponentType.RENDER;

    constructor() {

    }

    init() {

    }
}
