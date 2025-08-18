export const filterElements = (elements, query) => {
    if (!query) return elements;

    const lowerQuery = query.toLowerCase();

    return elements.filter(element => {
        // Поиск по имени компонента (если есть)
        if (element.name && element.name.toLowerCase().includes(lowerQuery)) return true;

        // Поиск по компоненту (имя функции/класса)
        const componentName = element.component?.displayName || 
                             element.component?.name || 
                             'Unknown';
        if (componentName.toLowerCase().includes(lowerQuery)) return true;

        // Поиск по значениям пропсов
        return Object.values(element.props || {}).some(value =>
            String(value).toLowerCase().includes(lowerQuery)
        );
    });
};
