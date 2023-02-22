import { LightningElement, track } from 'lwc';

export default class ShallowCopyObj extends LightningElement {
    // 1.Ornek: shallow copy of an object
   @track originalObj = {
        name:"Laura",
        lastName:"Parson",
        age:56,
        address:{street:"ABC",
            city:"Dallas",
            state:"CA"}
            };
    //shallow copy of original obj
    copyObj = {...this.originalObj};

    handleChange(){
        //copyObj modifiye ettik
        this.copyObj.name = "Merry";
        this.copyObj.age = 34;
        this.copyObj.address.street ="Street 123";
        console.log(this.copyObj.name);//Merry
        console.log(this.originalObj.name);//Laura
    }

    //2. ornek: get ve set ile shallow copy of an object
     personOrj = {
        name:"Ozge",
        age:39
    }

    get person(){
        // personOrj objectini cektik. 
        return { ...this.personOrj};
    }

    set person(value){
        //personOrj objesinin kopyasını person icerisine aktardik. 
       const personOrj = {...value}; 
       //encapsulation var. 
    }

    handleName(event){
        //personOrj kopyasini olstur
    const person ={...this.person};
   this.person.name = event.target.value;
   //this.person = personOrj;
   console.log(this.personOrj.name);
    }

    handleAge(event){
    const person = {...this.person};
    person.age = event.target.value;
   //this.age = person.age;
    console.log(this.personOrj.age);
}

}