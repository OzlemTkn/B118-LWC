import { LightningElement, track } from 'lwc';

export default class ShallowCopyObj extends LightningElement {


     // 1.Ornek

     originalObj = {
        name: 'Laura Parson',
        age: 45,
        address: {
          street: '123 Maden Sk',
          city: 'City',
          state: 'CA'
        }
      };
      
      // Shallow copy the original object
        copyObj = { ...this.originalObj };
      
       handleChanging(){
    // Copy object uzerinde bir name property guncelle
        this.copyObj.name = 'ozlem';
    // Copy object uzerinde nested property guncelle
        this.copyObj.address.street = '123 Elmali Sk';
        console.log(this.originalObj.name); 
        console.log(this.copyObj.name);  
    }


   //2.ornek: get ve set ile shallow copy olusturma
        @track
         _person = {
            name: 'John Doe',
            age: 30
        };
    
        // Getter for person object
        get person() {
            // original objectin modifiye edilmemesi icin shallow copy olustur
            return { ...this._person };
        }
    
        // Setter for person object
        set person(value) {
            // Shallow copy degerini al, value aktar
            this._person = { ...value };
        }
    
        handleNameChange(event) {
            // person objectin shallow kopyasını al
            const person1 = { ...this.person };
            // Name property kullanicinin girdigi degerle update et
            person1.name = event.target.value;
            // Setten gelen degere aktar
            this.person = person1;
            this.orgPersonGoster();
            // orgPersonGoster methodu ile orginal degerlerin oldugu methodu cagiriyoruz.

        }
    
        handleAgeChange(event) {
            // person objectinin shallow kopyasini getir. 
            const person1 = { ...this.person };
            // Yasi update et
            person1.age = event.target.value;
            // Setten gelen degere aktar
            this.person = person1;
           this.orgPersonGoster();
             // orgPersonGoster methodu ile orginal degerlerin oldugu methodu cagiriyoruz.
      }        

      orgPersonGoster() {
            //Yukarida update islemi yapılmadan once original versiyonu gozlemleyebiliriz.c
            const originalPerson = { ...this._person };
            console.log('Original name:', this._person.name);
            console.log('Original age:', this._person.age);
        }
    }

      
