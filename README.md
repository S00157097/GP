
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
  * GitHub + Git Version Control
 
<br />

---
## Program
<br />

**Feautures**

  * Build form templates
  * Structure data with a 3 branch pattern
  * Outsourced API of the data
  * Maintain and change the data

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

---
## Stakeholders
<br />

> Low Interest - Low Power
> F

> Low Interest - High Power
> D

> High Interest - Low Power
> E A

> High Interest - High Power
> B C



<br />

Stakeholder | Note 
----|----
**A** Stock Keeper | Useful to record products in the shop. - Knowing expenditure every time when new stock needs to be refilled.
**B** Website Owner | Will be able to manage his own item for his website by interfering with out program. The website owner will become independant from the developer.
**C** Web Developer | There is a need for a free sourced API for the company or personal reasons. The ease of creating one and maintaining it for those types of projects is what this program provides that user.
**D** Data Analyst | Data analysts need to be satisfied because they know how data should be structured. Learning from those people and getting their feedback on how to accomplish certain tasks.
**E** Developers | We could bring this project further or begin something new. We can get new resources and new knowledge from this project.
**F** Users Who Need Order And Lists Of Data | People who have hobbies, and they want to keep records of recipes and other things of interest. - We need to be concenred with ordinary people in order to make the program's interface simplistic.

