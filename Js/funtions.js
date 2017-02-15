function ShowTable(array)
{
    var html = "";
    var m = 0;
    
    html = `<table style="width:25%">`;
    for (let i = 0; i < array.length/3; i++)
    {
        var n = 0;
        html += `<tr>`;
        while (n < 3 && m < array.length)
        {
            html += `<th> ${array[m].name} <br> <img href = "${array[m].img}"> <br> ${array[m].cost}€ </th>`;
            m++;
            n++;
        }
        html += `</tr>`;
    }
    html +=`</table>` 
    document.getElementById("table").innerHTML = html;
}

function PriceConfig() //Calculo de datos. config
{
}

function CreateConnfigurator(array1, array2, array3)
{
    var html = "";
    
    html = `<form>`;
    html += `<select id="lista1">`;
    for (let i = 0; i < array1.length; i++)
    {
        html += `<option value= 0>${array1[i].name}</option>`;
    }
    html += `<option value= ${array1.length} selected>-</option>
    </select> <br> <select id="lista1">`;
    for (let i = 0; i < array2.length; i++)
    {
        html += `<option value= 0>${array2[i].name}</option>`;
    }
        html += `<option value= ${array2.length} selected>-</option>
    </select> <br> <select id="lista1">`;
    for (let i = 0; i < array3.length; i++)
    {
        html += `<option value= 0>${array3[i].name}</option>`; 
    }
    html += `<option value= ${array3.length} selected>-</option>
    </select> <br> </form>`;
    document.getElementById("formulario").innerHTML = html;
}
