---
imageUrl: "/images/bane.png"
title: "Piks"
description: "A simple web app where search results of images are displayed from an api"
technologies: ["react", "react custom hooks", "api"]
visitUrl: "https://piks.netlify.app"
githubUrl: "https://github.com/okp980/piks"
---

## Description

A simple react web app which enables users to view images depending on their search. Different categories in navigation for users to quickly get images.

![piks-desktop](https://user-images.githubusercontent.com/66972059/131231772-280c15ae-c25a-4f41-b53b-57774cee02eb.jpg)

![piks-mobile](https://user-images.githubusercontent.com/66972059/131231937-eaa1079a-7576-434b-a0e9-a3327a3fd507.png)

## Hooks Used

- useState
- useEffect
- useCallback

## Live Link

Click [Here](https://piks.netlify.app/) To Visit

## Project Summary

- The aim of this project was to practice prop drilling and controlling component re-render.
- Created a custom hook to use in fetching api.
- use of the useCallback hook for component optimization to prevent uncontrolled component re-render.
- Prevent fetch action from occuring while a user is still typing but make the api call after the user pause typing

## Credits

[Pexel Api](http://www.pexel.com)
