# server side API Development
## Framework
- Express JS

# API
-Application Programming Interface
-That connects your Frontend applications with Backend Server
-URL - Endpoints

## CRUD Operation
-Create
     -post method
-Read
    -get method
-Update
    -put/patch method
-Delete
     -delete method

## Design Pattern
-MVC Pattern
    - Model-View-Controller Pattern
    - Model => Database Structure/ data - mongodb
    - View +> Presentation / display - react
    - Controller => logic / Business logic - express

## Express Feature
-Routing
   - Endpoints defined on Backend Server API
      => Listens for the request
      => Responds to the client
    - RESTful services
       => 5 methods to handel request  
          -get,post, put, patch, delete
    - triggers the action based on url and method (Controller)


## MVC Flow                                ------------------------>
User ---- API Request -----> Routing ------- middleware/optional ---> controller <---> service <----> Model   -----> Real DataBase
Agent      login,post       url, method      Validation             Business logic
                                                                      ----------Respond to client   --->JSON
                                                     --------------- Response to client --------------->JSON Response

# Ecommerce
CRUD => create, read, update, delete
-Auth
    -login
    - register
    - activate
    - forget
    - reset
    - logout 
- User
     - CRUD 
- Products
      -CRUD
- Category
     -CRUD
- Brand
     -CRUD
- Orders
    -CRUD
- Payment/Transaction
