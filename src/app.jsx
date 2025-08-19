import React, { useState } from 'react';
import { Header, Sidebar, ElementsWrapper } from './components';
import { filterElements } from './utils/filterElements';
import categories from './data/categories';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
    const [selectedCategory, setSelectedCategory] = useState('buttons');
    const [searchQuery, setSearchQuery] = useState('');

    // Get elements of the current category
    let currentCategory = [];

    // If search is selected, show all elements from all categories
    if (selectedCategory === 'search') {
        Object.values(categories).forEach(category => {
            if (category.elements) {
                currentCategory = [...currentCategory, ...category.elements];
            }
        });
    } else {
        currentCategory = categories[selectedCategory]?.elements || [];
    }

    // Filter elements based on search query
    const filteredElements = filterElements(currentCategory, searchQuery);

    return (
        <ThemeProvider>
            <div className="app-container">
                <Header 
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />

                <div className="main-content">
                    <Sidebar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelect={setSelectedCategory}
                    />

                    <div className="content">
                        <div className="category-header">
                            <h1>{selectedCategory === 'search' ? 'Search Results' : categories[selectedCategory]?.name || 'UI Components'}</h1>
                            <p className="component-count">
                                {filteredElements.length} component{filteredElements.length !== 1 ? 's' : ''}
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>
                        </div>

                        <ElementsWrapper elements={filteredElements} />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;
