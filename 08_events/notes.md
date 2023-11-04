An event is a signal or notification that indicates that something has happened, such as a user's interaction with a web page, a change in the document structure, or the completion of an asynchronous operation.
"e" is often used as a variable name for the event object. and you can choose any name you prefer (e.g., "event" or "evt") to represent the event object. 

some important and mostly used events :-
let's go through each of the properties and concepts related to events with examples:

1. **Type**:
   - **Description**: The `type` property represents the type of the event, indicating what kind of event has occurred.
   - **Example**:
     ```javascript
     element.addEventListener('click', function(e) {
       console.log("Event type: " + e.type);
     });
     ```

2. **Timestamp**:
   - **Description**: The `timestamp` property provides the time when the event occurred, typically in milliseconds since the Unix epoch.
   - **Example**:
     ```javascript
     element.addEventListener('click', function(e) {
       console.log("Event timestamp: " + e.timeStamp);
     });
     ```

3. **defaultPrevented**:
   - **Description**: The `defaultPrevented` property is a boolean that indicates whether the event's default behavior has been prevented using `event.preventDefault()`.
   - **Example**:
     ```javascript
     element.addEventListener('submit', function(e) {
       e.preventDefault(); // Prevent the default form submission
       console.log("Default prevented: " + e.defaultPrevented);
     });
     ```

4. **Target**:
   - **Description**: The `target` property represents the DOM element on which the event was initially triggered.
   - **Example**:
     ```javascript
     document.getElementById('myButton').addEventListener('click', function(e) {
       console.log("Event target: " + e.target.id);
     });
     ```

5. **toElement** and **srcElement**:
   - **Description**: These properties are specific to certain types of events, indicating the element the mouse pointer is leaving (`toElement`) or the source element of the event (`srcElement`).
   - **Example**: These properties are less commonly used and may not be available for all events.

6. **currentTarget**:
   - **Description**: The `currentTarget` property represents the DOM element to which the event listener is attached. It's useful for event delegation.
   - **Example**:
     ```javascript
     document.getElementById('parentElement').addEventListener('click', function(e) {
       console.log("Current target: " + e.currentTarget.id);
     });
     ```

7. **clientX** and **clientY**:
   - **Description**: These properties provide the horizontal and vertical coordinates of the mouse pointer relative to the browser's viewport when the event occurred.
   - **Example**:
     ```javascript
     element.addEventListener('mousemove', function(e) {
       console.log("Mouse coordinates - X: " + e.clientX + ", Y: " + e.clientY);
     });
     ```

8. **screenX** and **screenY**:
   - **Description**: These properties give the horizontal and vertical coordinates of the mouse pointer relative to the screen or monitor when the event occurred.
   - **Example**:
     ```javascript
     element.addEventListener('mousemove', function(e) {
       console.log("Screen coordinates - X: " + e.screenX + ", Y: " + e.screenY);
     });
     ```

9. **altKey**, **ctrlKey**, and **shiftKey**:
   - **Description**: These properties are boolean values indicating whether the "Alt," "Ctrl," or "Shift" key was held down when the event occurred. They are often used to check for keyboard modifiers during events like keypress or click.
   - **Example**:
     ```javascript
     element.addEventListener('keydown', function(e) {
       console.log("Alt key pressed: " + e.altKey);
       console.log("Ctrl key pressed: " + e.ctrlKey);
       console.log("Shift key pressed: " + e.shiftKey);
     });
     ```

10. **keyCode**:
    - **Description**: This property is mostly used in keyboard-related events and represents the numeric code of the key that was pressed.
    - **Example**:
      ```javascript
      element.addEventListener('keydown', function(e) {
        console.log("Key code: " + e.keyCode);
      });
      ```

