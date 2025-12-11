console.log("=== Exercise 1: Capitalize First Letter of Each Word ===");

function capitalizeWords(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(' ');
}

console.log(capitalizeWords("coding is fun"));
console.log(capitalizeWords("web development")); 
console.log(capitalizeWords("programming languages")); 

console.log("=== Exercise 2: Find Maximum of Three Numbers ===");

function max(a, b, c) {
    return Math.max(a, b, c);
}

console.log(max(1, 0, 1));
console.log(max(0, -10, -20)); 
console.log(max(1000, 510, 440)); 

console.log("=== Exercise 3: Move Last Three Characters to Front ===");

function right(str) {
    if (str.length < 3) {
        return str;
    }
    const lastThree = str.slice(-3);
    const remaining = str.slice(0, -3);
    return lastThree + remaining;
}

console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi")); 

console.log("=== Exercise 4: Classify Angle Type ===");

function angle_Type(angle) {
    if (angle < 0 || angle > 180) {
        return "Invalid angle";
    } else if (angle === 0) {
        return "Zero angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    }
}

console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145)); 
console.log(angle_Type(180)); 
console.log(angle_Type(0));
console.log(angle_Type(200));

