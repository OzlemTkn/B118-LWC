({
    getApexMethodHandler : function(component, event, helper) {
        let action = component.get("c.myMethod");// get icerisine method ismi yazılır.
        action.setCallback( 
            this, function(response){
                let state = response.getState();//gelen response'u state e aktardik. 
                if(state==='SUCCESS'){//Gelen cevap basarili ise
                      component.set("v.message",response.getReturnValue());  
                }else{
                      console.log('malesef mesaj yok, islem basarisiz...')
                }
            }
        );

        //kuyruga ekle
        $A.enqueueAction(action);
    }
})
