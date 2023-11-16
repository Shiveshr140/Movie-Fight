
///// went to omdbapi and get api key
//// api key essentially identify us to api wheneven we make request, u can think it of as email and password that out code is sending over to the api.

//// search operation
//// second arg of axios is parameters we can pass as query, obj we r passing turned into string and append at end of url
//// s para is for search u can see api documentation

// const fetchData = async () => {
//         const response = await axios("http://www.omdbapi.com/",{
//             params: {
//                 'apikey': 'd7da42dc',
//                 's' : 'avengers'
//             } })
//             console.log(response.data)
// }

// fetchData()



//// look up operation
//// i for imdbid u will get from search result copy and paste
//// u will get information about single movie

// const fetchData = async () => {
//     const response = await axios("http://www.omdbapi.com/",{
//         params: {
//             'apikey': 'd7da42dc',
//             'i' : "tt0848228"
//         } })
//         console.log(response.data)
// }

// fetchData()





//// ********************** Search the Api on input change
///// go to index. html add input for search bar inside container div
//// if u start searching in input u can check the XHR where all network requests are made with api, we can see api change as we typed
//// one problem is that so many api as single  as key typed will generete a new api


// const fetchData = async (searchTerm) => {
//     const response = await axios("http://www.omdbapi.com/",{
//         params: {
//             'apikey': 'd7da42dc',
//             's' : searchTerm
//         }})
//         console.log(response.data)
// }

// const input = document.querySelector('input')

// input.addEventListener('input', (event)=>{
//     fetchData(event.target.value);
// })



////************************ delaying the search 
//// suppose u have typed the avengers then wait for half second then only request should send

//// first understand setTimeout, function we defined inside it will execute after certain delay and it is also return an integer algon with what function inside it will return
///// clearTimeout with arg returned integer from setTimeout to stop the function before its execution

// const delay = setTimeout(() => {
//     console.log('hi')},1000)

// clearTimeout(delay)


// const fetchData = async (searchTerm) => {
//     const response = await axios("http://www.omdbapi.com/",{
//         params: {
//             'apikey': 'd7da42dc',
//             's' : searchTerm
//         }})
//         console.log(response.data)
// }

// const input = document.querySelector('input')

// //// Now we can add logic that we can make sure that we do not call input too often
// let timeOutId;
// const onInput = (event)=>{
//     /// here is the magic with this if statement
//     if(timeOutId){
//         clearTimeout(timeOutId)
//     }
//     timeOutId = setTimeout(()=> {
//         fetchData(event.target.value);
//     },1000)
// }


// input.addEventListener('input', onInput)







//// ******************* lets understand the debouncing an input
//// waiting for some time after the last event to actually to do something
//// there might be some other scenerio where i want to limit the call in order for performance resons
//// so refactor the code


// const fetchData = async (searchTerm) => {
//     const response = await axios("http://www.omdbapi.com/",{
//         params: {
//             'apikey': 'd7da42dc',
//             's' : searchTerm
//         }})
//         console.log(response.data)
// }

// const input = document.querySelector('input')

// //// so this debounce function will take  callback and return a new wrapper function which is used for shield and guard how often function invoked
// //// func may need args so will provide it through wrraper function, it may need multiple args
// //// apply method is used call the function as a normal way and take the pass them as a seperate arguments to the fuctions
// //// we can use this debounce function when we want implement the same logic
// const debounce = (func, delay=1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }

// // const onInput = debounce((event)=>{
// //     (fetchData(event.target.value))
// // })

// const onInput = (event)=>{
//     fetchData(event.target.value)
// }

    
// input.addEventListener('input', debounce(onInput,500))






////************************ Awaiting Async function

// const fetchData = async (searchTerm) => {
//     const response = await axios("http://www.omdbapi.com/",{
//         params: {
//             'apikey': 'd7da42dc',
//             's' : searchTerm
//         }})
//         return response.data.Search
// }

// const input = document.querySelector('input')

// const debounce = (func, delay = 1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }

// //// u will see a promise y bcs it is synchronous and above fetch function is async so that that fetch will wait untill reques is completed
// //// so put await infont of it

// const onInput = async (event)=>{
//     const movies = await fetchData(event.target.value)
//     console.log(movies)
// }

// input.addEventListener('input', debounce(onInput,500))





////********************** rendering movies and handling error
//// there is an with search api is that it might not worked as expected i.e when u type half movie name than it will show an movies not difined even if status code is 200 i.e request is made
//// if response has Error property look by inspecting then show empty array i.e no error onscreen

// const fetchData = async (searchTerm) => {
//     const response = await axios("http://www.omdbapi.com/",{
//         params: {
//             'apikey': 'd7da42dc',
//             's' : searchTerm
//         }})

