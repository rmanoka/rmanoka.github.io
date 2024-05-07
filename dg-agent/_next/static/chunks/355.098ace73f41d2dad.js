"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[355],{1860:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l7:function(){return createToolkit},yk:function(){return createTool}});var zod__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6418),_langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1907),dedent_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4821),dedent_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(dedent_js__WEBPACK_IMPORTED_MODULE_1__);function evalWithScope(context,code){function __eval(){return eval(code)}return __eval.call(context)}function createSchema(n){if(!n)throw Error("Schema is null!");let r=dedent_js__WEBPACK_IMPORTED_MODULE_1___default()("\n    const z = this.z;\n    ".concat(n,"\n    ")),o=evalWithScope({z:zod__WEBPACK_IMPORTED_MODULE_2__.z},r);return o}function createTool(n){let{name:r,description:o,schema:i,action:l}=n,c=createSchema(i),s=evalWithScope({},"(".concat(l,")")),d=new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__.XQ({name:r,description:o,func:s,schema:c});return d}function createToolkit(n){let r=JSON.parse(n),o=r.map(n=>createTool(n));return o}let weatherAPISchema=zod__WEBPACK_IMPORTED_MODULE_2__.z.object({location:zod__WEBPACK_IMPORTED_MODULE_2__.z.string().nonempty().describe("The location: district, state to get weather data for.")}),weatherAPITool=new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__.XQ({name:"weather-api",description:"Get the weather data for a given location.",schema:weatherAPISchema,func:async n=>{let{location:r}=n,o="https://farmerchat.farmstack.co/vistaar/api/weather/get_weather_forecast/?location=".concat(r,"&source=TOMORROW_NOW");try{let n=await fetch(o);if(!n.ok)throw Error("Failed to fetch weather data.");let r=await n.text();return r}catch(n){throw Error("Failed to fetch weather data.")}}}),docQAAPIInputsSchema=zod__WEBPACK_IMPORTED_MODULE_2__.z.object({query:zod__WEBPACK_IMPORTED_MODULE_2__.z.string().nonempty().describe("The question related to a crop."),crop:zod__WEBPACK_IMPORTED_MODULE_2__.z.enum(["coffee","dairy","wheat"]).describe("The crop to which query is related.")}),docQATool=new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__.XQ({name:"doc-qa-tool",description:"Get answers to crop-related queries.",schema:docQAAPIInputsSchema,func:async n=>{let{query:r,crop:o}=n,i="https://farmerchat.farmstack.co/dev/telegram_app/doc_qa/",l={query:r,crop:o.charAt(0).toUpperCase()+o.slice(1)},c={"Content-Type":"application/json"};try{let n=await fetch(i,{method:"POST",headers:c,body:JSON.stringify(l)});if(!n.ok)throw Error("Failed to get answers.");let r=await n.json();return r.response||""}catch(n){throw Error("Failed to get answers.")}}}),videoSearchAPIInputsSchema=zod__WEBPACK_IMPORTED_MODULE_2__.z.object({query:zod__WEBPACK_IMPORTED_MODULE_2__.z.string().nonempty().max(255).describe("The question related to a crop."),crop:zod__WEBPACK_IMPORTED_MODULE_2__.z.enum(["coffee","dairy","wheat"]).describe("The crop to which query is related.")}),videoSearchTool=new _langchain_core_tools__WEBPACK_IMPORTED_MODULE_0__.XQ({name:"video-search-tool",description:"Get the crop-related video link.",schema:videoSearchAPIInputsSchema,func:async n=>{let{query:r,crop:o}=n,i="https://farmerchat.farmstack.co/dev/telegram_app/video_search/",l={query:r,crop:o.charAt(0).toUpperCase()+o.slice(1)},c={"Content-Type":"application/json"};try{let n=await fetch(i,{method:"POST",headers:c,body:JSON.stringify(l)});if(!n.ok)throw Error("Failed to get video link.");let r=await n.json();return r.video_link||""}catch(n){throw Error("Failed to get video link.")}}})},1791:function(n,r,o){o.d(r,{Dq:function(){return f},Pf:function(){return h},Qh:function(){return u},RM:function(){return p},Ye:function(){return s},dc:function(){return c},nR:function(){return d}});var i=o(4821),l=o.n(i);let c="system_prompt",s="openai_key",d="openai_model_name",u="tools_json",h="github_access_token",p="github_repo",f=l()("\n    You are Farmer.CHAT, an initiative by Digital Green Foundation,\n    aimed at providing comprehensive assistance in various farming\n    practices, a highly knowledgeable AI assistant specializing in\n    providing accurate agricultural advice.\n\n    As an assistant, engage in friendly conversation towards\n    answering the query of the user.  If some input necessary to\n    answer the question is not in the query or the chat history, ask\n    the user politely for it.  If the answer is unknown, politely\n    apologize to the user for being unable to answer the question.\n    Only answer from data obtained via the tools.\n")},95:function(n,r,o){async function arrayFromAsync(n){let r=[];for await(let o of n)r.push(o);return r}async function readPrompts(){let n=await navigator.storage.getDirectory(),r=await n.getDirectoryHandle("prompts",{create:!0}),o=await arrayFromAsync(r.entries());return o.map(n=>{let[r,o]=n;return[r.replace(/\.txt$/,""),o]})}async function readTools(){let n=await navigator.storage.getDirectory(),r=await n.getDirectoryHandle("tools",{create:!0}),o=await arrayFromAsync(r.entries());return o.map(n=>{let[r,o]=n;return[r.replace(/\.json$/,""),o]})}async function readPrompt(n){let r=await navigator.storage.getDirectory(),o=await r.getDirectoryHandle("prompts",{create:!0}),i=await o.getFileHandle("".concat(n,".txt")),l=await i.getFile();return l.text()}async function readTool(n){let r=await navigator.storage.getDirectory(),o=await r.getDirectoryHandle("tools",{});console.log("Reading tool",n);let i=await o.getFileHandle("".concat(n,".json")),l=await i.getFile(),c=await l.text(),s=JSON.parse(c);return s.uuid=n,s}async function readAllTools(){let n=await readTools(),r=n.map(n=>{let[r,o]=n;return readTool(r)});return Promise.all(r)}async function deleteTool(n){let r=await navigator.storage.getDirectory(),o=await r.getDirectoryHandle("tools",{create:!0});await o.removeEntry("".concat(n,".json"))}async function createTool(n){let r=await navigator.storage.getDirectory(),o=await r.getDirectoryHandle("tools",{create:!0}),i=await o.getFileHandle("".concat(n.uuid,".json"),{create:!0}),l=await i.createWritable();await l.write(JSON.stringify(n)),await l.close();let c=await readTool(n.uuid);console.log("Read content: ",c)}o.d(r,{Hh:function(){return readPrompts},Pb:function(){return readTools},Pr:function(){return readTool},V:function(){return readAllTools},_h:function(){return deleteTool},vB:function(){return readPrompt},yk:function(){return createTool}})},1355:function(n,r,o){o.r(r),o.d(r,{ToolBox:function(){return ToolBox},default:function(){return ToolBoxV2}});var i=o(8896),l=o(1860),c=o(1798);function Tool(n){let[r,o]=(0,c.useState)(null),s=(0,c.useRef)(null),{info:d,onSave:u,onDelete:h}=n,p=d.uuid;function handleDelete(){h&&h(d)}async function handleSave(){let n=s.current;if(!n)return;let r=new FormData(n),i=Object.fromEntries(r.entries()),c=i.name,d=i.description,h=i.schema,f=i.action,m=i.testInput,w={uuid:p,name:c,description:d,schema:h,action:f};try{let n=(0,l.yk)(w);m&&await n.invoke(JSON.parse(m))}catch(n){console.error("Error while creating tool info"),console.error(n),o("Error while creating tool info: ".concat(n));return}o("Success"),u&&u(w)}return(0,i.jsxs)("div",{className:"p-4 md:p-8 rounded bg-[#35252d] w-full",children:[(0,i.jsx)("h1",{className:"text-3xl md:text-4xl mb-4",children:"Tool"}),(0,i.jsx)("form",{onSubmit:n=>n.preventDefault(),ref:s,children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{className:"flex flex-row p-1 items-baseline",children:[(0,i.jsx)("label",{children:"Name:"}),(0,i.jsx)("input",{className:"m-4",type:"text",defaultValue:d.name,name:"name"}),(0,i.jsx)("label",{children:"Description:"}),(0,i.jsx)("input",{className:"m-4 flex-grow",type:"text",defaultValue:d.description,name:"description"})]}),(0,i.jsxs)("li",{className:"flex flex-row p-1 w-full",children:[(0,i.jsx)("div",{className:"p-1 flex-grow",children:(0,i.jsxs)("label",{children:["Input Schema:",(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,defaultValue:d.schema,name:"schema"})]})}),(0,i.jsx)("div",{className:"p-1 flex-grow",children:(0,i.jsxs)("label",{children:["Action:",(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,defaultValue:d.action,name:"action"})]})}),(0,i.jsx)("div",{className:"p-1 flex-grow",children:(0,i.jsxs)("label",{children:["Action:",(0,i.jsx)("br",{}),(0,i.jsx)("textarea",{className:"m-4 w-full monospace",rows:15,placeholder:"Enter test input as JSON here.",name:"testInput"})]})})]}),(0,i.jsxs)("li",{className:"flex flex-row p-1 w-full",children:[(0,i.jsx)("button",{type:"submit",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",onClick:n=>handleSave(),children:"Save"})," ",(0,i.jsx)("button",{type:"submit",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",onClick:n=>handleDelete(),children:"Delete"})]})]})}),r&&(0,i.jsx)("h2",{children:r})]})}var s=o(2105),d=o(4821),u=o.n(d),h=o(1791),p=o(9634),f=o(95);let m={uuid:(0,p.Z)(),name:"weather-api",description:"Get the weather data for a given location.",schema:u()('\n        z.object({\n            location: z.string().nonempty()\n                    .describe("The location: district, state to get weather data for."),\n        })\n    '),action:u()('\n        async function ({ location }) {\n            const URL = `https://farmerchat.farmstack.co/vistaar/api/weather/get_weather_forecast/?location=${location}&source=TOMORROW_NOW`;\n        \n            try {\n                const response = await fetch(URL);\n                if (!response.ok) {\n                    throw new Error("Failed to fetch weather data.");\n                }\n                const text_data = await response.text();\n                return text_data;\n            } catch (error) {\n                throw new Error("Failed to fetch weather data.");\n            }\n        } \n    ')},w={uuid:(0,p.Z)(),name:"doc-qa-tool",description:"Get answers to crop-related queries.",schema:u()('\n        z.object({\n            query: z.string().nonempty().describe("The question related to a crop."),\n            crop: z.enum(["coffee", "dairy", "wheat"]).describe("The crop to which query is related."),\n        })\n    '),action:u()("\n        async function ({ query, crop }) {\n            const url = \"https://farmerchat.farmstack.co/dev/telegram_app/doc_qa/\";\n\n            const payload = {\n                query,\n                crop: crop.charAt(0).toUpperCase() + crop.slice(1),\n            };\n            const headers = {\n                'Content-Type': 'application/json'\n            };\n\n            try {\n                const response = await fetch(url, {\n                    method: 'POST',\n                    headers,\n                    body: JSON.stringify(payload),\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to get answers.\");\n                }\n                const data = await response.json();\n                return data.response || '';\n            } catch (error) {\n                throw new Error(\"Failed to get answers.\");\n            }\n        }\n    ")},g={uuid:(0,p.Z)(),name:"video-search-tool",description:"Get the crop-related video link.",schema:u()('\n        z.object({\n            query: z.string().nonempty().max(255).describe("The question related to a crop."),\n            crop: z.enum(["coffee", "dairy", "wheat"]).describe("The crop to which query is related."),\n        })\n    '),action:u()("\n        async function ({ query, crop }) {\n            const url = \"https://farmerchat.farmstack.co/dev/telegram_app/video_search/\";\n\n            const payload = {\n                query,\n                crop: crop.charAt(0).toUpperCase() + crop.slice(1) // Capitalize the crop name\n            };\n            const headers = {\n                'Content-Type': 'application/json'\n            };\n\n            try {\n                const response = await fetch(url, {\n                    method: 'POST',\n                    headers,\n                    body: JSON.stringify(payload),\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to get video link.\");\n                }\n                const data = await response.json();\n                return data.video_link || '';\n            } catch (error) {\n                throw new Error(\"Failed to get video link.\");\n            }\n        }\n    ")},y=JSON.stringify([m,w,g]);function ToolBoxV2(){let[n,r]=(0,c.useState)(null),[o,l]=(0,c.useState)(null);function handleEdit(n){l(n)}async function handleDelete(o){let i=n.filter(n=>n.uuid!==o.uuid);await (0,f._h)(o.uuid),l(null),r(i)}async function handleToolSave(o){let i=n.map(n=>n.uuid===o.uuid?o:n);await (0,f.yk)(o),l(null),r(i)}async function handleAddTool(){if(!n)return;let o=createNewToolTpl(),i=[...n,o];r(i),l(o)}async function handleExport(n){let r=JSON.stringify(n,null,2),o=new Blob([r],{type:"application/json"}),i=URL.createObjectURL(o),l=document.createElement("a");l.href=i,l.download="".concat(n.uuid,".json"),l.click()}(0,c.useEffect)(()=>{n||Promise.resolve().then(()=>loadTools()).then(n=>r(n)).catch(n=>console.error(n));async function loadTools(){let n=await (0,f.Pb)(),r=[];for(let[o,i]of n){console.log(o);let n=await (0,f.Pr)(o);console.log(n),r.push(n)}return r}},[n]);let s=(0,i.jsx)("p",{children:"No tools"});return(n&&n.length>0&&(s=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("ol",{className:"w-full list-inside list-decimal",children:n.map(n=>(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"text-xl",children:n.name}),(0,i.jsx)("h3",{children:n.description}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:()=>handleEdit(n),children:"Edit"}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",onClick:()=>handleExport(n),children:"Export"}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",onClick:()=>handleDelete(n),children:"Delete"})]},n.uuid))}),(0,i.jsx)("button",{type:"button",className:"mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:()=>handleAddTool(),children:"Add Tool"})]})),o)?(0,i.jsx)(Tool,{info:o,onSave:handleToolSave,onDelete:handleDelete}):(0,i.jsxs)("div",{className:"p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[100vh] overflow-auto",children:[(0,i.jsx)("h1",{className:"text-3xl md:text-4xl mb-4",children:"Tools and toolkitss Configuration"}),s]})}function ToolBox(){let[n,r]=(0,s._)(h.Qh,y),[o,l]=(0,c.useState)(null),d=JSON.parse(n),u=d.length;function handleEdit(n){l(n)}function handleDelete(n){let o=d.filter(r=>r.uuid!==n.uuid);r(JSON.stringify(o)),l(null)}function handleAddTool(){let n=createNewToolTpl(),o=[...d,n];r(JSON.stringify(o)),l(n)}if(d.map((n,r)=>(0,i.jsxs)("li",{children:[(0,i.jsx)("h2",{children:n.name}),(0,i.jsx)("h3",{children:n.description})]},n.uuid)),!o)return(0,i.jsxs)("div",{className:"p-4 md:p-8 rounded bg-[#35252d] w-full",children:[(0,i.jsx)("h1",{children:"Toolkit Configuration"}),(0,i.jsxs)("table",{className:"w-full",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Actions"})]})}),(0,i.jsx)("tbody",{children:d.map(n=>(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:n.name}),(0,i.jsx)("td",{children:n.description}),(0,i.jsx)("td",{children:(0,i.jsxs)("div",{className:"flex flex-row justify-center w-full",children:[(0,i.jsx)("button",{className:"m-4",onClick:r=>handleEdit(n),children:"Edit"}),(0,i.jsx)("button",{className:"m-4",onClick:r=>handleDelete(n),children:"Delete"})]})})]},n.name))})]}),(0,i.jsxs)("p",{children:["Using ",u," tools currently"]}),(0,i.jsx)("button",{onClick:()=>handleAddTool(),type:"button",className:"shrink-0 px-8 py-4 bg-sky-600 rounded w-28",children:"Add Tool"})]});function handleToolSave(n){let o=d.map(r=>r.uuid===n.uuid?n:r);r(JSON.stringify(o)),l(null)}return(0,i.jsx)(Tool,{info:o,onSave:handleToolSave,onDelete:handleDelete})}function createNewToolTpl(){return{uuid:(0,p.Z)(),name:"new-tool",description:"New tool description",schema:u()("\n                z.object({\n                    // Define the schema here\n                })\n            "),action:u()("\n                async function ({ }) {\n                    // Define the action here\n                }\n            ")}}}}]);