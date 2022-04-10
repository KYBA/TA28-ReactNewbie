export const apiBaseUrl = 'https://ta28-bootback.azurewebsites.net';
export const baseURL = process.env.NODE_ENV === 'production' ? apiBaseUrl : '/api';