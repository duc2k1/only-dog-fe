import{R as e,r as n}from"./vendor.e61e7806.js";function a(){return e.createElement("div",{className:"alert alert-danger",role:"alert"},"This is a danger alert\u2014check it out!")}function s(){return e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Login"),e.createElement("div",{className:"modal fade",id:"exampleModal",tabIndex:-1,"aria-labelledby":"exampleModalLabel","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Login"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",null,e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputEmail1",className:"form-label"},"Email address"),e.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),e.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputPassword1",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1"}))),e.createElement(a,null)),e.createElement("div",{className:"modal-footer"},e.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e.createElement("button",{type:"button",className:"btn btn-outline-primary"},"Login"))))))}function r(){return e.createElement("div",null,e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal2"},"Register"),e.createElement("div",{className:"modal fade",id:"exampleModal2",tabIndex:-1,"aria-labelledby":"exampleModal2Label","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModal2Label"},"Register"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",null,e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputEmail1",className:"form-label"},"User Name"),e.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),e.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputEmail1",className:"form-label"},"Email address"),e.createElement("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),e.createElement("div",{id:"emailHelp",className:"form-text"},"We'll never share your email with anyone else.")),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputPassword1",className:"form-label"},"Password"),e.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1"})),e.createElement("div",{className:"mb-3"},e.createElement("label",{htmlFor:"exampleInputPassword1",className:"form-label"},"Confirm Password"),e.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1"}))),e.createElement(a,null)),e.createElement("div",{className:"modal-footer"},e.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e.createElement("button",{type:"button",className:"btn btn-outline-primary"},"Register")))))))}var o="/assets/logo.7e8cfe4c.svg";function c(){return e.createElement("div",null,e.createElement("div",null,e.createElement("button",{type:"button",className:"btn btn-outline-primary","data-bs-toggle":"modal","data-bs-target":"#exampleModal3"},"Add Post"),e.createElement("div",{className:"modal fade",id:"exampleModal3",tabIndex:-1,"aria-labelledby":"exampleModal3Label","aria-hidden":"true"},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},e.createElement("h5",{className:"modal-title",id:"exampleModal3Label"},"Post"),e.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})),e.createElement("div",{className:"modal-body"},e.createElement("form",null,e.createElement("div",{className:"form-group mb-2"},e.createElement("input",{type:"file",className:"form-control-file",id:"exampleFormControlFile1"}))),e.createElement(a,null)),e.createElement("div",{className:"modal-footer"},e.createElement("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal"},"Close"),e.createElement("button",{type:"button",className:"btn btn-outline-primary"},"Add Post")))))))}function i({setPage:t}){const[l,m]=n.exports.useState("logout");return e.createElement("nav",{style:{position:"sticky",top:0,zIndex:1051},className:"navbar navbar-expand-lg navbar-light"},e.createElement("div",{className:"container-fluid"},e.createElement("a",{className:"navbar-brand",href:"#"},e.createElement("img",{src:o,alt:"Logo OnlyDog",width:100,onClick:()=>t("dashboard")})),e.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},e.createElement("span",{className:"navbar-toggler-icon"})),e.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},e.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"}),l==="logout"?e.createElement(e.Fragment,null,e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(c,null)),e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(s,null)),e.createElement("div",{className:"nav-item me-2 mt-2"},e.createElement(r,null))):e.createElement(e.Fragment,null,e.createElement("div",{className:"nav-item me-2 mt-2",onClick:()=>t("profile")},"Profile"),e.createElement("div",{className:"nav-item me-2 mt-2",onClick:()=>m("logout")},"Logout")))))}export{i as default};
