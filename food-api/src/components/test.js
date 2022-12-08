let arrayIngredient = [item.strIngredient1, item.strIngredient2, item.strIngredient3, item.strIngredient4, item.strIngredient5, item.strIngredient6, item.strIngredient7, item.strIngredient8, item.strIngredient9, item.strIngredient10, item.strIngredient11, item.strIngredient12, item.strIngredient13, item.strIngredient14, item.strIngredient15, item.strIngredient16, item.strIngredient17, item.strIngredient18, item.strIngredient19, item.strIngredient20 ]
let arrayMeasure = [item.strMeasure1, item.strMeasure2, item.strMeasure3, item.strMeasure4, item.strMeasure5, item.strMeasure6, item.strMeasure7, item.strMeasure8, item.strMeasure9, item.strMeasure10, item.strMeasure11, item.strMeasure12, item.strMeasure13, item.strMeasure14, item.strMeasure15, item.strMeasure16, item.strMeasure17, item.strMeasure18, item.strMeasure19, item.strMeasure20 ]

for (let index = 1; index < arrayIngredient.length; index++) {
    const element = arrayIngredient[index];
    if(element !== "" || element !== null) {
       return ( {<h4> {element}  {item.strMeasure[index]} </h4>} )

    }
    
}