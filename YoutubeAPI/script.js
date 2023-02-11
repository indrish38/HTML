// const axios = require('axios');
// const fs = require('fs');
// const express=require('express');
// let exp=express();

// Set the API key, the target country, the search query, and the maximum number of results
const apiKey = 'AIzaSyAlc8ASRnEjW4bJefYe4IH5QeU-6dnU-wI';
const targetCountry = 'IN';
const maxResults = 10;
let videoData;
// const searchQuery = 'javascript tamil';

const form = document.querySelector('form');
console.log(form);
// const targetCountryInput = document.querySelector('input[name="targetCountry"]');
const searchQueryInput = document.querySelector('input[name="searchQuery"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the target country and the search query from the form
  // const targetCountry = targetCountryInput.value;
  const searchQuery = searchQueryInput.value;

  // Make the API request
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=${targetCountry}&q=${searchQuery}&type=video&key=${apiKey}&maxResults=${maxResults}`;

  axios.get(url)
    .then(response => {
      const videoData = response.data.items;
      console.log(videoData);
    })
    .catch(error => {
      console.log(error);
    });
});

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // Get the target country and the search query from the form
//   // const targetCountry = targetCountryInput.value;
//   const searchQuery = searchQueryInput.value;

// // console.log(searchQuery);

// // Make the API request
// const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&regionCode=${targetCountry}&q=${searchQuery}&key=${apiKey}&maxResults=${maxResults}`;

//   // Get the data from the API
//   // function 
//   axios.get(url).then(response => {
//     videoData = response.data.items;
//     // console.log(videoData);
//     // fs.writeFileSync('video-data.json', JSON.stringify(videoData));
//     // console.log('Video data saved as JSON file');
//     // handleData(videoData);
//     displayVideos(videoData);
//   });
// });

// exp.get('/',(req,res)=>{
//   res.sendFile(__dirname+"/index.html");
// })

// // Start the server
// exp.listen(3000, () => {
//   console.log(`Server is listening on port ${port}`);
// });

  function displayVideos(data) {
    const videoList = document.getElementById('video-list');
    for (const video of data) {
      const videoTitle = video.snippet.title;
      const videoLink = 'https://www.youtube.com/watch?v=' + video.id.videoId;
      var a = document.createElement('a');
      var link = document.createTextNode(videoLink);
      a.appendChild(link); 
      a.href=videoLink;
      a.target="_blank";
      const listItem = document.createElement('li');
      const listItem2 = document.createElement('li');
      listItem.textContent = videoTitle;
      // listItem2.textContent = link;
      videoList.appendChild(listItem);
      videoList.appendChild(a);
      videoList.appendChild(listItem2);
    }
  }

function handleData(data) {
  console.log(data);
  console.log(data.length);
//   // const firstVideo = videoData[0];
//   // console.log(firstVideo.snippet.title);
//   // console.log(firstVideo.snippet.description);
//   // console.log(videoData[0].id.videoId);
//   // for(let i=0;i<data.length;i++)
//   // console.log(data[i]);
//   document.getElementById('l1').innerHTML=data[i].snippet.title;
}


