## IMPROVEMENTS

When doing this test, my main focus, as requested, was:
* Making it work, first and foremost!
* Unit tests.
So performance or other improvements (readbility, maintainability, scalability...) were second class citizens. I've tried to follow the same conventions seen in the project.

For future improvements I'd probably consider:
* File structure. Although this file structure for smaller projects might work just fine, the logic folder and specially the "logic files" might get too cluttered and messy pretty soon.
* Beware of "fat reducers"
* Consider separating presentational components from their "data providers" or container components. Easier to maintain, test and reason about.
* Consider adding more components. e.g. The ItemsList could render an Item in order to make it easier to test.
* Improve test coverage. because test coverage.
* Snapshot testing. It comes almost for free with Jest and avoids lots of complicated tests.
* Selectors (included). abstract state selection for testability. Consider reselect for selector memoization.
* Beware of including Array.map in the render method of a component (ItemsList). Since map returns a new array, it'd force the component to rerender every time.
* Consider CSSinJS. This is a personal preference but in bigger projects makes theming and consistent styling easier.
* Consider dropping Redux. There is no real need to have a global state managed by a 3rd party library. Redux works great when the same state needs to be accessed by many components "very separated". In this case components internal state or React's context would work just as nice.
* Less important but, consider including a CSS base, i.e. normalizecss or similar to avoid cross-browser styling conflicts