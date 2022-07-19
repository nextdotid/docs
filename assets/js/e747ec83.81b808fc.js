"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[2291],{49613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),k=r,f=m["".concat(s,".").concat(k)]||m[k]||c[k]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},11136:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(45443),r=(a(59496),a(49613));const o={title:"Glossary"},i=void 0,l={unversionedId:"glossary",id:"glossary",title:"Glossary",description:"Avatar",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/glossary",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/glossary.md",tags:[],version:"current",frontMatter:{title:"Glossary"},sidebar:"docs",previous:{title:"TypeScript",permalink:"/developer-guide/typescript"},next:{title:"FAQ",permalink:"/faq"}},s={},p=[{value:"Avatar",id:"glossary-avatar",level:2},{value:"Identity",id:"glossary-identity",level:2},{value:"Platform",id:"glossary-platform",level:2},{value:"Proof post",id:"glossary-proof-post",level:2},{value:"Binding (Link)",id:"glossary-link",level:2},{value:"Proof Chain",id:"glossary-proof-chain",level:2},{value:"Downgrade",id:"glossary-downgrade",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"glossary-avatar"},"Avatar"),(0,r.kt)("p",null,"Avatar is the core of user ID network in ProofService."),(0,r.kt)("p",null,"All other ",(0,r.kt)("a",{parentName:"p",href:"./glossary#glossary-identity"},"Identities")," (Web2.0 account, blockchain wallet etc.) are ",(0,r.kt)("strong",{parentName:"p"},"only"),"\nbinded with Avatar."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For now, Avatar is elliptic curve keypair using ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," curve.")),(0,r.kt)("h2",{id:"glossary-identity"},"Identity"),(0,r.kt)("p",null,"Accounts / Identities on other ",(0,r.kt)("a",{parentName:"p",href:"#glossary-platform"},"Platform")," which is\nbinded with ",(0,r.kt)("a",{parentName:"p",href:"#glossary-avatar"},"Avatar"),"."),(0,r.kt)("p",null,"For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"@my_twitter")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"twitter")," platform, ",(0,r.kt)("inlineCode",{parentName:"p"},"my_github")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"github")," platform."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See ",(0,r.kt)("a",{parentName:"p",href:"/rest-api/platforms"},"Supported platforms")," for more info.")),(0,r.kt)("h2",{id:"glossary-platform"},"Platform"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#glossary-identity"},"Identity")," provider."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"e.g. Twitter, GitHub, Facebook, Ethereum, etc.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See ",(0,r.kt)("a",{parentName:"p",href:"/rest-api/platforms"},"Supported platforms")," for more info.")),(0,r.kt)("h2",{id:"glossary-proof-post"},"Proof post"),(0,r.kt)("p",null,'To prove "I have this ',(0,r.kt)("a",{parentName:"p",href:"#glossary-identity"},"identity"),'", user needs to\ntakes an action: use this ',(0,r.kt)("a",{parentName:"p",href:"#glossary-identity"},"identity")," to post an\naccessible, specified content, which is called ",(0,r.kt)("em",{parentName:"p"},"Proof post"),"."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},'platform: "twitter"'),", proof post should be a public visible tweet."),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},'platform: "github"'),", a public visible ",(0,r.kt)("inlineCode",{parentName:"p"},"Gist"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Proof post shapes different on different ",(0,r.kt)("a",{parentName:"p",href:"#glossary-platform"},"platform"),"."),(0,r.kt)("p",{parentName:"blockquote"},"See ",(0,r.kt)("a",{parentName:"p",href:"/rest-api/platforms"},"Supported platforms")," for more info.")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"If ",(0,r.kt)("a",{parentName:"h5",href:"#glossary-identity"},"Identity")," is cryptography ID")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Cryptography ID (e.g. blockchain wallet) don't need to put a proof\npost somewhere, since sigature generating itself can already prove\nthat user owns its private key."))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"If Proof post is deleted by user")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See ",(0,r.kt)("a",{parentName:"p",href:"#glossary-downgrade"},"Downgrade"),"\u3002"))),(0,r.kt)("h2",{id:"glossary-link"},"Binding (Link)"),(0,r.kt)("p",null,"After ProofService validates ",(0,r.kt)("a",{parentName:"p",href:"#glossary-proof-post"},"Proof post"),' on\nserver side, a binding record of "',(0,r.kt)("a",{parentName:"p",href:"#glossary-avatar"},"Avatar")," <->\n",(0,r.kt)("a",{parentName:"p",href:"#glossary-identity"},"Identity"),'" will be saved into ',(0,r.kt)("a",{parentName:"p",href:"#glossary-proof-chain"},"Proof\nChain"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Struct of Link"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Code below is only a reference of Link, not specific\nimplementation in ProofService or API structure."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="link.d.ts"',title:'"link.d.ts"'},'// assert(signature.match(/0x[a-f0-9]{144}/))\n// Sample:\n// 0x3046022100881328457aa312135c37e1ddf8a129717274ce3f389c176936f5cb44edf04fc4022100be183139154d108ce2e5d6ba16678b0dbeb3b7d70caac2b00b2dad8f81e87790\ntype Signature = string;\n\n// All available chain modification actions\nenum Action {\n    Create = "create",\n    Delete = "delete",\n}\n\n// All supported platforms,\nenum Platform {\n    Twitter = "twitter",\n    Keybase = "keybase",\n}\n\n// Each link in the proof chain\ninterface Link {\n    // If this is genesis link, leave it null; else, it equals\n    // previous link\'s signature. Worked as a pointer.\n    prev: Signature | null;\n    action: Action;\n    platform: Platform;\n    identity: string;\n    // if method === Method.Add, then it must be a string; else, left null\n    proof_location: string | null;\n    // UNIX timestamp (unit: second)\n    created_at: number;\n    // An UUID of this link, works as a global identifier.\n    uuid: string;\n    // Signature of this link made by avatar.\n    signature: Signature;\n}\n'))),(0,r.kt)("h2",{id:"glossary-proof-chain"},"Proof Chain"),(0,r.kt)("p",null,"Each ",(0,r.kt)("a",{parentName:"p",href:"#glossary-link"},"Link")," under the same ",(0,r.kt)("a",{parentName:"p",href:"#glossary-avatar"},"Avatar")," is chained into a link:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Each ",(0,r.kt)("a",{parentName:"li",href:"#glossary-link"},"Link")," has a signature of\n",(0,r.kt)("a",{parentName:"li",href:"#glossary-avatar"},"Avatar"),"."),(0,r.kt)("li",{parentName:"ul"},"Every ",(0,r.kt)("a",{parentName:"li",href:"#glossary-link"},"Link")," (except the first one under this\n",(0,r.kt)("a",{parentName:"li",href:"#glossary-avatar"},"Avatar"),") has its previous\n",(0,r.kt)("a",{parentName:"li",href:"#glossary-link"},"Link"),"'s signature.")),(0,r.kt)("p",null,"So to ensure that ProofService server cannot falsify any of the record\nin the chain without Avatar-provided signature."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Proof Chain mechanism is not picky of storage media. But we will put\nit in Arweave / IPFS in the future, anyway.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"TBD")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There will be an API to export the whole Proof Chain of a Avatar."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Struct of Proof Chain"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Code below is only a reference of Proof Chain, not specific\nimplementation in ProofService or API structure."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="chain.d.ts"',title:'"chain.d.ts"'},'const VERSION = "1";\n\n// assert(public_key.match(/^0x[a-f0-9]{130}$/))\n// Sample:\n// 0x0428b73a2b67a88a47edb15bed5c73a199e24287bb12997c54239e9e6815e24a3032a502d58afe3f36a54f2f7606022907f358d0dd58939cffa0a845c5043ce038\ntype PublicKey = string;\n\ninterface Chain {\n    version: VERSION;\n    avatar: {\n        public_key: PublicKey,\n        curve: "secp256k1",\n    };\n    // See definition of `Link` above.\n    links: Link[];\n}\n'))),(0,r.kt)("h2",{id:"glossary-downgrade"},"Downgrade"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"WIP")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ud83d\udc77\u200d\u2640\ufe0f\ud83d\udc77 Work in progress, will be ready SOON\u2122\ufe0f."))),(0,r.kt)("p",null,"ProofService server will periodically check the validity of ",(0,r.kt)("a",{parentName:"p",href:"#glossary-proof-post"},"Proof post"),"."),(0,r.kt)("p",null,"If ",(0,r.kt)("a",{parentName:"p",href:"#glossary-proof-post"},"Proof post")," becomes invalid, this binding\nrecord will be marked as ",(0,r.kt)("inlineCode",{parentName:"p"},'"is_valid": false')," (with reason) in\n",(0,r.kt)("a",{parentName:"p",href:"./rest-api/proofservice-api#proof-query"},"Query API"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"e.g. User deletes ",(0,r.kt)("a",{parentName:"p",href:"#glossary-proof-post"},"Proof tweet")," after creating\na ",(0,r.kt)("a",{parentName:"p",href:"#glossary-link"},"Link"),", but doesn't ",(0,r.kt)("a",{parentName:"p",href:"./rest-api/proofservice-api#proof-add"},"inform"),"\nProofService to delete this link (aka unbind).")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ProofService still won't (and can't) do anything to ",(0,r.kt)("a",{parentName:"p",href:"#glossary-proof-chain"},"Proof\nChain")," even downgraded."),(0,r.kt)("p",{parentName:"blockquote"},"All ProofService can do is to return ",(0,r.kt)("inlineCode",{parentName:"p"},'"is_valid": false')," in ",(0,r.kt)("a",{parentName:"p",href:"./rest-api/proofservice-api#proof-query"},"Query\nAPI"),".")),(0,r.kt)("p",null,"How to handle this downgraded relationship is entirely up to applications which use ProofService."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"e.g. show a \u26a0\ufe0f to user, low priority when presenting, or just omit it.")))}c.isMDXComponent=!0}}]);