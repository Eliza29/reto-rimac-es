export const getData = async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error al obtener los datos: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('error:', error.message);

    }
};