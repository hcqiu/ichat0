(function(e){function t(t){for(var n,a,o=t[0],c=t[1],i=t[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(u,a)&&u[a]&&p.push(u[a][0]),u[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,a=1;a<r.length;a++){var o=r[a];0!==u[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},u={app:0},s=[];function o(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-6d6a30e2":"2a73dc6f"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-6d6a30e2":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-6d6a30e2":"50891301"}[e]+".css",u=c.p+n,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var i=s[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===n||d===u))return t()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){i=p[o],d=i.getAttribute("data-href");if(d===n||d===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||u,s=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete a[e],f.parentNode.removeChild(f),r(s)},f.href=u;var g=document.getElementsByTagName("head")[0];g.appendChild(f)})).then((function(){a[e]=0})));var n=u[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,r){n=u[e]=[t,r]}));t.push(n[2]=s);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=o(e);var p=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(f);var r=u[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",p.name="ChunkLoadError",p.type=n,p.request=a,r[1](p)}u[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var f=d;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},"0613":function(e,t,r){"use strict";var n,a,u=r("8bbf"),s=r.n(u),o=r("5880"),c=r.n(o),i=(r("96cf"),r("1da1")),d="set_user",p="clear_user",f="set_token",g="set_mobile",m="set_background",h=r("48b8"),l=r("d54a").default,b=(r("3f4c").default,{register:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=4,l.register(t);case 4:if(a=r.sent,u=Object(h["g"])(a),!u){r.next=10;break}return n(d,u.user),n(f,u.token),r.abrupt("return",u);case 10:case"end":return r.stop()}}),r)})))()},login:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,l.login(t);case 3:if(a=r.sent,u=Object(h["g"])(a),!u){r.next=10;break}return n(d,u.user),n(f,u.token),r.abrupt("return",u);case 10:case"end":return r.stop()}}),r)})))()}}),v=b,I=r("ade3"),y=r("a78e"),w=r.n(y),O=(n={},Object(I["a"])(n,d,(function(e,t){e.user=t,w.a.set("user",t,{expires:3650})})),Object(I["a"])(n,p,(function(e){e.user={userId:"",username:"",password:"",avatar:"",createTime:0,publicId:""},w.a.set("user","")})),Object(I["a"])(n,f,(function(e,t){e.token=t,w.a.set("token",t,{expires:3})})),Object(I["a"])(n,g,(function(e,t){e.mobile=t})),Object(I["a"])(n,m,(function(e,t){e.background=t,localStorage.setItem("background",t)})),n),j=O,R={user:function(e){e.user;var t=w.a.get("user");return t?(e.user=JSON.parse(t),e.user):{}},mobile:function(e){return e.mobile},background:function(e){return e.background,localStorage.getItem("background")}},G=R,k={user:{userId:"",username:"",password:"",avatar:"",createTime:0,publicId:""},token:"",mobile:!1,background:""},x=k,S={namespaced:!0,state:x,mutations:j,actions:v,getters:G},_=S,U=(r("99af"),r("b85c")),N=r("8055"),$=r.n(N),A="set_socket",P="set_dropped",E="set_active_group_user",M="set_active_room",z="set_user_gather",T="set_friend_gather",F="set_group_gather",B="add_group_message",C="set_group_messages",D="add_friend_message",q="set_friend_messages",J="del_group",L="del_friend",H="set_unread_gather",K="lose_unread_gather",V=r("3fff"),W=r("5ab6"),Q=r("302f"),Z=r("a090").default,X=r("3f4c").default,Y={addGroup:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,e.state,e.dispatch,e.rootState,!t.code){r.next=4;break}return r.abrupt("return",s.a.prototype.$message.error(t.msg));case 4:s.a.prototype.$message.success(t.msg),n(F,t.data);case 6:case"end":return r.stop()}}),r)})))()},joinGroup:function(e,t){var r=e.commit,n=e.state,a=(e.dispatch,e.rootState),u=a.app.user;if(t.code)return s.a.prototype.$message.error(t.msg);var o=t.data.user,c=t.data.group;if(o.userId!=u.userId)return r(z,o),s.a.prototype.$message.info("".concat(o.username,"加入群").concat(c.groupName));n.groupGather[c.groupId]||r(F,c),s.a.prototype.$message.info("成功加入群".concat(c.groupName)),r(M,n.groupGather[c.groupId])},groupMessage:function(e,t){var r=e.commit,n=e.state;e.dispatch,e.rootState;if(t.code)s.a.prototype.$message.error(t.msg);else{r(B,t.data);var a=n.activeRoom;a&&a.groupId!==t.data.groupId&&r(H,t.data.groupId)}},serviceMessage:function(e,t){e.commit,e.state;var r=e.dispatch;e.rootState;r("groupMessage",{code:Q["a"].OK,msg:"",data:{userId:"0",groupId:W["a"].groupId,content:t,width:void 0,height:void 0,messageType:"text"}})},connectSocket:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n,a,u,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.commit,n=e.state,a=e.dispatch,u=e.rootState,X.joinGroup({userId:u.app.user.userId,username:u.app.user.username,groupId:W["a"].groupId,groupName:W["a"].groupName}),Z.serviceInit(),o=u.app.user,Z.getAllData(o),c=$.a.connect("/?userId=".concat(o.userId),{reconnection:!0}),c.on("connect",Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:c.emit("chatData",o),r(A,c);case 3:case"end":return e.stop()}}),e)})))),c.on("activeGroupUser",(function(e){r(E,e.data)})),c.on("addGroup",(function(e){if(e.code)return s.a.prototype.$message.error(e.msg);s.a.prototype.$message.success(e.msg),r(F,e.data)})),c.on("joinGroup",function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.code){e.next=3;break}return e.abrupt("return",s.a.prototype.$message.error(t.msg));case 3:if(a=t.data.user,u=t.data.group,a.userId==o.userId){e.next=10;break}return r(z,a),e.abrupt("return",s.a.prototype.$message.info("".concat(a.username,"加入群").concat(u.groupName)));case 10:n.groupGather[u.groupId]||(r(F,u),c.emit("chatData",o)),s.a.prototype.$message.info("成功加入群".concat(u.groupName)),r(M,n.groupGather[u.groupId]);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c.on("joinGroupSocket",(function(e){if(e.code)return s.a.prototype.$message.error(e.msg);var t=e.data.user,a=e.data.group,u=n.friendGather;if(t.userId!=o.userId){var c;if(r(z,t),u[t.userId])u[t.userId].messages&&(c=u[t.userId].messages),r(T,t),r(q,c);if(window.msg===t.userId)return;return window.msg=t.userId,s.a.prototype.$message.info("".concat(t.username,"加入群").concat(a.groupName))}n.groupGather[a.groupId]||r(F,a),r(z,t)})),c.on("groupMessage",(function(e){if(e.code)s.a.prototype.$message.error(e.msg);else{r(B,e.data);var t=n.activeRoom;t&&t.groupId!==e.data.groupId&&r(H,e.data.groupId)}})),c.on("addFriend",(function(e){e.code?s.a.prototype.$message.error(e.msg):(r(T,e.data),r(z,e.data),s.a.prototype.$message.info(e.msg),c.emit("joinFriendSocket",{userId:o.userId,friendId:e.data.userId}))})),c.on("joinFriendSocket",(function(e){e.code})),c.on("friendMessage",(function(e){if(e.code)s.a.prototype.$message.error(e.msg);else if(e.data.friendId===o.userId||e.data.userId===o.userId){r(D,e.data);var t=n.activeRoom;t&&t.userId!==e.data.userId&&t.userId!==e.data.friendId&&r(H,e.data.userId)}})),c.on("chatData",(function(e){if(e.code)return s.a.prototype.$message.error(e.msg);a("handleChatData",e.data),r(P,!1)})),c.on("exitGroup",(function(e){e.code?s.a.prototype.$message.error(e.msg):(r(J,e.data),r(M,n.groupGather[V["b"]]),s.a.prototype.$message.success(e.msg))})),c.on("exitFriend",(function(e){e.code?s.a.prototype.$message.error(e.msg):(r(L,e.data),r(M,n.groupGather[V["b"]]),s.a.prototype.$message.success(e.msg))}));case 19:case"end":return t.stop()}}),t)})))()},handleChatData:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a,u,s,o,c,i,d,p,f,g,m,h,l,b,v,I,y,w,O,j;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.commit,e.dispatch,a=e.state,u=e.rootState,s=u.app.user,o=a.socket,c=a.groupGather,i=t.groupData,d=t.friendData,p=t.userData,i.length){f=Object(U["a"])(i);try{for(f.s();!(g=f.n()).done;)m=g.value,o.emit("joinGroupSocket",{groupId:m.groupId,userId:s.userId}),n(F,m)}catch(R){f.e(R)}finally{f.f()}}if(d.length){h=Object(U["a"])(d);try{for(h.s();!(l=h.n()).done;)b=l.value,o.emit("joinFriendSocket",{userId:s.userId,friendId:b.userId}),n(T,b)}catch(R){h.e(R)}finally{h.f()}}if(p.length){v=Object(U["a"])(p);try{for(v.s();!(I=v.n()).done;)y=I.value,n(z,y)}catch(R){v.e(R)}finally{v.f()}}if(w=a.activeRoom,O=a.groupGather,j=a.friendGather,w){r.next=15;break}return r.abrupt("return",n(M,c[V["b"]]));case 15:n(M,O[w.groupId]||j[w.userId]);case 16:case"end":return r.stop()}}),r)})))()}},ee=Y,te=(r("07ac"),a={},Object(I["a"])(a,A,(function(e,t){e.socket=t})),Object(I["a"])(a,P,(function(e,t){e.dropped=t})),Object(I["a"])(a,E,(function(e,t){e.activeGroupUser=t;for(var r=e.userGather,n=0,a=Object.values(t[V["b"]]);n<a.length;n++){var u=a[n];s.a.set(r,u.userId,u)}})),Object(I["a"])(a,B,(function(e,t){e.groupGather[t.groupId].messages?e.groupGather[t.groupId].messages.push(t):s.a.set(e.groupGather[t.groupId],"messages",[t])})),Object(I["a"])(a,C,(function(e,t){t&&t.length&&s.a.set(e.groupGather[t[0].groupId],"messages",t)})),Object(I["a"])(a,D,(function(e,t){var r=this.getters["app/user"].userId;t.friendId===r?e.friendGather[t.userId].messages?e.friendGather[t.userId].messages.push(t):s.a.set(e.friendGather[t.userId],"messages",[t]):e.friendGather[t.friendId].messages?e.friendGather[t.friendId].messages.push(t):s.a.set(e.friendGather[t.friendId],"messages",[t])})),Object(I["a"])(a,q,(function(e,t){var r=this.getters["app/user"].userId;t&&t.length&&(t[0].friendId===r?s.a.set(e.friendGather[t[0].userId],"messages",t):s.a.set(e.friendGather[t[0].friendId],"messages",t))})),Object(I["a"])(a,M,(function(e,t){e.activeRoom=t})),Object(I["a"])(a,F,(function(e,t){s.a.set(e.groupGather,t.groupId,t)})),Object(I["a"])(a,z,(function(e,t){s.a.set(e.userGather,t.userId,t)})),Object(I["a"])(a,T,(function(e,t){s.a.set(e.friendGather,t.userId,t)})),Object(I["a"])(a,J,(function(e,t){s.a.delete(e.groupGather,t.groupId)})),Object(I["a"])(a,L,(function(e,t){s.a.delete(e.friendGather,t.friendId)})),Object(I["a"])(a,H,(function(e,t){e.unReadGather[t]?++e.unReadGather[t]:s.a.set(e.unReadGather,t,1)})),Object(I["a"])(a,K,(function(e,t){s.a.set(e.unReadGather,t,0)})),a),re=te,ne={socket:function(e){return e.socket},dropped:function(e){return e.dropped},activeGroupUser:function(e){return e.activeGroupUser},activeRoom:function(e){return e.activeRoom},groupGather:function(e){return e.groupGather},friendGather:function(e){return e.friendGather},userGather:function(e){return e.userGather},unReadGather:function(e){return e.unReadGather}},ae=ne,ue={socket:null,dropped:!1,activeGroupUser:{},activeRoom:null,groupGather:{},userGather:{},friendGather:{},unReadGather:{}},se=ue,oe={namespaced:!0,state:se,mutations:re,actions:ee,getters:ae},ce=oe;s.a.use(c.a);var ie={app:_,chat:ce};t["a"]=new c.a.Store({modules:ie})},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},15:function(e,t){},"15a6":function(e,t,r){"use strict";t["a"]={roomObjects:{},user:{username:"",userId:""}}},16:function(e,t){},17:function(e,t){},18:function(e,t){},19:function(e,t){},2:function(e,t){},20:function(e,t){},21:function(e,t){},22:function(e,t){},23:function(e,t){},24:function(e,t){},3:function(e,t){},"302f":function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e[e["OK"]=0]="OK",e[e["FAIL"]=1]="FAIL",e[e["ERROR"]=2]="ERROR"}(n||(n={}))},"3f4c":function(e,t,r){"use strict";r.r(t);r("99af"),r("7db0"),r("ac1f"),r("1276");var n=r("3835"),a=r("b85c"),u=(r("96cf"),r("1da1")),s=r("cfbb"),o=r("15a6"),c=r("0613"),i=r("302f"),d=(r("5ab6"),r("739d")),p=r("a002"),f=r.n(p),g=function(e,t){var r=e.query.userName;GROUP_USER.findGroupByUserName(r).then((function(e){return t.json({status:2e3,data:e,msg:"获取群聊成功"})})).catch((function(e){return t.json({status:2003,data:e,msg:"服务端错误，请稍后重试！"})}))},m=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.body,a=n.userId,u=n.groupIds,e.next=4,GROUP_USER.find({groupId:{$in:u},userId:a}).populate("groupId");case 4:return s=e.sent,e.abrupt("return",r.json({status:2e3,data:s,msg:"获取成功！"}));case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),h=function(e,t){var r=e.query.id;GROUP.find({_id:r}).then((function(e){if(!e.length)return t.json({status:2001,data:"",msg:"未获取到群聊信息"});GROUP_USER.findGroupUsersByGroupId(r).then((function(r){return t.json({status:2e3,data:{group:e,users:r},msg:"获取群聊详情成功"})}))})).catch((function(e){return t.json({status:2003,data:e,msg:"服务端错误，请稍后重试！"})}))},l=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,u,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.query,a=n.type,u=n.q,s=n.page,o=n.pageSize,GROUP.searchGroup(a,u,s,o).then((function(e){return r.json({status:2e3,data:e,msg:"success"})})).catch((function(e){return r.json({status:2003,data:e,msg:"服务器错误，请稍后重试！"})}));case 2:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),b=function(e){var t=e.userId,r=e.groupId,n=e.userName;GROUP_USER.findOne({userId:t,groupId:r}).then((function(t){t||GROUP_USER.insertMany(e).then((function(e){GROUP.update({_id:r},{$inc:{userNum:1}});var t={roomid:r,message:"".concat(n,"加入群聊"),messageType:"sys",isReadUser:[]};insertNewGroupNews(t)}))})).catch((function(e){return res.json({status:2003,data:e,msg:"服务器错误，请稍后重试！"})}))},v=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,u,s,o,c,i,d,p,f,g,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ACCOUNTBASE.findOne({status:"0",type:"2"});case 3:return n=e.sent,e.next=6,ACCOUNTBASE.findOneAndUpdate({code:n.code},{status:"1"});case 6:return a=t.body,u=a.title,s=a.desc,o=void 0===s?"":s,c=a.holderName,i=a.holderUserId,d=t.body.img||"/img/zwsj5.png",p={title:u,desc:o,img:d,code:n.code,holderName:c,holderUserId:i},e.next=12,GROUP.insertMany(p);case 12:return f=e.sent,g={groupId:f[0]._id,userId:i,userName:c,manager:0,holder:1,card:""},e.next=16,GROUP_USER.insertMany(g);case 16:return m=e.sent,e.abrupt("return",r.json({status:2e3,data:{groupData:f,groupUserData:m}}));case 20:return e.prev=20,e.t0=e["catch"](0),e.abrupt("return",r.json({status:2003,data:e.t0,msg:"服务器错误，请稍后重试！"}));case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,r){return e.apply(this,arguments)}}(),I=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,GROUP.find().populate({path:"holderUserId",select:"nickname photo signature"});case 2:return n=e.sent,e.abrupt("return",r.json({status:2e3,data:n,msg:"获取成功！"}));case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),y=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r={groupId:t.groupId,groupName:t.groupName},n={userId:t.userId,username:t.username},c["a"].dispatch("chat/joinGroup",{code:i["a"].OK,msg:"".concat(n.username,"加入群").concat(r.groupName),data:{group:r,user:n}});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s["a"].getGroupMessage(t,r,n);case 2:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),O=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"image"===t.messageType&&(r="".concat(Date.now(),"$").concat(t.userId,"$").concat(t.width,"$").concat(t.height),n=createWriteStream(join("public/static",r)),n.write(t.content),t.content=r),t.time=(new Date).valueOf(),o["a"].roomObjects[t.groupId].sendMessage(t.content),w(t.groupId,t.content,o["a"].user.userId);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(u["a"])(regeneratorRuntime.mark((function e(t){var r,u,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r={},u=Object(a["a"])(t);try{for(c=function(){var e=s.value,t={appId:"ichat"},a=Object(d["a"])(t,e);a.onPeerJoin((function(e){}));var u=a.makeAction("message"),c=Object(n["a"])(u,2),i=c[0],p=c[1];p((function(t,r){w(e,t,o["a"].roomObjects[e].idsToUserIds[r])}));var f={},g={};f[d["b"]]=o["a"].user.username,g[d["b"]]=o["a"].user.userId,r[e]={object:a,sendMessage:i,idsToNames:f,idsToUserIds:g};var m=a.makeAction("name"),h=Object(n["a"])(m,2),l=h[0],b=h[1];l(o["a"].user.username+":"+o["a"].user.userId),a.onPeerJoin((function(e){return l(o["a"].user.username+":"+o["a"].user.userId,e)})),b((function(t,r){o["a"].roomObjects[e].idsToNames[r]=t.split(":")[0],o["a"].roomObjects[e].idsToUserIds[r]=t.split(":")[1]}))},u.s();!(s=u.n()).done;)c()}catch(i){u.e(i)}finally{u.f()}return o["a"].roomObjects=r,e.prev=4,e.next=7,f.a.setItem("roomService",r);case 7:e.sent,e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4);case 14:return e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();t["default"]={getMyGroup:g,getGroupInfo:h,searchGroup:l,addNewGroupUser:b,createGroup:v,getRecentGroup:m,getAllGroup:I,joinGroup:y,roomInit:j,sendGroupMessage:O}},"3fff":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n="阿童木聊天室",a="https://images.weserv.nl/?url=https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/453b8ebcdefa46a69c620da13f346ce2~tplv-k3u1fbpfcp-zoom-1.image?imageView2/2/w/800/q/85"},4:function(e,t){},"48b8":function(e,t,r){"use strict";r.d(t,"g",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"e",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return d})),r.d(t,"f",(function(){return p}));r("c975"),r("4d63"),r("ac1f"),r("25f0");var n=r("8bbf"),a=r.n(n);r("99e5");function u(e){var t=e.code,r=e.msg,n=e.data;if(!t)return r&&a.a.prototype.$message.success(r),n;a.a.prototype.$message.error(r)}function s(e,t){return t.indexOf(e)>=0}function o(e){return e}function c(e){var t=new RegExp(/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/);return t.test(e)}function i(e){var t=a.a.prototype.$moment;return t().add(-1,"days").startOf("day")>e?t(e).format("M/D HH:mm"):t().startOf("day")>e?"昨天 "+t(e).format("HH:mm"):(new Date).valueOf()>e+3e5?t(e).format("HH:mm"):t(e).format("HH:mm:ss")}function d(e){var t=/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;return 0===e.length?(a.a.prototype.$message.error("请输入名字"),!1):t.test(e)?!(e.length>9)||(a.a.prototype.$message.error("名字太长"),!1):(a.a.prototype.$message.error("名字只含有汉字、字母、数字和下划线 不能以下划线开头和结尾"),!1)}function p(e){var t=/^[0-9A-Z_a-z]+$/gi;return 0===e.length?(a.a.prototype.$message.error("请输入密码"),!1):t.test(e)?!(e.length>9)||(a.a.prototype.$message.error("密码太长"),!1):(a.a.prototype.$message.error("密码只含有字母、数字和下划线"),!1)}},5:function(e,t){},5880:function(e,t){e.exports=Vuex},"5ab6":function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return a}));var n={groupId:"0",groupName:"服务号"},a=["你好。欢迎使用去中心化聊天网页。本网页采用vuex，web3，webrtc等技术开发，所有数据保存在您的设备上，或加密保存在您好友的设备上。","添加好友：点击左上角的加号，点击搜索用户，输入好友分享给您的链接\n。\n\r个人设置：点击左上角头像。\n选择背景：点击左侧“衣服”符号。\n推出登陆：点击左下角“关机”符号。\n","技术细节：\n\r当您注册时，网页的js代码根据您输入的账号密码及当前时间，生成一个以太坊账号。该账号具有一个私钥。它是您的公开账号。\n添加好友：若A账号向B账号发送好友申请，它会"]},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},6:function(e,t){},6389:function(e,t){e.exports=VueRouter},7:function(e,t){},8:function(e,t){},"8bbf":function(e,t){e.exports=Vue},9:function(e,t){},"9c0c":function(e,t,r){},a090:function(e,t,r){"use strict";r.r(t);r("d81d");var n=r("302f"),a=r("5ab6"),u=r("0613"),s=(r("739d"),r("a002"),r("3f4c")),o=function(e){var t=JSON.parse(localStorage.getItem(e.username)).group,r=t.map((function(e){return e.groupId}));s["default"].roomInit(r)},c=function(){for(var e=0;e<a["b"].length;e++)u["a"].dispatch("chat/groupMessage",{code:n["a"].OK,msg:"",data:{userId:"0",groupId:a["a"].groupId,content:a["b"][e],width:void 0,height:void 0,messageType:"text"}})};t["default"]={serviceInit:c,getAllData:o}},c32d:function(e,t){e.exports=moment},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("8bbf"),a=r.n(n),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view"),e.background?r("img",{staticClass:"background",attrs:{src:e.background,alt:""}}):e._e()],1)},s=[],o=(r("ac1f"),r("466d"),r("498a"),r("d4ec")),c=r("bee2"),i=r("262e"),d=r("2caf"),p=r("9ab4"),f=r("60a3"),g=r("4bb5"),m=r("3fff"),h=Object(g["a"])("app"),l=function(e){Object(i["a"])(r,e);var t=Object(d["a"])(r);function r(){return Object(o["a"])(this,r),t.apply(this,arguments)}return Object(c["a"])(r,[{key:"mounted",value:function(){this.setMobile(this.isMobile()),this.background&&this.background.trim().length||this.set_background(m["a"])}},{key:"isMobile",value:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e&&e.length}}]),r}(f["c"]);Object(p["a"])([h.Getter("user")],l.prototype,"user",void 0),Object(p["a"])([h.Getter("background")],l.prototype,"background",void 0),Object(p["a"])([h.Mutation("set_mobile")],l.prototype,"setMobile",void 0),Object(p["a"])([h.Mutation("set_background")],l.prototype,"set_background",void 0),l=Object(p["a"])([f["a"]],l);var b=l,v=b,I=(r("5c0b"),r("2877")),y=Object(I["a"])(v,u,s,!1,null,null,null),w=y.exports,O=(r("d3b7"),r("6389")),j=r.n(O);a.a.use(j.a);var R=[{path:"/",name:"Chat",component:function(){return r.e("chunk-6d6a30e2").then(r.bind(null,"edc5"))}}],G=new j.a({mode:"history",base:"/",routes:R}),k=G,x=r("0613"),S=r("6944"),_=r.n(S),U=(r("3aed"),r("27fd")),N=r("5efb"),$=r("b558"),A=r("ed3b"),P=r("3af3"),E=r("bb76"),M=r("0c63"),z=r("ccb9"),T=r("681b"),F=r("a600"),B=r("55f1"),C=r("cdeb"),D=r("9839"),q=r("39ab"),J=r("f933"),L=r("9571"),H=r("768f"),K=r("a071"),V=r("f64c");a.a.use(U["a"]),a.a.use(N["a"]),a.a.use($["a"]),a.a.use(A["a"]),a.a.use(P["a"]),a.a.use(E["a"]),a.a.use(M["a"]),a.a.use(z["a"]),a.a.use(T["a"]),a.a.use(F["a"]),a.a.use(B["a"]),a.a.use(C["a"]),a.a.use(D["a"]),a.a.use(q["a"]),a.a.use(J["a"]),a.a.use(L["a"]),a.a.use(H["a"]),a.a.use(K["a"]),a.a.prototype.$message=V["a"];var W=r("c32d"),Q=r.n(W);r("0808");a.a.config.productionTip=!1,a.a.prototype.$moment=Q.a,a.a.use(_.a,{defaultOptions:{navbar:!1,title:!1,toolbar:{zoomIn:1,zoomOut:1,oneToOne:4,reset:4,prev:0,next:0,rotateLeft:4,rotateRight:4,flipHorizontal:4,flipVertical:4}}}),new a.a({router:k,store:x["a"],render:function(e){return e(w)}}).$mount("#app")},cebe:function(e,t){e.exports=axios},cfbb:function(e,t,r){"use strict";r("99af");var n=r("3f4c"),a=r("0613"),u=r("302f");t["a"]={getMyGroup:function(e){var t=e.userName;return request.get("".concat(API,"/group/getmygroup?userName=").concat(t))},getGroupInfo:function(e){var t=e.id;return request.get("".concat(API,"/group/groupinfo?id=").concat(t))},preFetchGroup:function(e){var t=e.type,r=e.q,n=e.page,a=e.pageSize;return request.get("".concat(API,"/group/prefetchgroup?type=").concat(t,"&q=").concat(r,"&page=").concat(n,"&pageSize=").concat(a))},createGroup:function(e){return request.post("".concat(API,"/group/create"),e)},getRecentGroupConversation:function(e){return request.post("".concat(API,"/group/recent"),e)},getRecentGroupNews:function(e){var t=e.roomid,r=e.page,n=e.pageSize;return request.get("".concat(API,"/groupnews/recentnews?roomid=").concat(t,"&page=").concat(r,"&pageSize=").concat(n))},getGroupHistoryMsg:function(e){return request.post("".concat(API,"/groupnews/historymsg"),e)},getGroupLastNews:function(e){return request.post("".concat(API,"/groupnews/lastnews"),e)},getGroupMessage:function(e,t,r){a["a"].dispatch("chat/groupMessage",{code:u["a"].OK,msg:"",data:{userId:r,groupId:e,content:t,width:void 0,height:void 0,messageType:"text"}})},sendGroupMessage:function(e){n["default"].sendGroupMessage(e)}}},d54a:function(e,t,r){"use strict";r.r(t);r("7db0"),r("c740"),r("caad"),r("d81d"),r("a434"),r("b0c0"),r("a9e3"),r("b64b"),r("07ac"),r("4d63"),r("ac1f"),r("25f0"),r("2532"),r("96cf");var n=r("1da1"),a=r("ade3"),u=r("302f"),s=r("5ab6"),o=r("15a6"),c=r("0613"),i=r("99e5"),d=r.n(i),p=(r("48b8"),function(e,t){var r=cvCode(),n=r.code,a=r.timestamp;return verificationCode=n,t.json({status:2e3,data:verificationCode,timestamp:a,msg:"code success"})}),f=function(){for(var e=0;e<s["b"].length;e++)c["a"].dispatch("chat/groupMessage",{code:u["a"].OK,msg:"",data:{userId:"0",groupId:s["a"].groupId,content:s["b"][e],width:void 0,height:void 0,messageType:"text"}})},g=function(e){var t=[e.username,e.password],r=t[0],n=t[1],a=(Date.now(),JSON.parse(localStorage.getItem(r))),u=new d.a(new d.a.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/a898a2d231e647c7928dc457c6d441c8"));try{r=u.eth.accounts.decrypt(a.secPrivateKey,n)}catch(c){return{code:1,msg:"密码错误",data:""}}var s={status:0,pass:n,name:r,_id:0};s._id;return JSON.stringify(o["a"].user),o["a"].user={username:a.accountName,userId:a.accountAddress,password:n,avatar:"api/avatar/avatar(".concat(Math.round(19*Math.random()+1),").png"),role:"user",tag:""},{msg:"登录成功",data:{user:{username:a.accountName,userId:a.accountAddress,password:n,avatar:"api/avatar/avatar(".concat(Math.round(19*Math.random()+1),").png"),role:"user",tag:""},token:"0"}}},m=function(e,t){var r=[e.username,e.password,e.password,e.cvCode,e.avatar],n=r[0],a=r[1],s=r[2];r[3],r[4];if(a!==s)return{code:u["a"].FAIL,msg:"注册校验不通过！",data:""};if(null!=localStorage.getItem(n))return{code:u["a"].FAIL,msg:"用户已被注册,请换个用户名重试",data:""};for(var c=(new Date).getTime(),i=n+a+c,p=i.length;p<32;p++)i+="0";var f=new d.a(new d.a.providers.HttpProvider("http://localhost:8545")),g=f.eth.accounts.create([i]);i=f.eth.accounts.encrypt(g.privateKey,i);var m=f.eth.accounts.create([i]),h=g.address,l=f.eth.accounts.encrypt(g.privateKey,a),b={accountName:n,accountAddress:h,secPrivateKey:l,contactList:{},role:"user",publicId:m.address,group:[{groupId:"0"}]};return o["a"].user=b,localStorage.setItem(n,JSON.stringify(b)),{msg:"注册成功",data:{user:{userId:h,username:n,password:a,avatar:"api/avatar/avatar(".concat(Math.round(19*Math.random()+1),").png"),role:"user",tag:"",createTime:c,publicId:m.address},token:"0"}}},h=function(e,t){var r=e.query.id;USER.findById({_id:r}).then((function(e){return e?t.json({status:2e3,data:e,msg:"获取用户详情成功！"}):t.json({status:2001,data:"",msg:"没有获取到用户数据！"})})).catch((function(e){t.json({status:2003,data:"",msg:"服务端错误，请稍后重试！"})}))},l=function(e,t){var r=e.query,n=r.type,u=r.q,s=r.page,o=r.pageSize,c=new RegExp(u);USER.find(Object(a["a"])({},n,{$regex:c})).limit(Number(o)).skip(Number(s)*Number(o)).then((function(e){return t.json({status:2e3,data:e,msg:"获取成功！"})})).catch((function(e){return t.json({status:2003,data:e,msg:"服务器错误，请稍后重试！"})}))},b=function(e,t){USER.find().then((function(e){return t.json({status:2e3,data:e,msg:"获取用户成功"})})).catch((function(e){return t.json({status:2003,data:e,msg:"服务器错误，请稍后重试！"})}))},v=function(e,t){var r=e.query,n=r.gt,a=r.lt,u=new Date(n),s=new Date(a);USER.find({signUpTime:{$lte:s,$gte:u}}).sort({signUpTime:-1}).then((function(e){return t.json({status:2e3,data:e,msg:"成功"})}))},I=function(e,t){var r=e.body,n=r.id,a=r.state;USER.findByIdAndUpdate({_id:n},{status:a}).then((function(e){t.json({status:2e3,data:e,msg:"success"})})).catch((function(e){return t.json({status:2003,dataL:e,msg:"服务器错误，请稍后重试！"})}))},y=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,u,s,o,c,i,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.body,u=n.name,s=n.userId,e.next=3,USER.findOne({_id:s});case 3:return o=e.sent,c=o.friendFenzu,i=Object.keys(c),d=null,d=i.includes(u)?c:Object.assign({},c,Object(a["a"])({},u,[])),e.next=10,USER.findByIdAndUpdate({_id:s},{$set:{friendFenzu:d}});case 10:return p=e.sent,e.abrupt("return",r.json({status:2e3,data:p,msg:"添加新分组成功"}));case 12:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),w=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,u,s,o,c,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.body,a=n.fenzuName,u=n.userId,e.next=3,USER.findOne({_id:u});case 3:return s=e.sent,o=s.friendFenzu,c=JSON.parse(JSON.stringify(o)),delete c[a],e.next=9,USER.findByIdAndUpdate({_id:u},{$set:{friendFenzu:c}});case 9:return i=e.sent,e.abrupt("return",r.json({status:2e3,data:i,msg:"删除成功！"}));case 11:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),O=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,u,s,o,c,i,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.body,a=n.oldFenzu,u=n.newFenzu,s=n.userId,e.next=3,USER.findOne({_id:s});case 3:return o=e.sent,c=o.friendFenzu,i=JSON.parse(JSON.stringify(c)),d=c[a],delete i[a],i[u]=d,e.next=11,USER.findByIdAndUpdate({_id:s},{$set:{friendFenzu:i}});case 11:return p=e.sent,e.abrupt("return",r.json({status:2e3,data:p,msg:"更新成功！"}));case 13:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),j=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,u,s,o,c,i,d,p,f,g;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.body,a=n.userId,u=n.friendId,s=n.newFenzu,e.next=3,USER.findOne({_id:a});case 3:for(d in o=e.sent,c=JSON.parse(JSON.stringify(o.friendFenzu)),i="",c)c.hasOwnProperty(d)&&(p=c[d],p.includes(u)&&(i=d));if(i!==s){e.next=9;break}return e.abrupt("return",r.json({status:2e3,data:"",msg:"已经在次分组"}));case 9:return i&&(f=c[i].findIndex((function(e){return e===u})),c[i].splice(f,1)),c[s].push(u),e.next=14,USER.findByIdAndUpdate({_id:a},{$set:{friendFenzu:c}});case 14:return g=e.sent,e.abrupt("return",r.json({status:2e3,data:g,msg:"跟新成功"}));case 16:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,u,s,o,c,i,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.body,u=n.userId,s=n.friendId,o=n.friendBeizhu,e.next=3,USER.findOne({_id:u});case 3:return c=e.sent,i=c.friendBeizhu,d=Object.assign({},i,Object(a["a"])({},s,o)),e.next=8,USER.findByIdAndUpdate({_id:u},{$set:{friendBeizhu:d}});case 8:return p=e.sent,e.abrupt("return",r.json({status:2e3,data:p,msg:"修改备注成功！"}));case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),G=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.userId,n=t.time,e.next=4,USER.findByIdAndUpdate({_id:r},{$inc:{onlineTime:Number(n)}});case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,u,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=t.body,u=n.field,s=n.value,o=n.userId,parseToken(t.headers.authorization)===o){e.next=4;break}return e.abrupt("return",r.json({status:2001,data:[],msg:"错误操作！"}));case 4:return e.next=6,USER.findByIdAndUpdate({_id:o},Object(a["a"])({},u,s));case 6:return e.sent,e.abrupt("return",r.json({status:2e3,data:[],msg:"修改成功！"}));case 10:return e.prev=10,e.t0=e["catch"](0),e.abrupt("return",r.json({status:2003,data:e.t0,msg:"服务端错误！"}));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}(),x=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,u,s,o,c,i,d,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.body,a=n.oldPwd,u=n.newPwd,s=n.reNewPwd,o=n.userId,e.next=4,USER.findOne({_id:o},{pass:1});case 4:if(c=e.sent,i=c.pass,d=md5(a),p=md5(u),parseToken(t.headers.authorization)===o){e.next=10;break}return e.abrupt("return",r.json({status:2001,data:[],msg:"错误操作！"}));case 10:if(i===d){e.next=12;break}return e.abrupt("return",r.json({status:2001,data:[],msg:"原始密码输入错误！"}));case 12:if(u===s){e.next=14;break}return e.abrupt("return",r.json({status:2001,data:[],msg:"两次密码不一致！"}));case 14:return e.next=16,USER.findByIdAndUpdate({_id:o},{pass:p});case 16:return e.sent,e.abrupt("return",r.json({status:2e3,data:[],msg:"更新成功，请牢记你的新密码！"}));case 20:return e.prev=20,e.t0=e["catch"](0),e.abrupt("return",r.json({status:2003,data:[],msg:"服务端错误！"}));case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t,r){return e.apply(this,arguments)}}();t["default"]={login:g,serviceInit:f,generatorCode:p,register:m,getUserInfo:h,preFetchUser:l,getAllUser:b,getUserBySignUpTime:v,changeUserStatus:I,addNewFenzu:y,deleteFenzu:w,editFenzu:O,modifyFrienFenzu:j,modifyBeizhu:R,updateUserOnlineTime:G,updateUserInfo:k,updateUserPwd:x}}});