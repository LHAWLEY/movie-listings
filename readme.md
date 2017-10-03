Konica Engineering Challenge
---

Description
---

Create an application using HTML, CSS, and Javscript (AJAX) to display currently playing movies paginated in groups of 20.

We should also be able to search movies by title.

Include the following details about the movie in the interface.
·  Title
·  Overview
·  Release Date (MM/DD/YYYY)
·  Vote Average
·  Display the poster

Use Node.js as a server-side language.

Usage
---

You do not need any external dependencies.  From the root of the directory, run:

```sh
$ open http://localhost:8080 && node server.js
```

Structure
---

The `server.js` file handles request routing and delegates to the controllers within the `./controller/` directory.  The HTML controller renders HTML files from the `./views/` directory.

Notes
---

Given the limited scope and that this was a take-home assignment, I opted for a lightweight implementation relying on jQuery.  Had this been a more formal project with larger scope or more requirements, I likely would have opted to follow more strict MVC patterns or used a client-side framework, but that seemed overkill for the task assigned.
