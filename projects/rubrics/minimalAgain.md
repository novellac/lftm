Last edit 2025.01.20

## What do I need to happen?

## All the features (Edit mode)

 - Add column
 - Add row
 - Remove column
 - Remove row
 - Start with an empty table
 - Start with a full table
 - Update point values
 - Update text

## What have I done so far

- I took the InteractiveTable repo and massaged it until it was a minimal, mutable version of Rubric table.
- I then stripped everything away and put in slots and renamed it to TableWithRemovableRowsAndCols
- I then made the storybook story work for what I'll need (at least for the View mode) for a final RubricTable.

## What I need to do next
-DONE I now need to build back in the add and remove rows and cols functionality. I can pass the add and remove functions to the users via scoped slots.
- I will then need to create something like RubricTable which uses TableWithRemovableRowsAndCols.
- When I create this RubricTable, I will handle things like selecting there in RubricTable, and not in the TableWithRemovableRowsAndCols component.
- I will then make a Setup file to massage BE API data into the format I need (the format I need can be seen in the mockAlreadyFormattedRubric in mockRubricWithPoints)
- Determine how to push default values from the users of TWRRAC.
- Update TWRRAC so that it can start with an empty table.

## What I may optionally do
- Rename things away from the rubric/criteria/indicators etc kind of vocabulary.
- Figure out a way to get rid of the requirement to have scoped rows (the "criteria cells" in rubric language), so that we can more easily use this interactive table later.