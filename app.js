// console.log(document);
// Parent ko target karna
// let parentElement = document.getElementById("parent");

// // Children ko target karna using parent element
// let children = parentElement.children;

// console.log("Parent Element:", parentElement);
// console.log("Children of the parent:");
// for (let i = 0; i < children.length; i++) {
//   console.log(children[i]);
// }

// // Kisi child ka parent ko target karna
// let child1 = document.getElementById("child1");
// let parentOfChild1 = child1.parentNode;

// console.log("Parent of Child1:", parentOfChild1);

// Parent ko target karna
let parentElement = document.getElementById("parent");

// Get all children nodes (including junk artifacts)
let allNodes = parentElement.childNodes;

console.log("All nodes including junk artifacts:");
for (let i = 0; i < allNodes.length; i++) {
  console.log(allNodes[i], "Node Type:", allNodes[i].nodeType);
}

// Filter only element nodes (junk artifacts ko remove karte hue)
console.log("Only element nodes:");
for (let i = 0; i < allNodes.length; i++) {
  if (allNodes[i].nodeType === 1) { // Check if it's an element node
    console.log(allNodes[i]);
  }
}
