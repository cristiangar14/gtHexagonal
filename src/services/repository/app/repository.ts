import { ForMonitoring } from "../ports/drivens";
import { FormManagingUser } from "../ports/drivers";
import { ExternalUser, RepoUser, User } from "./schemas";

export class Repository implements FormManagingUser {
    private userList: RepoUser[] = [];
    
    constructor(
        private readonly logger: ForMonitoring
    ){}
    
    async getUser(email: string): Promise<ExternalUser> {
        const user = this.userList.find((user) => user.email === email);

        if (!user) {
            this.logger.log('GetUser', 'Usernot Found');
            throw new Error('User not found');
        }
        return {
            id: user.id,
            name: user.name,
            email: user.email

        };
    }

    async createUser(user: User): Promise<ExternalUser> {
        const userExist = this.userList.find((user) => user.email === user.email);
        if (userExist) {
            this.logger.log('CreatedUser', 'User already exists');
            throw new Error("User already exist");
            
        }

        const newUser = {
            ...user,
            id: String(this.userList.length + 1),
        }

        this.userList.push(newUser);

        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        };
    }
}