//         if (response.data.Error){
//             return []
//         }

//         return response.data.Search
// }


// const input = document.querySelector('input')

// const debounce = (func, delay = 1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }


// const onInput = async (event)=>{
//     const movies = await fetchData(event.target.value)
//     // console.log(movies)
    
//     for (let movie of movies){
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <img   src="${movie.Poster}" >
//         <h1> ${movie.Title} </h1>
//         `
//         //// create temeprory div in index.html
//         document.querySelector('#target').appendChild(div)
//     }
// }

// input.addEventListener('input', debounce(onInput,500))





////*********************** Movie HTML generation
//// if cretead the divs inside the html manualy then it can not resuse anywhere else as well diffcult to understand and manipulate later
//// we want less coupling between js and html so we handle it in js 

// const fetchData = async (searchTerm) => {
//     const response = await axios("http://www.omdbapi.com/",{
//         params: {
//             'apikey': 'd7da42dc',
//             's' : searchTerm
//         }})

//         if (response.data.Error){
//             return []
//         }

//         return response.data.Search
// }

// const root = document.querySelector('.autocomplete')

// root.innerHTML = `
//     <label> <b> Search for a movie </b> </label>
//     <input class='input'>
//     <div class = 'dropdown'>
//         <div class="dropdown-menu"> 
//             <div class="dropdown-content results"> </div>
//         </div>
//     </div> `

// const input = document.querySelector('.input')
// const dropDown = document.querySelector('.dropdown')
// const resultsWrapper = document.querySelector('.dropdown-content')


// const debounce = (func, delay = 1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }


// const onInput = async (event)=>{
//     const movies = await fetchData(event.target.value)
//     // console.log(movies)
    
//     for (let movie of movies){
//         const div = document.createElement('div')
//         div.innerHTML = `
//         <img   src="${movie.Poster}" >
//         <h1> ${movie.Title} </h1>
//         `
//         document.querySelector('#target').appendChild(div)
//     }
// }

// input.addEventListener('input', debounce(onInput,500))






//// ************************************Repairing the references
//// we want by deafult dropdown menu is not shown so will add class is active inside function
//// changes are made with refrence to dropdown in bluma css site 


// const fetchData = async (searchTerm) => {
//     const response = await axios("http://www.omdbapi.com/",{
//         params: {
//             'apikey': 'd7da42dc',
//             's' : searchTerm
//         }})

//         if (response.data.Error){
//             return []
//         }

//         return response.data.Search
// }

// const root = document.querySelector('.autocomplete')

// root.innerHTML = `
//     <label> <b> Search for a movie </b> </label>
//     <input class='input'>
//     <div class = 'dropdown'>
//         <div class="dropdown-menu"> 
//             <div class="dropdown-content results"> </div>
//         </div>
//     </div> `

// const input = document.querySelector('.input')
// const dropDown = document.querySelector('.dropdown')
// const resultsWrapper = document.querySelector('.results')


// const debounce = (func, delay = 1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }


// const onInput = async (event)=>{
//     const movies = await fetchData(event.target.value)
    
//     dropDown.classList.add('is-active')
    
//     for (let movie of movies){
//         const option = document.createElement('a')
//         option.classList.add('dropdown-item')
//         option.innerHTML = `
//         <img   src="${movie.Poster}" >
//          ${movie.Title}
//         `
        
//         resultsWrapper.appendChild(option)
//     }
// }

// input.addEventListener('input', debounce(onInput,500))







//// handling a broken image
//// sometimes in case few movie image src=''N/A' that will lead to a broken image



// const fetchData = async searchTerm => {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   };
  
//   const root = document.querySelector('.autocomplete');
//   root.innerHTML = `
//     <label><b>Search For a Movie</b></label>
//     <input class="input" />
//     <div class="dropdown">
//       <div class="dropdown-menu">
//         <div class="dropdown-content results"></div>
//       </div>
//     </div>
//   `;
  
//   const input = document.querySelector('input');
//   const dropdown = document.querySelector('.dropdown');
//   const resultsWrapper = document.querySelector('.results');


//   const debounce = (func, delay = 1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }
  
//   const onInput = async event => {
//   const movies = await fetchData(event.target.value);

//     //// when we search for one then other movie then the resukts first movie was still there so to correct it
//     resultsWrapper.innerHTML = ' '
  
//     dropdown.classList.add('is-active');
//     for (let movie of movies) {
//       const option = document.createElement('a');

//       const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
      
//       option.classList.add('dropdown-item');
//       option.innerHTML = `
//         <img src="${imgSrc}" />
//         ${movie.Title}
//       `;
  
//       resultsWrapper.appendChild(option);
//     }
//   };
//   input.addEventListener('input', debounce(onInput, 500));
  




