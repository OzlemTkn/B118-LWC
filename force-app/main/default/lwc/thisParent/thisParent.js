import { LightningElement } from 'lwc';

export default class ThisParent extends LightningElement {
    parentValue ="ikinci deger";
    handleChange(){
        this.parentValue = "ucuncu deger";
    }
    handleCall(){
        var childComp = this.template.querySelector("c-this-child");
        var sendData = {firstName:'ela', lastName:'Demir'}
        childComp.testChildMethod(sendData);
        console.log(childComp);
    }

}