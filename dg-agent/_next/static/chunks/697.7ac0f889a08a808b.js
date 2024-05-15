"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[697],{1860:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l7:function(){return createToolkit},yk:function(){return createTool}});var zod__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6418),_langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1907),dedent_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4821),dedent_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dedent_js__WEBPACK_IMPORTED_MODULE_1__);function evalWithScope(context,code){function __eval(){return eval(code)}return __eval.call(context)}function createSchema(n){if(!n)throw Error("Schema is null!");let r=dedent_js__WEBPACK_IMPORTED_MODULE_1___default()("\n    const z = this.z;\n    ".concat(n,"\n    ")),o=evalWithScope({z:zod__WEBPACK_IMPORTED_MODULE_2__.z},r);return o}function createTool(n){let{name:r,description:o,schema:i,action:c}=n,s=createSchema(i),l=evalWithScope({},"(".concat(c,")")),u=new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__.XQ({name:r,description:o,func:l,schema:s});return u}function createToolkit(n){let r=JSON.parse(n),o=r.map(n=>createTool(n));return o}let weatherAPISchema=zod__WEBPACK_IMPORTED_MODULE_2__.z.object({location:zod__WEBPACK_IMPORTED_MODULE_2__.z.string().nonempty().describe("The location: district, state to get weather data for.")}),weatherAPITool=new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__.XQ({name:"weather-api",description:"Get the weather data for a given location.",schema:weatherAPISchema,func:async n=>{let{location:r}=n,o="https://farmerchat.farmstack.co/vistaar/api/weather/get_weather_forecast/?location=".concat(r,"&source=TOMORROW_NOW");try{let n=await fetch(o);if(!n.ok)throw Error("Failed to fetch weather data.");let r=await n.text();return r}catch(n){throw Error("Failed to fetch weather data.")}}}),docQAAPIInputsSchema=zod__WEBPACK_IMPORTED_MODULE_2__.z.object({query:zod__WEBPACK_IMPORTED_MODULE_2__.z.string().nonempty().describe("The question related to a crop."),crop:zod__WEBPACK_IMPORTED_MODULE_2__.z.enum(["coffee","dairy","wheat"]).describe("The crop to which query is related.")}),docQATool=new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__.XQ({name:"doc-qa-tool",description:"Get answers to crop-related queries.",schema:docQAAPIInputsSchema,func:async n=>{let{query:r,crop:o}=n,i="https://farmerchat.farmstack.co/dev/telegram_app/doc_qa/",c={query:r,crop:o.charAt(0).toUpperCase()+o.slice(1)},s={"Content-Type":"application/json"};try{let n=await fetch(i,{method:"POST",headers:s,body:JSON.stringify(c)});if(!n.ok)throw Error("Failed to get answers.");let r=await n.json();return r.response||""}catch(n){throw Error("Failed to get answers.")}}}),videoSearchAPIInputsSchema=zod__WEBPACK_IMPORTED_MODULE_2__.z.object({query:zod__WEBPACK_IMPORTED_MODULE_2__.z.string().nonempty().max(255).describe("The question related to a crop."),crop:zod__WEBPACK_IMPORTED_MODULE_2__.z.enum(["coffee","dairy","wheat"]).describe("The crop to which query is related.")}),videoSearchTool=new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__.XQ({name:"video-search-tool",description:"Get the crop-related video link.",schema:videoSearchAPIInputsSchema,func:async n=>{let{query:r,crop:o}=n,i="https://farmerchat.farmstack.co/dev/telegram_app/video_search/",c={query:r,crop:o.charAt(0).toUpperCase()+o.slice(1)},s={"Content-Type":"application/json"};try{let n=await fetch(i,{method:"POST",headers:s,body:JSON.stringify(c)});if(!n.ok)throw Error("Failed to get video link.");let r=await n.json();return r.video_link||""}catch(n){throw Error("Failed to get video link.")}}})},1791:function(n,r,o){o.d(r,{Dq:function(){return p},Pf:function(){return d},RM:function(){return h},Ye:function(){return l},dc:function(){return s},nR:function(){return u}});var i=o(4821),c=o.n(i);let s="system_prompt",l="openai_key",u="openai_model_name",d="github_access_token",h="github_repo",p=c()("\n    You are Farmer.CHAT, an initiative by Digital Green Foundation,\n    aimed at providing comprehensive assistance in various farming\n    practices, a highly knowledgeable AI assistant specializing in\n    providing accurate agricultural advice.\n\n    As an assistant, engage in friendly conversation towards\n    answering the query of the user.  If some input necessary to\n    answer the question is not in the query or the chat history, ask\n    the user politely for it.  If the answer is unknown, politely\n    apologize to the user for being unable to answer the question.\n    Only answer from data obtained via the tools.\n")},1648:function(n,r,o){o.d(r,{I:function(){return loadUser},v:function(){return parseRepo}});var i=o(7644);function parseRepo(n){if(!n.startsWith("https://github.com"))throw Error("Invalid github repo URL: ".concat(n));let r=n.slice(19),[o,i,...c]=r.split("/");if(!o||!i||c.length>1)throw Error("Invalid github repo URL: ".concat(n));let s="main";return 1===c.length&&(s=c[0]),console.log("Parsed repo: ".concat(o,"/").concat(i,"#").concat(s)),{owner:o,repo:i,branch:s}}async function loadUser(n){let r=new i.v({auth:n}),o=await r.users.getAuthenticated();return o}},95:function(n,r,o){async function arrayFromAsync(n){let r=[];for await(let o of n)r.push(o);return r}async function readPrompts(){let n=await navigator.storage.getDirectory(),r=await n.getDirectoryHandle("prompts",{create:!0}),o=await arrayFromAsync(r.entries());return o.map(n=>{let[r,o]=n;return[r.replace(/\.txt$/,""),o]})}async function readTools(){let n=await navigator.storage.getDirectory(),r=await n.getDirectoryHandle("tools",{create:!0}),o=await arrayFromAsync(r.entries());return o.map(n=>{let[r,o]=n;return[r.replace(/\.json$/,""),o]})}async function readPrompt(n){let r=await navigator.storage.getDirectory(),o=await r.getDirectoryHandle("prompts",{create:!0}),i=await o.getFileHandle("".concat(n,".txt")),c=await i.getFile();return c.text()}async function readTool(n){let r=await navigator.storage.getDirectory(),o=await r.getDirectoryHandle("tools",{}),i=await o.getFileHandle("".concat(n,".json")),c=await i.getFile(),s=await c.text(),l=JSON.parse(s);return l.uuid=n,l}async function readAllTools(){let n=await readTools(),r=n.map(n=>{let[r,o]=n;return readTool(r)});return Promise.all(r)}async function deleteTool(n){let r=await navigator.storage.getDirectory(),o=await r.getDirectoryHandle("tools",{create:!0});await o.removeEntry("".concat(n,".json"))}async function createTool(n){let r=await navigator.storage.getDirectory(),o=await r.getDirectoryHandle("tools",{create:!0}),i=await o.getFileHandle("".concat(n.uuid,".json"),{create:!0}),c=await i.createWritable();await c.write(JSON.stringify(n)),await c.close(),await readTool(n.uuid)}o.d(r,{Hh:function(){return readPrompts},Pb:function(){return readTools},Pr:function(){return readTool},V:function(){return readAllTools},_h:function(){return deleteTool},vB:function(){return readPrompt},yk:function(){return createTool}})},1355:function(n,r,o){o.r(r),o.d(r,{default:function(){return ToolBoxV2}});var i=o(8896),c=o(1860),s=o(1798);function Tool(n){let[r,o]=(0,s.useState)(null),l=(0,s.useRef)(null),{info:u,onSave:d,onDelete:h}=n,p=u.uuid;function handleDelete(){h&&h(u)}async function handleSave(){let n=l.current;if(!n)return;let r=new FormData(n),i=Object.fromEntries(r.entries()),s=i.name,u=i.description,h=i.schema,m=i.action,w=i.testInput,g={uuid:p,name:s,description:u,schema:h,action:m};try{let n=(0,c.yk)(g);w&&await n.invoke(JSON.parse(w))}catch(n){console.error("Error while creating tool info"),console.error(n),o("Error while creating tool info: ".concat(n));return}o("Success"),d&&d(g)}return(0,i.jsxs)("div",{className:"p-4 md:p-8 rounded bg-[#35252d] w-full",children:[(0,i.jsx)("h1",{className:"text-3xl md:text-4xl mb-4",children:"Tool"}),(0,i.jsx)("form",{onSubmit:n=>n.preventDefault(),ref:l,children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{className:"flex flex-row p-1 items-baseline",children:[(0,i.jsx)("label",{children:"Name:"}),(0,i.jsx)("input",{className:"m-4",type:"text",defaultValue:u.name,name:"name"}),(0,i.jsx)("label",{children:"Description:"}),(0,i.jsx)("input",{className:"m-4 flex-grow",type:"text",defaultValue:u.description,name:"description"})]}),(0,i.jsxs)("li",{className:"flex flex-row p-1 w-full",children:[(0,i.jsx)("div",{className:"p-1 flex-grow",children:(0,i.jsxs)("label",{children:["Input Schema:",(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,defaultValue:u.schema,name:"schema"})]})}),(0,i.jsx)("div",{className:"p-1 flex-grow",children:(0,i.jsxs)("label",{children:["Action:",(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,defaultValue:u.action,name:"action"})]})}),(0,i.jsx)("div",{className:"p-1 flex-grow",children:(0,i.jsxs)("label",{children:["Action:",(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,placeholder:"Enter test input as JSON here.",name:"testInput"})]})})]}),(0,i.jsxs)("li",{className:"flex flex-row p-1 w-full",children:[(0,i.jsx)("button",{type:"submit",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",onClick:n=>handleSave(),children:"Save"})," ",(0,i.jsx)("button",{type:"submit",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",onClick:n=>handleDelete(),children:"Delete"})]})]})}),r&&(0,i.jsx)("h2",{children:r})]})}var l=o(2322);o(7157);var u=o(2105),d=o(4821),h=o.n(d),p=o(1791),m=o(9634),w=o(95),g=o(1648),y=o(7644),b=o(1430).Buffer;let x={uuid:(0,m.Z)(),name:"weather-api",description:"Get the weather data for a given location.",schema:h()('\n        z.object({\n            location: z.string().nonempty()\n                    .describe("The location: district, state to get weather data for."),\n        })\n    '),action:h()('\n        async function ({ location }) {\n            const URL = `https://farmerchat.farmstack.co/vistaar/api/weather/get_weather_forecast/?location=${location}&source=TOMORROW_NOW`;\n        \n            try {\n                const response = await fetch(URL);\n                if (!response.ok) {\n                    throw new Error("Failed to fetch weather data.");\n                }\n                const text_data = await response.text();\n                return text_data;\n            } catch (error) {\n                throw new Error("Failed to fetch weather data.");\n            }\n        } \n    ')},v={uuid:(0,m.Z)(),name:"doc-qa-tool",description:"Get answers to crop-related queries.",schema:h()('\n        z.object({\n            query: z.string().nonempty().describe("The question related to a crop."),\n            crop: z.enum(["coffee", "dairy", "wheat"]).describe("The crop to which query is related."),\n        })\n    '),action:h()("\n        async function ({ query, crop }) {\n            const url = \"https://farmerchat.farmstack.co/dev/telegram_app/doc_qa/\";\n\n            const payload = {\n                query,\n                crop: crop.charAt(0).toUpperCase() + crop.slice(1),\n            };\n            const headers = {\n                'Content-Type': 'application/json'\n            };\n\n            try {\n                const response = await fetch(url, {\n                    method: 'POST',\n                    headers,\n                    body: JSON.stringify(payload),\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to get answers.\");\n                }\n                const data = await response.json();\n                return data.response || '';\n            } catch (error) {\n                throw new Error(\"Failed to get answers.\");\n            }\n        }\n    ")},j={uuid:(0,m.Z)(),name:"video-search-tool",description:"Get the crop-related video link.",schema:h()('\n        z.object({\n            query: z.string().nonempty().max(255).describe("The question related to a crop."),\n            crop: z.enum(["coffee", "dairy", "wheat"]).describe("The crop to which query is related."),\n        })\n    '),action:h()("\n        async function ({ query, crop }) {\n            const url = \"https://farmerchat.farmstack.co/dev/telegram_app/video_search/\";\n\n            const payload = {\n                query,\n                crop: crop.charAt(0).toUpperCase() + crop.slice(1) // Capitalize the crop name\n            };\n            const headers = {\n                'Content-Type': 'application/json'\n            };\n\n            try {\n                const response = await fetch(url, {\n                    method: 'POST',\n                    headers,\n                    body: JSON.stringify(payload),\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to get video link.\");\n                }\n                const data = await response.json();\n                return data.video_link || '';\n            } catch (error) {\n                throw new Error(\"Failed to get video link.\");\n            }\n        }\n    ")};function ToolBoxV2(){let[n,r]=(0,s.useState)(null),[o,c]=(0,s.useState)(null),[d,h]=(0,u._)(p.Pf,null),[m,x]=(0,u._)(p.RM,""),[v,j]=(0,s.useState)(null);function handleEdit(n){c(n)}async function handleDelete(o){let i=n.filter(n=>n.uuid!==o.uuid);await (0,w._h)(o.uuid),c(null),r(i)}async function handleToolSave(o){let i=n.map(n=>n.uuid===o.uuid?o:n);await (0,w.yk)(o),c(null),r(i)}async function handleAddTool(){if(!n)return;let o=createNewToolTpl(),i=[...n,o];r(i),c(o)}async function handleExport(n){let r=JSON.stringify(n,null,2),o=new Blob([r],{type:"application/json"}),i=URL.createObjectURL(o),c=document.createElement("a");c.href=i,c.download="".concat(n.uuid,".json"),c.click()}async function exportToGithub(n){if(!v||!m)return;let r=JSON.stringify(n,null,2),{owner:o,repo:i,branch:c}=(0,g.v)(m),s=new y.v({auth:d}),l="tools/".concat(n.uuid,".json"),u="at-ui: update tool: ".concat(n.name),h=b.from(r).toString("base64"),p=await s.repos.getContent({owner:o,repo:i,path:l,ref:c}).then(n=>n.data.sha).catch(()=>null);await s.repos.createOrUpdateFileContents({owner:o,repo:i,branch:c,path:l,message:u,content:h,sha:p})}async function handleExportToGH(n){try{await exportToGithub(n),l.Am.success("Tool exported to GitHub: ".concat(n.name))}catch(n){console.error(n),l.Am.error("Failed to export tool to GitHub: ".concat(n))}}(0,s.useEffect)(()=>{n||Promise.resolve().then(()=>loadTools()).then(n=>r(n)).catch(n=>console.error(n));async function loadTools(){let n=await (0,w.Pb)(),r=[];for(let[o,i]of n){let n=await (0,w.Pr)(o);r.push(n)}return r}}),(0,s.useEffect)(()=>{d&&(0,g.I)(d).then(n=>j(n.data.login)).catch(n=>{console.error("Failed to load username. Removing token.\n".concat(n)),h(null)})});let k=(0,i.jsx)("p",{children:"No tools"});return(n&&n.length>0&&(k=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ol",{className:"w-full list-inside list-decimal",children:n.map(n=>(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"text-xl",children:n.name}),(0,i.jsx)("h3",{children:n.description}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:()=>handleEdit(n),children:"Edit"}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",onClick:()=>handleExport(n),children:"Export"}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-green-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",onClick:()=>handleExportToGH(n),children:"Sync to GH"}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",onClick:()=>handleDelete(n),children:"Delete"})]},n.uuid))}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:()=>handleAddTool(),children:"Add Tool"})]})),o)?(0,i.jsx)(Tool,{info:o,onSave:handleToolSave,onDelete:handleDelete}):(0,i.jsxs)("div",{className:"p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[100vh] overflow-auto",children:[(0,i.jsx)("h1",{className:"text-3xl md:text-4xl mb-4",children:"Tools and toolkitss Configuration"}),k,(0,i.jsx)(l.Ix,{})]})}function createNewToolTpl(){return{uuid:(0,m.Z)(),name:"new-tool",description:"New tool description",schema:h()("\n                z.object({\n                    // Define the schema here\n                })\n            "),action:h()("\n                async function ({ }) {\n                    // Define the action here\n                }\n            ")}}JSON.stringify([x,v,j])}}]);