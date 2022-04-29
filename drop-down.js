const parent = document.querySelector(".dropDown");

function dropDown(div) {
  let toggle;
  const childNodes = div.children;
  div.style.cssText = "position:relative;";
  childNodes[0].style.cssText = "position:absolute; z-index:1;";
  for (let i = 1; i < childNodes.length; i += 1) {
    childNodes[i].style.cssText +=
      " position: absolute;  transition: transform 200ms ease-in-out;  z-index: 0;";
  }
  function animate() {
    let height = childNodes[1].offsetHeight;
    for (let i = 1; i < childNodes.length; i += 1) {
      if (toggle === 0) {
        childNodes[
          i
        ].style.cssText += `display: block;transform: translate(0px, ${height}px); `;
        height += childNodes[1].offsetHeight;
      } else {
        childNodes[i].style.removeProperty('transform');
      }
    }
  }
  childNodes[0].addEventListener("click", () => {
    if (toggle === 0) {
      toggle = 1;
    } else {
      toggle = 0;
    }
    animate();
  });
}

dropDown(parent);
