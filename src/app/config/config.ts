export class Config {
    private static  loginMethod = '/login';
    
    static getLoginMethod(): string {
        return this.loginMethod;
    }
}