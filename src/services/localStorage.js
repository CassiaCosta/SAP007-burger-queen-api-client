export const URL = 'http://lab-api-bq.herokuapp.com/';

export const createTokenAndRole = (token, role) => {
  localStorage.setItem('token', token);
  localStorage.setItem('role', role);
}

export const getToken = () => localStorage.getItem('token');
export const getRole = () => localStorage.getItem('role');
