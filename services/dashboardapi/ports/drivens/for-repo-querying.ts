import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/Schemas";

export interface ForRepoQuerying {
    getUser(emai: string): Promise<RepoUser>;
    createUser(user: User, password: string): Promise<RepoUser>;
}