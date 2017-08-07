let main = document.querySelector('.main');

let request = new XMLHttpRequest();
request.addEventListener("load", getProfileData);
request.open('GET', 'https://api.github.com/users/cbsardina');
request.send();

function getProfileData(request) {
  let list = '';
  let data = JSON.parse(this.responseText);

    function populatePage(data){

        const myProfile = `
            <header>
              <h1>${data.name}</h1>
            </header>
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
            <section>
              <h2>The Story</h2>
              <p>${data.bio}</p>
              <img src="${data.avatar_url}" alt="Puppy monkey baby">
            </section>
            `
            return myProfile;
          }
          let addToHTML = populatePage(data);

          main.innerHTML = addToHTML;
}
