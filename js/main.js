
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value.toLowerCase()
 
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${choice}&app_id=c9eea44d&app_key=9a6fe40c4d87bbf926a64b9b9662b667&imageSize=REGULAR`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => { 
        console.log(data)
        document.querySelector('.startImg').classList.add('hidden')
        document.querySelector('h5').innerText = data.hits[0].recipe.label
        document.querySelector('#recipeImg').src = data.hits[0].recipe.images.REGULAR.url
        // document.querySelector('h3').innerText = data.hits[0].recipe.ingredientLines[0]
        document.querySelector('h2').innerText = data.hits[0].recipe.ingredientLines.join('\n');


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
