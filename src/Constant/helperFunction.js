// import jwtDecode from "jwt-decode";

export function getUserToken() {
  const userToken = sessionStorage.getItem("token");
  if (!userToken) return null;
  return userToken;
}

export function getCurrentUser() {
  const user = sessionStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

export async function LogoutUser() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
  window.location.reload();
}
