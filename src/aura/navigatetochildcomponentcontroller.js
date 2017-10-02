({
    fetchchildinfo : function(cmp, event, helper) {
        var parentId = cmp.get("v.parent_id");
        var action = cmp.get("c.getchildrecords");
        action.setParams({ "parent_id" : parentId });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                cmp.set('v.childcolumns', [
                    {label: 'Id', fieldName: 'Name', type: 'text'},
                    {label: 'Name', fieldName: 'Name', type: 'text'},
                    
                ]);
                    cmp.set('v.child_info', [{
                    id: 'a',
                    Name: 'Cloudhub'
                    },
                    {
                    id: 'b',
                    Name: 'Quip'
                    }]);
            }
            else if (state === "INCOMPLETE") {
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });
        $A.enqueueAction(action);
    },
    getSelectedName: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        // Display that fieldName of the selected rows
        for (var i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].opportunityName);
        }
    }
})