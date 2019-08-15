import { Inspector } from './Inspector';
/*
const papers = {
    access_permit: 'NAME: Guyovich, Russian\nNATION: Obristan\nID#: TE8M1-V3N7R\nPURPOSE: TRANSIT\nDURATION: 14 DAYS\nHEIGHT: 159cm\nWEIGHT: 60kg\nEXP: 1983.07.13',
    passport: 'ID#: WK9XA-LKM0Q\nNATION: United Federation\nNAME: Dolanski, Roman\nDOB: 1933.01.01\nSEX: M\nISS: Shingleton\nEXP: 1983.05.12',
    grant_of_asylum: 'NAME: Dolanski, Roman\nNATION: United Federation\nID#: Y3MNC-TPWQ2\nDOB: 1933.01.01\nHEIGHT: 176cm\nWEIGHT: 71kg\nEXP: 1983.09.20'
};
*/


/*const papers = {
    passport:'ID#: WK9XA-LKM0Q\nNATION: United Federation\nNAME: Dolanski, Roman\nDOB: 1933.01.01\nSEX: M\nISS: Shingleton\nEXP: 1983.05.12',
	grant_of_asylum: 'NAME: Dolanski, Roman\nNATION: United Federation\nID#: Y3MNC-TPWQ2\nDOB: 1933.01.01\nHEIGHT: 176cm\nWEIGHT: 71kg\nEXP: 1983.09.20'
}
inspector.inspect(papers)*/

const inspector = new Inspector();
let bulletin = 'Entrants require passport\nAllow citizens of Arstotzka, Obristan\nWanted by the State: Hubert Popovic';
inspector.receiveBulletin(bulletin);
bulletin = 'Citizens of Arstotzka no longer require passport\nCitizens of Arstotzka require ID Card';
inspector.receiveBulletin(bulletin);
bulletin = 'Entrants no longer require passport\nForeigners require crazy card';
inspector.receiveBulletin(bulletin);
bulletin = 'Random group require random values';
inspector.receiveBulletin(bulletin);