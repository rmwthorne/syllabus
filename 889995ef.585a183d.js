(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(6),o=(a(0),a(232)),i={id:"lesson",title:"MongoDB - 3",sidebar_label:"Lesson"},l={unversionedId:"mongodb/week-3/lesson",id:"mongodb/week-3/lesson",isDocsHomePage:!1,title:"MongoDB - 3",description:"Outline:",source:"@site/docs/mongodb/week-3/lesson.md",slug:"/mongodb/week-3/lesson",permalink:"/mongodb/week-3/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/mongodb/week-3/lesson.md",version:"current",sidebar_label:"Lesson",sidebar:"MongoDB",previous:{title:"Instructor Notes",permalink:"/mongodb/week-2/instructors"},next:{title:"Homework",permalink:"/mongodb/week-3/homework"}},c=[{value:"Review",id:"review",children:[{value:"Use the sample database in MongoDB Atlas",id:"use-the-sample-database-in-mongodb-atlas",children:[]},{value:"Insert a document with accent",id:"insert-a-document-with-accent",children:[]}]},{value:"Indexing",id:"indexing",children:[{value:"Create an index",id:"create-an-index",children:[]},{value:"Create a collated index",id:"create-a-collated-index",children:[]},{value:"Implementing full text search using MongoDB",id:"implementing-full-text-search-using-mongodb",children:[]}]},{value:"Role based authentication",id:"role-based-authentication",children:[{value:"Cluster based roles",id:"cluster-based-roles",children:[]},{value:"Backup and restoration roles",id:"backup-and-restoration-roles",children:[]},{value:"Aggregation",id:"aggregation",children:[]}]},{value:"Replication",id:"replication",children:[]},{value:"Transactions",id:"transactions",children:[{value:"ACID",id:"acid",children:[]}]},{value:"MongoDB Project",id:"mongodb-project",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],s={rightToc:c};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Outline:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Lesson 2 review"),Object(o.b)("li",{parentName:"ul"},"Indexing",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"indexing a collection"),Object(o.b)("li",{parentName:"ul"},"indexing a collection using a collated index"),Object(o.b)("li",{parentName:"ul"},"implementing full text search in MongoDB"))),Object(o.b)("li",{parentName:"ul"},"Role based authentication",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"cluster based roles"),Object(o.b)("li",{parentName:"ul"},"backup and restoration roles"))),Object(o.b)("li",{parentName:"ul"},"Aggregation"),Object(o.b)("li",{parentName:"ul"},"Replication"),Object(o.b)("li",{parentName:"ul"},"Transactions"),Object(o.b)("li",{parentName:"ul"},"A project in MongoDB"),Object(o.b)("li",{parentName:"ul"},"Next steps")),Object(o.b)("h2",{id:"review"},"Review"),Object(o.b)("p",null,"In the last lesson, we learned"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Signing up for MongoDB Atlas"),Object(o.b)("li",{parentName:"ul"},"Making a local Express server"),Object(o.b)("li",{parentName:"ul"},"Connecting to a MongoDB server from a local Node server"),Object(o.b)("li",{parentName:"ul"},"Creating and dropping databases and collections in Atlas"),Object(o.b)("li",{parentName:"ul"},"Reading documentation"),Object(o.b)("li",{parentName:"ul"},"BSON types"),Object(o.b)("li",{parentName:"ul"},"Creating documents"),Object(o.b)("li",{parentName:"ul"},"Creating a document in Atlas"),Object(o.b)("li",{parentName:"ul"},"Creating a document with the MongoDB Node Driver"),Object(o.b)("li",{parentName:"ul"},"Updating a document"),Object(o.b)("li",{parentName:"ul"},"Deleting a document")),Object(o.b)("p",null,"Now that we know how to read databases, collections, and documents, we are ready to move on to more advanced tasks."),Object(o.b)("h3",{id:"use-the-sample-database-in-mongodb-atlas"},"Use the sample database in MongoDB Atlas"),Object(o.b)("p",null,"We are going to use the sample cluster that we have already connected to in MongoDB Atlas."),Object(o.b)("p",null,"Let's use the Atlas GUI to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"create a new database"),Object(o.b)("li",{parentName:"ol"},"create a new collection"),Object(o.b)("li",{parentName:"ol"},"import sample data (we are interested in the AirBnB listings and reviews sample database)")),Object(o.b)("p",null,"We now have a pretty extensive dataset that we will use for the rest of the class."),Object(o.b)("h3",{id:"insert-a-document-with-accent"},"Insert a document with accent"),Object(o.b)("p",null,"The first task here is to insert a document in sample_airbnb.listingsAndReviews with the following fields found ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"./fields.js"}),"here"),"."),Object(o.b)("p",null,"You can use the code that we developed in lesson 2, or the GUI Hint: you can use clone in GUI"),Object(o.b)("p",null,"This document is useful for the next tasks."),Object(o.b)("h2",{id:"indexing"},"Indexing"),Object(o.b)("p",null,"Let's start by visiting the official documentation:\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/indexes/"}),"https://docs.mongodb.com/manual/indexes/")),Object(o.b)("p",null,"The most interesting index properties are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Default id index")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Let's take a look in the indexes that we have in Atlas GUI sample database.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Index Types")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Index Properties")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Collation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Covered queries"))),Object(o.b)("h3",{id:"create-an-index"},"Create an index"),Object(o.b)("p",null,"Let's create a new index using the Atlas GUI."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Index prefixing and how it affects querying")),Object(o.b)("h3",{id:"create-a-collated-index"},"Create a collated index"),Object(o.b)("p",null,'From the documentation: "Collation allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks."'),Object(o.b)("p",null,"In our case, we have inserted a document with french accents, so we want to create an index that will take it into account."),Object(o.b)("p",null,"To create a collated index supporting the French language in the shell we would:\xa0",Object(o.b)("inlineCode",{parentName:"p"},'db.listingsAndReviews.createIndex( { name: 1 }, { collation: { locale: "fr" } } )')),Object(o.b)("p",null,"Now, let's do the same using the Atlas GUI."),Object(o.b)("h3",{id:"implementing-full-text-search-using-mongodb"},"Implementing full text search using MongoDB"),Object(o.b)("p",null,"One of the special types of indexes is the text index."),Object(o.b)("p",null,"To create a text index in the shell:\xa0",Object(o.b)("inlineCode",{parentName:"p"},'db.listingsAndReviews.createIndex( { name: "text", summary: "text" } )')),Object(o.b)("p",null,"Now, let's do the same using the Atlas GUI."),Object(o.b)("h4",{id:"exercise-1"},"Exercise 1"),Object(o.b)("p",null,"Search for the document using the index."),Object(o.b)("p",null,"How can we be sure that we use the index? Can we create a covered query?"),Object(o.b)("p",null,"Hint:\xa0",Object(o.b)("inlineCode",{parentName:"p"},"db.collection.find().explain()")),Object(o.b)("h2",{id:"role-based-authentication"},"Role based authentication"),Object(o.b)("p",null,"Built in roles: ",Object(o.b)("em",{parentName:"p"}," read ")," readWrite ",Object(o.b)("em",{parentName:"p"}," dbAdmin ")," dbOwner ","*"," userAdmin"),Object(o.b)("h3",{id:"cluster-based-roles"},"Cluster based roles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"clusterAdmin"),Object(o.b)("li",{parentName:"ul"},"clusterManager"),Object(o.b)("li",{parentName:"ul"},"clusterMonitor")),Object(o.b)("h3",{id:"backup-and-restoration-roles"},"Backup and restoration roles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"backup"),Object(o.b)("li",{parentName:"ul"},"restore")),Object(o.b)("p",null,"... many more"),Object(o.b)("p",null,"Let's update our MongoDB Atlas database to use roles."),Object(o.b)("p",null,"First, we are going to add a built in role using the MongoDB Atlas."),Object(o.b)("p",null,"Now, let's add a custom, read only in AirBnB DB role using the MongoDB Atlas."),Object(o.b)("h3",{id:"aggregation"},"Aggregation"),Object(o.b)("p",null,"Why aggregation framework?"),Object(o.b)("p",null,"Aggregation framework in MongoDB is modelled after the familiar concept of data processing pipelines. Documents enter the pipeline with the MongoDB structure and exit the other end transformed into BSON documents with calculated fields. Commands in a pipeline are executed sequentially and in the order that they appear in the array []."),Object(o.b)("p",null,"There are 3 ways to perform aggregation in MongoDB: 1. Aggregation pipeline 2. Map-reduce function 3. Single purpose aggregation methods"),Object(o.b)("p",null,"In this module, we will focus on the aggregation pipeline."),Object(o.b)("p",null,"Some of the most important operators and how they relate with Structured Query Language (SQL):"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"SQL"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Aggregation framework"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"WHERE / HAVING"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$match")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GROUP BY"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$group")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SELECT"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$project")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ORDER BY"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$sort")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"LIMIT"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$limit")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sum() / count()"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$sum")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"average()"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$avg")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"join"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\\$lookup")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'db.listingsAndReviews.aggregate([\n  { $match: { name: { $regex: /^aA/ } } },\n  { $group: { _id: "$name", average: { $avg: "$price" } } },\n  { $sort: { average: -1 } },\n  { $project: { name: 1, average: 1 } },\n]);\n')),Object(o.b)("p",null,"What does the pipeline above do?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"matches all documents with a name starting from aA"),Object(o.b)("li",{parentName:"ol"},"groups them by average price"),Object(o.b)("li",{parentName:"ol"},"sorts them by average price"),Object(o.b)("li",{parentName:"ol"},"projects(selects) name and average price in the output")),Object(o.b)("p",null,"What's the output like?"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{_id: .., name: .., average: ..}\n\n")),Object(o.b)("p",null,"More information:\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/aggregation/"}),"https://docs.mongodb.com/manual/aggregation/")),Object(o.b)("h4",{id:"exercise-2"},"Exercise 2"),Object(o.b)("p",null,"Now, let's do the same using the Atlas GUI."),Object(o.b)("h2",{id:"replication"},"Replication"),Object(o.b)("p",null,"Replication in MongoDB is used to increase redundancy and data availability. In its essence it's a way for 3 or more (or even 2 with some caveats..) servers to keep the same copy of data."),Object(o.b)("p",null,Object(o.b)("img",{alt:"replication diagram",src:a(327).default})),Object(o.b)("p",null,"Writes always go to the primary and get propagated\xa0",Object(o.b)("em",{parentName:"p"},"asynchronously"),"\xa0to the secondaries."),Object(o.b)("p",null,"Reads can go to the primary or any of the secondaries."),Object(o.b)("p",null,"Election process:"),Object(o.b)("p",null,'Replica sets implement by default automatic failover. If a primary server fails, the remaining secondaries will elect the new primary. This will by default be the secondary that is most "up to date" with the primary but we can affect (rig) the election process by assigning different votes to each server.'),Object(o.b)("p",null,"More information:\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.mongodb.com/manual/core/replica-set-elections/"}),"https://docs.mongodb.com/manual/core/replica-set-elections/")),Object(o.b)("p",null,"Using replication we can perform a few interesting tasks:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"delayed replica for backup. Delay backups by an hour, enabling us to recover from dropping a database in production"),Object(o.b)("li",{parentName:"ul"},"hidden replicas for reporting. These replicas will never become primaries so we can safely apply read load to them for reporting purposes"),Object(o.b)("li",{parentName:"ul"},"replicas in different location for disaster recovery"),Object(o.b)("li",{parentName:"ul"},"replicas in different location to be closer to our users")),Object(o.b)("h2",{id:"transactions"},"Transactions"),Object(o.b)("p",null,"MongoDB introduced multi-document ACID transactions in version 4.0 which was released on July 2018. Transactions are an integral part of relational databases. Every RDBMS from the very early days relied on transactions to achieve Atomicity, Consistency, Isolation and Durability. Getting these in a non-relational database is a breakthrough that can fundamentally change the way developers and database architects design software systems."),Object(o.b)("h3",{id:"acid"},"ACID"),Object(o.b)("p",null,"Atomicity refers to the concept that a transactions needs to be atomic. It either successes and its results are visible to every subsequent user reading them or it fails and every change is rolled back to the point it was right before it started. It's either that all actions in a transaction occur or nothing at all."),Object(o.b)("p",null,"Consistency refers to the database always being in a consistent state. Every database operation may complete successfully, fail or abort but in any case in the end our database must be in a state that its data is consistent."),Object(o.b)("p",null,"Isolation refers to the visibility of transaction operations to other operations happening in parallel."),Object(o.b)("p",null,"Durability in relational database systems refers to the property that every transaction that has successfully committed will survive in the face of failure. This usually refers to writing the contents of the committed transaction in persistent storage (hard disk or SDD)."),Object(o.b)("p",null,"Let's create a new database\xa0",Object(o.b)("inlineCode",{parentName:"p"},"mongo_bank"),"\xa0with a collection\xa0",Object(o.b)("inlineCode",{parentName:"p"},"accounts"),":"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'{"collection": "accounts", "account_id": "1", "account_name": "Alex", "account_balance":100}')),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'{"collection": "accounts", "account_id": "2", "account_name": "Mary", "account_balance":50}')),Object(o.b)("p",null,"This way, we have 2 users with accounts in our bank."),Object(o.b)("p",null,"We can now transfer money between th accounts. We will do this using the Mongo shell:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'session = db.getMongo().startSession({ readPreference: { mode: "primary" } });\n\naccountsCollection = session.getDatabase("mongo_bank").accounts;\n\nsession.startTransaction({\n  readConcern: { level: "snapshot" },\n  writeConcern: { w: "majority" },\n});\n\ntry {\n  accountsCollection.update(\n    { account_id: "1" },\n    { $inc: { account_balance: -70 } }\n  );\n  accountsCollection.update(\n    { account_id: "2" },\n    { $inc: { account_balance: 70 } }\n  );\n} catch (error) {\n  print("error:", error);\n}\nsource_balance = accountsCollection.findOne({ account_id: "1" })\n  .account_balance;\ntarget_balance = accountsCollection.findOne({ account_id: "2" })\n  .account_balance;\nif (source_balance < 0 || target_balance < 0) {\n  session.abortTransaction();\n}\nsession.commitTransaction();\nsession.endSession();\n')),Object(o.b)("p",null,"To which the output should be similar to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'WriteCommandError({\n  errorLabels: ["TransientTransactionError"],\n  operationTime: Timestamp(1561207870, 4),\n  ok: 0,\n  errmsg: "Transaction 0 has been aborted.",\n  code: 251,\n  codeName: "NoSuchTransaction",\n  $clusterTime: {\n    clusterTime: Timestamp(1561207870, 4),\n    signature: {\n      hash: BinData(0, "1x7oLuNzWehAWylVA/E9tdXLuFA="),\n      keyId: NumberLong("6655324027294318593"),\n    },\n  },\n});\n')),Object(o.b)("p",null,"Database operations need to be inside our session if we want to benefit from transactions"),Object(o.b)("h4",{id:"exercise-3"},"Exercise 3"),Object(o.b)("p",null,"Transfer 40 monads from account 1 to account 2. Observe how it works perfectly fine."),Object(o.b)("h2",{id:"mongodb-project"},"MongoDB Project"),Object(o.b)("p",null,"Based on the data from the AirBnB listings and reviews collection, we want to create a front end for it."),Object(o.b)("p",null,"Functions:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Search for rooms by name or summary"),Object(o.b)("li",{parentName:"ol"},"Filter by price"),Object(o.b)("li",{parentName:"ol"},"Show the top superhosts in the page. On click through, show a list of their apartments")),Object(o.b)("p",null,"You can use Node/Express and the Aggregation framework if you see fit."),Object(o.b)("p",null,"Please use this index.html file as a starting point:\xa0",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/agiamas/cyf-mongodb-2019/blob/master/index.html"}),"https://github.com/agiamas/cyf-mongodb-2019/blob/master/index.html")),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"If you have time and interest, please register to either of these classes or any other class in MongoDB university. All classes are free and on average require 6-10 hours of time per week."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://university.mongodb.com/courses/M220JS/about"}),"https://university.mongodb.com/courses/M220JS/about")),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://university.mongodb.com/courses/M220P/about"}),"https://university.mongodb.com/courses/M220P/about")))}b.isMDXComponent=!0},232:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(a),d=n,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},327:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/operations-d82dfd665e62416e2af93b07a72fe7b7.png"}}]);