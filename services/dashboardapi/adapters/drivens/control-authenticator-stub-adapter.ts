import { AuthDetails, Permissions } from "../../app/Schemas";
import { ForControlAuthenticating } from "../../ports/drivens/for-control-authenticating";

const authDetailsMock: AuthDetails = {
    token: 'ds1afs15f15adf',
    refreshToken: '65d1sf5r5dgf1'
}

const permissionsMock: Permissions = {
    admin: true,
    user: true
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {

    getAuthDetails(_email: string, _password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock);
    }

    getPermissions(_email: string, _password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock)
    }
}