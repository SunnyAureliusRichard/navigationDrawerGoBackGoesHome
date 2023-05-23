# navigationDrawerGoBackGoesHome

https://github.com/react-navigation/react-navigation/issues/11373

This repo demonstrates an issue with the library `@react-navigation/drawer` where the `navigation.goBack` goes to the first screen registered instead of the previous screen seen.

## To reproduce
1. run `npm install`
2. run `npm run android`
3. go from screen 1 to screen 2
4. go to screen 3
5. press go back

## Intended behaviour
The user should be on screen 2.

## Actual behaviour
The user is on screen 1.

The same case is reproducible by using the simulator's go back button.

![Reproducible example](navigationDrawerGoBackGoesHome.gif)