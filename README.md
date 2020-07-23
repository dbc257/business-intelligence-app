# business-intelligence-app

## :herb: Business Intelligence App :herb:

**Purpose of this app:**

**How to use:**

Anyone can access the website. Simply, go to <localhost:3000> or click the Business Intelligence App link below in order to start at the website's homepage. Although the website has a function login, registration, and signout, any user can access the company information displayed on the charts. Simply click the Explore link, and then you can pick between 3 companies business information. Those companies are Apple, Inc., Tesla, Inc., and Facebook. The charts display quarterly statements from 2017 to 2020. The line charts display revenue, costs, and profits for either of those 3 companies based on the year that is chosen by the user. This quarterly statement information was found on https://financialmodelingprep.com/developer/docs/pricing/ which is a RESTful API. The corresponding date was fetched from the above mentioned API, and input into our ElephantSQL database. If the user wishes to log into the website, they can either register a username and password on the Register page or they can simply press the "Guest Login" button on the Login page.

**Features on the app:**

Upon entering the home page of the website,

the image carousel is most likely the first thing that the user notices. As described above, the user can click on any carousel image to have the website open another tab to an educational article. Above the image carousel is the navigation bar which has a link to the homepage on the top left that is named "Cannabis Strain App." While still on the navigation bar, one can click "View" that displays a dropdown list of navigation links such as "Strain Type", "Strain Effect", "Strain Flavor", and "All Strains." To the right of "View", the user will see "About Us." The navigation bar and the image carousel was created with utilization of Bootstrap. Underneath the image carousel, one will see cards. The top card says "Why Cannabis." This card explains why we as a group decided to choose this particular website project. The rest of the cards have titles that include "Cannabis Strain by Effects", "Cannabis Type Information", "Cannabis Strain by Flavor", and "All Cannabis Strain Information". If the user clicks on any of these cards, the website will go to the same pages that are on the navigation bar. The only links that do not have a card are the home page link and the "About Us" link on the navigation bar. The navigation bar is replicated on each page of the website for uniformity and ease of use. If the user navigates to the strain type page, they will see three buttons that allow them to filter through the cannabis strains by either "Sativa", "Hydrid", or "Indica". Each button, if clicked, will fetch from the API database all of the cannabis strains of that type, and it will display the cannabis strain information on cards below the buttons. There is also a paragraph with an explanation of the different strain type characteristics. After that, the user can navigate to the strain effect page where they will see three selector tools with three buttons. The top selector tool allows the user to filter through the cannabis strains by either positive effects, medical ailments, or negative affects. Once the user has selected an effect and clicked the adjacent button corresponding to that effect, all of the cannabis strains with that chosen effect will display on the same card format as the strain type page. The display card format was designed with a combination of bootstrap and CSS code. If the user clicks on the strain flavor webpage link, the user will see a selector tool with a click button that allows the user to chose a flavor. After the user clicks the adjacent button, the webpage will display all the cannabis strains with that particular flavor. The results will be displayed below the selector in with the same formatted display cards as the other webpages. If the user desires to search the cannabis strain API database by name and/or display all the cannabis strains with their associated information, they would have to click the all strains webpage link. Once they get to the all strain webpage, the user will see a text box with a search button were they can search any text associated with the cannabis names. For example, if the user types "haze" into the textbox and clicks on the button, then all of the cannabis strains that have the word "haze" in them would be displayed below the selector and "All Strains" button. If the all strains button is clicked, it will display all of the 2000+ cannabis strains and cannabis strain information on cards below the button. Lastly, the user can click on the "About Us" link in order go to the last webpage which has pictures, descriptions, and LinkedIn url buttons for each group member that created the website. If the user wishes to return to the home page, they can click the "Cannabis Strain App" link on the top left of the navigation bar.

## Site Preview

