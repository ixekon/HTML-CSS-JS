setInterval(() => {
    const divFrame = document.getElementById('divFrame')
    divFrame.innerHTML = ''
    let image = document.createElement('img')
    image.setAttribute('src', 'http://92.43.189.69:8237/onvifsnapshot/media_service/snapshot?channel=1&subtype=2')
    image.setAttribute('width', '80%')
    image.setAttribute('height', '80%')
    image.setAttribute('alt', new Date())
    divFrame.appendChild(image)
  }, 3000) 
