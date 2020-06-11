eFuel mobile station application
===

## Installation

Follow environment setup as explained here 
```
https://reactnative.dev/docs/environment-setup
```

Follow the path of "React Native CLI Quickstart", but not the path of "Expo CLI Quickstart". 
i.e. Click on "React Native CLI Quickstart" to select it. 

## Installation
Install node modules
```
npm install
```

## Installation ios

Install pod files
```
cd ios
pod install
```

reac-native run-ios

## Installation android

reac-native run-android



## Libraries

1- react-native-localization
    handle change langauge

2- react-native-restart
   restart app when change langauge

3- redux & redux-thunk & react-redux
   handle shared state management

4- react-navigation
  handle navigations between screens and routes

5- react-native-qr-scanner
   scan and read QR and get data from QR

6- react-native-smooth-pincode-input & react-native-confirmation-code-field
  show and handle plate number and confirmation code

7- routes or navigation
   Contains all stacks and tabs navigator
 
8- react-native-flash-message & react-native-snackbar
      show error and success messages


## Folders Structure

1- action
    Contain all actions 

2- reducers
   Contain all reducers 

3- redux
   Contain store and root reducer and index for actions

4- pages or screens or modules
  Contains all modules screens in application

5- strings
   For arabic and english language

6- services
  Contains all backend api calls 

7- routes or navigation
   Contains all stacks and drawer navigator
 
8- assets
  Contains fonts ,icons ,images folder

9- components
 Contains all shared components in all screens 
Ex: button , textinput 

10- helpers or utils
    Contains all global functions and scaling for styles
