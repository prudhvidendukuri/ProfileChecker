let find = document.getElementById('find');
document.getElementById('display').style.display = 'none';
var inputName;
find.addEventListener('click', calling);
var details = [];

async function calling() {
    inputName = document.getElementById('profileName').value;
    var url = `https://api.github.com/users/${inputName}`;
    document.getElementById('display').style.display = 'flex';
    // calling API
    try {
        const response = await fetch(url);
        details = await response.json();
    } catch (e) {
        console.log(e);
    }
    document.getElementById('userName').innerText = "NAME :  " + details.name;
    document.getElementById('follows').innerText = "FOLLOWERS :  " + details.followers;
    document.getElementById('followers').innerText = "FOLLOWING :  " + details.following;
    document.getElementById('repository').innerText = "REPOSITORY :  " + details.public_repos;
    document.getElementById('profileImg').setAttribute('src', details.avatar_url);
    document.getElementById('anchor').setAttribute('href', details.html_url)


}
