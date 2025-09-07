export const filterElements = (elements, query) => {
    if (!query) return elements;

    const lowerQuery = query.toLowerCase();

    return elements.filter(element => {
        // Search by component name
        if (element.name && element.name.toLowerCase().includes(lowerQuery)) return true;

        // Search by component (function / class)
        const componentName = element.component?.displayName || 
                             element.component?.name || 
                             'Unknown';
        if (componentName.toLowerCase().includes(lowerQuery)) return true;

        // Search by props values
        return Object.values(element.props || {}).some(value =>
            String(value).toLowerCase().includes(lowerQuery)
        );
    });
};
