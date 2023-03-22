({
    getContactHandler : function(component, event, helper) {
        let action = component.get("c.getContacts");// get icerisine method ismi yazılır.
        action.setCallback( 
            this, function(response){
    let state = response.getState();//gelen response'u state e aktardik. 
                if(state==='SUCCESS'){//Gelen cevap basarili ise
  component.set("v.con",response.getReturnValue());  
                }else{
                      console.log('malesef contact yok, islem basarisiz...')
                }
            }
        );

        //kuyruga ekle
        $A.enqueueAction(action);
    },
    selectContact: function(component, event, helper) {
        
    let action = component.get("c.getContactsWithParam");
    action.setParams({ param:event.getParam("value") });
    action.setCallback(this, function(response) {
        let state = response.getState();
            if (state === 'SUCCESS') {
                component.set("v.contactList", response.getReturnValue());
            } else {
                console.log('malesef contact yok, islem basarisiz...');
            }
        });
        $A.enqueueAction(action);
    }
})

