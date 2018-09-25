Simple App to Demonstrate the creation of Table Component in React

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    style.css
    index.js
    index.test.js
    Constants/
      Constants.js
    Components/
      Table/
        Table.css
        Table.js
        TableRow.js
        TableHeader.js
      Pagination/
        Pagination.css
        Pagination.js
      ComboBox/
        ComboBox.css
        ComboBox.js
      Elements/
        Select.js
        Select.css
        Button.js
        Button.css
    __test__/
      Table/
        Table.spec.js
        TableRow.spec.js
        TableHeader.spec.js
      Pagination/
        Pagination.spec.js
      ComboBox/
        ComboBox.spec.js
      Elements/
        Select.js
        Button.spec.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits i.e. Hot reload.<br>
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
