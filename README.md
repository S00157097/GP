# DBDone Project Documentation
---
## Introduction
<br />

**People**

  * Dmitrijs Savostijanovs
  * Mihail Gromov
  * Patrick Romhanyi
  * Sean Kiernan
  
<br />

**Technologies**

  * Frontend
    * Angular.js
      * Angular Material
    * HTML
    * CSS (plain, no preprocessors)
      * Bootstrap
  * Backend
    * Node.js
      * Express.js
      * Passport.js
    * Mongoose
    * MongoDB
  * Testing
    * Jasmine
    * Karma
  * Maintenance
    * Yeoman
    * Gulp / Grunt
    * Bower & NPM
    * Git
  * ES6 (little bit)
  * GitHub
  
---
## Program
<br />

**Feautures**

  * Build form templates
  * Structure data with 3 branch pattern
  * Outsourced API of the data

<br />

**Vision**

Giving people simplistic way to store data and out source it for their own use in JSON. - Easy storage structure 
not for complex data. - It will allow easey management with easy navigation through personal raw alphanumerical data.

<br />

**Program's Description**

The program implements a system which allows the user to customize a way to store data.
Providing tools for form creation which serves are data entry. And the data is structured in a
way which is simple and allows flexability.

We see provided data as information which is only significant for the user. - Using general
decisions to differentiate the input from different types of data. This allows the user to store meaningful information.

The data structure consist of 4 main componets. Storage -> Category -> Record and a Form

<br />

  * Storage
    - It is a wapper that wraps all the categories into a unit which can be represented as a theme of data which is being stored in there.
    - e.g. Shop, Restaurant, Class Room etc.

<br />

  * Category
    - Categorises records within a *Storage*. - This allows for record seperation.
    - And it acts as another container for data same as the *Storage*.
    - e.g. Products, Staff, Sales etc.

<br />

  * Record
    - Record is an entity stored in a category representing one entry.
    - Each record consist of values assigned by the user which hold the information.
    - e.g. Clothing shop storage -> Suit category -> price, size, brand and color attributes within a record.
    
<br />

  * Form
    - Form is a template with record attributes created bu the user.
    - Using that form the user has structure for every record.
    - e.g. price : Number, size : Dropdown list, color, Dropdown list etc.

<br />