# Essential-JavaScript-before-frameworks
Let us look at the essential JavaScript that you need to know before using Frontend Frameworks

## Prerequisites 
Install quokka extension on VS Code to visually see the output/ result

## Essential topics to master

### 1. Destructing Objects & Arrays
This is important and necessary whenever we want to get data from an object or array.

### 2. Rest / Spread Operators
Rest = Used to collect multiple elements into an array or object.
Spread = Used to unpack (spread) elements from an array or object.

💡 Quick Rule of Thumb:
If you’re unpacking, it’s spread.
If you’re gathering, it’s rest.

Both are essential in modern frontend frameworks in handling props, managing state and improving code readability

### 3. Template literals 
It is an ES6 feature, modern way of creating strings that allow embedded expressions, multiline strings and enhanced readability.
Explore string interpolation with backticks and embedded expressions.

### 4. Ternaries
Contains three parts:
    1. Condition
    2. Results of the operation if the condition is true
    3. Result of the operation if the result is false

    Example:
    page > 100 (condition) ? "over a thousand"(true) : "less than 1000"(false);

### 5. Arrow Functions
Essentially useful in situations where shorter function definitions improve code readability.
Useful in callbacks and functional programming

### 6. Short-Circuiting and Logical Operators: `&&`, `||`, `??` 
Short-circuiting means JavaScript stops evaluating an expression as soon as it knows the final result.
This happens with logical operators like:
    || (OR)
    && (AND)
    ?? (Nullish coalescing)

🧠 Why It’s Called “Short-Circuiting”?
Because JavaScript short-circuits the rest of the expression once it knows the result.

### 7. Optional Chaining 
Optional chaining (?.) safely accesses deeply nested object properties without throwing an error if something is undefined or null.
