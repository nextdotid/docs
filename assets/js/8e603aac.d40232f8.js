"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[3259],{9613:function(e,n,a){a.d(n,{Zo:function(){return u},kt:function(){return m}});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return a?t.createElement(g,s(s({ref:n},u),{},{components:a})):t.createElement(g,s({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2707:function(e,n,a){a.r(n),a.d(n,{assets:function(){return x},contentTitle:function(){return y},default:function(){return _},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return S}});var t=a(5443),r=a(3010),i=a(9496),s=a(9613),o=a(1626),l=a(3054),c=a(4833),u=a(1602),p=a(2567),d="tabList_Jl1X",m="tabItem_la8T";function g(e){var n,a,r=e.lazy,s=e.block,l=e.defaultValue,g=e.values,f=e.groupId,b=e.className,h=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=g?g:h.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,c.l)(v,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===l?l:null!=(n=null!=l?l:null==(a=h.find((function(e){return e.props.default})))?void 0:a.props.value)?n:h[0].props.value;if(null!==y&&!v.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,u.U)(),x=N.tabGroupChoices,S=N.setTabGroupChoices,w=(0,i.useState)(y),_=w[0],E=w[1],T=[],C=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var P=x[f];null!=P&&P!==_&&v.some((function(e){return e.value===P}))&&E(P)}var O=function(e){var n=e.currentTarget,a=T.indexOf(n),t=v[a].value;t!==_&&(C(n),E(t),null!=f&&S(f,String(t)))},D=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t,r=T.indexOf(e.currentTarget)+1;a=null!=(t=T[r])?t:T[0];break;case"ArrowLeft":var i,s=T.indexOf(e.currentTarget)-1;a=null!=(i=T[s])?i:T[T.length-1]}null==(n=a)||n.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",d)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},b)},v.map((function(e){var n=e.value,a=e.label,r=e.attributes;return i.createElement("li",(0,t.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:function(e){return T.push(e)},onKeyDown:D,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":_===n})}),null!=a?a:n)}))),r?(0,i.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},h.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==_})}))))}function f(e){var n=(0,l.Z)();return i.createElement(g,(0,t.Z)({key:String(n)},e))}var b="tabItem_X3vC";function h(e){var n=e.children,a=e.hidden,t=e.className;return i.createElement("div",{role:"tabpanel",className:(0,o.Z)(b,t),hidden:a},n)}var v=["components"],k={id:"ps-faq",title:"FAQ",sidebar_position:5},y=void 0,N={unversionedId:"proof-service/ps-faq",id:"proof-service/ps-faq",title:"FAQ",description:"How do I generate a Persona?",source:"@site/docs/proof-service/faq.mdx",sourceDirName:"proof-service",slug:"/proof-service/ps-faq",permalink:"/proof-service/ps-faq",draft:!1,editUrl:"https://github.com/nextdotid/docs/docs/proof-service/faq.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"ps-faq",title:"FAQ",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Flow",permalink:"/proof-service/ps-flow"},next:{title:"API",permalink:"/proof-service/api"}},x={},S=[{value:"How do I generate a Persona?",id:"how-do-i-generate-a-persona",level:2},{value:"I got <code>&quot;bad signature&quot;</code> error in <code>POST /v1/proof</code>",id:"bad-signature",level:2},{value:"Sample code snippets for persona-generating and signing",id:"sample",level:2}],w={toc:S};function _(e){var n=e.components,a=(0,r.Z)(e,v);return(0,s.kt)("wrapper",(0,t.Z)({},w,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"how-do-i-generate-a-persona"},"How do I generate a ",(0,s.kt)("a",{parentName:"h2",href:"ps-glossary#glossary-persona"},"Persona"),"?"),(0,s.kt)("p",null,"As in ",(0,s.kt)("a",{parentName:"p",href:"ps-glossary#glossary-persona"},"glossary"),", technically, persona\nis the same as Ethereum wallet: they're both ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," elliptic\ncurve asymmetric keypair."),(0,s.kt)("p",null,"So, generating and managing Persona should be the same as generating /\nmanaging wallets. Search for an ",(0,s.kt)("inlineCode",{parentName:"p"},"secp256k1")," SDK in your project's\nprogramming language to generate one."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Basiclly,"),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"secret key should be 32-bytes long"),(0,s.kt)("li",{parentName:"ul"},"public key has 2 shapes:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Uncompressed(65-bytes, started with ",(0,s.kt)("inlineCode",{parentName:"li"},"0x04"),"), or"),(0,s.kt)("li",{parentName:"ul"},"compressed(33-bytes, started with ",(0,s.kt)("inlineCode",{parentName:"li"},"0x02")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"0x03"),", in most case ",(0,s.kt)("inlineCode",{parentName:"li"},"0x02"),")")))))),(0,s.kt)("h2",{id:"bad-signature"},"I got ",(0,s.kt)("inlineCode",{parentName:"h2"},'"bad signature"')," error in ",(0,s.kt)("a",{parentName:"h2",href:"api#proof-add"},(0,s.kt)("inlineCode",{parentName:"a"},"POST /v1/proof"))),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Check if ",(0,s.kt)("inlineCode",{parentName:"li"},"created_at")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"uuid")," is the same as ",(0,s.kt)("a",{parentName:"li",href:"api#proof-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"POST /v1/proof/payload"))," result."),(0,s.kt)("li",{parentName:"ol"},"Check if you're using ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/web3.js/blob/1.x/docs/web3-eth-personal.rst#sign"},"Ethereum Personal Sign"),".",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"If your DApp is using wallet SDK (e.g. MetaMask), make sure\nyou're using correct signature RPC method.")))),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"How do I implement personal sign by myself?")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"In pseudo-code, ",(0,s.kt)("inlineCode",{parentName:"li"},"personal_sign")," is:")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'sign(keccak256("\\x19Ethereum Signed Message:\\n" + dataToSign.length + dataToSign)))\n')),(0,s.kt)("ul",{parentName:"div"},(0,s.kt)("li",{parentName:"ul"},"Make sure ",(0,s.kt)("inlineCode",{parentName:"li"},"dataToSign.length")," is length of bytes (",(0,s.kt)("inlineCode",{parentName:"li"},"Buffer"),"\nlength in some language), not UTF-8 ",(0,s.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Code_point"},"code\npoint")," length.",(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-go"},'assert.Equal(4, len([]byte("\ud83d\udc0e"))) // Not 1\n'))),(0,s.kt)("li",{parentName:"ul"},"Signature should be 65-bytes long.")),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-elixir"},"<<r::binary-size(32), s::binary-size(32), v::binary-size(1)>> = signature_binary\n# v should be 0x00 or 0x01 or 0x1B or 0x1C\n# 0x00 is equivalent to 0x1B\n# 0x01 is equivalent to 0x1C\n")),(0,s.kt)("p",{parentName:"div"},"Here's a test case."),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-go"},'// Psuedo-code\n// Given a signature payload\npayload := "Test123123!"\n// And a secret key\nsecret_key := "0x9deba3488458c0314e5fef8920d3b117dd76415569cf270db8fd864896c02732"\n// The personal sign result should be\nassert.Equal(\n  "0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401",\n  personal_sign(secret_key, payload).ToHexString()\n)\n')))),(0,s.kt)("h2",{id:"sample"},"Sample code snippets for persona-generating and signing"),(0,s.kt)(f,{mdxType:"Tabs"},(0,s.kt)(h,{value:"rust",label:"Rust",default:!0,mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'[dependencies]\nlibsecp256k1 = "0.7"\nhex = "0.4"\nsha3 = "0.10" # Keccak256\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},'use libsecp256k1::{SecretKey, Message};\nuse sha3::{Keccak256, Digest};\n\nconst SECRET_KEY: &str = "9DEBA3488458C0314E5FEF8920D3B117DD76415569CF270DB8FD864896C02732";\nconst SIGN_PAYLOAD: &str = "Test123123!";\n\nfn main() {\n    // Raw sign message\n    let sign_payload: String = SIGN_PAYLOAD.to_string();\n    // SecretKey instance\n    let secret_key = SecretKey::parse_slice(hex::decode(SECRET_KEY).unwrap().as_slice()).unwrap();\n    // Sign it\n    let personal_signature = personal_sign(&sign_payload, &secret_key);\n    // Verify it\n    println!("Signature: 0x{}", hex::encode(personal_signature));\n    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401\n}\n\n/// `web3.eth.personal.sign()`\nfn personal_sign(payload: &String, secret_key: &SecretKey) -> Vec<u8> {\n    // Wrap personal.sign() required signature struct\n    let personal_message = format!("\\x19Ethereum Signed Message:\\n{}{}", payload.len(), payload);\n    // Keccak256 it into a digest.\n    let mut hasher = Keccak256::default();\n    hasher.update(personal_message);\n    let digest: [u8; 32] = hasher.finalize().into();\n\n    // Sign the digest.\n    let (r_and_s, v) = libsecp256k1::sign(&Message::parse(&digest), secret_key);\n    // Rebuild the sig into a [u8; 65]\n    let mut signature: Vec<u8> = vec![];\n    signature.extend_from_slice(&r_and_s.r.b32()); // r (32 bytes)\n    signature.extend_from_slice(&r_and_s.s.b32()); // s (32 bytes)\n    signature.push(v.serialize()); // v (1 byte)\n    if signature.len() != 65 {\n        panic!("Signature length is not 65 bytes");\n    }\n    signature\n}\n'))),(0,s.kt)(h,{value:"go",label:"Go",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="cmd/playground.go"',title:'"cmd/playground.go"'},'package main\n\nimport (\n    "crypto/ecdsa"\n    "fmt"\n\n    "github.com/ethereum/go-ethereum/common/hexutil"\n    "github.com/ethereum/go-ethereum/crypto"\n)\n\nconst (\n    SECRET_KEY   = "9deba3488458c0314e5fef8920d3b117dd76415569cf270db8fd864896c02732"\n    SIGN_PAYLOAD = "Test123123!"\n)\n\nfunc main() {\n    sk, err := crypto.HexToECDSA(SECRET_KEY)\n    if err != nil {\n        panic(err)\n    }\n\n    sign, err := signPersonal([]byte(SIGN_PAYLOAD), sk)\n    if err != nil {\n        panic(err)\n    }\n\n    fmt.Printf("Signature: %s\\n", hexutil.Encode(sign))\n    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401\n}\n\n// signPersonal signs a payload using given secret key.\nfunc signPersonal(payload []byte, sk *ecdsa.PrivateKey) (signature []byte, err error) {\n    digest := signPersonalDigest(payload)\n    signature, err = crypto.Sign(digest, sk)\n    if err != nil {\n        return nil, err\n    }\n\n    return signature, nil\n}\n\n// signPersonalDigest hashes the given payload with eth.personal.sign struct.\nfunc signPersonalDigest(data []byte) []byte {\n    messsage := fmt.Sprintf("\\x19Ethereum Signed Message:\\n%d%s", len(data), data)\n    return crypto.Keccak256([]byte(messsage))\n}\n'))),(0,s.kt)(h,{value:"javascript",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="package.json"',title:'"package.json"'},'{\n  "dependencies": {\n    "ethereumjs-util": "^7.1.4"\n  }\n}\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import { ecsign, toRpcSig, keccakFromString } from 'ethereumjs-util'\n\nasync function personalSign(message: Buffer, privateKey: Buffer): Promise<Buffer> {\n    const messageHash = keccakFromString(`\\x19Ethereum Signed Message:\\n${message.length}${message}`, 256)\n    const signature = ecsign(messageHash, privateKey)\n    return Buffer.from(toRpcSig(signature.v, signature.r, signature.s).slice(2), 'hex')\n}\n\nasync function main() {\n    const message = Buffer.from('Test123123!', 'utf8');\n    const secretKey = Buffer.from('9deba3488458c0314e5fef8920d3b117dd76415569cf270db8fd864896c02732', 'hex');\n    const signature = await personalSign(message, secretKey);\n\n    console.log(`Signature: 0x${signature.toString('hex')}`);\n    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d5641c\n\n    console.log(`Signature(base64): ${signature.toString('base64')}`);\n    // Signature(base64): UvIQ2trRPEyNBlbnOAMAo2egVmMc8mlQuqfeT1gBh3lcdrX8lN5b0LivTV30Mmh9kAQCy6hqElcK9WvjW6jVZBw=\n}\n\nmain();\n")))))}_.isMDXComponent=!0}}]);