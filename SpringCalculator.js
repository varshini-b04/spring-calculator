const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function add(numbers) {
    //empty input
    if (numbers === "") {
        return 0;
    }

    // Default delimiter
    let delimiter = ",";
    
    //custom delimiter
    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        delimiter = numbers.substring(2, delimiterEndIndex);
        numbers = numbers.substring(delimiterEndIndex + 1);
    }

    // Splitting the string 
    const numberArray = numbers.split(new RegExp(`[${delimiter}\n]`)).map(Number);

    //negative numbers
    const negatives = numberArray.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error("negatives not allowed: " + negatives.join(", "));
    }

// Sum the numbers
return numberArray.reduce((sum, num) => sum + num, 0);
}

function getUserInput() {
    rl.question('Enter numbers : ', (input) => {
        try {
            const result = add(input);
            console.log(`Result: ${result}`);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        } finally {
            rl.close();
        }
    });
}

getUserInput();
 