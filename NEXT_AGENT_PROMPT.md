# Next Agent Prompt

Project path:
`C:\Users\wfptn\IdeaProjects\TEMA7_UBUNG`

You are taking over a static German-learning app for **Lektion 7: Rund ums Wohnen**.

## Goal

Continue improving the app **without rebuilding it from scratch**. Optimize for:

- maintainability by future AI agents
- clear data ownership
- smaller reasoning surface
- static deployment simplicity
- lesson quality and UX clarity

## Current architecture

Use these files as the source of truth:

- `grammar.js`  
  Grammar concepts and general rule cards.
- `vocab.js`  
  Vocabulary entries, meanings, forms, and the single German hint used by generated gap-fill tasks.
- `sentences.js`  
  `sentenceBankV2` with 50 sentence-centric entries. This is the canonical source for sentence-based tasks.
- `data.js`  
  App settings and legacy explicit `formTraining` tasks.
- `task-help.js`  
  Multilingual "Was zu tun hier?" copy.
- `ui-config.js`  
  Static UI labels and round-policy config.
- `script.js`  
  Runtime generation, round selection, controllers, rendering, validation, and finish analytics.
- `validate-data.js`  
  Local validation script. Run this after any data edits.

## Important architectural decisions already made

1. **Sentence-based tasks are generated at runtime** from `sentenceBankV2`.
   - sentenceBuilder
   - multipleChoice
   - gapFill
   - errorSearch
   - sentenceMatch

2. **Form tasks are still explicit** and come from `data.js`.

3. **Vocabulary stays curated.**
   Do not bloat the vocabulary bank just to satisfy one sentence. If a generated gap-fill target is not safely backed by vocabulary, prefer changing the sentence’s `vocabularyLinks` rather than stuffing more words into `vocab.js`.

4. **ErrorSearch must be a real misspelling.**
   - no whitespace-inserted fake errors
   - typo options live in `sentences.js`
   - `script.js` rejects whitespace typo variants at runtime
   - `validate-data.js` now also rejects them

5. **Theory view must render from lesson data, not generated task cards.**
   This was previously broken by showing grouped sentenceMatch boards as if they were normal theory sentences.

## Current maintainability state

Good:
- data split into dedicated files
- task help moved out of `script.js`
- UI config moved out of `script.js`
- round policy partially centralized
- `TASK_CONTROLLERS` now owns all task types
- validator passes cleanly

Still worth improving:
- `script.js` is still large and remains the behavioral hub
- runtime task generation should eventually move into a clearer task-factory boundary
- some remaining UI strings may still live in logic code
- some rendering still uses trusted HTML/text assembly patterns that could be tightened later

## Before you change anything

Run:

```powershell
node --check "C:\Users\wfptn\IdeaProjects\TEMA7_UBUNG\script.js"
node "C:\Users\wfptn\IdeaProjects\TEMA7_UBUNG\validate-data.js"
```

## Editing guidance

- Prefer small, reviewable refactors.
- Do not introduce a framework or bundler.
- Do not rewrite `style.css` wholesale.
- Do not bulk-regenerate lesson content without a very good reason.
- Prefer extending `TASK_CONTROLLERS` or task-factory helpers over adding more global branching.
- Keep comments high-signal and architecture-oriented.

## Good next-step candidates

1. Extract runtime task generation from `script.js` into a dedicated factory file/module.
2. Finish moving stray UI text/config out of behavior code.
3. Tighten validation further where generated tasks depend on vocabulary or grammar links.
4. Improve randomness/repetition control without persisting history across sessions.

## UX constraints that matter

- The user is very sensitive to repeated content and fake randomness.
- `Fehlersuche` must feel like an actual spelling/grammar exercise, not a tokenization glitch.
- Sentence-specific notes ("Besonderheit im Satz") are important and should remain visible when relevant.
- The app should stay understandable for students and maintainable for agents.

If you’re unsure, favor the option that keeps the data model clearer and the runtime smaller.
