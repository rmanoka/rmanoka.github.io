"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[451],{7451:function(e,t,i){i.d(t,{SequentialChain:function(){return SequentialChain},SimpleSequentialChain:function(){return SimpleSequentialChain}});var a=i(4563);function intersection(e,t){let i=new Set;for(let a of t)e.has(a)&&i.add(a);return i}function union(e,t){let i=new Set(e);for(let e of t)i.add(e);return i}function difference(e,t){let i=new Set(e);for(let e of t)i.delete(e);return i}function formatSet(e){return Array.from(e).map(e=>`"${e}"`).join(", ")}let SequentialChain=class SequentialChain extends a.l{static lc_name(){return"SequentialChain"}get inputKeys(){return this.inputVariables}get outputKeys(){return this.outputVariables}constructor(e){if(super(e),Object.defineProperty(this,"chains",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"outputVariables",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"returnAll",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.chains=e.chains,this.inputVariables=e.inputVariables,this.outputVariables=e.outputVariables??[],this.outputVariables.length>0&&e.returnAll)throw Error("Either specify variables to return using `outputVariables` or use `returnAll` param. Cannot apply both conditions at the same time.");this.returnAll=e.returnAll??!1,this._validateChains()}_validateChains(){if(0===this.chains.length)throw Error("Sequential chain must have at least one chain.");let e=this.memory?.memoryKeys??[],t=new Set(this.inputKeys),i=new Set(e),a=intersection(t,i);if(a.size>0)throw Error(`The following keys: ${formatSet(a)} are overlapping between memory and input keys of the chain variables. This can lead to unexpected behaviour. Please use input and memory keys that don't overlap.`);let n=union(t,i);for(let e of this.chains){let t=difference(new Set(e.inputKeys),n);if(e.memory&&(t=difference(t,new Set(e.memory.memoryKeys))),t.size>0)throw Error(`Missing variables for chain "${e._chainType()}": ${formatSet(t)}. Only got the following variables: ${formatSet(n)}.`);let i=new Set(e.outputKeys),a=intersection(n,i);if(a.size>0)throw Error(`The following output variables for chain "${e._chainType()}" are overlapping: ${formatSet(a)}. This can lead to unexpected behaviour.`);for(let e of i)n.add(e)}if(0===this.outputVariables.length){if(this.returnAll){let e=difference(n,t);this.outputVariables=Array.from(e)}else this.outputVariables=this.chains[this.chains.length-1].outputKeys}else{let e=difference(new Set(this.outputVariables),new Set(n));if(e.size>0)throw Error(`The following output variables were expected to be in the final chain output but were not found: ${formatSet(e)}.`)}}async _call(e,t){let i={},a=0;for(let n of this.chains)for(let r of(a+=1,Object.keys(i=await n.call(e,t?.getChild(`step_${a}`)))))e[r]=i[r];let n={};for(let t of this.outputVariables)n[t]=e[t];return n}_chainType(){return"sequential_chain"}static async deserialize(e){let t=[],i=e.input_variables,n=e.output_variables,r=e.chains;for(let e of r){let i=await a.l.deserialize(e);t.push(i)}return new SequentialChain({chains:t,inputVariables:i,outputVariables:n})}serialize(){let e=[];for(let t of this.chains)e.push(t.serialize());return{_type:this._chainType(),input_variables:this.inputVariables,output_variables:this.outputVariables,chains:e}}};let SimpleSequentialChain=class SimpleSequentialChain extends a.l{static lc_name(){return"SimpleSequentialChain"}get inputKeys(){return[this.inputKey]}get outputKeys(){return[this.outputKey]}constructor(e){super(e),Object.defineProperty(this,"chains",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"input"}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"output"}),Object.defineProperty(this,"trimOutputs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.chains=e.chains,this.trimOutputs=e.trimOutputs??!1,this._validateChains()}_validateChains(){for(let e of this.chains){if(1!==e.inputKeys.filter(t=>!e.memory?.memoryKeys.includes(t)??!0).length)throw Error(`Chains used in SimpleSequentialChain should all have one input, got ${e.inputKeys.length} for ${e._chainType()}.`);if(1!==e.outputKeys.length)throw Error(`Chains used in SimpleSequentialChain should all have one output, got ${e.outputKeys.length} for ${e._chainType()}.`)}}async _call(e,t){let i=e[this.inputKey],a=0;for(let n of this.chains)a+=1,i=(await n.call({[n.inputKeys[0]]:i,signal:e.signal},t?.getChild(`step_${a}`)))[n.outputKeys[0]],this.trimOutputs&&(i=i.trim()),await t?.handleText(i);return{[this.outputKey]:i}}_chainType(){return"simple_sequential_chain"}static async deserialize(e){let t=[],i=e.chains;for(let e of i){let i=await a.l.deserialize(e);t.push(i)}return new SimpleSequentialChain({chains:t})}serialize(){let e=[];for(let t of this.chains)e.push(t.serialize());return{_type:this._chainType(),chains:e}}}}}]);