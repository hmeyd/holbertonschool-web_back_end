process.stdout.write("Welcome to Holberton School, what is your name?\n")

process.stdin.on('data', function (data) {
    const name =data.trim();
    if (name === 'exit') {
        process.stdin.end();
        return;
    }
    console.log(`Your name is: ${name}`);
});
process.stdin.on('end', function (){
    console.log('This important software is now closing');
});
