function consultar(){

    var texto = document.getElementById("palabra").value;
    var urlAPI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+texto  

    const api = new XMLHttpRequest ();
    api.open('GET', urlAPI, true);
    api.send();
    api.onreadystatechange = function(){
        if(this.status==200 && this.readyState==4 )
            {
                var bd=JSON.parse(this.responseText);
                dbpuro = bd.drinks;
                console.log (bd);
                var datos="";

                for(var i=0; i < dbpuro.length; i++)

                    {
                        datos+= "<tr>" +
                        "<td>"+dbpuro[i].strDrink+ "</td>"+
                        "<td>"+dbpuro[i].strCategory+ "</td>"+
                        "<td>"+dbpuro[i].strInstructions+ "</td>"+ 
                        "<td><img src="+dbpuro[i].strDrinkThumb+" width = '200' heigt = '200'></td>"+
                        "</tr>";
                    }
                document.getElementById("tabla").innerHTML=datos;

            }
    }

}