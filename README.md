# fe-frameworks

Let's build a same app with different FE frameworks to test their load and user interaction

## Approach

In this build i want to compare builds of different FE frameworks to see how they handle a mock of a real life app.

### App requirements

- There's input field called 'details amount' that takes in an integer
- App renders a component called MockDetail on page N times equal to 'details amount' value
- MockDetail must have following properties:
  - Randomly a div or span as html tag
  - A state that counts amount of single clicks on component starting from 0
  - A label that is shown as html 'title'. A label should contain a random string of max length of 5 plus index of MockDetail and click amount. It should look like this

    ```javascript
    const title = `${randomString}. Index: ${index}. Clicked ${clickAmountStateValue}`
    ```
  - Minimal width and height of 2 pixels
  - Random background color
  - A 20% chance of rendering child component that would show the random string, index and click times as described earlier
  - It should disappear from DOM on double click
- An input that allows user to just type in some text and renders the result of it right after to show responsibility
- If possible - app should display time passed from before update of MockDetails started to it's finish
- Using pure js css and html all apps should render the same 'radar' animation at any time
