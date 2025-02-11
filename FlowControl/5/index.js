let result = [];

for (let i = 1; i <= 15; i++) {
    if (i == 5 || i == 7) {
        continue;
    }
    result.add(i)
}

console.log(result)