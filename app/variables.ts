import { OpaqueToken } from '@angular/core';

export const BASE_PATH = 'http://localhost:8000';
export class Configuration {
    apiKey: string;
    username: string;
    password: string;
    accessToken: string | (() => string);
}
