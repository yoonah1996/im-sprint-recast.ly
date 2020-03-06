
export const searchYouTube = ({ query, max, key }, callback) => {
  const youTub = {
    q : query,
    part : "snippet",
    key : key,
    type : "video",
    maxResults : max
  }
  //한글검색 인코딩
  youTub.q = encodeURI(youTub.q);
  
  var url =  "https://www.googleapis.com/youtube/v3/search?";
  for(let keys in youTub){
    url = url + keys + "=" + youTub[keys] + "&";
  }

  url = url.substr(0, url.length-1);

  //  res.item은 비디오 배열
  fetch(url)
  .then(res => res.json())
  .then(data => callback(data.items))
};