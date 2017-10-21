function getProductID(products, product){
    for(p in products){
        if(p.display_name===product){
            return p.product_id;
        }
    }
    return null;
}

function getProducts(token, long, lat){
    fetch("http://127.0.0.1/products"+token+"/"+lat+"/"+long).then(response => response.text()).then(
        text => {
            var products = JSON.parse(text).products;
            return {
                uberX: getProductID(products, "uberX"),
                uberSelect: getProductID(products, "uberSELECT"),
                uberBlack: getProductID(products, "uberBlack")
            }
        }
    )
}