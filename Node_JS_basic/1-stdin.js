process.stdout.write("Welcome to Holberton School, what is your name?\n")
process.stdin.setEncoding('utf8')
process.stdin.on('data', function (data) {
    const name = data.trim();
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing')
    process.stdin.end();
});
