# Pw

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Types of angular event listener or Angular events list
In the above example, we have learned the Angular click event. In native HTML or in Angular we have plenty numbers of options to add Angular event listener. Here we have listed some of the most popular and common Angular event listeners in Angular.

Event name	Description
(click)	The click event occurs when an element is clicked.
(change)	The change event is triggered when change occurs on the binding elements, like select, Textarea, input, and other elements.
(dblclick)	The double-click event occurs when an element is clicked two times.
(blur)	The blur event fires when an element has lost focus. 
(submit)	The submit event fire when clicking on the button or inputting with type submit.
(focus)	The focus event fires when an element has received focus
(scroll)	The scroll event fires when the document view has been scrolled.
(keyup)	When a user presses and releases a key, an event occurs and is mostly used with input fields. It is one of the keyboard events.
(keydown)	The keydown event is fired when a key is pressed. It is one of the keyboard events.
(keypress)	 The keypress event is fired when a key that produces a character value is pressed down. It is one of the keyboard events.
(mousedown)	The mousedown event is fired at an Element when a pointing device button is pressed while the pointer is inside the element and is a mouse event.
(mouseup)	The mouseup event occurs when a user releases a mouse button over an element and is a mouse event.
(mouseenter)	The mouseenter event occurs when the mouse pointer is moved onto an element and is a mouse event.
(mouseleave)	The mouseleave event occurs when the mouse pointer is moved out of an element and is a mouse event.
(mousemove)	The mousemove event occurs when the pointer is moving while it is over an element and is a mouse event.
(mouseover)	The mouseover event occurs when the mouse pointer is over the selected element and is a mouse event.
(mouseup)	The mouseup event occurs when a user releases a mouse button over an element and is a mouse event. 
(copy)	The copy event occurs when the user copies the content of an element. 
(paste)	The past event occurs when the user pastes the content of an element. 
(cut)	The cut event occurs when the user cuts the content of an element. 
(drag)	The drag event occurs when an element or text selection is being dragged
(drop)	The drop event occurs when dragged data is dropped.
(dragover)	The dragover event occurs when a draggable element or text selection is being dragged over a valid drop target. 
(input)	The input event occurs when an element gets user input.

Example:

<some-element (eventName)="expression">
  Invoke someMethod on some event
</some-element>

<some-element (eventName)="someMethod()">
  Invoke someMethod
</some-element>

<some-element (eventName)="someMethod(parameter1, parameter2)">
  Invoke someMethod with parameters
</some-element>

// Example
<button (click)="update()">Submit</button>