// import React from 'react';
//
// class Menu extends React.Component {
//     render() {
//         return (
//             <div id="openMenuButton"
//                  data-toggle-element="offcanvas"
//                  role="button"
//                  href="#exampleOffcanvas">
//
//                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
//                      className="bi bi-list" viewBox="0 0 16 16">
//                     <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
//                 </svg>
//             </div>
//         )
//     }
// }
//
// export default Menu;

import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ categories = {}, selectedCategory, onSelect, collapsed, onToggleCollapse }) => {
    return (
        <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
            <button className="sidebar-toggle" onClick={onToggleCollapse}>
                {collapsed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="13 17 18 12 13 7"></polyline>
                        <polyline points="6 17 11 12 6 7"></polyline>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="11 17 6 12 11 7"></polyline>
                        <polyline points="18 17 13 12 18 7"></polyline>
                    </svg>
                )}
            </button>

            <div className="sidebar-header">
                <h2>UI Components</h2>
            </div>

            <div className="sidebar-content">
                <div className="categories-list">
                    {Object.entries(categories).map(([key, category]) => (
                        <div 
                            key={key}
                            className={`category-item ${selectedCategory === key ? 'active' : ''}`}
                            onClick={() => onSelect(key)}
                        >
                            <div className="category-icon">
                                {getCategoryIcon(key)}
                            </div>
                            {!collapsed && (
                                <>
                                    <div className="category-name">
                                        {category.name}
                                    </div>
                                    <div className="category-count">
                                        {category.elements?.length || 0}
                                    </div>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Helper function to get icon for category
const getCategoryIcon = (categoryKey) => {
    const icons = {
        buttons: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="8" width="18" height="8" rx="2" ry="2"></rect>
            </svg>
        ),
        inputs: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="8" width="18" height="8" rx="2" ry="2"></rect>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
        ),
        checkboxes: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <polyline points="9 11 12 14 22 4"></polyline>
            </svg>
        ),
        // Add more icons for other categories
    };

    return icons[categoryKey] || (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        </svg>
    );
};

// Добавим проверку типов
Menu.propTypes = {
    categories: PropTypes.object.isRequired,
    selectedCategory: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    collapsed: PropTypes.bool,
    onToggleCollapse: PropTypes.func
};

// Значения по умолчанию
Menu.defaultProps = {
    selectedCategory: '',
    collapsed: false,
    onToggleCollapse: () => {}
};

export default Menu;
