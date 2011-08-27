enyo.kind({
     name: "MyApps.MenuDemo",
     kind: "HFlexBox",
     components: [
		{name: "menu", width: "250px", kind: "MyApps.MainMenu", 
			 on1stOption: "show1stOption", on2ndOption: "show2ndOption", on3rdOption: "show3rdOption", on4thOption: "show4thOption", on5thOption: "show5thOption"
		}
		,
		{kind: "Pane", name: "menuOptions", transitionKind: "enyo.transitions.LeftRightFlyin", components:[
             {name: "menuView1", flex:1, kind: "MyApps.opt1" },
		     {name: "menuView2", flex:1, kind: "MyApps.opt2" },
		     {name: "menuView3", flex:1, kind: "MyApps.opt3" },
		     {name: "menuView4", flex:1, kind: "MyApps.opt4" },
		     {name: "menuView5", flex:1, kind: "MyApps.opt5" }
		    ]}
	        
    
     ],
	show1stOption: function(inSender, inEvent) {
		 this.$.menuOptions.selectViewByName("menuView1");
		
	},
	show2ndOption: function(inSender, inEvent) {
		
		this.$.menuOptions.selectViewByName("menuView2");
	},
	show3rdOption: function(inSender, inEvent) {
		
		this.$.menuOptions.selectViewByName("menuView3");
	},
	show4thOption: function(inSender, inEvent) {
			
		this.$.menuOptions.selectViewByName("menuView4");
	},
	show5thOption: function(inSender, inEvent) {
			
		this.$.menuOptions.selectViewByName("menuView5");
	}
}); 

