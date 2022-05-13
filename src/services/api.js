import { URL, getToken } from "./localStorage.js";

export const createUser = (endpoint, items) => {
  return fetch(`${URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: items.name,
      email: items.email,
      password: items.password,
      role: items.role,
      restaurant: "Burguer Queen",
    }),
  });
};

export const loginUser = (endpoint, items) => {
  return fetch(`${URL}${endpoint}` , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: items.email,
      password: items.password,
    })
  });
};

export const getProducts = (endpoint) => {
  return fetch(`${URL}${endpoint}` , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken()
    },
  });
}

export const sendOrder = (endpoint, orderInfo, addItem) => {
  return fetch(`${URL}${endpoint}` , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getToken()
    },
    body: JSON.stringify({
      client: orderInfo.client,
      table: orderInfo.table,
      products: addItem,  
    })
  })
}