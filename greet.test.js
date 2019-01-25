const greet = require('./greet')

test("Send Bob and return Bob", function(){
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test("If send null return my friend", function(){
    expect(greet()).toBe("Hello, my friend.");
})

test("If all uppercase return jerry", function(){
    expect(greet("JERRY")).toBe("Hello, JERRY!.");
})

test("When send a two name return 1 and 2 name", function(){
    var name = ["Jill" , "Jane"];
    expect(greet(name)).toBe("Hello, Jill and Jane.");
})

test("When send a three name return 1 and 2 and 3 name", function(){
    var name = ["Amy","Brian","Charlotte"];
    expect(greet(name)).toBe("Hello, Amy, Brian, and Charlotte.");
})
