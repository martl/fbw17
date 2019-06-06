console.log("Hello"  + ' World'); // concatenate
console.log("Hello"  * ' World'); // Not a Number
console.log("Hello"  - ' World'); // in all 
console.log("Hello"  / ' World'); // of this
console.log("Hello"  % ' World'); // cases

let helloWorld = " Hello " + 'World ';  // variable definition
helloWorld = helloWorld.trim();// overwriting old variable with removing whitespace beginning & end
console.log(helloWorld); // Hello World

let lipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."; // lipsum.com
console.log(lipsum.includes("Ipsum")); // boolean true/false

