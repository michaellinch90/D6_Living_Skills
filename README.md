# D6_Living_Skills

Aimed to be used as a tool for teen to adult special education, this grocery list is the first step of many in creating an interactive life skills program. The user will be able to make a groccery list including the item, category and estimation.  

#### The Interface

The user will need to log in using a google account to view the grocery list

![Home Page](/screenshots/home.png)

The user will click on grocery list 

![Logged In](/screenshots/index.png)

The grocery list will populate with any items stored in the Database

![Grocery List](/screenshots/list.png)

If user selects edit they will be taked to another page to edit the item

![Edit Screen](/screenshots/edit.png)

After submitting the edit the user will be redirected back to the grocery list, showing the edit

![Updated Item](/screenshots/update.png)

If user selects that "yes" we have an item it will be deleted

![Deleted Item](/screenshots/deleted.png)

If user clicks log out the will be logged out and redirected back to the home page unable to edit or delete items

![Logged Out](/screenshots/home.png)



#### Technologies Used

- Mongoose
- Express
- Node
- EJS
- MongoDB
- Passport
- Google People API

#### Approach

Intially and eventually this app will be much more than it is today, but here was my approach:

- I made a wireframe and ERD for a very large interactive application
- After cutting out a lot of the original plan I focused on the CRUD methods in the grocery list
- Added methods, functions and EJS for Create, Read, Update and Delete
- Used Google People API for user log ins
- Added authorizations for certain features

#### Wins

Completing the assignment. This was a challenge to say the least and to have a working application at the end of the week is my win. The PUT method to update my items was the a major win for me. 

#### Hurdles

- My initial hurdle was having been too ambitious with my original idea.  

- What became my largest hurdle was the update ability. This method took almost 2 days and help from peers and instructors to figure out. 

#### Future Features 

- Bank Account
- Deposit Checks
- Ability to interact between the pages 
- Bill pay section
- Pay other users

![D6 Living](/screenshots/D6.png)


#### [Get Started Now](https://d6-project.herokuapp.com/)