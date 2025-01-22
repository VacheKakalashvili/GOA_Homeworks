function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example
const listWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(listWithDuplicates)); // Output: [1, 2, 3, 4, 5]
