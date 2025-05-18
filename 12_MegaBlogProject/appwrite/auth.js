import config from '../config/config';
import {Client, Account, ID} from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.APPWRITE_URL)
            .setProject(config.APPWRITE_PROJECT_ID);

        this.account = new Account(this.client);
    }

    async createAccount({name, email, password}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount) {
                //login user
                return this.loginUser({email, password})
            } else {
                return userAccount; 
            }
        } catch (error) {
            throw error;
        }
    }

    async loginUser({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }

    async logoutUser() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

    
}

const authService = new AuthService();

export default authService;