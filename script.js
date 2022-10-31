let qu1b = document.getElementById("qu1b");
let qu2b = document.getElementById("qu2b");
let qu3b = document.getElementById("qu3b");
let flag1=0;
let flag2=0;
let flag3=0;


function display(id){
    if(id == "i1" && flag1==0){
        qu1b.style.display= "block";
        qu2b.style.display = "none";
        qu3b.style.display = "none";
        flag1=1;
        qu1b.previousElementSibling.children[2].style.display = "block";
        qu1b.previousElementSibling.children[1].style.display = "none";
    }
    else{
        qu1b.style.display = "none";
        flag1=0;
        qu1b.previousElementSibling.children[2].style.display = "none";
        qu1b.previousElementSibling.children[1].style.display = "block";
    }
    if(id == "i2" && flag2==0){
        qu2b.style.display= "block";
        qu1b.style.display = "none";
        qu3b.style.display = "none";
        flag2=1;
        qu2b.previousElementSibling.children[2].style.display = "block";
        qu2b.previousElementSibling.children[1].style.display = "none";
    }
    else{
        qu2b.style.display = "none";
        flag2=0;
        qu2b.previousElementSibling.children[2].style.display = "none";
        qu2b.previousElementSibling.children[1].style.display = "block";
    }
    if(id == "i3" && flag3==0){
        qu3b.style.display= "block";
        qu2b.style.display = "none";
        qu1b.style.display = "none";
        flag3=1;
        qu3b.previousElementSibling.children[2].style.display = "block";
        qu3b.previousElementSibling.children[1].style.display = "none";
    }
    else{
        qu3b.style.display = "none";
        flag3=0;
        qu3b.previousElementSibling.children[2].style.display = "none";
        qu3b.previousElementSibling.children[1].style.display = "block";
    }
}