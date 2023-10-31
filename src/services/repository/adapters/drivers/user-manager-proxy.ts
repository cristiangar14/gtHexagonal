import { Repository } from "../../app/repository";
import { ExternalUser, User } from "../../app/schemas";
import { FormManagingUser } from "../../ports/drivers";

export class UserManagerProxy implements FormManagingUser{
    constructor(
        private readonly repository: Repository
    ){}
    
    async getUser(email: string): Promise<ExternalUser> {
        return this.repository.getUser(email);    
    }

    async createUser(user: User): Promise<ExternalUser> {
        return this.repository.createUser(user);   
    }
}