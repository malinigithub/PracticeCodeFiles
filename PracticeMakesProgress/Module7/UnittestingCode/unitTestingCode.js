describe("test greet()", function () {
  it("should be called", function () {
    expect(greet("Eliabeth")).toBeCalled();
  });
  it("should greet with Hello name", function () {
    expect(greet("Elizabeth")).toEqual("Hello, Elizabeth");
  });
  it("should handle null values with default", function () {
    expect(greet()).toEqual("Hello, there!");
  });
  it("should be all upper case if input is uppercase", function () {
    expect(greet("JOSE")).toEqual("HELLO JOSE!");
  });
  it("should handle 2 input names and greet both names", function () {
    expect(greet(["Jose", "Pep"])).toEqual("Hello, Jose, Pep");
  });
  it("should handle multiple names and greet them", function () {
    expect(greet(["Alex", "Arsene", "Jose", "Zidane"])).toEqual(
      "Hello, Alex, Arsene, Jose, Zidane"
    );
  });
});

/*Next, handle null values by introducing a default. For example, when the name parameter is null, then the method should return the string “Hello there!”.
Next, add shouting. When “name” is all uppercase, then the method should shout back to the user. For example, when the name is "JOSE" then the method should return the string "HELLO JOSE!".
Next, Handle two names as input. If the name parameter is an array containing two names, then both names should be greeted. For example, if the input parameter is [‘Jose’,’Pep’], the method should return the string: “Hello, Jose, Pep”. 
Finally, Handle an arbitrary number of names as input. If the name parameter is an array of multiple names, all names must be greeted. For example, if the input parameter is [‘Alex’,’Arsene’,’Jose’,’Zidane’], the method should return the string: “Hello, Alex, Arsene, Jose, Zidane” */
