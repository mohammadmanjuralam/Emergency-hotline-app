1. What is the difference between _getElementById, getElementsByClassName, and querySelector / querySelectorAll_?

   Answer: **getElementById is selected by id so if you want to initial it from dom you have must ensure that a unique id create for a html document. also getElementsByClassName is an Html-collection its not node collection so you can called many classes by looping. and at last time querySelector is showing first matching selector like tag name class and also id**?

2. How do you create and insert a new element into the DOM?

   Anaswer: **const Element = document.createElement("tagName") then you have to called parent element** **cause which element you want to push in this parent element by this way**
   => **const parent = document.getElementById("parent ID")**
   => **parentID.appendChild.(tagName)**

3. What is Event Bubbling and how does it work?

   Answer: **Event Bubbling is the way events bubble up from a child element to its parent elements in the DOM tree** .

   **When you trigger an event on a child element that event first happens on the child and then bubbles up through its parent to parent until it reaches the html element then stopped**
   **example: click, key up.**

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer: **Delegation is a technique of javascript cause its very useful if in dom have many parent of parent then is work so easy to add event.why its useful cause we can use only one eventListener and its performance very well**

5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: **preventDefault()** **its stopped browser default behavior and bubbling ongoing on**
**also stopPropagation** **its stopped bubbling and browser default action running**
