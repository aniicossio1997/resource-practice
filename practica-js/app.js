const lista = document.getElementById('lista')
console.log(lista)

const arrayItem = ["item 1", "item 2", "item 3"];
const fragment = document.createDocumentFragment();

arrayItem.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;

  // Nos devuelve el primer elemento
  const referenceNode = fragment.firstChild;
  // En caso de que no exista un nodo hijo tirará null
  console.log("primer li", referenceNode);

  // Si "referenceNode" es null, el newNode se insertará al final de la lista de nodos hijos.
  // parentNode.insertBefore(newNode, referenceNode);
  fragment.insertBefore(li, referenceNode);
});

lista.appendChild(fragment);