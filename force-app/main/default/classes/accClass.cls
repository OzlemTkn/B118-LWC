public with sharing class accClass {
    @AuraEnabled
    public static List<Account> getAccounts(String filter) {
        String keyName = '%' + filter + '%';
        return [SELECT Id, Name, Phone FROM Account WHERE Name LIKE : keyName];
    }
}
// Note: Apex'te "with sharing" ve "without sharing", bir classin paylasim modunu tanimlayan access modifiers'dir. Aralarindaki fark, data ve record'lara erisimi nasil kontrol ettikleridir.

// "with sharing", sirketin security ayarlarinda object icin tanimlanan sharing rule'u uygular. Bir class, "with sharing" anahtar sözcüğüyle bildirildiğinde, verilere ve kayitlara erisim, kullanicinin profiline ve rol hiyerarsisine dayali olarak erisimiyle sinirlidir. Bu, bir kullanicinin bir record'a erisimi yoksa, Apex kodu onu almaya calissa bile o kayda erisemeyeceği anlamina gelir.

// "without sharing", kurulusun sharing rule'dan bağimsiz olarak datalara ve kayitlara sinirsiz erisim sağlar. "without sharing" anahtar sözcüğüyle bir class bildirildiğinde, verilere ve kayitlara erisim, kullanicinin profili veya rol hiyerarsisi tarafindan sinirlandirilmaz. Bu, kullanicinin erisimi olmayan veriler ve kayitlar üzerinde bazi islemler gerceklestirmeniz gerektiğinde faydali olabilir.

// Uygulamanizin gereksinimlerine göre uygun paylasim modunu kullanmaniz önemlidir. Genel olarak, veri güvenliğini sağlamak ve yetkisiz erisimi önlemek icin mümkün olduğunda "with sharing" kullanmak en iyi uygulamadir. Ancak, belirli yönetimsel görevler veya veri gecisleri gibi durumlarda "without sharing" gerekli olan durumlar olabilir.