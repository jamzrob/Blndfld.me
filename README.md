# Blndfld.me
Built for Vandy iv

## What's the move? Let us show you.

## Inspiration

We have all been there: you are with a group of friends and the group cannot come to a consensus on what to do. Johnny wants to get Chinese food, but Susie had Chinese food last night. We solve this problem in this efficient, effective, and extravagant way possible. We blindfold you and take you on the journey of your lives. With a modern life filled with schedules upon to-do list, **blndfld.me** adds that sense spontaneity and surprise which we all know and love. Whether you are exploring a new city or looking for the next local favorite, **blndfld.me** will guide on the journey of a lifetime. No scheduling, no planning, let us take care of all the hardwork. 

## What it does 

**blndfld.me** allows you to enter in a price range, a starting time, and what you are looking for, and we will customize your evening. We book you ubers to your next destination, but we don't tell you where you are going. We show you your schedule for the night and show you the type of activity you will be going on along with the timeframe for the activity. After the activity is done, you click next to go to the next activity and the fun continues...

Our application is cross-platform, cloud-integrated, and can be used on any system with a web browser. By logging into uber, the application will automatically charge you for your rides and call the Uber drive to your current location, and send you on your planned adventure. You won't know where you are going, but the entire application is built upon the journey.

## How we built it

This application integrates Uber's API to handle the calling of rides to go to different places and the **Google Place**'s API to intelligently plan a schedule for the user of the app to go. The schedule which we design was built upon the keyword which the user's types in, the price range, the radius of things in the user's vicinity, and the starting time. We called the Uber rides incorporating Uber's sandbox for testing but eventually, we tested out our application calling real Ubers to the user's location and testing the implementation for planned events out. The application calculates and displays the current wait time for the Uber based on the user's current location. We built this app using express.js to serve the required HTML, CSS, and JS files. Since our application was built as a web application with a mobile implementation guided design our application works across iOS, Android, and any other operating system with an internet browser. We used Bootstrap to handle the cross-platform implementation of designs and incorporated frameworks like font-awesome for our logos.  

## Challenges ran into

All of us had little to no experience with javascript and ran into many errors trying to implement our program using this language for the first time. We encountered a lot of difficulties as well in implementing the APIs. A major issue we ran into while using JavaScript was incorporating asynchronous functions into our program in order to use the Google Place's API.

started off building the application as a static site but ran into several issues trying to incorporate the API's using this method, so we switched the entire program to express.js, running everything on a client-side server. 

## Accomplishments that we're proud of

We focused a lot on the design of the application and are very happy with the way the entire application looks both on a mobile and web platform. We are also very proud of our incorporating the Uber API and Google Place API since we ran into a lot of issues troubleshooting these issues. As well, our applications return very accurate results from a given search and will direct you to locations based upon the search. The application will also come up with unique events and venues for every new search which is a feature that was hard to implement, but extremely useful for the app.

## What we learned

Starting off this app, we all had very little experience programming in JavaScript and handling the incorporation of APIs into our apps. From this experience, we have all gained the knowledge of how to use JavaScript and use multiple APIs in applications. As well, we have gained valuable skills in implementing CSS designs and running a website on the cloud-based platform. When we started our application, we had a very distinct plan and schedule for the timeline of events, but we ran into unexpected problems throughout the process and continually updated our timeline. Our fundamental design that we incorporated though stayed relatively uniform and everyone on the team was guided by the same vision. 

## What's next for _Blndfld.me_

We could easily monetize our system by sending our users on promoted journies and have some businesses favored over others in our sorting algorithm of planning the night. As well, we would like to incorporate more preferences into the user's events and allow the user to split the cost of the uber rides with multiple people. We could also add accounts to our system so that way people could save their past preferences and use them to guide future trips and journeys. Everyone on our team wants to continue working on the application and can foresee implementing more features on this application and will definitely be promoting our final product. We did not get the chance to experience a Blndfld.me travel experience and are looking forward to doing this in the future. 


## Reviews

_Really cool_
-Steve

_All About It_
-Kel

_I would use this_
-Meghan

_This is the future of going out_
-Nate

_I can totally see my parents using this app_
-Gabe

https://docs.google.com/presentation/d/1GWvBYrYc0HLOJUflKSUWr-nySYeuBOJQXALQsqWv7NY/edit?usp=sharing
