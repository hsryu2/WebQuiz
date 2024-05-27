document.addEventListener('DOMContentLoaded', function() {
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/web');
      const jsonData = await response.json();
      displayData(jsonData);
    } catch (error) {
      console.error('error:', error);
    }
  };

  const displayData = (data) => {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = JSON.stringify(data);
  };

  const fetchButton = document.getElementById('fetchButton');
  fetchButton.addEventListener('click', fetchData);
});