import conf from "../config/conf";
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    /* Creating account */
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                ///call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }

        } catch (error) {
            throw error;

        }
    }

    /* Login function */
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);

        } catch (error) {
            throw error;
        }
    }

    /* Getting current user info */
    async getCurrentUser() {
        try {
            return await this.account.get();

        } catch (error) {
            throw error;
        }
        return null;
    }


    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default AuthService;