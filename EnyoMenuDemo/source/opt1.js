// 1st menu option
enyo.kind({
     name: "MyApps.opt1",
     kind: "VFlexBox",
    
     components: [
         
         {kind: enyo.Header, width:"774px", style: "min-height: 70px;", components: [
             {kind: enyo.HFlexBox, flex: 1, components: [
             	 
                 {content: "", name: "selectedEventName", style: "text-overflow: ellipsis; overflow: hidden; white-space: nowrap;", flex: 1},
             	 {kind: "RadioGroup", onChange: "toggleMapDetails", components: [
           	          {caption: "Details"},
                      {caption: "Map"}
            	  ]}
             ]}
         ]},
         {name: "eventInfoContainer", width: "774px", kind: enyo.Scroller, flex: 1, style:"background-image:url('images/Community_of_Madrid-original.jpg'); background-repeat:no-repeat; background-position:center center;", components: [
             
         ]},
         {kind: enyo.Toolbar, width: "774px", style: "background-color: rgb(199,15,20)", pack: "justify", components: [
             {kind: enyo.GrabButton},
             {kind: enyo.Spacer},
             {kind: enyo.ToolButton, caption:"mail", onclick: "doRefreshEvents", align: "right"},
             {kind: enyo.ToolButton, caption:"twitter", onclick: "doRefreshEvents", align: "right"},
             {kind: enyo.ToolButton, caption:"Facebook", onclick: "doRefreshEvents", align: "right"}
         ]}
     ]});