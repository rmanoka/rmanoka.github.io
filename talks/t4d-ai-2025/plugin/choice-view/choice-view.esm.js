/*!
 * reveal.js Choice View plugin
 * 
 * A plugin that scans for elements with the 'choice-view' class
 * and logs them to the console.
 */
const e={id:"choice-view",init:function(e){const n=e;let i;function o(){const e=n.getCurrentSlide().querySelector(".choice-view");i=e?Array.from(e.children):null,i&&console.info("Choice View Plugin: Found",i.length,"choice-view elements")}n.on("ready",(function(){o()})),n.on("slidechanged",(function(e){o()})),window.addEventListener("message",(function(e){if(function(e){try{return window.location.origin===e.source.location.origin}catch(e){return!1}}(e))try{let n=JSON.parse(e.data);if(n&&"reveal-choice-view"===n.namespace)if("select-choice"===n.type)console.log("Choice View Plugin: select-choice message received",n),function(e){if(!i||0===i.length)return void console.warn("Choice View Plugin: No choice elements available to select from");const n=parseInt(e,10);if(isNaN(n)||n<0||n>=i.length)return void console.warn("Choice View Plugin: Invalid choice index",e);const o=i[n];o.classList.add("selected"),console.log("Choice View Plugin: Choice selected",{index:n,element:o})}(n.choiceIndex);else console.warn("Choice View Plugin: Unknown message type",n.type)}catch(e){console.error("Choice View Plugin: Error parsing message",e)}}))},destroy:function(){window.removeEventListener("message",onPostMessage)}};var n=()=>e;export{n as default};
