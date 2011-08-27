// the main menu view: when you tap one option
// an event is generated (see the onxxxoption below)
// that event is captured and processed by MenuDemo

enyo.kind({
     name: "MyApps.MainMenu",
     kind: enyo.Control,
     layoutKind: enyo.VFlexLayout,
     components:[
         // page header
         {kind: enyo.Header, style: "min-height: 70px;", components: [
			{layoutKind: "VFlexLayout", components: [
				{name: "textHeader", content: "MenuDemo", style: "text-transform: capitalize;"}
				
			]}
		 ]},
		 // main menu
         {kind: enyo.Scroller, flex: 1,  components: [
         	{name: "mainMenu", kind: "RowGroup", defaultKind: "HFlexBox", caption: "", components: [
         			{align: "center", tapHighlight: true, onclick: "do1stOption", components: [
         				{content: "1st Option", flex:1}
         			]},
         			{align: "center", tapHighlight: true, onclick: "do2ndOption", components: [        				
         				{content: "2nd Option", flex: 1}
         			]},
         			{align: "center", tapHighlight: true, onclick: "do3rdOption", components: [
           				{content: "3rd Option", flex: 1}
           			]},
           			{align: "center", tapHighlight: true, onclick: "do4thOption", components: [
           				{content: "4th Option", flex: 1}
           			]},
           			{align: "center", tapHighlight: true, onclick: "do5thOption", components: [
        				{content: "5th Option", flex: 1}
        			]}
    
      
         		]}
         		
         ]}
    ],
events: {
    "on1stOption": "",
    "on2ndOption": "",
    "on3rdOption": "",
    "on4thOption": "",
    "on5thOption": "",
    "onRefreshEvents": ""
} 
}); 