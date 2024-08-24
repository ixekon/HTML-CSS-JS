setInterval(()=>{
const iframe=document.getElementById('iframe')
    fetch('http://92.43.189.69:8237/onvifsnapshot/media_service/snapshot?channel=1&subtype=2').then(data=>iframe.setAttribute('src',data.url))  
  },2000) 