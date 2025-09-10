import buttonsConfig from '../components/ui-components/buttons/buttons.json';
import { Button } from '../components/ui-components/buttons/Button';
import inputsConfig from '../components/ui-components/inputs/inputs.json';
import { Input } from '../components/ui-components/inputs/Input';

const componentsMap = {
    Button,
    Input,
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
        name: 'Checkboxes',
    },
    toggles: {
        name: 'Toggles',
    },
    tables: {
        name: 'Tables',
    }

};
