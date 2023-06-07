var cl=console.log;

    const data=document.getElementById("data");
   
      result="";

      movieArr.forEach(movie=> {
    result+= ` <div class="col-md-4">
    <div class="card imdbcard" >
       <figure>
        <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="">
        <figcaption>
              <div class="row">
                <div class="col-9">
                  <p class="details name">${movie.original_title}</p>
                </div>
                <div class="col-3">
                  <p class=" detail rating">${movie.vote_average}</p>
                </div>
              </div>
        </figcaption>
          <div class="overview">
            <p class="over">${movie.overview}</p>
          </div>
       </figure>
      
    </div>
   </div>`
    
})

data.innerHTML=result;

// function movie(rating){
//   let rating= vote_average();


//   if(rating<=4) {
//     return"orange"

//   }
//   if(rating>=4) {
//     return"yellow";
//   }
//   if(rating>=7) {
//     return"green";
//   }

//   data.innerHTML=result;
// }

// rating()