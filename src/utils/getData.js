const API = 'https://rickandmortyapi.com/api/character/';

const getData = async (id) => {
    // Si enviamos un id nos regresa API + id pero si no solo nos regresa API
    const apiURL = id ? `${API}${id}` : API;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Fetch Error', error);
    };
    // Llamado al fetch
}

export default getData;