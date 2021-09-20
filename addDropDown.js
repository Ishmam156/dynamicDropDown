// Taken and slightly modified from: https://stackoverflow.com/a/44996682
const guidGenerator = () => {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + "-" + S4();
};

// Add styling to HTML head to ensure dropdown gets animation as well as appropriate color
const addDropDownStyle = (backgroundColor, fontColor, uniqueID) => {
  var style = document.createElement("style");
  style.innerHTML = `.dropdown-${uniqueID} { position: relative; }`;
  style.innerHTML += `.dropdown-menu-${uniqueID} { position: absolute; left: 0; top: calc(100% + 0.25rem); background-color: ${backgroundColor}; color: ${fontColor}; padding: 0.75rem; border-radius: 0.25rem; box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.3); opacity: 0; transition: opacity 150ms ease-in-out, transform 150ms ease-in-out; transform: translateY(-10px); pointer-events: none; z-index: 5}`;
  style.innerHTML += `.dropdown-${uniqueID}.active > .link + .dropdown-menu-${uniqueID} { opacity: 1; transform: translateY(0px); pointer-events: auto; }`;
  style.innerHTML += `.dropdown-${uniqueID}.active > .link { color: ${backgroundColor}; filter: brightness(70%);}`;
  style.innerHTML += `.dropdown-menu-${uniqueID} div { padding: 5px 0px; }`;
  style.innerHTML += `.dropdown-menu-${uniqueID} a { text-decoration: none; color: ${fontColor} }`;
  style.innerHTML += `.dropdown-menu-${uniqueID} a:hover { text-decoration: underline; }`;

  document.querySelector("head").appendChild(style);
};

// Listener awaiting dropdown click for opening and closing
const addDropDownListener = () => {
  // Adding listener to body element and check if the listener attribute is true or not to avoid double adding
  const element = document.querySelector("body");

  if (element.getAttribute("listener") == null) {
    // Add initial attribute on first run
    element.setAttribute("listener", "true");

    element.addEventListener("click", (event) => {
      const isDropDownButton = event.target.matches("[data-dropdown-button]");
      // Check for other clicks than on dropDown
      if (
        !isDropDownButton &&
        event.target.closest("[data-dropdown]") !== null
      ) {
        return;
      }

      // Toggle dropDown active and remove active class from other dropDowns
      let currentDropDown;
      if (isDropDownButton) {
        currentDropDown = event.target.closest("[data-dropdown]");
        currentDropDown.classList.toggle("active");
      }

      document
        .querySelectorAll("[data-dropdown].active")
        .forEach((dropDown) => {
          if (dropDown === currentDropDown) {
            return;
          }
          dropDown.classList.remove("active");
        });
    });
  }
};

/**
 * Function that adds dynamic dropDown to DOM.
 *
 * Takes in element to add dropDown to as well as additional inputs and then renders a dropDown to the DOM dynamically.
 *
 * @since      1.0.0
 * @access     public
 *
 * @listens clicksOnTheBodyElement
 *
 * @param {string}   elementToAddID         ID of HTML node to add the dropDown to.
 * @param {string}   backgroundColor        Background color for the dropDown
 * @param {string}   fontColor              Font color for the dropDown
 * @param {Array}   [contentToAdd]          Array of items to be added to the dropDown as anchor element in container divs
 * @param {string}  items.link              The link that will be used within the href for the anchor element
 * @param {string}   items.text             The text content that will be used for the anchor element
 *
 * @return {boolean}                        Returns true at end of function.
 */

const addDropDown = (
  elementToAddID,
  backgroundColor,
  fontColor,
  contentToAdd
) => {
  // Allowing multiple dropDowns with unique color schemes to be used
  const uniqueID = guidGenerator();

  // Generating the CSS
  addDropDownStyle(backgroundColor, fontColor, uniqueID);

  // Adding classlist and dataset to target element and it's parent
  const elementToAddDropDown = document.getElementById(elementToAddID);
  const elementParent = elementToAddDropDown.parentElement;

  elementToAddDropDown.dataset.dropdownButton = "";
  elementToAddDropDown.classList.add("link");
  elementParent.dataset.dropdown = "";
  elementParent.classList.add(`dropdown-${uniqueID}`);

  const dropDownDiv = document.createElement("div");
  dropDownDiv.classList.add(`dropdown-menu-${uniqueID}`);

  // Looping through content provided and adding it to the dropDown container
  contentToAdd.forEach((item) => {
    const container = document.createElement("div");
    const dropDownContent = document.createElement("a");
    dropDownContent.href = item.link;
    dropDownContent.target = "_blank";
    dropDownContent.textContent = item.text;

    container.appendChild(dropDownContent);
    dropDownDiv.appendChild(container);
  });

  elementParent.appendChild(dropDownDiv);

  // Add the listener
  addDropDownListener();

  return true;
};

module.exports = addDropDown;
