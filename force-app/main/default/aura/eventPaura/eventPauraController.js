({
    fireNewEvent : function(component, event, helper) {
alert('Hayırlı Ramazanlar:)');// default olarak bubble dir. Once bu calisir. 
 
    },
//bu kısmı capture-bubble anlatırken ekle////
handleCaptureClick: function(component, event, helper) {
        alert("Parentta yakalanan event");
        event.stopPropagation();//calisan kodu burada tamamlar.
    },

    handleBubbleClick: function(component, event, helper) {
        alert("Buuble olarak calisan event");
    }
   
})
