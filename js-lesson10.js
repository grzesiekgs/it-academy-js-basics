
function Element (name, tag) {
  this.name = name;
  this.tag = tag;
  this.domElement = document.createElement(tag);
  this.parentElement = null;
}

Element.prototype = {
  update: function () {
    console.log(`Element "${this.name}" has no update method implemented.`);
  },
  addClass: function(className) {
    this.toggleClass(className, true);
  },
  toggleClass: function (className, toggle) {
    this.domElement.classList.toggle(className, toggle);
  },
  renderTo: function (parentElement) {
    this.parentElement = parentElement;
    this.parentElement.appendChild(this.domElement);
  },
  destroy: function () {
    this.parentElement.removeChild(this.domElement);
    this.domElement = null;
  }
}

function Text (text) {
  Element.call(this, 'text', 'span');

  this.text = text;

  this.addClass('text');
  this.update(text);
}

Text.prototype = Object.create(Element.prototype);
Text.prototype.update = function (text) {
  this.text = text;
  this.domElement.textContent = text;
}
// ---------------------------------------------------- 
function Button (label, onClick) {
  Element.call(this, 'button', 'button');

  this.label = label;
  this.domElement.addEventListener('click', onClick);

  this.addClass('button');
  this.update(label);
}

Button.prototype = Object.create(Element.prototype);
Button.prototype.update = function (label) {
  this.label = label;
  this.domElement.textContent = label;
}

function Counter (initialCount) {
  Button.call(this, initialCount, () => {
    this.update(this.label + 1);
  });

  this.name = 'counter';
  this.addClass('counter');
}

Counter.prototype = Object.create(Button.prototype);

function LabeledCounter (label, initialCount) {
  Element.call(this, 'labeled-counter', 'div');

  this.count = initialCount;
  this.labelElement = new Text(label);
  this.counterElement = new Text(initialCount);
  this.buttonElement = new Button('+', () => {
    this.count++;
    this.counterElement.update(this.count);
  });

  this.addClass('labeled-counter');
  this.counterElement.addClass('labeled-counter__counter')
  this.buttonElement.addClass('labeled-counter__button');

  this.labelElement.renderTo(this.domElement);
  this.counterElement.renderTo(this.domElement);
  this.buttonElement.renderTo(this.domElement);
}

LabeledCounter.prototype = Object.create(Element.prototype);

// ----------------------------------------------------
const appElem = document.querySelector('#app');
let elements = [];

const addSomeElements = () => {
  const textElem = new Text('hello');
  const buttonElem = new Button('click me', () => {
    console.log('button clicked');
  });
  const counterElem = new Counter(5);
  const labeledCounterElem = new LabeledCounter('Current count: ', 0);

  elements.push(textElem, buttonElem, counterElem, labeledCounterElem);

  updateElementsCounter();
}

const renderElements = () => {
  elements.forEach((element) => {
    element.renderTo(appElem);
    console.log(element);
  });
}

const destroyElements = () => {
  elements.forEach((element) => {
    element.destroy();
  });

  elements = [];

  updateElementsCounter();
}

const updateElementsCounter = () => {
  counterText.update(elements.length);
}

const controlsElem = document.querySelector('#controls');
const addSomeButton = new Button('Add some elements', addSomeElements);
const renderButton = new Button('Render elements', renderElements);
const destroyButton = new Button('Destroy elements', destroyElements);
const counterText = new Text('0');

addSomeButton.renderTo(controlsElem);
renderButton.renderTo(controlsElem);
destroyButton.renderTo(controlsElem);
counterText.renderTo(controlsElem); 
