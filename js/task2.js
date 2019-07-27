"use strict";


let header = document.createElement("header");
let main = document.createElement("main");
let footer = document.createElement("footer");
let div = document.createElement("div");
let div2 = document.createElement("div")
let h5 = document.createElement("h5");
let h2 = document.createElement("h2");
let divrow = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let p = document.createElement("p");
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let img = document.createElement("img");
let img1 = document.createElement("img");
let img2 = document.createElement("img");
let pimg = document.createElement("p");
let pimg1 = document.createElement("p");
let pimg2 = document.createElement("p");












document.body.appendChild(header);
document.body.appendChild(main);
document.body.appendChild(footer);
main.appendChild(div);
div.appendChild(div2);
div2.appendChild(h5);
div2.appendChild(h2);
div.appendChild(divrow);
divrow.appendChild(div3);
divrow.appendChild(div4);
divrow.appendChild(div5);
div3.appendChild(p);
div4.appendChild(p1);
div5.appendChild(p2);
div3.appendChild(img);
div3.appendChild(pimg)
div4.appendChild(img1);
div4.appendChild(pimg1);
div5.appendChild(img2);
div5.appendChild(pimg2);

img.setAttribute("src", "images/images1.jpg");
img1.setAttribute("src", "images/images1.jpg");
img2.setAttribute("src", "images/images1.jpg")







div.className = "container mt-5";
div2.className = "col-12 text-center mt-4";
h5.innerText = "What People Say";
h2.innerText = "Reviews";
h5.className = "text-warning"
h2.className = "text-muted display-2 font-weight-bolder"
divrow.className = "d-flex mt-5"
div3.className = "col-4 text-center";
div4.className = "col-4 text-center";
div5.className = "col-4 text-center";
p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at viverra arcu, et varius odio. Vestibulum porta magna ac justo commodo faucibus. Sed maximus turpis non lectus finibus, et sodales velit imperdiet. Vestibulum sed velit velit. Suspendisse et rhoncus leo.";
p1.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at viverra arcu, et varius odio. Vestibulum porta magna ac justo commodo faucibus. Sed maximus turpis non lectus finibus, et sodales velit imperdiet. Vestibulum sed velit velit. Suspendisse et rhoncus leo.";
p2.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at viverra arcu, et varius odio. Vestibulum porta magna ac justo commodo faucibus. Sed maximus turpis non lectus finibus, et sodales velit imperdiet. Vestibulum sed velit velit. Suspendisse et rhoncus leo.";
p.className = "text-muted";
p1.className = "text-muted";
p2.className = "text-muted"
img.style.width = "100px";
img.style.height = "100px";
img1.style.width = "100px";
img1.style.height = "100px";
img2.style.width = "100px";
img2.style.height = "100px";
img.style.borderRadius = "100%";
img1.style.borderRadius = "100%";
img2.style.borderRadius = "100%";
pimg.innerText = "John Doe";
pimg1.innerText = "John Doe";
pimg2.innerText = "John Doe";
pimg.className = "mt-4 text-success";
pimg1.className = "mt-4 text-primary";
pimg2.className = "mt-4 text-danger"