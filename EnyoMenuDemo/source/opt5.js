// 3rd menu option: showcases a SlidingPane

enyo.kind({
     name: "MyApps.opt5",
     kind:"SlidingPane",
     width:"800px",
     flex:1,
     components: [
		  {name:"left",  width:"100px", content: "Google"},
		  {name: "middle", width:"100px", content:"Yahoo!"},
		  {name: "right", flex:1, },
		  {name: "right2", flex:1, },
		  {name: "right3", flex:1, onResize: "slidingResize"}
     ]
});