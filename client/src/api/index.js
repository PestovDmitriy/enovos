import fetch from 'isomorphic-fetch';

export const statusDateGET = async (date) => {
    const response = await fetch(`http://localhost:10010/v1/status/${date}`);
    return await response.json();
}

export const statusGET = async () => {
    const response = await fetch('http://localhost:10010/v1/status');
    return await response.json();
}