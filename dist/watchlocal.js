(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);var t=require("@babel/runtime/helpers/interopRequireDefault"),n=t(require("chokidar")),r=t(require("tinify")),i=t(require("fs/promises"));const o="tinify",s=["NpmW5gDcjz1WgMg7JLJMwLZ26Gps7clY","mh1DJYXnv2nVG9PVpkFvhVNssFgMtpn5"],u=/\.(jpe?g|png|webp)$/,a=new Set;function l(e=!1){e&&s.push(s.shift()),r.default.key=s[0]}n.default.watch(["/Users/wangchunyang/Pictures/tinify"],{persistent:!0,ignored:[new RegExp("\\."+o+"\\.[^.]+$"),/ignore/],alwaysStat:!0,ignoreInitial:!0}).on("add",((e,t)=>{e&&t&&async function(e,t){l();const[n,s]=e.split(/\.(?=[^.]+$)/);if(!u.test(e))return;if(a.has(e))return;if(0===t.size&&(t=await function(e){return new Promise(((t,n)=>{let r=-1,o=-1,s=null;const u=()=>{r=setTimeout((()=>{i.default.stat(e).then((e=>{s=e,e.size>0?(t(e),clearTimeout(o)):u()}))}),500)};u(),o=setTimeout((()=>{t(s),clearTimeout(r)}),6e4)}))}(e)),!t||t.size<5120)return;a.add(e);const c=n+`.${o}.`+s;console.log("compress",c);const f=(t=!0)=>{r.default.fromFile(e).toFile(c).then((()=>{a.delete(e),r.default.compressionCount<20&&l(!0)})).catch((n=>{n instanceof r.default.ClientError?a.delete(e):(n instanceof r.default.AccountError&&l(!0),t&&setTimeout((()=>{f(!1)}),3e3)),console.error("tinify err",n)}))};f()}(e,t)})),module.exports=e})();