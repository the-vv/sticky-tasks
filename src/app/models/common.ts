export interface IUser {
    id?: string;
    email: string;
    name: string;
    image: string;
}

export enum EStorageKeys {
    user = 'user'
}

export enum ECollectionNames {
    users = 'users'
}

export enum ETaskStatus {
    todo = 'todo',
    inProgress = 'in-progress',
    completed = 'completed'
}