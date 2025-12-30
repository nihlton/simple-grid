![Simpl-grid](https://repository-images.githubusercontent.com/89734978/18321280-847b-11ea-8c55-b45ff74cc449)

# simpl-grid
simple responsive flexbox grid

DEMO: https://nihlton.github.io/simple-grid/

DOCS: https://nihlton.github.io/simple-grid/docs.html

# Setup

In the console

``npm add simpl-grid``

In your project

``import 'simpl-grid/grid.css';``

# Notes

Version 2 Brings some small changes to gutter classes, and introduces responsive gutters.

gutters sizes are as follows:

  - **none**: 0
  - **close**: 0.125rem
  - **default**: 0.5rem
  - **open**: 1.5rem

None responsive gutters: **.gutter-[size]**
Responsive gutters: **.gutter-[break-point]-[size]**

## Break points

Simpl-grid is opinionated about your break points, which is kind of unavoidable for a CSS only package.  

  - **small**: starts at 0px and ends at 720px
  - **medium**: starts at 721px and ends at 1023px
  - **large**: starts at 1024px

you can import the break-point configurations from `simpl-grid/variables.scss` should you need these values in your own SASS, or even javascript.  You may need some configuration changes to import SASS variables into your JS.

```javascript
  import * as grid_vars from 'simpl-grid/variables.module.scss';
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
