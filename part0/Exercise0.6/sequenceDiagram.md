# Sequence Diagram for Single page Example App

 a diagram depicting the situation where the user creates a new note using the single-page version of the app.

 ```mermaid
 sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note Left of server: The server receives the POST request and creates a new note object and add it to the data.json. 

    Note Left of server: The page doesn't relode like traditional one. It just renders the notes

    Note Left of server: spa.js has the function to handle the submitting the form data so form tag doesn't have action instead it is handled by js

    Note right of browser: The browser executes the callback function that renders the notes
 ```