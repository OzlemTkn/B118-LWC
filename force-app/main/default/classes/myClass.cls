public with sharing class myClass {

    @AuraEnabled(cacheable=true)
    public static String myMethod() {
return 'Bu mesaj Apex classtan gelmektedir' ;   
}

@AuraEnabled(cacheable=true)
public static Contact getContacts(){
Contact con = [SELECT Id, Phone, Name, LastName FROM Contact WHERE Id ='0038d00000R8lcmAAB'];
return con;
}

@AuraEnabled(cacheable=true)
public static Contact getContactsWithParam(String param){
    
String parameter = '%'+ param +'%';

Contact con = 
[SELECT Id, Phone, Name, LastName 
FROM Contact 
WHERE Name LIKE:parameter LIMIT 1 ];

return con;
}

}