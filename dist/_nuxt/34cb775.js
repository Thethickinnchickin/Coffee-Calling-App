(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{317:function(t,e,r){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=4)}([function(t,e){function r(t,e){var r=t[1]||"",i=t[3];if(!i)return r;if(e&&"function"==typeof btoa){var o=n(i);return[r].concat(i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}))).concat([o]).join("\n")}return[r].join("\n")}function n(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=r(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e){t.exports=function(t,e,r,n,i){var o,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(o=t,a=t.default);var l,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):r&&(l=r),l){var c=u.functional,d=c?u.render:u.beforeCreate;c?u.render=function(t,e){return l.call(e),d(t,e)}:u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:a,options:u}}},function(t,e,r){function n(t){for(var e=0;e<t.length;e++){var r=t[e],n=c[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(o(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var a=[];for(i=0;i<r.parts.length;i++)a.push(o(r.parts[i]));c[r.id]={id:r.id,refs:1,parts:a}}}}function i(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function o(t){var e,r,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(f)return g;n.parentNode.removeChild(n)}if(h){var o=p++;n=v||(v=i()),e=a.bind(null,n,o,!1),r=a.bind(null,n,o,!0)}else n=i(),e=s.bind(null,n),r=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else r()}}function a(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function s(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=r(14),c={},d=u&&(document.head||document.getElementsByTagName("head")[0]),v=null,p=0,f=!1,g=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,r){f=r;var i=l(t,e);return n(i),function(e){for(var r=[],o=0;o<i.length;o++){var a=i[o];(s=c[a.id]).refs--,r.push(s)}for(e?n(i=l(t,e)):i=[],o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete c[s.id]}}}};var m=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){function n(t){r(13)}var i=r(1)(r(5),r(11),n,"data-v-34cbeed1",null);t.exports=i.exports},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(r(3));e.default=i.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){return t&&t.__esModule?t:{default:t}}(r(9));e.default={components:{star:i.default},model:{prop:"rating",event:"rating-selected"},props:{increment:{type:Number,default:1},rating:{type:Number,default:0},roundStartRating:{type:Boolean,default:!0},activeColor:{type:String,default:"#ffd055"},inactiveColor:{type:String,default:"#d8d8d8"},maxRating:{type:Number,default:5},starPoints:{type:Array,default:function(){return[]}},starSize:{type:Number,default:50},showRating:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1},textClass:{type:String,default:""},inline:{type:Boolean,default:!1},borderColor:{type:String,default:"#999"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},padding:{type:Number,default:0},rtl:{type:Boolean,default:!1},fixedPoints:{type:Number,default:null},glow:{type:Number,default:0},glowColor:{type:String,default:"#fff"}},created:function(){this.step=100*this.increment,this.currentRating=this.rating,this.selectedRating=this.currentRating,this.createStars(this.roundStartRating)},methods:{setRating:function(t,e){if(!this.readOnly){var r=this.rtl?(100-t.position)/100:t.position/100;this.currentRating=(t.id+r-1).toFixed(2),this.currentRating=this.currentRating>this.maxRating?this.maxRating:this.currentRating,this.createStars(),e?(this.selectedRating=this.currentRating,this.$emit("rating-selected",this.selectedRating),this.ratingSelected=!0):this.$emit("current-rating",this.currentRating)}},resetRating:function(){this.readOnly||(this.currentRating=this.selectedRating,this.createStars(this.shouldRound))},createStars:function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&this.round();for(var t=0;t<this.maxRating;t++){var e=0;t<this.currentRating&&(e=this.currentRating-t>1?100:100*(this.currentRating-t)),this.$set(this.fillLevel,t,Math.round(e))}},round:function(){var t=1/this.increment;this.currentRating=Math.min(this.maxRating,Math.ceil(this.currentRating*t)/t)}},computed:{formattedRating:function(){return null===this.fixedPoints?this.currentRating:this.currentRating.toFixed(this.fixedPoints)},shouldRound:function(){return this.ratingSelected||this.roundStartRating},margin:function(){return this.padding+this.borderWidth}},watch:{rating:function(t){this.currentRating=t,this.selectedRating=t,this.createStars(this.shouldRound)}},data:function(){return{step:0,fillLevel:[],currentRating:0,selectedRating:0,ratingSelected:!1}}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{fill:{type:Number,default:0},points:{type:Array,default:function(){return[]}},size:{type:Number,default:50},starId:{type:Number,required:!0},activeColor:{type:String,required:!0},inactiveColor:{type:String,required:!0},borderColor:{type:String,default:"#000"},borderWidth:{type:Number,default:0},roundedCorners:{type:Boolean,default:!1},rtl:{type:Boolean,default:!1},glow:{type:Number,default:0},glowColor:{type:String,required:!1}},created:function(){this.starPoints=this.points.length?this.points:this.starPoints,this.calculatePoints(),this.grad=this.getRandomId(),this.glowId=this.getRandomId()},computed:{starPointsToString:function(){return this.starPoints.join(",")},getGradId:function(){return"url(#"+this.grad+")"},getSize:function(){var t=this.roundedCorners&&this.borderWidth<=0?parseInt(this.size)-parseInt(this.border):this.size;return parseInt(t)+parseInt(this.border)},getFill:function(){return this.rtl?100-this.fill+"%":this.fill+"%"},border:function(){return this.roundedCorners&&this.borderWidth<=0?6:this.borderWidth},getBorderColor:function(){return this.roundedCorners&&this.borderWidth<=0?this.fill<=0?this.inactiveColor:this.activeColor:this.borderColor},maxSize:function(){return this.starPoints.reduce((function(t,e){return Math.max(t,e)}))},viewBox:function(){return"0 0 "+this.maxSize+" "+this.maxSize}},methods:{mouseMoving:function(t){this.$emit("star-mouse-move",{event:t,position:this.getPosition(t),id:this.starId})},getPosition:function(t){var e=.92*this.size,r=this.rtl?Math.min(t.offsetX,45):Math.max(t.offsetX,1),n=Math.round(100/e*r);return Math.min(n,100)},selected:function(t){this.$emit("star-selected",{id:this.starId,position:this.getPosition(t)})},getRandomId:function(){return Math.random().toString(36).substring(7)},calculatePoints:function(){var t=this;this.starPoints=this.starPoints.map((function(e){return t.size/t.maxSize*e+1.5*t.border}))}},data:function(){return{starPoints:[19.8,2.2,6.6,43.56,39.6,17.16,0,17.16,33,43.56],grad:"",glowId:""}}}},function(t,e,r){(t.exports=r(0)(void 0)).push([t.i,".vue-star-rating-star[data-v-21f5376e]{overflow:visible!important}",""])},function(t,e,r){(t.exports=r(0)(void 0)).push([t.i,".vue-star-rating-star[data-v-34cbeed1]{display:inline-block}.vue-star-rating-pointer[data-v-34cbeed1]{cursor:pointer}.vue-star-rating[data-v-34cbeed1]{display:flex;align-items:center}.vue-star-rating-inline[data-v-34cbeed1]{display:inline-flex}.vue-star-rating-rating-text[data-v-34cbeed1]{margin-top:7px;margin-left:7px}.vue-star-rating-rtl[data-v-34cbeed1]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-34cbeed1]{margin-right:10px;direction:rtl}",""])},function(t,e,r){function n(t){r(12)}var i=r(1)(r(6),r(10),n,"data-v-21f5376e",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticClass:"vue-star-rating-star",attrs:{height:t.getSize,width:t.getSize,viewBox:t.viewBox},on:{mousemove:t.mouseMoving,click:t.selected}},[r("linearGradient",{attrs:{id:t.grad,x1:"0",x2:"100%",y1:"0",y2:"0"}},[r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.inactiveColor:t.activeColor}}),t._v(" "),r("stop",{attrs:{offset:t.getFill,"stop-color":t.rtl?t.activeColor:t.inactiveColor}})],1),t._v(" "),r("filter",{attrs:{id:t.glowId,height:"130%",width:"130%",filterUnits:"userSpaceOnUse"}},[r("feGaussianBlur",{attrs:{stdDeviation:t.glow,result:"coloredBlur"}}),t._v(" "),r("feMerge",[r("feMergeNode",{attrs:{in:"coloredBlur"}}),t._v(" "),r("feMergeNode",{attrs:{in:"SourceGraphic"}})],1)],1),t._v(" "),r("polygon",{directives:[{name:"show",rawName:"v-show",value:t.fill>1,expression:"fill > 1"}],attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.glowColor,filter:"url(#"+this.glowId+")"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId,stroke:t.getBorderColor,"stroke-width":t.border,"stroke-linejoin":t.roundedCorners?"round":"miter"}}),t._v(" "),r("polygon",{attrs:{points:t.starPointsToString,fill:t.getGradId}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["vue-star-rating",{"vue-star-rating-rtl":t.rtl},{"vue-star-rating-inline":t.inline}]},[r("div",{staticClass:"vue-star-rating",on:{mouseleave:t.resetRating}},[t._l(t.maxRating,(function(e){return r("span",{key:e,class:[{"vue-star-rating-pointer":!t.readOnly},"vue-star-rating-star"],style:{"margin-right":t.margin+"px"}},[r("star",{attrs:{fill:t.fillLevel[e-1],size:t.starSize,points:t.starPoints,"star-id":e,step:t.step,"active-color":t.activeColor,"inactive-color":t.inactiveColor,"border-color":t.borderColor,"border-width":t.borderWidth,"rounded-corners":t.roundedCorners,rtl:t.rtl,glow:t.glow,"glow-color":t.glowColor},on:{"star-selected":function(e){t.setRating(e,!0)},"star-mouse-move":t.setRating}})],1)})),t._v(" "),t.showRating?r("span",{class:["vue-star-rating-rating-text",t.textClass]},[t._v(" "+t._s(t.formattedRating))]):t._e()],2)])},staticRenderFns:[]}},function(t,e,r){var n=r(7);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),r(2)("0ab8a16d",n,!0)},function(t,e,r){var n=r(8);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),r(2)("2e648ff1",n,!0)},function(t,e){t.exports=function(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(l):r.push(n[a]={id:a,parts:[l]})}return r}}])},487:function(t,e,r){"use strict";r.r(e);var n=r(317),o={components:{StarRating:r.n(n).a},props:["product","reviews","reviewPercents"]},l=r(40),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("hr"),t._v(" "),r("div",{staticClass:"reviewsMedley"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-4 col-md-5 col-sm-12"},[r("span",{staticClass:"a-color-base"},[r("h2",[t._v(t._s(t.product.reviews.length)+" customer reviews")])]),t._v(" "),r("div",{staticClass:"cr-widget-ACR"},[r("span",[r("no-client",[r("star-rating",{attrs:{rating:t.product.averageRating,"show-rating":!1,"round-start-rating":!1,glow:1,"border-width":1,"rounded-corners":!0,"read-only":!0,"star-size":18,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]}})],1),t._v(" "),r("span",[t._v("\n              "+t._s(t.product.averageRating)+" out of 5 stars\n              "),r("i",{staticClass:"a-icon a-icon-popover"})])],1)]),t._v(" "),r("div",{staticClass:"cr-widget-histogram",attrs:{id:"fiveStars"}},[r("div",{staticClass:"row a-histogrm-row"},[t._m(0),t._v(" "),r("div",{staticClass:"col-md-8 col-sm-8 col-8 pr-0"},[r("div",[r("span",[r("div",{staticClass:"a-meter 5star"},[r("div",{staticClass:"a-meter-bar a-meter-filled",style:{width:t.reviewPercents.five+"%"}})])])])]),t._v(" "),r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap text-right"},[r("span",[t._v(t._s(t.reviewPercents.five)+"%")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])]),t._v(" "),r("div",{staticClass:"row a-histogrm-row",staticStyle:{"margin-top":"-15px"}},[t._m(1),t._v(" "),r("div",{staticClass:"col-md-8 col-sm-8 col-8 pr-0"},[r("div",[r("span",[r("div",{staticClass:"a-meter 5star"},[r("div",{staticClass:"a-meter-bar a-meter-filled",style:{width:t.reviewPercents.four+"%"}})])])])]),t._v(" "),r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap text-right"},[r("span",[t._v(t._s(t.reviewPercents.four)+"%")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])]),t._v(" "),r("div",{staticClass:"row a-histogrm-row",staticStyle:{"margin-top":"-15px"}},[t._m(2),t._v(" "),r("div",{staticClass:"col-md-8 col-sm-8 col-8 pr-0"},[r("div",[r("span",[r("div",{staticClass:"a-meter 5star"},[r("div",{staticClass:"a-meter-bar a-meter-filled",style:{width:t.reviewPercents.three+"%"},attrs:{id:"threeStars"}})])])])]),t._v(" "),r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap text-right"},[r("span",[t._v(t._s(t.reviewPercents.three)+"%")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])]),t._v(" "),r("div",{staticClass:"row a-histogrm-row",staticStyle:{"margin-top":"-15px"}},[t._m(3),t._v(" "),r("div",{staticClass:"col-md-8 col-sm-8 col-8 pr-0"},[r("div",[r("span",[r("div",{staticClass:"a-meter 5star"},[r("div",{staticClass:"a-meter-bar a-meter-filled",style:{width:t.reviewPercents.two+"%"},attrs:{id:"twoStars"}})])])])]),t._v(" "),r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap text-right"},[r("span",[t._v(t._s(t.reviewPercents.two)+"%")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])]),t._v(" "),r("div",{staticClass:"row a-histogrm-row",staticStyle:{"margin-top":"-15px"}},[t._m(4),t._v(" "),r("div",{staticClass:"col-md-8 col-sm-8 col-8 pr-0"},[r("div",[r("span",[r("div",{staticClass:"a-meter 5star"},[r("div",{staticClass:"a-meter-bar a-meter-filled",style:{width:t.reviewPercents.one+"%"},attrs:{id:"oneStars"}})])])])]),t._v(" "),r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap text-right"},[r("span",[t._v(t._s(t.reviewPercents.one)+"%")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])]),t._v(" "),r("div",{staticClass:"row a-histogrm-row",staticStyle:{"margin-top":"-15px"}},[t._m(5),t._v(" "),r("div",{staticClass:"col-md-8 col-sm-8 col-8 pr-0"},[r("div",[r("span",[r("div",{staticClass:"a-meter 5star"},[r("div",{staticClass:"a-meter-bar a-meter-filled",style:{width:t.reviewPercents.zero+"%"},attrs:{id:"zeroStars"}})])])])]),t._v(" "),r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap text-right"},[r("span",[t._v(t._s(t.reviewPercents.zero)+"%")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])])]),t._v(" "),t._m(6),t._v(" "),r("h3",{staticClass:"a-spacing-micro"},[t._v("Review this product")]),t._v(" "),r("div",{staticClass:"a-row a-spacing-large"},[t._v("Share your thoughts with other customers")]),t._v(" "),r("div",{staticClass:"a-row"},[r("span",{staticClass:"a-button-base writeReviewButton cm-cr-button-wide"},[r("span",{staticClass:"a-button-inner"},[r("nuxt-link",{staticClass:"a-button-text",attrs:{to:"/reviews/"+t.product._id}},[t._v("Write a customer review")])],1)])]),t._v(" "),t._m(7)]),t._v(" "),r("div",{staticClass:"col-lg-6 col-md-7 col-sm-12"},[r("div",{staticClass:"cr-widget-focalreviews"},[r("div",{staticClass:"card-padding"},[t._m(8),t._v(" "),t._l(t.reviews,(function(e){return r("div",{key:e._id,staticClass:"review-body"},[r("div",{staticClass:"genome-widget"},[r("span",[t._m(9,!0),t._v(" "),r("div",{staticClass:"profile-content"},[r("span",{staticClass:"a-profile-name"},[t._v(t._s(e.user.name))])])])]),t._v(" "),r("div",{staticClass:"a-row"},[r("span",t._l(e.rating,(function(i){return r("i",{key:i,staticClass:"fas fa-star"})})),0),t._v(" "),r("span",{staticClass:"a-letter-space"}),t._v(" "),r("span",{staticClass:"review-title"},[t._v(t._s(e.headline))])]),t._v(" "),r("div",{staticClass:"review-data"}),t._v(" "),r("div",{staticClass:"review-body"},[r("span",[t._v(t._s(e.body))])])])}))],2)]),t._v(" "),r("div",{staticClass:"review-footer"},[r("div",{staticClass:"a-row"},[r("span",{staticClass:"a-button a-button-base writeReviewButton",attrs:{id:"a-autoid-15"}},[r("span",{staticClass:"a-button-inner"},[r("nuxt-link",{staticClass:"a-button-text",attrs:{to:"/reviews/"+t.product._id}},[t._v("Write a customer review")])],1)])])])]),t._v(" "),r("div",{staticClass:"col-lg-2 col-md-0 col-sm-0"})])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap"},[r("span",[t._v("5 star")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap"},[r("span",[t._v("4 star")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap"},[r("span",[t._v("3 star")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap"},[r("span",[t._v("2 star")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap"},[r("span",[t._v("1 star")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-2 col-sm-2 col-2 pr-0"},[r("div",{staticClass:"aok-nowrap"},[r("span",[t._v("0 star")]),t._v(" "),r("span",{staticClass:"a-letter-space"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clearfix"},[e("div",{staticClass:"float-left"},[e("hr",{staticClass:"a-spacing-large"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"clearfix"},[e("div",{staticClass:"float-left"},[e("hr",{staticClass:"mt-4 a-spacing-large"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"review-sort-type"},[r("span",{staticClass:"a-dropdown-container"},[r("span",{staticClass:"a-button a-button-dropdown"},[r("span",{staticClass:"a-button-inner"},[r("span",{staticClass:"a-button-text"},[r("span",{staticClass:"a-dropdown-prompt"},[t._v("Reviews")])]),t._v(" "),r("i",{staticClass:"a-icon a-icon-dropdown"})])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile-avatar"},[e("img",{attrs:{height:"150",width:"150",alt:"Owner Image",src:"https://images-na.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png"}})])}],!1,null,null,null);e.default=component.exports}}]);