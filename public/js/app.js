$(document).ready(function () {
    
    const render = function(e) {
        const card = $(`<div class="card">`); 
        card.addClass("col-4 text-center");
        const body = $(`<div class="card-body">`);
        body.append(`<h4 class="card-title">${e.name}</h4>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Price: ${e.price}</li>
                        <li class="list-group-item">Stock: ${e.quantity}</li>
                    </ul>
                    <input type="text" class="form-control m-2 ${e.name + "input"}" placeholder="Type quantity">
                    <button type="button" class="btn btn-success" idd=${e.id} name=${e.name} quantity=${e.quantity}>Buy Product</button>`
        );
        card.append(body);
        $("#display").append(card);
    }
    
    const showAll = function() {
        $("#display").empty();
        $.get("/api/product", function(res){
            res.forEach(function(e) {
                render(e);
            });
        });
    }

    const buy = function() {
        const name = $(this).attr("name"); 
        const idd = $(this).attr("idd"); 
        const quantity = $(this).attr("quantity");
        const purchase = $("." + name + "input").val();
        const v = quantity - purchase;
        if (purchase) {
            $.ajax({
                url: '/api/product/${idd}',
                type: 'PUT',
                Data: {
                    quantity: v
                }
            }).done(function() {
                console.log("success");
            });;
        } else {
            //<div class="alert alert-primary" role="alert">Insufficient Quantity!</div>
        }
    }

//<div class="alert alert-primary" role="alert">Purchase Successful!</div>

    $("#show-all").click(showAll);
    $("#display").on("click", ".btn", buy);
});