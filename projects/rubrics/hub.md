

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

Task id - Rubric Id
27551 - 27552
27549 - 27553
27547 - 27554
27546 - 27555

### Assignment links that are ready for students to complete:
Percent - 29844: https://prod-moodle.voicethread.com/mod/lti/view.php?id=3887
Points - 29795: https://prod-moodle.voicethread.com/mod/lti/view.php?id=3871
Passfail - 29726: https://prod-moodle.voicethread.com/mod/lti/view.php?id=3825

### How to attach a rubricId to a task manually (obsolete)
1. Get an assignment id
2. Get a rubric ID I know is valid
3. Send a patch to the task endpoint with the rubric ID in the taskParams (e.g. ` saveTask(params.value?.taskId, { taskParams: params.value?.taskParams }, props.options.do)` from WizardRubricButton.vue)


## Big list of TODOs

- Debounce message when someone is on the rubric flow (either screen) and tries to navigate away
- Confirmation message for delete functionality in the Wizard
- Disallow points inputs on the RubricIndicators when the assessmentType is passfail
- Figure out how best to test for taskId being able to be a number
- Do alllllllll that validation :sob: and figure out what they want validated :sobsob:
- Handle focus when a user tabs away from a rubric cell popover
- Make sure that "break-all" is on for ALL table text
- Make sure that hyphens are on for ALL table text
- Give a min-w 80px on all cells
- Add a step input for rubric indicator of 0.01
- Make sure the accepted pattern allows for decimals in the rubric indicator
- RubricHeader cells scrims don't extend to fill height - fix!
- Figure out why col/row removal isn't being announced to SR (rebase main and try again; MH did some work on announcements recently)
- Check Factories to know if there are still TS errors for Rubrics
- Place focus on the rubric container when the "show rubric" button is clicked.
- Make it so that when you tab out of a popover, you tab to the next cell.
- Ask BE if we can just pass the grade, instead of the whole rubric, when calling /rubric/grade endpoint.
- Try MH's idea for hasUnsavedChanges (in Notion doc)
- Ask CN if we should allow users with guidance rubrics to select indicators, or if the rubric should be view-only. Currently when you click on an indicator in a guidance rubric, you get a 500 with "Rubric is not for grading."
- When you first create a guidance-only rubric, it doesn't save that way on first save in the RubricEdit screen. I think this is an FE problem, we are probably defaulting to isRubricForGrading true and updating incorrectly?
- When in the rubric flow, disallow editing in the first column of the rubric table when the assessmentType is passfail? (This came from a [Slack thread](https://voicethread.slack.com/archives/C07S81K1LTE/p1755273635368489?thread_ts=1755272657.042779&cid=C07S81K1LTE) where AA suggested this but CN did not confirm.)

## List of BE Issues
- The first time(?) the `task` endpoint gets a PATCH call with `rubricAction: "edit"` it responds with a 500. Subsequent PATCH calls with `rubricAction: "edit"` respond with 200s.

## Big list of TODone's!
- BE task: Remove the extra label on the Wizard radio buttons (asked BE to handle)
- BE task: When the init screen of the rubric is filled out and submitted to task/rubric, the rubric comes back populated with a suggested set of cells, as expected. Can we add `action:update` to those cells? This will allow users to delete a column right away even if they haven't updated it yet. In the FE code, we depend on knowing which header/criteria cells came from the BE, and use the presence of the `action` key to do so.
- BE task: BE label in Wizard is not translated (assigned ticket to BE)
- Ask BE if they will please add the `action` property to the stubbed rubrics they create and send when a rubric is first created.
- Check that when you first save the rubric just after creating it, that the assessment type doesn't change.
- Wizard - wrap the "Create rubric" link in an open in new tab button, and send a refresh to the Wizard when tabbing back to the tab, I guess?
- Replace Submit rubric with Save rubric
- Hook up the Edit pencil button next to the rubric title
- Figure out why deleting two rows doesn't delete the two rows it should (e.g. in a table with row0, row1, row2, and row3, deleting row1 and row2 ends up deleting row1 and row3). I used to think this was a BE issue but now actually I think this is an FE issue! My best guess is it's something in the computed property. I think the same thing goes for rows. I'm not sure if the issue is in the computed, actually, or maybe it's in the cells not getting the message that they should change?
- Patch requests to rubric on subsequent calls after making the initial rubric has assessmentType 0! Should be assessmentType whatever, or maybe we can just leave off the assessmentType from the params? idk, investigate more!
- Figure out why data doesn't update when you click the submit rubric (save) button
- Emit up the updated table data
- Add back in the SaveCancel footer bar (should be in ideas somewhere)
- Show the unsaved changes message
- When I send `action:delete` on a criteria, the row does not get deleted.
- When I send `action:update` on a criteria, the row does not get replaced (still joins)
- (Pursuant to AA's update to the BE so we can use update/delete in each cell) - format the data with update or delete (oof this is bigger than just one line item) (done but not PR'ed)
- Add rubric save to the RubricView (this will save metadata like assessment type)
- parentTypeId: 'taskId', // TODO: Figure out if this key is still in use or called the same on the BE - yes still in use
- Remove the clear button from the form init screen. - done
- Figure out what to do if a user does have a rubric on a task but still navigates to /rubric/edit?taskId=1234 (maybe just push them to the correct route and then run the getOrInit fn again?) - I have a cast for this now
- See if we can get the `points` (or `maxPoints`) key on the rubric so we don't have to pull it separately all the time - updated the type and name everywhere
- Hook up Reset button in the RubricEditScreen
- Hook up the Save progress button in the RubricEditScreen
- Hook up the SubmitRubric button in the RubricEditScreen



## Notes from discussion with Sarah on 2025.05.14:

- Definitely no horizontal scrolling unless its necessary
