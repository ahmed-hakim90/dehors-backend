import{Y as f,Z as v}from"./index-5685f691.js";import{c as b,g as M,l as N}from"./a-bfd577bd.js";import"./layout-06dfa830.js";import"./index-80bf76f5.js";import"./index-a6375545.js";import"./index-b7f1323a.js";import"./index-da1dd834.js";function B(o,w,h){var i;return f(this,void 0,void 0,function(){var s,c,l,d,n,g=this;return v(this,function(u){switch(u.label){case 0:return b()?[2,[]]:(s=M(),c=(i=w.enabledMiddleware)!==null&&i!==void 0?i:{},l=Object.entries(c).filter(function(r){r[0];var e=r[1];return e}).map(function(r){var e=r[0];return e}),d=l.map(function(r){return f(g,void 0,void 0,function(){var e,a,m,p;return v(this,function(t){switch(t.label){case 0:e=r.replace("@segment/",""),a=e,h&&(a=btoa(e).replace(/=/g,"")),m="".concat(s,"/middleware/").concat(a,"/latest/").concat(a,".js.gz"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,N(m)];case 2:return t.sent(),[2,window["".concat(e,"Middleware")]];case 3:return p=t.sent(),o.log("error",p),o.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}})})}),[4,Promise.all(d)]);case 1:return n=u.sent(),n=n.filter(Boolean),[2,n]}})})}export{B as remoteMiddlewares};
