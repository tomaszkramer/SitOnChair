document.addEventListener("DOMContentLoaded", function () {
    // console.log("Dom został wczytany");

    //Znikające elementy

    var boxes = document.querySelectorAll(".display");
    var pars = document.querySelectorAll(".article__one__one+p");
    // console.log(boxes);
    boxes.forEach(function (e) {
        e.addEventListener("mouseover", function mouseOver() {
            e.style.opacity = "0";
            e.removeEventListener("mouseover", mouseOver);
            e.addEventListener("mouseout", function mouseOut() {
                e.style.opacity = "1";
                e.removeEventListener("mouseout", mouseOut);
                e.addEventListener("mouseover", mouseOver);
            })
        })
    });

    //Zmieniające się zdjęcia

    // var btnPrev = document.querySelector("#prevPicture");
    // var btnNext = document.querySelector("#nextPicture");
    // var pictures = document.querySelectorAll(".slider__one ul li");
    // var i = 0;
    //
    // btnPrev.addEventListener("click", function (e) {
    //     console.log("Jestem Prev Button");
    //     var pictureVisible = pictures[i];
    //     pictureVisible.classList.remove("visible");
    //     i--;
    //     i = i < 0 ? i = pictures.length - 1 : i;
    //     pictureVisible = pictures[i];
    //     pictureVisible.classList.add("visible");
    //
    // })
    //
    // btnNext.addEventListener("click", function (e) {
    //     console.log("Jestem Next Button");
    //     var pictureVisible = pictures[i];
    //     pictureVisible.classList.remove("visible");
    //     i++;
    //     i = i >= pictures.length ? 0 : i;
    //     pictureVisible = pictures[i];
    //     pictureVisible.classList.add("visible");
    //
    //
    // })


var btnPrev = document.querySelector("#prevPicture");
var btnNext = document.querySelector("#nextPicture");
var pictures = document.querySelectorAll(".slider ul li");
var i = 0;
var j = 1;
var pictureVisible = pictures[i];
var pictureVisiblePrev = pictures[j];
var slidePrev = document.querySelector("#slidePrev");
var slideNext = document.querySelector("#slideNext");

pictureVisible.classList.add("visible");
pictureVisiblePrev.classList.add("visible");

slidePrev.appendChild(pictureVisible);
slideNext.appendChild(pictureVisiblePrev);

btnNext.addEventListener("click",prevPic);

function prevPic(e){
    console.log("Jestem Prev Button");
    var pos_i = 0;
    var pos_j = -400;
    var movePic = setInterval(move,5);

    function move(){
        if(pos_i === 400) {
            clearInterval(movePic);
            pos_i = 0;
            pos_j = -400;
            slidePrev.style.right = pos_i + "px";
            slideNext.style.right = pos_j + "px";
            pictureVisible.classList.add("visible");
            pictureVisiblePrev.classList.add("visible");
            var picToRemovePrev = pictures[i];
            var picToRemoveNext = pictures[j];
            console.log(picToRemovePrev);
            console.log(picToRemoveNext);
            i++;
            j++;
            console.log(i);
            i = i >= pictures.length ? 0 : i;
            j = j >= pictures.length ? 0 : j;
            pictureVisible = pictures[i];
            pictureVisiblePrev = pictures[j];
            pictureVisible.classList.add("visible");
            pictureVisiblePrev.classList.add("visible");
            //slideNext.removeChild(picToRemoveNext);
            slideNext.appendChild(pictureVisiblePrev);
            //slidePrev.removeChild(picToRemovePrev);
            slidePrev.appendChild(pictureVisible);
        } else {
            pos_j++;
            pos_i++;
            slidePrev.style.right = pos_i + "px";
            slideNext.style.right = pos_j + "px";
        }
    }
}
// setInterval(prevPic,5000);

btnPrev.addEventListener("click", nextPic);

function nextPic(e) {
    console.log("Jestem Next Button");
    var pos_i = 0;
    var pos_j = 400;
    var movePic = setInterval(move,5);

    function move(){
        if(pos_i === -400) {
            clearInterval(movePic);
            pos_i = 0;
            pos_j = 400;
            slidePrev.style.right = pos_i + "px";
            slideNext.style.right = pos_j + "px";
            pictureVisible.classList.add("visible");
            pictureVisiblePrev.classList.add("visible");
            var picToRemovePrev = pictures[i];
            var picToRemoveNext = pictures[j];
            i++;
            j++;
            console.log(i);
            i = i >= pictures.length ? 0 : i;
            j = j >= pictures.length ? 0 : j;
            pictureVisible = pictures[i];
            pictureVisiblePrev = pictures[j];
            pictureVisible.classList.add("visible");
            pictureVisiblePrev.classList.add("visible");
            //slideNext.removeChild(picToRemoveNext);
            slideNext.appendChild(pictureVisiblePrev);
            //slidePrev.removeChild(picToRemovePrev);
            slidePrev.appendChild(pictureVisible);
        } else {
            pos_j--;
            pos_i--;
            slidePrev.style.right = pos_i + "px";
            slideNext.style.right = pos_j + "px";
        }
    }
}

    var observer =   new window.MutationObserver(test, config);
    var config = {attributes: true, childList: true, characterData: true, subtree: true};

    observer.observe(document.querySelector(".panel_right"), config);
    function test(){
        console.log("element has been changed");
        transportSum = Number(transportValue.innerHTML);
        transportSum = Number(transportValue.innerHTML);
        chairSum = Number(chairValue.innerHTML);
        colorSum = Number(colorValue.innerHTML);
        patternSum = Number(patternValue.innerHTML);
        transportSum = Number(transportValue.innerHTML);
        sum = chairSum + colorSum + patternSum + transportSum;
        sumField.innerHTML = sum;
    }

    var listArrow = document.querySelectorAll(".list_arrow");
    var listPanel = document.querySelectorAll(".list_panel");

    var types = {
        clair: ["Clair", 200],
        margarita: ["Margarita", 300],
        selena: ["Selena", 400]
    };

    var colors = {
        red: ["czerwony", 200],
        black: ["czarny", 200],
        orange: ["Pomarańczowy",300]
    };

    var materials = {
        fabric: ["tkanina", 200],
        leather: ["skóra", 300]
    };

    //Pokazywanie listy elementów

    listArrow.forEach(function (e) {
        e.addEventListener("click", showPanelItems);
    });

    function showPanelItems(el) {
        var i = Array.from(listArrow).indexOf(el.target);

        if(listPanel[i].style.display !== "block"){
            listPanel[i].style.display = "block";
            var listItems = listPanel[i].childNodes;
            console.log(listItems);

            listItems.forEach(function (ele) {
                ele.addEventListener("click", showListElement);
            });
            // zwraca tablicę z zawartością elementów listy
            function showListElement(element){
                var items = Array.from(listItems).filter(function (element,index) {
                    return (index % 2 !== 0);
                });
                var j = items.indexOf(element.target);

                calculator(i,j);
                listPanel[i].style.display = "none";

            }
        }else {
            listPanel[i].style.display = "none";
        }
    }

    var chairBox = document.querySelector("h4.title");
    var colorBox = document.querySelector(".panel_left .color");
    var patternBox = document.querySelector(".panel_left .pattern");
    var chairValue = document.querySelector("h4.value");
    var colorValue = document.querySelector(".panel_right .color");
    var patternValue = document.querySelector(".panel_right .pattern");
    var isTransport = document.querySelector("#transport");
    var transportBox = document.querySelector(".panel_left .transport");
    var transportValue = document.querySelector(".panel_right .transport");
    var sumField = document.querySelector(".sum strong");
    var chairSum;
    var colorSum;
    var patternSum;
    var transportSum;
    var sum;

    function calculator(i,j) {

        switch (i) {
            case 0:
                switch (j) {
                    case 0:
                        chairBox.innerText = types.clair[0];
                        chairValue.innerHTML = types.clair[1];
                        break;
                    case 1:
                        chairBox.innerText = types.margarita[0];
                        chairValue.innerHTML = types.margarita[1];
                        break;
                    case 2:
                        chairBox.innerText = types.selena[0];
                        chairValue.innerHTML = types.selena[1];
                        break
                }
                break;
            case 1:
                switch (j) {
                    case 0:
                        colorBox.innerText = colors.red[0];
                        colorValue.innerHTML = colors.red[1];
                        break;
                    case 1:
                        colorBox.innerText = colors.black[0];
                        colorValue.innerHTML = colors.black[1];
                        break;
                    case 2:
                        colorBox.innerText = colors.orange[0];
                        colorValue.innerHTML = colors.orange[1];
                        break
                }
                break;
            case 2:
                switch (j) {
                    case 0:
                        patternBox.innerText = materials.fabric[0];
                        patternValue.innerHTML = materials.fabric[1];
                        break;
                    case 1:
                        patternBox.innerText = materials.leather[0];
                        patternValue.innerHTML= materials.leather[1];
                        break;
                }
                break;
        }
    }
    isTransport.addEventListener("click", transport);

    function transport(){
        if(isTransport.checked !== true){
            transportValue.innerHTML = " ";
            transportBox.innerHTML = " ";
        } else {
            transportValue.innerHTML = "200";
            transportBox.innerHTML = "transport";
        }
    }



});
