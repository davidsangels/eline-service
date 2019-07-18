# Airbnb - The Good Place

> Project description:
This project is responsible to build a similar reviews module of Airbnb's item page.

## Related Projects

  - https://github.com/the-good-place/related-listings
  - https://github.com/the-good-place/Image-gallery
  - https://github.com/the-good-place/keaton-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
This module works with specific idPlaces to be inserted in the url.
You'll know which are them opening the console tab of your browser.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

- After clonning this repo, command `npm install`.
- To generate data in database, command `npm run seed`.
- To run tests for front-end (react components), command `npm run test`.
- For initialize server, command `npm start`. Configured to run automatically when changes are detected.

Other scripts:
`npm run dev-react`: runs webpack to generate a bundle.js file used in `index.html` file. Configured to run automatically when changes are detected.
`npm run lint`: runs eslint in client folder.
