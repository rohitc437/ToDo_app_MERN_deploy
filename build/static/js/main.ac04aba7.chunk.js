(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{70:function(t,e,n){},90:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(8),s=n.n(c),i=(n(70),n(32)),o=n(33),u=n(39),l=n(38),p=n(58),d=n(57),h=n(15),f=n.n(h),v=n(29),k=n(30),j=n.n(k),b="https://todo-mern-app-rohit.herokuapp.com/api/tasks";function m(t){return j.a.post(b,t)}function x(t,e){return j.a.put(b+"/"+t,e)}function O(t){return j.a.delete(b+"/"+t)}var y=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={tasks:[],currentTask:""},t.handleChange=function(e){var n=e.currentTarget;t.setState({currentTask:n.value})},t.handleSubmit=function(){var e=Object(v.a)(f.a.mark((function e(n){var a,r,c,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=t.state.tasks,e.prev=2,e.next=5,m({task:t.state.currentTask});case 5:r=e.sent,c=r.data,(s=a).push(c),t.setState({tasks:s,currentTask:""}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),t.handleUpdate=function(){var e=Object(v.a)(f.a.mark((function e(n){var a,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.tasks,e.prev=1,r=Object(d.a)(a),c=r.findIndex((function(t){return t._id===n})),r[c]=Object(p.a)({},r[c]),r[c].completed=!r[c].completed,t.setState({tasks:r}),e.next=9,x(n,{completed:r[c].completed});case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),t.setState({tasks:a}),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),t.handleDelete=function(){var e=Object(v.a)(f.a.mark((function e(n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.tasks,e.prev=1,r=a.filter((function(t){return t._id!==n})),t.setState({tasks:r}),e.next=6,O(n);case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.setState({tasks:a}),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(v.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(b);case 3:e=t.sent,n=e.data,this.setState({tasks:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));return function(){return t.apply(this,arguments)}}()}]),n}(a.Component),g=n(123),w=n(128),S=n(127),T=n(129),N=(n(90),n(11)),_=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={tasks:[],currentTask:""},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.state.tasks;return Object(N.jsx)("div",{className:"App flex",children:Object(N.jsxs)(g.a,{elevation:3,className:"container",children:[Object(N.jsx)("div",{className:"heading",children:"TO-DO"}),Object(N.jsxs)("form",{onSubmit:this.handleSubmit,className:"flex",style:{margin:"15px 0"},children:[Object(N.jsx)(w.a,{variant:"outlined",size:"small",style:{width:"80%"},value:this.state.currentTask,required:!0,onChange:this.handleChange,placeholder:"Add New TO-DO"}),Object(N.jsx)(S.a,{style:{height:"40px"},color:"primary",variant:"outlined",type:"submit",children:"Add task"})]}),Object(N.jsx)("div",{children:e.map((function(e){return Object(N.jsxs)(g.a,{className:"flex task_container",children:[Object(N.jsx)(T.a,{checked:e.completed,onClick:function(){return t.handleUpdate(e._id)},color:"primary"}),Object(N.jsx)("div",{className:e.completed?"task line_through":"task",children:e.task}),Object(N.jsx)(S.a,{onClick:function(){return t.handleDelete(e._id)},color:"secondary",children:"delete"})]},e._id)}))})]})})}}]),n}(y);s.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(_,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.ac04aba7.chunk.js.map