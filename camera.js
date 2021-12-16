        var video = document.querySelector("video");
        function startWebCam() {
            if (navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true })
                    .then(function (stream) {
                        video.srcObject = stream;
                    })
                    .catch(function (err0r) {
                        console.log("Something went wrong!");
                    });
            }
        }
        startWebCam();
    
//      // drag and drop
// //image1

// let image = document.getElementById('image');
// let str = document.getElementById('myImage');

// str.onmousedown = function(event) {
// //by using getBoundingClientRect, it will return the size of the image
// //and position it to the viewport
//   let shiftX = event.clientX - str.getBoundingClientRect().left;
//   let shiftY = event.clientY - str.getBoundingClientRect().top;

//  str.style.position = 'absolute';
//   document.body.append(str);
//     str.style.index = 1000;
//   moveAt(event.pageX, event.pageY);

//   // moves the image at (pageX, pageY) coordinates
//   // taking initial shifts into account
//   function moveAt(pageX, pageY) {
//    str.style.left = pageX - shiftX + 'px';
//     str.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   // move the image on mousemove 
//   //so it can be moved from left to top
//   document.addEventListener('mousemove', onMouseMove);

//   // drop the image, remove unneeded handlers
//   str.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//    str.onmouseup = null;
//   };
//  };
// //unable the mouse to move the clone of the image
// str.ondragstart = function() {
//   return false;
// };


// //image 2

// let photo = document.getElementById('main');
// let str2 = document.getElementById('myPhoto');

// str2.onmousedown = function(event) {
// //by using getBoundingClientRect, it will return the size of the image
// //and position it to the viewport
//   let shiftX = event.clientX - str2.getBoundingClientRect().left;
//   let shiftY = event.clientY - str2.getBoundingClientRect().top;

//  str2.style.position = 'absolute';
//   document.body.append(str2);
//  str2.style.index = 1000;
//   moveAt(event.pageX, event.pageY);

//   // moves the image at (pageX, pageY) coordinates
//   // taking initial shifts into account
//   function moveAt(pageX, pageY) {
//    str2.style.left = pageX - shiftX + 'px';
//     str2.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   // move the image on mousemove 
//   //so it can be moved from left to top
//   document.addEventListener('mousemove', onMouseMove);

//   // drop the image, remove unneeded handlers
//   str2.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//    str2.onmouseup = null;
//   };
//  };
// //unable the mouse to move the clone of the image
// str2.ondragstart = function() {
//   return false;
// };

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

function myFunctionS() {
  document.getElementById("infoPnl").innerHTML = "A square face is often characterized by a strong jaw line, a broad forehead, and a wide chin and cheekbones. The width and length of the face are close to being equal. Frames should be selected to make the face look longer and to soften the square angles of the face. Choose frames that are slightly curved (like an oval shape) and that have more horizontal than vertical real estate."
  
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://www.goggles4u.co.uk/media/catalog/product/cache/c443ca7343598bef75a42026c54e7ea8/1/1/119864w.jpg")
  image1.setAttribute("width", "100")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://www.goggles4u.com/media/catalog/product/cache/c443ca7343598bef75a42026c54e7ea8/1/3/135864w.jpg")
  image2.setAttribute("width", "100")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://i.pinimg.com/originals/3b/8a/c3/3b8ac3f5896b4412bfbaf2302a61aa08.jpg")
  image3.setAttribute("width", "100")
  image3.setAttribute("height", "100")

  var info = document.getElementById("facePnl");
  console.log(info)
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    // console.log('sunglasses')
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }
  
}
function myFunctionOV() {
  document.getElementById("infoPnl").innerHTML = "The oval face is identifiable by its balanced proportions. The forehead is slightly wider than the chin and cheekbones are high. Frames should complement the natural proportions of the oval. Choose frames that are wide or wider than the broadest part of the face and that follow your brow line. Often, diamond or rectangular shapes work best for oval shapes."
  var image1 = document.createElement('img')
  image1.setAttribute("src","https://blog.eyeconic.com/dam/jcr:f8c0b1c5-fc71-4a7b-b2e3-4abe57cf9cea/ch4002.2018-10-26-16-19-02.png")
  image1.setAttribute("width", "150")
  image1.setAttribute("height", "100")
  var image2 = document.createElement('img')
  image2.setAttribute("src","https://pngimg.com/uploads/sunglasses/sunglasses_PNG41.png")
  image2.setAttribute("width", "150")
  image2.setAttribute("height", "100")
  var image3 = document.createElement('img')
  image3.setAttribute("src","https://pngimg.com/uploads/glasses/glasses_PNG54253.png")
  image3.setAttribute("width", "150")
  image3.setAttribute("height", "100")

    var info = document.getElementById("facePnl");
  console.log(info)
  if (info.firstElementChild == null){
    info.append(image1)
    info.append(image2)
    info.append(image3)
    // console.log('sunglasses')
  }
  else if (info.firstElementChild != null) {
    console.log('sun')
  }
  else {
    return
  }

}

// function myFunctionOB() {
//   document.getElementById("infoPnl").innerHTML = "Although fairly similar to an oval shape, an oblong face is longer than it is wide. The ideal frames will shorten the face by creating a break in the length of the face. Choose frames that have depth and a low bridge to shorten the nose. Try frames that are round, deep, have low-triangle shapes, or that have strong vertical lines."
//   var image1 = document.createElement('img')
//   image1.setAttribute("src","https://blog.eyeconic.com/dam/jcr:f8c0b1c5-fc71-4a7b-b2e3-4abe57cf9cea/ch4002.2018-10-26-16-19-02.png")
//   image1.setAttribute("width", "150")
//   image1.setAttribute("height", "100")
//   var image2 = document.createElement('img')
//   image2.setAttribute("src","https://pngimg.com/uploads/sunglasses/sunglasses_PNG41.png")
//   image2.setAttribute("width", "150")
//   image2.setAttribute("height", "100")
//   var image3 = document.createElement('img')
//   image3.setAttribute("src","https://pngimg.com/uploads/glasses/glasses_PNG54253.png")
//   image3.setAttribute("width", "150")
//   image3.setAttribute("height", "100")

//   document.getElementById("facePnl").append(image1)
//   document.getElementById("facePnl").append(image2)
//   document.getElementById("facePnl").append(image3)

// }