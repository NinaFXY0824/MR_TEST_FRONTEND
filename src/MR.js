var sizeS, sizeM,sizeL, selectSsize, selectMsize, selectLsize,totalNum;
sizeS=0;sizeM=0;sizeL=0;totalNum=0;
function S_add(){
    selectSsize=1;
    selectMsize=0;
    selectLsize=0;
}
function M_add(){
    selectSsize=0;
    selectMsize=1;
    selectLsize=0;
}
function L_add(){
    selectSsize=0;
    selectMsize=0;
    selectLsize=1;
}

function add_to_cart(){
    if (selectMsize==1){
        sizeM=sizeM+1;
    }
    else if (selectLsize==1){
        sizeM=sizeM+1;
    }
    else if (selectSsize==1){
        sizeS=sizeS+1;
    }
    selectSsize, selectMsize, selectLsize=0;
    totalNum=sizeL+sizeS+sizeM;
    showProductNum();
}

function showProductNum(){
    let cartNum=document.getElementById("myCart");
    cartNum.innerHTML="My Cart (" + totalNum +")";
}


function showProducts(){
    let my_cart= document.getElementById("cart1");
    let proDiv= document.createElement("div");
    my_cart.appendChild("proDiv");
    if (sizeS!=0){
        let sizeSDiv=document.createElement("div");
        proDiv.appendChild("sizeSDiv");
        sizeSDiv.style.width="30%";
        let sizeSImg=document.createElement("img");
        sizeSImg.src="./img/classic-tee.jpg";
        sizeSImg.style.width="60%";
        sizeSDiv.appendChild("sizeSImg");
        let sizeSDes=document.createElement("div");
        sizeSDiv.appendChild("sizeSDes");
        let sizeSName=document.createElement("p");
        sizeSName.innerText="Classic Tree"
        sizeSDes.appendChild("sizeSName");
        let sizeSNum=document.createElement("p");
        sizeSDes.appendChild("sizeSNum");
        sizeSNum.innerText=sizeS+"* $75.00"
        let sizeSSize=document.createElement("p");
        sizeSDes.appendChild("sizeSSize");
        sizeSSize.innerText="Size: S";
    }
    if (sizeM!=0){
        let sizeMDiv=document.createElement("div");
        proDiv.appendChild("sizeMDiv");
        sizeMDiv.style.width="30%";
        let sizeMImg=document.createElement("img");
        sizeMImg.src="./img/classic-tee.jpg";
        sizeMImg.style.width="60%";
        sizeMDiv.appendChild("sizeMImg");
        let sizeMDes=document.createElement("div");
        sizeMDiv.appendChild("sizeMDes");
        let sizeMName=document.createElement("p");
        sizeMName.innerText="Classic Tree"
        sizeMDes.appendChild("sizeMName");
        let sizeMNum=document.createElement("p");
        sizeMDes.appendChild("sizeMNum");
        sizeMNum.innerText=sizeS+"* $75.00"
        let sizeMSize=document.createElement("p");
        sizeMDes.appendChild("sizeMSize");
        sizeMSize.innerText="Size: M";
    }
    if (sizeL!=0){
        let sizeLDiv=document.createElement("div");
        proDiv.appendChild("sizeLDiv");
        sizeLDiv.style.width="30%";
        let sizeLImg=document.createElement("img");
        sizeLImg.src="./img/classic-tee.jpg";
        sizeLImg.style.width="60%";
        sizeLDiv.appendChild("sizeLImg");
        let sizeLDes=document.createElement("div");
        sizeLDiv.appendChild("sizeLDes");
        let sizeLName=document.createElement("p");
        sizeLName.innerText="Classic Tree"
        sizeLDes.appendChild("sizeLName");
        let sizeLNum=document.createElement("p");
        sizeLDes.appendChild("sizeLNum");
        sizeLNum.innerText=sizeS+"* $75.00"
        let sizeLSize=document.createElement("p");
        sizeLDes.appendChild("sizeLSize");
        sizeLSize.innerText="Size: L";
    }
}