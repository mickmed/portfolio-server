(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{112:function(t,e,n){var o=n(1),c=n(113);"string"==typeof(c=c.__esModule?c.default:c)&&(c=[[t.i,c,""]]);var a={insert:"head",singleton:!1},i=(o(c,a),c.locals?c.locals:{});t.exports=i},113:function(t,e,n){},122:function(t,e,n){"use strict";n.r(e),n.d(e,"Technologies",(function(){return r}));var o=n(0),c=n(94),a=n(96),i=n(3);n(112);async function r(){const t=Object(o.e)(".scrollable-content");for(;t.childNodes.length;)t.removeChild(t.lastChild);const e=await Object(c.d)(),n=t.appendChild(Object(o.c)("div","technologies")),r=await Object(a.a)();let s="";const l=t=>{console.log(t.target.name,t.target.value),s=t.target.value};return r.forEach((t,c)=>{let r=Object(o.c)("img","tech-icon");if(r.src=`src/img/${t.icon_url}`,n.appendChild(r),e&&e.isAdmin){let e=Object(o.c)("div","name");e.innerText=t.name;const c=Object(i.c)("tech-icon-form"),r=Object(i.d)({className:"techIconInput",name:t.name,type:"text",value:t.icon_url,placeholder:"tech-icon-url",handleChange:l});c.appendChild(r),n.appendChild(c),e.addEventListener("click",t=>{l(t)});const u=Object(i.a)("update-tech-icon-btn","submit","update icon url");c.addEventListener("submit",e=>{console.log(t.id),((t,e,n)=>{t.preventDefault(),Object(a.b)(e,n)})(e,{...t,icon_url:s},t.id)}),c.appendChild(u)}}),t}},93:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));const o=()=>"https://portfolio-mick-server.herokuapp.com"},94:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return s}));var o=n(93);const c=Object(o.a)();const a=async t=>(console.log(JSON.stringify(t)),await fetch(c+"/users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>(localStorage.setItem("authToken",t.token),t))),i=async t=>{console.log(t);let e=await fetch(c+"/auth/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>(localStorage.setItem("authToken",t.token),t));return console.log(e),e},r=async()=>{if(localStorage.getItem("authToken")){return await fetch(c+"/auth/verify",{method:"get",headers:(t={"Content-Type":"application/json"},localStorage.authToken?{...t,Authorization:`Bearer ${localStorage.authToken}`}:t)}).then(t=>t.json()).then(t=>t)}var t;return!1},s=async()=>(localStorage.removeItem("authToken"),{"Content-Type":"application/json"},"logged out")},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i}));var o=n(93);const c=Object(o.a)();let a=async()=>await fetch(`${c}/technologies`).then(t=>t.json()).then(t=>t);const i=async(t,e)=>{await fetch(`${c}/technologies/${e}`,{method:"put",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then(t=>t.json()).then(t=>t)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLnNjc3M/Yzk1YSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NlcnZpY2VzL0Jhc2VVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2VydmljZXMvQXBpQXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TZXJ2aWNlcy9BcGlUZWNoLmpzIl0sIm5hbWVzIjpbImFwaSIsImNvbnRlbnQiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImkiLCJvcHRpb25zIiwiZXhwb3J0ZWQiLCJsb2NhbHMiLCJleHBvcnRzIiwiYXN5bmMiLCJUZWNobm9sb2dpZXMiLCJtYWluQ29udGVudFNjcm9sbGFibGUiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJ1c2VyIiwidGVjaG5vbG9naWVzIiwiYXBwZW5kQ2hpbGQiLCJ0ZWNoSWNvbnMiLCJuZXdJY29uVXJsIiwiaGFuZGxlQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJmb3JFYWNoIiwidGVjaCIsImluZGV4IiwiaWNvbiIsInNyYyIsImljb25fdXJsIiwiaXNBZG1pbiIsImlubmVyVGV4dCIsImZvcm0iLCJpbnB1dCIsImNsYXNzTmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXR0b24iLCJpZCIsImJvZHkiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZSIsIkJhc2VVcmwiLCJiYXNlVXJsIiwic2lnblVwIiwiSlNPTiIsInN0cmluZ2lmeSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJqc29uIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsImxvZ2luIiwicmVzIiwidmVyaWZ5IiwiZ2V0SXRlbSIsImF1dGhUb2tlbiIsIkF1dGhvcml6YXRpb24iLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwiZ2V0VGVjaG5vbG9naWVzIiwiYW5zIiwidXBkYXRlVGVjaG5vbG9neSJdLCJtYXBwaW5ncyI6IjZFQUFBLElBQUlBLEVBQU0sRUFBUSxHQUNGQyxFQUFVLEVBQVEsS0FJQyxpQkFGdkJBLEVBQVVBLEVBQVFDLFdBQWFELEVBQVFFLFFBQVVGLEtBRy9DQSxFQUFVLENBQUMsQ0FBQ0csRUFBT0MsRUFBSUosRUFBUyxNQUc5QyxJQUFJSyxFQUFVLENBRWQsT0FBaUIsT0FDakIsV0FBb0IsR0FJaEJDLEdBRlNQLEVBQUlDLEVBQVNLLEdBRVhMLEVBQVFPLE9BQVNQLEVBQVFPLE9BQVMsSUFJakRKLEVBQU9LLFFBQVVGLEcsb0pDWlZHLGVBQWVDLElBRXBCLE1BQU1DLEVBQXdCLFlBQUcsdUJBQ2pDLEtBQU9BLEVBQXNCQyxXQUFXQyxRQUN0Q0YsRUFBc0JHLFlBQVlILEVBQXNCSSxXQUcxRCxNQUFNQyxRQUFhLGNBQ2JDLEVBQWVOLEVBQXNCTyxZQUFZLFlBQUssTUFBTyxpQkFDN0RDLFFBQWtCLGNBRXhCLElBQUlDLEVBQWEsR0FDakIsTUFBTUMsRUFBZ0JDLElBQ3BCQyxRQUFRQyxJQUFJRixFQUFFRyxPQUFPQyxLQUFNSixFQUFFRyxPQUFPRSxPQUNwQ1AsRUFBYUUsRUFBRUcsT0FBT0UsT0FtQ3hCLE9BM0JBUixFQUFVUyxRQUFRLENBQUNDLEVBQU1DLEtBQ3ZCLElBQUlDLEVBQU8sWUFBSyxNQUFPLGFBSXZCLEdBSEFBLEVBQUtDLElBQU0sV0FBV0gsRUFBS0ksV0FDM0JoQixFQUFhQyxZQUFZYSxHQUVyQmYsR0FBUUEsRUFBS2tCLFFBQVMsQ0FFeEIsSUFBSVIsRUFBTyxZQUFLLE1BQU8sUUFDdkJBLEVBQUtTLFVBQVlOLEVBQUtILEtBQ3RCLE1BQU1VLEVBQU8sWUFBSyxrQkFDWkMsRUFBUSxZQUFNLENBQUVDLFVBQVcsZ0JBQWlCWixLQUFNRyxFQUFLSCxLQUFNYSxLQUFNLE9BQVFaLE1BQU9FLEVBQUtJLFNBQVVPLFlBQWEsZ0JBQWlCbkIsaUJBQ3JJZSxFQUFLbEIsWUFBWW1CLEdBQ2pCcEIsRUFBYUMsWUFBWWtCLEdBQ3pCVixFQUFLZSxpQkFBaUIsUUFBVW5CLElBQzlCRCxFQUFhQyxLQUdmLE1BQU1vQixFQUFTLFlBQU8sdUJBQXdCLFNBQVUsbUJBQ3hETixFQUFLSyxpQkFBaUIsU0FBV25CLElBQy9CQyxRQUFRQyxJQUFJSyxFQUFLYyxJQXhCUixFQUFDckIsRUFBR3NCLEVBQU1ELEtBQ3ZCckIsRUFBRXVCLGlCQUNGLFlBQWlCRCxFQUFNRCxJQXVCbkJHLENBQU94QixFQUFHLElBQUtPLEVBQU1JLFNBQVViLEdBQWNTLEVBQUtjLE1BRXBEUCxFQUFLbEIsWUFBWXdCLE1BS2QvQixJLGtFQ3hERixNQUFNb0MsRUFBVSxJQUU0QiwrQyxnQ0NIbkQsb0pBQ0EsTUFBTUMsRUFBVSxjQWFULE1BT01DLEVBQVN4QyxNQUFPbUMsSUFDM0JyQixRQUFRQyxJQUFJMEIsS0FBS0MsVUFBVVAsVUFFWFEsTUFBTUosRUFBVSxTQUFVLENBQ3hDSyxPQUFRLE9BQ1JDLFFBQVMsQ0FBRSxlQUFnQixvQkFDM0JWLEtBQU1NLEtBQUtDLFVBQVVQLEtBRXBCVyxLQUFNQyxHQUNFQSxFQUFLQSxRQUViRCxLQUFNRSxJQUVMQyxhQUFhQyxRQUFRLFlBQWFGLEVBQUtHLE9BRWhDSCxLQUtBSSxFQUFRcEQsTUFBT21DLElBQzFCckIsUUFBUUMsSUFBSW9CLEdBQ1osSUFBSWtCLFFBQVlWLE1BQU1KLEVBQVUsY0FBZSxDQUM3Q0ssT0FBUSxPQUNSQyxRQUFTLENBQUUsZUFBZ0Isb0JBQzNCVixLQUFNTSxLQUFLQyxVQUFVUCxLQUVwQlcsS0FBTUMsR0FDRUEsRUFBS0EsUUFHYkQsS0FBTUUsSUFFTEMsYUFBYUMsUUFBUSxZQUFhRixFQUFLRyxPQUdoQ0gsSUFHWCxPQURBbEMsUUFBUUMsSUFBSXNDLEdBQ0xBLEdBR0lDLEVBQVN0RCxVQUdwQixHQUZjaUQsYUFBYU0sUUFBUSxhQUV4QixDQWNULGFBYmtCWixNQUFNSixFQUFVLGVBQWdCLENBQ2hESyxPQUFRLE1BQ1JDLFNBbEVxQkEsRUFrRUQsQ0FDbEIsZUFBZ0Isb0JBbEVsQkksYUFBYU8sVUFDUixJQUNGWCxFQUNIWSxjQUFlLFVBQVVSLGFBQWFPLGFBR2pDWCxLQStESkMsS0FBTUMsR0FDRUEsRUFBS0EsUUFFYkQsS0FBTUUsR0FDRUEsR0ExRVIsSUFBb0JILEVBZ0Z6QixPQUFPLEdBc0JJYSxFQUFTMUQsVUFDcEJpRCxhQUFhVSxXQUFXLGFBQ1gsQ0FDWCxlQUFnQixvQkFFWCxlLGdDQzlHVCxnRkFDQSxNQUFNcEIsRUFBVSxjQUtULElBQUlxQixFQUFrQjVELGVBQ1AyQyxNQUFNLEdBQUdKLGtCQUMxQk8sS0FBTU8sR0FFRUEsRUFBSU4sUUFFWkQsS0FBTWUsR0FDRUEsR0FNTixNQUFNQyxFQUFtQjlELE1BQU9tQyxFQUFNRCxXQUV6QlMsTUFBTSxHQUFHSixrQkFBd0JMLElBQU0sQ0FDdkRVLE9BQVEsTUFDUlQsS0FBTU0sS0FBS0MsVUFBVVAsR0FDckJVLFFBQVMsQ0FBRSxlQUFnQixzQkFFMUJDLEtBQU1DLEdBQ0VBLEVBQUtBLFFBRWJELEtBQU1FLEdBQ0VBIiwiZmlsZSI6IjMuMGE5NmUwMDEzM2ZhYzJkMzczY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9UZWNobm9sb2dpZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCJcblxuaW1wb3J0IHsgY2VjbCwgcXMgfSBmcm9tICcuLi9IZWxwZXJzL2RvbUhlbHBlcidcbmltcG9ydCB7IHZlcmlmeSB9IGZyb20gJy4uL1NlcnZpY2VzL0FwaUF1dGgnXG5pbXBvcnQgeyBnZXRUZWNobm9sb2dpZXMsIHVwZGF0ZVRlY2hub2xvZ3kgfSBmcm9tICcuLi9TZXJ2aWNlcy9BcGlUZWNoJ1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJy4uL1NoYXJlZC9Gb3JtJ1xuaW1wb3J0ICcuL1RlY2hub2xvZ2llcy5zY3NzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gVGVjaG5vbG9naWVzKCkge1xuXG4gIGNvbnN0IG1haW5Db250ZW50U2Nyb2xsYWJsZSA9IHFzKFwiLnNjcm9sbGFibGUtY29udGVudFwiKVxuICB3aGlsZSAobWFpbkNvbnRlbnRTY3JvbGxhYmxlLmNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgbWFpbkNvbnRlbnRTY3JvbGxhYmxlLnJlbW92ZUNoaWxkKG1haW5Db250ZW50U2Nyb2xsYWJsZS5sYXN0Q2hpbGQpXG4gIH1cblxuICBjb25zdCB1c2VyID0gYXdhaXQgdmVyaWZ5KClcbiAgY29uc3QgdGVjaG5vbG9naWVzID0gbWFpbkNvbnRlbnRTY3JvbGxhYmxlLmFwcGVuZENoaWxkKGNlY2woXCJkaXZcIiwgXCJ0ZWNobm9sb2dpZXNcIikpXG4gIGNvbnN0IHRlY2hJY29ucyA9IGF3YWl0IGdldFRlY2hub2xvZ2llcygpXG5cbiAgbGV0IG5ld0ljb25VcmwgPSAnJ1xuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKVxuICAgIG5ld0ljb25VcmwgPSBlLnRhcmdldC52YWx1ZVxuICB9XG5cbiAgY29uc3QgdXBkYXRlID0gKGUsIGJvZHksIGlkKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdXBkYXRlVGVjaG5vbG9neShib2R5LCBpZClcbiAgfVxuXG4gIHRlY2hJY29ucy5mb3JFYWNoKCh0ZWNoLCBpbmRleCkgPT4ge1xuICAgIGxldCBpY29uID0gY2VjbCgnaW1nJywgJ3RlY2gtaWNvbicpXG4gICAgaWNvbi5zcmMgPSBgc3JjL2ltZy8ke3RlY2guaWNvbl91cmx9YFxuICAgIHRlY2hub2xvZ2llcy5hcHBlbmRDaGlsZChpY29uKVxuXG4gICAgaWYgKHVzZXIgJiYgdXNlci5pc0FkbWluKSB7XG5cbiAgICAgIGxldCBuYW1lID0gY2VjbCgnZGl2JywgJ25hbWUnKVxuICAgICAgbmFtZS5pbm5lclRleHQgPSB0ZWNoLm5hbWVcbiAgICAgIGNvbnN0IGZvcm0gPSBGb3JtKCd0ZWNoLWljb24tZm9ybScpXG4gICAgICBjb25zdCBpbnB1dCA9IElucHV0KHsgY2xhc3NOYW1lOiAndGVjaEljb25JbnB1dCcsIG5hbWU6IHRlY2gubmFtZSwgdHlwZTogJ3RleHQnLCB2YWx1ZTogdGVjaC5pY29uX3VybCwgcGxhY2Vob2xkZXI6ICd0ZWNoLWljb24tdXJsJywgaGFuZGxlQ2hhbmdlIH0pXG4gICAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0KVxuICAgICAgdGVjaG5vbG9naWVzLmFwcGVuZENoaWxkKGZvcm0pXG4gICAgICBuYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaGFuZGxlQ2hhbmdlKGUpXG5cbiAgICAgIH0pXG4gICAgICBjb25zdCBidXR0b24gPSBCdXR0b24oJ3VwZGF0ZS10ZWNoLWljb24tYnRuJywgJ3N1Ym1pdCcsICd1cGRhdGUgaWNvbiB1cmwnKVxuICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh0ZWNoLmlkKVxuICAgICAgICB1cGRhdGUoZSwgeyAuLi50ZWNoLCBpY29uX3VybDogbmV3SWNvblVybCB9LCB0ZWNoLmlkKVxuICAgICAgfSlcbiAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uKVxuICAgIH1cblxuXG4gIH0pXG4gIHJldHVybiBtYWluQ29udGVudFNjcm9sbGFibGVcbn1cblxuIiwiXG5leHBvcnQgY29uc3QgQmFzZVVybCA9ICgpID0+IHtcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vcG9ydGZvbGlvLW1pY2stc2VydmVyLmhlcm9rdWFwcC5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCdcblxufSIsImltcG9ydCB7IEJhc2VVcmwgfSBmcm9tIFwiLi9CYXNlVXJsLmpzXCJcbmNvbnN0IGJhc2VVcmwgPSBCYXNlVXJsKClcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEhlYWRlcnMoaGVhZGVycykge1xuICBpZiAobG9jYWxTdG9yYWdlLmF1dGhUb2tlbikge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5oZWFkZXJzLFxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2xvY2FsU3RvcmFnZS5hdXRoVG9rZW59YCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGhlYWRlcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY2xlYXJIZWFkZXJzID0gKGhlYWRlcnMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5oZWFkZXJzLFxuICAgIEF1dGhvcml6YXRpb246IG51bGwsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHNpZ25VcCA9IGFzeW5jIChib2R5KSA9PiB7XG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuXG4gIGxldCByZXMgPSBhd2FpdCBmZXRjaChiYXNlVXJsICsgXCIvdXNlcnNcIiwge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYXV0aFRva2VuXCIsIGRhdGEudG9rZW4pXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgcmV0dXJuIHJlc1xufVxuXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoYm9keSkgPT4ge1xuICBjb25zb2xlLmxvZyhib2R5KVxuICBsZXQgcmVzID0gYXdhaXQgZmV0Y2goYmFzZVVybCArIFwiL2F1dGgvbG9naW5cIiwge1xuICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICB9KVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICByZXR1cm4ganNvbi5qc29uKClcblxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImF1dGhUb2tlblwiLCBkYXRhLnRva2VuKVxuXG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgY29uc29sZS5sb2cocmVzKVxuICByZXR1cm4gcmVzXG59XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnkgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIilcbiAgLy8gY29uc29sZS5sb2codG9rZW4pXG4gIGlmICh0b2tlbikge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGJhc2VVcmwgKyBcIi9hdXRoL3ZlcmlmeVwiLCB7XG4gICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICBoZWFkZXJzOiBzZXRIZWFkZXJzKHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICAgIH0pXG5cbiAgICByZXR1cm4gcmVzXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKCkgPT4ge1xuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhlcmVcIiwgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhdXRoVG9rZW5cIikpXG4gICAgbGV0IHVzZXIgPSBhd2FpdCB2ZXJpZnkoKVxuICAgIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgaWYgKCF1c2VyLmVycm9ycykge1xuICAgICAgLy8gbG9naW5CdXR0b24uaW5uZXJUZXh0ID0gXCJsb2dvdXRcIlxuICAgICAgLy8gbG9nZ2VkSW4gPSB0cnVlXG4gICAgICByZXR1cm4gdXNlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBsb2dpbkJ1dHRvbi5pbm5lclRleHQgPSBcImxvZ2luXCJcblxuICAgIC8vIGxvZ2dlZEluID0gZmFsc2VcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zb2xlLmxvZyhsb2dnZWRJbilcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoVG9rZW5cIilcbiAgY2xlYXJIZWFkZXJzKHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgfSlcbiAgcmV0dXJuIFwibG9nZ2VkIG91dFwiXG59XG4iLCJpbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSAnLi9CYXNlVXJsLmpzJ1xuY29uc3QgYmFzZVVybCA9IEJhc2VVcmwoKVxuXG5cblxuXG5leHBvcnQgbGV0IGdldFRlY2hub2xvZ2llcyA9IGFzeW5jICgpID0+IHtcbiAgbGV0IHJlc3VsdHMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS90ZWNobm9sb2dpZXNgKVxuICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChhbnMpID0+IHtcbiAgICAgIHJldHVybiBhbnNcbiAgICB9KVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVUZWNobm9sb2d5ID0gYXN5bmMgKGJvZHksIGlkKSA9PiB7XG4gIFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS90ZWNobm9sb2dpZXMvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiBgcHV0YCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=