# Installing the backend environment
Hi all, I'm going to document the process I am going through to install everything required for the project to 
run on my local machine. 

I'm on a Windows machine but i'm running Windows Subsystem for Linux. So i'm actually installing
everything into my Ubuntu environment.

I'm following this tutorial:

https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/

## node version manager
This is recommended to keep track of versions of node of your machine. 

    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

## node

After this is done, you can install the latest version of node with:

    nvm install node

## create react app

I then ran (you do NOT need to do this)

    npx create-react-app client

which sets up the react client structure/environment/etc.

## create/install express 

navigate back to the root directory and run:

    npm init -y

which automatically creates the package.json file.
Now we will install express and it will be added as a dependency to the package.json file.

    npm install express --save

Now we're pretty much good!
Just create the server.js file and put in some stuff to see if it works.

# Running the server
Make sure you're in the root directory of the project and run:

    $node server.js

You should see "Listening on port 5000" in the terminal. 
Navigate to http://localhost:5000/express_backend to see a bit os JSON sent from the server.

# Running the react app
In another terminal window, navigate to the client directory
    `cd ./client`

Delete any existing package-lock.json file and run the command:
    `npm install`

run the command: 
    `npm start`

This will start a react dev server. If you have a look at the bottom on the screen there will a message indicating the you have connected to the Express server.
It should also indicate that you have connected to the mongoDB server, but you might need to whitelist your IP address first.

# Accounts 

I am creating a gmail address for the project which will act as the admin email account for mongoDB.

## gmail

cosc594prototype@gmail.com
password: cosc594%($

Note i've used my phone number as backup. Hopefully nobody even needs to open this email once Mongo is working. Set and forget.

## MongoDB Atlas
MongoDB Atlas allows you to run a free database in the cloud (on AWS). I've signed up to it with our GMail account, so if you want to log in to it, use the sign in with Google option.

### Connecting to MongoDB
The express application will need to connect to the MongoDB backend. 
It will do this using a library which we will pass a username and password. 
Please note this is a different username and password to the one used to sign into mongoDB atlas in the browser. 

username : expressApp  
password : tm8lIPIpDbxQr0qo

The below no longer relevant - all IPs can access the mongoDB database.
That is not enough however!
Wherever the app is running also needs to have their IP address whitelisted inside mongoDB's console. I can do this but anyone else can also long in to the cloud and whitelist their IP address. If you want to run the app just let me know and i'll whitelist your IP or show you how to do it. 

### Installing mongodb driver library
To install the mongoDB driver for Node, run:

    npm install mongodb

This installs mongodo and adds it to package-json.

