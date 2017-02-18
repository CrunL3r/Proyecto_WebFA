function ShowTable(array) //Sirve para cualquier campo.
{
    var html = "";
    var m = 0;
    
    html = `<table style="width:100%">`;
    for (let i = 0; i < array.length/3; i++)
    {
        var n = 0;
        html += `<tr>`;
        while (n < 3 && m < array.length)
        {
            html += `<th> ${array[m].name} <br> <img src = "${array[m].img}"> <br> ${array[m].cost}€ </th>`;
            m++;
            n++;
        }
        html += `</tr>`;
    }
    html +=`</table>` 
    document.getElementById("table").innerHTML = html;
}

function PriceConfig() //Calculo de precio, si se añaden campos en data hay que modificarlo.
{
    var Result = 0; //Coste.
    var Field = 3; //Num de campos que hay.
    var Config = new Array(); //Datos introducidos.
    for (let i = 0; i < Field; i++)
    {
        Config[i] = document.getElementById(`${i}`).value;
    }
    if (Config[0] != procesors.length)
    {
        Result = Result + procesors[Config[0]].cost;  
    }
    if (Config[1] != motherboards.length)
    {
        Result = Result + motherboards[Config[1]].cost;  
    }
    if (Config[2] != grafics.length)
    {
        Result = Result + grafics[Config[2]].cost;
    }
    document.getElementById("exit").value = Result;
}

function CreateConnfigurator(array1, array2, array3) //Si hay nuevos campos en data hay que modificarlo.
{
    var html = "";
    
    html = `<form>`;
    html += `Seleccionar un procesador: <select id="0">`;
    for (let i = 0; i < array1.length; i++)
    {
        html += `<option value= ${i}>${array1[i].name}</option>`;
    }
    html += `<option value= ${array1.length} selected>-</option>
    </select> <br> Seleccionar una placa base: <select id="1">`;
    for (let i = 0; i < array2.length; i++)
    {
        html += `<option value= ${i}>${array2[i].name}</option>`;
    }
        html += `<option value= ${array2.length} selected>-</option>
    </select> <br> Seleccionar una tarjeta gráfica: <select id="2">`;
    for (let i = 0; i < array3.length; i++)
    {
        html += `<option value= ${i}>${array3[i].name}</option>`; 
    }
    html += `<option value= ${array3.length} selected>-</option>
    </select> <br> 
    <input type = "button" value = "Calcular" onclick = "PriceConfig()"> 
    <input type="text" size="20" id = "exit">
    </form>`;
    document.getElementById("Formulario").innerHTML = html;
}
