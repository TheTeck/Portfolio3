(this.webpackJsonpportfolio3=this.webpackJsonpportfolio3||[]).push([[0],Array(19).concat([function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),c=s(12),n=s.n(c),o=(s(19),s(7)),r=s(2),l=s(3),h=(s(20),s(0));function d(e){return Object(h.jsx)("div",{className:"cursor-aura",style:{left:e.x-100,top:e.y-100,opacity:e.opacity}})}s(22);function j(e){return Object(h.jsxs)("div",{className:"bannerheader-container",children:[Object(h.jsx)("h1",{children:e.main}),e.sub?Object(h.jsx)("h2",{children:e.sub}):Object(h.jsx)(h.Fragment,{})]})}s(23);function u(e){var t=Object(i.useState)(null),s=Object(l.a)(t,2),a=s[0],c=s[1],n=Object(i.useState)(null),o=Object(l.a)(n,2),r=o[0],u=o[1],p=Object(i.useState)(0),m=Object(l.a)(p,2),b=m[0],g=m[1],f=Object(i.useState)([]),x=Object(l.a)(f,2),O=x[0],v=x[1],w=Object(i.useState)(0),y=Object(l.a)(w,2),k=y[0],N=y[1];return Object(i.useEffect)((function(){N(window.innerWidth)}),[]),Object(i.useEffect)((function(){!function(e){for(var t=[],s=0;s<300;s+=50)for(var i=0;i<e;i+=50)t.push([i,s]);v(t)}(k)}),[k]),window.addEventListener("resize",(function(){N(window.innerWidth!==k?window.innerWidth:k)})),Object(h.jsxs)("div",{className:"banner-container",onMouseMove:function(e){c(e.clientX),u(e.clientY),g(1)},onMouseLeave:function(){g(0)},children:[Object(h.jsx)(d,{x:a,y:r,opacity:b}),Object(h.jsx)("div",{className:"banner-highlight"}),O.map((function(e,t){return Object(h.jsx)("div",{className:"banner-tile",style:{top:e[1],left:e[0]}},t)})),Object(h.jsx)(j,{main:e.main,sub:e.sub})]})}s(24);function p(e){return Object(h.jsx)("div",{className:"content-container",children:e.children})}s(25);function m(e){return Object(h.jsxs)("div",{className:"profile-container",children:[Object(h.jsx)("div",{className:"profileimage-container",children:Object(h.jsx)("img",{src:"headshot.png",alt:"John Teckemeyer smiling into camera"})}),Object(h.jsx)("div",{className:"image-label",children:"About Me"})]})}s(26);function b(e){return Object(h.jsx)("div",{className:"paragraph-container",children:e.children})}s(27);function g(e){var t=Object(r.f)();return Object(h.jsx)("div",{className:"projectlink-container",children:Object(h.jsxs)("button",{className:"projectimage-container",onClick:function(){t.push(e.project.link)},children:[Object(h.jsx)("img",{src:e.project.image,alt:e.project.alt}),Object(h.jsx)("div",{className:"project-label",children:e.project.name})]})})}s(36);function f(e){return Object(h.jsxs)("div",{className:"contact-container",children:[Object(h.jsx)("div",{className:"resume-container",children:Object(h.jsxs)("a",{href:"resume.pdf",target:"_blank",children:[Object(h.jsx)("div",{className:"material-icons resume-icon",children:"description"}),Object(h.jsx)("div",{className:"resume-text",children:"Resume"})]})}),Object(h.jsxs)("div",{className:"contact-info-container",children:[Object(h.jsxs)("p",{children:["Email: ",Object(h.jsx)("a",{href:"mailto:johnteckemeyer@gmail.com",children:"johnteckemeyer@gmail.com"})]}),Object(h.jsxs)("p",{children:["GitHub: ",Object(h.jsx)("a",{href:"https://github.com/TheTeck",rel:"noreferrer",target:"_blank",children:"github.com/TheTeck"})]}),Object(h.jsxs)("p",{children:["LinkedIn: ",Object(h.jsx)("a",{href:"https://www.linkedin.com/in/john-teckemeyer/",rel:"noreferrer",target:"_blank",children:"linkedin.com/in/john-teckemeyer"})]})]})]})}s(37);function x(e){return Object(h.jsx)("div",{className:"tech-display",children:Object(h.jsx)("div",{className:"tech-container",children:e.tech.map((function(e,t){return Object(h.jsx)("div",{children:e},t)}))})})}s(38);function O(e){var t={zipWeather:{name:"Zip Weather",image:"zipweather.png",link:"/weather",alt:"Weather data for today"},justpuzzles:{name:"Just Puzzles",image:"polygonpuzzle.png",link:"/puzzle",alt:"Polygonal puzzle scattered in pieces"},sheetmusic:{name:"Sheet Music Maker",image:"sheetmusic.png",link:"/music",alt:"First page of some sheet music in the editor"},ouralley:{name:"Our Alley",image:"ouralley_playdates.png",link:"/ouralley",alt:"A list of playdates, each with all the dogs going listed"},minesweeper:{name:"Minesweeper",image:"minesweeper.png",link:"/minesweeper",alt:"An example of the game, Minesweeper, with some cells exposed"}};return Object(h.jsxs)("div",{className:"homepage-container",children:[Object(h.jsx)(u,{main:"John Teckemeyer",sub:"Full Stack Web Development"}),Object(h.jsx)(p,{children:Object(h.jsxs)("div",{className:"section-wrapper",children:[Object(h.jsx)(m,{}),Object(h.jsx)(b,{children:"I am a full-stack web developer out of the San Francisco Bay Area. Some of my greatest passions in life revolve around creating beautifully designed products that people enjoy using. Recently, I have transitioned from making physical, hand-crafted instruments to software engineering, because, in the digital space, I am only limited by my creativity and skills and with enough effort anything can be achieved. Now, I am looking for a position within a team where I can help create applications that people will love to use and, hopefully, help them achieve betterment in life."})]})}),Object(h.jsx)("div",{className:"skills-label",children:"Technical Skills"}),Object(h.jsx)("div",{className:"skill-wrapper",children:Object(h.jsx)(x,{tech:["Javascript","Typescript","Ruby","Python","C#","HTML","CSS","Sass","jQuery","React","Express","Node","Django","RESTful APIs","MongoDB","PostgreSQL","Git/GitHub"]})}),Object(h.jsx)(f,{}),Object(h.jsx)("h1",{children:"Projects"}),Object(h.jsx)(p,{children:Object(h.jsxs)("div",{className:"section-wrapper projects-wrapper",children:[Object(h.jsx)(g,{project:t.zipWeather}),Object(h.jsx)(g,{project:t.sheetmusic}),Object(h.jsx)(g,{project:t.ouralley}),Object(h.jsx)(g,{project:t.justpuzzles}),Object(h.jsx)(g,{project:t.minesweeper})]})})]})}s(39);function v(e){var t=Object(r.f)();return Object(h.jsx)(h.Fragment,{children:"/home"===e.link?Object(h.jsxs)("button",{className:"nav-back",onClick:function(){"/home"===e.link&&t.push(e.link)},children:[Object(h.jsx)("div",{className:"material-icons custom-icon",children:e.icon}),Object(h.jsx)("div",{className:"link-text",children:e.text})]}):Object(h.jsxs)("a",{className:"nav-link",href:e.link,rel:"noreferrer",target:"_blank",children:[Object(h.jsx)("div",{className:"material-icons custom-icon",children:e.icon}),Object(h.jsx)("div",{className:"link-text",children:e.text})]})})}s(40);function w(e){return Object(h.jsxs)("div",{className:"projectnav-container",children:[Object(h.jsx)(v,{icon:"arrow_back",text:"Back",link:"/home"}),Object(h.jsx)(v,{icon:"web_asset",text:"Site",link:e.links.site}),Object(h.jsx)(v,{icon:"code",text:"GitHub",link:e.links.github})]})}s(41);function y(e){return Object(h.jsxs)("div",{className:"sectionheader-container",children:[e.active?Object(h.jsx)("div",{className:"material-icons section-icons",children:"remove"}):Object(h.jsx)("div",{className:"material-icons section-icons",children:"add"}),Object(h.jsx)("div",{className:"sectionheader-title",children:e.title})]})}s(42);function k(e){return Object(h.jsxs)("button",{className:"section-container",onClick:function(){e.handleActivateSection(e.code)},children:[Object(h.jsx)(y,{title:e.title,active:e.active===e.code}),Object(h.jsx)("div",{className:"section-content-container",style:e.active===e.code?{height:"100%"}:{height:"0px"},children:Object(h.jsx)("div",{className:"section-content",children:e.children})})]})}s(43);function N(e){var t=Object(i.useState)("des"),s=Object(l.a)(t,2),a=s[0],c=s[1],n=Object(h.jsxs)(b,{children:[Object(h.jsx)("strong",{children:"Just Puzzles"})," is an online source for puzzles that takes an image and breaks it up into the number of pieces and piece shape specified by the user. As the admin, I can upload many images ahead of time and have them released upon the date given to each image for a hands-off daily update. The puzzle mechanics and image selections were designed to create a enjoyable, relaxing and satisfying user experience."]}),o=Object(h.jsx)(b,{children:"The focus of this application was to develop my CSS skills as well as work with more complex algorithms than normally found in front end development."});function r(e){c(a===e?null:e)}return Object(h.jsxs)("div",{className:"puzzlepage-container",children:[Object(h.jsx)(u,{main:"Just Puzzles"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(w,{links:{site:"https://just-puzzles.herokuapp.com/",github:"https://github.com/TheTeck/JustPuzzles"}}),Object(h.jsxs)(k,{active:a,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(x,{tech:["HTML","SCSS","Javascript","React","Node","Express","MongoDB","AWS S3"]})]}),Object(h.jsx)(k,{active:a,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(k,{active:a,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"puzzles_homepage.png",alt:"All available puzzles in order of release"}),Object(h.jsx)("img",{className:"site-shot",src:"puzzles_options.png",alt:"Puzzle options that determine how to generate the puzzle"}),Object(h.jsx)("img",{className:"site-shot",src:"puzzles_tile.png",alt:"Scattered puzzle pieces in square tile shape"}),Object(h.jsx)("img",{className:"site-shot",src:"polygonpuzzle.png",alt:"Scattered puzzle pieces in random polygonal shapes"})]}),Object(h.jsxs)(k,{active:a,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"movepiece.png",alt:"Code for moving a puzzle piece and all connected pieces"}),Object(h.jsx)(b,{children:"Whenever a piece is active and the mouse moves, firing an event, the movePiece function is called. In the movePiece function, the for loop goes through all of the connected pieces attached to the active piece and updates their location based upon the location of the active piece by calling the updatePieceLocation function. In the updatePieceLocation function, if first checks to see if the piece is in either the first row or column. If it is, then it does not need to include a buffer offset, otherwise it does."})]})]})]})}s(44);function S(e){var t=Object(i.useState)("des"),s=Object(l.a)(t,2),a=s[0],c=s[1],n=Object(h.jsxs)(b,{children:[Object(h.jsx)("strong",{children:"Sheet Music Maker"})," is a sheet music editing application with a community aspect to it. A user can share their works with any other user that follows them and vice versa. This project was done over the course of one week and in that time I was only able to get the editor to allow the input of just quarter notes and their deletion from the staves."]}),o=Object(h.jsx)(b,{children:"This application was my final project for my full-stack bootcamp and was made to showcase my collective skills learned up to that point. The main focus of it's development was with the front end, using React."});function r(e){c(a===e?null:e)}return Object(h.jsxs)("div",{className:"musicpage-container",children:[Object(h.jsx)(u,{main:"Sheet Music Maker"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(w,{links:{site:"https://sheetmusicmaker.herokuapp.com",github:"https://github.com/TheTeck/Sheet-Music-Maker"}}),Object(h.jsxs)(k,{active:a,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(x,{tech:["HTML","CSS","Javascript","React","Node","Express","MongoDB","AWS S3"]})]}),Object(h.jsx)(k,{active:a,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(k,{active:a,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"musiclandingpage.png",alt:"Sheet Music Maker login or signup page"}),Object(h.jsx)("img",{className:"site-shot",src:"musichomepage.png",alt:"Sheet Music Maker homepage"}),Object(h.jsx)("img",{className:"site-shot",src:"musicopusindexpage.png",alt:"All of the user's sheet music"}),Object(h.jsx)("img",{className:"site-shot",src:"musiceditopuspage.png",alt:"The edit screen to write music on staves"})]}),Object(h.jsxs)(k,{active:a,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)(b,{children:'In the sheet music editor, the "sheet music" is made of many components (as is the way of React). In the Page components, there are Staff components. And in each Staff component, there are Measure components. When a note is written by the user on the sheet music, it begins to build a string that represents the music.'}),Object(h.jsx)("img",{className:"site-shot",src:"inmeasure.png",alt:"Code showing state being added to a string and lifted"}),Object(h.jsx)(b,{children:"In handleStaffClick function (within the Measure component), when a note is entered onto a staff, its duration and pitch is represented as a string and concatenated to the string which makes up the current measure and then lifted to the parent Staff component."}),Object(h.jsx)("img",{className:"site-shot",src:"instaff.png",alt:"Code showing more state being added to a string and lifted"}),Object(h.jsx)(b,{children:"In the updateMeasure function (within the Staff component), the measure that had been updated is written over by the string value held by the 'notes' parameter and then calls updateStaff, concatenating all the strings representing the measures of the staff and lifts the data back to the parent Page component."}),Object(h.jsx)("img",{className:"site-shot",src:"inpage.png",alt:"Even more code showing more state being added to a string and lifted"}),Object(h.jsx)(b,{children:"Here in the updateStaff function (within the Page component), it works much like the updateMeasure in that it updates the active Staff and concatenates the string representing with the rest of the Staves and updates the entire Page's music with a string."})]})]})]})}s(45);function z(e){var t=Object(i.useState)("des"),s=Object(l.a)(t,2),a=s[0],c=s[1],n=Object(h.jsxs)(b,{children:[Object(h.jsx)("strong",{children:"Our Alley"})," is a social networking application that helps bring lonely dogs together by letting users search for other local dogs and propose playdates. This was a team project in which I was the scrum and api master. A major focus of mine on this project was implementing the google maps api to geolocate other nearby users."]}),o=Object(h.jsx)(b,{children:"The main focus of this application in particular was to gain experience working as part of a team. We were a team of 3 people and we each took on specific roles in addition to programming our assigned tasks."});function r(e){c(a===e?null:e)}return Object(h.jsxs)("div",{className:"ouralley-container",children:[Object(h.jsx)(u,{main:"Our Alley"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(w,{links:{site:"https://ouralley.herokuapp.com/",github:"https://github.com/farazborjian/OurAlley"}}),Object(h.jsxs)(k,{active:a,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(x,{tech:["HTML","CSS","Python","Django","PostgreSQL","Materialize"]})]}),Object(h.jsx)(k,{active:a,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(k,{active:a,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"ouralley.png",alt:"Login or signup page"}),Object(h.jsx)("img",{className:"site-shot",src:"ouralley_mypets.png",alt:"All the user's pets"}),Object(h.jsx)("img",{className:"site-shot",src:"ouralley_playdate.png",alt:"Creating a playdate to add dogs. Also shows dogs invited."}),Object(h.jsx)("img",{className:"site-shot",src:"ouralley_playdates.png",alt:"List of all the playdates with all the information displayed"})]}),Object(h.jsxs)(k,{active:a,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"getlocaldogs.png",alt:"Code using helper functions to locate the user and surrounding local dogs"}),Object(h.jsx)(b,{children:"One of the more complicated parts of this application that I was in charge of was the implementation of searching more local dogs. Here, depending on whether the user used an explicit location, the algorithm will use that location or the user's home address, using a helper function to convert the address to latitude and longitude coordinates. Then the function filters through all other users' dogs that have a location within 2 miles, again using a helper function to get the distance of each dog."}),Object(h.jsx)("img",{className:"site-shot",src:"helperfunctions.png",alt:"Code that helps with getting latitude and longitude coordinates from an address and finding the distance between two point on Earth."}),Object(h.jsx)(b,{children:"The first helper function, the haversine function, returns the distance between two points on the surface of the Earth. The second helper function, extract_lat_long_via_address, makes a call the the Google Maps api to get the latitude and longitude coordinates for a given address."})]})]})]})}s(46);function T(e){var t=Object(i.useState)("des"),s=Object(l.a)(t,2),a=s[0],c=s[1],n=Object(h.jsxs)(b,{children:[Object(h.jsx)("strong",{children:"Minesweeper"})," is a single-player game in which the objective is to clear a rectangular grid of cells by avoiding those with mines and revealing all empty cells. Any empty cell can show a number indicating the quantity of mines surrounding it. It is with these numbers that the player can use logic to deduce the locations of the mines. The game ends when either the player reveals a mine or has cleared all empty cells."]}),o=Object(h.jsx)(b,{children:"Minesweeper was my first project I developed in my full-stack bootcamp. It was done with HTML, CSS and Javascript and I simply wanted to recreate it using the React framework as a practice in total refactoring of the code."});function r(e){c(a===e?null:e)}return Object(h.jsxs)("div",{className:"minesweeperpage-container",children:[Object(h.jsx)(u,{main:"Minesweeper"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(w,{links:{site:"https://TheTeck.github.io/Minesweeper2",github:"https://github.com/TheTeck/Minesweeper2"}}),Object(h.jsxs)(k,{active:a,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(x,{tech:["Javascript","React","Sass"]})]}),Object(h.jsx)(k,{active:a,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsx)(k,{active:a,code:"img",title:"Images",handleActivateSection:r,children:Object(h.jsx)("img",{className:"site-shot",src:"minesweeper.png",alt:"The game Minesweeper in an 80's retro style"})}),Object(h.jsxs)(k,{active:a,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"creategame.png",alt:"Code showing the creation of the game board"}),Object(h.jsx)(b,{children:"Every time a new game is started, a new array is created that is filled with instances of the CellData class. The CellData class has most instance variables starting with default values, but then each instance is supplied a value created by the functions populateBombs and popoulateNumbers."}),Object(h.jsx)("img",{className:"site-shot",src:"exposecells.png",alt:"Code showing recursive functionality to expose more of the game board"}),Object(h.jsx)(b,{children:"When a user left-clicks on a cell, that cell becomes exposed. If the cell is not empty, such as a number or bomb, then the exposeMore function is done. However, if the cell is empty, the function is going to recursively call itself for each cell that surrounds it, if they are not already exposed."})]})]})]})}s(47);function A(e){var t=Object(i.useState)("des"),s=Object(l.a)(t,2),a=s[0],c=s[1],n=Object(h.jsxs)(b,{children:[Object(h.jsx)("strong",{children:"Zip Weather"})," is a site that will retrieve and display weather data for a given zipcode location. It will display the current weather, 24 hour forecasts and 7 day forecasts."]}),o=Object(h.jsx)(b,{children:"The focus of this application to was two things: First, to further practice using 3rd party apis instead of using a user defined database. Second, to reinforce and see what I could accomplish in React without being burdoned with the designing of the UI (I just copied an actual website)."});function r(e){c(a===e?null:e)}return Object(h.jsxs)("div",{className:"weatherpage-container",children:[Object(h.jsx)(u,{main:"Zip Weather"}),Object(h.jsxs)(p,{children:[Object(h.jsx)(w,{links:{site:"https://ziipweather.herokuapp.com/",github:"https://github.com/TheTeck/Weather"}}),Object(h.jsxs)(k,{active:a,code:"des",title:"Description",handleActivateSection:r,children:[n,Object(h.jsx)("div",{className:"tech-name",children:"Technologies Used"}),Object(h.jsx)(x,{tech:["HTML","SCSS","Javascript","React","Node","Express","Open Weather API","Geolocation DB API"]})]}),Object(h.jsx)(k,{active:a,code:"obj",title:"Objective",handleActivateSection:r,children:o}),Object(h.jsxs)(k,{active:a,code:"img",title:"Images",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"zipweather.png",alt:"Zip Weather homepage"}),Object(h.jsx)("img",{className:"site-shot",src:"zipweatherhourly.png",alt:"Zip Weather hourly forecast page"}),Object(h.jsx)("img",{className:"site-shot",src:"zipweatherdays.png",alt:"Zip Weather seven day forecast page"})]}),Object(h.jsxs)(k,{active:a,code:"cod",title:"Code Highlights",handleActivateSection:r,children:[Object(h.jsx)("img",{className:"site-shot",src:"zipweatherapicall.png",alt:"Code showing conditional api calls"}),Object(h.jsx)(b,{children:"For the most part, the user would enter a zipcode which would then be passed as a parameter to the API call. However, since there needs to be some kind of data displayed to the user when the application opens, and we can't wait for the user to enter a zipcode, a call will instantly be made to the backend with a value of 'local'. This is trigger a call to the Geolocation DB API to retrieve the user's current location. *This worked perfectly locally, but once the application was uploaded to a server, it seems to get the server's location."}),Object(h.jsx)("img",{className:"site-shot",src:"zipweathercomponents.png",alt:"Code showing component usage"}),Object(h.jsx)(b,{children:"This is an example of how I used components to abstract out redundant code. Here, you can see there are a lot of couplings of icons with data that are styled the same, so I just put them in a reusable component."})]})]})]})}s(48);var M=function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(o.a,{basename:"/Portfolio3",children:Object(h.jsxs)(r.c,{children:[Object(h.jsx)(r.a,{exact:!0,path:"/home",children:Object(h.jsx)(O,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/puzzle",children:Object(h.jsx)(N,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/music",children:Object(h.jsx)(S,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/ouralley",children:Object(h.jsx)(z,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/minesweeper",children:Object(h.jsx)(T,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/weather",children:Object(h.jsx)(A,{})}),Object(h.jsx)(r.a,{exact:!0,path:"/",children:Object(h.jsx)(O,{})})]})})})},I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,n=t.getTTFB;s(e),i(e),a(e),c(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),I()}]),[[49,1,2]]]);
//# sourceMappingURL=main.15c21a5b.chunk.js.map