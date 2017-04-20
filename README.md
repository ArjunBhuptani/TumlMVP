# Tuml MVP

To test, you'll have to set up git on your computer.

### Git installation instructions

https://www.atlassian.com/git/tutorials/install-git

Specific to windows:

If you open command prompt and type in ```git status``` and you get a command not found error, you will have to add git to your ```PATH``` environment variable.

To do this, open up system in the start menu. Go to advanced system properties. Click environment variables. Under user variables click Path and then click edit. 

Click new in the dialogue box that opens up and then add the location of your git installation. For instance: ```C:\Program Files\Git\cmd```

Close command prompt, reopen and try ```git status``` again. If it doesn't work, restart your computer.

### Node installation instructions

https://nodejs.org/en/download/package-manager/

You might have to add the node path to your system as well.

### Cloning the repo to your computer

Navigate to a folder in your command prompt that you want to copy the Tuml repo to:

In command prompt, type:

mkdir repositories

then 

cd repositories

(this creates and gets you into repositories folder)

Then type ```git clone https://github.com/ArjunBhuptani/TumlMVP.git```

### Testing the repo

```cd tumlmvp
npm install
npm run start```

Open a browser and navigate to localhost:3000

Thats it!


