# Task API

The Task API provides a backend service that allow users to create and track task. The API is able to create the users in the database and when they are logged in they can list their tracks, create new ones or delete old ones.

It implements concepts explored in the weather-app as well as adding new ones that can be commonly found on production-ready Node projects. On this project we will use a NoSQL database, mongoDB, and we will create a rest API to perform CRUD operations with the help of Mongoose. The API will include user authentication and security concepts like password encryption and authorization tokens are implemented. File uploading to our database and sending emails to help the user with the task tracking are part of the functionality too. Aside from the functionality, we will also implement testing in our project with JEST.


The API can be tested on HEROKU where I deployed it.

## Prerequistes

As a prerequisite you will need to download and install [git](https://git-scm.com/downloads)  [Node.js](https://git-scm.com/downloads) and set up a [MongoDB] database.

## Local Installation

After you cloned the git repository, go inside the main project folder and execute the next command to install all the necessary dependencies. 

```bash
npm install
```

## Local Usage

To use the API locally you will need to create your own environment variable folder. For this create a folder named 'config' and inside there a file named 'dev.env'. Copy the next content that you will have to customize with your own data
    PORT=3000
    SENGRID_API_KEY=YourOwnSENGRIDAPIKEY
    MONGODB_URL=mongodb://127.0.0.1:27017/thenameyouwant-api-db
    JWT_SECRET=yourownrandomesentence
This environment variables are needed for the app to run completely. To use the email service you will need to register https://sendgrid.com/solutions/email-api/ and use your own email API, you can do this for free.

After you have created the file you can start the local server by running
    npm run dev

# TASK API Usage

Usage of the TASK API

## Create user

### Request

`POST /users`

    curl --location --request POST 'https://guivipom-task-manager.herokuapp.com/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name":"James33",
        "email":"guivipom12@gmail.com",
        "password": "1232222y7"
    }'

### Response

    HTTP/1.1 201 Created
    Content-Type: application/json
    {
    "user": {
        "age": 0,
        "_id": "5f7b4d2dbcea25460c7a1567",
        "name": "James33",
        "email": "guivipom12@gmail.com",
        "createdAt": "2020-10-05T16:43:25.795Z",
        "updatedAt": "2020-10-05T16:43:25.795Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdiNGQyZGJjZWEyNTQ2MGM3YTE1NjciLCJpYXQiOjE2MDE5MTYyMDV9.2SFlRnDoEGSoyPwJTbeDYjF-lTUkmUXfD_LJ5nEBJCk"
    }

## Log in user

### Request

`POST /users/login`

    curl --location --request POST 'https://guivipom-task-manager.herokuapp.com/users/login' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "email": "guivipom@gmail.com",
        "password": "1232222y7"
    }'

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json
    "user": {
        "age": 0,
        "_id": "5f7b58967080d700172ff328",
        "name": "James33",
        "email": "guivipom@gmail.com",
        "createdAt": "2020-10-05T17:32:06.986Z",
        "updatedAt": "2020-10-05T17:32:07.117Z",
        "__v": 1
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdiNTg5NjcwODBkNzAwMTcyZmYzMjgiLCJpYXQiOjE2MDE5MTkxMzd9.hUQIHFp9Q6DuDsLsNgQfudMZyV-KXs-LuCVfIweQOO0"

## License
[MIT](https://choosealicense.com/licenses/mit/)






    unicorn -p 7000

## Run the tests

    ./run-tests.sh

# REST API

The REST API to the example app is described below.

## Get list of Things

### Request

`GET /thing/`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Create a new Thing

### Request

`POST /thing/`

    curl -i -H 'Accept: application/json' -d 'name=Foo&status=new' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {"id":1,"name":"Foo","status":"new"}

## Get a specific Thing

### Request

`GET /thing/id`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 36

    {"id":1,"name":"Foo","status":"new"}

## Create user

### Request

`POST /users`

    curl --location --request POST 'https://guivipom-task-manager.herokuapp.com/users' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "name":"James33",
        "email":"guivipom12@gmail.com",
        "password": "1232222y7"
    }'

### Response

    HTTP/1.1 201 Created
    Status: 201 OK
    Content-Type: application/json
    {
    "user": {
        "age": 0,
        "_id": "5f7b4d2dbcea25460c7a1567",
        "name": "James33",
        "email": "guivipom12@gmail.com",
        "createdAt": "2020-10-05T16:43:25.795Z",
        "updatedAt": "2020-10-05T16:43:25.795Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjdiNGQyZGJjZWEyNTQ2MGM3YTE1NjciLCJpYXQiOjE2MDE5MTYyMDV9.2SFlRnDoEGSoyPwJTbeDYjF-lTUkmUXfD_LJ5nEBJCk"
    }

## License
[MIT](https://choosealicense.com/licenses/mit/)








