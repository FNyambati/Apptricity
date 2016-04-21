# Apptricity
Expense Management System using HTML5, CSS3, and AngularJS


------UPDATE AFTER FINISHING FUCTIONAL PORTIONS -------
Please pardon the styling!!! I went for a functional product and ran out of time!
I used gulp for sass styling purposes only, I could have concatnated my JS files but that was unneccessary given the small amount of JS files.


This was a great app for me to work on, it tested my abilites to manipulate data without the use of a database.


As a solution, I intergrated Local storage for keeping data in your browser and yours only. I made a simple table for new expenses, including all fields and a row of buttons to edit, delete, and marked as reimbursed. Please notice i have dummy data as a default to prevent the app from crashing which was a challenge to figure out.

When the reimbursed button is pressed, it is spliced from the expenses array and pushed to the reimbursed array. I displayed the reimbursed data in a non-editable ui-grid.



I used a angular service, called dashboardService to make all my arrays for expenses, As well as set up the functions to manipulate local storage to accomidate the data we will be parsing and passing throughout the app. Then passed in the service functions in my dashboardCtrl, allowing me to bind them to the scope and thus creating a data flow from local storage, to html.

A challenge for me was editing expenses, parsing data, and keeping everything from breaking! Finding out a way to store and save data was tough, I broke this app 3 times. (Hence the late submission ;) ) Figuring out that local storage was my solution took some research as well. Things I'll need to improve on is finding a proper way to calculate tax and filter dates in my ui-grid, those were things I failed to do. Hope it doesnt hurt my chances.

All in all I enjoyed this project, nice refresher on local storage and JSON parsing/stringifying, I hope you enjoy what i put together!
