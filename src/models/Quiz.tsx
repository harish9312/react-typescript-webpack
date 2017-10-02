import { BaseModel } from './BaseModel';
import * as React from 'react';

export interface  QuizProps {
    id: string;
    description: string;
    jobProfile: string;
    location: string;
    lastDate: string;
    applyURL: string;
    companyName: string;
}

export class Quiz extends BaseModel< QuizProps> {
    constructor(props:  QuizProps) {
        super(props);
    }

    static resource = 'quiz';
}
