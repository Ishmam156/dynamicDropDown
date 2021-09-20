<h1 align="center"> Dynamic DropDown - CSS Styled </h1>

<p align="center"> A simple npm package that lets you add dropDown elements to your DOM easily and dynamically </p>

<hr/>

![Website Desktop Image](https://i.imgur.com/g3KOYDh.png)

<p> Adding dropDown to your navbar or other HTML elements is quite commonplace in today's modern web. This npm package was created with the hope to have a simple solution to adding as many dropdowns as needed to your webpage's DOM. </p>

<h3> List of features </h3>

<ul>
  <li>User provides the id of the DOM element that the dropDown will be added to</li>
  <li>User provides the background color for the dropDown</li>
  <li>User provides the font color for the dropDown</li>
  <li>User provides an array of href and textContent that will be added to the dropDown </li>
</ul>

<h3> Download & Installation </h3>

```shell
$ npm i dynamic-dropdown-cssstyled
```

<h3>Usage example</h3>

```html
<!-- index.html -->

<nav>
    <div>
        <button id='addDropDown'>DropDown</button>
    </div>
    <div>
        <button id='addAnotherDropDown'>Another One</button>
    </div>
</nav>    
```

```js
// src/index.js

import addDropDown from "dynamic-dropdown-cssstyled";

addDropDown("addDropDown", "#c8c6c6", "#4b6587", [
  {
    link: "http://www.google.com/",
    text: "Google",
  },
  {
    link: "https://github.com/Ishmam156",
    text: "My GitHub",
  },
]);

addDropDown("addAnotherDropDown", "pink", "purple", [
  {
    link: "http://www.google.com/",
    text: "Google",
  },
]);

```
<h3>Demo</h3>

![Website Desktop Image](https://i.imgur.com/g3KOYDh.png)
![Website Desktop Image 2](https://i.imgur.com/smIRbiJ.png)


<h3>Acknowledgements</h3>

- [The Odin Project](https://www.theodinproject.com/)

<h3>License</h3>

[ISC](https://opensource.org/licenses/ISC)

<h3>Authors</h3>

- [Ishmam Chowdhury](https://github.com/Ishmam156)

<h3>Contributing</h3>
<p>Contributions are always welcome!</p>
<p>Kindly do a <i>pull request</i> with your contribution.</p>



<h3>Feedback</h3>
<p>If you have any feedback, please reach out to me in <i>GitHub</i>.</p>

