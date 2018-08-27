
 function  renderDiv(elementId, toggleDisplay) {
      const divElement = document.getElementById(elementId);
      divElement.style.display = toggleDisplay;
 }

 function  toggleNotification(elementId, toggleDisplay) {
  const divElement = document.getElementById(ElementId);
  divElement.style.display = toggleDisplay;
  divElement.style.height = '100px';
}

function renderAlert(ElementId, toggleDisplay, text = '', bgColor = '', color ='') {
  const divElement = document.getElementById(ElementId);
  divElement.style.display = toggleDisplay;
  divElement.innerHTML = text;
  divElement.style.backgroundColor = bgColor;
  divElement.style.height = '30px';
  divElement.style.color = color;
}