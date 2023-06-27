const loadButton = document.getElementById('loadButton');
const rulesList = document.getElementById('rulesList');

loadButton.addEventListener('click', () => {
  fetch('becode.json')
    .then(response => response.json())
    .then(data => {
      rulesList.innerHTML = '';

      data.forEach(rule => {
        const listItem = document.createElement('li');
        listItem.textContent = rule;
        rulesList.appendChild(listItem);
      });
    })
    .catch(error => {
        console.log('There was an error!', error)
    });
});






// const fetchName = name => fetch('https://api.agify.io/?name='+name)

// fetchName('safae')
// .then(response => response.json())
// .then(json => {
//   console.log(json.age)
//   console.log(json.count)
// })
// .catch(error => {
//   console.log('There was an error!', error)
// })
