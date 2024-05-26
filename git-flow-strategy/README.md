Convention guide:

1.** File/Folder Name**: 
- Name the file corresponding to the developed page with lowercase including hyphens(-) when file name is long.

Ex: homepage.html <br>
    product-cart.html <br>
    homepage.js <br>
    homepage.css

- Images should be in one folder named 'img'. All the image should be name with the following developed page and content of the image connected with hyphens(-).

Ex: homepage-cat.png <br>
    news-anb.jpg <br>
    product-hanssem.png

2. **CSS Convention**:
- Class and Id should be named by its purpose or feature as well as connected with hyphens(-). The name should be in lowercase. 

Ex: .blue-navigator <br>
    #menu-list <br>
    .icon-home

- It can be used in shortcut form but make sure to give comments above the declaration.

Ex : /* navigator */ <br>
     .nav <br>
     #nav 

3. **HTML Convention**:
- Use Multi-line for tag declaration.



4. **JS Convention**:
- Variables will be declared in full meaning and all in lowercase except global variables all uppercase. Whereas, function's name will be in camel or pascal format depend on the type of fucntion. 

Ex: celcius, farenheit, etc. <br>
    fucntion firstName(){} -> camel format<br>
    fucntion FirstName(){} -> pacal format <br>
    RADIUS -> global variable

- Use Multi-line for Object declaration.

Ex: let person { <br>
    name : ----, <br>
    age : ----
}

- Script file or js file should be within the body tag (<body></body>).

5. **Folder Structure**
root/
├─ css/
│   └── # all .css files go here
├─ doc/
│   └── # all document files go here
├─ img/
│   └── # all image files go here
├─ js/
│   └── # all .js files go here
├─ # all .html files go here
└─ README.md


				