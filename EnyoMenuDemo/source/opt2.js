enyo.kind({
     name: "MyApps.opt2",
     kind: "VFlexBox",
    
     components: [
         {kind: enyo.HFlexBox, components: [
                {kind: enyo.Header, width:"774px", style: "min-height: 70px; background-color: rgb(199,15,20);", content: "Opt2" }
         ]},
         {kind: enyo.VFlexBox, flex:1, content: "Hello"},
         {kind: enyo.Toolbar, width:"774px", style: "background-color: rgb(199,15,20)", pack: "justify", components: [
             {kind: enyo.GrabButton},
             {kind: enyo.Spacer},
             {kind: enyo.ToolButton, caption:"mail", onclick: "doRefreshEvents", align: "right"},
             {kind: enyo.ToolButton, caption:"twitter", onclick: "doRefreshEvents", align: "right"},
             {kind: enyo.ToolButton, caption:"Facebook", onclick: "doRefreshEvents", align: "right"}
         ]}
     ]});