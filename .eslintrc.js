// Use this file as a starting point for your project's .eslintrc.
// Copy this file, and add rule overrides as needed.
// the base style guide for this project is Airbnb
// see: https://github.com/airbnb/javascript
module.exports = {
    "extends": "airbnb-base",
    "env": {
        "es6": true
    },
    "globals": {
        "window": true,
        "document": true,
        "d3": true,
        "$": true,
        "jQuery": true
    },
    // overrides to the Airbnb style follow
    "rules": {
        // indentation should be 4 spaces (use soft tabs) and switch cases should be indented
        "indent": [2, 4, {
            "SwitchCase": 1
        }],
        // also set the tab width for the max line width with a max length of 100
        "max-len": [1, 160, {"tabWidth": 4}],
        // do not allow dangling commas at the end of arrays, objects, etc.
        "comma-dangle": [2, "never"],
        // downgrade extra semicolons to warnings
        "no-extra-semi": [1],
        // require parens in arrow functions with single arguments for improved readability
        "arrow-parens": [2, "always"],
        // allow double-quoted strings
        "quotes": [0],
        // allow for loops
        "no-restricted-syntax": [2, "LabeledStatement", "WithStatement"],
        // require stroustrup brace styles
        "brace-style": [1, "stroustrup"],
        // downgrading export default preference to warning, since we may add additional exports
        // to files in the future
        "import/prefer-default-export": [1],
        "no-underscore-dangle": [0, {
            "allowAfterThis": true
        }],
        // allow ++ and -- in for loops
        "no-plusplus": [2, {
            "allowForLoopAfterthoughts": true
        }],
        // allow continue statements
        "no-continue": [0],
        // allow named exports in files with default exports in order to expose containers
        // for testing
        "import/no-named-as-default": [0],
        // don't require all function arguments be on new lines
        "function-paren-newline": [0],
        // ignore jsdoc
        "spaced-comment": ["error", "always", {
            "exceptions": ["*"]
        }],
        // for now, don't do destructuring
        "prefer-destructuring": [0],
        // allow some globals
        "no-restricted-globals": [0],
        "prefer-const": "error",
        "no-param-reassign": "off"
    }
}