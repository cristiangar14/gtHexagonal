import { ExternalUser } from "../../../repository/app/schemas";
import { User } from "../../app/Schemas";

export interface ForRepoQuerying {
    getUser(emai: string): Promise<ExternalUser>;
    createUser(user: User): Promise<ExternalUser>;
}