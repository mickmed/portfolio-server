(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{82:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(0);c(83);const a=(e,t,c,a)=>{let i=Object(n.c)("div","project-img"),o=Object(n.c)("div","img-wrapper");i.appendChild(o);let d=Object(n.c)("div","inner-img-wrap");if(o.appendChild(d),d.appendChild(Object(n.c)("img","img")).src=e,!0===c){let e=d.appendChild(Object(n.c)("div","modal"));e.classList.add("project-modal","modal-slide");e.appendChild(Object(n.c)("span","modal-span")),e.childNodes[0].appendChild(Object(n.c)("h2","project-title"));e.childNodes[0].childNodes[0].innerText=t,console.log(t),"NYC Trees"===t||"Mick's Math Mental"===t&&(e.childNodes[0].childNodes[0].style.color="rgb(203, 206, 45)")}return i}},83:function(e,t,c){var n=c(1),a=c(84);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=(n(a,i),a.locals?a.locals:{});e.exports=o},84:function(e,t,c){},85:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(4);const a=Object(n.a)();let i=async e=>await fetch(`${a}/technologies`).then(e=>e.json()).then(e=>e)},86:function(e,t,c){"use strict";c.d(t,"c",(function(){return i})),c.d(t,"a",(function(){return o})),c.d(t,"d",(function(){return d})),c.d(t,"b",(function(){return l}));var n=c(4);const a=Object(n.a)();let i=async()=>await fetch(`${a}/projects`).then(e=>e.json()).then(e=>e);const o=async e=>{console.log("ere"),console.log(JSON.stringify(e));const t=await fetch(`${a}/projects`,{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e);console.log(t)},d=async(e,t)=>{console.log(JSON.stringify(e));await fetch(`${a}/projects/${t}`,{method:"put",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e)},l=async e=>{const t=await fetch(`${a}/projects/${e}`,{method:"delete",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>e);console.log(t)}},89:function(e,t,c){"use strict";c.r(t),c.d(t,"Projects",(function(){return p}));var n=c(0),a=c(7),i=(c(85),c(82)),o=c(3),d=c(86),l=c(5),s=c(90);c(91);const r=e=>{for(;e.childNodes.length;)e.removeChild(e.lastChild)};async function p(){let e=Object(n.e)(".main-content-scrollable");r(e),e.appendChild(Object(n.c)("div","loading")).innerHTML="loading...";const t=await Object(d.c)();r(e);const c=e.clientWidth;if(t.forEach(async(t,o)=>{let r=e.appendChild(Object(n.c)("div","project-wrap")),h=r.appendChild(Object(i.a)(`src/img/${t.img_url}`,t.name,!0,t.site_url));console.log(h);let j="false",b=Object(n.c)("div","link-modal"),u=Object(n.f)(".img-wrapper"),m=Object(n.f)(".inner-img-wrap"),f=Object(n.c)("div","tech-icons");t.technologies.forEach(e=>{f.appendChild(Object(n.c)("img","tech-icon")).src=`src/img/${e.icon_url}`});let g=Object(n.c)("div","description");if(g.innerHTML=t.description,c<900?(b.appendChild(f),b.appendChild(g)):(b.appendChild(g),b.appendChild(f)),b.appendChild(Object(n.c)("div","link-modal-icons")).innerHTML=`<div><a href=${t.site_url} target='_blank'><i class="fas fa-home fa-fw"></i></a>\n    <p class='home-tool-tip'>website</p></div>\n\n    <div><a href=${t.github_url} target='_blank'><i class="fab fa-github"></i></a>\n    <p class='github-tool-tip'>github</p></div>`,console.log(m[0].children[1]),u[o].addEventListener("click",async()=>{if("true"===j)j="false",m[o].classList.add("close-curtain"),m[o].classList.remove("open-curtain"),u[o].lastChild.remove(),u[o].style.width="80%",u[o].style.padding="6%",u[o].style.margin="0",r.style.margin="0 10% 3% 10%",m[o].style.width="100%",r.classList.remove("project-wrap-click"),h.lastChild.remove();else if("false"===j){j="true",m[o].classList.add("open-curtain"),m[o].classList.remove("close-curtain"),u[o].appendChild(b),c<900?(u[o].style.flexDirection="column",b.style.width="90%",f.style.width="80%",b.style.marginTop="5%",b.style.background="rgb(240, 253, 253)"):(u[o].style.width="90%",u[o].style.padding="2%",u[o].style.margin="0 auto",r.style.margin="0 1%",m[o].style.width="99%",m[o].style.height="99%"),h.appendChild(f),console.log(h),u[o].style.setProperty("--animation","animate-img-wrapper 1.5s linear forwards"),r.classList.add("project-wrap-click")}}),await Object(a.d)()){const e=Object(n.c)("div","edit-project-wrapper"),c=Object(l.a)("show-edit-button","submit","update");c.addEventListener("click",()=>{console.log(r.lastChild.className),"edit-project-form"!==r.lastChild.className?Object(s.EditProject)(r,t):r.lastChild.remove()}),e.appendChild(c);const a=Object(l.a)("delete-project","submit","delete");a.addEventListener("click",async()=>{let e=confirm(`Are you sure you want to delete ${t.name}?`);e&&await Object(d.b)(t.id),e&&await p()}),e.appendChild(a),r.appendChild(e)}}),await Object(a.d)()){let c=Object(l.a)("show-add-form","submit","add project");c.addEventListener("click",()=>{console.log(e.lastChild.className),"show-add-form"===e.lastChild.className?Object(s.EditProject)(e,t[0],"addProject"):e.lastChild.remove()}),Object(n.b)(e,c)}e.appendChild(Object(o.a)())}},90:function(e,t,c){"use strict";c.r(t),c.d(t,"EditProject",(function(){return l}));var n=c(5),a=c(85),i=c(86),o=c(89),d=c(0);const l=async(e,t,c)=>{if(console.log("add",c),"addProject"===c)for(let e in t)t[e]="";let l={},s=e=>{console.log(e.target.name),l[e.target.name]=e.target.value},r=Object(n.c)("edit-project-form"),p=Object(d.c)("div","edit-form-inputs");r.appendChild(p),Object.keys(t).forEach(e=>{if("id"!==e&&"technologies"!==e&&"created_at"!==e&&"updated_at"!==e){l[e]=t[e];const a=Object(n.d)({className:"edit-form-input",name:e,type:"text",value:"addProject"===c?"":l[e],placeholder:e,handleChange:s});p.appendChild(a)}});const h=Object(d.c)("div","edit-form-checkboxes");r.appendChild(h),(await Object(a.a)()).map(e=>{let a;void 0===c&&t.technologies.forEach(t=>{e.name===t.name&&(console.log(e.name,t.name),a="checked")});let i=Object(n.b)({className:"edit-project-chkbox",name:e.name,id:e.name,value:e.id,checked:"addProject"===c?"":a});h.appendChild(i),h.appendChild(Object(n.e)("tech-box-label",e.name,"tech-box"))}),r.appendChild(Object(n.a)("edit-project-button","submit","addProject"===c?"add new project":"submit")),Object(d.b)(e,r),r.addEventListener("submit",async e=>{e.preventDefault(),console.log("add",c);const n=document.querySelectorAll("input[type=checkbox]:checked");console.log(n),l.technologies=[],n.forEach(e=>{l.technologies.push(e.value)}),console.log("add",l),"addProject"===c?await Object(i.a)(l):await Object(i.d)(l,t.id),await Object(o.Projects)()})}},91:function(e,t,c){var n=c(1),a=c(92);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);var i={insert:"head",singleton:!1},o=(n(a,i),a.locals?a.locals:{});e.exports=o},92:function(e,t,c){}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TaGFyZWQvSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2hhcmVkL2ltYWdlLnNjc3M/NDQ2MSIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9TZXJ2aWNlcy9BcGlUZWNoLmpzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1NlcnZpY2VzL0FwaVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdHMvRWRpdFByb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvUHJvamVjdHMvcHJvamVjdHMuc2NzcyJdLCJuYW1lcyI6WyJJbWFnZSIsInNyYyIsInRpdGxlIiwibW9kYWwiLCJzaXRlX3VybCIsInByb2plY3RJbWciLCJpbWdXcmFwcGVyIiwiYXBwZW5kQ2hpbGQiLCJkaXYiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaGlsZE5vZGVzIiwiaW5uZXJUZXh0IiwiY29uc29sZSIsImxvZyIsInN0eWxlIiwiY29sb3IiLCJhcGkiLCJjb250ZW50IiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJtb2R1bGUiLCJpIiwib3B0aW9ucyIsImV4cG9ydGVkIiwibG9jYWxzIiwiZXhwb3J0cyIsImJhc2VVcmwiLCJnZXRUZWNobm9sb2dpZXMiLCJhc3luYyIsInR5cGUiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYW5zIiwiZ2V0UHJvamVjdHMiLCJhZGRQcm9qZWN0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJoZWFkZXJzIiwiZGF0YSIsInVwZGF0ZVByb2plY3QiLCJpZCIsImRlbGV0ZVByb2plY3QiLCJjbGVhclBhZ2UiLCJlbGVtZW50IiwibGVuZ3RoIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJQcm9qZWN0cyIsIm1haW5Db250ZW50IiwiaW5uZXJIVE1MIiwicmVzcCIsImNvbnRhaW5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJmb3JFYWNoIiwicHJvamVjdCIsImluZGV4IiwicHJvamVjdFdyYXAiLCJpbWFnZSIsImltZ191cmwiLCJuYW1lIiwiYm9vbCIsImxpbmtNb2RhbCIsImlubmVySW1nV3JhcCIsInRlY2hJY29ucyIsInRlY2hub2xvZ2llcyIsImljb24iLCJpY29uX3VybCIsImRlc2NyaXB0aW9uIiwiZ2l0aHViX3VybCIsImNoaWxkcmVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZSIsIndpZHRoIiwicGFkZGluZyIsIm1hcmdpbiIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Ub3AiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0Iiwic2V0UHJvcGVydHkiLCJlZGl0UHJvamVjdFdyYXBwZXIiLCJlZGl0QnV0dG9uIiwiY2xhc3NOYW1lIiwiZGVsZXRlQnV0dG9uIiwiYW5zd2VyIiwiY29uZmlybSIsImFkZEJ0biIsIkVkaXRQcm9qZWN0IiwiaXRlbSIsIm5ld1Byb2plY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmb3JtIiwiaW5wdXRzIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImlucHV0IiwicGxhY2Vob2xkZXIiLCJjaGVja3MiLCJtYXAiLCJ0ZWNobm9sb2d5IiwiY2hlY2tlZCIsInVuZGVmaW5lZCIsInByb2plY3RUZWNobm9sb2d5IiwiYngiLCJldnQiLCJwcmV2ZW50RGVmYXVsdCIsImNoZWNrYm94ZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib3giLCJwdXNoIl0sIm1hcHBpbmdzIjoieUZBQUEsbURBR08sTUFBTUEsRUFBUSxDQUFDQyxFQUFLQyxFQUFPQyxFQUFPQyxLQUV2QyxJQUFJQyxFQUFhLFlBQUssTUFBTyxlQUV6QkMsRUFBYSxZQUFLLE1BQU8sZUFDN0JELEVBQVdFLFlBQVlELEdBQ3ZCLElBQUlFLEVBQU0sWUFBSyxN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IjAuN2FiZTA4YzMzYWU1Mzk2YTM4NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjZWNsLCBxcyB9IGZyb20gXCIuLi9IZWxwZXJzL2RvbUhlbHBlci5qc1wiXG5pbXBvcnQgXCIuL2ltYWdlLnNjc3NcIlxuXG5leHBvcnQgY29uc3QgSW1hZ2UgPSAoc3JjLCB0aXRsZSwgbW9kYWwsIHNpdGVfdXJsKSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKHNyYylcbiAgbGV0IHByb2plY3RJbWcgPSBjZWNsKFwiZGl2XCIsIFwicHJvamVjdC1pbWdcIilcblxuICBsZXQgaW1nV3JhcHBlciA9IGNlY2woXCJkaXZcIiwgXCJpbWctd3JhcHBlclwiKVxuICBwcm9qZWN0SW1nLmFwcGVuZENoaWxkKGltZ1dyYXBwZXIpXG4gIGxldCBkaXYgPSBjZWNsKFwiZGl2XCIsIFwiaW5uZXItaW1nLXdyYXBcIilcbiAgaW1nV3JhcHBlci5hcHBlbmRDaGlsZChkaXYpXG5cblxuICBsZXQgaW1nID0gZGl2LmFwcGVuZENoaWxkKGNlY2woXCJpbWdcIiwgXCJpbWdcIikpXG4gIGltZy5zcmMgPSBzcmNcblxuXG4gIGlmIChtb2RhbCA9PT0gdHJ1ZSkge1xuICAgIGxldCBtb2RhbCA9IGRpdi5hcHBlbmRDaGlsZChjZWNsKFwiZGl2XCIsIFwibW9kYWxcIikpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZChcInByb2plY3QtbW9kYWxcIiwgXCJtb2RhbC1zbGlkZVwiKVxuICAgIGxldCBtb2RhbFNwYW4gPSBtb2RhbC5hcHBlbmRDaGlsZChjZWNsKFwic3BhblwiLCBcIm1vZGFsLXNwYW5cIikpXG4gICAgbGV0IGgyID0gbW9kYWwuY2hpbGROb2Rlc1swXS5hcHBlbmRDaGlsZChjZWNsKFwiaDJcIiwgXCJwcm9qZWN0LXRpdGxlXCIpKVxuICAgIG1vZGFsLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5pbm5lclRleHQgPSB0aXRsZVxuXG4gICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgaWYgKHRpdGxlID09PSAnTllDIFRyZWVzJykge1xuICAgICAgLy8gbW9kYWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmZvbnRGYW1pbHkgPSBcIk1haXRyZWVcIlxuXG4gICAgfSBlbHNlIGlmICh0aXRsZSA9PT0gJ01pY2tcXCdzIE1hdGggTWVudGFsJykge1xuICAgICAgLy8gbW9kYWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlZlZ2FuXCJcblxuICAgICAgbW9kYWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmNvbG9yID0gJ3JnYigyMDMsIDIwNiwgNDUpJ1xuICAgIH1lbHNlIGlmICh0aXRsZSA9PT0gJ1NjYWxlZCcpe1xuICAgICAgLy8gbW9kYWwuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlZlZ2FuXCJcblxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwicHJvamVjdHRpdGxlXCIsIGgyKVxuICAgIC8vIGlmIChpbWcuaGVpZ2h0ID4gaW1nLndpZHRoKSB7XG4gICAgLy8gICBtb2RhbFNwYW4uc3R5bGUudHJhbnNmb3JtID0gXCJza2V3KC0xMGRlZykgdHJhbnNsYXRlWCgtMzAlKVwiXG4gICAgLy8gICBtb2RhbFNwYW4uc3R5bGUud2lkdGggPSAnNjAlJ1xuICAgIC8vICAgaDIuc3R5bGUudHJhbnNmb3JtID0gXCJza2V3KDEwZGVnKSB0cmFuc2xhdGUoMSUpXCJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKVxuICAgIC8vICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XG4gICAgLy8gICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiA2MDApe1xuICAgIC8vICAgICBpbWdXcmFwcGVyLnN0eWxlLndpZHRoID0gJzQwJSdcbiAgICAvLyAgIH1lbHNle1xuICAgIC8vICAgICBpbWdXcmFwcGVyLnN0eWxlLndpZHRoID0gJzcwJSdcbiAgICAvLyAgIH1cbiAgICAvLyAgIH0pXG5cbiAgICAvLyAgIC8vIGltZ1dyYXBwZXIuc3R5bGUud2lkdGggPSAnNDAlJ1xuICAgIC8vICAgLy8gaDIuc3R5bGUuXG4gICAgLy8gfVxuXG5cblxuXG4gICAgLy8gbGlua01vZGFsTW9yZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgZXZ0ID0+IHtcbiAgICAvLyAgIGxldCByZXMgPSBhd2FpdCBzaG93U2luZ2xlSXRlbW0oZXZ0LCBlLCBcInByb2plY3RzXCIpO1xuXG4gICAgLy8gICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tY29udGVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIC8vICAgbmF2YmFyKHsgcHJvamVjdDogZSB9KTtcbiAgICAvLyAgIHByb2plY3RzKFwicHJvamVjdFwiLCB7XG4gICAgLy8gICAgIHByb2plY3Q6IGUsXG4gICAgLy8gICAgIHRlY2hub2xvZ2llczogcmVzLnRlY2hub2xvZ2llcyxcbiAgICAvLyAgICAgdHJhaXRzOiByZXMudHJhaXRzXG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHRlY2hub2xvZ2llcyhcInRlY2hub2xvZ2llc1wiLCB7IHRlY2hub2xvZ2llczogcmVzLnRlY2hub2xvZ2llcyB9KTtcbiAgICAvLyB9KTtcblxuICAgIC8vIGxldCBsaW5rTW9kYWxTaXRlQnRuID0gbWFrZUVsZW1lbnQoXCJidXR0b25cIiwgXCJzaXRlLWJ1dHRvblwiLCBsaW5rTW9kYWwsIHtcbiAgICAvLyAgIGlubmVyVGV4dDogXCJ2aXNpdCBzaXRlXCJcbiAgICAvLyB9KTtcbiAgICAvLyBsaW5rTW9kYWxTaXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBldnQgPT4ge1xuICAgIC8vICAgbG9jYXRpb24uaHJlZiA9IGUuc2l0ZV91cmw7XG4gICAgLy8gICB0YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgcmV0dXJuIHByb2plY3RJbWdcbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2ltYWdlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiaW1wb3J0IHsgQmFzZVVybCB9IGZyb20gJy4vQmFzZVVybC5qcydcbmNvbnN0IGJhc2VVcmwgPSBCYXNlVXJsKClcblxuXG5cblxuZXhwb3J0IGxldCBnZXRUZWNobm9sb2dpZXMgPSBhc3luYyAodHlwZSkgPT4ge1xuICBsZXQgcmVzdWx0cyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3RlY2hub2xvZ2llc2ApXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuXG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oKGFucykgPT4ge1xuICAgICAgcmV0dXJuIGFuc1xuICAgIH0pXG5cbiAgcmV0dXJuIHR5cGUsIHJlc3VsdHNcbn0iLCJpbXBvcnQgeyBCYXNlVXJsIH0gZnJvbSAnLi9CYXNlVXJsLmpzJ1xuY29uc3QgYmFzZVVybCA9IEJhc2VVcmwoKVxuXG5cbmV4cG9ydCBsZXQgZ2V0UHJvamVjdHMgPSBhc3luYyAoKSA9PiB7XG4gIGxldCByZXN1bHRzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vcHJvamVjdHNgKVxuICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChhbnMpID0+IHtcbiAgICAgIHJldHVybiBhbnNcbiAgICB9KVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbmV4cG9ydCBsZXQgZ2V0UHJvamVjdCA9IGFzeW5jIChpZCkgPT4ge1xuICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vcHJvamVjdHMvJHtpZH1gKVxuICAgIC50aGVuKChyZXMpID0+IHtcblxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICAgIC50aGVuKChhbnMpID0+IHtcbiAgICAgIHJldHVybiBhbnNcbiAgICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuXG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gYXN5bmMgKGJvZHkpID0+IHtcbiAgY29uc29sZS5sb2coJ2VyZScpXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGJvZHkpKVxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9wcm9qZWN0c2AsIHtcbiAgICBtZXRob2Q6IGBwb3N0YCxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICBjb25zb2xlLmxvZyhyZXMpXG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3QgPSBhc3luYyAoYm9keSwgaWQpID0+IHtcbiAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkoYm9keSkpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3Byb2plY3RzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogYHB1dGAsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSksXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gIH0pXG4gICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgIHJldHVybiBqc29uLmpzb24oKVxuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcblxufVxuLy9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gYXN5bmMgKGlkKSA9PiB7XG5cblxuXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3Byb2plY3RzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogYGRlbGV0ZWAsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICBjb25zb2xlLmxvZyhyZXMpXG59XG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2plY3RUZWNobm9sb2dpZXMgPSBhc3luYyAocHJvamVjdF9pZCwgaWQpID0+IHtcbiAgY29uc29sZS5sb2coJ3VwdCcpXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L3Byb2plY3RzLyR7cHJvamVjdF9pZH0vdGVjaG5vbG9naWVzLyR7aWR9YCwge1xuICAgIG1ldGhvZDogYHB1dGAsXG4gICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgfSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgcmV0dXJuIGpzb24uanNvbigpXG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICBjb25zb2xlLmxvZyhyZXMpXG5cbn0iLCIvLyBpbXBvcnQgXCIuLi9TaGFyZWQvSW1hZ2VcIlxuaW1wb3J0IHsgcXMsIHFzYSwgY2VjbCwgYWMsIGJ0biB9IGZyb20gXCIuLi9IZWxwZXJzL2RvbUhlbHBlclwiXG5pbXBvcnQgeyB2ZXJpZnkgfSBmcm9tIFwiLi4vU2VydmljZXMvQXBpQXV0aC5qc1wiXG5pbXBvcnQgeyBnZXRUZWNobm9sb2dpZXMgfSBmcm9tIFwiLi4vU2VydmljZXMvQXBpVGVjaC5qc1wiXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCIuLi9TaGFyZWQvSW1hZ2UuanNcIlxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL0Zvb3Rlci9Gb290ZXIuanNcIlxuXG5cbmltcG9ydCB7XG4gIGdldFByb2plY3RzLFxuICBhZGRQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0LFxuICBkZWxldGVQcm9qZWN0LFxuICB1cGRhdGVQcm9qZWN0VGVjaG5vbG9naWVzLFxufSBmcm9tIFwiLi4vU2VydmljZXMvQXBpUHJvamVjdC5qc1wiXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLCBDaGVja2JveCwgTGFiZWwgfSBmcm9tIFwiLi4vU2hhcmVkL0Zvcm0uanNcIlxuaW1wb3J0IHsgRWRpdFByb2plY3QgfSBmcm9tIFwiLi9FZGl0UHJvamVjdFwiXG5pbXBvcnQgXCIuL3Byb2plY3RzLnNjc3NcIlxuXG4vKioqKioqKioqKlxuIENMRUFSIFBBR0VcbioqKioqKioqKioqL1xuY29uc3QgY2xlYXJQYWdlID0gKGVsZW1lbnQpID0+IHtcbiAgd2hpbGUgKGVsZW1lbnQuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQubGFzdENoaWxkKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQcm9qZWN0cygpIHtcbiAgbGV0IG1haW5Db250ZW50ID0gcXMoXCIubWFpbi1jb250ZW50LXNjcm9sbGFibGVcIilcbiAgY2xlYXJQYWdlKG1haW5Db250ZW50KVxuICBsZXQgbG9hZGluZyA9IG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNlY2woXCJkaXZcIiwgXCJsb2FkaW5nXCIpKVxuICBsb2FkaW5nLmlubmVySFRNTCA9IFwibG9hZGluZy4uLlwiXG5cblxuICAvKioqKioqKioqKioqKipcbiAgUkVOREVSIFBST0pFQ1RTXG4gICoqKioqKioqKioqKioqKi9cbiAgY29uc3QgcmVzcCA9IGF3YWl0IGdldFByb2plY3RzKClcbiAgY2xlYXJQYWdlKG1haW5Db250ZW50KVxuXG5cbiAgY29uc3QgY29udGFpbmVyV2lkdGggPSBtYWluQ29udGVudC5jbGllbnRXaWR0aFxuXG4gIHJlc3AuZm9yRWFjaChhc3luYyAocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICBsZXQgcHJvamVjdFdyYXAgPSBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjZWNsKFwiZGl2XCIsIFwicHJvamVjdC13cmFwXCIpKVxuICAgIGxldCBpbWFnZSA9IHByb2plY3RXcmFwLmFwcGVuZENoaWxkKFxuICAgICAgSW1hZ2UoYHNyYy9pbWcvJHtwcm9qZWN0LmltZ191cmx9YCwgcHJvamVjdC5uYW1lLCB0cnVlLCBwcm9qZWN0LnNpdGVfdXJsKVxuICAgIClcbiAgICBjb25zb2xlLmxvZyhpbWFnZSlcbiAgICBsZXQgYm9vbCA9IFwiZmFsc2VcIlxuICAgIGxldCBsaW5rTW9kYWwgPSBjZWNsKFwiZGl2XCIsIFwibGluay1tb2RhbFwiKVxuXG4gICAgbGV0IGltZ1dyYXBwZXIgPSBxc2EoXCIuaW1nLXdyYXBwZXJcIilcbiAgICBsZXQgaW5uZXJJbWdXcmFwID0gcXNhKFwiLmlubmVyLWltZy13cmFwXCIpXG4gICAgbGV0IHRlY2hJY29ucyA9IGNlY2woXCJkaXZcIiwgXCJ0ZWNoLWljb25zXCIpXG4gICAgcHJvamVjdC50ZWNobm9sb2dpZXMuZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgbGV0IHRlY2hJY29uID0gdGVjaEljb25zLmFwcGVuZENoaWxkKGNlY2woXCJpbWdcIiwgXCJ0ZWNoLWljb25cIikpXG4gICAgICB0ZWNoSWNvbi5zcmMgPSBgc3JjL2ltZy8ke2ljb24uaWNvbl91cmx9YFxuICAgIH0pXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gY2VjbCgnZGl2JywgJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwcm9qZWN0LmRlc2NyaXB0aW9uXG5cbiAgICBpZiAoY29udGFpbmVyV2lkdGggPCA5MDApIHtcbiAgICAgIGxpbmtNb2RhbC5hcHBlbmRDaGlsZCh0ZWNoSWNvbnMpXG5cbiAgICAgIGxpbmtNb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGxpbmtNb2RhbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgIGxpbmtNb2RhbC5hcHBlbmRDaGlsZCh0ZWNoSWNvbnMpXG5cbiAgICB9XG5cblxuXG4gICAgbGV0IGxpbmtNb2RhbEljb25zID0gbGlua01vZGFsLmFwcGVuZENoaWxkKGNlY2woJ2RpdicsICdsaW5rLW1vZGFsLWljb25zJykpXG5cblxuICAgIGxpbmtNb2RhbEljb25zLmlubmVySFRNTCA9XG4gICAgICBgPGRpdj48YSBocmVmPSR7cHJvamVjdC5zaXRlX3VybH0gdGFyZ2V0PSdfYmxhbmsnPjxpIGNsYXNzPVwiZmFzIGZhLWhvbWUgZmEtZndcIj48L2k+PC9hPlxuICAgIDxwIGNsYXNzPSdob21lLXRvb2wtdGlwJz53ZWJzaXRlPC9wPjwvZGl2PlxuXG4gICAgPGRpdj48YSBocmVmPSR7cHJvamVjdC5naXRodWJfdXJsfSB0YXJnZXQ9J19ibGFuayc+PGkgY2xhc3M9XCJmYWIgZmEtZ2l0aHViXCI+PC9pPjwvYT5cbiAgICA8cCBjbGFzcz0nZ2l0aHViLXRvb2wtdGlwJz5naXRodWI8L3A+PC9kaXY+YFxuXG5cbiAgICBjb25zb2xlLmxvZyhpbm5lckltZ1dyYXBbMF0uY2hpbGRyZW5bMV0pXG5cblxuXG5cblxuXG4gICAgLyoqKioqKioqKioqKioqXG4gICAgQUREIExJTksgTU9EQUxcbiAgICAqKioqKioqKioqKioqKiovXG4gICAgaW1nV3JhcHBlcltpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChib29sID09PSBcInRydWVcIikge1xuICAgICAgICBib29sID0gXCJmYWxzZVwiXG4gICAgICAgIGlubmVySW1nV3JhcFtpbmRleF0uY2xhc3NMaXN0LmFkZChcImNsb3NlLWN1cnRhaW5cIilcbiAgICAgICAgaW5uZXJJbWdXcmFwW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwib3Blbi1jdXJ0YWluXCIpXG4gICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLmxhc3RDaGlsZC5yZW1vdmUoKVxuXG5cbiAgICAgICAgaW1nV3JhcHBlcltpbmRleF0uc3R5bGUud2lkdGggPSAnODAlJ1xuICAgICAgICBpbWdXcmFwcGVyW2luZGV4XS5zdHlsZS5wYWRkaW5nID0gJzYlJ1xuICAgICAgICBpbWdXcmFwcGVyW2luZGV4XS5zdHlsZS5tYXJnaW4gPSAnMCdcblxuICAgICAgICBwcm9qZWN0V3JhcC5zdHlsZS5tYXJnaW4gPSAnMCAxMCUgMyUgMTAlJ1xuICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLnN0eWxlLndpZHRoID0gJzEwMCUnXG5cbiAgICAgICAgcHJvamVjdFdyYXAuY2xhc3NMaXN0LnJlbW92ZShcInByb2plY3Qtd3JhcC1jbGlja1wiKVxuXG4gICAgICAgIGltYWdlLmxhc3RDaGlsZC5yZW1vdmUoKVxuXG4gICAgICAgIC8vIGlubmVySW1nV3JhcFtpbmRleF0uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXG5cbiAgICAgIH0gZWxzZSBpZiAoYm9vbCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICAgIGJvb2wgPSBcInRydWVcIlxuICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJvcGVuLWN1cnRhaW5cIilcbiAgICAgICAgaW5uZXJJbWdXcmFwW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiY2xvc2UtY3VydGFpblwiKVxuICAgICAgICBpbWdXcmFwcGVyW2luZGV4XS5hcHBlbmRDaGlsZChsaW5rTW9kYWwpXG5cblxuXG4gICAgICAgIGlmIChjb250YWluZXJXaWR0aCA8IDkwMCkge1xuICAgICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJ1xuICAgICAgICAgIGxpbmtNb2RhbC5zdHlsZS53aWR0aCA9ICc5MCUnXG4gICAgICAgICAgdGVjaEljb25zLnN0eWxlLndpZHRoID0gJzgwJSdcbiAgICAgICAgICBsaW5rTW9kYWwuc3R5bGUubWFyZ2luVG9wID0gJzUlJ1xuICAgICAgICAgIGxpbmtNb2RhbC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3JnYigyNDAsIDI1MywgMjUzKSdcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLnN0eWxlLndpZHRoID0gJzkwJSdcbiAgICAgICAgICBpbWdXcmFwcGVyW2luZGV4XS5zdHlsZS5wYWRkaW5nID0gJzIlJ1xuICAgICAgICAgIGltZ1dyYXBwZXJbaW5kZXhdLnN0eWxlLm1hcmdpbiA9ICcwIGF1dG8nXG4gICAgICAgICAgcHJvamVjdFdyYXAuc3R5bGUubWFyZ2luID0gJzAgMSUnXG5cbiAgICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLnN0eWxlLndpZHRoID0gJzk5JSdcbiAgICAgICAgICBpbm5lckltZ1dyYXBbaW5kZXhdLnN0eWxlLmhlaWdodCA9ICc5OSUnXG4gICAgICAgICAgLy8gXG4gICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgIGltYWdlLmFwcGVuZENoaWxkKHRlY2hJY29ucylcbiAgICAgICAgY29uc29sZS5sb2coaW1hZ2UpXG5cbiAgICAgICAgbGV0IGl3ID0gaW1nV3JhcHBlcltpbmRleF0uc3R5bGVcbiAgICAgICAgaXcuc2V0UHJvcGVydHkoXG4gICAgICAgICAgXCItLWFuaW1hdGlvblwiLFxuICAgICAgICAgIFwiYW5pbWF0ZS1pbWctd3JhcHBlciAxLjVzIGxpbmVhciBmb3J3YXJkc1wiXG4gICAgICAgIClcbiAgICAgICAgcHJvamVjdFdyYXAuY2xhc3NMaXN0LmFkZChcInByb2plY3Qtd3JhcC1jbGlja1wiKVxuXG4gICAgICB9XG4gICAgfSlcblxuICAgIC8qKioqKioqKioqKioqKioqKioqXG4gICAgIEVESVQgUFJPSkVDVCBCVVRUT05cbiAgICAqKioqKioqKioqKioqKioqKioqKi9cbiAgICBpZiAoYXdhaXQgdmVyaWZ5KCkpIHtcbiAgICAgIGNvbnN0IGVkaXRQcm9qZWN0V3JhcHBlciA9IGNlY2woXCJkaXZcIiwgXCJlZGl0LXByb2plY3Qtd3JhcHBlclwiKVxuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IEJ1dHRvbihcInNob3ctZWRpdC1idXR0b25cIiwgXCJzdWJtaXRcIiwgXCJ1cGRhdGVcIilcbiAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdFdyYXAubGFzdENoaWxkLmNsYXNzTmFtZSlcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb2plY3RXcmFwLmxhc3RDaGlsZC5jbGFzc05hbWUgIT09IFwiZWRpdC1wcm9qZWN0LWZvcm1cIlxuICAgICAgICApXG4gICAgICAgICAgRWRpdFByb2plY3QocHJvamVjdFdyYXAsIHByb2plY3QpXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHByb2plY3RXcmFwLmxhc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgZWRpdFByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKGVkaXRCdXR0b24pXG5cbiAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICBERUxFVEUgUFJPSkVDVCBCVVRUT05cbiAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IEJ1dHRvbihcImRlbGV0ZS1wcm9qZWN0XCIsIFwic3VibWl0XCIsIFwiZGVsZXRlXCIpXG4gICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgbGV0IGFuc3dlciA9IGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgJHtwcm9qZWN0Lm5hbWV9P2ApXG4gICAgICAgIGFuc3dlciAmJiBhd2FpdCBkZWxldGVQcm9qZWN0KHByb2plY3QuaWQpXG4gICAgICAgIGFuc3dlciAmJiBhd2FpdCBQcm9qZWN0cygpXG4gICAgICB9KVxuICAgICAgZWRpdFByb2plY3RXcmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcblxuICAgICAgcHJvamVjdFdyYXAuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RXcmFwcGVyKVxuICAgIH1cbiAgfSlcblxuICAvKioqKioqKioqKipcbiAgQUREIFBST0pFQ1QgXG4gICoqKioqKioqKioqKi9cbiAgaWYgKGF3YWl0IHZlcmlmeSgpKSB7XG4gICAgbGV0IGFkZEJ0biA9IEJ1dHRvbihcInNob3ctYWRkLWZvcm1cIiwgXCJzdWJtaXRcIiwgXCJhZGQgcHJvamVjdFwiKVxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2cobWFpbkNvbnRlbnQubGFzdENoaWxkLmNsYXNzTmFtZSlcbiAgICAgIGlmIChtYWluQ29udGVudC5sYXN0Q2hpbGQuY2xhc3NOYW1lID09PSBcInNob3ctYWRkLWZvcm1cIilcbiAgICAgICAgRWRpdFByb2plY3QobWFpbkNvbnRlbnQsIHJlc3BbMF0sIFwiYWRkUHJvamVjdFwiKVxuICAgICAgZWxzZSB7XG4gICAgICAgIG1haW5Db250ZW50Lmxhc3RDaGlsZC5yZW1vdmUoKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBhYyhtYWluQ29udGVudCwgYWRkQnRuKVxuICB9XG5cbiAgLy8gLy9kb3duIGJ1dHRvblxuXG4gIC8vIGNvbnN0IHNlZU1vcmVCdG4gPSBCdXR0b24oJ3NlZS1tb3JlLWJ0bicsICdzdWJtaXQnLCAnc2VlIG1vcmUnKVxuXG4gIC8vIGFjKG1haW5Db250ZW50LCBzZWVNb3JlQnRuKVxuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKEZvb3RlcigpKVxuXG5cbn1cbiIsImltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94LCBMYWJlbCB9IGZyb20gXCIuLi9TaGFyZWQvRm9ybS5qc1wiXG5pbXBvcnQgeyBnZXRUZWNobm9sb2dpZXMgfSBmcm9tIFwiLi4vU2VydmljZXMvQXBpVGVjaC5qc1wiXG5pbXBvcnQge1xuICBnZXRQcm9qZWN0LFxuICBhZGRQcm9qZWN0IGFzIGFkZE5ld1Byb2plY3QsXG4gIHVwZGF0ZVByb2plY3QsXG4gIGRlbGV0ZVByb2plY3QsXG4gIHVwZGF0ZVByb2plY3RUZWNobm9sb2dpZXMsXG59IGZyb20gXCIuLi9TZXJ2aWNlcy9BcGlQcm9qZWN0LmpzXCJcbmltcG9ydCB7IFByb2plY3RzIH0gZnJvbSBcIi4vUHJvamVjdHMuanNcIlxuaW1wb3J0IHsgYWMsIGNlY2wgfSBmcm9tIFwiLi4vSGVscGVycy9kb21IZWxwZXIuanNcIlxuXG5leHBvcnQgY29uc3QgRWRpdFByb2plY3QgPSBhc3luYyAocHJvamVjdFdyYXAsIHByb2plY3QsIGFkZFByb2plY3QpID0+IHtcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKlxuICBNQUtFIEFORCBTRVQgRk9STSAgSU5QVVRTXG4gICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIGNvbnNvbGUubG9nKFwiYWRkXCIsIGFkZFByb2plY3QpXG4gIGlmIChhZGRQcm9qZWN0ID09PSBcImFkZFByb2plY3RcIikge1xuICAgIGZvciAobGV0IGl0ZW0gaW4gcHJvamVjdCkge1xuICAgICAgcHJvamVjdFtpdGVtXSA9IFwiXCJcbiAgICB9XG4gIH1cbiAgbGV0IG5ld1Byb2plY3QgPSB7fVxuICBsZXQgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5uYW1lKVxuICAgIG5ld1Byb2plY3RbZS50YXJnZXQubmFtZV0gPSBlLnRhcmdldC52YWx1ZVxuICB9XG4gIGxldCBmb3JtID0gRm9ybShcImVkaXQtcHJvamVjdC1mb3JtXCIpXG4gIGxldCBpbnB1dHMgPSBjZWNsKCdkaXYnLCAnZWRpdC1mb3JtLWlucHV0cycpXG4gIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRzKVxuICBPYmplY3Qua2V5cyhwcm9qZWN0KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoXG4gICAgICBrZXkgIT09IFwiaWRcIiAmJlxuICAgICAga2V5ICE9PSBcInRlY2hub2xvZ2llc1wiICYmXG4gICAgICBrZXkgIT09IFwiY3JlYXRlZF9hdFwiICYmXG4gICAgICBrZXkgIT09IFwidXBkYXRlZF9hdFwiXG4gICAgKSB7XG4gICAgICBuZXdQcm9qZWN0W2tleV0gPSBwcm9qZWN0W2tleV1cbiAgICAgIGNvbnN0IGlucHV0ID0gSW5wdXQoe1xuICAgICAgICBjbGFzc05hbWU6IFwiZWRpdC1mb3JtLWlucHV0XCIsXG4gICAgICAgIG5hbWU6IGtleSxcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIHZhbHVlOiBhZGRQcm9qZWN0ID09PSBcImFkZFByb2plY3RcIiA/IFwiXCIgOiBuZXdQcm9qZWN0W2tleV0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiBrZXksXG4gICAgICAgIGhhbmRsZUNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgICAgfSlcbiAgICAgIGlucHV0cy5hcHBlbmRDaGlsZChpbnB1dClcbiAgICB9XG4gIH0pXG5cbiAgLyoqKioqKioqKioqKioqXG4gICBTRVQgQ0hFQ0tCT1hFU1xuICAqKioqKioqKioqKioqKiovXG4gIGNvbnN0IGNoZWNrcyA9IGNlY2woJ2RpdicsICdlZGl0LWZvcm0tY2hlY2tib3hlcycpXG4gIGZvcm0uYXBwZW5kQ2hpbGQoY2hlY2tzKVxuICBsZXQgdGVjaG5vbG9naWVzID0gYXdhaXQgZ2V0VGVjaG5vbG9naWVzKClcbiAgdGVjaG5vbG9naWVzLm1hcCgodGVjaG5vbG9neSkgPT4ge1xuXG4gICAgbGV0IGNoZWNrZWRcbiAgICBhZGRQcm9qZWN0ID09PSB1bmRlZmluZWQgJiZcbiAgICAgIHByb2plY3QudGVjaG5vbG9naWVzLmZvckVhY2goKHByb2plY3RUZWNobm9sb2d5KSA9PiB7XG4gICAgICAgIGlmICh0ZWNobm9sb2d5Lm5hbWUgPT09IHByb2plY3RUZWNobm9sb2d5Lm5hbWUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyh0ZWNobm9sb2d5Lm5hbWUsIHByb2plY3RUZWNobm9sb2d5Lm5hbWUpXG4gICAgICAgICAgY2hlY2tlZCA9IFwiY2hlY2tlZFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgbGV0IGJ4ID0gQ2hlY2tib3goe1xuICAgICAgY2xhc3NOYW1lOiBcImVkaXQtcHJvamVjdC1jaGtib3hcIixcbiAgICAgIG5hbWU6IHRlY2hub2xvZ3kubmFtZSxcbiAgICAgIGlkOiB0ZWNobm9sb2d5Lm5hbWUsXG4gICAgICB2YWx1ZTogdGVjaG5vbG9neS5pZCxcbiAgICAgIGNoZWNrZWQ6IGFkZFByb2plY3QgPT09IFwiYWRkUHJvamVjdFwiID8gXCJcIiA6IGNoZWNrZWQsXG5cbiAgICB9KVxuICAgIGNoZWNrcy5hcHBlbmRDaGlsZChieClcbiAgICBjaGVja3MuYXBwZW5kQ2hpbGQoTGFiZWwoXCJ0ZWNoLWJveC1sYWJlbFwiLCB0ZWNobm9sb2d5Lm5hbWUsIFwidGVjaC1ib3hcIikpXG5cbiAgfSlcbiAgZm9ybS5hcHBlbmRDaGlsZChcbiAgICBCdXR0b24oXG4gICAgICBcImVkaXQtcHJvamVjdC1idXR0b25cIixcbiAgICAgIFwic3VibWl0XCIsXG4gICAgICBhZGRQcm9qZWN0ID09PSBcImFkZFByb2plY3RcIiA/IFwiYWRkIG5ldyBwcm9qZWN0XCIgOiBcInN1Ym1pdFwiXG4gICAgKVxuICApXG5cblxuICBhYyhwcm9qZWN0V3JhcCwgZm9ybSlcblxuXG4gIC8qKioqKioqKioqXG4gICBTVUJNSVQgRk9STVxuICAqKioqKioqKioqKi9cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGFzeW5jIChldnQpID0+IHtcbiAgICBldnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnNvbGUubG9nKFwiYWRkXCIsIGFkZFByb2plY3QpXG5cbiAgICBjb25zdCBjaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWRcIilcbiAgICBjb25zb2xlLmxvZyhjaGVja2JveGVzKVxuICAgIG5ld1Byb2plY3QudGVjaG5vbG9naWVzID0gW11cbiAgICBjaGVja2JveGVzLmZvckVhY2goKGJveCkgPT4ge1xuICAgICAgbmV3UHJvamVjdC50ZWNobm9sb2dpZXMucHVzaChib3gudmFsdWUpXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhcImFkZFwiLCBuZXdQcm9qZWN0KVxuICAgIGFkZFByb2plY3QgPT09IFwiYWRkUHJvamVjdFwiXG4gICAgICA/IGF3YWl0IGFkZE5ld1Byb2plY3QobmV3UHJvamVjdClcbiAgICAgIDogYXdhaXQgdXBkYXRlUHJvamVjdChuZXdQcm9qZWN0LCBwcm9qZWN0LmlkKVxuXG4gICAgYXdhaXQgUHJvamVjdHMoKVxuICB9KVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHJvamVjdHMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiXSwic291cmNlUm9vdCI6IiJ9