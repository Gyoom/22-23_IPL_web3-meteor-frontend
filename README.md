To install and use this project:

1. Prerequisites and useful information :

    - If you are on a Mac M1 (Arm64 version) you need to have Rosetta 2 installed, as Meteor uses it for running MongoDB. Check how to install it here

    - Meteor works with Node.js version >= 10 and <= 14, for Windows you need to have Node.js installed for running the npm         installer (tip: you can use nvm for managing node versions).

    - Meteor supports Windows 7/Windows Server 2008 R2 and up.

    - Disabling antivirus (Windows Defender, etc.) will improve performance.

    - For compatibility, Linux binaries are built with CentOS 6.4 i386/amd64.

    - iOS development requires the latest Xcode.

    - Do not install meteor npm in your project’s package.json by any means, the npm library is only an installer.

2. installed meteor packages :

    - $ meteor add twbs:bootstrap

    - $ meteor add check

    - $ meteor add Accounts-ui, accounts-password 

    - $ meteor add blaze jquery
    
    - $ meteor npm install jquery

    - $ meteor npm install --save @babel/runtime react react-dom react-router-dom moment

4. Useful commands:
     - To choose the localhost port:
     meteor run --port 4000
    

     - To create a basic Meteor react project:
     meteor create name

     - To create an empty Meteor project:
     meteor create name --bare
    

     - See version of Meteor :
     meteor --version
    

     - See the project's installed meteor dependencies :
     meteor list --tree
    

     - Empty the localhost db of mondodb :
     meteor reset
    

     - Provide the info of the db and in particular the url to access it (replace the ip by localhost) :
     meteor mongo


