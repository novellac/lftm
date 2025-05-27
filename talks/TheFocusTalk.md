# Where did my (keyboard) focus go?
This lightning talk will touch on an age-old web conundrum: Why and when to explicitly handle keyboard focus, when not to, and who benefits. This talk will be appropriate for newer frontend devs (or those new to accessibility), as well as other folks who want a better idea of how the web works (or could).

## Intro, Caveats, etc

- Keyboard focus and SR focus aren't the same!
- When I say keyboard focus, I'm almost always including the visual focus ring, too.
- Nothing here is an absolute. It depends! It all depends! Test with your users if you can and if you can't test with users, make things as predictable as possible.

## Questions I've promised to answer in my talk

- When to explicitly handle keyboard focus?
- Why to explicitly handle keyboard focus?
- When NOT to explicitly handle keyboard focus?
- Who benefits from keyboard focus?

## Random notes

- They do mention keyboard focus in some specific areas in their design system. This is great, but you might not be reading DS docs!
- One of the reasons (I think!) that products like TypeForm are so popular is that they handle keyboard focus.
- When focus gets lost, it usually goes back to the top of the document.
- Read the docs when it's unclear (I know this is an unpopular naggy thing to say buuuut)
- If you're using a focus method exposed by another component, be sure to test it (this might be vue-specific?).

## Takeaways

- You probably benefit from focus handling!

## Who needs keyboard focus?
- Just about all of us, at some point or another (give an example of circumstances under which a regular mouse user benefits from having keyboard focus handled - e.g address inputs? or search input with search and clear buttons?)
- Powerusers (e.g. administrators), esp when performing repeated tasks
- Disabled folks who use only keyboards (may be with or without a screen reader)
- People who have zoomed in (they may be on keyboards or not, but they can use the visual affordance of the focus outline we get when handling focus)
- Disabled users who use assistive technology based on keyboards

## Who implements keyboard focus?

- The browser (autofocus, HTML inputs)
- The design system (these interactions are usually smaller, like a search)
- Devs working on a product (the interactions glueing DS components together)

## Why do you need keyboard focus?

- So you don't lose your place on the page, in a long form, etc.
- So you know if you might be able to interact with an element on the screen ("perceivable" in POUR!).
- So you don't start typing your password into the login field (lolsob)

## When might you need to explicitly handle keyboard focus?

I say "might" here, because like most things with FE and a11y, it depends. But here are some indicators you may need to think about where focus is going, and if it needs to be handled.

- When you delete, dismiss, or hide something
- When you are using a non-interactive element as an interactive one (e.g. div with a button role or a main with an id for skiplink, or an in-page anchor link)
- When you need to place someone's attention in a new context (e.g. a modal dialog)
- When visual order doesn't follow DOM order (this is a maybe)
- When the action you just took creates something new (and you need to enable the user to access it right away)
- When you need to "trap" focus (not let focus go to an area of the page where it shouldn't)
- When you allow users to use hotkeys/key combos that create or destroy something.
- When you help users bypass blocks of repeated content
- When something like a timeout pops a modal dialog over everything (again, new context)

## When might you NOT need to explicitly handle keyboard focus?

- Often, actually! If you've got well thought out, semantic HTML, and/or if you're using a design system that depends on such, then you're most of the way there.
- When `autofocus` is set and you are pretty confident about where that autofocus is going to land.
- When the interactive elements are in a visual + DOM order.
- When you know that, after interacting with this feature, the feature will still exist. (I can't stress this enough. If something is going to get delete from the page, make sure you know where focus will go!)

## Resources I can give them

- Relevant WCAG success guidelines
- Relevant blog posts

## Paper notes (as-is, mostly focused on Vue):

- When to use $el vs not (item with native focus method?)
- Solid interaction patterns
-- Return to trigger
-- What to do when you delete something?
- When NOT to handle focus?
- Using autofocus vs manually setting focus via code.
- Examples of WHY you might want to have good focus handling
-- Powerusers
-- Keyboard users (a11y - kb, how many AT is based on keyboard "solve for keyboard, solve for many")
- Caveats about SR vs KB focus?
- Give a basic example of a UX guideline people can use for their own design systems.
- Special considerations for design system/component library components.
- Testing focus
-- attachTo
-- activeElement
-- when something gets focused onMounted
-- when something triggers focus
-- when you need to test that a nested component had a focus (or any, really) method called.
-- when exposing a method

## Slides

- Title slide
- My name/where to find me around the web
- WHO benefits from keyboard focus?
-- You, probably this week.
-- Powerusers
-- Disabled users on keyboards (may be with or without a screen reader)
-- Disabled users on assistive technology reliant on keyboard interactions (e.g. voice control)
-- Users zoomed in on the screen (the screen gets big, and proper keyboard focus is a good way to not lose your spot)
-- Users sharing their screen to demo form interactions
-- It's a long list. You get me.