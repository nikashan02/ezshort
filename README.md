# The r/WallStreetBets Weekly Stock Portfolio

This MERN stack project (available at [ezShort.herokuapp.com](https://ezshort.herokuapp.com)) converts long links into shorter ones that can be more easily shared.

![Screenshot](https://github.com/nikashan02/ezshort/blob/main/screenshot.png?raw=true)

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environment.

### Node

- #### Node installation on MacOS

  Go on the [official Node.js website](https://nodejs.org/) and download the installer.

- #### Node installation on Windows

  Go on the [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install Node.js and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.18.3

    $ npm --version
    6.14.7

If you need to update `npm`, you can make it using `npm`. After running the following command, restart the command line.

    $ npm install npm -g

## Install

    $ git clone https://github.com/nikashan02/ezshort
    $ cd ezshort
    $ npm install

## Configure app

Open `/.env_sample` and edit with your settings and rename the file to `.env`. You will need:

- MONGO_URI → Place your [MongoDB Atlas](https://api.tiingo.com/) URI here.

## Running the project

    $ npm start
    $ cd frontend
    $ npm start

The express server will be running at http://localhost:5000 and the React frontend will be running at http://localhost:3000.
