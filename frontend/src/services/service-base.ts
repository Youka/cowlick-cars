export default abstract class ServiceBase {
    // Save base url for service requests
    constructor(private readonly baseUrl: string) { }

    // Fetch helper
    protected fetch(url: string, options: RequestInit = {}) {
        return fetch(
            this.baseUrl + url,
            {
                ...options,
                cache: "no-cache",
                credentials: "include"
            }
        );
    }

    // Login interface - available by default
    public async login(username: string, password: string) {
        const response = await this.fetch(
            "/login",
            {
                method: "POST",
                body: new URLSearchParams({ username, password })
            }
        );
        return response.redirected ?
            !response.url.match("\\?error$") :
            response.ok;
    }

    // Logout interface - available by default
    public async logout() {
        await this.fetch("/logout", { method: "POST" });
    }
}