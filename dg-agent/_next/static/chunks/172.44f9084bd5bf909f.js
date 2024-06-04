"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{32:function(e,n,t){t.a(e,async function(e,r){try{t.r(n),t.d(n,{default:function(){return ToolBoxV2}});var o=t(8896),a=t(2052),l=t(2322);t(7157);var s=t(2105),i=t(4821),c=t.n(i),u=t(1791),d=t(1798),f=t(9634),p=t(95),h=t(1648),m=t(7644),x=t(1430).Buffer,b=e([a]);a=(b.then?(await b)():b)[0];let g={uuid:(0,f.Z)(),name:"weather-api",description:"Get the weather data for a given location.",schema:c()('\n        z.object({\n            location: z.string().nonempty()\n                    .describe("The location: district, state to get weather data for."),\n        })\n    '),action:c()('\n        async function ({ location }) {\n            const URL = `https://farmerchat.farmstack.co/vistaar/api/weather/get_weather_forecast/?location=${location}&source=TOMORROW_NOW`;\n        \n            try {\n                const response = await fetch(URL);\n                if (!response.ok) {\n                    throw new Error("Failed to fetch weather data.");\n                }\n                const text_data = await response.text();\n                return text_data;\n            } catch (error) {\n                throw new Error("Failed to fetch weather data.");\n            }\n        } \n    ')},y={uuid:(0,f.Z)(),name:"doc-qa-tool",description:"Get answers to crop-related queries.",schema:c()('\n        z.object({\n            query: z.string().nonempty().describe("The question related to a crop."),\n            crop: z.enum(["coffee", "dairy", "wheat"]).describe("The crop to which query is related."),\n        })\n    '),action:c()("\n        async function ({ query, crop }) {\n            const url = \"https://farmerchat.farmstack.co/dev/telegram_app/doc_qa/\";\n\n            const payload = {\n                query,\n                crop: crop.charAt(0).toUpperCase() + crop.slice(1),\n            };\n            const headers = {\n                'Content-Type': 'application/json'\n            };\n\n            try {\n                const response = await fetch(url, {\n                    method: 'POST',\n                    headers,\n                    body: JSON.stringify(payload),\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to get answers.\");\n                }\n                const data = await response.json();\n                return data.response || '';\n            } catch (error) {\n                throw new Error(\"Failed to get answers.\");\n            }\n        }\n    ")},w={uuid:(0,f.Z)(),name:"video-search-tool",description:"Get the crop-related video link.",schema:c()('\n        z.object({\n            query: z.string().nonempty().max(255).describe("The question related to a crop."),\n            crop: z.enum(["coffee", "dairy", "wheat"]).describe("The crop to which query is related."),\n        })\n    '),action:c()("\n        async function ({ query, crop }) {\n            const url = \"https://farmerchat.farmstack.co/dev/telegram_app/video_search/\";\n\n            const payload = {\n                query,\n                crop: crop.charAt(0).toUpperCase() + crop.slice(1) // Capitalize the crop name\n            };\n            const headers = {\n                'Content-Type': 'application/json'\n            };\n\n            try {\n                const response = await fetch(url, {\n                    method: 'POST',\n                    headers,\n                    body: JSON.stringify(payload),\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to get video link.\");\n                }\n                const data = await response.json();\n                return data.video_link || '';\n            } catch (error) {\n                throw new Error(\"Failed to get video link.\");\n            }\n        }\n    ")};function ToolBoxV2(){let[e,n]=(0,d.useState)(null),[t,r]=(0,d.useState)(null),[i,c]=(0,s._)(u.RM,"");(0,d.useEffect)(()=>{async function loadTools(){let e=await (0,p.Pb)(),n=[];for(let[t,r]of e){let e=await (0,p.Pr)(t);n.push(e)}return n}Promise.resolve().then(()=>loadTools()).then(e=>n(e)).catch(e=>console.error(e))},[]);let{token:f,username:b}=(0,h.yH)();function handleEdit(e){r(e)}async function handleDelete(t){let o=e.filter(e=>e.uuid!==t.uuid);await (0,p._h)(t.uuid),r(null),n(o)}async function handleToolSave(t){console.log("Saving tool: ",t);let o=e.map(e=>e.uuid===t.uuid?t:e);await (0,p.yk)(t),r(null),n(o)}async function handleAddTool(){if(!e)return;let t=createNewToolTpl(),o=[...e,t];n(o),r(t)}async function handleExport(e){let n=JSON.stringify(e,null,2),t=new Blob([n],{type:"application/json"}),r=URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download="".concat(e.uuid,".json"),o.click()}async function exportToGithub(e){if(!b||!i)return;let n=JSON.stringify(e,null,2),{owner:t,repo:r,branch:o}=(0,h.v7)(i),a=new m.v({auth:f}),l="tools/".concat(e.uuid,".json"),s="at-ui: update tool: ".concat(e.name),c=x.from(n).toString("base64"),u=await a.repos.getContent({owner:t,repo:r,path:l,ref:o}).then(e=>e.data.sha).catch(()=>null);await a.repos.createOrUpdateFileContents({owner:t,repo:r,branch:o,path:l,message:s,content:c,sha:u})}async function handleExportToGH(e){try{await exportToGithub(e),l.Am.success("Tool exported to GitHub: ".concat(e.name))}catch(e){console.error(e),l.Am.error("Failed to export tool to GitHub: ".concat(e))}}let g=(0,o.jsx)("p",{children:"No tools"});return(e&&e.length>0&&(g=(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("ol",{className:"w-full list-inside list-decimal",children:e.map(e=>(0,o.jsxs)("li",{children:[(0,o.jsx)("span",{className:"text-xl",children:e.name}),(0,o.jsx)("h3",{children:e.description}),(0,o.jsx)("button",{type:"button",className:"mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:()=>handleEdit(e),children:"Edit"}),(0,o.jsx)("button",{type:"button",className:"mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",onClick:()=>handleExport(e),children:"Export"}),(0,o.jsx)("button",{type:"button",className:"mt-4 text-white bg-green-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",onClick:()=>handleExportToGH(e),children:"Sync to GH"}),(0,o.jsx)("button",{type:"button",className:"mt-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",onClick:()=>handleDelete(e),children:"Delete"})]},e.uuid))}),(0,o.jsx)("button",{type:"button",className:"mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:()=>handleAddTool(),children:"Add Tool"})]})),t)?(0,o.jsx)(a.Z,{info:t,onSave:handleToolSave,onDelete:handleDelete}):(0,o.jsxs)("div",{className:"p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[100vh] overflow-auto",children:[(0,o.jsx)("h1",{className:"text-3xl md:text-4xl mb-4",children:"Tools and toolkitss Configuration"}),g,(0,o.jsx)(l.Ix,{})]})}function createNewToolTpl(){return{uuid:(0,f.Z)(),name:"new-tool",description:"New tool description",parameters:{},action:c()("\n                async function ({ }) {\n                    // Define the action here\n                }\n            ")}}JSON.stringify([g,y,w]),r()}catch(e){r(e)}})},2052:function(e,n,t){t.a(e,async function(e,r){try{t.d(n,{Z:function(){return Tool}});var o=t(8896),a=t(2809),l=t(7932),s=t(1798),i=t(2322),c=e([a]);function Tool(e){let{info:n,onSave:t,onDelete:r}=e,c=n.uuid,[u,d]=(0,s.useState)(null),f=(0,s.useRef)(null),p=(0,s.useRef)(null),h=(0,s.useRef)(null),m=(0,s.useRef)(null),x=(0,s.useRef)(null);function handleDelete(){r&&r(n)}async function ensureUpload(){let e=new l.W;return d(e),(0,i.Am)("Please upload a file to test the action.",{theme:"dark",autoClose:!1}),await e.promise()}function createToolFromForm(){var e,n,t,r;let o=null===(e=f.current)||void 0===e?void 0:e.value;if(!o)return i.Am.error("Name is required."),null;let l=null===(n=p.current)||void 0===n?void 0:n.value;if(!l)return i.Am.error("Description is required."),null;let s=null===(t=h.current)||void 0===t?void 0:t.value;if(!s)return i.Am.error("Parameters are required: use {} if none."),null;let u=null===(r=m.current)||void 0===r?void 0:r.value;if(!u)return i.Am.error("Action is required."),null;let d={uuid:c,name:o,description:l,parameters:JSON.parse(s),action:u},x=(0,a.y)(d,{ensureUpload});return{tool:x,info:d}}async function handleTest(){var e;let n=createToolFromForm();if(!n)return;let{tool:t}=n,r=null===(e=x.current)||void 0===e?void 0:e.value;try{if(r){let e=await t.run(JSON.parse(r));"string"!=typeof e&&(e=JSON.stringify(e,null,2)),console.log("Action result: ",e),i.Am.success("Action result: ".concat(e))}return}catch(e){console.error("Error while creating tool info"),console.error(e),i.Am.error("Error while creating tool info: ".concat(e));return}}async function handleSave(){let e=createToolFromForm();if(!e)return;let{info:n}=e;t&&t(n)}async function handleFileSelect(e){let n=e.target.files;if(console.log(n),!n)return;let t=n[0];u&&u.put(t)}return(0,o.jsxs)("div",{className:"p-4 md:p-8 rounded bg-[#35252d] w-full",children:[(0,o.jsx)("h1",{className:"text-3xl md:text-4xl mb-4",children:"Tool"}),(0,o.jsx)("form",{onSubmit:e=>e.preventDefault(),children:(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{className:"flex flex-row p-1 items-baseline",children:[(0,o.jsx)("label",{children:"Name:"}),(0,o.jsx)("input",{className:"m-4",type:"text",defaultValue:n.name,ref:f,name:"name"}),(0,o.jsx)("label",{children:"Description:"}),(0,o.jsx)("input",{className:"m-4 flex-grow",type:"text",defaultValue:n.description,name:"description",ref:p})]}),(0,o.jsxs)("li",{className:"flex flex-row p-1 w-full",children:[(0,o.jsx)("div",{className:"p-1 flex-grow",children:(0,o.jsxs)("label",{children:["Parameters JSON Schema:",(0,o.jsx)("br",{}),(0,o.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,defaultValue:JSON.stringify(n.parameters,null,2),name:"parameters",ref:h})]})}),(0,o.jsx)("div",{className:"p-1 flex-grow",children:(0,o.jsxs)("label",{children:["Action:",(0,o.jsx)("br",{}),(0,o.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,defaultValue:n.action,name:"action",ref:m})]})}),(0,o.jsx)("div",{className:"p-1 flex-grow",children:(0,o.jsxs)("label",{children:["Action:",(0,o.jsx)("br",{}),(0,o.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,placeholder:"Enter test input as JSON here.",name:"testInput",ref:x})]})})]}),(0,o.jsxs)("li",{className:"flex flex-row p-1 w-full",children:[(0,o.jsx)("button",{type:"submit",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",onClick:e=>handleSave(),children:"Save"})," ",(0,o.jsx)("button",{type:"submit",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",onClick:e=>handleTest(),children:"Test"})," ",(0,o.jsx)("button",{type:"submit",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",onClick:e=>handleDelete(),children:"Delete"}),(0,o.jsxs)("label",{htmlFor:"file-input",className:"mx-2 px-8 py-4 bg-sky-600 rounded cursor-pointer",children:["\uD83D\uDDBC",(0,o.jsx)("input",{disabled:!u,type:"file",className:"hidden",id:"file-input",onChange:handleFileSelect})]})]})]})}),(0,o.jsx)(i.Ix,{})]})}a=(c.then?(await c)():c)[0],r()}catch(e){r(e)}})},9634:function(e,n,t){let r;t.d(n,{Z:function(){return esm_browser_v4}});let o="undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var a={randomUUID:o};let l=new Uint8Array(16);function rng(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(l)}let s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function unsafeStringify(e,n=0){return s[e[n+0]]+s[e[n+1]]+s[e[n+2]]+s[e[n+3]]+"-"+s[e[n+4]]+s[e[n+5]]+"-"+s[e[n+6]]+s[e[n+7]]+"-"+s[e[n+8]]+s[e[n+9]]+"-"+s[e[n+10]]+s[e[n+11]]+s[e[n+12]]+s[e[n+13]]+s[e[n+14]]+s[e[n+15]]}var esm_browser_v4=function(e,n,t){if(a.randomUUID&&!n&&!e)return a.randomUUID();e=e||{};let r=e.random||(e.rng||rng)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(let e=0;e<16;++e)n[t+e]=r[e];return n}return unsafeStringify(r)}}}]);