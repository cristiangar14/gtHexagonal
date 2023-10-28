import { User as RepoUser } from "../../../repository/app/schemas";
import { User } from "../../app/Schemas";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
    id: '26151sa1d',
    name: 'Cristian',
    email: 'algo@algo.com'
}

export class RepoQuerierStub implements ForRepoQuerying {
    getUser(_email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }

    createUser(user: User, password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}