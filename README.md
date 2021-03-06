# AWS AI Services

Repository used to test all available AWS AI Services.
All AWS AI services are accessible via API calls.

<br>

The AI services tested

## Image & Video Rekognition

[Brief Overview](https://aws.amazon.com/rekognition/)

## Textract

[Brief Overview](https://aws.amazon.com/textract/)

## Translate

[Brief Overview](https://aws.amazon.com/translate/)

## Transcribe

[Brief Overivew](https://aws.amazon.com/transcribe/)

## Polly

[Brief Overview](https://aws.amazon.com/polly/)

## Comprehend & Comprehend Medical

[Brief Overview](https://aws.amazon.com/comprehend/)

## Forecast

[Brief Overview](https://aws.amazon.com/forecast/)

## Personalize

[Brief Overview](https://aws.amazon.com/personalize/)

## Dependency Breakdown

### Dependencies

**@emotion/core, @emotion/styled**: Emotion related packages to implement CSS-in-JS

**aws-sdk**: AWS SDK for Node js environments

**axios**: Request/Response library to assist in making http requests

**react, react-dom**: Experimental react version to test concurrent mode with Suspense API

**react-router-dom**: React router for managing how the application routes page to page

**typescript**: Typescript language for adding types and type enforcement

### Dev Dependencies

**@babel/core, @babel/present-env, @babel/preset-react, @babel/preset-typescript, babel-loader**: Basic babel npm packages for envs, react, and typescript

**@types/react, @types/react-dom, @types/react-router-dom, @types/react-select**: Types associated with Reat, React Dom, and React Router Dom. Also includes
the types for the react select component.

**css-loader, style-loader**: Basic style loaders for handling css and style files

**source-map-loader, ts-loader**: Loaders for source mapping and typescript

**mocha**: Testing library (in case I actually use this in the future. May rely on Cypress for most testing)

**eslint, prettier**: Linter and code formatter for enforcing specific code standards

**@svgr/webpack**: An SVG loader to manage SVGs

**react-select**: A custom dropdown component with filter features created by Jed Watson on [GitHub](https://github.com/jedwatson/react-select)

**webpack, webpack-cli, webpack-dev-server**: Basic webpack npm packages to control bundling, cli commands, and deploying on a local dev server for testing
