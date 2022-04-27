export const setToken = token => localStorage.setItem("keep-moment-token", token)

export const getToken = () => localStorage.getItem("keep-moment-token");

export const removeToken = () => localStorage.removeItem("keep-moment-token");