////////// *********************** automatically clossing the dropdown menu and handling empty responses
//// logic behind is this when even we click anywhere excepts root elements dropdown menu should closed
//// document.contains(b) to check weather that element contains in document or not:  const b = document.querySelector('b'), document.contains(b) : true
///// when u clear the input drop down menu still open but nothing inside logic to handle it is when u are not fetchingdata we should probably closs the dropdown

// const fetchData = async searchTerm => {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   };
  
//   const root = document.querySelector('.autocomplete');
//   root.innerHTML = `
//     <label><b>Search For a Movie</b></label>
//     <input class="input" />
//     <div class="dropdown">
//       <div class="dropdown-menu">
//         <div class="dropdown-content results"></div>
//       </div>
//     </div>
//   `;
  
//   const input = document.querySelector('input');
//   const dropdown = document.querySelector('.dropdown');
//   const resultsWrapper = document.querySelector('.results');


//   const debounce = (func, delay = 1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }
  
//   const onInput = async event => {
//   const movies = await fetchData(event.target.value);
  
//     if(!movies.length){
//         dropdown.classList.remove('is-active')
//         //// return; statement is used to exit the function early
//         return;
//     }

//     resultsWrapper.innerHTML = ' '
  
//     dropdown.classList.add('is-active');
//     for (let movie of movies) {
//       const option = document.createElement('a');

//       const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
      
//       option.classList.add('dropdown-item');
//       option.innerHTML = `
//         <img src="${imgSrc}" />
//         ${movie.Title}
//       `;
  
//       resultsWrapper.appendChild(option);
//     }
//   };
//   input.addEventListener('input', debounce(onInput, 500));

// document.addEventListener('click', event =>{
//     if(!root.contains(event.target)){
//         dropdown.classList.remove('is-active')
//     }
// })







//// ********************************* handle the move selection
//// update the text and closs the dropdown



// const fetchData = async searchTerm => {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   };
  
//   const root = document.querySelector('.autocomplete');
//   root.innerHTML = `
//     <label><b>Search For a Movie</b></label>
//     <input class="input" />
//     <div class="dropdown">
//       <div class="dropdown-menu">
//         <div class="dropdown-content results"></div>
//       </div>
//     </div>
//   `;
  
//   const input = document.querySelector('input');
//   const dropdown = document.querySelector('.dropdown');
//   const resultsWrapper = document.querySelector('.results');


//   const debounce = (func, delay = 1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }
  
//   const onInput = async event => {
//   const movies = await fetchData(event.target.value);
  
//     if(!movies.length){
//         dropdown.classList.remove('is-active')
//         return;
//     }

//     resultsWrapper.innerHTML = ' '
  
//     dropdown.classList.add('is-active');
//     for (let movie of movies) {
//       const option = document.createElement('a');

//       const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
      
//       option.classList.add('dropdown-item');
//       option.innerHTML = `
//         <img src="${imgSrc}" />
//         ${movie.Title}
//       `;

//       option.addEventListener(('click'), event => {
//             dropdown.classList.remove('is-active')
//             input.value = movie.Title;

//       })
  
//       resultsWrapper.appendChild(option);
//     }
//   };
//   input.addEventListener('input', debounce(onInput, 500));

// document.addEventListener('click', event =>{
//     if(!root.contains(event.target)){
//         dropdown.classList.remove('is-active')
//     }
// })







///// *********************************** making follow up request
//// render the move which we clicked
//// make helper function to reduce complexity of too much code at one place we will pass movie as arg with contains id that will be used for follow up request

// const fetchData = async searchTerm => {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   };
  
//   const root = document.querySelector('.autocomplete');
//   root.innerHTML = `
//     <label><b>Search For a Movie</b></label>
//     <input class="input" />
//     <div class="dropdown">
//       <div class="dropdown-menu">
//         <div class="dropdown-content results"></div>
//       </div>
//     </div>
//   `;
  
//   const input = document.querySelector('input');
//   const dropdown = document.querySelector('.dropdown');
//   const resultsWrapper = document.querySelector('.results');


//   const debounce = (func, delay = 1000) =>{
//     let timeOutId;
//     return (...args) => {
//         if (timeOutId){
//             clearTimeout(timeOutId)
//         }
//         timeOutId = setTimeout(()=> {
//             func.apply(null,args)
//         },1000)
        
//     }
// }
  
//   const onInput = async event => {
//   const movies = await fetchData(event.target.value);
  
//     if(!movies.length){
//         dropdown.classList.remove('is-active')
//         return;
//     }

//     resultsWrapper.innerHTML = ' '
  
//     dropdown.classList.add('is-active');
//     for (let movie of movies) {
//       const option = document.createElement('a');

//       const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
      
