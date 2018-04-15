import { Injectable } from "@angular/core";

@Injectable()
export class Constants {

    constants = {
        "apiUrl": "http://localhost:3000/" 
    }

    constructor() {
    }

    get(key: string) {
        return this.constants[key];
    }
}
