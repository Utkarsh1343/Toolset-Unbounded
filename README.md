
# Overview 


Hello Devs, Welcome to our GitHub ripo. It contains the code of a website named MyDisc,This website has feature of Text and Image compression, where the client can upload his/her Text and Image files. These files are compressed and stored in the MongoDB database, whenever user want to access those files He/She can get it by Downloading them. These files are processed through decompression algorithm which decompresses the file stored in the database.We are using HTML and Pug for the front-end, javascript and it's
dependencies express,pug,path for back-end. MongoDB is used as database.





## Dependencies
 Express:
 
 Express.js, often referred to as simply Express, is a popular and lightweight web application framework for Node.js.Express allows you to define routes for handling incoming HTTP requests. You can specify the HTTP method (GET, POST, etc.), the URL pattern, and the function that should be executed when the route is matched. Express.js uses middleware functions to process requests and responses. Express.js supports various template engines, such as EJS, Pug (formerly known as Jade), Handlebars, etc. 


 Node.js and its Functions:


Node.js is an open-source, server-side JavaScript runtime environment built on Chrome's V8 JavaScript engine.
Node.js enables you to execute JavaScript code on the server-side, which was traditionally limited to client-side execution in web browsers. This allows developers to use a unified programming language (JavaScript) across the entire web application stack.

Node.js comes bundled with NPM, a powerful package manager that provides access to a vast ecosystem of reusable libraries and modules. NPM allows developers to easily install, manage, and share packages, making it convenient to add functionality to Node.js applications.


Pug:

Pug, formerly known as Jade, is a popular template engine for Node.js and other JavaScript environments.Pug uses a minimalist and indentation-based syntax, which reduces the amount of code required to define HTML templates. Instead of using opening and closing tags, Pug uses indentation to represent the structure of the HTML document.



Path in Javascript:


In JavaScript development, path dependencies can refer to the dependencies and relationships between different modules, libraries, or frameworks that are used within a project.
## Authors

Ameya Langer\
Ahmed Noor\
Pratyush Kaurav\
Surya Narayan\
Utkarsh Gupta\
Adarsh Gupta






## Website implementation code

Code for the website in PUG, The Pug file contains the code in HTML. 

[Homepage](https://github.com/Utkarsh1343/Toolset-Unbounded/blob/main/static/home.pug)
[Login Page](https://github.com/Utkarsh1343/Toolset-Unbounded/blob/main/static/login.pug)
[Registration page](https://github.com/Utkarsh1343/Toolset-Unbounded/blob/main/static/register.pug)







## Website styling

CSS file -->
[Home CSS](https://github.com/Utkarsh1343/Toolset-Unbounded/blob/main/views/stylehome.css)
[Login CSS](https://github.com/Utkarsh1343/Toolset-Unbounded/blob/main/views/stylelogin.css)
[Register CSS](https://github.com/Utkarsh1343/Toolset-Unbounded/blob/main/views/styleregister.css) 



## Javascript file

[Js file](https://github.com/Utkarsh1343/Toolset-Unbounded/blob/main/app.js)
[Json file embedded modules](https://github.com/Utkarsh1343/Toolset-Unbounded/blob/main/package.json)




## Installation

install node from

Download | Node.js

Node.js
https://nodejs.org › download


Run these commands in the terminal of VS code.

 
 ``` bash
 node init
 ```

 codes to install express, mongoose, pug and path
 ```bash
 npm install mongoose 
 npm install express
 npm install pug
 npm install path
 ```

 Now let's install nodemon

 ``` bash
 npm install nodemon --global

 ```
 For some machines it can show permission denied so use this
 ```bash
sudo npm install nodemon --global
 ```
For website to store data download mongoDb from its official website

To start mongodb type this command on terminal(as administrator)
```bash
mongod
```

To run the server use
``` bash
node app.js
```
and run the website on localhost:80






 


