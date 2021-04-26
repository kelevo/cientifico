import router from './routes';

// Estara escuchando si se carga la pagina
window.addEventListener('load', router);
window.addEventListener('hashchange', router);