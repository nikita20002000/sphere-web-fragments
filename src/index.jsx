// Импорт React и ReactDOM
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
export {  Button } from './components/ui-components/buttons/Button';
export {  Input } from './components/ui-components/inputs/Input';

// Импорт корневого компонента приложения
import App from './app';


// Рендеринг приложения в корневой элемент
const app = ReactDOM.createRoot(document.getElementById('App'))

app.render(
    <StrictMode>
        <App />
    </StrictMode>
)