//       option.classList.add('dropdown-item');
//       option.innerHTML = `
//         <img src="${imgSrc}" />
//         ${movie.Title}
//       `;

//       option.addEventListener(('click'), event => {
//             dropdown.classList.remove('is-active')
//             input.value = movie.Title;

//             onMovieSelect(movie);

//       })
  
//       resultsWrapper.appendChild(option);
//     }
//   };
//   input.addEventListener('input', debounce(onInput, 500));

// document.addEventListener('click', event =>{
//     if(!root.contains(event.target)){
//         dropdown.classList.remove('is-active')
//     }
// });

// const onMovieSelect = async (movie) => {
//     // console.log(movie)
//     const response = await axios.get('http://www.omdbapi.com/', {
//         params: {
//           apikey: 'd9835cc5',
//           i : movie.imdbID
//         }
//        })
//        console.log(response.data)
// }






////******************************************* rendenring expanded detail summary


// const fetchData = async searchTerm => {
//   const response = await axios.get('http://www.omdbapi.com/', {
//     params: {
//       apikey: 'd9835cc5',
//       s: searchTerm
//     }
//   });

//   if (response.data.Error) {
//     return [];
//   }

//   return response.data.Search;
// };

// const root = document.querySelector('.autocomplete');
// root.innerHTML = `
//   <label><b>Search For a Movie</b></label>
//   <input class="input" />
//   <div class="dropdown">
//     <div class="dropdown-menu">
//       <div class="dropdown-content results"></div>
//     </div>
//   </div>
// `;

// const input = document.querySelector('input');
// const dropdown = document.querySelector('.dropdown');
// const resultsWrapper = document.querySelector('.results');


// const debounce = (func, delay = 1000) =>{
//   let timeOutId;
//   return (...args) => {
//       if (timeOutId){
//           clearTimeout(timeOutId)
//       }
//       timeOutId = setTimeout(()=> {
//           func.apply(null,args)
//       },1000)
      
//   }
// }

// const onInput = async event => {
// const movies = await fetchData(event.target.value);

//   if(!movies.length){
//       dropdown.classList.remove('is-active')
//       return;
//   }

//   resultsWrapper.innerHTML = ' '

//   dropdown.classList.add('is-active');
//   for (let movie of movies) {
//     const option = document.createElement('a');

//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
    
//     option.classList.add('dropdown-item');
//     option.innerHTML = `
//       <img src="${imgSrc}" />
//       ${movie.Title}
//     `;

//     option.addEventListener(('click'), event => {
//           dropdown.classList.remove('is-active')
//           input.value = movie.Title;

//           onMovieSelect(movie);

//     })

//     resultsWrapper.appendChild(option);
//   }
// };
// input.addEventListener('input', debounce(onInput, 500));

// document.addEventListener('click', event =>{
//   if(!root.contains(event.target)){
//       dropdown.classList.remove('is-active')
//   }
// });

// const onMovieSelect = async (movie) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      })
//      ///// for checking html that written below i first create the html div now going to select it
//      document.querySelector('#summary').innerHTML = movieTemplate(response.data)
// }

// const movieTemplate = (movieDetail) => {
//   return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>
//   `;
// }





///// ************************************ expanded statistics


// const fetchData = async searchTerm => {
//   const response = await axios.get('http://www.omdbapi.com/', {
//     params: {
//       apikey: 'd9835cc5',
//       s: searchTerm
//     }
//   });

//   if (response.data.Error) {
//     return [];
//   }

//   return response.data.Search;
// };

// const root = document.querySelector('.autocomplete');
// root.innerHTML = `
//   <label><b>Search For a Movie</b></label>
//   <input class="input" />
//   <div class="dropdown">
//     <div class="dropdown-menu">
//       <div class="dropdown-content results"></div>
//     </div>
//   </div>
// `;

// const input = document.querySelector('input');
// const dropdown = document.querySelector('.dropdown');
// const resultsWrapper = document.querySelector('.results');


// const debounce = (func, delay = 1000) =>{
//   let timeOutId;
//   return (...args) => {
//       if (timeOutId){
//           clearTimeout(timeOutId)
//       }
//       timeOutId = setTimeout(()=> {
//           func.apply(null,args)
//       },1000)
      
//   }
// }

// const onInput = async event => {
// const movies = await fetchData(event.target.value);

//   if(!movies.length){
//       dropdown.classList.remove('is-active')
//       return;
//   }

//   resultsWrapper.innerHTML = ' '

//   dropdown.classList.add('is-active');
//   for (let movie of movies) {
//     const option = document.createElement('a');

//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
    
//     option.classList.add('dropdown-item');
//     option.innerHTML = `
//       <img src="${imgSrc}" />
//       ${movie.Title}
//     `;

