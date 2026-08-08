import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccountType } from "./class/NewAccountType";
import { PeopleAccount } from "./class/PeopleAccount";


const peopleAccount: PeopleAccount = new PeopleAccount(21121121223,'Maria', 3105);
peopleAccount.setName('Samira Safira');
console.log(peopleAccount.getName());
//Increments account balance value
peopleAccount.deposit(3500);

peopleAccount.withdraw(1500);
peopleAccount.withdraw(1500);
peopleAccount.withdraw(1500);


const companyAccount: CompanyAccount = new CompanyAccount('DIO', 3101);
companyAccount.deposit();
console.log(companyAccount);


const newAccount: NewAccountType = new NewAccountType('DIO', 3119);
newAccount.deposit(1000);
console.log(newAccount.accountBalance);
