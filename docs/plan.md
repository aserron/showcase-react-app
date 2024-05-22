# Good Practices In Action

## Intro
A branch will be created for each feature, and the following implementation path will be follow.

## Project Plan.
The stakeholders wants to integrate the following features.
Because they are into some.... then... and:

- Visitor Access
- Account
    - Sign Up
    - Log In / Out
    - Preferences
        - Dark Mode On/OFF
- Very Unuseful Information
    - Consume some sort of REST API
    - Provide listing, list/detail pattern.
    - Allow local and remote filter.
- Vistors Page
    - Site chat room for visitors.
- Chart-O-Rama
    - Chart structured data
        - Initial support for csv
            - Optional excel, plain txt.
            - Planned: xml, json, jsonl
    - User can pick fields and plot them.

## UX Team Requirements
The designs team add their own requirements.
- Site should be Mobile First.
- Must implement a known React SPA design systen
- Flexible implementation
    - Decoupled markup and css as possible
    - Reusable component layer.


## Implementation Plan.
1. Feature will be implemented in partial working state, without any good practice, pattern or principle, as rough as it can be.
2. Hence the branch will be buggy at least
3. Lastly the feature won't be extensible and won't allow merging with the main.
4. Each branch will evolve by applying
    5. Clean Code
        6. SOLID
        7. DRY
        8. Splitting / Memoization
    6. React Specifics
        7. Avoid unneeded re render.
        8. decouple
        9. slice model
    10. App Optimization
        11. Local Storage, Indexed DB
        12. Pre-Loading
        13. Optimize API / Service Access
    14. Browser Optimization
        15. ETAG, Browser caching.

## Project Workflow
    1.  Features will be documented 
    2.  Refactor will added as issues.
    3.  Bugs & Deffects should be adadded as issues.

## Publish Guidelines
    1. Feature will be added in mayor releases.
    2. Bugs will be added in lesser realeses.
    3. Features will be isolated until merged at dev branch.

