// Service access point
const url = "/auth-service";

// Service object
export default {
    async login(username: string, password: string) {
        const response = await fetch(
            url + "/login",
            {
                method: "POST",
                body: new URLSearchParams({ username, password }),
                credentials: "include"
            }
        );
        return response.redirected ? !response.url.match("\\?error$") : response.ok;
    },
    async logout() {
        await fetch(
            url + "/logout",
            {
                method: "POST",
                credentials: "include"
            }
        );
    },
    async session() {
        const response = await fetch(
            url + "/info",
            {
                method: "GET",
                cache: "no-cache",
                credentials: "include"
            }
        );
        return {
            status: response.status,
            data: response.ok ? await response.json() : null
        };
    }
};