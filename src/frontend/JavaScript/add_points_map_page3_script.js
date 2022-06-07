const addDepth = document.getElementById("howMuchDepthButton1");

addDepth.addEventListener("click",function(){
    document.getElementById("howMuchDepthButton1").style.display="none";
    document.getElementById("inputDepthAddedStation1").style.pointerEvents="none"; //После нажатия на кнопку Next нельзя редактировать количество добавляемых станций.
    // const numDepth=document.getElementById("inputDepthAddedStation1");
    // console.log(numDepth.ATTRIBUTE_NODE);
});