//     option.addEventListener(('click'), event => {
//           dropdown.classList.remove('is-active')
//           input.value = movie.Title;

//           onMovieSelect(movie);

//     })

//     resultsWrapper.appendChild(option);
//   }
// };
// input.addEventListener('input', debounce(onInput, 500));

// document.addEventListener('click', event =>{
//   if(!root.contains(event.target)){
//       dropdown.classList.remove('is-active')
//   }
// });

// const onMovieSelect = async (movie) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      })
//      ///// for checking html that written below i first create the html div now going to select it
//      document.querySelector('#summary').innerHTML = movieTemplate(response.data)
// }

// const movieTemplate = (movieDetail) => {
//   return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Awards} </p>
//         <p class="sub-title"> Awards </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.BoxOffice} </p>
//         <p class="sub-title"> Box Office </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Metascore} </p>
//         <p class="sub-title"> Metascore </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbRating} </p>
//         <p class="sub-title"> IMDB Rating </p>  
//       </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbVotes} </p>
//         <p class="sub-title"> IMDB Votes </p>  
//       </article>
//   `;
// }










//// ********************************** displaying multiple autocomplete & extraction render logic


// const fetchData = async searchTerm => {
//   const response = await axios.get('http://www.omdbapi.com/', {
//     params: {
//       apikey: 'd9835cc5',
//       s: searchTerm
//     }
//   });

//   if (response.data.Error) {
//     return [];
//   }

//   return response.data.Search;
// };


// createAutoComplete({
//   root: document.querySelector('.autocomplete'),
//   renderOption(movie){
//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
//     return `
//            <img src="${imgSrc}" />
//            ${movie.Title} (${movie.Year})
//          `;
//   }

// })
// // createAutoComplete({
// //   root: document.querySelector('.autocomplete-two')
// // })
// // createAutoComplete({
// //   root: document.querySelector('.autocomplete-three')
// // })


// const onMovieSelect = async (movie) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      })
    
//      document.querySelector('#summary').innerHTML = movieTemplate(response.data)
// }

// const movieTemplate = (movieDetail) => {
//   return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Awards} </p>
//         <p class="sub-title"> Awards </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.BoxOffice} </p>
//         <p class="sub-title"> Box Office </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Metascore} </p>
//         <p class="sub-title"> Metascore </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbRating} </p>
//         <p class="sub-title"> IMDB Rating </p>  
//       </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbVotes} </p>
//         <p class="sub-title"> IMDB Votes </p>  
//       </article>
//   `;
// }






///// ************************************* extracting selection logic
///// what to do when user clicks on an option


// const fetchData = async searchTerm => {
//   const response = await axios.get('http://www.omdbapi.com/', {
//     params: {
//       apikey: 'd9835cc5',
//       s: searchTerm
//     }
//   });

//   if (response.data.Error) {
//     return [];
//   }

//   return response.data.Search;
// };


// createAutoComplete({
//   root: document.querySelector('.autocomplete'),
//   renderOption(movie){
//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
//     return `
//            <img src="${imgSrc}" />
//            ${movie.Title} (${movie.Year})
//          `;
//   },
//   onOptionSelect(movie){
//     onMovieSelect(movie);
//   },
//   inputValue(movie){
//     return movie.Title
//   }


// })


// const onMovieSelect = async (movie) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      })
    
//      document.querySelector('#summary').innerHTML = movieTemplate(response.data)
// }

// const movieTemplate = (movieDetail) => {
//   return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Awards} </p>
//         <p class="sub-title"> Awards </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.BoxOffice} </p>
//         <p class="sub-title"> Box Office </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Metascore} </p>
//         <p class="sub-title"> Metascore </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbRating} </p>
//         <p class="sub-title"> IMDB Rating </p>  
//       </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbVotes} </p>
//         <p class="sub-title"> IMDB Votes </p>  
//       </article>
//   `;
// }





//// ******************************* removing movie refrences


// createAutoComplete({
//   root: document.querySelector('.autocomplete'),
//   renderOption(movie){
//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
//     return `
//            <img src="${imgSrc}" />
//            ${movie.Title} (${movie.Year})
//          `;
//   },
//   onOptionSelect(movie){
//     onMovieSelect(movie);
//   },
//   inputValue(movie){
//     return movie.Title
//   },

//   async  fetchData(searchTerm) {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   }


// })


// const onMovieSelect = async (movie) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      })
    
//      document.querySelector('#summary').innerHTML = movieTemplate(response.data)
// }

