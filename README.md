# Gtok

## Demo-
![demo](assets/demo.gif)

# Environment setup-
* Drop a :star: on the GitHub repository.  

* Download [Git](https://git-scm.com/downloads) (when you install Git, Git Bash also gets installed by default)  

* Download and install a code/ text editor.
    - Recommended-
        - [Download VS Code](https://code.visualstudio.com/download)
        - [Download Atom](https://atom.io/)
  

* Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you install Node, npm also gets installed by default)  

* This project uses YARN as package manager thus [install YARN](https://classic.yarnpkg.com/en/docs/install/#windows-stable) using npm to run the application.

* Clone the repository by running command
```
git clone https://github.com/<your user-name>/gtok.git
```
in your git bash.  

* Run command `cd gtok`.  

* Run this command to install all dependencies for the project.
```
yarn install
```  

* Make account on [Firebase](https://console.firebase.google.com/) and setup a [Firestore database](https://firebase.google.com/docs/firestore/quickstart).  

* Add API keys for connecting to the database.  
  * Run this command when inside the root directory to make a `.env` file.
  ```
  touch .env
  ```
  * Now add your API keys from Firestore to the `.env` file in this format-
  ```
  PORT=3000
  HOST=localhost
  HOST_URL=http://localhost:3000
  API_KEY=<Your-Firestore-credentials>
  AUTH_DOMAIN=<Your-Firestore-credentials>
  PROJECT_ID=<Your-Firestore-credentials>
  STORAGE_BUCKET=<Your-Firestore-credentials>
  MESSAGING_SENDER_ID=<Your-Firestore-credentials>
  APP_ID=<Your-Firestore-credentials>
  SENDER_EMAIL=<your-email>
  SENDER_PASSWORD=<password-for-your-email>
  ```  

* Run this command to start the project.
```
yarn start
```  

or  

* Run this command to start the project as a developer.
```
yarn run dev
```  

* Open link to view the website in your browser window if it doesn't open automatically.
```
http://localhost:3000/
```  

* Now you are all set to use this project.