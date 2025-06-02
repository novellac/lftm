# App & Tutorial Ideas

💡🎉 **60+ ideas so far (as of 2020.10.25)!**

Levels:
Beginner: You need CSS and HTML, and some Javascript
Intermediate: You need to consume an API
Advanced: You need to set up a backend, you need authentication

Contrib:

I could make the original blog, and people could contribute different "process/tech stack ideas" - like I'd say oh you could make this with Vue and firebase, and someone else could contribute an entirely different way of making it.
Other people could also contribute extra features (or, if I felt the feature made the idea different enough, I could encourage the person to submit a PR for an entirely different idea).

Fields:
Title (text)

Idea (textarea)

Extra features (array of textareas)

Tech stack (array of tags)

Variations (array of links to other ideas) (maybe this could be phase 2)

Experience level (select list)

Links to people who have done this project (ppl should make a PR for this, since I want to vet them first)

Youtube sleep timer

- [ ]  Project Idea: Dino CV. Rebuild the Google Chrome dinosaur game, but instead of jumping over the cacti, you gotta jump and touch little facts about me. Like I can
- What about a tutorial that teaches you how to add your friends/colleagues to a timeline map of the world.
- Project idea: Make an interactive self-care bingo like [this one](http://www.glendathegood.com/inspire/fallSelfCare.html). For stretch goals, the user could choose what items to have on the bingo sheet, and then the items would be shuffled before being put on the list. Another stretch goal would be than when a user checks off an item, it shows a puzzle piece of a beautiful image. When bingo blackout is achieved, the user will see the full image. a11y piece of this would be to have proper alt tags for each piece of the puzzle, and when the final piece is achieved, then they get the full image with the full image's alt text (this alt text would be different). Could I use this to learn about localstorage? So that if someone came here, the state of the board would persist until their either hit a “clear” button or they cleared their cache.
- What about a Twilio tutorial/project where you can text a phone number with the name of a food item, and it will tell you if it's compostable or not. It would need to do a fuzzy search in case people spell things incorrectly, and it would need to have a way to ping the developers with the most recent searches (esp failures, if the algo couldn't figure out whether or not the item was compostable). It would return "Compostable in personal or commercial bins!", "Compostable only in commercial bins!", "Nope, not compostable!", and "Ouch, I don't know if that is compostable! Text yes if you would like us to tell you once a human figures that out for you!". Maybe you could also text something like, "What's compostable?" and it would send you back a list of things or categories of things which are compostable. Extended feature (with precautions): Text a picture of an item, and the project would do an image search for what the picture is, and then it would tell you whether it's compostable. Precautions: Users would probably need to sign a CoC. Questions: What would you do if people texted profanity or sent nasty pics?
- An app or CLI app where you put in a meat (or veg) and you get a list of possible spices that go well with it. I'm not sure there are such API for this you might have to make it, or might have to get a recipe API and connect it that way.
- What about a site that lets you schedule your last post, then shuts the account down. Would be good in the case of death (it's morbid but hey it's also covid time). Call it lastwords.io or smth.
- What about a webapp that lets you create a page with how likely you are to show up to a meeting if it’s scheduled during X time. The person would input a name to make the address url, then would input the likelihood that they’d show up for each hour.
    - The technical challenge we’re demonstrating could be that you can’t have overlapping times. So the logic governing an “all day” choice would also spartially govern the choices applied to individual hours.
    - Idea for a lower threshold would be not to create an URL for an individual person, but to create a URL based on the choices.
