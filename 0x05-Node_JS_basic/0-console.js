module.exports = function displayMessage(){
    for (let i = 0; i < arguments.length; i++)
    {
        if (typeof arguments[i] == 'string')
        {
            process.stdout.write(arguments[i]);
        }
    }
}
