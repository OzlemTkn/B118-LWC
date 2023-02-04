import { LightningElement, api } from 'lwc';

export default class SgapiComp extends LightningElement {
    message ='public property';
    @api recordId;
}