- What about a webapp that asks the questions from the Hallmark movie maker below, then creates a movie poster in SVG! (see [Pandemic Hallmark Romcom Synopsis](https://www.notion.so/Pandemic-Hallmark-Romcom-Synopsis-bdc5a9b5479346e58e8aaae2df8e46c0?pvs=21))
- What about a meeting scheduler that overlaps with a day/night map of the world, so you can visually see if it would still be dark/light when the meeting starts. So like you pick a time and a time zone (maybe on a slider), then you see the world map with the dark/light status at that time.
- Tutorial idea: an accessible flashcard app. Can use the cpacc study guide as flash card question set.
- Quiz idea to put on my website - give a series of questions which will lead one to choose from `role="dialog"`, `role="alertdialog"`, or `role="alert"`. Include canonical links to MDN documentation, as well as caveats that not all cases blah blah. Maybe consult with Meg?
- Chrome extension idea: A chrome extension that, when you are on a [github.com](http://github.com) page, you will see the stats from [githubstatus.com](http://githubstatus.com) - it could just be a little "all good" tag if everything is green, or list out the outage areas and their severities.
- App/tutorial idea: Make a random candle scent creator. It could combine certain types of words, and put the words on an SVG with a randomly chosen color gradient, and a waving flame. Maybe downloadable as a gif or smth! (Unnecessary use of LLM - type in the vibe and ask it to generate a candle scent and gradients)
- Project idea: Pet awards. Technologies used: auth, petfinder api, social apis. Concepts: tagging, pages, leaderboards, sharing to social media, auth. Users can log in and assign "awards" to pets. Users can see a leaderboard (anon users should be able to see a leaderboard too, but this should look different and function as a dashboard if a user is logged in.). They can assign an award tag to a pet, and flip to the next pet. For an individual pet, they can share a post to social media that reads something like, "I definitely give {name} the award { awardName }. Come give pets awards and help find their forever homes! { link }" For the leaderboard, a user can share something like "It's official { name } is { award }. Share to find this floofer their forever home! {link}" There should also be a link to find more about adopting that specific pet.
- API idea: Who's birthday is coming up?
    - API returns: object with name, (age maybe), birthday, message
    - Resources:
    1. Date API
    2. Database with two tables - one table with people's name, age, and birthdays, have a database table with messages of "coming up" and "happy birthday."
    - Steps:
    1. Get today's date
    2. Go through db rows, compare dates
    3. Find the row with the next birthday
    4. If someone has a birthday today, return their name, age, and message.
    5. Else, count days until the next birthday and return all.
- Project idea: Make a restaurant menu app, but make it in the style of a multi part quiz. Always provide a "just show me the menu" button.
- Portfolio idea: Make a bunch of fake book covers (perhaps modeled after actual books) which advertise you and your skills. Could demonstrate knowledge of CSS Grid. For added fun, make it flippable, so users can see a summary of that skill on the "back" of the book.
- Project idea: Find an API for many restaurant menus. Make a quiz app that will tell you which restaurant to order. Make the questions unique and fun.
- Project idea: Find the "real" natural age of your dog, according to [this research](https://www.nytimes.com/2020/11/09/science/dogs-aging-behavior.html)! (Hint - it's NOT age * 7!!!) It's natural log ("ln") times 16 plus 31. So the project would take an integer, find the natural log, multiply by 16, then add 31. Then show result and ask if the user would like to go again.
- App/Plugin idea: Recreate this spinner from Overstock
    
    [Screen Recording 2020-12-31 at 6.31.36 PM.mov](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3987f2b4-7158-4425-80cf-5eedd6d820ee/Screen_Recording_2020-12-31_at_6.31.36_PM.mov)
    
- Browser extension idea: What about a calculator that shows in the screen (and is draggable around the screen). You click on (or highlight) some numbers anywhere on the page, and they populate the number area of the calculator. You can then (on the calculator interface) click the button of the action you want to do (multiply, add, etc), and highlight/click some more numbers on the page.
- Electron app idea - an app that you can use for stretching while you watch tv. It will pop up every x minutes and tell you the next stretch to do. It should give you 30seconds to get to your movie.
- Browser extension idea - same as the stretching electron app, but in your browser.
- Stretch for One Episode (maybe call it "One Ep Stretch) - Web project idea - just a website that goes through x minutes of stretches. Every x minutes, a new stretch pop up with a new audio notification (a ding, then the announcer telling the next stretch).
    - Advanced features:
        - Choose your stretches from a gallery of stretches
        - Multilingual
        - Sign in and keep track of how many days you have stretched, your stretch routines, etc.
        - Choose a group of stretches from a gallery of "episodes"
        - Let users upload their own stretches (assets: picture, audio)
        - Intro page with videos of each stretch
        - Videos/gifs on the stretch pages
    - Questions
        - Are each stretch on their own page?
        - If each stretch is its own component, or the component is re-initialized, how do we make sure that these things can be lazy loaded?
- Project idea: Star formation a day - you can sign up to receive daily alerts (via email, SMS - use Twilio?) about a star formation every day (or every x days). The star formations should show an image of the formation, its name, and any associated myths about it. Use myths from all over the world. Users should be able to unsubscribe via web or SMS at any time. Extra features: users can optionally enter their zip code when signing up, and their star formation alerts will prioritize star formations they can see right now in their night sky.
- Project idea: Scan the repo of some framework's documentation, and make a glossary (with defs!) of the top x number of words.
- Project idea: Matching game - match pet images from Petfinder with their names (which you should also be able to pull from the PetFinder API).
- Audio + visual matching game - this could just be a really accessible matching game, with different audio cues for each image set.
- Audio matching game - pull a few seconds of audio from some API (bandcamp?) and use that as the card. Note this wouldn’t be accessible to deaf and HoH so may need to have visuals toggleable, or just warn users in advance.
- Site idea: Heart Glossary - Just a one page site with a grid of emoji hearts. When you click once, you see the meaning of the heart in a box at the top of the page. When you click twice, it will copy the heart.
- Site idea: Use the pet API to vote for what should be the name of a pet.(would need a strong CoC and a reporting function for inappropriate names)
- App idea: Boy Band Builder - answer questions about your musical preferences, then pull matching artists from a Spotify API.
- Pi Idea: put a monitor behind your mirror and put a picture of a paint by number style picture for your makeup. So you would line your face up with the picture, put the makeup in the right places, and then you could look in a clean part of the mirror to ensure you were putting the makeup on correctly. This would work even better with eyebrows.
- App idea: grocery shopping list which organizes itself by probable store section. Items could take more than one section tag, and would appear in the list multiple times, but would all be checked off as soon as the item was checked off in one place. Thanks to Ben who wanted a grocery list app that organized things by section.
- App idea: Affirmation alarm - wake with a daily affirmation
- App idea: Fave quotes app that lets you keep quotes from books you like. You would either look up
- CLI idea: you can type in npm commands and it will run yarn under the hood 😆
- App idea: tap a particular rhythm on your phone and it will send a text message (or some other kind of message you have access to) to a phone number(s).
- App idea: sync your notion todos with your pomodoros - you go to the app, you import a page from notion, and it will get all of the todos off that notion page. It will create a set of pomodoros. Extra feature: You can edit and organize the todos from the pomodoro app. Extra feature: It will tick off the todos as you complete the pomodoro.
Suggested stack: FE JS Framework (for the pomo app), HTML, CSS, web scraper (because alas there appears to be no Notion API)
Level: Intermediate-Advanced (you have to do web scraping)
- Site/App idea: you put in a name and it checks tw, insta, domains, etc to see if it's available on all
- App/Event idea: Socially distanced concerts. There would be a main musical feature act, and ppl could sign in to the app to watch. Ppl could have their cameras on, and could be dancing or whatnot with the music. At the free tier, the app would mostly show the band, but would randomly focus on audience participants who have shared that they want to be featured. At a paying tier, the amount of time spent on the band and individual guests can be manipulated by ppl with "producer" roles, who would see the video streams of all participants who have flagged that they wish to be featured, and who could then set lengths of time to focus randomly, and could interrupt it by manually switching to one participant or another.
- App idea: Socially distanced relay race. You bike or run or whatever with your phone, and when you get within a 12feet (no more no less) of a relay group member, you will be able to press a button to toss the baton. At that point another relay group member can press a button to pick up the baton. Your bike or run will be mapped, and you will each be assigned different colors. There would be a sharing function where you can share the outline of your map (anonymized as possible if you like, and def by default). There would also be community leaderboards where you could compete in different categories with other teams, and even challenge other teams to competitions to see how fast your team can relay a certain distance.
- Project idea: "ToDid" - a slight variation on the classic todo app, which encourages you to add things you've already done in addition to things you've yet to do. Extra feature - allow user to create their own groupings, and to choose an icon for each group, so that you can choose to tick off the todo item to send it to "done" group, or to click garbage to send it to "trash" group, or click zz icon to send it to "tomorrow" group, etc.
- Project idea: Make a contactless payment app for a carwash. It will have a user account where they can add money, then it will have a "library" of cards with the levels of wash on them. Each of these cards should have a QR code that scans and will (eventually) take some money out of the account according to the amount shown on the card.
- Small project idea: Do the MDN "Active Learning" section of [this article on responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images), but for each size breakpoint, use a picture of an animal using that size device (eg laptop, tablet, and phone).
- Project idea: "Give a dog a bow" - find all the images on PetFinder where an animal is wearing clothes.
- Project idea: DEV-orak! Figure out what the most used keys are in a codebase. Reorder the keys on a keyboard so that the most used keys are nearest to your fingers.
- Project idea: Make a ballot helper for yourself - maybe turns out like some tabs with office, and then each tab has columns for the candidates and then each row is notes about your candidate's position on that issue.
    - ID the offices that are on your ballot
    - ID the candidates running
    - ID several questions that are important to you
- [x]  Project idea: Order Up! "Soup" up your ToDo list by making it into a restaurant order form! Optional features - a nice looking menu, the ability to drag and drop to arrange the items in your order. Base features - a static list of items you can click to add to your Order, a "customize" button to add a note to the item you've selected, a
- Project idea: UM counter - An app that takes a recording and counts the number of times you say "umm"
- App idea: open-source CSA manager. The CSA could search a database of existing produce, or contribute their own. One produce page would have information such as a picture of the produce, links to *pedia, links to recipes, storage instructions, flavour profile, and maybe a wine pairing. Then each shipment the CSA manager would go in and choose the produce they'll be likely sending that shipment (they should be able to save collections of shipments in case of repeat, and they should be able to duplicate and then edit shipment, since many shipments are similar). The consumer would be able to open the app and see the library of produce that is coming this shipment, and get the info about each kind of produce.
    - Add on feature - the user can send a message about this shipment to the CSA manager, and can tell the CSA manager that they want more of/less of some kind of produce, submit photos or recipes, etc.
    - Add on feature - Reverse image search - consumer snaps a photo of some produce, and it does a reverse image search on the database of produce. It will then pull up a page with that produce (as described in the main a, when this produce has been included in a shipment before, and all the other info about it.
- What if there was a wine pairing app for VEGGIES (instead of meat/wine, like I usually see)
- Project idea: Let a user import an image and choose a number of puzzle pieces. Use some technology to cut the image into x number of pieces and shuffle the pieces. User should be able to drag the pieces and place them (or at least click on the pieces and order them in a grid). Allow user to share the puzzle via URL (in whatever state it is in). Definitely have a CoC and a ToS to warn ppl to use images that they own, which are not istey.
- App idea: Where's Friendo? What if you could choose from a bunch of photos of people (using maybe your google photos API), or maybe dogs (using petfinder API), and a collage would be generated, and one of the people/dogs would have a where's waldo hat on?
- Project idea: build an app to take a bunch of pictures from your google photos (or apple photos, etc). Choose one cover photo. App will generate one of those photos made up of photos with different colors.
- Project idea: what about a "plant parent" app that lets you search for the types of plants you have, then helps you set a watering schedule. Then when its' a watering day, you get a notification with a reminder that has an emoji of that plant. And/or, it could integrate with your calendar, send you a text, or an email. Extra features: It could remind you to take a picture and take notes about how your plant is growing. As you build up a stock of photos, it could do a movie thing so you can see your plant growing.
- Project idea: Shareable MASH game
- Project Idea: "Lizzoclock" - Take a dance break every hour to a random lizzo song. Set the hours between which you want dance breaks, and make the app run in the background.
- Project idea: input foods you have on hand, and get recipes that feature those ingredients
- Create an app or API to recommend an herbal tea based on mood, time of day, and flavour preferences
- Project idea: Bouquet builder - pick flowers of different kinds to visually build a bouquet, and get an output of what each of those flowers means.
- Project idea: Blossom Encoder - build a message based on the meanings of flowers, and then use it to shop for a bouquet of flowers.
- Tutorial idea: Copy Dominoes (?) pizza builder, but maybe with poke or boba tea. Get pictures of toppings, and they should all fit onto a picture of a base ingredient. Optionally, you could assign prices to add-ons (jellies instead of tapioca), and calculate a total price for the boba.
- Tutorial idea: write a program to calculate who will be asked to review a pull request (base this on what we actually use at work)
- App idea: a yarn/npm translator. You type in any npm or yarn command, flags included, and it will give you the command you can use in the other. At its simplest, it could be something that just swaps these commands in [this cheatsheet](https://gist.github.com/jonlabelle/c082700c1c249d986faecbd5abf7d65b).
- Tutorial idea: Alignment Ipsum - Generate six titles and descriptions
- Tutorial idea: semi/pseudo-randomized alignment chart
It would use grid for the grid, flickr api for photos, and some thesaurus api for the words
- App Idea: Coffee Club
Thinking of companies getting rid of their office spaces right now, but enjoying the coffee subscriptions. What if there were an app kind of like elf app (I forget the actual name of the app) where you choose a coffee purveyor, pay a monthly (or x interval) fee, and invite users to a "coffee club." The users put in their postal addresses, and then each month (or at x interval), one user (or some number of users) receive a bag of coffee. It's just a coffee subscription, but where the organizer doesn't have to handle postal addresses.
- Tutorial idea - make a reading progress bar for your website
- Not my idea, but a great idea for a tutorial: https://codepen.io/RominaMartin/full/OJVdvRm
- What about a pomodoro app that shows 5-minute stretching videos/instructions (or 15-minute vids, depending on the rest timer)?
- [x]  App that lets you do a shared pomodoro timer? Like you'd get a random link (or customizable if you pay maybe?), and then anyone with the link can see and control the timer. Maybe if there are accounts, then you can see who has joined the timer.
- This has been done but it looks like a great thing to write a tutorial for: https://isitaweekday.com/
- A "checkin generator" would be a fun little forms app to make. You could choose or override the choices above (or some preset options), and it would create a form and/or an image.
- Instead of (or in addition to) your portfolio's "About Me" page, why not do a "2 Truths and a Lie" page? It would be an interactive little mini project you could incorporate into your portfolio, and sort of gamify your about page. To do it, you'd make a list of true things about you (tagged with "truth"), as well as a list of lies (tagged with "lie"). On your main page, you'd show three cards, each with "truth / lie" buttons. For fun, there could be images of yourself or whatnot on the card. The user would then pick truth or lie, and the card would flip, revealing the answer, and some more context. Once the user had chosen a combination wherein the remaining cards could only have one answer, those cards would automatically flip over. For each correct answer the user gets, add it to their score. When all the cards have flipped over, present user with their score and the choice to continue playing. To simplify it, you could only have the three random cards (2 truth, 1 lie), and the option to see another set of cards. Also, the facts need not be about you, they could just be about anything (they're just strings).
- Pomodoro timer that pauses your youtube video (or other music).
- Playlist + Pomodoro that pauses playlist. "Playdoro" or "Pomoplaylist" :D
- Online scavenger hunt maker - Creator creates a number of slides. Each slide has a hint, and answer, and a url slug. Player reads one slide, finds the answer somewhere on the net, then puts the answer into the answer field. If the answer is correct (maybe check through regex), the next url link is generated. They click the next url link and are taken to the next slide, where they do another challenge, enter the answer, etc. At the end of the scavenger hunt, idk what happens. Maybe they get a prize, or just a badge or certificate, or they just see a cool animation.
- One app idea I had is sort of a reminder app. The user creates reminders with title/time/date/repetition. At the chosen time, the user receives a sound alert. On the screen it will give you the reminder (e.g., "Walk the dog!" or "Go work out!"), as well as an "incentive" (such as the first part of a joke or interesting fact). Once the user indicates that she has completed the activity, it will both log activity completion (there could be a screen with a table of the completed activities, dates, etc), and it will show the user the "reward" (the punchline of the joke, the second part of the interesting fact, etc). There should also be a screen where the user can tick boxes as to which kinds of incentives (jokes, new phrases in a chosen language, inspirational quotes, interesting facts, etc.) she prefers. The screen could allow the user to drag the chosen incentives into a list and then rank that list.
- App idea (maybe it already exists). A grocery list where you begin typing
things in to the list, and it gives you a bunch of choices of very
specific names and pictures. So that partners who are non grocery
shoppers can go and get exactly what you want.
- Also, on the topic of grocery shopping, it would be nice to be able to create a grocery list from just one store. Like, if there is an app that you
can select a grocery store or chain, and then everything you type on the list would be matched up with things the store has.
- What if there was an app geared toward college students (or learners of some sort) that helped you decide what courses to take by showing you which jobs you would be more qualified for? The first part of the app it would be basically just like a jobs site profile. You'd fill in any degrees, work experience, certificates, and other skills you already have, as well as the major you are thinking of going for. Then, as you go through your degree course (assuming a college student user here), you would input the name of the couse. The keywords input in the course title, plus the level of degree (bachelors, masters) would result in a changing list of potential jobs to apply for. It could use an API like glassdoor, though I'm not sure if that's robust enough.
- What about a dog park app? Its main functions would be to map and rate dog parks, and allowing users to accumulate "points" when they check in at a dog park. Local pet stores could partner with the app to accept the points in exchange for some type of discount or coupon. Another function might be to allow users to propose and vote on locations that would be nice for a new dog park. As always, I'm not sure if this exists already, but it might be fun to make!
- What if there were a platform that allowed renters, or people who might want to rent a place, to take a battery of personality tests, then get
recommendations on who they should live with and where they should live.
The platform would essentially recommend groups of ppl to live together,
and give them tailored results of rental places. Money would probably
come from the landlord end, where (maybe) they'd pay a subscription fee
to show up in the listings, and (maybe) they'd pay a fee for analytics
reports which would tell them what kind of renters they're popular with
(eg, cat lovers ages 29-35).
This might work really well in a University setting, where lots of students who don't know each other would take the personality tests, and then they'd get matched up with people they might not even know, but with whom they might make good roommates.

---

- What if there was an app where you look at the camera on your phone and it highlights your eyebrows, lets you choose an eyebrow shape, and suggests which individual eyebrows to remove?
I keep seeing apps which let you choose an eyebrow shape, but nothing that advertises that it will actually tell me which hairs to pull out.
The eyebrow app would be fun AI? ML? kind of thing, because it would need to learn what are eyebrows and what is skin, and what the looks like would change as your skin gets swollen.
- I would LOVE to have an app that I would use in the dark, that would be able to tell dog shit from sticks, leaves, etc. I swear I stand there with the flashlight just loooooking ugh

---

- Quiz for what to eat - check what's open (what time and day it is), ask some questions and assume some things about the answers

drunk - carbs and great, hot food, delivery

---

- D&D name generator - use language translator to augment the list of words, maybe be able to generate a whole suite of names that kind of match

---

- Remake my resume but with grid

---

- What about a quiz app that has you choose between two images for foods you prefer (or, foods you prefer when you're drunk), and has an optional "skip this question" button. The more comparisons you do, the better the algo gets at determining your perfect drunk meal. Maybe it would use a google image api?

---

- I want to have a thing in my portfolio that asks to send push notifications, but styled where I interpret the block/allow buttons (like "no fuck off how could you even ask me that" and then "oh well ok I suppose I'll allow it). Then if someone clicks allow they just see a pop up that says "juuuust kidding. I don't want to push stuff at you."

---

- Maybe an app where you input your climate zone, your plant type, and then take a picture of your plant everyday (or as often as you can). You then get recommendations on what the plant needs. ML would be used on the pictures to check for certain features (browning leaves, white spots, too stringy, etc) and make recommendations. You could make a plant "public," and then users could vote on whether X or Y was the problem with the plant. The plant's owner would be encouraged to confirm whether or not A or B recommendation did seem to help the plant grow "better" (whatever better is for plants).

---

- An app that would take the location and approximate dates of travel, and maybe ask some other questions about personal preferences (do you like to wear make up, etc), and generate packing lists based on seasonal weather, location, and how many bags you can take.

[2T1L Game](https://www.notion.so/2T1L-Game-a2138f11590f491399718404a37d4756?pvs=21)

[Pandemic Hallmark Romcom Synopsis](https://www.notion.so/Pandemic-Hallmark-Romcom-Synopsis-bdc5a9b5479346e58e8aaae2df8e46c0?pvs=21)

- A web app that would allow you to scan the barcode and it would tell you whether the product is made by a company that is on strike right now.
- A webapp that allows an anonymous user to create proposed schedule for household chores and then email it (or make it available at a URL or a truncated URL).
- Pull in petfinder API and some random name generator api. then make A little web app where you get a picture of an animal from petfinder, then you get a bunch of names and you have to pick the correct one. You could get,x number of chances, you could keep track of the number of guesses it took you, and you could share to social media how many guesses it took you to guess the pets name. The social media share text could include hashtags of the pet's location, and a link to the pet, so someone could perhaps go adopt them too!
- A browser extension that would tell you as you are on different websites whether that company has had layoffs in the last x days.

---

[GroundsKeeper](https://www.notion.so/GroundsKeeper-b406b0cfa27248fd8329472bbd75c5d3?pvs=21)

---

- Color contrast checker for TW colors. So you’d put in two TW color names and it would calculate the contrast and tell you which level of WCAG it passes for small text, large text, etc. Bascially webAIM but for TW colors. Behind the scenes it would get the hex from the TW name and then just check the hex codes. Would need to use an API such as colorcontrast.dev/api

[Do Five Things](https://www.notion.so/Do-Five-Things-6c05cae1344b48f8be5edc9197d52ca4?pvs=21)

[Basic Accessibility Fixer Page](https://www.notion.so/Basic-Accessibility-Fixer-Page-0716988ac8eb45aebb41e0da2e455277?pvs=21)

[Cab Plan (Nour Taxi)](https://www.notion.so/Cab-Plan-Nour-Taxi-3287f691839b4eb392fbf6b719bb8c00?pvs=21)

[Svelte Resume Timeline](https://www.notion.so/Svelte-Resume-Timeline-dfaf4f4cb30d4f7590d0dd1a461f231d?pvs=21)

[Richard Scarry’s Tour of My Resume](https://www.notion.so/Richard-Scarry-s-Tour-of-My-Resume-c9cf97c2b65844119adcf4e098c70294?pvs=21)

- Culinary Portmanteau web app - a user chooses three foods (it’s a set list of foods to choose from, and non repeating, so if they choose “ice cream” for the first food, then they can’t choose it as the second or third food). This then generates a funky name. So “ice cream,” “pizza,” and “salad” might yield “salizza cream” or “icizzalad”. If you wanted to get graphic, there could be an SVG which comes out of it, where the picture looks like an amalgam of those foods. If you wanted to get chatGPT practice, you could ask the LLM to yield a portmanteau for you. You’d need to make a big json of each word having a beginning, middle, and end, and they’d all have to “get along” to make a word that is pronounceable. So it might look something like:

```json
[
	'ice cream': {
	  beginning: 'ic',
	  middle: 'ice',
	  end: 'cream'
	},
	pizza: {
		beginning: 'pi',
		middle: 'izz',
		end: 'za'
	},
	salad: {
		beginning: 'sa',
		middle: 'ala',
		end: 'alad'
	},
	falafel: {
		beginning: 'fal',
		middle: 'afa',
		end: 'afel'
	}
]
```
## Romcom synopsis generator 

![](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19ca3e2f-27b2-4ac2-ad52-ea3763ea9d97/Screen_Shot_2020-12-03_at_12.04.49_PM.png)

- Tish A childless party planner finds herself stranded in her hometown during a pandemic lockdown, after she came home to build her multilevel marketing lifestyle brand. Against her better judgement, she falls in love with the mayor. Together, they learn the true meaning of Christmas.
- Catch line: Love silly rom com movies? Want to learn how to use v-model in Vue 3? Check out this repo!
- Basic lesson: v-model
- Basic idea:
    - Form with the fields
    - Click button to generate
    - Show the plot in a text
- Task list
    - Find or start a basic Vue 3 repo with jest
    - Add TW (optional, I could just write CSS lol)
    - Look up v-model documentation for Vue 3
    - Look up a tutorial for v-model with Vue 3
    - Write one input and v-model it
    - Add README
        - Install instructions
        - What’s the point of the exercise
        - Image credits
- Technical notes
    - All fields should be radio buttons or selects
    - The movie synopsis should have a default of the 1/2/3/4 text. Replace with content from the bullet
- Stretch goals
    - Make it shareable
    - Make it populatable by URL
    - Make it shareable with the populated URL

## Groundskeeper 

**GroundsKeeper - a lightweight, open-source admin portal for lawn care professionals**

**MVP inputs**

- name
- contact
- service date
- amount owed
- payment status
- pictures of work done

**MVP features**

- Add a new service entry
- Delete an existing service entry
- Edit an existing service entry
- Auth with one permission level
- Twilio text service receipt with images

**Notes**

- Is a “service journal” - not a CRM, not replacing Quickbooks or anything
- fairly generic - could be used for other service professionals
- Admin can put in the types of services rendered
- Admin can put in the types of payments they accept
- Service status: completed, in progress, not started
- If completed, then can adjust the date that it was completed
- Payment amount field
- If payed, then can adjust the date paid and can select a payment type
- Customer status: potential, current, defunct, blocked
- Customer info: name, other fields the admin can choose from, like phone, address, email, insta handle, cashapp, etc.
- Maybe admin can set up some extra fields about the customer?
- It should export a spreadsheet. I don’t know if it should be a filterable spreadsheet or maybe it could be filterable but not at mvp
- Place to upload before/after pics - alt text for each pic.
- Maybe hook it up to Twilio to set some sort of reminder for monthly/recurring customers
- Maybe hook it up to Twilio so it texts the service calls that should be made that day
- Maybe hook it up to a form that we can put on the YWGC website so interested customers can fill out the form and it would create a row for a potential client in the db
- Admin ability to send an email or text to the customer’s contact with some basic info - date of service, amount and payment status, and pictures of work done. Maybe different types of texts - upcoming service reminder, invoice after service, payment reminder, thank you after payment
- Ideally would be able to function offline and then connect when it was back online?
- Vibes: small words, simple to use, large input sizes, mobile first
- A “service entry” is a line in the db which chronicles all the work done for one service call
- A “notes” area, freeform text with notes about the service
- When adding a new service entry, can choose an existing customer
- Need a table for service entries and a table for customers?

## Richard Scarry’s Tour of My Resume

It would be so cool to work with an illustrator to get images you could then place on a webpage, either inside an SVG, or just with CSS grid or something. The images would have good alt text, and when clicked, a small explanation of the illustration - relating to a point on your resume - would appear somewhere in a dedicated area of the screen. The things that hadn’t yet been clicked could maybe pulse, or be brighter, or both? Yeah it would be cool to, after something had been clicked, keep track of it in state, and then make it black and white, or change the image somehow, and make it less “click me!” vibe. As a stretch, when you click on the images, they could populate a resume below the image area, and, once done, the user wold have a full, printable resume (of course, you could have links that say “just show me the resume” or something like that). When a piece of the image is clicked, there should be a polite announcement with the text, or maybe it could be in an aria-described by. Hm I’m conflating images and buttons. They are buttons with not text, just images, which is ok as long as there is a good SR label. Part of me wants to move focus to the text once the image-button is clicked, but that seems like bad form, well not really because they did click a button. I could put some instructions somewhere?

## Do Five Things

## Working titles

“Just Five Checks,” “Do Five Things”

## The Big Idea

A daily to-do list so small it might actually be achievable.

## The tl;dr

For those of us with executive function issues, everyday adulting can be a struggle. We might think, “If I could just do a few things every day, my life would be so much better.” DFT is a barebones checklist of daily todo’s, but with some limits and a goal to help you stay on track. You’re only allowed 5 checks each day, and they refresh every day. A optional dashboard shows you your progress to achieving 5 complete checks for half the year.

Proposed tech stack: Vue (or Svelte) Frontend with Supabase or RoR Backend.

## What it is

DFT is a basic checklist of daily todo’s, but with some limits and a goal to help you stay on track a little better. 

The limits: You’re only allowed 5 checks, and they refresh every day. The checks aren’t scheduled, you have all day to do them. Still, you can’t put them off, because you can’t go back and edit the day after it’s over! Each day is new, and you have to (nay, you *get* to) be present for it.

The goal: Do these checks for half the year. It doesn’t matter if you do them for 6 months straight, or every other day, or some other combination. If you can do your checks for just half the year, we think your life will be better (at least, ours is). We’ve included a tiny dashboard to see if you’re on track for the “half the year goal.” It’s opt-in, so you won’t be bothered with the tracking unless you want to.

## Why we made it

For those of us with executive function issues, everyday adulting can be a struggle. We might think, “If I could just do a few things every day, my life would be so much better.” And then of course we immediately get sidetracked (squirrel!) or overwhelmed, and our bare minimum flutters right out the window.

My partner and I have been keeping this style of check list for years now, but on paper. Although we’re both kind, loving, and successful people, we’ve struggled for most of our lives to do some basic, necessary daily tasks (looking at you, dental floss!). In 2018, I presented my partner with a list of checks and a goal for the year. Over the years we’ve experimented with different numbers of checks, different goals, and different formats. We found what worked best for us was 5 checkboxes, with a goal of half the year. 

## How to use it

We suggest to start out small and specific. At first, include things you already do. Think about your most consistent streaks of achievement - did you have a vague goal (”practice new language”)? Or a very specific goal (”do one Language App lesson”)? A mixture? Iterate over your checks to see what, give them a chance, and find out what works best for you.

## Does it work?

Yeah, kinda! At least, it’s worked better than anything else we’ve tried. It’s given us a sense of accomplishment, something to look forward to each day, and each year as we grow and update the content of our checks. Which is saying a lot for our easily distractible brains.

[Features](https://www.notion.so/c505b7701b85479daae82b219b003e25?pvs=21)

[Screens](https://www.notion.so/58acb78402ef4b708830340a5d9720dd?pvs=21)

[Tasks](https://www.notion.so/a9e93bace93d44889611c34f5f82d953?pvs=21)

## Basic Accessibility Fixer Page

Tests basic a11y principles.

```markdown
Goal: 
Create a github repo that can be copied (forked?) by each squad to have their own version. The repo contains a simple (react? js?) website with some common accessibility issues.

Details:
The issues can be listed in the readme. 3-6 issues depending on the complexity? Ideally an issue is fixable within a few hours of work by a junior dev.

Types of issues (ideas):
- Inappropriate/Missing Alternative Text on Images 
- Heading Hierarchy 
- Using Non-descriptive Links
- Poor Contrast Text

Each squad (devs) will:
- create their own copy of the repo
- setup netlify deployments for their new repo?
- each dev will address one of the issues and open a PR
- review and merge PRs to make the site more accessible
```

Work in progress (I kept it on a codepen because I didn’t feel like spinning up a new repo yet): https://codepen.io/novellac/pen/oNJeYJO

Some common issues the page features:

Overview of the success criteria: https://www.w3.org/WAI/WCAG21/Understanding/

1. Missing document language (Understandable)
    1. Resource: [WCAG SC3.1.1](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page)
    2. Answer: The lang=”en” is missing
2. Images without alt text (Perceivable)
    1. Resource: [WCAG SC1.1.1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html), [Alt Text As Poetry](https://alt-text-as-poetry.net/)
    2. Answer: All images have alt text removed
3. Insufficient colour contrast (Perceivable) 
    1. Resource: [WCAG SC1.4.3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum), [WebAIM ContrastChecker](https://webaim.org/resources/contrastchecker/)
    2. Answer: Many of the paragraph tags are a light grey that won’t pass.
4. Links with ambiguous text (Operable)
    1. Resources: [WCAG SC2.4.4](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context), [WCAG Technique F63](https://www.w3.org/WAI/WCAG21/Techniques/failures/F63)
    2. Answer: All the gallery cards have the same “Recipe” link text.
5. Focus outlines (sometimes called focus rings)
    1. Resources: [WCAG SC2.4.7](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible), [WCAG Technique F78](https://www.w3.org/WAI/WCAG21/Techniques/failures/F78)
    2. Answer: There is a style block that removes the focus outline.
6. A series of elements which should be a list
    1. Resources: [WCAG SC1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships), [WCAG Technique H48](https://www.w3.org/WAI/WCAG21/Techniques/html/H48)
    2. The list of links to grocery stores are just a tags in a div.

I didn’t put these into the page:

1. Buttons or links with images and no text in them
2. Headings have meaning (not just style!)
    1. Resources: [WCAG 1.3.1](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships), [WCAG Technique H42](https://www.w3.org/WAI/WCAG21/Techniques/html/H42), [WCAG Technique F43](https://www.w3.org/WAI/WCAG21/Techniques/failures/F43)
3. Things styled to look like headings but are not
4. Inputs that aren’t labeled
5. Click action on a DIV

Theme ideas:

A page of desserts? - email me a recipe

A page of pets/animals - email me some pet info

Functionality of the site:

- headings
- photos
- links
- text

Process ideas:

First I should make it correctly, and then I should mess it up

## Cab Plan (Nour Taxi)

- Has an about page, about her
- Has a form for inquiry
- Has pages with information on her fav tourist destinations
    - Create a “cart” with destinations.
    - Each destination should have an approximate length of time
    - Each destination should have a google map link
    - Could possibly plot out the time it takes to drive between the different destinations
    - Could suggest relevant tourist sites based on the ones chosen
        - The suggestions could depend on some categorizing of the tourist sites, like religion, ancient, food, scenery, etc.
    - Instead of plotting out the time it takes to drive from one to the other, you could just add in a buffer
    - Could have some suggested itineraries
    - Could send the sites in the cart to Nour and she’d get back to you with a plan for how many days/how much cost it would take
- Has a random page of tips and tricks for enjoying a stay in Cairo
- Have the form use something like Twilio to send her a whatsapp with the form info?
- Tech
    - Could use Svelte - I think each of the sections of the official tutorial could fit in here.

## Svelte Resume Timeline

Have a page on my website which showcases the <svelte:window bind:scrollY={myVar}> property to make a timeline of my work/relevant history. I would divide the screen into x number of rows (where x is the number of timeline events), and once the scrollY value reached the next chunk, the heading at the top of the page would change (and announce changes politely, so users could scroll through and just hear the overview?).