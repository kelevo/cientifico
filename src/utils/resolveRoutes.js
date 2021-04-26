const resolveRoutes = (route) => {
    // Ruta obtenida por la funcion anterior
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id';
        return validRoute
    }
    return `/${route}`; // /about
}

export default resolveRoutes;