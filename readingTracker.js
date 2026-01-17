// Weekly reading log
// Each object in the array represents a day's reading activity,
// including the day, the book read, and minutes spent reading.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Function: addReadBook
// Purpose: Adds a new reading entry to the log
// Inputs: day (string), book (string), minutes (number)
// Output: Updates the readingLog array by adding a new entry
function addReadBook(day, book, minutes) {
  // Create a new object representing today's reading
  const newEntry = { day, book, minutes };
  // Add the new entry to the end of the readingLog array
  readingLog.push(newEntry);
}

// Function: totalReadingMinutes
// Purpose: Calculate the total minutes read for the week
// Inputs: log (array of reading entries)
// Output: total minutes read as a number
function totalReadingMinutes(log) {
  let total = 0;
  // Loop through each entry and sum the minutes
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Function: mostReadBook
// Purpose: Determine which book was read the most times
// Inputs: log (array of reading entries)
// Output: string representing the most frequently read book
function mostReadBook(log) {
  const bookCounts = {};
  // Count how many times each book appears in the log
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  // Loop through the book counts to find the highest
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Function: printDailySummary
// Purpose: Print a formatted summary of reading per day
// Inputs: log (array of reading entries)
// Output: logs a string to the console for each day
function printDailySummary(log) {
  // Loop through each day's reading and print details
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Suggestion for improvement:
// Currently, addReadBook does not validate inputs (e.g., negative minutes or empty strings).
// Adding simple input checks would make this code more robust and prevent invalid entries.

// Example usage / test cases
addReadBook("Saturday", "Dune", 50); // Adds a new entry
addReadBook("Sunday", "Brave New World", 35); // Test case: new book added

printDailySummary(readingLog); // Prints all days, including new entries
console.log("Total minutes read:", totalReadingMinutes(readingLog)); // Sums all minutes
console.log("Most read book:", mostReadBook(readingLog)); // Finds the book read most often

// Test case: adding a new book entry
addBook("The Hobbit", 310);
console.log(readingLog); // Verify it was added

// GitHub Repo URL: https://github.com/yanevah/cs81-module4a-reviewtracker

