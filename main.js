function goTohotels() {
    window.location='/hotel.html'
}

function goToRestaurnts() {
    window.location='/restaurantsHome.html'
}

function addtolist()
{
    //get input value
    let text = document.getElementById("input").value

    //get list
    let ul = document.getElementById("list");

    //create new item
    let li = document.createElement("li");

    //add input value to the new item
    li.textContent=text 
    let hr=document.createElement("hr");
    //add new item to the list
    ul.appendChild(li);
    ul.appendChild(hr)

} 
