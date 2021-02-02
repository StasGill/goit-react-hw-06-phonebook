(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{32:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a,c=n(1),r=n(0),s=n(8),i=n.n(s),o=n(20),l=n(21),b=n(25),u=n(23),j=function(e,t){var n=e.contact,a=e.handleDelete;return Object(c.jsxs)("li",{className:"listItem",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Name:  "})," ",n.name]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Number:  "})," ",n.number]}),Object(c.jsx)("button",{onClick:a,className:"handleButton",name:n.id,children:"Delete"})]},t)},d=n(42),m=n(44),O=(n(32),n(6)),p=n(2),h=n(24),f=n(43),x="@bootCamps/adNewNumber",N="@bootCamps/deleteNumber",g="@bootCamps/setFilter",v="@bootCamps/setWarning",w=n(7),y=Object(w.b)(x,(function(e){return{payload:Object(p.a)(Object(p.a)({},e),{},{id:Object(f.a)()})}})),C=Object(w.b)(N),F=Object(w.b)(g),k=Object(w.b)(v),P=n(10),D={name:"",number:""},I=Object(P.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),(function(e){return{addNumber:function(t){e(y(t))},deleteNumber:function(t){e(C(t))},setFilter:function(t){e(F(t))},setWarning:function(t){e(k(t))}}}))((function(e){var t=e.contacts,n=e.addNumber,a=(e.deleteNumber,e.setWarning),s=Object(r.useState)(Object(p.a)({},D)),i=Object(h.a)(s,2),o=i[0],l=i[1],b=function(e){l(Object(p.a)(Object(p.a)({},o),{},Object(O.a)({},e.target.name,e.target.value)))};return Object(c.jsx)("div",{className:"addPanel",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=o.name;if(t.some((function(e){return e.name===c})))a("on"),l(Object(p.a)({},D));else{var r={name:o.name,number:o.number};n(r),l(Object(p.a)({},D)),a("off")}},children:[Object(c.jsx)("h2",{children:"Name"}),Object(c.jsx)("input",{type:"text",className:"addPanelInput",placeholder:"Type name...",name:"name",value:o.name,onChange:b}),Object(c.jsx)("h2",{children:"Number"}),Object(c.jsx)("input",{type:"text",className:"addPanelInput",placeholder:"Type number...",name:"number",value:o.number,onChange:b}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",className:"handleButton",children:"Add contact"})]})})})),S=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).setNewFilter=function(t){e.props.setFilter(t.target.value)},e.handleDelete=function(t){var n=t.target.name;e.props.deleteNumber(n),localStorage.setItem("phoneBook",JSON.stringify(e.props.contacts))},e.handleFilter=function(t){e.setState({filter:t.target.value})},e.filter=function(){return e.props.contacts?e.props.contacts.filter((function(t){return t.name.toLowerCase().includes(e.props.filter.toLowerCase())})):void 0},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d.a,{in:"on"===this.props.warning,timeout:500,classNames:"fade",unmountOnExit:!0,children:Object(c.jsx)("div",{className:"warning",children:Object(c.jsx)("p",{children:"Contact already exist"})})}),Object(c.jsx)("div",{className:"addPanel",children:Object(c.jsx)(d.a,{in:!0,timeout:300,classNames:"alert",appear:!0,children:Object(c.jsx)("h1",{children:"Phonebook"})})}),Object(c.jsx)(I,{}),this.props.contacts.length>0&&Object(c.jsx)("div",{className:"addPanel",children:Object(c.jsx)("input",{name:"filter",onChange:this.setNewFilter,className:"addPanelInput",placeholder:"Find contact..."})}),Object(c.jsxs)("div",{className:"addPanel",children:[Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsx)(m.a,{component:"ul",children:this.filter().map((function(t){return Object(c.jsx)(d.a,{timeout:300,classNames:"item",children:Object(c.jsx)(j,{contact:t,handleDelete:e.handleDelete},t.id)},t.id)}))})]})]})}}]),n}(r.Component),B=Object(P.b)((function(e){return{contacts:e.contacts,filter:e.filter,warning:e.warning}}),(function(e){return{addNumber:function(t){e(y(t))},deleteNumber:function(t){e(C(t))},setFilter:function(t){e(F(t))}}}))(S),J=(n(38),n(19)),W=Object(w.c)(Object(p.a)({},{contacts:[],filter:"",warning:""}),(a={},Object(O.a)(a,x,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{contacts:[].concat(Object(J.a)(e.contacts),[t.payload])})})),Object(O.a)(a,N,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{contacts:Object(J.a)(e.contacts.filter((function(e){return e.id!==t.payload})))})})),Object(O.a)(a,g,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{filter:t.payload})})),Object(O.a)(a,v,(function(e,t){return Object(p.a)(Object(p.a)({},e),{},{warning:t.payload})})),a)),A=Object(w.a)({reducer:W});i.a.render(Object(c.jsx)(P.a,{store:A,children:Object(c.jsx)(B,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d5e5267d.chunk.js.map