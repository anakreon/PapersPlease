import { Papers } from './Papers';
import { AccessPermit } from './papers/AccessPermit';
import { AccessPermitInterpreter } from './interpreters/paper/AccessPermitInterpreter';
import { DiplomaticAuthorizationInterpreter } from './interpreters/paper/DiplomaticAuthorizationInterpreter';
import { DiplomaticAuthorization } from './papers/DiplomaticAuthorization';
import { InputPapers } from './types';
import { GrantOfAsylum } from './papers/GrantOfAsylum';
import { GrantOfAsylumInterpreter } from './interpreters/paper/GrantOfAsylumInterpreter';
import { PassportInterpreter } from './interpreters/paper/PassportInterpreter';
import { Passport } from './papers/Passport';
import { CertificateOfVaccinationInterpreter } from './interpreters/paper/CertificateOfVaccinationInterpreter';
import { CertificateOfVaccination } from './papers/CertificateOfVaccination';
import { IdCardInterpreter } from './interpreters/paper/IdCardInterpreter';
import { IdCard } from './papers/IdCard';
import { WorkPassInterpreter } from './interpreters/paper/WorkPassInterpreter';
import { WorkPass } from './papers/WorkPass';

export class PapersInterpreter {
    private inputKeyInterpreterMap = {
        access_permit: {
            interpreter: new AccessPermitInterpreter(),
            addToPapers: (papers: Papers) => (accessPermit: AccessPermit) => {
                papers.setAccessPermit(accessPermit);
            }
        },
        diplomatic_authorization: {
            interpreter: new DiplomaticAuthorizationInterpreter(),
            addToPapers: (papers: Papers) => (diplomaticAuthorization: DiplomaticAuthorization) => {
                papers.setDiplomaticAuthorization(diplomaticAuthorization);
            }
        },
        grant_of_asylum: {
            interpreter: new GrantOfAsylumInterpreter(),
            addToPapers: (papers: Papers) => (grantOfAsylum: GrantOfAsylum) => {
                papers.setGrantOfAsylum(grantOfAsylum);
            }
        },
        passport: {
            interpreter: new PassportInterpreter(),
            addToPapers: (papers: Papers) => (passport: Passport) => {
                papers.setPassport(passport);
            }
        },
        certificate_of_vaccination: {
            interpreter: new CertificateOfVaccinationInterpreter(),
            addToPapers: (papers: Papers) => (certificateOfVaccination: CertificateOfVaccination) => {
                papers.setCertificateOfVaccination(certificateOfVaccination);
            }
        },
        ID_card: {
            interpreter: new IdCardInterpreter(),
            addToPapers: (papers: Papers) => (idCard: IdCard) => {
                papers.setIdCard(idCard);
            }
        },
        work_pass: {
            interpreter: new WorkPassInterpreter(),
            addToPapers: (papers: Papers) => (workPass: WorkPass) => {
                papers.setWorkPass(workPass);
            }
        }
    };

    public interpret (inputPapers: InputPapers): Papers {
        const papers = new Papers();
        for (var key in inputPapers) {
            if (inputPapers.hasOwnProperty(key)) {
                const { interpreter, addToPapers } = this.inputKeyInterpreterMap[key];
                const paper = interpreter.interpret(inputPapers[key]);
                addToPapers(papers)(paper);
            }
        }
        return papers;
    }
}