let arabic = false;

document.getElementById("langBtn").onclick = function(){

  if(!arabic){

    document.getElementById("title").innerText =
    "مرحباً، أنا SNP";

    document.getElementById("desc").innerText =
    "مطور ألعاب ومواقع";

    arabic = true;

  }else{

    document.getElementById("title").innerText =
    "Hello, I'm SNP";

    document.getElementById("desc").innerText =
    "Future Web Developer";

    arabic = false;
  }

};

document.getElementById("themeBtn").onclick = function(){

  if(document.body.style.background === "white"){

    document.body.style.background = "#0d1117";
    document.body.style.color = "white";

  }else{

    document.body.style.background = "white";
    document.body.style.color = "black";

  }

};
