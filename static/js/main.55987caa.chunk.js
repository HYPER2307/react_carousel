(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(5),i=n.n(a),c=n(2),s=n(1),r=n(6),l=n(7),m=n(10),h=n(8),u=n(3),j=n.n(u),o=(n(15),n(9)),b=(n(16),n(0)),p=function(t){var e=t.images,n=t.step,a=t.frameSize,i=t.itemWidth,c=t.animationDuration,s=t.infinity,r=Object(u.useState)(0),l=Object(o.a)(r,2),m=l[0],h=l[1],j=function(t){return function(){h(t)}};return Object(b.jsxs)("div",{className:"Carousel",style:{width:i*a},children:[Object(b.jsx)("ul",{className:"Carousel__list",style:{transform:"translateX(".concat(m,"px)"),transition:"transform ".concat(c,"ms")},children:e.map((function(t){return Object(b.jsx)("li",{children:Object(b.jsx)("img",{src:t,alt:"img",width:i})},t)}))}),Object(b.jsx)("button",{type:"button",onClick:j((function(){return m>=0&&s?-i*e.length+i*a:m<-i*n?m+n*i:0})),children:"Prev"}),Object(b.jsx)("button",{type:"button","data-cy":"next",onClick:j((function(){return m<=-e.length*i+i*a&&s?0:m<=-e.length*i+i*(a+n)?-e.length*i+i*a:m>=-e.length*i+i*a?m-i*n:0})),children:"Next"})]})},g=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],d=function(t){Object(m.a)(n,t);var e=Object(h.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(t=e.call.apply(e,[this].concat(i))).state={step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinity:!1},t.handleInputChange=function(e){var n,a,i,r=e.target,l=r.name,m=r.value,h=r.checked;t.setState((n=l,i=h,+(a=m)<=0&&("step"===n||"frameSize"===n)?Object(s.a)(Object(s.a)({},t.state),{},Object(c.a)({},n,1)):+a<=100&&("animationDuration"===n||"itemWidth"===n)?Object(s.a)(Object(s.a)({},t.state),{},Object(c.a)({},n,100)):"infinity"===l?Object(s.a)(Object(s.a)({},t.state),{},Object(c.a)({},n,i)):Object(s.a)(Object(s.a)({},t.state),{},Object(c.a)({},n,+a))))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.step,n=t.frameSize,a=t.itemWidth,i=t.animationDuration,c=t.infinity;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",g.length," images"]}),Object(b.jsx)(p,{images:g,step:e,frameSize:n,itemWidth:a,animationDuration:i,infinity:c}),Object(b.jsxs)("div",{className:"App__container",children:[Object(b.jsxs)("label",{children:["Step: ",Object(b.jsx)("input",{min:1,max:10,name:"step",value:e,type:"number",onChange:this.handleInputChange})]}),Object(b.jsxs)("label",{children:["Frame size: ",Object(b.jsx)("input",{min:1,max:g.length,name:"frameSize",value:n,type:"number",onChange:this.handleInputChange})]}),Object(b.jsxs)("label",{children:["Item width: ",Object(b.jsx)("input",{min:100,max:500,name:"itemWidth",value:a,type:"number",onChange:this.handleInputChange})]}),Object(b.jsxs)("label",{children:["Animation duration: ",Object(b.jsx)("input",{min:100,max:3e3,name:"animationDuration",value:i,type:"number",onChange:this.handleInputChange})]}),Object(b.jsxs)("label",{children:["Infinity: ",Object(b.jsx)("input",{name:"infinity",checked:c,type:"checkbox",onChange:this.handleInputChange})]})]})]})}}]),n}(j.a.Component),O=d;i.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.55987caa.chunk.js.map