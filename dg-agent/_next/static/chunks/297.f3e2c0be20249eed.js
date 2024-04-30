"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[297],{2297:function(e,i,t){t.d(i,{APIChain:function(){return APIChain}});var a=t(8699),s=t(2738),n=t(6827);let r=`You are given the below API Documentation:
{api_docs}
Using this documentation, generate the full API url to call for answering the user question.
You should build the API url in order to get a response that is as short as possible, while still getting the necessary information to answer the question. Pay attention to deliberately exclude any unnecessary pieces of data in the API call.

Question:{question}
API url:`,u=new n.Pf({inputVariables:["api_docs","question"],template:r}),h=`${r} {api_url}

Here is the response from the API:

{api_response}

Summarize this response to answer the original question.

Summary:`,o=new n.Pf({inputVariables:["api_docs","question","api_url","api_response"],template:h});let APIChain=class APIChain extends a.l{get inputKeys(){return[this.inputKey]}get outputKeys(){return[this.outputKey]}constructor(e){super(e),Object.defineProperty(this,"apiAnswerChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"apiRequestChain",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"apiDocs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:{}}),Object.defineProperty(this,"inputKey",{enumerable:!0,configurable:!0,writable:!0,value:"question"}),Object.defineProperty(this,"outputKey",{enumerable:!0,configurable:!0,writable:!0,value:"output"}),this.apiRequestChain=e.apiRequestChain,this.apiAnswerChain=e.apiAnswerChain,this.apiDocs=e.apiDocs,this.inputKey=e.inputKey??this.inputKey,this.outputKey=e.outputKey??this.outputKey,this.headers=e.headers??this.headers}async _call(e,i){let t=e[this.inputKey],a=await this.apiRequestChain.predict({question:t,api_docs:this.apiDocs},i?.getChild("request")),s=await fetch(a,{headers:this.headers}),n=await s.text(),r=await this.apiAnswerChain.predict({question:t,api_docs:this.apiDocs,api_url:a,api_response:n},i?.getChild("response"));return{[this.outputKey]:r}}_chainType(){return"api_chain"}static async deserialize(e){let{api_request_chain:i,api_answer_chain:t,api_docs:a}=e;if(!i)throw Error("LLMChain must have api_request_chain");if(!t)throw Error("LLMChain must have api_answer_chain");if(!a)throw Error("LLMChain must have api_docs");return new APIChain({apiAnswerChain:await s.LLMChain.deserialize(t),apiRequestChain:await s.LLMChain.deserialize(i),apiDocs:a})}serialize(){return{_type:this._chainType(),api_answer_chain:this.apiAnswerChain.serialize(),api_request_chain:this.apiRequestChain.serialize(),api_docs:this.apiDocs}}static fromLLMAndAPIDocs(e,i,t={}){let{apiUrlPrompt:a=u,apiResponsePrompt:n=o}=t,r=new s.LLMChain({prompt:a,llm:e}),h=new s.LLMChain({prompt:n,llm:e});return new this({apiAnswerChain:h,apiRequestChain:r,apiDocs:i,...t})}}}}]);