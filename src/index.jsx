// Импорт React и ReactDOM
import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './css/styles.css'
export {  Button } from './components/ui-components/buttons/Button';

// Импорт корневого компонента приложения
import App from './app';


// Рендеринг приложения в корневой элемент
const app = ReactDOM.createRoot(document.getElementById('App'))

app.render(
    <StrictMode>
        <App />
    </StrictMode>
)
