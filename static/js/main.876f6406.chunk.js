(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(7),i=n.n(r),o=(n(15),n(9)),s=n(2),u=n(3),d=n(5),l=n(4),b=(n(16),n(8)),m=n(20),h=n(0),j=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.idName=Object(m.a)(),t.idNumber=Object(m.a)(),t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(b.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a={name:n.name,number:n.number,id:Object(m.a)()};t.props.addNewContact(a),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{htmlFor:this.idName,children:"Name"}),Object(h.jsx)("input",{id:this.idName,name:"name",value:e,type:"text",onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(h.jsx)("label",{htmlFor:this.idNumber,children:"Number"}),Object(h.jsx)("input",{id:this.idNumber,name:"number",value:n,type:"text",onChange:this.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(h.jsx)("button",{type:"submit",children:"Add"})]})}}]),n}(a.Component),f=(n(18),function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{children:[Object(h.jsx)("p",{children:a}),Object(h.jsx)("p",{children:c}),Object(h.jsx)("button",{onClick:function(){return n(e)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},e)}))})}),O=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{children:["Find contacts by name",Object(h.jsx)("input",{name:"filter",value:e,type:"text",onChange:n,required:!0})]})},p=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addNewContact=function(e){t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," already exists")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.findContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=(t.contacts,t.filter),n=this.getVisibleContacts();return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j,{addNewContact:this.addNewContact}),Object(h.jsx)(O,{value:e,onChange:this.changeFilter}),Object(h.jsx)(f,{contacts:n,onDeleteContact:this.deleteContact})]})}}]),n}(c.a.Component),C=p;i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(C,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.876f6406.chunk.js.map