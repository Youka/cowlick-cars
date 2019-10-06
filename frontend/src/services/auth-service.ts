// Service access point
const url = "/auth-service";

// Service object
export default {
    async login(username: string, password: string) {
        const response =
            await fetch(url + "/login", {method: "POST", body: new URLSearchParams({username, password})});
        return response.redirected ? !response.url.match("\\?error$") : true;
    },
    async logout() {
        await fetch(url + "/logout", {method: "POST", redirect: "manual"});
    },
    async session() {
        const response = await fetch(url + "/session");
        return {
            status: response.status,
            data: response.ok ? await response.json() : null
        };
    }
};