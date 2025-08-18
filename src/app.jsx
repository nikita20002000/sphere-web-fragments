// import React from "react";
// import ReactDOM from 'react-dom/client';
//
// import ChangeThemeButton from './components/page/change-theme-button';
// import Header from './components/page/header';
// import Menu from './components/page/menu';
// import ElementsWrapper from "./components/page/ui-elements-wrapper";
//
//
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ChangeThemeButton/>
//                 <Header />
//                 <Menu />
//                 <ElementsWrapper/>
//             </div>
//
//         )
//     }
// }
//
//
// export default App;

import React, { useState } from 'react';
import Menu from './components/page/menu';
import ElementsWrapper from './components/page/ui-elements-wrapper';
import Header from './components/page/header';
import { filterElements } from './utils/filterElements';
import categories from './data/categories';
import './styles/app.css';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('buttons');
    const [searchQuery, setSearchQuery] = useState('');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    // Get elements of the current category
    const currentCategory = categories[selectedCategory]?.elements || [];

    // Filter elements based on search query
    const filteredElements = filterElements(currentCategory, searchQuery);

    const toggleSidebar = () => {
        setSidebarCollapsed(!sidebarCollapsed);
    };

    return (
        <div className="app-container">
            <Header 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
            />

            <div className="main-content">
                <Menu
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelect={setSelectedCategory}
                    collapsed={sidebarCollapsed}
                    onToggleCollapse={toggleSidebar}
                />

                <div className={`content ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
                    <div className="category-header">
                        <h1>{categories[selectedCategory]?.name || 'UI Components'}</h1>
                        <p className="component-count">
                            {filteredElements.length} component{filteredElements.length !== 1 ? 's' : ''}
                            {searchQuery && ` matching "${searchQuery}"`}
                        </p>
                    </div>

                    <ElementsWrapper elements={filteredElements} />
                </div>
            </div>
        </div>
    );
};

export default App;
