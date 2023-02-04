import { LightningElement, track, wire } from 'lwc';
import accountList from '@salesforce/apex/accountController.accountList';
export default class CheckboxWire extends LightningElement {
    @track accList;
    @track showAccount = false;
    
    @wire (accountList,{flag: '$showAccount'}) 
accListFunction({data,error}){
    if(data){
        this.accList = data;
    }
    else if (error){
        console.log("error"+ error);
    }
}
handleChange(event){
    this.showAccount=event.target.checked;
}
}