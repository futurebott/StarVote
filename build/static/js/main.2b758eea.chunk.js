(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),c=a.n(r),s=(a(15),a(1)),o=a(2),l=a(5),m=a(3),u=a(4),h=(a(16),a(17),a(6)),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).ClickHandle=function(e){e.preventDefault(),console.log(a.state.rating)},a.HandleChange=function(e){a.setState({rating:e.target.value}),a.props.updateRating(e.target.value)},a.state={rating:1},a.ClickHandle=a.ClickHandle.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("form",{method:"post",onSubmit:this.ClickHandle},i.a.createElement("select",{defaultValue:this.state.rating,onChange:this.HandleChange},i.a.createElement("option",{value:"1"},"One"),i.a.createElement("option",{value:"2"},"Two"),i.a.createElement("option",{value:"3"},"Three"),i.a.createElement("option",{value:"4"},"Four"),i.a.createElement("option",{value:"5"},"Five")),i.a.createElement("button",null,"Submit"))}}]),t}(i.a.Component),p=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).RecieveRating=function(e){a.setState({rating:e})},a.state={rating:0},a.item=[],a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){this.item=[];for(var e=1;e<=this.state.rating;e++)this.item.push(i.a.createElement("span",null,"*"));return i.a.createElement("div",{className:"card",style:{width:"18rem"}},i.a.createElement("img",{className:"card-img-top img-fluid",src:this.props.image,alt:"",style:{height:"10rem",width:"8rem"}}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h5",{className:"card-title"},this.props.Name),i.a.createElement("p",{className:"card-text"},this.props.Description),i.a.createElement("p",null,i.a.createElement("span",{className:"fa fa-star checked"}),i.a.createElement("span",{className:"fa fa-star checked"}),i.a.createElement("span",{className:"fa fa-star checked"}),i.a.createElement("span",{className:"fa fa-star"}),i.a.createElement("span",{className:"fa fa-star"}),i.a.createElement("span",null,"Stars: ",this.item.length>0?this.item:"No stars"))),i.a.createElement("div",null,i.a.createElement(d,{numberofStars:1,updateRating:this.RecieveRating})))}}]),t}(i.a.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.cards.map(function(e){return i.a.createElement(p,Object.assign({key:e.Id},e))})}}]),t}(i.a.Component),g=function(){return[{Id:1,Name:"Johnny Depp",Description:"Johnny Depp is perhaps one of the most versatile actors of his day and age in Hollywood",image:"https://m.media-amazon.com/images/M/MV5BMTM0ODU5Nzk2OV5BMl5BanBnXkFtZTcwMzI2ODgyNQ@@._V1_UY209_CR3,0,140,209_AL_.jpg"},{Id:2,Name:"Al Pacino",Description:"One of the greatest actors in all of film history, Al Pacino established himself during one of cinema's most vibrant decades, the 1970s, and has become an enduring and iconic figure in the world of American movies",image:"https://m.media-amazon.com/images/M/MV5BMTQzMzg1ODAyNl5BMl5BanBnXkFtZTYwMjAxODQ1._V1_UX140_CR0,0,140,209_AL_.jpg"}]},b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={cards:g()},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,{cards:this.state.cards}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.2b758eea.chunk.js.map