![Simpl-grid](https://repository-images.githubusercontent.com/89734978/18321280-847b-11ea-8c55-b45ff74cc449)

# simpl-grid
simple responsive flexbox grid

DEMO: https://nihlton.github.io/simple-grid/

DOCS: https://nihlton.github.io/simple-grid/docs.html

# Setup

In the console

``yarn add simpl-grid``

In your project

``import 'simpl-grid/grid.css';``

# Notes

Keeping gutters consistent, and only between columns (and not between the columns and the row container) requires the use of negative margins (for now).  This means your rows will need to be wrapped with padding equal to the column gutter - otherwise, a horizontal scroll bar will appear when the viewport is the same width as the row container.

gutters are as follows:

  - **no-gutter**: 0
  - **small**: .125rem
  - **medium**: .5rem
  - **large**: 1.5rem

## Break points

Simpl-grid is opinionated about your break points, which is kind of unavoidable for a CSS only package.  

  - **small**: starts at 0px and ends at 720px
  - **medium**: starts at 721px and ends at 1023px
  - **large**: starts at 1024px

you can import the break-point configurations are exported from `simpl-grid/variables.scss` so you can import them either into your own SASS, or even javascript.  You may need some configuration changes for this to work.  Read: [import sass variables into javascript](https://www.google.com/search?q=import+sass+variables+into+javascript)

```javascript
  import grid_vars from 'simpl-grid/variables.scss'
  console.log(grid_vars)
```

## The Future

**Near future**

add an xlarge break point.

allow custom break-point configurations using css variables.  perhaps something like:

```css
:root {
  --simpl-grid-small-start: 0px;
  --simpl-grid-small-end: 720px;
  --simpl-grid-medium-start: 721px;
  --simpl-grid-medium-end: 1023px;
  --simpl-grid-large-start: 1024px;
  --simpl-grid-large-end: 1500px;
  --simpl-grid-xlarge-start: 1501px;
  --simpl-grid-xlarge-end: 9999px;
}
```

**Distant future**

Would like to figure out a way to allow arbitrary break-points.  perhaps convert to a JS package, and accept break point config before writting out the CSS style sheets programatically?  Seems janky.  ...something to think about.
