(this.webpackJsonpportfolio3=this.webpackJsonpportfolio3||[]).push([[0],{56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a.n(s),c=a(22),n=a.n(c),o=(a(56),a(12)),r=a(3),l=a(2),h=(a(57),a(0));function d(e){return Object(h.jsx)("div",{className:"cursor-aura",style:{left:e.x-100,top:e.y-100,opacity:e.opacity}})}a(59);function j(e){return Object(h.jsxs)("div",{className:"bannerheader-container",children:[Object(h.jsx)("h1",{children:e.main}),e.sub?Object(h.jsx)("h2",{children:e.sub}):Object(h.jsx)(h.Fragment,{})]})}a(60);function u(e){var t=Object(s.useState)(null),a=Object(l.a)(t,2),i=a[0],c=a[1],n=Object(s.useState)(null),o=Object(l.a)(n,2),r=o[0],u=o[1],p=Object(s.useState)(0),m=Object(l.a)(p,2),g=m[0],b=m[1],f=Object(s.useState)([]),x=Object(l.a)(f,2),O=x[0],v=x[1],w=Object(s.useState)(0),y=Object(l.a)(w,2),k=y[0],S=y[1];return Object(s.useEffect)((function(){S(window.innerWidth)}),[]),Object(s.useEffect)((function(){!function(e){for(var t=[],a=0;a<300;a+=50)for(var s=0;s<e;s+=50)t.push([s,a]);v(t)}(k)}),[k]),window.addEventListener("resize",(function(){S(window.innerWidth!==k?window.innerWidth:k)})),Object(h.jsxs)("div",{className:"banner-container",onMouseMove:function(e){c(e.clientX),u(e.clientY),b(1)},onMouseLeave:function(){b(0)},children:[Object(h.jsx)(d,{x:i,y:r,opacity:g}),Object(h.jsx)("div",{className:"banner-highlight"}),O.map((function(e,t){return Object(h.jsx)("div",{className:"banner-tile",style:{top:e[1],left:e[0]}},t)})),Object(h.jsx)(j,{main:e.main,sub:e.sub})]})}a(61);function p(e){return Object(h.jsx)("div",{className:"content-container",children:e.children})}a(62);function m(e){return Object(h.jsx)("div",{id:"profileimage-wrapper",children:Object(h.jsx)("div",{id:"profileimage-container",children:Object(h.jsx)("img",{src:"headshot.png",alt:"John Teckemeyer smiling into camera"})})})}a(63);function g(e){return Object(h.jsx)("div",{className:"paragraph-container",children:e.children})}a(64);function b(e){var t=Object(r.f)();return Object(h.jsx)("div",{className:"projectlink-container",children:Object(h.jsxs)("button",{className:"projectimage-container",onClick:function(){t.push(e.project.link)},children:[Object(h.jsx)("img",{src:e.project.image,alt:e.project.alt}),Object(h.jsx)("div",{className:"project-label",children:e.project.name})]})})}a(73);function f(e){return Object(h.jsxs)("div",{className:"contact-container",children:[Object(h.jsx)("div",{className:"resume-container",children:Object(h.jsxs)("a",{href:"resume.pdf",target:"_blank",children:[Object(h.jsx)("div",{className:"material-icons resume-icon",children:"description"}),Object(h.jsx)("div",{className:"resume-text",children:"Resume"})]})}),Object(h.jsxs)("div",{className:"contact-info-container",children:[Object(h.jsxs)("p",{children:["Email: ",Object(h.jsx)("a",{href:"mailto:johnteckemeyer@gmail.com",children:"johnteckemeyer@gmail.com"})]}),Object(h.jsxs)("p",{children:["GitHub: ",Object(h.jsx)("a",{href:"https://github.com/TheTeck",rel:"noreferrer",target:"_blank",children:"github.com/TheTeck"})]}),Object(h.jsxs)("p",{children:["LinkedIn: ",Object(h.jsx)("a",{href:"https://www.linkedin.com/in/john-teckemeyer/",rel:"noreferrer",target:"_blank",children:"linkedin.com/in/john-teckemeyer"})]})]})]})}var x=a(6),O=(a(75),{language:"rgb(178, 31, 68)",style:"rgb(36, 133, 104)",framework:"rgb(255, 145, 0)",database:"rgb(13, 103, 221)",library:"rgb(182, 189, 55)",other:"rgb(116, 67, 150)"});function v(e){var t=e.tech,a=Object(s.useRef)(),i=Object(s.useState)(t),c=Object(l.a)(i,1)[0];return Object(s.useEffect)((function(){var e=x.f(a.current).attr("width",1200).attr("height",700);e.selectAll("g").remove();var t=x.e(c.nodes).force("charge",x.d().strength(300)).force("center",x.b(600,350)).force("collide",x.c((function(e){return 7*e.level+40})).strength(.7)).on("tick",(function(){i.attr("transform",(function(e){return"translate("+e.x+", "+e.y+")"}))})),s=x.a().on("start",(function(e,a){t.alphaTarget(.3).restart(),a.fx=e.x,a.fy=e.y})).on("drag",(function(e,t){t.fx=e.x,t.fy=e.y})).on("end",(function(a,s){return t.alphaTarget(.1),s.fx=null,s.fy=null,function(){return e.remove()}})),i=e.selectAll("g").data(c.nodes).enter().append("g").call(s);i.append("circle").attr("r",(function(e){return 7*e.level+40})).attr("fill",(function(e){return O[e.category]})),i.on("mouseover",(function(e){this.parentNode.appendChild(this),x.f(this).select("circle").attr("transform","scale(1.3)").attr("opacity",.6).attr("stroke","white").attr("stroke-width",2),x.f(this).select("text").classed("selected-bubble",!0),x.f(this).select(".skill-bubble-level").style("opacity",1)})).on("mouseout",(function(e){x.f(this).select("circle").attr("transform","scale(1)").attr("opacity",1).attr("stroke-width",0),x.f(this).select("text").classed("selected-bubble",!1),x.f(this).select(".skill-bubble-level").style("opacity",0)})),i.append("text").attr("text-anchor","middle").attr("alignment-baseline","central").text((function(e){return e.name})),i.append("text").attr("class","skill-bubble-level").attr("text-anchor","middle").attr("alignment-baseline","central").style("opacity",0).text((function(e){for(var t="",a=0;a<e.level;a++)t+="*";return t}))})),Object(h.jsx)("div",{id:"tech-container",children:Object(h.jsx)("svg",{ref:a})})}a(76);function w(e){var t={spacex:{name:"SpaceX Launches",image:"launches.png",link:"/spacex",alt:"Visualized data resouce for all of the SpaceX launches through 2020"},fireside:{name:"Fireside",image:"fullscreenhome.png",link:"/fireside",alt:"Making Intergenerational Connections"},zipWeather:{name:"Zip Weather",image:"zipweather.png",link:"/weather",alt:"Weather data for today"},justpuzzles:{name:"Just Puzzles",image:"polygonpuzzle.png",link:"/puzzle",alt:"Polygonal puzzle scattered in pieces"},sheetmusic:{name:"Sheet Music Maker",image:"sheetmusic.png",link:"/music",alt:"First page of some sheet music in the editor"},ouralley:{name:"Our Alley",image:"ouralley_playdates.png",link:"/ouralley",alt:"A list of playdates, each with all the dogs going listed"},minesweeper:{name:"Minesweeper",image:"minesweeper.png",link:"/minesweeper",alt:"An example of the game, Minesweeper, with some cells exposed"}};return Object(h.jsxs)("div",{className:"homepage-container",children:[Object(h.jsx)(u,{main:"John Teckemeyer",sub:"Full Stack Web Developer"}),Object(h.jsx)(p,{children:Object(h.jsxs)("div",{className:"section-wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsxs)("div",{id:"about-me-paragraph",children:[Object(h.jsx)("div",{id:"paragraph-backing"}),Object(h.jsx)(g,{children:"I am a full-stack web developer out of the San Francisco Bay Area. Some of my greatest passions in life revolve around creating beautifully designed products that people enjoy using. Recently, I have transitioned from making physical, hand-crafted instruments to software engineering, because, in the digital space, I am only limited by my creativity and skills. I truly believe with enough effort anything can be achieved. Now, I am looking for a position within a team where I can help create applications that people will love to use and hopefully help them achieve betterment in life."})]})]})}),Object(h.jsx)("div",{className:"skills-label",children:"Technical Skills"}),Object(h.jsx)("div",{className:"skill-wrapper",children:Object(h.jsx)(v,{tech:{nodes:[{name:"Sass",category:"library",level:5},{name:"HTML",category:"style",level:5},{name:"CSS",category:"style",level:5},{name:"Javascript",category:"language",level:5},{name:"React",category:"framework",level:5},{name:"Algorithms",category:"other",level:4},{name:"RESTful APIs",category:"other",level:5},{name:"Express",category:"framework",level:4},{name:"MongoDB",category:"database",level:4},{name:"Node",category:"other",level:4},{name:"Git/GitHub",category:"other",level:4},{name:"D3",category:"library",level:4},{name:"TDD",category:"other",level:4},{name:"Data Visualization",category:"other",level:4},{name:"Typescript",category:"language",level:3},{name:"Jest",category:"library",level:3},{name:"Ruby",category:"language",level:2},{name:"Python",category:"language",level:2},{name:"Django",category:"framework",level:1},{name:"PostgreSQL",category:"database",level:1}]}})}),Object(h.jsx)(f,{}),Object(h.jsx)("h1",{children:"Projects"}),Object(h.jsx)(p,{children:Object(h.jsxs)("div",{className:"section-wrapper projects-wrapper",children:[Object(h.jsx)(b,{project:t.spacex}),Object(h.jsx)(b,{project:t.fireside}),Object(h.jsx)(b,{project:t.zipWeather}),Object(h.jsx)(b,{project:t.sheetmusic}),Object(h.jsx)(b,{project:t.ouralley}),Object(h.jsx)(b,{project:t.justpuzzles}),Object(h.jsx)(b,{project:t.minesweeper})]})})]})}a(77);function y(e){var t=Object(r.f)();return Object(h.jsx)(h.Fragment,{children:"/home"===e.link?Object(h.jsxs)("button",{className:"nav-back",onClick:function(){"/home"===e.link&&t.push(e.link)},children:[Object(h.jsx)("div",{className:"material-icons custom-icon",children:e.icon}),Object(h.jsx)("div",{className:"link-text",children:e.text})]}):Object(h.jsxs)("a",{className:"nav-link",href:e.link,rel:"noreferrer",target:"_blank",children:[Object(h.jsx)("div",{className:"material-icons custom-icon",children:e.icon}),Object(h.jsx)("div",{className:"link-text",children:e.text})]})})}a(78);function k(e){return Object(h.jsxs)("div",{className:"projectnav-container",children:[Object(h.jsx)(y,{icon:"arrow_back",text:"Back",link:"/home"}),Object(h.jsx)(y,{icon:"web_asset",text:"Site",link:e.links.site}),Object(h.jsx)(y,{icon:"code",text:"GitHub",link:e.links.github})]})}a(79);function S(e){return Object(h.jsxs)("div",{className:"sectionheader-container",children:[e.active?Object(h.jsx)("div",{className:"material-icons section-icons",children:"remove"}):Object(h.jsx)("div",{className:"material-icons section-icons",children:"add"}),Object(h.jsx)("div",{className:"sectionheader-title",children:e.title})]})}a(80);function N(e){return Object(h.jsxs)("button",{className:"section-container",onClick:function(){e.handleActivateSection(e.code)},children:[Object(h.jsx)(S,{title:e.title,active:e.active===e.code}),Object(h.jsx)("div",{className:"section-content-container",style:e.active===e.code?{height:"100%"}:{height:"0px"},children:Object(h.jsx)("div",{className:"section-content",children:e.children})})]})}a(81);function T(e){var t=e.tech;return Object(h.jsx)("div",{id:"techtext-container",children:t.map((function(e){return Object(h.jsx)("div",{children:e})}))})}a(82);function z(e){var t=Object(s.useState)("des"),a=Object(l.a)(t,2),i=a[0],c=a[1],n=Object(h.jsxs)(g,{children:[Object(h.jsx)("strong",{children:"Just Puzzles"})," is an online source for puzzles that takes an image and breaks it up into the number of pieces and piece shape specified by the user. As the admin, I can upload many images ahead of time and have them released upon the date given to each image for a hands-off daily update. The puzzle mechanics and image selections were designed to create a enjoyable, relaxing and satisfying user experience."]}),o=Object(h.jsx)(g,{children:"The focus of this application was to develop my CSS skills as well as work with more complex algorithms than normally found in front end development."});function r(e){c(i===e?null:e)}return Object(h.jsxs)("div",{className:"puzzlepage-container",children:[Object(h.jsx)(u,{main:"Just Puzzles"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(k,{links:{site:"https://just-puzzles.herokuapp.com/",github:"https://github.com/TheTeck/JustPuzzles"}}),Object(h.jsxs)(N,{active:i,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(T,{tech:["HTML","SCSS","Javascript","React","Node","Express","MongoDB","AWS S3"]})]}),Object(h.jsx)(N,{active:i,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(N,{active:i,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"puzzles_homepage.png",alt:"All available puzzles in order of release"}),Object(h.jsx)("img",{className:"site-shot",src:"puzzles_options.png",alt:"Puzzle options that determine how to generate the puzzle"}),Object(h.jsx)("img",{className:"site-shot",src:"puzzles_tile.png",alt:"Scattered puzzle pieces in square tile shape"}),Object(h.jsx)("img",{className:"site-shot",src:"polygonpuzzle.png",alt:"Scattered puzzle pieces in random polygonal shapes"})]}),Object(h.jsxs)(N,{active:i,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"movepiece.png",alt:"Code for moving a puzzle piece and all connected pieces"}),Object(h.jsx)(g,{children:"Whenever a piece is active and the mouse moves, firing an event, the movePiece function is called. In the movePiece function, the for loop goes through all of the connected pieces attached to the active piece and updates their location based upon the location of the active piece by calling the updatePieceLocation function. In the updatePieceLocation function, if first checks to see if the piece is in either the first row or column. If it is, then it does not need to include a buffer offset, otherwise it does."})]})]})]})}a(83);function A(e){var t=Object(s.useState)("des"),a=Object(l.a)(t,2),i=a[0],c=a[1],n=Object(h.jsxs)(g,{children:[Object(h.jsx)("strong",{children:"Sheet Music Maker"})," is a sheet music editing application with a community aspect to it. A user can share their works with any other user that follows them and vice versa. This project was done over the course of one week and in that time I was only able to get the editor to allow the input of just quarter notes and their deletion from the staves."]}),o=Object(h.jsx)(g,{children:"This application was my final project for my full-stack bootcamp and was made to showcase my collective skills learned up to that point. The main focus of it's development was with the front end, using React."});function r(e){c(i===e?null:e)}return Object(h.jsxs)("div",{className:"musicpage-container",children:[Object(h.jsx)(u,{main:"Sheet Music Maker"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(k,{links:{site:"https://sheetmusicmaker.herokuapp.com",github:"https://github.com/TheTeck/Sheet-Music-Maker"}}),Object(h.jsxs)(N,{active:i,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(T,{tech:["HTML","CSS","Javascript","React","Node","Express","MongoDB","AWS S3"]})]}),Object(h.jsx)(N,{active:i,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(N,{active:i,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"musiclandingpage.png",alt:"Sheet Music Maker login or signup page"}),Object(h.jsx)("img",{className:"site-shot",src:"musichomepage.png",alt:"Sheet Music Maker homepage"}),Object(h.jsx)("img",{className:"site-shot",src:"musicopusindexpage.png",alt:"All of the user's sheet music"}),Object(h.jsx)("img",{className:"site-shot",src:"musiceditopuspage.png",alt:"The edit screen to write music on staves"})]}),Object(h.jsxs)(N,{active:i,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)(g,{children:'In the sheet music editor, the "sheet music" is made of many components (as is the way of React). In the Page components, there are Staff components. And in each Staff component, there are Measure components. When a note is written by the user on the sheet music, it begins to build a string that represents the music.'}),Object(h.jsx)("img",{className:"site-shot",src:"inmeasure.png",alt:"Code showing state being added to a string and lifted"}),Object(h.jsx)(g,{children:"In handleStaffClick function (within the Measure component), when a note is entered onto a staff, its duration and pitch is represented as a string and concatenated to the string which makes up the current measure and then lifted to the parent Staff component."}),Object(h.jsx)("img",{className:"site-shot",src:"instaff.png",alt:"Code showing more state being added to a string and lifted"}),Object(h.jsx)(g,{children:"In the updateMeasure function (within the Staff component), the measure that had been updated is written over by the string value held by the 'notes' parameter and then calls updateStaff, concatenating all the strings representing the measures of the staff and lifts the data back to the parent Page component."}),Object(h.jsx)("img",{className:"site-shot",src:"inpage.png",alt:"Even more code showing more state being added to a string and lifted"}),Object(h.jsx)(g,{children:"Here in the updateStaff function (within the Page component), it works much like the updateMeasure in that it updates the active Staff and concatenates the string representing with the rest of the Staves and updates the entire Page's music with a string."})]})]})]})}a(84);function I(e){var t=Object(s.useState)("des"),a=Object(l.a)(t,2),i=a[0],c=a[1],n=Object(h.jsxs)(g,{children:[Object(h.jsx)("strong",{children:"Our Alley"})," is a social networking application that helps bring lonely dogs together by letting users search for other local dogs and propose playdates. This was a team project in which I was the scrum and api master. A major focus of mine on this project was implementing the google maps api to geolocate other nearby users."]}),o=Object(h.jsx)(g,{children:"The main focus of this application in particular was to gain experience working as part of a team. We were a team of 3 people and we each took on specific roles in addition to programming our assigned tasks."});function r(e){c(i===e?null:e)}return Object(h.jsxs)("div",{className:"ouralley-container",children:[Object(h.jsx)(u,{main:"Our Alley"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(k,{links:{site:"https://ouralley.herokuapp.com/",github:"https://github.com/farazborjian/OurAlley"}}),Object(h.jsxs)(N,{active:i,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(T,{tech:["HTML","CSS","Python","Django","PostgreSQL","Materialize"]})]}),Object(h.jsx)(N,{active:i,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(N,{active:i,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"ouralley.png",alt:"Login or signup page"}),Object(h.jsx)("img",{className:"site-shot",src:"ouralley_mypets.png",alt:"All the user's pets"}),Object(h.jsx)("img",{className:"site-shot",src:"ouralley_playdate.png",alt:"Creating a playdate to add dogs. Also shows dogs invited."}),Object(h.jsx)("img",{className:"site-shot",src:"ouralley_playdates.png",alt:"List of all the playdates with all the information displayed"})]}),Object(h.jsxs)(N,{active:i,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"getlocaldogs.png",alt:"Code using helper functions to locate the user and surrounding local dogs"}),Object(h.jsx)(g,{children:"One of the more complicated parts of this application that I was in charge of was the implementation of searching more local dogs. Here, depending on whether the user used an explicit location, the algorithm will use that location or the user's home address, using a helper function to convert the address to latitude and longitude coordinates. Then the function filters through all other users' dogs that have a location within 2 miles, again using a helper function to get the distance of each dog."}),Object(h.jsx)("img",{className:"site-shot",src:"helperfunctions.png",alt:"Code that helps with getting latitude and longitude coordinates from an address and finding the distance between two point on Earth."}),Object(h.jsx)(g,{children:"The first helper function, the haversine function, returns the distance between two points on the surface of the Earth. The second helper function, extract_lat_long_via_address, makes a call the the Google Maps api to get the latitude and longitude coordinates for a given address."})]})]})]})}a(85);function M(e){var t=Object(s.useState)("des"),a=Object(l.a)(t,2),i=a[0],c=a[1],n=Object(h.jsxs)(g,{children:[Object(h.jsx)("strong",{children:"Minesweeper"})," is a single-player game in which the objective is to clear a rectangular grid of cells by avoiding those with mines and revealing all empty cells. Any empty cell can show a number indicating the quantity of mines surrounding it. It is with these numbers that the player can use logic to deduce the locations of the mines. The game ends when either the player reveals a mine or has cleared all empty cells."]}),o=Object(h.jsx)(g,{children:"Minesweeper was my first project I developed in my full-stack bootcamp. It was done with HTML, CSS and Javascript and I simply wanted to recreate it using the React framework as a practice in total refactoring of the code."});function r(e){c(i===e?null:e)}return Object(h.jsxs)("div",{className:"minesweeperpage-container",children:[Object(h.jsx)(u,{main:"Minesweeper"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(k,{links:{site:"https://TheTeck.github.io/Minesweeper2",github:"https://github.com/TheTeck/Minesweeper2"}}),Object(h.jsxs)(N,{active:i,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(T,{tech:["Javascript","React","Sass"]})]}),Object(h.jsx)(N,{active:i,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsx)(N,{active:i,code:"img",title:"Images",handleActivateSection:r,children:Object(h.jsx)("img",{className:"site-shot",src:"minesweeper.png",alt:"The game Minesweeper in an 80's retro style"})}),Object(h.jsxs)(N,{active:i,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"creategame.png",alt:"Code showing the creation of the game board"}),Object(h.jsx)(g,{children:"Every time a new game is started, a new array is created that is filled with instances of the CellData class. The CellData class has most instance variables starting with default values, but then each instance is supplied a value created by the functions populateBombs and popoulateNumbers."}),Object(h.jsx)("img",{className:"site-shot",src:"exposecells.png",alt:"Code showing recursive functionality to expose more of the game board"}),Object(h.jsx)(g,{children:"When a user left-clicks on a cell, that cell becomes exposed. If the cell is not empty, such as a number or bomb, then the exposeMore function is done. However, if the cell is empty, the function is going to recursively call itself for each cell that surrounds it, if they are not already exposed."})]})]})]})}a(86);function C(e){var t=Object(s.useState)("des"),a=Object(l.a)(t,2),i=a[0],c=a[1],n=Object(h.jsxs)(g,{children:[Object(h.jsx)("strong",{children:"Zip Weather"})," is a site that will retrieve and display weather data for a given zipcode location. It will display the current weather, 24 hour forecasts and 7 day forecasts."]}),o=Object(h.jsx)(g,{children:"The focus of this application to was two things: First, to further practice using 3rd party apis instead of using a user defined database. Second, to reinforce and see what I could accomplish in React without being burdoned with the designing of the UI (I just copied an actual website). Third objective was to utilize my new knowledge of D3.js. With it I created a line chart to visualize the change in temperature through the next 24 hours."});function r(e){c(i===e?null:e)}return Object(h.jsxs)("div",{className:"weatherpage-container",children:[Object(h.jsx)(u,{main:"Zip Weather"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(k,{links:{site:"https://ziipweather.herokuapp.com/",github:"https://github.com/TheTeck/Weather"}}),Object(h.jsxs)(N,{active:i,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(T,{tech:["HTML","SCSS","Javascript","D3.js","React","Node","Express","Open Weather API","Geolocation DB API"]})]}),Object(h.jsx)(N,{active:i,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(N,{active:i,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"zipweather.png",alt:"Zip Weather homepage"}),Object(h.jsx)("img",{className:"site-shot",src:"todayallweather.png",alt:"All of today's weather metrics"}),Object(h.jsx)("img",{className:"site-shot",src:"temperaturechart.png",alt:"24 hour temperature line chart"}),Object(h.jsx)("img",{className:"site-shot",src:"zipweatherhourly.png",alt:"Zip Weather hourly forecast page"}),Object(h.jsx)("img",{className:"site-shot",src:"zipweatherdays.png",alt:"Zip Weather seven day forecast page"})]}),Object(h.jsxs)(N,{active:i,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"zipweatherapicall.png",alt:"Code showing conditional api calls"}),Object(h.jsx)(g,{children:"For the most part, the user would enter a zipcode which would then be passed as a parameter to the API call. However, since there needs to be some kind of data displayed to the user when the application opens, and we can't wait for the user to enter a zipcode, a call will instantly be made to the backend with a value of 'local'. This is trigger a call to the Geolocation DB API to retrieve the user's current location. *This worked perfectly locally, but once the application was uploaded to a server, it seems to get the server's location."}),Object(h.jsx)("img",{className:"site-shot",src:"zipweathercomponents.png",alt:"Code showing component usage"}),Object(h.jsx)(g,{children:"This is an example of how I used components to abstract out redundant code. Here, you can see there are a lot of couplings of icons with data that are styled the same, so I just put them in a reusable component."})]})]})]})}a(87);function P(e){var t=Object(s.useState)("des"),a=Object(l.a)(t,2),i=a[0],c=a[1],n=Object(h.jsxs)(g,{children:[Object(h.jsx)("strong",{children:"Fireside"})," is an application created with the intention to bridge the age gap and create intergenerational friendships through direct communication."]}),o=Object(h.jsx)(g,{children:"This was the winning project for a hackathon which the prompt was to create an app that would help elderly people during the holidays. Fireside is an app that will give elderly people (who are often isolated and lonely) a safe space to connect to people of younger generations and share stores or ideas and build genuine, long-lasting relationships."});function r(e){c(i===e?null:e)}return Object(h.jsxs)("div",{className:"firesidepage-container",children:[Object(h.jsx)(u,{main:"Fireside"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(k,{links:{site:"https://fireside-connect.herokuapp.com/",github:"https://github.com/TheTeck/Fireside"}}),Object(h.jsxs)(N,{active:i,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(T,{tech:["HTML","SCSS","Javascript","React","Node","Express","MongoDB","Mongoose"]})]}),Object(h.jsx)(N,{active:i,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(N,{active:i,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"firesidemobilehome.png",alt:"Fireside landing page"}),Object(h.jsx)("img",{className:"site-shot",src:"onboardingshot3.png",alt:"Select all wanted age groups"}),Object(h.jsx)("img",{className:"site-shot",src:"onboardingshot4.png",alt:"What the user can offer"}),Object(h.jsx)("img",{className:"site-shot",src:"viewingmessages.png",alt:"All messages between two users"})]}),Object(h.jsxs)(N,{active:i,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"datamodels.png",alt:"Code showing the user schema"}),Object(h.jsx)(g,{children:"The app is pretty simple and we only needed to make a user schema for the main data model. In it are a few nested schemas to model the data found in the user schema."})]})]})]})}a(88);function D(e){var t=Object(s.useState)("des"),a=Object(l.a)(t,2),i=a[0],c=a[1],n=Object(h.jsxs)(g,{children:[Object(h.jsx)("strong",{children:"SpaceX Launches"})," is an application that presents the launch data of SpaceX to the site visitor in an accessible and intuitive way. It also presents links for each launch to an image of that launch's patch, wikipedia entry and to a video recording on YouTube."]}),o=Object(h.jsx)(g,{children:"I created this application mainly to focus on my data visualization skills using D3.js. Taking data from a single API, I wanted to present it in different ways (types of charts) that would make most sense for each particular set of data."});function r(e){c(i===e?null:e)}return Object(h.jsxs)("div",{className:"spacexpage-container",children:[Object(h.jsx)(u,{main:"SpaceX Launches"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(k,{links:{site:"https://theteck.github.io/SpaceX-Launches/",github:"https://github.com/TheTeck/SpaceX-Launches"}}),Object(h.jsxs)(N,{active:i,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(T,{tech:["HTML","SCSS","Javascript","React","D3.js"]})]}),Object(h.jsx)(N,{active:i,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(N,{active:i,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"launches.png",alt:"SpaceX Launches landing page"}),Object(h.jsx)("img",{className:"site-shot",src:"launchdata1.png",alt:"Pie chart showing makeup of launch customers and line graph showing launch frequency"}),Object(h.jsx)("img",{className:"site-shot",src:"launchdata2.png",alt:"Bar graph showing the number of failed and successful launches each year"})]}),Object(h.jsxs)(N,{active:i,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"piechart.png",alt:"Code showing the creation of the ringed pie chart for the launch customers"}),Object(h.jsx)(g,{children:"The portion of code shows the creation of the ringed pie chart for the launch customers. The data is first extracted into pieData and as each datum is iterated over, the shape of each segment is created with the d3.arc function. The color is simply a color fill with a d3 color interpolation function."})]})]})]})}a(89);var L=function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(o.a,{basename:"/Portfolio3",children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/home",children:Object(h.jsx)(w,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/puzzle",children:Object(h.jsx)(z,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/music",children:Object(h.jsx)(A,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/ouralley",children:Object(h.jsx)(I,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/minesweeper",children:Object(h.jsx)(M,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/weather",children:Object(h.jsx)(C,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/fireside",children:Object(h.jsx)(P,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/spacex",children:Object(h.jsx)(D,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/",children:Object(h.jsx)(w,{})})]})})})},H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,s=t.getFID,i=t.getFCP,c=t.getLCP,n=t.getTTFB;a(e),s(e),i(e),c(e),n(e)}))};n.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),H()}},[[90,1,2]]]);
//# sourceMappingURL=main.f54d4b13.chunk.js.map