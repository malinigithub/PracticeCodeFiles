/* First, Write a function called Greet(name) that takes an argument called name, and returns a simple greeting message. For example, if the name is “Elizabeth” the function should return “Hello, Elizabeth”.*/

function greet(...name) {
  let fullName = "";
  let commaChar = "";
  for (i = 0; i < name.length; i++) {
    fullName = fullName + commaChar + name[i];
    if (fullName !== null) commaChar = ",";
  }
  if (fullName === null) return "Hello, there!";
  else if (fullName === toUpperCase(fullName)) return "HELLO " + fullName;
  else return "Hello " + fullName;
}

/* 
Next, handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.
Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".
Next, Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”. 
Finally, Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], the method should return the string: “Hello, Alex, Arsene, Jose, Zidane” */
