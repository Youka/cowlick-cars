import ServiceBase from "./service-base";

class AuthService extends ServiceBase {
    constructor() { super("/auth-service"); }

    public async session() {
        const response = await this.fetch("/info");
        return {
            status: response.status,
            data: response.ok ? await response.json() : null
        };
    }
}

export default new AuthService();