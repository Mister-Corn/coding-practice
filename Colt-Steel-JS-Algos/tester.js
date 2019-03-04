module.exports = function (func, argsArr) {
    console.log(`Running ${func.name}!`);
    for (const args of argsArr) {
        const expect = args[args.length - 1];
        console.log('Arguments:', args.slice(0, -1).join(', '));
        console.log('--Expect   :', expect);
        console.log('--Result   :', func(...args));
        console.log('');
    }
    console.log('---------------------');
}