import { Account } from "./AccountModel";

export class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (): void => {
        console.log('Você fez um empréstimo!');
    }

    deposit = (): number => {
        return 2;
    }
}

