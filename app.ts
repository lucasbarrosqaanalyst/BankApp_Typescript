import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";


const peopleAccount: PeopleAccount = new PeopleAccount(21121121223,'Maria', 3105);
peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 3101);
companyAccount.deposit();
console.log(companyAccount);

