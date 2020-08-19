function disable(id){
    if(document.getElementById(id).className=="disable"){
        document.getElementById(id).className="active";
        var c=["#F53240","#0E0B16","#01ABAA","#062F4F"];
        for(var i=0;i<4;i++){
            var rut="url('Recursos/"+i+".jpg')"; 
            if(i!=id)
                document.getElementById(i).className="disable";
            else{
                document.getElementById("bar").style.backgroundImage = rut;
                document.getElementById("Pro").style.setProperty("--color2",c[i]);
                document.getElementById("R").style.setProperty("--color2",c[i]);   
                document.getElementById("N").style.setProperty("--color2",c[i]);              
            }
            if(id=="1" || id=="3" || id=="2"){
                document.getElementById("Name").style.color="white";
                document.getElementById("N").style.setProperty("--colorn","white");
            }else{
                document.getElementById("Name").style.color="black";
                document.getElementById("N").style.setProperty("--colorn","black");
            }
        }
    }
}