var shut = false;

var template = function(name, body) {
  document.body.innerHTML = '<head> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="stylesheet" href="other/style.css" /> <script src="script.js"></script> <title>'+name+'</title> </head> <body> <div id="mySidenav" class="sidenav"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()" >&times;</a > <a href="index.html">Home</a> <a href="about.html">About</a> <a href="pdf.html">Documentation</a> <a href="#">Links</a> </div> <div class="navbar"> <span style="font-size:20px;">DPLA Docs - '+name+'</span> <span style="font-size:30px;cursor:pointer;float:right; margin-right:0.9em; margin-top:-0.4em;" onclick="openNav()" >&#9776;</span > </div> <div class="content"> <p>'+body+'</p> </div> </body> </html>'
  
  if (shut) {
   document.body.innerHTML = '<head> <meta name="viewport" content="width=device-width, initial-scale=1" /> <link rel="stylesheet" href="other/style.css" /> <script src="script.js"></script> <title>403</title> </head> <body> <div id="mySidenav" class="sidenav"> <a href="javascript:void(0)" class="closebtn" onclick="closeNav()" >&times;</a > <a href="#">About</a> <a href="#">Documentation</a> <a href="#">Links</a> </div> <div class="navbar"> <span style="font-size:20px;">DPLA Docs - 403</span> <span style="font-size:30px;cursor:pointer;float:right; margin-right:0.9em; margin-top:-0.4em;" onclick="openNav()" >&#9776;</span > </div> <div class="content"> <p><h2>403</h2> Sorry the site is not acsessable right now.</p> </div> </body> </html>' 
  }
};