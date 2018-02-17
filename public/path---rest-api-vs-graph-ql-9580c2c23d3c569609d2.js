webpackJsonp([73305860503450],{424:function(e,t){e.exports={data:{markdownRemark:{html:'<h4 id="a-new-api-standard-why-facebook-created-graphql"><a href="#a-new-api-standard-why-facebook-created-graphql" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A new API standard: Why facebook created graphql?</h4>\n<blockquote>\n<h6 id="note"><a href="#note" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><em>Note:</em></h6>\n</blockquote>\n<ul>\n<li>\n<p>Basic understanding on RESTful API is required</p>\n</li>\n<li>\n<p>This post summaries <a href="https://www.howtographql.com/basics/1-graphql-is-the-better-rest/">following link</a></p>\n</li>\n</ul>\n<p>It\'s been a decade for using <strong>RESTful API</strong> to send data over HTTP with structured access resources in web application development industry. By using a \'stateless protocol\', the <strong>server</strong> does not store any state of <strong>client session</strong> on server side. This allows to scale down thousands of concurrent users.  </p>\n<p>However, REST api has shown its shortcomings to catch up huge requirements of the clients which is mainly "inefficiency of data fetching".</p>\n<h3 id="data-fetching-issue"><a href="#data-fetching-issue" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Data Fetching Issue</h3>\n<p>Lets suppose the client wants the data of a <strong>post</strong> with the <strong>writer\'s name</strong> and its <strong>followers</strong>.</p>\n<blockquote>\n<p><strong>RESTful API</strong></p>\n</blockquote>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/data-fetch-rest-cfb4db44aa0551eef80689d9a40f5b7c-bb03f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 710px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 86.88888888888889%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAABsklEQVQ4y5WTSYoCUQyG64ouPIdH8BiCazcuRTyCoFvBaSGIOOBUczlr2u81KV6V3aKB8Kbkz0v+xJEv5Xa7yeVySfV8PmfOjm3cbrel3+/L9XoV3/fleDyK67oSRZFxRA+Hg5xOJ7NH7ve7sVMbJwxDWS6X5rHVaslsNjO/ABRDVs6qOHGnCmC1WpVisSibzUYcoiVJYgBHo5H5mcpqtZL1ei37/d4A4UxaCsaeIJ1OR2q1mgRBkE05XysA7N89Ho9MvfI1NCl/S8pfoKoEzQCOx2NZLBZvAXG0hSzsNwfWyB2hDr1eL2VOWbXT4qx77NBGoyHlctl0hAMYxUfm87nAOgWnDQCN4zgDAonco5BJmvV6XUqlkux2u2zKnucZA60VbQDDtJXruQYMUN5UX1J+x7KmqwwrwMek5Itt/+S/0bOVUjm2Q7fbleFwmKZMqjQ29VQbddTS6I91HJ3tdiuTycQ8NptNmU6nqSFFVxJIX3swP3qVSkUKhcLv6HHBAzIYDAwxRIIxGGZlHAFENQjKGd+PRu9dY388elGcSPDsQz8In2tkVnvv+sHLXRwnmYA/Kfwg1QwREm0AAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="alt text"\n        title="rest api image"\n        src="/static/data-fetch-rest-cfb4db44aa0551eef80689d9a40f5b7c-09ff3.png"\n        srcset="/static/data-fetch-rest-cfb4db44aa0551eef80689d9a40f5b7c-2279c.png 178w,\n/static/data-fetch-rest-cfb4db44aa0551eef80689d9a40f5b7c-dbe09.png 355w,\n/static/data-fetch-rest-cfb4db44aa0551eef80689d9a40f5b7c-09ff3.png 710w,\n/static/data-fetch-rest-cfb4db44aa0551eef80689d9a40f5b7c-bb03f.png 900w"\n        sizes="(max-width: 710px) 100vw, 710px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>The picture shows the Rest api retrieves every information of client\'s request with multiple endpoints. When client throws GET method with resources, the server returns followed datas.</p>\n<blockquote>\n<p><strong>GraphQL</strong></p>\n</blockquote>\n<p><img src="https://raw.githubusercontent.com/hogyun3709/blog/gh-pages/images/data-fetch-graphql.png" alt="alt text" title="graphql image"></p>\n<p>Since graph"QL" is Query Language, client throws specific query to server, clients receive matched datas from server. With this predefined query structure, graphql prevents over and underfetching.</p>',timeToRead:1,excerpt:"A new API standard: Why facebook created graphql? Note: Basic understanding on RESTful API is required This post summaries  following link…",frontmatter:{title:"Rest API vs GraphQL",cover:"https://unsplash.it/1280/500/?random?BoldMage",date:"02/17/2018",category:"tech",tags:["API"],author:"hogyun"},fields:{slug:"/rest-api-vs-graph-ql"}},prev:{excerpt:"A new API standard: Why facebook created graphql? Note: Basic understanding on RESTful API is required This post…",frontmatter:{title:"Rest API vs GraphQL",cover:"https://unsplash.it/1280/500/?random?BoldMage",date:"02/17/2018"},fields:{slug:"/rest-api-vs-graph-ql"}},next:{excerpt:"A new API standard: Why facebook created graphql? Note: Basic understanding on RESTful API is required This post…",frontmatter:{title:"Rest API vs GraphQL",cover:"https://unsplash.it/1280/500/?random?BoldMage",date:"02/17/2018"},fields:{slug:"/rest-api-vs-graph-ql"}},authors:{edges:[{node:{id:"casper",name:"Casper User",image:"https://api.adorable.io/avatars/150/test.png",url:"http://gatsbyjs.org/",bio:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people."}},{node:{id:"guinevere",name:"Guinevere Kuiper",image:"https://randomuser.me/api/portraits/women/17.jpg",url:"https://randomuser.me/api/?seed=user1",bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet lorem nec ligula aliquet, porta blandit augue luctus. Vivamus ac quam diam. Sed vestibulum pharetra hendrerit."}},{node:{id:"hogyun",name:"Hogyun Kim",image:"https://s.gravatar.com/avatar/3b425c96698c804a7ff5473e3d450c02?s=80",url:"http://github.com/hogyun3709/",bio:"believe technology can change the world. "}}]}},pathContext:{slug:"/rest-api-vs-graph-ql",total:1}}}});
//# sourceMappingURL=path---rest-api-vs-graph-ql-9580c2c23d3c569609d2.js.map