// 3rd menu option: showcases a SlidingPane

enyo.kind({
     name: "MyApps.opt4",
     kind:"SlidingPane",
     width:"800px",
     flex:1,
     components: [
		  {name:"left",  width:"100px", content: "Google"},
		  {name: "middle", width:"100px", content:"Yahoo!"},
		  {name: "right", flex:1, },
		  {name: "other", flex:1, onResize: "slidingResize"}
     ]
});