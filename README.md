# buffer-equate
`buffer-equate` is a versatile utility function for comparing buffers with strings, numbers, or arrays of numbers. It ensures accurate and efficient buffer comparison, accommodating various input types seamlessly.

# Features
### String Comparison:
* Single character strings are treated as UTF-8 characters.
* Even-length strings are interpreted as hexadecimal representations.
### Number Comparison:
* Supports positive integers up to 4294967295.
* Automatically converts numbers to their appropriate buffer > representations.
### Array of Numbers Comparison:
* Each number in the array should be an integer (max value 255).
* Directly converts the array to a buffer.