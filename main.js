name_register = [];
function submit()
{
    var name1=document.getElementById("Text1").value;
    var name2=document.getElementById("Text2").value;
    var name3=document.getElementById("Text3").value;
    var name4=document.getElementById("Text4").value;

    name_register.push(name1);
    name_register.push(name2);
    name_register.push(name3);
    name_register.push(name4);

    console.log(name_register);

    document.getElementById("display_name").innerHTML=name_register;
    document.getElementById("button1").style.display="none";
    document.getElementById("button2").style.display="inline-block";
}

function sort()
{
    name_register.sort();
    console.log(name_register);
    document.getElementById("display_name").innerHTML=name_register;
    
}