# Highchart print fixes

We use "styled" mode to ensure that our CSS gets applied. However, when a user clicks print screen, they see a preview with a black box and no charts. It's hard to figure out why this is. There are no print media queries in the CSS, so maybe something either black or unstyled (with an SVG default of black?) is getting applied to an SVG class. 

## Things I have tried

- Setting styled mode to false - this doesn't work well because many pieces of text don't get the proper styles applied and show up as dark on dark.
- Adding a print media with the svg background set to transparent (seems to have no effect).
- Adding an options key in chart wrapper to set the background to null or transparent (seems to have no effect).
- Styled mode true, code imported via url in styles.scss - CSP error
- Styled mode true, code imported via url in ChartWrapper style block - CSP error
- I tried copy pasting a demo highcharts pie chart and making a standalone component out of it (no effect, still black)
- Hardcode the bg style for print but use rgb instead of web-safe color names https://github.com/mogest/prawn-svg/issues/131#issuecomment-1048027282 (no effect, still black)
- Create a brand new clean install for a minimum repro (done - it works fine boooo)
- Tried using the offline exporting, no effect
- Get help from BE to check if things are any better if we're pulling the CSS directly from Highcharts (honestly I don't think this will make a difference). I've contacted Rachel and we'll see what she says. (I tried a few of these and it didn't help)

## Things still to try

- Ask if we really need print screen (could maybe remove with https://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/exporting/menuitemdefinitions/ and https://api.highcharts.com/highcharts/exporting.menuItemDefinitions) and https://api.highcharts.com/highcharts/exporting.buttons.contextButton.menuItems (this was the eventual choice)

## Unsorted notes

- Class `highcharts-background` is usually a `fill` that corresponds to a var `fill: var(--highcharts-background-color);`. When `highcharts-dark` class is present on the element with the highcharts id (in the docs called `highcharts-container`, I think?), this var is set to a dark color. When `highcharts-light` class is present on the element with the highcharts id, then this var is set to a light color. When neither `highcharts-dark` nor `highcharts-light` is present, then it should default to prefers color scheme light or dark, but seems to just go to dark instead (is this a bug on our end or theirs?). So maybe if I target print and set it to not transparent but something like white, then maybe that would work? But like, wasn't this the first thing I tried? And it works fine on local but then again everything works ok on local!
-- As I thought, this works fine on local but not on dev.
- When I try to emulate print styles, on local it looks fine. On dev, the svg expands to get ever-larger.


## Resources I used

- some dead ends wrt black SVGs https://www.highcharts.com/blog/tutorials/drawing-with-data-part-2/
- v12 import changes https://github.com/highcharts/highcharts/issues/22251
- Info on export module https://www.highcharts.com/docs/export-module/export-module-overview
- HC Style docs https://www.highcharts.com/docs/chart-design-and-style/style-by-css
- https://github.com/mogest/prawn-svg/issues/131#issuecomment-1048027282