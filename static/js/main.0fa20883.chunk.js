(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(6),r=n.n(c),l=n(1),i=n(2),s=n(4),u=n(3),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={time:(new Date).toLocaleTimeString(),timer:null},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({timer:setInterval((function(){var e=new Date;t.setState({time:e.toLocaleTimeString()}),console.log(e.toLocaleTimeString())}),1e3)})}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timer)}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"React clock"),o.a.createElement("p",null,"Current time:"," ",this.state.time))}}]),n}(o.a.Component);n(12);var k=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!1,clockName:"\u0413\u041e\u0414\u0418\u041d\u041d\u0418\u041a"},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,this.state.isClockVisible&&o.a.createElement(m,{name:this.state.clockName}),o.a.createElement("button",{type:"button",onClick:function(){t.setState({isClockVisible:!0})}},"Show Clock"),o.a.createElement("button",{type:"button",onClick:function(){t.setState({isClockVisible:!1})}},"Hide Clock"),o.a.createElement("button",{type:"button",onClick:function(){var e=t.state.clockName,n=function(t,e){var n=t+Math.random()*(e+1-t);return Math.floor(n)}(1,1e3);t.setState({clockName:"\u0413\u041e\u0414\u0418\u041d\u041d\u0418\u041a".concat(n)}),!1===t.state.isClockVisible&&console.log("The Clock was renamed from ".concat(e," to \u0413\u041e\u0414\u0418\u041d\u041d\u0418\u041a").concat(n))}},"Set random name"))}}]),n}(o.a.Component);r.a.render(o.a.createElement(k,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.0fa20883.chunk.js.map