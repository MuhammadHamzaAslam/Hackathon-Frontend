// import jwtDecode from "jwt-decode";

export function getUserToken() {
    const userToken = sessionStorage.getItem("token");
    if (!userToken) return null;
    return userToken
}

export function getCurrentUser() {
    const user = sessionStorage.getItem("user"); // Retrieve from sessionStorage
    return user ? JSON.parse(user) : null; // Parse JSON only if user exists
}


export async function LogoutUser() {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    window.location.reload()
}


