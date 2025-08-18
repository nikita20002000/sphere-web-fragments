import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ElementsWrapper = ({ elements }) => {
    const [selectedElement, setSelectedElement] = useState(null);

    const handleElementClick = (element) => {
        setSelectedElement(element);
    };

    const closeModal = () => {
        setSelectedElement(null);
    };

    return (
        <div className="elements-container">
            <div className="elements-grid">
                {elements.map((element) => (
                    <div 
                        key={element.id} 
                        className="element-card"
                        onClick={() => handleElementClick(element)}
                    >
                        <div className="element-preview">
                            <element.component {...element.props} />
                        </div>
                        <div className="element-info">
                            <div className="element-name">
                                {element.name || element.component.name || 'Component'}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedElement && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h3>{selectedElement.name || selectedElement.component.name || 'Component Details'}</h3>
                            <button className="modal-close" onClick={closeModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="component-preview">
                                <selectedElement.component {...selectedElement.props} />
                            </div>
                            <div className="component-details">
                                <h4>Props</h4>
                                <pre>
                                    {JSON.stringify(selectedElement.props, null, 2)}
                                </pre>

                                <h4>Usage Example</h4>
                                <pre className="code-example">
                                    {`import { ${selectedElement.component.name || 'Component'} } from 'ui-library';

// Example usage
<${selectedElement.component.name || 'Component'} ${Object.entries(selectedElement.props)
    .filter(([key]) => key !== 'children')
    .map(([key, value]) => `${key}=${typeof value === 'string' ? `"${value}"` : `{${JSON.stringify(value)}}`}`)
    .join(' ')}>${selectedElement.props.children ? `\n  ${selectedElement.props.children}\n</${selectedElement.component.name || 'Component'}>` : ' />'}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

ElementsWrapper.propTypes = {
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            component: PropTypes.elementType.isRequired,
            props: PropTypes.object,
            name: PropTypes.string
        })
    ).isRequired
};

export default ElementsWrapper;