![Preview image of app](https://github.com/dbc257/DigitalCrafts-Assignments/blob/master/API%20Webpage/API%20Project/images/homepage.png)

## Live Link

[Cannabis Strain App](http://cannabis-strain-app.surge.sh/)

## This site was built by:

- [David Carlisle](https://github.com/dbc257)
- [Victor Petsev](https://github.com/VPetsev)

## API

[The Strain API](https://strains.evanbusse.com/)

## Featured Programs

- HTML
- CSS
- JavaScript
- Bootstrap

# :running: :fork_and_knife: FITNESS TRACKER :fork_and_knife: :running:

An app designed with health and fitness in mind. Capable of tracking a users caloric intake, calories burned, ammount of calories needed, fetching healthy recipes and so much more.

## Summary

- :star: [Screenshots](#screenshots)
- :star: [Videos](#videos)
- :star: [Getting Started](#getting-started)
- :star: [Prerequisites](#prerequisites)
- :star: [Installing](#installing)
- :star: [Built With](#built-with)
- :star: [I TIP MY HAT TO](#i-tip-my-hat-to)
- :star: [License](#license)
- :star: [Contributors](#contributors)

## Screenshots

<img width="1424" alt="CleanShot 2020-07-21 at 12 14 36@2x" src="https://user-images.githubusercontent.com/49554888/88096184-43a0c800-cb64-11ea-9dc4-c2018322a597.png">

<img width="1423" alt="CleanShot 2020-07-21 at 12 16 08@2x" src="https://user-images.githubusercontent.com/49554888/88096245-574c2e80-cb64-11ea-8f9b-d6c061fef5df.png">

<img width="1202" alt="CleanShot 2020-07-20 at 23 27 33@2x" src="https://user-images.githubusercontent.com/49554888/88096278-63d08700-cb64-11ea-857b-041e11d4ee61.png">

<img width="1435" alt="Screen Shot 2020-07-20 at 10 30 59 PM" src="https://user-images.githubusercontent.com/49554888/88096438-a5613200-cb64-11ea-8dbb-92a853d3333b.png">

<img width="236" alt="CleanShot 2020-07-20 at 23 28 21@2x" src="https://user-images.githubusercontent.com/49554888/88096478-b5791180-cb64-11ea-91b1-ecaf776c5039.png">

## Videos

# ![Analyze-Fit-Demo-vid](https://user-images.githubusercontent.com/49554888/88095529-464eed80-cb63-11ea-9818-74542a140a12.gif)

## Getting-Started

Feel free to fork it and tweak it to your likings. This is a basic quick build with many paths that are open to your exploration. Otherwise to try it out clone the repo to your local machine or download the zip.

## Prerequisites

You need preferably the latest version of Chrome, and text editor.

#### Go here for Chrome: https://www.google.com/chrome/

#### VSCode is my go to: https://code.visualstudio.com/

## Installing

To get started follow this guide:
ON LINUX/UNIX

# FOR DEVELOPMENT PURPOSES

In your terminal clone repo to your local machine using git clone:

```
git clone https://github.com/WillisK-0/Fitness-Tracker.git
```

Move to your newly cloned repo by entering the following in your terminal:

```
$ cd Fitness-Tracker && npm install
```

To open all project files from terminal using VSCode just tpye and enter:

```
$ code .
```

## Built With

- React
- Redux
- Node
- PostgreSQL

## I TIP MY HAT TO

- **Azam Sharp** - _Our world class instructor whom Provided his wealth of knowledge over 16 weeks, building us in to desired software developers._ -
  [AzamSharp](https://github.com/azamsharp)
- **Ian Sear** - _Our awesome Developer in Residence, whom also Provided his wealth of knowledge over 16 weeks, building us in to desired software developers._ -
  [IanSear](https://github.com/iansear)
- **Austin Denny** - _Another on of our awesome Developer in Residenc,e whom also Provided his wealth of knowledge over 16 weeks, building us in to desired software developers._ -
  [AustinDenny](https://github.com/abdenny)
- **Billie Thompson** - _Provided README Template_ -
  [PurpleBooth](https://github.com/PurpleBooth)

## License

This project is licensed under the [Attribution 4.0
International](LICENSE.md) Creative Commons License - see the
[LICENSE.md](LICENSE.md) file for details

## Contributors :checkered_flag:

- **Keith Willis**
- **Jared Garcia**
- **Andrew Ellis**
- **Nathan Orris**
