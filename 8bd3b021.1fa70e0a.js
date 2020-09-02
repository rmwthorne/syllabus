(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(2),a=n(6),r=(n(0),n(232)),i={id:"lesson",title:"React Router",sidebar_label:"Lesson"},c={unversionedId:"react/react-router/lesson",id:"react/react-router/lesson",isDocsHomePage:!1,title:"React Router",description:"Introduction to React-Router",source:"@site/docs/react/react-router/lesson.md",slug:"/react/react-router/lesson",permalink:"/react/react-router/lesson",editUrl:"https://github.com/CodeYourFuture/Syllabus-V2/edit/master/docs/react/react-router/lesson.md",version:"current",sidebar_label:"Lesson",sidebar:"React",previous:{title:"Instructor Notes",permalink:"/react/week-3/instructors"},next:{title:"Class Components",permalink:"/react/class-components/lesson"}},p=[{value:"Introduction to React-Router",id:"introduction-to-react-router",children:[]},{value:"URL parameters",id:"url-parameters",children:[]},{value:"Further Reading",id:"further-reading",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction-to-react-router"},"Introduction to React-Router"),Object(r.b)("p",null,"In the past few weeks, you've learned how to build applications with React and the different applications and examples were all built on a single page. However, what if you wanted to have different pages with each page having its own URL (so you can bookmark it for example)? You will need to introduce a router in your application. In JavaScript, a router is the piece of code which is in charge of switching between views of your application and keep each view in sync with a specific URL. For example, you could imagine having a homepage reachable from the root path ",Object(r.b)("inlineCode",{parentName:"p"},"/")," and a users page with the path ",Object(r.b)("inlineCode",{parentName:"p"},"/users"),". In React, a popular library to help you achieve this is React-Router."),Object(r.b)("p",null,"Let's look at a first example (",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/react-router-1-lk44e"}),"interactive example"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const Index = () => {\n  return <h2>Home</h2>;\n};\n\nconst About = () => {\n  return <h2>About</h2>;\n};\n\nconst Users = ({ names }) => {\n  return (\n    <div>\n      <h2>Users</h2>\n      <ul>\n        {names.map((name) => (\n          <li>{name}</li>\n        ))}\n      </ul>\n    </div>\n  );\n};\n\nconst AppRouter = () => {\n  return (\n    <BrowserRouter>\n      <div>\n        <nav>\n          <ul>\n            <li>\n              <Link to="/">Home</Link>\n            </li>\n            <li>\n              <Link to="/about/">About</Link>\n            </li>\n            <li>\n              <Link to="/users/">Users</Link>\n            </li>\n          </ul>\n        </nav>\n\n        <Route path="/" exact component={Index} />\n        <Route path="/about/" component={About} />\n        <Route\n          path="/users/"\n          render={() => <Users names={["Raresh", "Nate"]} />}\n        />\n      </div>\n    </BrowserRouter>\n  );\n};\n')),Object(r.b)("p",null,"React-Router provides some default React components that you can use to enable routing in your application. First, notice the top level ",Object(r.b)("inlineCode",{parentName:"p"},"<BrowserRouter>")," component which wraps everything else. Each route is defined with the ",Object(r.b)("inlineCode",{parentName:"p"},"<Route>")," component which maps a path (defined with the ",Object(r.b)("inlineCode",{parentName:"p"},"path")," props) with a React component. In the simplest case, you can specify the React component to map to the path with the ",Object(r.b)("inlineCode",{parentName:"p"},"component")," props. However, it is assuming you don't need to pass any props to it. If you face a more complex scenarios or if you need to pass props to your React component, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"render")," props which takes a function and return exactly what you want to render on this path. Then, the ",Object(r.b)("inlineCode",{parentName:"p"},"Link")," component can be used to create links to navigate to different routes."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise A"),"\nOpen the ",Object(r.b)("inlineCode",{parentName:"p"},"pokedex")," React application. In this exercise, React-Router will be introduced. Instead of displaying all your components in the same page, we will use React-Router to define different pages in the ",Object(r.b)("inlineCode",{parentName:"p"},"pokedex")," application."),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"In the terminal, install React-Router with ",Object(r.b)("inlineCode",{parentName:"li"},"npm install --save react-router-dom"),"."),Object(r.b)("li",{parentName:"ol"},"Open ",Object(r.b)("inlineCode",{parentName:"li"},"src/App.js")," and import BrowserRouter, Route and Link components from React-Router (hint: ",Object(r.b)("inlineCode",{parentName:"li"},'import { BrowserRouter, Route, Link } from "react-router-dom";'),")"),Object(r.b)("li",{parentName:"ol"},"Wrap all the components in the ",Object(r.b)("inlineCode",{parentName:"li"},"render")," method in the ",Object(r.b)("inlineCode",{parentName:"li"},"<BrowserRouter>")," component."),Object(r.b)("li",{parentName:"ol"},"In the following, we will have ",Object(r.b)("inlineCode",{parentName:"li"},"CaughtPokemon")," and ",Object(r.b)("inlineCode",{parentName:"li"},"BestPokemon")," displayed with different route. But first, let's create some links to navigate to different pages. Still in the ",Object(r.b)("inlineCode",{parentName:"li"},"render")," method of ",Object(r.b)("inlineCode",{parentName:"li"},"src/App.js"),", use the ",Object(r.b)("inlineCode",{parentName:"li"},"Link")," component to create 2 links: one to navigate to the URL ",Object(r.b)("inlineCode",{parentName:"li"},"/best-pokemon")," and another one to navigate to ",Object(r.b)("inlineCode",{parentName:"li"},"/caught-pokemon")," (hint: ",Object(r.b)("inlineCode",{parentName:"li"},'<Link to="/best-pokemon">Best Pokemon</Link>'),")."),Object(r.b)("li",{parentName:"ol"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"pokedex")," in your browser and verify that you can see 2 links on the page. When clicking on each of these links, the URL in your browser address bar should change (but nothing will change on the screen yet!)."),Object(r.b)("li",{parentName:"ol"},"Now let's define the routes to map a path to a React component. First, create a route to map ",Object(r.b)("inlineCode",{parentName:"li"},"/best-pokemon")," to the ",Object(r.b)("inlineCode",{parentName:"li"},"BestPokemon")," component. Then, use another route to map ",Object(r.b)("inlineCode",{parentName:"li"},"/caught-pokemon")," to the ",Object(r.b)("inlineCode",{parentName:"li"},"CaughtPokemon")," component (Hint: depending on if you pass some props to ",Object(r.b)("inlineCode",{parentName:"li"},"BestPokemon")," or ",Object(r.b)("inlineCode",{parentName:"li"},"CaughtPokemon")," you will need to use either the ",Object(r.b)("inlineCode",{parentName:"li"},"component")," or the ",Object(r.b)("inlineCode",{parentName:"li"},"render")," props in the ",Object(r.b)("inlineCode",{parentName:"li"},"<Route>")," component)."),Object(r.b)("li",{parentName:"ol"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"pokedex")," in your browser and verify that when clicking on each link, ",Object(r.b)("inlineCode",{parentName:"li"},"BestPokemon")," and ",Object(r.b)("inlineCode",{parentName:"li"},"CaughtPokemon")," are rendered accordingly."))),Object(r.b)("h2",{id:"url-parameters"},"URL parameters"),Object(r.b)("p",null,"Sometimes, parameters can be passed from the URL to a React component directly via its props. In this case, different URLs can be mapped to one single React component. For example, in an online shopping application, a React component ",Object(r.b)("inlineCode",{parentName:"p"},"Product")," may be responsible to display a specific product on the page. By using URL parameters, the name or ID of the requested product can be specific in the URL and React-Router will pass it a props of the ",Object(r.b)("inlineCode",{parentName:"p"},"Product")," component (",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/compassionate-https-jsf59"}),"interactive example"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'const Product = ({ match }) => {\n  return <h2>Product: {match.params.name}</h2>;\n};\n\nconst AppRouter = () => {\n  return (\n    <BrowserRouter>\n      <div>\n        <nav>\n          <h2>Product List</h2>\n          <ul>\n            <li>\n              <Link to="/products/laptop">Laptop</Link>\n            </li>\n            <li>\n              <Link to="/products/tv">TV</Link>\n            </li>\n            <li>\n              <Link to="/products/teddy-bear">Teddy Bear</Link>\n            </li>\n          </ul>\n        </nav>\n\n        <Route path="/products/:name" component={Product} />\n      </div>\n    </BrowserRouter>\n  );\n};\n')),Object(r.b)("p",null,"In the route definition above, a specific syntax is used to define the URL parameter: ",Object(r.b)("inlineCode",{parentName:"p"},":name"),". Then in the ",Object(r.b)("inlineCode",{parentName:"p"},"Product")," component, the value of ",Object(r.b)("inlineCode",{parentName:"p"},"name")," can be accessed through the component props ",Object(r.b)("inlineCode",{parentName:"p"},"match.params.name"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Exercise B"),"\nIn the following, we will create a new component to display a Pokemon information. The Pokemon name will be passed through the URL and displayed on the screen."),Object(r.b)("ol",{parentName:"blockquote"},Object(r.b)("li",{parentName:"ol"},"Create a new component ",Object(r.b)("inlineCode",{parentName:"li"},"PokemonInfo"),"."),Object(r.b)("li",{parentName:"ol"},"In ",Object(r.b)("inlineCode",{parentName:"li"},"src/App.js"),", create a new route which maps the path ",Object(r.b)("inlineCode",{parentName:"li"},"/pokemon/:name")," to the previously created component ",Object(r.b)("inlineCode",{parentName:"li"},"PokemonInfo")," (hint: ",Object(r.b)("inlineCode",{parentName:"li"},'<Route path="/pokemon/:name" component={PokemonInfo} />'),")."),Object(r.b)("li",{parentName:"ol"},"In the ",Object(r.b)("inlineCode",{parentName:"li"},"render")," method of ",Object(r.b)("inlineCode",{parentName:"li"},"PokemonInfo")," component, display the name of the Pokemon which is passed in the URL parameter (hint: use the props ",Object(r.b)("inlineCode",{parentName:"li"},"match.params.name"),")."),Object(r.b)("li",{parentName:"ol"},"Open the ",Object(r.b)("inlineCode",{parentName:"li"},"pokedex")," in your browser and try several URLs (such as ",Object(r.b)("inlineCode",{parentName:"li"},"http://localhost:3000/pokemon/Pikachu")," and see if the Pokemon name is displayed accordingly on your screen."),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"(STRETCH GOAL)")," Instead of passing the name of the Pokemon in the URL parameter, now pass an ID. The ID passed correspond to the ID of the Pokemon in the Poke API. For example, the ID 1 corresponds to the Pokemon Bulbasaur (",Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"https://pokeapi.co/api/v2/pokemon-species/1/"}),"https://pokeapi.co/api/v2/pokemon-species/1/"),"). In the ",Object(r.b)("inlineCode",{parentName:"li"},"PokemonInfo")," component, use the Pokemon ID from the URL to load the corresponding Pokemon data from the Poke API and display the following Pokemon information on the screen: name, color.name, shape.name, base_happiness and capture_rate."))),Object(r.b)("h2",{id:"further-reading"},"Further Reading"),Object(r.b)("p",null,"A lot of examples are available on the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reacttraining.com/react-router/web/guides/quick-start"}),"official React-Router website"),"."))}s.isMDXComponent=!0},232:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||r;return n?a.a.createElement(d,c(c({ref:t},l),{},{components:n})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);