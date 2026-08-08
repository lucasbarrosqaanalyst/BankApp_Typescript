import { Account } from "./AccountModel";

export class CompanyAccount extends Account {
    private gotLoan: boolean = false;

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    getLoan = (value: number): void => {
        if(this.verifyAccountStatus() && !this.gotLoan){
            this.accountBalance += value;
            this.gotLoan = true;
            console.log(`Empréstimo realizado no valor de ${value}\nSaldo atual: ${this.accountBalance}`);
        } else{
            console.log('Conta já possui um empréstimo em aberto.');
        }
    }

    private verifyAccountStatus = (): boolean => {
        if(this.accountStatus){
            return this.accountStatus;
        }
        throw new Error('Conta inválida!');
    }
}
