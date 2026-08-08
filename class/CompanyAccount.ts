import { Account } from "./AccountModel";

export class CompanyAccount extends Account {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (value: number): void => {
        console.log(`Empréstimo realizado no valor de ${value}`);
    }

    deposit = (): number => {
        return 2;
    }

}

