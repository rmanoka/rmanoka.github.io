(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{5918:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return ConfigPage}});var n=a(8896),o=a(2105);function LocalStorage(t){let[e,a]=(0,o._)(t.storage_key,t.default_value);return t.childComponent(e,a)}var r=a(1791),i=a(3497),l=a(1798),s=a(7644),c=a(95);function ConfigPage(){return(0,n.jsxs)("div",{className:"p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[100vh] overflow-auto",children:[(0,n.jsx)("h1",{className:"text-3xl md:text-4xl mb-4",children:"Configuration"}),(0,n.jsx)("h3",{className:"text-l md:text-xl",children:"Open AI Configuration"}),(0,n.jsx)(LocalStorage,{storage_key:r.Ye,default_value:"",childComponent:(t,e)=>(0,n.jsxs)("div",{className:"p-2 mt-4",children:[(0,n.jsx)("label",{className:"text-sm",children:"Open AI Key"}),(0,n.jsx)("input",{type:"password",className:"w-full",value:t,onChange:t=>e(t.target.value),placeholder:"OpenAI Key"})]})}),(0,n.jsx)(LocalStorage,{storage_key:r.nR,default_value:"gpt-3.5-turbo-1106",childComponent:(t,e)=>(0,n.jsxs)("div",{className:"p-2 mt-4",children:[(0,n.jsx)("label",{className:"text-sm",children:"Model Name"}),(0,n.jsx)("input",{type:"text",className:"w-full",value:t,onChange:t=>e(t.target.value),placeholder:"Model name"})]})}),(0,n.jsx)("h3",{className:"text-l md:text-xl mt-8 mb-4",children:"Github Sync"}),(0,n.jsx)(GithubSync,{}),(0,n.jsx)("h3",{className:"text-l md:text-xl mt-8 mb-4",children:"Local Files"}),(0,n.jsx)(LocalFiles,{})]})}function LocalFiles(){var t,e;let[a,o]=(0,l.useState)(null),[r,i]=(0,l.useState)(null);async function readOpfs(){let t=await (0,c.Hh)();t&&!a&&o(t);let e=await (0,c.Pb)();e&&!r&&i(e)}return(0,l.useEffect)(()=>{readOpfs()}),(0,n.jsxs)("p",{children:["Found ",null!==(t=null==a?void 0:a.length)&&void 0!==t?t:0," prompts and ",null!==(e=null==r?void 0:r.length)&&void 0!==e?e:0," tools"]})}function GithubSync(){let[t,e]=(0,o._)(r.Pf,null),a=(0,i.useSearchParams)(),[u,d]=(0,l.useState)(null),[p,h]=(0,o._)(r.RM,""),[g,f]=(0,l.useState)(null),[m,w]=(0,l.useState)(null),y=a.get("token");if(y&&(e(y),window.history.replaceState({},document.title,window.location.pathname)),(0,l.useEffect)(()=>{t&&loadUserName(t).then(()=>{}).catch(t=>{console.error("Failed to load username. Removing token.\n".concat(t)),e(null)})},[t]),!t){let t="".concat(window.location.origin).concat(window.location.pathname),e="https://zcmfttkan4f6pp756nnfrnosvy0eipgk.lambda-url.us-west-2.on.aws/auth/initial?redirect_url=".concat(encodeURIComponent(t));return(0,n.jsx)("a",{href:e,children:"Sign in with Github to sync"})}async function loadUserName(t){let e=new s.v({auth:t}),a=await e.users.getAuthenticated();d(a.data.login)}let x=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["Logged in as ",null!=u?u:"(loading...)",".",(0,n.jsx)("br",{}),"Load all ",(0,n.jsx)("code",{children:"prompts/*.txt"})," and ",(0,n.jsx)("code",{children:"tools/*.json"}),"from the repo. ",(0,n.jsx)("br",{}),"Repo URL format: \xa0",(0,n.jsx)("code",{children:"https://github.com/{org}/{repo}(/{branch})?"})]}),(0,n.jsx)("label",{className:"text-sm",children:"Repository Name"}),(0,n.jsx)("input",{className:"w-full",value:p,onChange:t=>h(t.target.value),placeholder:"Github Repository"})]});function parseRepo(t){if(!t.startsWith("https://github.com"))throw Error("Invalid github repo URL: ".concat(t));let e=t.slice(19),[a,n,...o]=e.split("/");if(!a||!n||o.length>1)throw Error("Invalid github repo URL: ".concat(t));let r="main";return 1===o.length&&(r=o[0]),{owner:a,repo:n,branch:r}}async function loadRepo(){if(!p)return null;let e=new s.v({auth:t}),{owner:a,repo:n,branch:o}=parseRepo(p),r=await e.git.getTree({owner:a,repo:n,tree_sha:o,recursive:"true"});return r.data}async function storeRepoToStorage(e){var a,n,o;let r=await navigator.storage.getDirectory(),{owner:i,repo:l,branch:u}=parseRepo(p),d=new s.v({auth:t});w("Loading data...");let h=await r.getDirectoryHandle("prompts",{create:!0}),g=0;for(let t of e.tree)if((null===(a=t.path)||void 0===a?void 0:a.startsWith("prompts/"))&&t.path.endsWith(".txt")){let e=await d.repos.getContent({owner:i,repo:l,path:t.path,ref:u}),a=e.data,n=atob(a.content),o=t.path.split("/").pop(),r=await h.getFileHandle(o,{create:!0}),s=await r.createWritable();await s.write(n),await s.close(),g++,w("Loading data... ".concat(g," prompts, 0 tools"))}await r.getDirectoryHandle("tools",{create:!0});let f=0;for(let t of e.tree)if((null===(n=t.path)||void 0===n?void 0:n.startsWith("tools/"))&&t.path.endsWith(".json")){let e=await d.repos.getContent({owner:i,repo:l,path:t.path}),a=e.data,n=atob(a.content),r=JSON.parse(n);r.uuid=null===(o=t.path.split("/").pop())||void 0===o?void 0:o.replace(".json",""),await (0,c.yk)(r),f++,w("Loading data... ".concat(g," prompts, ").concat(f," tools"))}return[g,f]}return(0,n.jsxs)(n.Fragment,{children:[x,(0,n.jsx)("button",{type:"button",className:"mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",onClick:()=>loadRepo().then(t=>t&&storeRepoToStorage(t).then(t=>{let[e,a]=t;return w("Loaded ".concat(e," prompts and ").concat(a," tools"))})).catch(t=>{console.error("Failed to load repo data.\n".concat(t)),f(null)}),children:"Load Data"}),m&&(0,n.jsx)("p",{className:"color-red text-s",children:m}),(0,n.jsx)("p",{children:g&&"Repo contains ".concat(g.tree.length," files")})]})}},1791:function(t,e,a){"use strict";a.d(e,{Dq:function(){return d},Pf:function(){return c},Qh:function(){return s},RM:function(){return u},Ye:function(){return i},dc:function(){return r},nR:function(){return l}});var n=a(4821),o=a.n(n);let r="system_prompt",i="openai_key",l="openai_model_name",s="tools_json",c="github_access_token",u="github_repo",d=o()("\n    You are Farmer.CHAT, an initiative by Digital Green Foundation,\n    aimed at providing comprehensive assistance in various farming\n    practices, a highly knowledgeable AI assistant specializing in\n    providing accurate agricultural advice.\n\n    As an assistant, engage in friendly conversation towards\n    answering the query of the user.  If some input necessary to\n    answer the question is not in the query or the chat history, ask\n    the user politely for it.  If the answer is unknown, politely\n    apologize to the user for being unable to answer the question.\n    Only answer from data obtained via the tools.\n")},95:function(t,e,a){"use strict";async function arrayFromAsync(t){let e=[];for await(let a of t)e.push(a);return e}async function readPrompts(){let t=await navigator.storage.getDirectory(),e=await t.getDirectoryHandle("prompts",{create:!0}),a=await arrayFromAsync(e.entries());return a.map(t=>{let[e,a]=t;return[e.replace(/\.txt$/,""),a]})}async function readTools(){let t=await navigator.storage.getDirectory(),e=await t.getDirectoryHandle("tools",{create:!0}),a=await arrayFromAsync(e.entries());return a.map(t=>{let[e,a]=t;return[e.replace(/\.json$/,""),a]})}async function readPrompt(t){let e=await navigator.storage.getDirectory(),a=await e.getDirectoryHandle("prompts",{create:!0}),n=await a.getFileHandle("".concat(t,".txt")),o=await n.getFile();return o.text()}async function readTool(t){let e=await navigator.storage.getDirectory(),a=await e.getDirectoryHandle("tools",{});console.log("Reading tool",t);let n=await a.getFileHandle("".concat(t,".json")),o=await n.getFile(),r=await o.text(),i=JSON.parse(r);return i.uuid=t,i}async function readAllTools(){let t=await readTools(),e=t.map(t=>{let[e,a]=t;return readTool(e)});return Promise.all(e)}async function deleteTool(t){let e=await navigator.storage.getDirectory(),a=await e.getDirectoryHandle("tools",{create:!0});await a.removeEntry("".concat(t,".json"))}async function createTool(t){let e=await navigator.storage.getDirectory(),a=await e.getDirectoryHandle("tools",{create:!0}),n=await a.getFileHandle("".concat(t.uuid,".json"),{create:!0}),o=await n.createWritable();await o.write(JSON.stringify(t)),await o.close();let r=await readTool(t.uuid);console.log("Read content: ",r)}a.d(e,{Hh:function(){return readPrompts},Pb:function(){return readTools},Pr:function(){return readTool},V:function(){return readAllTools},_h:function(){return deleteTool},vB:function(){return readPrompt},yk:function(){return createTool}})},3497:function(t,e,a){t.exports=a(9263)}}]);