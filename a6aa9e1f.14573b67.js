(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{162:function(e,a,t){"use strict";t.r(a);t(73);var n=t(0),r=t.n(n),l=t(164),m=t(173),c=t(190),i=t(168);var o=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(i.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items,n=Object(l.a)().siteConfig.title,i="/"===a.permalink?n:"Blog";return r.a.createElement(m.a,{title:i,description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content;return r.a.createElement(c.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(o,{metadata:a})))))}},190:function(e,a,t){"use strict";t(73),t(76);var n=t(0),r=t.n(n),l=t(166),m=t.n(l),c=t(165),i=t(168),o=t(193),s=t(132),u=t.n(s),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,s,v=e.children,E=e.frontMatter,d=e.metadata,p=e.truncated,_=e.isBlogPostPage,N=void 0!==_&&_,h=d.date,b=d.permalink,f=d.tags,k=E.author,w=E.title,y=E.author_url||E.authorURL,M=E.author_title||E.authorTitle,P=E.author_image_url||E.authorImageURL;return r.a.createElement("article",{className:N?void 0:"margin-bottom--xl"},(a=N?"h1":"h2",t=h.substring(0,10).split("-"),n=t[0],l=g[parseInt(t[1],10)-1],s=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:m()("margin-bottom--sm",u.a.blogPostTitle)},N?w:r.a.createElement(i.a,{to:b},w)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("time",{dateTime:h,className:u.a.blogPostDate},l," ",s,", ",n)),r.a.createElement("div",{className:"avatar margin-bottom--md"},P&&r.a.createElement("a",{className:"avatar__photo-link",href:y,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:P,alt:k})),r.a.createElement("div",{className:"avatar__intro"},k&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:y,target:"_blank",rel:"noreferrer noopener"},k)),r.a.createElement("small",{className:"avatar__subtitle"},M)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(c.a,{components:o.a},v)),(f.length>0||p)&&r.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),f.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(i.a,{to:d.permalink,"aria-label":"Read more about "+w},r.a.createElement("strong",null,"Read More")))))}}}]);