// const movieTemplate = (movieDetail) => {
//   return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Awards} </p>
//         <p class="sub-title"> Awards </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.BoxOffice} </p>
//         <p class="sub-title"> Box Office </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Metascore} </p>
//         <p class="sub-title"> Metascore </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbRating} </p>
//         <p class="sub-title"> IMDB Rating </p>  
//       </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbVotes} </p>
//         <p class="sub-title"> IMDB Votes </p>  
//       </article>
//   `;
// }




//// ******************************************* refreshes HTML structure & Avoiding duplication of config
//// first go to index.html make changes



// autoCompleteConfig = {
//   renderOption(movie){
//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
//     return `
//            <img src="${imgSrc}" />
//            ${movie.Title} (${movie.Year})
//          `;
//   },
//   onOptionSelect(movie){
//     onMovieSelect(movie);
//   },
//   inputValue(movie){
//     return movie.Title
//   },

//   async  fetchData(searchTerm) {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   }

// }


// createAutoComplete({
//   ...autoCompleteConfig,
//   root: document.querySelector('#left-autocomplete'),
// })

// createAutoComplete({
//   ...autoCompleteConfig,
//   root: document.querySelector('#right-autocomplete'),
// })


// const onMovieSelect = async (movie) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      })
    
//      document.querySelector('#summary').innerHTML = movieTemplate(response.data)
// }

// const movieTemplate = (movieDetail) => {
//   return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Awards} </p>
//         <p class="sub-title"> Awards </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.BoxOffice} </p>
//         <p class="sub-title"> Box Office </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Metascore} </p>
//         <p class="sub-title"> Metascore </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbRating} </p>
//         <p class="sub-title"> IMDB Rating </p>  
//       </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbVotes} </p>
//         <p class="sub-title"> IMDB Votes </p>  
//       </article>
//   `;
// }






//// *************************** hiding the tutorial & showing to summary
//// again first add left/right summary in index.html


// autoCompleteConfig = {
//   renderOption(movie){
//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
//     return `
//            <img src="${imgSrc}" />
//            ${movie.Title} (${movie.Year})
//          `;
//   },
 
//   inputValue(movie){
//     return movie.Title
//   },

//   async  fetchData(searchTerm) {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   }

// }


// createAutoComplete({
//   ...autoCompleteConfig,
//   root: document.querySelector('#left-autocomplete'),
//   onOptionSelect(movie){
//     document.querySelector('.tutorial').classList.add("is-hidden")
//     onMovieSelect(movie, document.querySelector('#left-summary'));
//   }
// })

// createAutoComplete({
//   ...autoCompleteConfig,
//   root: document.querySelector('#right-autocomplete'),
//   onOptionSelect(movie){
//     document.querySelector('.tutorial').classList.add("is-hidden")
//     onMovieSelect(movie, document.querySelector('#right-summary'));
//   },
// })



// const onMovieSelect = async (movie, summaryElement, side) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      });
    
//     summaryElement.innerHTML = movieTemplate(response.data)
// }

// const movieTemplate = (movieDetail) => {
//   return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Awards} </p>
//         <p class="sub-title"> Awards </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.BoxOffice} </p>
//         <p class="sub-title"> Box Office </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Metascore} </p>
//         <p class="sub-title"> Metascore </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbRating} </p>
//         <p class="sub-title"> IMDB Rating </p>  
//       </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbVotes} </p>
//         <p class="sub-title"> IMDB Votes </p>  
//       </article>
//   `;
// }





//// ********************** comparison & extracting static values


// autoCompleteConfig = {
//   renderOption(movie){
//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
//     return `
//            <img src="${imgSrc}" />
//            ${movie.Title} (${movie.Year})
//          `;
//   },
 
//   inputValue(movie){
//     return movie.Title
//   },

//   async  fetchData(searchTerm) {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   }

// }


// createAutoComplete({
//   ...autoCompleteConfig,
//   root: document.querySelector('#left-autocomplete'),
//   onOptionSelect(movie){
//     document.querySelector('.tutorial').classList.add("is-hidden")
//     onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
//   }
// })

// createAutoComplete({
//   ...autoCompleteConfig,
//   root: document.querySelector('#right-autocomplete'),
//   onOptionSelect(movie){
//     document.querySelector('.tutorial').classList.add("is-hidden")
//     onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
//   },
// })


// let leftMovie;
// let rightMovie;
// const onMovieSelect = async (movie, summaryElement, side) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      });
    
//     summaryElement.innerHTML = movieTemplate(response.data)
//     if(side==='left'){
//       leftMovie = response.data
//     }
//     else{
//       rightMovie = response.data
//     }

//     //// first check the weather both sides movie exist then do comparision
//     if(leftMovie && rightMovie){
//       runComparison()
//     }
// }


// const runComparison = () => {
//     console.log('Time Comparison')
// }

