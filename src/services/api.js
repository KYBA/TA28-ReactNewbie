export const apiBaseUrl = 'https://chario-web.azurewebsites.net';
export const baseURL = process.env.NODE_ENV === 'production' ? apiBaseUrl : '/api';