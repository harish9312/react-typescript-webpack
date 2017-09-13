import * as React from 'react';
import { BaseModel } from './BaseModel';

export interface IUserModelProps {
    userId?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    email?: string;
    accessLevel?: string;
    jobTitle?: string;
    jobDesc?: string;
    dateCreated?: string;
    dateUpdated?: string;
    groups?: string[];
    projects?: string[];
}

export class UserModel extends BaseModel<IUserModelProps> {
    static resource = 'user';
    
    constructor(properties: IUserModelProps) {
        super(properties);
    }
}
