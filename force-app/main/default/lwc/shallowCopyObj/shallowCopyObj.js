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
          this.connectedCallback();
        }
    
        handleAgeChange(event) {
            // person objectinin shallow kopyasini getir. 
            const person1 = { ...this.person };
            // Yasi update et
            person1.age = event.target.value;
            // Setten gelen degere aktar
         this.person = person1;
           this.connectedCallback();
      }        
      connectedCallback() {
        console.log(this._person.name);
        console.log(this._person.age); // Log the original values of the _person object
    }
  
    }

      
