const img=document.querySelector('img');
console.log(img)
fetch('http://92.43.189.69:8237/onvifsnapshot/media_service/snapshot?channel=1&subtype=2').then(data=>img.setAttribute('src',data.url))