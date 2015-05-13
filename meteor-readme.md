#Electron for Meteor

#####Install

    meteor add jrudio:electron
    
This Meteor package starts when meteor starts up, useful for developing your app for electron.

[Here is a demo of Electron in use with meteor](https://www.youtube.com/watch?v=1OpsJp1_OK4)

#How it works

###Running Electron
1.  When meteor starts up, it will create 1 folder in the root of your app and 2 sub-folders:

    /.electron           =>   Electron is downloaded here
      -  /electronApp    =>   Your Electron-specific code goes here
      -  /output         =>   Your app will be sent here when you package it
2.  It will proceed to download the boilerplate main.js & package.json needed for Electron
3.  Creates a package.json in the root if one is not present
4.  Runs Electron

###Packaging Your App For Electron

1.  In your package.json set 

    "packageApp": true

2.  Fill out your target platform

    "platform": "linux"

3.  Fill out the target architecture

    "arch": "x64"

4.  Set the version of Electron you want it packaged up with(Defaults to 0.25.3)

    "version": "0.25.3"

5.  Start up meteor

6. Wait for a message saying "Moved your app to .electron/output/<appName-platform>"

Go to the github repo to read the rest of the README