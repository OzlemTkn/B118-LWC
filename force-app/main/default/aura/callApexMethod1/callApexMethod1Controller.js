({
    messageHandler : function(component, event, helper) {
        let action = component.get("c.showMessage");
        //get icerisine apex method ismi yazılır. 
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state=== 'SUCCESS'){//islem basarilimi sorgulamasi yapiliyor. 
                component.set('v.message',response.getReturnValue());
            }else{
                console.log('işlem başarısız... ')
            }
        });
        //islemi kuyruya ekledik
        $A.enqueueAction(action);
    },
    onclickHandler : function(component, event, helper) {
        let action = component.get("c.getContact");
        //get icerisine apex method ismi yazılır. 
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state=== 'SUCCESS'){//islem basarilimi sorgulamasi yapiliyor. 
                component.set('v.con',response.getReturnValue());
            }else{
                console.log('Contact bulunamadi')
            }
        });
        //islemi kuyruya ekledik
        $A.enqueueAction(action);
    },
    selectContact : function(component, event, helper) {
        let action = component.get("c.getContactWithParams");
        //get icerisine apex method ismi yazılır. 
        action.setParams({param:event.getParam("value")});//kullanicidan aldigimiz degeri parametreye(param) esitledik. 
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state=== 'SUCCESS'){//islem basarilimi sorgulamasi yapiliyor. 
                component.set('v.contactList',response.getReturnValue());
            }else{
                console.log('Contact bulunamadi');
            }
        });
        //islemi kuyruya ekledik
        $A.enqueueAction(action);
    }

})
