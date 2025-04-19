$(document).ready(function() {
    $.ajax({
        url : "./product.json",
        type : "GET",
        success : function(response) {
            // console.log(response)
            let x = " ";
            $.each(response,function(keys, object) {
                // console.log(object)
                x+= `
                <tr> 
                    <td>${object.id} </td>
                    <td>${object.name}</td>
                    <td>${object.price}</td>
                    <td>${object.sell}</td>
                    <td>${object.description}</td>
                    <td> <img src="${object.image}" width="100"></td>
                </tr> `

            })
            document.getElementById("data").innerHTML=x;
        }
    })
})

