import { Button } from '../components/ui-components/buttons/Button';

// Import other components as they are created
// For now, we'll use Button as a placeholder for other components

// Helper function to create a component with different props
const createComponent = (Component, id, name, props) => ({
    id,
    name,
    component: Component,
    props
});

export default {
    buttons: {
        name: 'Кнопки',
        elements: [
            createComponent(Button, 'btn-1', 'Primary Button', {
                className: 'primary',
                children: 'Primary Button'
            }),
            createComponent(Button, 'btn-2', 'Secondary Button', {
                className: 'secondary',
                children: 'Secondary Button'
            }),
            createComponent(Button, 'btn-3', 'Success Button', {
                className: 'success',
                children: 'Success Button'
            }),
            createComponent(Button, 'btn-4', 'Danger Button', {
                className: 'danger',
                children: 'Danger Button'
            }),
            createComponent(Button, 'btn-5', 'Warning Button', {
                className: 'warning',
                children: 'Warning Button'
            }),
            createComponent(Button, 'btn-6', 'Info Button', {
                className: 'info',
                children: 'Info Button'
            }),
            createComponent(Button, 'btn-7', 'Light Button', {
                className: 'light',
                children: 'Light Button'
            }),
            createComponent(Button, 'btn-8', 'Dark Button', {
                className: 'dark',
                children: 'Dark Button'
            }),
            createComponent(Button, 'btn-9', 'Small Button', {
                className: 'primary small',
                children: 'Small Button'
            }),
            createComponent(Button, 'btn-10', 'Large Button', {
                className: 'primary large',
                children: 'Large Button'
            }),
            createComponent(Button, 'btn-11', 'Outline Button', {
                className: 'outline',
                children: 'Outline Button'
            }),
            createComponent(Button, 'btn-12', 'Rounded Button', {
                className: 'primary rounded',
                children: 'Rounded Button'
            })
        ]
    },
    inputs: {
        name: 'Поля ввода',
        elements: [
            // Using Button as a placeholder for Input components
            createComponent(Button, 'input-1', 'Text Input', {
                className: 'input-placeholder',
                children: 'Text Input'
            }),
            createComponent(Button, 'input-2', 'Password Input', {
                className: 'input-placeholder',
                children: 'Password Input'
            }),
            createComponent(Button, 'input-3', 'Email Input', {
                className: 'input-placeholder',
                children: 'Email Input'
            }),
            createComponent(Button, 'input-4', 'Number Input', {
                className: 'input-placeholder',
                children: 'Number Input'
            }),
            createComponent(Button, 'input-5', 'Search Input', {
                className: 'input-placeholder',
                children: 'Search Input'
            }),
            createComponent(Button, 'input-6', 'Textarea', {
                className: 'input-placeholder',
                children: 'Textarea'
            })
        ]
    },
    checkboxes: {
        name: 'Чекбоксы и радио',
        elements: [
            createComponent(Button, 'checkbox-1', 'Checkbox', {
                className: 'checkbox-placeholder',
                children: 'Checkbox'
            }),
            createComponent(Button, 'checkbox-2', 'Radio Button', {
                className: 'radio-placeholder',
                children: 'Radio Button'
            }),
            createComponent(Button, 'checkbox-3', 'Toggle Switch', {
                className: 'toggle-placeholder',
                children: 'Toggle Switch'
            })
        ]
    },
    selects: {
        name: 'Выпадающие списки',
        elements: [
            createComponent(Button, 'select-1', 'Basic Select', {
                className: 'select-placeholder',
                children: 'Basic Select'
            }),
            createComponent(Button, 'select-2', 'Multi Select', {
                className: 'select-placeholder',
                children: 'Multi Select'
            }),
            createComponent(Button, 'select-3', 'Searchable Select', {
                className: 'select-placeholder',
                children: 'Searchable Select'
            })
        ]
    },
    cards: {
        name: 'Карточки',
        elements: [
            createComponent(Button, 'card-1', 'Basic Card', {
                className: 'card-placeholder',
                children: 'Basic Card'
            }),
            createComponent(Button, 'card-2', 'Image Card', {
                className: 'card-placeholder',
                children: 'Image Card'
            }),
            createComponent(Button, 'card-3', 'Action Card', {
                className: 'card-placeholder',
                children: 'Action Card'
            })
        ]
    },

    modals: {
        name: 'Модальные окна',
        elements: [
            createComponent(Button, 'modal-1', 'Basic Modal', {
                className: 'modal-placeholder',
                children: 'Basic Modal'
            }),
            createComponent(Button, 'modal-2', 'Confirmation Modal', {
                className: 'modal-placeholder',
                children: 'Confirmation Modal'
            }),
            createComponent(Button, 'modal-3', 'Drawer', {
                className: 'modal-placeholder',
                children: 'Drawer'
            })
        ]
    },
    tables: {
        name: 'Таблицы',
        elements: [
            createComponent(Button, 'table-1', 'Basic Table', {
                className: 'table-placeholder',
                children: 'Basic Table'
            }),
            createComponent(Button, 'table-2', 'Data Table', {
                className: 'table-placeholder',
                children: 'Data Table'
            }),
            createComponent(Button, 'table-3', 'Grid', {
                className: 'table-placeholder',
                children: 'Grid'
            })
        ]
    },
    typography: {
        name: 'Типография',
        elements: [
            createComponent(Button, 'typo-1', 'Heading', {
                className: 'typo-placeholder',
                children: 'Heading'
            }),
            createComponent(Button, 'typo-2', 'Paragraph', {
                className: 'typo-placeholder',
                children: 'Paragraph'
            }),
            createComponent(Button, 'typo-3', 'Text', {
                className: 'typo-placeholder',
                children: 'Text'
            }),
            createComponent(Button, 'typo-4', 'Link', {
                className: 'typo-placeholder',
                children: 'Link'
            })
        ]
    }
};
