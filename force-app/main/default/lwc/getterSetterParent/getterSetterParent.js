import { LightningElement } from 'lwc';

export default class GetterSetterParent extends LightningElement {
    name = 'Ela';
    age = 0;
    newAge = 0;
    //parentAge = 23;

    handleAge(event){
        this.age = event.target.value;
    }

    get updatedAge(){
        return parseInt(this.age) +1 ;
        //age degerini bir artirarak cektik. Concat yapmamasi icin parseInt kullandik. 
    }
    set updatedAge(value){
        if(value<0 || value > 150){
            alert("gecersiz deger girdiniz");
            console.log('gecersiz deger');
            //validation mesaji yazdirdik.
          
        }else{
            this.newAge = value * 10 ;
            //update islemi yaptik
        }
    }

    // function kullanarak data aktarimi yapabiliriz ama guncelleme veya validation gibi işlemler yapmak istedigimizde get ve set methodlar kullanilir. 
    //inputtan girilen deger buttona tiklaiynca atanacak. 
    handleUpdatedAge(){// buton ile setten cikan deger age'i guncelleyecek. 
        this.updatedAge = this.age;
    }

}