let find = document.getElementById('find');

var inputName;
find.addEventListener('click',calling);
var details = [];

async function calling(){
    inputName = document.getElementById('profileName').value; 
    var url = `https://api.github.com/users/${inputName}` 
    // calling API
    const response = await fetch(url);
    details = await response.json();
    console.log(details)
    console.log(details.name)
    document.getElementById('userName').innerText = "NAME :  "+details.name;
    document.getElementById('follows').innerText = "FOLLOWS :  "+details.followers;
    document.getElementById('followers').innerText = "FOLLOWING :  "+details.following;
    document.getElementById('repository').innerText = "REPOSITORY :  "+details.public_repos;
    document.getElementById('profileImg').setAttribute('src',details.avatar_url);
    document.getElementById('anchor').setAttribute('href',details.html_url)

    










}

// calling api
var api = url
