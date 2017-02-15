
function ShowTable(array)
{
    var html = "";
    var m = 0;
    var html = `<table style="width:25%">`;
    for (let i = 0; i < array.length/3; i++)
    {
        html += `<tr>`;
        for (let n = 0; n < 3; n++)
        {
            html += `<th> ${array[m].name}  ${array[m].cost}€ </th>`;
            m++;
        }
        html += `</tr>`;
    }
    document.getElementById("table").innerHTML = html;
}

function PriceConfig()
{
}