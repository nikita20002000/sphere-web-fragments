import buttonsConfig from '../components/ui-components/buttons/buttons.json';
import { Button } from '../components/ui-components/buttons/Button';

const componentsMap = {
    Button
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
        name: 'Inputs',
    },
    checkboxes: {
        name: 'Checkboxes',
    },
    switchers: {
        name: 'Switchers',
    },
    selects: {
        name: 'Selects',
    },
    tables: {
        name: 'Tables',
    }

};
