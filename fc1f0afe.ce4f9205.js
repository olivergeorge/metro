(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{158:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var i=t(1),o=t(10),r=(t(0),t(165)),a={id:"api",title:"API"},c={id:"api",title:"API",description:"## Methods",source:"@site/../docs/API.md",permalink:"/metro/docs/api",editUrl:"https://github.com/facebook/metro/edit/master/website/../docs/API.md",sidebar:"docs",previous:{title:"Caching",permalink:"/metro/docs/caching"},next:{title:"Configuring Metro",permalink:"/metro/docs/configuration"}},p=[{value:"Methods",id:"methods",children:[]},{value:"Quick Start",id:"quick-start",children:[]},{value:"Reference",id:"reference",children:[{value:"<code>loadConfig(&lt;options&gt;)</code>",id:"loadconfigoptions",children:[]},{value:"<code>async runMetro(config)</code>",id:"async-runmetroconfig",children:[]},{value:"<code>async runBuild(config, &lt;options&gt;)</code>",id:"async-runbuildconfig-options",children:[]},{value:"<code>async runServer(config, &lt;options&gt;)</code>",id:"async-runserverconfig-options",children:[]},{value:"<code>createConnectMiddleware(config, &lt;options&gt;)</code>",id:"createconnectmiddlewareconfig-options",children:[]}]}],l={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("p",null,"<AUTOGENERATED_TABLE_OF_CONTENTS>"),Object(r.b)("hr",null),Object(r.b)("h2",{id:"quick-start"},"Quick Start"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Compile a file"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const config = await Metro.loadConfig();\n\nawait Metro.runBuild(config, {\n  entry: 'index.js',\n  out: 'bundle.js',\n});\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run a server and watch the filesystem for changes"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const config = await Metro.loadConfig();\n\nawait Metro.runServer(config, {\n  port: 8080,\n});\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create a Connect middleware and plug it into a server"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"const Metro = require('metro');\nconst express = require('express');\nconst app = express();\nconst server = require('http').Server(app);\n\nMetro.loadConfig().then(async config => {\n  const connectMiddleware = await Metro.createConnectMiddleware(config);\n  const {server: {port}} = config;\n\n  app.use(connectMiddleware.middleware);\n  server.listen(port);\n  connectMiddleware.attachHmrServer(server);\n});\n")))),Object(r.b)("h2",{id:"reference"},"Reference"),Object(r.b)("p",null,"All functions exposed below accept an additional ",Object(r.b)("inlineCode",{parentName:"p"},"config")," option. This object should be the ",Object(r.b)("a",Object(i.a)({parentName:"p"},{href:"/metro/docs/cli"}),"Metro configuration")," exposed by your ",Object(r.b)("inlineCode",{parentName:"p"},"metro.config.js")," file - you can obtain it using ",Object(r.b)("inlineCode",{parentName:"p"},"Metro.loadConfig"),"."),Object(r.b)("h3",{id:"loadconfigoptions"},Object(r.b)("inlineCode",{parentName:"h3"},"loadConfig(<options>)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Basic options:")," ",Object(r.b)("inlineCode",{parentName:"p"},"config"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cwd")),Object(r.b)("p",null,"Load the Metro configuration, either from ",Object(r.b)("inlineCode",{parentName:"p"},"config")," in options if specified, or by traversing the directory hierarchy from ",Object(r.b)("inlineCode",{parentName:"p"},"cwd")," to the root until it finds a file (by default ",Object(r.b)("inlineCode",{parentName:"p"},"metro.config.js"),"). The returned configuration will have been normalized and merged with Metro's default values."),Object(r.b)("h3",{id:"async-runmetroconfig"},Object(r.b)("inlineCode",{parentName:"h3"},"async runMetro(config)")),Object(r.b)("p",null,"Creates a Metro server based on the config and returns it. You can use this as a middleware in your existing server."),Object(r.b)("h3",{id:"async-runbuildconfig-options"},Object(r.b)("inlineCode",{parentName:"h3"},"async runBuild(config, <options>)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Required options:")," ",Object(r.b)("inlineCode",{parentName:"p"},"entry"),", ",Object(r.b)("inlineCode",{parentName:"p"},"out")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Basic options:")," ",Object(r.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(r.b)("inlineCode",{parentName:"p"},"optimize"),", ",Object(r.b)("inlineCode",{parentName:"p"},"platform"),", ",Object(r.b)("inlineCode",{parentName:"p"},"sourceMap"),", ",Object(r.b)("inlineCode",{parentName:"p"},"sourceMapUrl")),Object(r.b)("p",null,"Bundles ",Object(r.b)("inlineCode",{parentName:"p"},"entry")," for the given ",Object(r.b)("inlineCode",{parentName:"p"},"platform"),", and saves it to location ",Object(r.b)("inlineCode",{parentName:"p"},"out"),". If ",Object(r.b)("inlineCode",{parentName:"p"},"sourceMap")," is set, also generates a source map. The source map will be inlined, unless ",Object(r.b)("inlineCode",{parentName:"p"},"sourceMapUrl")," is also defined. In the latter case, a new file will be generated with the basename of the ",Object(r.b)("inlineCode",{parentName:"p"},"sourceMapUrl")," parameter."),Object(r.b)("h3",{id:"async-runserverconfig-options"},Object(r.b)("inlineCode",{parentName:"h3"},"async runServer(config, <options>)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Basic options:")," ",Object(r.b)("inlineCode",{parentName:"p"},"host"),", ",Object(r.b)("inlineCode",{parentName:"p"},"port"),", ",Object(r.b)("inlineCode",{parentName:"p"},"secure"),", ",Object(r.b)("inlineCode",{parentName:"p"},"secureKey"),", ",Object(r.b)("inlineCode",{parentName:"p"},"secureCert"),", ",Object(r.b)("inlineCode",{parentName:"p"},"hmrEnabled")),Object(r.b)("p",null,"Starts a full Metro HTTP server. It will listen on the specified ",Object(r.b)("inlineCode",{parentName:"p"},"host:port"),", and can then be queried to retrieve bundles for various entry points. If the ",Object(r.b)("inlineCode",{parentName:"p"},"secure")," family of options are present, the server will be exposed over HTTPS. If ",Object(r.b)("inlineCode",{parentName:"p"},"hmrEnabled")," is set, the server will also expose a websocket server and inject the HMR client into the generated bundles."),Object(r.b)("h3",{id:"createconnectmiddlewareconfig-options"},Object(r.b)("inlineCode",{parentName:"h3"},"createConnectMiddleware(config, <options>)")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Basic options:")," ",Object(r.b)("inlineCode",{parentName:"p"},"port")),Object(r.b)("p",null,"Instead of creating the full server, creates a Connect middleware that answers to bundle requests. This middleware can then be plugged into your own servers. The ",Object(r.b)("inlineCode",{parentName:"p"},"port")," parameter is optional and only used for logging purposes."))}s.isMDXComponent=!0}}]);