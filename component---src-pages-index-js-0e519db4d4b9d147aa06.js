(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{7361:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png","srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/e5610/profile-pic.png 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/d4bf4/profile-pic.avif 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/6dacf7b2c4db85249eda1745ffb570ed/3faea/profile-pic.webp 50w,\\n/static/6dacf7b2c4db85249eda1745ffb570ed/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')},9535:function(e,t,l){"use strict";var a=l(7294),i=l(5444),n=l(2407);t.Z=function(){var e,t,r=(0,i.useStaticQuery)("3257411868"),c=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=r.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["AUTO","WEBP","AVIF"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:l(7361)}),(null==c?void 0:c.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,c.name)," ",(null==c?void 0:c.summary)||null," ",a.createElement("a",{href:"https://twitter.com/"+((null==s?void 0:s.twitter)||"")},"You should follow them on Twitter")))}},5608:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return o}});var a=l(7294),i=l(5444),n=function(){return a.createElement("div",{className:"menu"},a.createElement("span",null,a.createElement(i.Link,{to:"/about"},"About")))},r=l(9535),c=l(7198),s=l(3751),o=function(e){var t,l=e.data,o=e.location,d=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=l.allMarkdownRemark.nodes;return 0===f.length?a.createElement(c.Z,{location:o,title:d},a.createElement(n,null),a.createElement(s.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(c.Z,{location:o,title:d},a.createElement(s.Z,{title:"All posts"}),a.createElement(n,null),a.createElement(r.Z,null),a.createElement("ol",{style:{listStyle:"none"}},f.map((function(e){if("/about/"!==e.fields.slug){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0e519db4d4b9d147aa06.js.map