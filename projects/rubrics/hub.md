

Trello card:

    https://trello.com/c/k2mtgwCy/33-assignments-rubrics

    Plan tooling with the feature/rubric/phase5 branch is called `berubric`

## Outstanding issues/questions

- How do we get the max points in the upper left corner of the rubric table when in the "view" mode? Should we get it from the assignment? Can BE send it with the rubric (and I don't care where they get it from)?
- Is the "grade" view part of the MVP?
- How is a teacher supposed to select one cell per row?
- Can the teacher select more than one cell per row (I'd think not but shrug)?
- Do all the rows have to be filled out before the teacher can submit the rubric?
- If the teacher does not fill out all the rows before submitting, how is the student assigned points?
- How does the teacher submit the rubric?
- Opinion: IMO it would be easier for phased development if we skipped the grading process right now and only allowed the teacher to create a rubric and the student to see it for reference. This would also give us more time to figure out how we are conveying the points overrides.

## Random code snippets

```
        const firstRowFirstChild = wrapper.findAll('tr')[0].element.children[0]
        expect(firstRowFirstChild.children[0].tagName).toBe('RUBRIC-CRITERION-STUB')
```