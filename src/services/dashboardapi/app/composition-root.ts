import { ControlAuthenticatorStub, RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers";
import { DashboardApi } from "./dashboard-api"

const compositionMock = () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub();

    const dashboardApiMock = new DashboardApi(controlAuthenticatorStub, repoQuerierStub);

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApiMock);

    return {
        authenticatorProxyAdapter
    };
}

export const { authenticatorProxyAdapter } = compositionMock();


const registerMock = {
    name: 'cristian',
    email: 'cristian@algo.com',
    password: 'password'
}
authenticatorProxyAdapter.login('cristian@algo.com', '1235sf2525');
authenticatorProxyAdapter.register(registerMock);