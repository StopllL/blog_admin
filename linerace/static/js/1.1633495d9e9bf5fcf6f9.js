webpackJsonp([1],{100:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("nav",{staticClass:"index_nav"},[a("router-link",{staticClass:"no_a_defult",class:0===t.active?"active":"",attrs:{to:"/"}},[a("span",{on:{click:function(n){t.clickHandler(0)}}},[a("i",{staticClass:"iconfont iconfont_se"},[t._v("")]),t._v("赛程")])]),t._v(" "),a("router-link",{staticClass:"no_a_defult",class:1===t.active?"active":"",attrs:{to:"/my"}},[a("span",{on:{click:function(n){t.clickHandler(1)}}},[a("i",{staticClass:"iconfont iconfont_my"},[t._v("")]),t._v("我的")])])],1)},staticRenderFns:[]}},105:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var A=function(t){return a.e(1).then(function(){return t(a(99))}.bind(null,a)).catch(a.oe)};n.default={data:function(){return{hasPersonMsg:!0}},methods:{gotoRegister:function(){if(this.hasPersonMsg)return void this.$router.push("register")},showCheckCardHandler:function(){this.$router.push({name:"checkcard",params:{next:"my"}})}},directives:{clickEffectLi:{bind:function(t){t.addEventListener("touchstart",function(){console.log(1),this.style.background="rgba(0,0,0,.1)"}),t.addEventListener("touchend",function(){this.style.background="rgba(0,0,0,0)"})}},clickEffectCheckcard:{bind:function(t){t.addEventListener("touchstart",function(){this.style.background="rgba(62,168,141,0.6)"}),t.addEventListener("touchend",function(){this.style.background="rgba(62,168,141,1)"})}}},components:{NavBar:A}}},109:function(t,n,a){n=t.exports=a(88)(!0),n.push([t.i,"#process[data-v-2a69bac5]{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.5);-webkit-transition:all 2s ease;transition:all 2s ease}#process #loading[data-v-2a69bac5]{text-align:center;font-size:.42667rem;color:#d1d1d1}#process #loading img[data-v-2a69bac5]{margin-top:23%;width:1.12rem;height:1.10667rem}section[data-v-2a69bac5]{color:#717989;padding-bottom:38px}.my_container[data-v-2a69bac5]{padding-bottom:20px;font-size:.32rem;border-bottom:1px solid #151820}.my_container_nomsg[data-v-2a69bac5]{position:relative;min-height:200px}.my_container_btn[data-v-2a69bac5]{position:absolute;top:0;left:0;right:0;bottom:0;margin:auto;width:4rem;height:1.06667rem;font-size:.4rem}.my_person_data[data-v-2a69bac5]{width:3.86667rem;float:left;text-align:center}.my_person_data p[data-v-2a69bac5]{margin-top:16px}.my_person_data img[data-v-2a69bac5]{display:inline-block;padding:30px 0;width:2.66667rem;height:2.66667rem}.my_person_msg[data-v-2a69bac5]{float:left}.my_person_msg li[data-v-2a69bac5]{margin-top:16px}.my_ps_msg_f[data-v-2a69bac5]{position:relative;color:#fff}.my_ps_msg_f i[data-v-2a69bac5]{font-size:.66667rem;line-height:.5;color:#748cad;vertical-align:middle}.my_tips_en[data-v-2a69bac5]{font-size:.29333rem}.my_list[data-v-2a69bac5]{border-bottom:1px solid #2f3647}.my_list li[data-v-2a69bac5]{width:100%;padding:20px 0;border-top:1px solid #2f3647;border-bottom:1px solid #151820;font-size:.32rem}.my_list_msg[data-v-2a69bac5]{float:left;text-indent:.53333rem}.my_list_msg_btn[data-v-2a69bac5]{float:right;width:1.6rem;margin-right:.53333rem;height:18px;color:#fff;background:url("+a(123)+") no-repeat 100%/.2rem .4rem}.check_card_into[data-v-2a69bac5]{position:fixed;bottom:60px;right:20px;height:60px;width:60px;text-align:center;line-height:60px;border-radius:50%;-webkit-box-shadow:0 0 0 6px #2d655d;box-shadow:0 0 0 6px #2d655d;background:#3ea88d;color:#fff}","",{version:3,sources:["D:/workProject/linerace/src/page/my.vue"],names:[],mappings:"AACA,0BACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,gCAAqC,AACrC,+BAAgC,AAChC,sBAAwB,CACzB,AACD,mCACE,kBAAmB,AACnB,oBAAsB,AACtB,aAAe,CAChB,AACD,uCACE,eAAgB,AAChB,cAAe,AACf,iBAAmB,CACpB,AACD,yBACE,cAAe,AACf,mBAAqB,CACtB,AACD,+BACE,oBAAqB,AACrB,iBAAmB,AACnB,+BAAiC,CAClC,AACD,qCACE,kBAAmB,AACnB,gBAAkB,CACnB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,eAAkB,CACnB,AACD,iCACE,iBAAkB,AAClB,WAAY,AACZ,iBAAmB,CACpB,AACD,mCACI,eAAiB,CACpB,AACD,qCACI,qBAAsB,AACtB,eAAgB,AAChB,iBAAkB,AAClB,iBAAmB,CACtB,AACD,gCACE,UAAY,CACb,AACD,mCACI,eAAiB,CACpB,AACD,8BACE,kBAAmB,AACnB,UAAe,CAChB,AACD,gCACI,oBAAsB,AACtB,eAAiB,AACjB,cAAe,AACf,qBAAuB,CAC1B,AACD,6BACE,mBAAsB,CACvB,AACD,0BACE,+BAAiC,CAClC,AACD,6BACI,WAAY,AACZ,eAAgB,AAChB,6BAA8B,AAC9B,gCAAiC,AACjC,gBAAmB,CACtB,AACD,8BACE,WAAY,AACZ,qBAAwB,CACzB,AACD,kCACE,YAAa,AACb,aAAc,AACd,uBAAyB,AACzB,YAAa,AACb,WAAe,AACf,mEAA6F,CAC9F,AACD,kCACE,eAAgB,AAChB,YAAa,AACb,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,kBAAmB,AACnB,iBAAkB,AAClB,kBAAmB,AACnB,qCAAsC,AAC9B,6BAA8B,AACtC,mBAAoB,AACpB,UAAe,CAChB",file:"my.vue",sourcesContent:["\n#process[data-v-2a69bac5] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n#process #loading[data-v-2a69bac5] {\n  text-align: center;\n  font-size: 0.42667rem;\n  color: #d1d1d1;\n}\n#process #loading img[data-v-2a69bac5] {\n  margin-top: 23%;\n  width: 1.12rem;\n  height: 1.10667rem;\n}\nsection[data-v-2a69bac5] {\n  color: #717989;\n  padding-bottom: 38px;\n}\n.my_container[data-v-2a69bac5] {\n  padding-bottom: 20px;\n  font-size: 0.32rem;\n  border-bottom: 1px solid #151820;\n}\n.my_container_nomsg[data-v-2a69bac5] {\n  position: relative;\n  min-height: 200px;\n}\n.my_container_btn[data-v-2a69bac5] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  width: 4rem;\n  height: 1.06667rem;\n  font-size: 0.4rem;\n}\n.my_person_data[data-v-2a69bac5] {\n  width: 3.86667rem;\n  float: left;\n  text-align: center;\n}\n.my_person_data p[data-v-2a69bac5] {\n    margin-top: 16px;\n}\n.my_person_data img[data-v-2a69bac5] {\n    display: inline-block;\n    padding: 30px 0;\n    width: 2.66667rem;\n    height: 2.66667rem;\n}\n.my_person_msg[data-v-2a69bac5] {\n  float: left;\n}\n.my_person_msg li[data-v-2a69bac5] {\n    margin-top: 16px;\n}\n.my_ps_msg_f[data-v-2a69bac5] {\n  position: relative;\n  color: #ffffff;\n}\n.my_ps_msg_f i[data-v-2a69bac5] {\n    font-size: 0.66667rem;\n    line-height: 0.5;\n    color: #748cad;\n    vertical-align: middle;\n}\n.my_tips_en[data-v-2a69bac5] {\n  font-size: 0.29333rem;\n}\n.my_list[data-v-2a69bac5] {\n  border-bottom: 1px solid #2f3647;\n}\n.my_list li[data-v-2a69bac5] {\n    width: 100%;\n    padding: 20px 0;\n    border-top: 1px solid #2f3647;\n    border-bottom: 1px solid #151820;\n    font-size: 0.32rem;\n}\n.my_list_msg[data-v-2a69bac5] {\n  float: left;\n  text-indent: 0.53333rem;\n}\n.my_list_msg_btn[data-v-2a69bac5] {\n  float: right;\n  width: 1.6rem;\n  margin-right: 0.53333rem;\n  height: 18px;\n  color: #ffffff;\n  background: url(./../assets/images/small_arr_right.png) no-repeat right center/0.2rem 0.4rem;\n}\n.check_card_into[data-v-2a69bac5] {\n  position: fixed;\n  bottom: 60px;\n  right: 20px;\n  height: 60px;\n  width: 60px;\n  text-align: center;\n  line-height: 60px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 0 0 6px #2d655d;\n          box-shadow: 0 0 0 6px #2d655d;\n  background: #3ea88d;\n  color: #ffffff;\n}\n"],sourceRoot:""}])},116:function(t,n,a){var A=a(109);"string"==typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);a(89)("68302e7e",A,!0)},123:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAeCAYAAADzXER0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM3RkJEQ0FDNzkwMDExRTdBMEJEQ0VFQ0FDNUYxOUJGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM3RkJEQ0FENzkwMDExRTdBMEJEQ0VFQ0FDNUYxOUJGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzdGQkRDQUE3OTAwMTFFN0EwQkRDRUVDQUM1RjE5QkYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzdGQkRDQUI3OTAwMTFFN0EwQkRDRUVDQUM1RjE5QkYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Sy2nEAAABwklEQVR42pRUPUsDQRS8XCCFH6SyEQuRtMFeUMTKNOJHo8TCMgas/Aoi2gpqpXidlRAEucTvWBhEQbCySJt/kMpCi0CI88IcPI/L3bowvMvLztvdtzsT2zhydy3LKgBvwOLh+tyXZThsYBvoBaYBd/O4lPgP+VL9ngKKKBA3JeeBZ5WbB06MyDhjE3EG+FD5Vay+F0WOtdvtzgcmDyC8Ayn1fx7FnUgyCwyz60NMtYAFFLiOJLNAmgWSTMmxMihQDWrYn4FJNYRZ4IepBK8wHUlmgReEJW7b4i4qKJCKJLPADcIa4J1rEHhkY8PJLCCd3lEpWfkWBZKBDQsamHwmd69S0ryMbfiMZftF3zN2jMjYvjRuBXhV6azpyoFP24iMM8u8c2BCpS9MVz6VbfoalrMNVi34Ov0pshU1hl4ViDkEuaYYU3VgDMRG6D2DKBp3Ac9VGiTWu6qKxEmEe6CHKTHFcYqm+9umesqK2OQZa6GqAnEE4UFpuUU7rnYzQG1DT8pFOs8SxFKYewqxT9Ti86/9MP+SEf/uHxWnuJOGqLwD4paJbztUiTeuqCIj01/2PbssVWREPqDZVbxnZyqrXwEGACnanUeNOBiiAAAAAElFTkSuQmCC"},127:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("section",[t.hasPersonMsg?a("div",{staticClass:"my_container c"},[t._m(0),t._v(" "),t._m(1)]):a("div",{staticClass:"my_container_nomsg"},[a("button",{staticClass:"my_container_btn",attrs:{type:"button"}},[t._v("填写资料")])]),t._v(" "),a("ul",{staticClass:"my_list"},[a("li",{directives:[{name:"clickEffectLi",rawName:"v-clickEffectLi"}],staticClass:"c"},[a("span",{staticClass:"my_mg my_list_msg"},[t._v("资格管理")]),a("span",{staticClass:"my_list_msg_btn"},[t._v("150个")])]),t._v(" "),a("li",{directives:[{name:"clickEffectLi",rawName:"v-clickEffectLi"}],staticClass:"c",on:{click:t.gotoRegister}},[a("span",{staticClass:"my_register my_list_msg"},[t._v("WPT在线注册")]),a("span",{staticClass:"my_list_msg_btn"})])]),t._v(" "),a("div",{directives:[{name:"clickEffectCheckcard",rawName:"v-clickEffectCheckcard"}],staticClass:"check_card_into",on:{click:t.showCheckCardHandler}},[t._v("\n\t\t检录牌\n\t")]),t._v(" "),a("Nav-bar",{attrs:{active:1}})],1)},staticRenderFns:[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("aside",{staticClass:"my_person_data"},[a("p",[t._v("No.19851122")]),t._v(" "),a("div",[a("img",{attrs:{src:"",alt:""}})]),t._v(" "),a("span",[t._v("点击更换照片")])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ul",{staticClass:"my_person_msg"},[a("li",[t._v("Weidade Zhuxi Xijinping")]),t._v(" "),a("li",[a("p",[a("span",[t._v("性别：")]),a("span",{staticClass:"my_ps_msg_f"},[t._v("男")])]),t._v(" "),a("p",{staticClass:"my_tips_en"},[t._v("Sex")])]),t._v(" "),a("li",[a("p",[a("span",[t._v("国家地区：")]),a("span",{staticClass:"my_ps_msg_f"},[t._v("中国 北京 东城")])]),t._v(" "),a("p",{staticClass:"my_tips_en"},[t._v("Country")])]),t._v(" "),a("li",[a("p",[a("span",[t._v("证件号码；")]),a("span",{staticClass:"my_ps_msg_f"},[t._v("11010119851122051X")])]),t._v(" "),a("p",{staticClass:"my_tips_en"},[t._v("ID Number")])]),t._v(" "),a("li",[a("p",[a("span",[t._v("手机号码：")]),a("span",{staticClass:"my_ps_msg_f"},[t._v("+186 13552118712 "),a("i",{staticClass:"iconfont"},[t._v("")])])]),t._v(" "),a("p",{staticClass:"my_tips_en"},[t._v("Phone Number")])])])}]}},92:function(t,n,a){function A(t){a(116)}var e=a(44)(a(105),a(127),A,"data-v-2a69bac5",null);t.exports=e.exports},96:function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={name:"nav",props:{active:{type:Number,default:0}},data:function(){return{index:0}},methods:{clickHandler:function(t){this.index=t}}}},97:function(t,n,a){n=t.exports=a(88)(!0),n.push([t.i,"#process[data-v-329571da]{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.5);-webkit-transition:all 2s ease;transition:all 2s ease}#process #loading[data-v-329571da]{text-align:center;font-size:.42667rem;color:#d1d1d1}#process #loading img[data-v-329571da]{margin-top:23%;width:1.12rem;height:1.10667rem}.no_a_defult[data-v-329571da]{text-decoration:none;color:#000}.index_nav[data-v-329571da]{position:fixed;bottom:0;left:0;width:100%;height:38px;line-height:38px;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:center;background:#161923}.index_nav a[data-v-329571da]{-webkit-box-flex:1;-ms-flex:1;flex:1;font-size:16px;font-weight:100;color:#748cae}.index_nav a span[data-v-329571da]{display:block;width:100%;height:100%}.index_nav a i[data-v-329571da]{font-weight:100;font-style:normal;display:inline-block;height:100%;margin-top:-3px;margin-right:8px;vertical-align:middle}.index_nav a i.iconfont_my[data-v-329571da]{font-size:26px}.index_nav a i.iconfont_se[data-v-329571da]{font-size:24px}.index_nav a.active[data-v-329571da]{color:#51d1b1}","",{version:3,sources:["D:/workProject/linerace/src/page/nav.vue"],names:[],mappings:"AACA,0BACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,MAAO,AACP,OAAQ,AACR,gCAAqC,AACrC,+BAAgC,AAChC,sBAAwB,CACzB,AACD,mCACE,kBAAmB,AACnB,oBAAsB,AACtB,aAAe,CAChB,AACD,uCACE,eAAgB,AAChB,cAAe,AACf,iBAAmB,CACpB,AACD,8BACE,qBAAsB,AACtB,UAAa,CACd,AACD,4BACE,eAAgB,AAChB,SAAU,AACV,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACnB,kBAAoB,CACrB,AACD,8BACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,eAAgB,AAChB,gBAAiB,AACjB,aAAe,CAChB,AACD,mCACI,cAAe,AACf,WAAY,AACZ,WAAa,CAChB,AACD,gCACI,gBAAiB,AACjB,kBAAmB,AACnB,qBAAsB,AACtB,YAAa,AACb,gBAAiB,AAEjB,iBAAkB,AAClB,qBAAuB,CAC1B,AACD,4CACI,cAAgB,CACnB,AACD,4CACI,cAAgB,CACnB,AACD,qCACE,aAAe,CAChB",file:"nav.vue",sourcesContent:["\n#process[data-v-329571da] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: all 2s ease;\n  transition: all 2s ease;\n}\n#process #loading[data-v-329571da] {\n  text-align: center;\n  font-size: 0.42667rem;\n  color: #d1d1d1;\n}\n#process #loading img[data-v-329571da] {\n  margin-top: 23%;\n  width: 1.12rem;\n  height: 1.10667rem;\n}\n.no_a_defult[data-v-329571da] {\n  text-decoration: none;\n  color: black;\n}\n.index_nav[data-v-329571da] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 38px;\n  line-height: 38px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  text-align: center;\n  background: #161923;\n}\n.index_nav a[data-v-329571da] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-size: 16px;\n  font-weight: 100;\n  color: #748cae;\n}\n.index_nav a span[data-v-329571da] {\n    display: block;\n    width: 100%;\n    height: 100%;\n}\n.index_nav a i[data-v-329571da] {\n    font-weight: 100;\n    font-style: normal;\n    display: inline-block;\n    height: 100%;\n    margin-top: -3px;\n    vertical-align: middle;\n    margin-right: 8px;\n    vertical-align: middle;\n}\n.index_nav a i.iconfont_my[data-v-329571da] {\n    font-size: 26px;\n}\n.index_nav a i.iconfont_se[data-v-329571da] {\n    font-size: 24px;\n}\n.index_nav a.active[data-v-329571da] {\n  color: #51d1b1;\n}\n"],sourceRoot:""}])},98:function(t,n,a){var A=a(97);"string"==typeof A&&(A=[[t.i,A,""]]),A.locals&&(t.exports=A.locals);a(89)("559ce896",A,!0)},99:function(t,n,a){function A(t){a(98)}var e=a(44)(a(96),a(100),A,"data-v-329571da",null);t.exports=e.exports}});
//# sourceMappingURL=1.1633495d9e9bf5fcf6f9.js.map