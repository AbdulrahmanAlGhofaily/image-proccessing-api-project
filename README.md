# Image proccessing API

### Part of Udacity: JavaScript Fullstack course

This project comes with prepared UI. Add the image name, width and height to process the image.</br>
Make sure to run the server first with the script `npm run start`.</br>
Proccessed image can be accessed in thumb file.</br>
Try these input in the UI: image name: fjord | width: 100 | height: 200</br></br>

---

## Scripts of project Back-End

To build the project and convert it from TypeScript to JavaScript, navigate to ./app and then run `npm run build`</br>

To test the project backend functionality, navigate to ./app and then run `npm run test`</br>

To start a live server for the backend, navigate to ./app and then run `npm run start`</br>

To start eslint checking, navigate to ./app and then run `npm run lint`</br></br>

To start prettier formatting, navigate to ./app and then run `npm run prettier`</br></br>

---

## Project Front-End

This UI should do the job of showing the image after resizing it, so no need to look where is the image location (You could inspect the UI and look for the img src).</br>
Make sure first to navigate to imageResezing.ts in the project files, uncomment from the line 24 to 28, and comment the line 32 to 35<br>
To view project UI (Front-End), navigate to ./public and start a live server on index.html.</br>
OR</br>
Directly nvigate to and open index.html from your file system.</br></br>

---

## Endpoint

To access the Endpoint, navigate to `localhost:3000/api/images`</br>
Queries accepted by the Endpoint are: **imageName** & **width** & **height** </br>

## Testing Enddpoints

Supertest could be used, but I prefer postman which is simpler and faster. </br>
Here is a postman link which includes the tests, try to import it to your workspace:</br></br>
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/247391a89c9e99386f57?action=collection%2Fimport)

---

### Note:

make sure to start the Back-End server when you use the Front-End. </br>
Localhost port most be **3000**
