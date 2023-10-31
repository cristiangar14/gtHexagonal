import { describe, expect, it } from 'vitest';
import { ControlAuthenticatorStub, RepoQuerierStub } from '../adapters/drivens';
import { DashboardApi } from './dashboard-api';
import { AuthenticatedUser, User } from './Schemas';


describe('DashboardApi', () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub();

    const dashboardApiMock = new DashboardApi(controlAuthenticatorStub, repoQuerierStub);


    it.concurrent("Should login", async () => {
        //Given
        const mockedParams = {
            email:'emailtest@algo.com',
            password: 'password',
        };

        const expectedResults: AuthenticatedUser = {
            email:'algo@algo.com',
            name: 'Cristian',
            id: '1',
            refreshToken: 'refreshToken',
            token: 'token',
            permissions: {
                admin: true,
                user: true,
            },
        }

        //When
        const result = await dashboardApiMock.login(mockedParams.email, mockedParams.password);

        //Then
        expect(result).toEqual(expectedResults);

    })

    it.concurrent("Should register", async () => {
        //Given
        const mockedUser: User = {
            email:'emailtest@algo.com',
            name: 'Cristian',
            password: 'passsword'
        }

        const expectedResults: AuthenticatedUser = {
            email:'algo@algo.com',
            name: 'Cristian',
            id: '1',
            refreshToken: 'refreshToken',
            token: 'token',
            permissions: {
                admin: true,
                user: true,
            },
        }

        //When
        const result = await dashboardApiMock.register(mockedUser);

        //Then
        expect(result).toEqual(expectedResults);

    })


})