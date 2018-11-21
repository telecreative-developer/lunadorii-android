# Lunadorii Android

Lunadorii android created using react native and redux

---
## Table of Contents

- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
- [Folder Structure](#folder-structure)
- [Explanation each Folder](#explanation-each-folder)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
- [Build With](#build-with)
- [Authors](#authors)

## Getting Started

Go To Project and run `npm install` and then `react-native run android` for starting development, dont forget to connect your device via usb (enable usb debugging) or open your emulator (android studio virtual device)

### Prerequisites

* Have knowledge about [React native](https://facebook.github.io/react-native/)
* Things you need to install
    * [Node](https://nodejs.org/en/)  
    * [React native](https://facebook.github.io/react-native/)

## Folder Structure

All Project is configured in `app/` folder
folder android and ios is configuration from react native

## Explanation app Folder

Explanation About the project folder inside `app/` folder

### Actions

Folder For Storing Action Redux

the action is group by each function is used for
(i think every file is action is clearly named what is used for)

### Assets

Folder For Keeping Assets Like Image, etc.

### Components

Folder for storing any view (not including function)

### Constants

Folder for storing constant redux for connecting between action and reducer redux

### Containers

Folder For Connect between component and action
for creating view by calling component and modal or particles
so, basically this container is connecting between function, component, and modal or particle

### Env

Folder for storing environtment that called repeatedly

### i18n

Folder for storing translation indonesia and english

### lib

Folder for storing reusable function

### modals

Folder for storing reusable modals

### particles

Folder for storing reusable componets

### Reducer

Folder For Storing Reducer Redux

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode if you already run `react-native run android`.

### `react-native run android`

Runs the app in the development mode on android device

### `react-native run ios`

Runs the app in the development mode on android device

## Built With

* [React native](https://facebook.github.io/react-native/) - The framework used
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) - State Management React native

## Authors

[PT Tele Digital Kreatif](https://www.telecreativenow.com/)