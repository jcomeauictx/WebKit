// [Name] SVGAElement-dom-target-attr.js
// [Expected rendering result] green 300x300 rectangle - created by resources/linkTarget.svg
// [Test purpose] If SVGAElement does not react properly on 'target' DOM attribute changes
//                a new window will be opened (target _blank, instead of _self) and
//                notifyDone() is never called -> DRT will hang.

description("Tests dynamic updates of the 'target' attribute of the SVGAElement object")
createSVGTestCase();

var rectElement = createSVGElement("rect");
rectElement.setAttribute("width", "300");
rectElement.setAttribute("height", "300");
rectElement.setAttribute("fill", "red");

var anchorElement = createSVGElement("a");
anchorElement.setAttribute("target", "_blank");
anchorElement.setAttributeNS(xlinkNS, "xlink:href", "resources/linkTarget.svg");
anchorElement.appendChild(rectElement);

rootSVGElement.appendChild(anchorElement);

function executeTest() {
    anchorElement.setAttribute("target", "_self");
    completeTest();
    triggerUpdate();
}

executeTest();
