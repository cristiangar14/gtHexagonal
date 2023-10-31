import { describe, expect, it } from "vitest";
import { MonitorStubAdapter } from "../adapters/drivens";
import { Repository } from "./repository";


describe('repository', () => {

    const monitorStub = new MonitorStubAdapter();
    const repositoryMock = new Repository(monitorStub);



    it.concurrent('Should control that the user does not exist', async() => {
        //Given
        const mockedEmail = 'algo@algo.com'

        const expectedResults = {
            id: '1',
            name: 'sam',
            email: 'algo@algo.com'
        }

        // When
        let result;
        try {
            result = await repositoryMock.getUser(mockedEmail);
        } catch (error) {
            console.log(error);
        }
        
        //Then

        expect(result).not.toEqual(expectedResults);
    })

    it.concurrent('Should create a new user', async () => {
        //Given 
        const mockedUser = {
            name: 'Sam',
            email: 'sam@algo.com',
            password: 'password'
        };

        const expectedResults = {
            id: '1',
            name: 'Sam',
            email: 'sam@algo.com',
        };

        // When
        let result;
        try {
            result = await repositoryMock.createUser(mockedUser);
        } catch (error) {
            console.log(error);
        }

        //Then
        expect(result).toEqual(expectedResults)

    })

    it.concurrent('Should control that the user already exist', async () => {
        //Given 
        const mockedUser = {
            name: 'Sam',
            email: 'sam@algo.com',
            password: 'password'
        };

        const expectedResults = {
            id: '1',
            name: 'Sam',
            email: 'sam@algo.com',
        };

        // When
        let result;
        try {
            result = await repositoryMock.createUser(mockedUser);
        } catch (error) {
            console.log(error);
        }

        //Then
        expect(result).not.toEqual(expectedResults)

    })

    it.concurrent('Should control that the user does not exist', async() => {
        //Given
        const mockedEmail = 'algo@algo.com'

        const expectedResults = {
            id: '1',
            name: 'sam',
            email: 'algo@algo.com'
        }

        // When
        let result;
        try {
            result = await repositoryMock.getUser(mockedEmail);
        } catch (error) {
            console.log(error);
        }

        //Then

        expect(result).not.toEqual(expectedResults);
    })
    
    it.concurrent('Should  get a user', async() => {
        //Given
        const mockedEmail = 'sam@algo.com'

        const expectedResults = {
            id: '1',
            name: 'Sam',
            email: 'sam@algo.com',
        }

        // When
        let result;
        try {
            result = await repositoryMock.getUser(mockedEmail);
        } catch (error) {
            console.log(error);
        }

        //Then

        expect(result).toEqual(expectedResults);
    })

})