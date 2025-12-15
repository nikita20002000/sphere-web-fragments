import buttonsConfig from '../components/ui-components/buttons/buttons.json';
import inputsConfig from '../components/ui-components/inputs/inputs.json';
import checkboxesConfig from '../components/ui-components/checkboxes/checkboxes.json';
import togglesConfig from '../components/ui-components/toggles/toggles.json';
import tablesConfig from '../components/ui-components/tables/tables.json';

import { Button } from '../components/ui-components/buttons/Button';
import { Input } from '../components/ui-components/inputs/Input';
import { Checkbox } from '../components/ui-components/checkboxes/Checkbox';
import { Toggle } from '../components/ui-components/toggles/Toggle';
import { Table } from '../components/ui-components/tables/Table';

const componentsMap = {
    Button,
    Input,
    Checkbox,
    Toggle,
    Table,
};

const createComponentFromJSON = (config) => {
    const Component = componentsMap[config.component] || null;

    if (!Component) {
        console.warn(`Component ${config.component} not found`);
        return null;
    }

    return {
        id: config.id,
        name: config.name,
        component: Component,
        props: config.props
    };
}

// TODO: Поменять иконки бокового меню в соответствии с новыми пунктами
export default {
    buttons: {
        name: buttonsConfig.name,
        elements: buttonsConfig.elements
            .map(el => createComponentFromJSON(el))
            .filter(el => el !== null)
    },
    inputs: {
        name: inputsConfig.name,
        elements: inputsConfig.elements
            .map(el => createComponentFromJSON(el))
            .filter(el => el !== null)
    },
    checkboxes: {
        name: checkboxesConfig.name,
        elements: checkboxesConfig.elements
            .map(el => createComponentFromJSON(el))
            .filter(el => el !== null)
    },
    toggles: {
        name: togglesConfig.name,
        elements: togglesConfig.elements
            .map(el => createComponentFromJSON(el))
            .filter(el => el !== null)
    },
    tables: {
        name: tablesConfig.name,
        elements: tablesConfig.elements
            .map(el => createComponentFromJSON(el))
            .filter(el => el !== null)
    }

};
