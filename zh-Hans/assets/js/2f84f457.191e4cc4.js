"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[61],{49613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,f=d["".concat(c,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(45443),a=(n(59496),n(49613));const i={title:"Rust"},s=void 0,o={unversionedId:"developer-guide/rust",id:"developer-guide/rust",title:"Rust",description:"Proof Service",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/rust.md",sourceDirName:"developer-guide",slug:"/developer-guide/rust",permalink:"/zh-Hans/developer-guide/rust",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/developer-guide/rust.md",tags:[],version:"current",frontMatter:{title:"Rust"},sidebar:"docs",previous:{title:"Go",permalink:"/zh-Hans/developer-guide/go"},next:{title:"TypeScript",permalink:"/zh-Hans/developer-guide/typescript"}},c={},l=[{value:"Proof Service",id:"proof-service",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"proof-service"},"Proof Service"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You could git clone and run this ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nextdotid/Signature-Generating-Sample/tree/main/rust"},"Rust open demo")," as a help")),(0,a.kt)("p",null,"The core example of codes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'[dependencies]\nlibsecp256k1 = "0.7"\nhex = "0.4"\nsha3 = "0.10" # Keccak256\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="src/main.rs"',title:'"src/main.rs"'},'use libsecp256k1::{SecretKey, Message};\nuse sha3::{Keccak256, Digest};\n\nconst SECRET_KEY: &str = "9DEBA3488458C0314E5FEF8920D3B117DD76415569CF270DB8FD864896C02732";\nconst SIGN_PAYLOAD: &str = "Test123123!";\n\nfn main() {\n    // Raw sign message\n    let sign_payload: String = SIGN_PAYLOAD.to_string();\n    // SecretKey instance\n    let secret_key = SecretKey::parse_slice(hex::decode(SECRET_KEY).unwrap().as_slice()).unwrap();\n    // Sign it\n    let personal_signature = personal_sign(&sign_payload, &secret_key);\n    // Verify it\n    println!("Signature: 0x{}", hex::encode(personal_signature));\n    // Signature: 0x52f210dadad13c4c8d0656e7380300a367a056631cf26950baa7de4f580187795c76b5fc94de5bd0b8af4d5df432687d900402cba86a12570af56be35ba8d56401\n}\n\n/// `web3.eth.personal.sign()`\nfn personal_sign(payload: &String, secret_key: &SecretKey) -> Vec<u8> {\n    // Wrap personal.sign() required signature struct\n    let personal_message = format!("\\x19Ethereum Signed Message:\\n{}{}", payload.len(), payload);\n    // Keccak256 it into a digest.\n    let mut hasher = Keccak256::default();\n    hasher.update(personal_message);\n    let digest: [u8; 32] = hasher.finalize().into();\n\n    // Sign the digest.\n    let (r_and_s, v) = libsecp256k1::sign(&Message::parse(&digest), secret_key);\n    // Rebuild the sig into a [u8; 65]\n    let mut signature: Vec<u8> = vec![];\n    signature.extend_from_slice(&r_and_s.r.b32()); // r (32 bytes)\n    signature.extend_from_slice(&r_and_s.s.b32()); // s (32 bytes)\n    signature.push(v.serialize()); // v (1 byte)\n    if signature.len() != 65 {\n        panic!("Signature length is not 65 bytes");\n    }\n    signature\n}\n')))}p.isMDXComponent=!0}}]);