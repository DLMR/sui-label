# sui-label

## Demo page
- Check out [Sui-Label demo page](http://sui-components.github.io/sui-label/)

## Description
A label container to display a custom literal and class.

## Usage
Render component passing two props, `literal` and `class`.
- `literal` : Required prop to display label's content.
- `class` : Optional prop to pass an additional custom class so you can style your label.

An example of the `sui-Label` component implementation is:

```javascript

// JSX file
ReactDom.render(
    <Label literal={'Default Label'} class={'my-Custom--label'} />,
document.getElementById('main')
);
```
```css
// Sass styling
.my-Custom-label {
    background-color: $c-background;
    color: $c-foreground;
}

```

## Installation
Clone this repository and run:
```
$ npm install
```

## Start working in development mode:
```
$ npm run dev
```
This command will build your `.sass`, `.jsx` and `.js` files and open a local development environment, with hot reloading. A browser window will be opened as well, showing the entry point of your documents folder for development purposes.

## To work in TDD mode:
```
$ npm run test:watch
```
## To run unit tests only once:
```
$ npm test
```
## To publish yours docs page:
```
$ npm run doc
```

That will publish in a gh-page for `docs` folder.
What is a component without a [public demo](http://sui-components.github.io/sui-label/), isn´t ?!
