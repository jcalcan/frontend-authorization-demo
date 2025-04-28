export const BASE_URL = "https://api.nomoreparties.co";

export const register = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ email, password })
  });
  return await (res.ok
    ? res.json()
    : res.json().then((err) => Promise.reject(err)));
};

export const authorize = async (email, password) => {
  const res = await fetch(`${BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  });
  return await (res.ok ? res.json() : Promise.reject(`Error: ${res.status}`));
};
