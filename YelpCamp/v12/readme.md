#Creating New Campgrounds
* Setup new campground POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

#Style the campgrounds page
* Add a better header/title
* make campgrounds display in a grid

#Style the Navbar and Form
* Add a navbar to all templates
* Style the new campground form

#Add Mongoose
* Install and configure mongoose
* Setup campground model
* Use campground model inside of our routes!

#Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

#Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

#Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

#Add the Comment Model!
* Make the errors go away
* Display comments on campground show page

#Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

#Style Show Page
* Add sidebar to show page
* Display comments nicely

##Auth Pt. 1 - Add User Model
* Install all packages needed for author
* Define User model

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register templates

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar
* Show/hide auth links correctly

//Version 7
##Refactor The Routes
* Use Express router to reorganize all routes

//Version 8
##User + Comments
* Associate users and comments
* Save author's name to a comment automatically

//Version 9
##Users + Campgrounds
* Prevent an unauthenicated user from creating a campground
* Save username+id to newy created campground

//Version 10
##Editing Campgrounds
* Add Method-Override
* Add Edit Route for Campgrounds
* Add Link to Edit Page
* Add Update Route
* Fix $set problem

#Authorization Part 1:  Campgrounds
* User can only edit his/her campgrounds
* User can only delete his/her campgrounds
* Hide/Show edit and delete buttons

#Editing Comments
* Add Edit route for comments
* Add Edit button
* Add Udate route
 
<!--/campgrounds/:id/edit -->
<!--/campgrounds/:id/comments/:comment_id/edit -->

##Deleting Comments
* Add Destroy route
* Add Delete button
* 
Campground Destroy Route: /campgrounds/:id
Comment Destroy Route: /campgrounds/:id/comments/:comment_id

#Authorization Part 2: Comments
* User can only edit his/her comments
* User can only delete his/her comments
* Hide/Show edit and delete buttons
* Refactor Middleware

//Version 11
#Adding in Flash!
* Demo working version
* Install and configure connect-flash
* Add bootstrap alerts to header


//Version 12 includes all the UI improvements by Ian starting with the background-slider, then 
Dynamic price Feature;

Dynamic Price Feature - YelpCamp:
Steps
Add price to campground model as a String datatype
Add price to views/campgrounds/new.ejs and views/campgrounds/edit.ejs (new and edit forms)
Add price to views/camprounds/show.ejs (campground show page)




