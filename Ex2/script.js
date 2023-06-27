const nameInput = document.getElementById('nameInput');
const countrySelect = document.getElementById('countrySelect');
const fetchButton = document.getElementById('fetchButton');
const resultsDiv = document.getElementById('results');

const storedResults = JSON.parse(localStorage.getItem('agifyResults')) || [];

storedResults.forEach(result => {
  const resultDiv = createResultDiv(result);
  resultsDiv.appendChild(resultDiv);
});

fetchButton.addEventListener('click', async () => {
  const name = nameInput.value.trim();
  const country = countrySelect.value.trim();

  if (name === '') {
    alert('Please enter a name');
    return;
  }

  try {
    const response = await fetch(`https://api.agify.io/?name=${name}&country_id=${country}`);
    const data = await response.json();

    const resultDiv = createResultDiv(data);

    // Store the  esult in localStorage
    storedResults.push(data);
    localStorage.setItem('agifyResults', JSON.stringify(storedResults));

    resultsDiv.appendChild(resultDiv);
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});

// Function to display the result
function createResultDiv(result) {
  const resultDiv = document.createElement('div');
  resultDiv.classList.add('result');

  const name = document.createElement('p');
  name.textContent = `Name: ${result.name}`;

  const age = document.createElement('p');
  age.textContent = `Age: ${result.age}`;

  resultDiv.appendChild(name);
  resultDiv.appendChild(age);

  return resultDiv;
}

// // Create an array of sample data
// const data = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 30 },
//   { name: 'Bob', age: 35 }
// ];

// // Convert the data to JSON format
// const jsonData = JSON.stringify(data);

// // Create a Blob object from the JSON data
// const blob = new Blob([jsonData], { type: 'application/json' });

// // Create a download link
// const downloadLink = document.createElement('a');
// downloadLink.href = URL.createObjectURL(blob);
// downloadLink.download = 'data.json';
// downloadLink.textContent = 'Download Data';

// // Add the download link to the document
// document.body.appendChild(downloadLink);



{/* <input id="search" type="search" placeholder="" /> */}




// const fetchName = name => fetch('https://api.agify.io/?name='+name)

// fetchName('keiths')
// .then(response => response.json())
// .then(json => {
//   console.log(json.age)
//   console.log(json.count)
// })
// .catch(error => {
//   console.log('There was an error!', error)
// })
