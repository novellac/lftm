

Trello card:

    https://trello.com/c/k2mtgwCy/33-assignments-rubrics

    Plan tooling with the feature/rubric/phase5 branch is called `berubric`

## Resources
- Example of a table I found on a11ySlack: https://umnlibraries.github.io/design-system/code/form.html#matrix
- Figma: https://www.figma.com/design/pF3umQF3avthwSyNnY3E5k/Grading-feature-2024---Rubrics?node-id=1054-31350&node-type=canvas&t=Pi4x2E34NVWQPBp0-0
- https://adrianroselli.com/2019/05/uniquely-labeling-fields-in-a-table.html

## Outstanding issues/questions

- How do we get the max points in the upper left corner of the rubric table when in the "view" mode? Should we get it from the assignment? Can BE send it with the rubric (and I don't care where they get it from)? UPDATE: Should be able to get it from the assignment from whence the rubric was created. Not sure where one would get it when in non-edit modes (grade, view).
- Is the "grade" view part of the MVP? UPDATE: Seems so.
- How is a teacher supposed to select one cell per row? MY DECISION: Radios, maybe copy https://umnlibraries.github.io/design-system/code/form.html#matrix
- Can the teacher select more than one cell per row (I'd think not but shrug)? MY DECISION: No.
- Do all the rows have to be filled out before the teacher can submit the rubric?
- If the teacher does not fill out all the rows before submitting, how is the student assigned points?
- How does the teacher submit the rubric?
- Opinion: IMO it would be easier for phased development if we skipped the grading process right now and only allowed the teacher to create a rubric and the student to see it for reference. This would also give us more time to figure out how we are conveying the points overrides.

## Tasks
- !! In RubricIndicator, the srLabel prop for RubricCellEditor may need to change, as we expect not to have any text in the col or row headers when a table is first being created. Or maybe we could just use the numbers of the columns and rows? Or use the numbers as a fallback? UPDATE: I just used the column and row numbers for now.
- RubricIndicator: The inputs both need error logic.
- RubricIndicator: emit the updated cell contents (and RubricTable needs to handle them!)
- Either in RubricIndicator or RubricTable (maybe rubricTable), need to validate the points of the first column to make sure they add up to the max points.
- The BaseTextArea doesn't have the same margins as the BaseInput, but it probably should. This is out of scope for this PR chain, but should be wrangled in a more holistic way (i.e. go fix the other components that use BaseTextArea and make it so that BaseInput and BaseTextArea have the same margins).

## Random code snippets

```
        const firstRowFirstChild = wrapper.findAll('tr')[0].element.children[0]
        expect(firstRowFirstChild.children[0].tagName).toBe('RUBRIC-CRITERION-STUB')
```