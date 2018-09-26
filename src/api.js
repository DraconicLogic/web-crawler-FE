import axios from 'axios';
const DB_URL = '';

export const getReport = (url) => axios.get(`/report?url=${url}`)

export const downloadReport = (reportId) => axios.get(`/download?id=${reportId}`)
