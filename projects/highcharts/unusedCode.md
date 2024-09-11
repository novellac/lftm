# Code that's unused but could still be good

This goes inside the `dataLabels` array. It will add a label to the pie chart. This one in particular will add labels inside the pie slice.

```javascript

// {
            //   enabled: true,
            //   distance: '-30%', // Place the label inside the pie slice
            //   filter: {
            //     property: 'percentage',
            //     operator: '>',
            //     value: 5 // Only display labels inside the pie for items that have more than 5% of the total pie
            //   },
            //   format: '{point.name}: {point.y}', // The number/value that shows on the pie slice. In general, formatters do support logic and there are built in helpers.
            //   style: {
            //     fontSize: '0.9em',
            //     textOutline: 'none'
            //   }
            // }
```

This can be added to the chartOpts to show tooltips on the pie slices.

```javascript
      tooltip: {
        headerFormat: '<span class="text-sm">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
        '<b>{point.percentage:.0f}%</b>' // e.g. {point.percentage.8f} means 8 decimal places.
      },
```