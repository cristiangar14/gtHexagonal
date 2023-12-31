import { AuthDetails, Permissions } from "../../app/Schemas";

export interface ForControlAuthenticating {
    getAuthDetails(email: string, password: string): Promise<AuthDetails>;
    getPermissions(email: string, password: string): Promise<Permissions>
}