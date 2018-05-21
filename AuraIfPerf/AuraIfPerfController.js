({
    init : function(component, event, helper) {
      var a = [];
      for (var i = 0; i < 500; i++) {
        a.push({datatype:'string', label:i});
      }
      component.set('v._someItems', a)
    },
    renderSlow : function(component, event, helper) {
      component.set('v.slower', component.get('v._someItems'))
    },
    renderControl : function(component, event, helper) {
      component.set('v.control', component.get('v._someItems'))
    },
    clear : function(component, event, helper) {
      component.set('v.control')
      component.set('v.slower')
      component.set('v.fastComponents')
    },
    renderFast : function(component, event, helper) {
      component.set('v.faster', component.get('v._someItems'))
      $A.createComponents(
        component.get('v.faster').map(function(i){ 
          return [ 
            'lightning:input', 
            {
              type: helper.getTypeMapping(i.datatype),
              label: i.label
            } ] 
            }),
        function(components){
          component.set('v.fastComponents', components)
      })
    },
})
