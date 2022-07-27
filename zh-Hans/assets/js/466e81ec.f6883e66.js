"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[5033],{49613:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},47471:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(59496),r=a(45924);const o="tabItem_FTZG";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},59890:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(62081),r=a(59496),o=a(45924),i=a(80506),l=a(20741),s=a(73802),u=a(52075);const p="tabList_m6Et",c="tabItem_b767";function d(e){var t,a;const{lazy:i,block:d,defaultValue:m,values:f,groupId:g,className:b}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,l.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:k[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,s.U)(),[x,C]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=g){const e=N[g];null!=e&&e!==x&&v.some((t=>t.value===e))&&C(e)}const S=e=>{const t=e.currentTarget,a=T.indexOf(t),n=v[a].value;n!==x&&(O(t),C(n),null!=g&&w(g,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=T.indexOf(e.currentTarget)+1;a=null!=(n=T[t])?n:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;a=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},b)},v.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:S,onClick:S},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":x===t})}),null!=a?a:t)}))),i?(0,r.cloneElement)(k.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},19131:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(62081),r=(a(59496),a(49613));a(59890),a(47471);const o={title:"FAQ"},i=void 0,l={unversionedId:"faq",id:"faq",title:"FAQ",description:"How do I generate an Avatar?",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/zh-Hans/faq",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/faq.mdx",tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"docs",previous:{title:"Glossary",permalink:"/zh-Hans/glossary"},next:{title:"ProofService API",permalink:"/zh-Hans/rest-api/proofservice-api"}},s={},u=[{value:"How do I generate an Avatar?",id:"how-do-i-generate-an-avatar",level:2},{value:"I got <code>&quot;bad signature&quot;</code> error in <code>POST /v1/proof</code>",id:"bad-signature",level:2},{value:"I got <code>public key mismatch</code> error in <code>POST /v1/kv</code>",id:"bad-signature",level:2},{value:"Does KVService rely on an existed Avatar / binding on ProofService?",id:"does-kvservice-rely-on-an-existed-avatar--binding-on-proofservice",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-i-generate-an-avatar"},"How do I generate an Avatar?"),(0,r.kt)("p",null,"As in ",(0,r.kt)("a",{parentName:"p",href:"./glossary"},"glossary"),", technically, Avatar\nis the same as Ethereum wallet: they're both ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," elliptic\ncurve asymmetric keypair."),(0,r.kt)("p",null,"So, generating and managing Avatr should be the same as generating /\nmanaging wallets. Search for an ",(0,r.kt)("inlineCode",{parentName:"p"},"secp256k1")," SDK in your project's\nprogramming language to generate one."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Basiclly,"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"secret key should be 32-bytes long"),(0,r.kt)("li",{parentName:"ul"},"public key has 2 shapes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Uncompressed(65-bytes, started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0x04"),"), or"),(0,r.kt)("li",{parentName:"ul"},"compressed(33-bytes, started with ",(0,r.kt)("inlineCode",{parentName:"li"},"0x02")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"0x03"),", in most case ",(0,r.kt)("inlineCode",{parentName:"li"},"0x02"),")"))))),(0,r.kt)("h2",{id:"bad-signature"},"I got ",(0,r.kt)("inlineCode",{parentName:"h2"},'"bad signature"')," error in ",(0,r.kt)("a",{parentName:"h2",href:"../rest-api/proofservice-api#proof-add"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /v1/proof"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check if ",(0,r.kt)("inlineCode",{parentName:"li"},"created_at")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"uuid")," is the same as ",(0,r.kt)("a",{parentName:"li",href:"../rest-api/proofservice-api#proof-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"POST /v1/proof/payload"))," result."),(0,r.kt)("li",{parentName:"ol"},"Check if you're using ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/web3.js/blob/1.x/docs/web3-eth-personal.rst#sign"},"Ethereum Personal Sign"),".",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your DApp is using wallet SDK (e.g. MetaMask), make sure\nyou're using correct signature RPC method.")))),(0,r.kt)("admonition",{title:"How do I implement personal sign by myself?",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"In pseudo-code, ",(0,r.kt)("inlineCode",{parentName:"li"},"personal_sign")," is:")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'sign(keccak256("\\x19Ethereum Signed Message:\\n" + dataToSign.length + dataToSign)))\n')),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Make sure ",(0,r.kt)("inlineCode",{parentName:"li"},"dataToSign.length")," is length of bytes (",(0,r.kt)("inlineCode",{parentName:"li"},"Buffer"),"\nlength in some language), not UTF-8 ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Code_point"},"code\npoint")," length.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'assert.Equal(4, len([]byte("\ud83d\udc0e"))) // Not 1\n'))),(0,r.kt)("li",{parentName:"ul"},"Signature should be 65-bytes long.")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-elixir"},"<<r::binary-size(32), s::binary-size(32), v::binary-size(1)>> = signature_binary\n# v should be 0x00 or 0x01 or 0x1B or 0x1C\n# 0x00 is equivalent to 0x1B\n# 0x01 is equivalent to 0x1C\n")),(0,r.kt)("p",{parentName:"admonition"},"Here's a test case."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-go"},'// Psuedo-code\n// Given a signature payload\npayload := "Test123123!"\n// And a secret key\nsecret_key := "0x9deba3488458c0314e5fef8920d3b117dd76415569cf270db8fd864896c02732"\n// The personal sign result should be\nassert.Equal(\n  "0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401",\n  personal_sign(secret_key, payload).ToHexString()\n)\n'))),(0,r.kt)("h2",{id:"bad-signature"},"I got ",(0,r.kt)("inlineCode",{parentName:"h2"},"public key mismatch")," error in ",(0,r.kt)("inlineCode",{parentName:"h2"},"POST /v1/kv")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#bad-signature"},"ProofService FAQ"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Double check ",(0,r.kt)("inlineCode",{parentName:"p"},"dataToSign.length")," part.")),(0,r.kt)("h2",{id:"does-kvservice-rely-on-an-existed-avatar--binding-on-proofservice"},"Does KVService rely on an existed Avatar / binding on ProofService?"),(0,r.kt)("p",null,"Not really! You can use this as a storage for every secp256k1 keypair\n(",(0,r.kt)("inlineCode",{parentName:"p"},'platform == nextid && identity == "0xPUBLIC_KEY"'),") without even\nusing it on ProofService."),(0,r.kt)("p",null,"But, if you want to save data related to a specific account, we still\nencourage you to put it under precise ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"identity"),"."),(0,r.kt)("p",null,"A typical case is, your DApp allows user to set different NFT avatar\non Twitter and Github. In this case, ",(0,r.kt)("inlineCode",{parentName:"p"},"platform")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"identity")," should\nbe specified (instead of being put under an ambiguous Avatar pubkey)."))}c.isMDXComponent=!0}}]);