// const movieTemplate = (movieDetail) => {
//   const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g,'').replace(/,/g,''))
//   const metaScores = parseInt(movieDetail.Metascore)
//   const imdbRating = parseFloat(movieDetail.imdbRating)
//   const imdbVotes  = parseInt(movieDetail.imdbVotes.replace(/,/g,''))
//   // console.log(dollars, metaScores, imdbRating, imdbVotes)
//   return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Awards} </p>
//         <p class="sub-title"> Awards </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.BoxOffice} </p>
//         <p class="sub-title"> Box Office </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.Metascore} </p>
//         <p class="sub-title"> Metascore </p>  
//       </article>
      
//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbRating} </p>
//         <p class="sub-title"> IMDB Rating </p>  
//       </article>

//       <article class="notification is-primary">
//         <p class="title">${movieDetail.imdbVotes} </p>
//         <p class="sub-title"> IMDB Votes </p>  
//       </article>
//   `;
// }







//// ************************************** Parsing Number of awards && and applying parse properties


// autoCompleteConfig = {
//   renderOption(movie){
//     const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
//     return `
//            <img src="${imgSrc}" />
//            ${movie.Title} (${movie.Year})
//          `;
//   },
 
//   inputValue(movie){
//     return movie.Title
//   },

//   async  fetchData(searchTerm) {
//     const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         s: searchTerm
//       }
//     });
  
//     if (response.data.Error) {
//       return [];
//     }
  
//     return response.data.Search;
//   }

// }


// createAutoComplete({
//   ...autoCompleteConfig,
//   root: document.querySelector('#left-autocomplete'),
//   onOptionSelect(movie){
//     document.querySelector('.tutorial').classList.add("is-hidden")
//     onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
//   }
// })

// createAutoComplete({
//   ...autoCompleteConfig,
//   root: document.querySelector('#right-autocomplete'),
//   onOptionSelect(movie){
//     document.querySelector('.tutorial').classList.add("is-hidden")
//     onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
//   },
// })


// let leftMovie;
// let rightMovie;
// const onMovieSelect = async (movie, summaryElement, side) => {
//   // console.log(movie)
//   const response = await axios.get('http://www.omdbapi.com/', {
//       params: {
//         apikey: 'd9835cc5',
//         i : movie.imdbID
//       }
//      });
    
//     summaryElement.innerHTML = movieTemplate(response.data)
//     if(side==='left'){
//       leftMovie = response.data
//     }
//     else{
//       rightMovie = response.data
//     }

//     //// first check the weather both sides movie exist then do comparision
//     if(leftMovie && rightMovie){
//       runComparison()
//     }
// }


// const runComparison = () => {
//     console.log('Time Comparison')
// }

// const movieTemplate = (movieDetail) => {
//   const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g,'').replace(/,/g,''))
//   const metaScores = parseInt(movieDetail.Metascore)
//   const imdbRating = parseFloat(movieDetail.imdbRating)
//   const imdbVotes  = parseInt(movieDetail.imdbVotes.replace(/,/g,''))
//   // console.log(dollars, metaScores, imdbRating, imdbVotes)
  
//   // let count = 0;
//   // const awards = movieDetail.Awards.split(' ').forEach((word) =>{
//   //                 const value = parseInt(word)   //// return NaN if word not a number

//   //                   if(isNaN(value)){
//   //                     return;
//   //                   }
//   //                   else {
//   //                     count = count + value
//   //                   }
//   //                 });

//   // console.log(count)
  
//   //// u can use reduce

//   const awards = movieDetail.Awards.split(' ').reduce((prev, word) =>{
//           const value = parseInt(word);
//           if(isNaN(value)){
//             return prev;
//           }
//           else {
//             return prev + value;
//           }
//   },0);

// console.log(awards)

// return `
//             <article class='media'> 
//             <figure class= 'media-left'>
//               <p class='image'>
//                 <img src = '${movieDetail.Poster}'>
//               </p>
//             </figure> 
//             <div class='media-content'>
//               <div class='content'>  
//                 <h1> ${movieDetail.Title} </h1>
//                 <h4> ${movieDetail.Genre} </h4>
//                 <p> ${movieDetail.Plot}  </p>
//                   </div >
//             </div>
//             </article>

//       <article data-value = ${awards} class="notification is-primary">
//         <p class="title">${movieDetail.Awards} </p>
//         <p class="sub-title"> Awards </p>  
//       </article>
      
//       <article data-value=${dollars} class="notification is-primary">
//         <p class="title">${movieDetail.BoxOffice} </p>
//         <p class="sub-title"> Box Office </p>  
//       </article>
      
//       <article data-value = ${metaScores} class="notification is-primary">
//         <p class="title">${movieDetail.Metascore} </p>
//         <p class="sub-title"> Metascore </p>  
//       </article>
      
