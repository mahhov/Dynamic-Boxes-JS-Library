# Dynamic-Boxes-JS-Library

https://youtu.be/H5NZp7-5zEA

~July 2012

Javascript helper library built from scratch that make it easy to quickly create simple and ui with just a few lines of code.   
  
Usage  
1) create an html file, link in dynBox.js, dynoStyle.css.
2) Simply add something like _addDynBox(new DynBoxData(x, y, width, height, minwidth, minheight, maxwidth, maxheight, name))_ to your body.onload function in your html.  
3) Then add something like _var name = <whatever you want the contents of the box to be>_ . I recomend defining all your box contents in a seperate js file, such as page.js in the example (be sure to link in page.js as well if you do so).
4) And now you have a box with your desired contents on your html site, that's moveable and resizable (drag on the edges and corners).  
5) Right clicking a box on the site will order it to the back.

