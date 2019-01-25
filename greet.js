function greet(name) {

    if (name == null) {
      return "Hello, my friend.";
    }else if (Array.isArray(name)){
        
       if (name.length == 2){ 

        return "Hello, " + name.join(" and ") + ".";

       }else if (name.length == 3){

        var tmp = name.slice(0,2);
        return "Hello, " + tmp.join(", ") + ", and " + name[2] + "."; 
       }

    }else if (name == name.toUpperCase()) {
      return "Hello, " + name + "!.";
    } else {
      return "Hello, " + name + ".";
    }
  }


module.exports = greet;
