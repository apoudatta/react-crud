# Getting Started with Create React App

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

## API Doc

### 1. Get companies List

GET http://127.0.0.1:8000/api/companies

### 2. Create a New Company

POST http://127.0.0.1:8000/api/companies

Request Body (JSON):
{
"name" : "My Company",
"email" : "apou@gmail.com",
"address" : "apou",
"website" : "https://mywebsite.com"
}

### 3. Show a Single Company

GET http://127.0.0.1:8000/api/companies/3

### 4. Update a Company

```bash
PUT http://127.0.0.1:8000/api/companies/3
```

Request Body (JSON):

```bash
{
"name": "TaraExpress",
"email": "opu@mail.com",
"address": "sdf",
"website": "https://sdf"
}
```
