import { LightningElement} from 'lwc';
import getAccounts from '@salesforce/apex/accClass.getAccounts'
export default class GetAccountWire extends LightningElement {
filterWord = '';

//filterWord ile filter dinamik bir hale gelir.

// @wire(getAccounts, {filter:'$filterWord'}) //filterWord classtaki filter parametresine esitledik.
// accounts;
//wire decorator'ı property'ye baglanabilir. Accounts database'den gelen accountları tutar. 
//accounts.data veya accounts.error olarak iki farkli sonuc doner. 
// data veya errordan yanlizca biri doner. 

//2. yol: calling Apex method imperatively
//1. @wire silinir, 
//2. cacheable=true yazmaya gerek kalmaz
//3. Genellikle butona bağlanır. 
accounts;//accounts butonla gelen accountlari tutacak
error;
handleGetAccounts(){
//Butona onclick event ekleyecegiz. 
getAccounts({filter:this.filterWord})
.then(result=>{
    this.accounts = result;
})
.catch(error =>{
    this.error = undefined;
});
}

handleChange(event){
this.filterWord = event.target.value;
}
}