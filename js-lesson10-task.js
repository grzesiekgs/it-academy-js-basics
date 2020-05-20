/*
  Modify List and ListItem this way, so it will be possible to click on list item and check/uncheck it.

  At the botton of List element, there should be counter of currently selected items,
  and "submit" button, which once clicked, will pass an array of selected items to callback function 
  (which should be provided as argument for List).
*/

function ListItem (item, onClick) {
  Element.call(this, 'list-item', 'li');

  this.label = item.label;
  this.value = item.value;
  this.checked = item.checked;
  this.domElement.addEventListener('click', () => {
    onClick(this.value, this.checked);
  });

  this.addClass('list-item');
  this.update(item.checked);
}

ListItem.prototype = Object.create(Element.prototype);
ListItem.prototype.update = function (checked) {
  this.checked = checked;

  this.domElement.textContent = this.label;
  this.domElement.setAttribute('data-value', this.value);
  this.toggleClass('list-item--checked', checked);
}


function List (items = []) {
  Element.call(this, 'list', 'ul');

  const onItemClick = (value, checked) => {
    console.log('item has been clicked', value, checked);
    console.log('current this', this);
  }
  this.itemsElements = items.map((item) => {
    const listItem = new ListItem(item, onItemClick);
    
    listItem.renderTo(this.domElement);

    return listItem;
  });

  this.addClass('list');
}

List.prototype = Object.create(Element.prototype);

const listContainerElem = document.querySelector('#list-container');

const listElem = new List([
  {
    label: 'first',
    value: 1,
    checked: false,
  },
  {
    label: 'second',
    value: 2,
    checked: false,
  },
  {
    label: 'third',
    value: 3,
    checked: true,
  },
  {
    label: 'fourth',
    value: 4,
    checked: false,
  }
]);

listElem.renderTo(listContainerElem);

