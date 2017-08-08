let vCard = document.querySelector('.vCard');

let request = new XMLHttpRequest();
request.addEventListener("load", getProfileData);
request.open('GET', 'https://api.github.com/users/cbsardina');
request.send();

function getProfileData(request) {
  let data = JSON.parse(this.responseText);

    function populatePage(data){
        const myProfile = `
            <div class="main">
            <header>
              <h1>${data.name}</h1>
            </header>
            <div class="border">&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;&#x25BC;</div>
              <div class="details">
                <h2>The Basics</h2>
                <ul>
                  <li><span>Name: </span>${data.name}</li>
                  <li><span>GitHub URL: </span>${data.html_url}</li>
                  <li><span>Email: </span>${data.login}@gmail.com</li>
                  <li><span>Company: </span>${data.company}</li>
                  <li><span>Website: </span>${data.blog}</li>
                </ul>
              </div>
              <section class="story">
                <h2>The Story</h2>
                <p>${data.bio}</p>
                </section>
                <div class="profilePic">
                  <img src="${data.avatar_url}" alt="Puppy monkey baby">
                </div>
            </div>
            `
            return myProfile;
          }
          let addToHTML = populatePage(data);

          vCard.innerHTML = addToHTML;
}
