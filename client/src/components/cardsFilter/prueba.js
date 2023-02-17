const products = [
    {productType: "casa", ciudad: "salta", pais: "argentina",},
    {productType: "casa", ciudad: "cancun", pais: "mexico",},
    {productType: "departamento", ciudad: "san pablo", pais: "brasil",},
    {productType: "habitacions", ciudad: "caracas", pais: "venezuela",}
]

const filtrado = products.filter((product)=>{
    console.log(product)
    product.productType === "casa"
})

console.log(products)
console.log(filtrado)