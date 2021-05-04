class Link {
  constructor(name, url) {
    this.name = name;
    this.url = url
  }
}

// Class that holds a collection of players and properties and functions for the group
class Card {
  constructor(title, id) {
    this.items = new Array();
    this.title = title;
    this.id = id
  }
  // create a new player and save it in the collection
  addLink(name, url) {
    let l = new Link(name, url)
    this.items.push(l);
  }
  items() {
    return this.items;
  }
  // this could include summary stats like average score, etc. For simplicy, just the count for now
  sizeitems() {
    return this.items.length;
  }
  pintarItens(){
    let text="";
    for (let index = 0; index < this.sizeitems; index++) {
       text=text+IU.addA(this.items[index])

      
    }
    return text;
  }
}
class IU {
  static addCard(card) {  // static method
    const contentParent = document.getElementById('context-parent');
    let element = document.createElement('div');
    let t1=" ";
    let t2=" ";
    let t3=" ";
    t1 = `<div class="p-2 bd-highlight">
    <div class="card" style="width: 18rem">
      <div class="card-header">
        <i class="bx bxs-package"></i>
        ${card.title}
      </div>
      <ul class="list-group list-group-flush">
       
        `;
        t3=`
      </ul>
    </div>
  </div>`;
  
    card.items.forEach(each => {
      t2+=(IU.addA(each.url,each.name));
    })
    element.innerHTML =t1+t2+t3;

    contentParent.appendChild(element);
    
   
  }

  static addA(url,name) {
    return`
    <li class="list-group-item" id="">
    <a href="${url}" class="card-link" target="_blank">${name} </a> </li> `;
    
  }


}
let card1 = new Card("Animation");
card1.addLink("animation link header", "animation/link-border-bottom.html");
card1.addLink("transition", "animation/transition-rotateX-menu-animation.html");
card1.addLink("divs animation", "animation/animation-speed.html");
let card2 = new Card("responsive");
card2.addLink("grid layout responsive", "responsive-css-practice/photo-gallery-css/gallery.html");
card2.addLink("gallery responsive", "responsive-css-practice/photo-gallery-css/gallery.html");


objects = new Array();
objects.push(card1);
objects.push(card2);
// var node = document.createElement("LI");
// var textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("context-parent").appendChild(node);

// const myElement = document.getElementById('context-parent');
// for (let i = 0; i < myElement.children.length; i++) {
//   console.log(myElement.children[i].tagName);
// }


for (let index = 0; index < objects.length; index++) {
  IU.addCard(objects[index])
}

// window.onload = (event) => {


// };
