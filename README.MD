This component aims at demoing 2 concepts

1) How to setup navigation in lighting to move between 2 components
	1.1) To demo this POC I have setup 2 components where the parent component passes the base recordId to the child component 
	1.2) The child component then displays the list of records related to the recordId in a lighting:datatable.
	
2) How to override a standard button in lighting and replace the button behavior with lighting components.
	2.1) Go to setup --> Object Manager --> Any object --> Buttons,Links and Actions 
	2.2) click edit on the right side drop down on any button and override with Lightning component bundle 
		Make sure you implement the interface "lightning:actionOverride" in the component.
		https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/ref_interfaces.htm
		