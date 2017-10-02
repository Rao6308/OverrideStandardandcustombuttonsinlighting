({
navigateToMyComponent : function(component, event, helper) {
    var record_id = component.get("v.recordId");
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:navigatetochildcomponent",
        componentAttributes: {
            parent_id:record_id
        }
    });
    evt.fire();
}
})