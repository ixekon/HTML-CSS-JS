setInterval(()=>{
const divFrame=document.getElementById('divFrame')
  divFrame.innerHTML=''
  const iframe=document.createElement('iframe')
  iframe.setAttribute('src','http://92.43.189.69:8237/onvifsnapshot/media_service/snapshot?channel=1&subtype=2')
  divFrame.appendChild(iframe)  
  },2000) 