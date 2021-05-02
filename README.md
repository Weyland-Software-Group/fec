# Project Catwalk
Project Catwalk is a project by the Weyland Software Group to take a set of data from an API and render it onto a beautiful product page.

## Deploying the Project
In order to launch the page the following commands must be run after the repository has been cloned to your local system:
   - npm install
   - npm start
Additionally a GitHub API Key is required to be placed in the Server folder. Please see config.example.js, for assistance with formatting.

In order for this project page to work correctly you must have port 3000 available. Additionally to view a product page you must visit a product endpoint, for example: /products/:product_id. The website will only work on product endpoints, visiting / will not yield any results.

## API Capabilities
The page also has many API Capabilities, including the options to:

  - GET: Request product overview information: /api/overview/:product_id
  - GET: Request product reviews information: /api/reviews/:product_id
  - GET: Request product question & answer information: /api/qa/:product_id
  - GET: Request product related information: /api/related/:product_id
  - POST: Request information about an outfit: /outfit. Data should be sent as an array of Product ID's.
  
  ## Page Capabilities
 The page employs four main components:
 
  - Overview - This is where a user can view the different styles, images, and sizes for a product, and has the ability to add the product to his or her cart as well as to add it to his or her outfit.
  - Reviews - In this section a user is able to view the reviews for a product, and is also able to post their own reviews, with Image Uploads supported.
  - Question & Answer - Here a user is able to view previously asked questions, along with corresponding answers for each question. Additionally, the user has the ability to add their own question or answer.
  - Related - This portion of the page displays items related to the current item, as well as the option to compare the current item to one of the related items. Additionally the user has the option to stylize and view their outfit, with the ability to add or remove from their outfit.

## Page Features
The page has the option to toggle a Dark Mode at the Top by Pressing the 'Color Mode' Button, pressing the button once will toggle on the Dark Mode, and pressing the button again will untoggle Dark Mode.
