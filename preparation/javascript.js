function greetuser(name,callback)
{
    console.log(`Harika : Hello, ${name}`);
    callback();
}

function askquestion()
{
    console.log("how are you today?");
}

function named(a,callback)
{
    console.log("Akhila : Hello "+ a);
    callback();

}

function reply()
{
    console.log("I am Fine")
}



greetuser("akhila",askquestion)
named("Harika", reply)


