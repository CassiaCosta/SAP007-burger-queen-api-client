const BASE_URL = "https://lab-api-bq.herokuapp.com";

export const createUser = (endpoint, values) => {
  return fetch(`${BASE_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      password: values.password,
      role: values.role,
      restaurant: 'Burguer Queen',
    })
  },
  );
};
