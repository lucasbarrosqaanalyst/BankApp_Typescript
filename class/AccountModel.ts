export abstract class Account {
    private readonly name: string;
    private readonly accountNumber: number;
    accountStatus: boolean = true;
    accountBalance: number = 0;

    constructor(name: string, accountNumber: number){
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (value: number): void => {
        if(this.validateAccountStatus()){
            this.accountBalance += value;
            console.log('Valor depositado:', value);
        }
    }

    withdraw = (value: number): void => {
        if(this.validateAccountStatus() && this.accountBalance >= value){
            this.accountBalance -= value;
            // console.log('Valor sacado:', value);
            console.log(`Valor sacado: ${value}\nSaldo restante: ${this.accountBalance}`);
        } else {
            console.log('Saldo insuficiente!');
        }
    }
    
    getBalance = (): void => {
        console.log(this.accountBalance);
    }

    private validateAccountStatus = (): boolean => {
        if(this.accountStatus){
            return this.accountStatus;
        }

        throw new Error('Conta inválida!');
    }
}

