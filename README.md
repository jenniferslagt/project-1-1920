## App: digitale leeromgeving die helpt bij het zoeken van bronnen.
![Schermafbeelding 2020-03-06 om 11 44 17](https://user-images.githubusercontent.com/45489420/76076821-e387fb80-5f9f-11ea-96e6-29a20189f721.png)
[Bekijk hier de website]( https://jenniferslagt.github.io/project-1-1920/)

## Description
I made an application in collaboration with the OBA (openbare bibliotheek Amsterdam). 

In this application I offer young pupils to search for the right sources (most of them are books) for their school assignments. I used the OBA API to get the data. 

I also made the application as a kind of card game. So every card is a source, for example a book. You can increase your score by saving a book. In this way I am trying to make the UX stronger for the target audience. Besides,  every game has a goal. This goal of this 'game' is to collect sources. 

## The OBA API
I used the oba API to get the right data for my application. First of all, I fetched the API.

Then I changed this data to json data which make it more readable for me. If the user is looking for specific data, the data can be manipulated by looking to the details or by  using filters. Then I render this data on the HTML elements.

Unfortunately there's a limit on the requests. If you do to many requests, it stops requesting data. To solve this problem I added a Javascript file in which I saved data about dogs. So in this prototype you can only search for dogs for now.

## Used data
I used different data for each section. For the main section I used the images, titles and summaries. For the detail section I used the titles, summaries, genres, authors, year of edition and the ISBN of a source.

## What if I had more time? 
If I had more time, I will:
- defenitely add more states to make it more like a game. What happens when a user achieved his goal? Maybe all the cards on the screen are going to 'dance' with a cool animation. 
- add more events to make the application alive. 
- improve my code and make it more clean. 
- add more filters.
- add a button which shows the user a section where the game is explained.

## Sources
I used this sources during the process: <br>

## Credits
I would like to thank the OBA, the extra "help students" and my fellow students for helping me to accomplish my goals during this process.

<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- replace the code in the /docs folder with your own, so you can showcase your work with GitHub Pages 🌍 -->

<!-- Add a nice poster image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
