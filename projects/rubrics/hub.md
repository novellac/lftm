

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

"columnDeleted": "Column deleted",
    "columnDeleteConfirmation": "Are you sure you want to delete this column from your rubric? This cannot be undone.",
   

## Discussion with MH about responding to VoiceThread comments on 2025.03.17
Ref: https://voicethread.com/myvoice/thread/28508370/170428594/151284325

1. What does a rubric belong to? Course, org, user, assignment?

2. What would you (personally) expect the API to return when you're accessing the rubric (esp from outside of the wizard)?

3. Are the new screens she shows are part of the wizard? (I REALLY hope not, but if so where is the teal bar, and if not where is this?)
- MH: Depends on what the rubric is associated with. Shared components with a wizard wrapper maybe. Maybe just saving and loading in the Wizard wrapper. Manifest tells us to go to rubric screen.
- Suggest it be another step in the Wizard if we need back buttons.
- If in wizard as an additonal step, then need help drafting a request for the thing we need in manifest.

4. What happens if you go back and choose not to use a rubric?
- MH the create rubric button is weird. Creating the rubric should be a manifest step.

Manifest can just tell us when to show a rubric creator

this kind of thing == (where there's a button that looks like a button that has a side effect of moving someone to a new page and new context)
--

An argument for doing it in universal - we definitely do not want a multistep form that is controlled by BE in wizard but not controlled by the BE in Universal, because then everyone would have to write everything twice. 

In universal, we have a rubric creator route, with an assignment id param.
We open the rubric creator in a new tab when clicking "create rubric" from the wizard.
Because we know the assignment ID, we can go to the multi-step form.
The backlink could go to to the wizard/id (they'd still be at their place in the wizard)
The "save rubric" button text would need to be something more like "save and go back to your place in the wonderful wizard" or whatever.

User VQ so that whenever someone leaves the tab and comes back the assignment gets refetched. (or We may be able to use the "setup open in new tab" composable to re-fetch the created rubric when the user goes back to the wizard.)

What does the save button to?
- Updates/Stores rubric in the db (so, hits the rubric endpoint)
- What if someone wants to save and keep working?

### Potential VT comments

What does "back" mean?
- Save and go back?
- Does it unassociate the rubric id from the assignment?
---------
I want to suggest a small adjustment to the create rubric flow to support usability and accessibility. Currently the user has to wait for the assignment API endpoint to return with the newly attached rubricId before the rubric flow opens in a new tab. We don't know long that will take, especially on public school wifi. Particularly with our LMS products, wizard and student are heavily reviewed for accessibility, and this kind of thing has come up in reports. We're not indicating to the user that the button will navigate them somewhere. An easy fix for this wold be to use a link, but we don't know where the link will go until the BE returns. That might take a while, and could make a user unsure if the program is working or what has happened.

A potential fix for both issues would be if "Create rubric" is a link to universal/rubric/edit/taskId. When the user hits "Save rubric" in the rubric flow, the rubric is saved with the taskId. Moving the point at which we attach a rubricId to the task would allow us to have a clear link to the rubric creator, and a clear save button, solving both the concerns. 
---------
Just double-checking, it looks like we're opening in a new tab and the rubric creator is living in Universal. Is that still true? That is FE's strong preference.

## List of rubrics that exist and I can mess with as of 2025.05.02
List all rubrics
1. 25609 - funky cold marubric
2. 25610 - Test Rubric 20250127
3. 25611 - Test Rubric 20250127
4. 25612 - Test Rubric 20250127
5. 25613 - Test Rubric 20250127
6. 25614 - Test Rubric 20250127
7. 25615 - Test Rubric 20250127
8. 25616 - Test Rubric 20250127
9. 25617 - Test Rubric 20250127
10. 25618 - Test Rubric 20250127
11. 25619 - Test Rubric 20250127
12. 25620 - Test Rubric 20250127
13. 25621 - Test Rubric 20250127
14. 25622 - Test Rubric 2025_01_29
15. 25698 - Funky Stupid Rubric

## List of Tasks with Rubrics attached I can use for examples as of 2025.05.05
1. 26039 - Assn for Rubric 7 (has rubricId 25621 attached)

### How to attach a rubricId to a task manually
1. Get an assignment id
2. Get a rubric ID I know is valid
3. Send a patch to the task endpoint with the rubric ID in the taskParams (e.g. ` saveTask(params.value?.taskId, { taskParams: params.value?.taskParams }, props.options.do)` from WizardRubricButton.vue)

WEIRD: I REALLY THOUGHT THE ABOVE STEPS GAVE ME AN ATTACHED RUBRIC BUT NOW I CAN'T DO ANOTHER ONE?????