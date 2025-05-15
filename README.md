1. Blog post for union and intersection types in TypeScript.

Union Type
A union type allows a variable to accept one value from multiple possible types, but only one type at a time. This is useful when a value might vary but is still limited to a known set of types.

Example
function printValue(value: string | number) {
console.log("Value:", value);
}

printValue("Hello");
printValue(123);

In the example above, value can either be a string or a number, but not both — and not any other type. Union types give flexibility with control.

Intersection Type
An intersection type combines multiple types into one, meaning the resulting value must satisfy all included types. This is perfect when you need an object that has all the properties of several different types.

Example
type User = {
name: string;
};

type Admin = {
accessLevel: number;
};

type AdminUser = User & Admin;

const admin: AdminUser = {
name: "Alice",
accessLevel: 5
};

Here, AdminUser must include both name from User and accessLevel from Admin. This is useful when you’re composing complex object structures with shared traits.

--- end post one ---

2.Explain the difference between any, unknown, and never types in TypeScript.

any: A type that disables all type checking; any value can be assigned, and any operation is allowed.
Example
let a: any = 5;
a = "hello";
a.toFixed();

unknown: A type that accepts any value but restricts operations until the type is narrowed (e.g., via type guards).
Example
let u: unknown = 10;
if (typeof u === "number") {
console.log(u.toFixed(2)); // Safe after type check
}

never: A type that represents values that never produce a result or never successfully complete, such as functions that always throw errors or run infinitely without returning.
Example
function error(message: string): never {
throw new Error(message);
}
