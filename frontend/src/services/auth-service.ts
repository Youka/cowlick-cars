// Service access point
const url = "/auth-service";

// Service object
export default {
    login: async (username: string, password: string) =>
        fetch(url + "/login", {method: "POST", body: new URLSearchParams({username, password}), redirect: "manual"}),
    logout: async () =>
        fetch(url + "/logout", {method: "POST", redirect: "manual"}),
    session: async () =>
        fetch(url + "/session")
};