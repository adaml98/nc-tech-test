# Notes

- The 'cards' and 'sizes' datasets have already been merged so i have decided to use the 'cards' dataset and remove the 'sizes' dataset to avoid confusion.

- The expected endpoint for GET /cards/:card003 on the readme appears to have incorrect available sizes and pages. I have chosen to ignore this as I believe it is a mistake.

- I decided to code in JavaScript as I am much more comfortable with it, however I have used .ts files instead of .js just incase I decided to go back and use TypeScript for leaning purposes.

- I had to use jest without watch mode for the post function to work otherwise the tests would go into an infinite loop. I believe this was due to jest watching for file changes and the JSON files were included in this. It could also be an issue with my implentation but didnt have time to figure it out.

- I ran out of time in the middle of the POST section.

## POST improvements

1. Test for the JSON file being modified.
2. Set up error handling for 400 Bad Requests due to missing fields / malformed body and setup tests checking for error handling.
3. Reset json files before each test run using beforeEach / afterEach so that I dont need to manually modify data files.
4. Check for correct inputs

## General considerations if I had more time

1. Could write tests for cardFunctions
2.