//       <article data-value = ${imdbRating} class="notification is-primary">
//         <p class="title">${movieDetail.imdbRating} </p>
//         <p class="sub-title"> IMDB Rating </p>  
//       </article>

//       <article data-value=${imdbVotes} class="notification is-primary">
//         <p class="title">${movieDetail.imdbVotes} </p>
//         <p class="sub-title"> IMDB Votes </p>  
//       </article>
//   `;
// }






///// ******************************************** Updating style


autoCompleteConfig = {
  renderOption(movie){
    const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
    return `
           <img src="${imgSrc}" />
           ${movie.Title} (${movie.Year})
         `;
  },
 
  inputValue(movie){
    return movie.Title
  },

  async  fetchData(searchTerm) {
    const response = await axios.get('https://www.omdbapi.com/', {
      params: {
        apikey: 'd9835cc5',
        s: searchTerm
      }
    });
  
    if (response.data.Error) {
      return [];
    }
  
    return response.data.Search;
  }

}


createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector('#left-autocomplete'),
  onOptionSelect(movie) {
    document.querySelector('.tutorial').classList.add('is-hidden');
    onMovieSelect(movie, document.querySelector('#left-summary'), 'left');
  }
});
createAutoComplete({
  ...autoCompleteConfig,
  root: document.querySelector('#right-autocomplete'),
  onOptionSelect(movie) {
    document.querySelector('.tutorial').classList.add('is-hidden');
    onMovieSelect(movie, document.querySelector('#right-summary'), 'right');
  }
});


let leftMovie;
let rightMovie;
const onMovieSelect = async (movie, summaryElement, side) => {
  const response = await axios.get('https://www.omdbapi.com/', {
    params: {
      apikey: 'd9835cc5',
      i: movie.imdbID
    }
  });

  summaryElement.innerHTML = movieTemplate(response.data);

  if (side === 'left') {
    leftMovie = response.data;
  } else {
    rightMovie = response.data;
  }

  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
    const leftSideStats = document.querySelectorAll('#left-summary .notification')
    const rightSideStats = document.querySelectorAll('#right-summary .notification')

    leftSideStats.forEach((leftStat, index)=>{
      const rightStat = rightSideStats[index]
      // console.log(leftStat, rightStat)
      const leftStatValue = parseInt( leftStat.dataset.value)
      const rightStatValue = parseInt(rightStat.dataset.value )

      if(rightStatValue > leftStatValue){
        leftStat.classList.remove('is-primary')  //// is-primary is responsible to green color
        leftStat.classList.add('is-warning') 
      }
      else{
        rightStat.classList.remove('is-primary') 
        rightStat.classList.add('is-warning')
      }
    })
}

const movieTemplate = (movieDetail) => {
  const dollars = parseInt(movieDetail.BoxOffice.replace(/\$/g,'').replace(/,/g,''))
  const metaScores = parseInt(movieDetail.Metascore)
  const imdbRating = parseFloat(movieDetail.imdbRating)
  const imdbVotes  = parseInt(movieDetail.imdbVotes.replace(/,/g,''))
  // console.log(dollars, metaScores, imdbRating, imdbVotes)
  const awards = movieDetail.Awards.split(' ').reduce((prev, word) =>{
          const value = parseInt(word);
          if(isNaN(value)){
            return prev;
          }
          else {
            return prev + value;
          }
  },0);

// console.log(awards)

return `
            <article class='media'> 
            <figure class= 'media-left'>
              <p class='image'>
                <img src = '${movieDetail.Poster}'>
              </p>
            </figure> 
            <div class='media-content'>
              <div class='content'>  
                <h1> ${movieDetail.Title} </h1>
                <h4> ${movieDetail.Genre} </h4>
                <p> ${movieDetail.Plot}  </p>
                  </div >
            </div>
            </article>

      <article data-value = ${awards} class="notification is-primary">
        <p class="title">${movieDetail.Awards} </p>
        <p class="sub-title"> Awards </p>  
      </article>
      
      <article data-value=${dollars} class="notification is-primary">
        <p class="title">${movieDetail.BoxOffice} </p>
        <p class="sub-title"> Box Office </p>  
      </article>
      
      <article data-value = ${metaScores} class="notification is-primary">
        <p class="title">${movieDetail.Metascore} </p>
        <p class="sub-title"> Metascore </p>  
      </article>
      
      <article data-value = ${imdbRating} class="notification is-primary">
        <p class="title">${movieDetail.imdbRating} </p>
        <p class="sub-title"> IMDB Rating </p>  
      </article>

      <article data-value=${imdbVotes} class="notification is-primary">
        <p class="title">${movieDetail.imdbVotes} </p>
        <p class="sub-title"> IMDB Votes </p>  
      </article>
  `;
}




