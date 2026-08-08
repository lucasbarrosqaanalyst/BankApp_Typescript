import { Account } from "./AccountModel";

export class NewAccountType extends Account {
    deposit = (value: number): void => {
        
        this.accountBalance += value + 10;
        console.log(`Valor depositado: ${value}`);
        
    }
}