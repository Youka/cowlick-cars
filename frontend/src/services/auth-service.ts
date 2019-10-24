import ServiceBase from "./service-base";

class AuthService extends ServiceBase {
    constructor() { super("/auth-service"); }

    public async info() {
        const response = await this.fetch("/info");
        return {
            status: response.status,
            data: response.ok ? await response.json() : undefined
        };
    }
}

export default new AuthService();