import { Account } from "./AccountModel";

export class PeopleAccount extends Account {
    docId: number;

    constructor(docId: number,name: string, accountNumber: number){
        super(name, accountNumber);
        this.docId = docId;
    }

}

