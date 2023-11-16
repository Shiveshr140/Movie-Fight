
///// whenever we call this function we will pass some kind of config object that config object going to have all kind of custom function that specify how the autocomplete should work inside of out specific application.

// const createAutoComplete = (config) => {

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

// }




////this config object has to have root element

// const createAutoComplete = ({root}) => {

//    root.innerHTML = `
//       <label><b>Search For a Movie</b></label>
//       <input class="input" />
//       <div class="dropdown">
//         <div class="dropdown-menu">
//           <div class="dropdown-content results"></div>
//         </div>
//       </div>
//     `;
    
//     const input = root.querySelector('input');
//     const dropdown = root.querySelector('.dropdown');
//     const resultsWrapper = root.querySelector('.results');
    
    
//     const debounce = (func, delay = 1000) =>{
//       let timeOutId;
//       return (...args) => {
//           if (timeOutId){
//               clearTimeout(timeOutId)
//           }
//           timeOutId = setTimeout(()=> {
//               func.apply(null,args)
//           },delay)
          
//       }
//     }
    
//     const onInput = async event => {
//     const movies = await fetchData(event.target.value);
    
//       if(!movies.length){
//           dropdown.classList.remove('is-active')
//           return;
//       }
    
//       resultsWrapper.innerHTML = ' '
    
//       dropdown.classList.add('is-active');
//       for (let movie of movies) {
//         const option = document.createElement('a');
    
//         const imgSrc = movie.Poster === 'N/A' ? '': movie.Poster
        
//         option.classList.add('dropdown-item');
//         option.innerHTML = `
//           <img src="${imgSrc}" />
//           ${movie.Title}
//         `;
    
//         option.addEventListener(('click'), event => {
//               dropdown.classList.remove('is-active')
//               input.value = movie.Title;
    
//               onMovieSelect(movie);
    
//         })
    
//         resultsWrapper.appendChild(option);
//       }
//     };
//     input.addEventListener('input', debounce(onInput, 500));
    
//     document.addEventListener('click', event =>{
//       if(!root.contains(event.target)){
//           dropdown.classList.remove('is-active')
//       }
//     });
    
//     }



  //// ************************************ extracting rendering logic


  // const createAutoComplete = ({root, renderOption}) => {

  //   root.innerHTML = `
  //      <label><b>Search For a Movie</b></label>
  //      <input class="input" />
  //      <div class="dropdown">
  //        <div class="dropdown-menu">
  //          <div class="dropdown-content results"></div>
  //        </div>
  //      </div>
  //    `;
     
  //    const input = root.querySelector('input');
  //    const dropdown = root.querySelector('.dropdown');
  //    const resultsWrapper = root.querySelector('.results');
     
     
  //    const debounce = (func, delay = 1000) =>{
  //      let timeOutId;
  //      return (...args) => {
  //          if (timeOutId){
  //              clearTimeout(timeOutId)
  //          }
  //          timeOutId = setTimeout(()=> {
  //              func.apply(null,args)
  //          },delay)
           
  //      }
  //    }
     
  //    const onInput = async event => {
  //    const movies = await fetchData(event.target.value);
     
  //      if(!movies.length){
  //          dropdown.classList.remove('is-active')
  //          return;
  //      }
     
  //      resultsWrapper.innerHTML = ' '
     
  //      dropdown.classList.add('is-active');
  //      for (let movie of movies) {
  //        const option = document.createElement('a');
     
  //        option.classList.add('dropdown-item');
  //        option.innerHTML = renderOption(movie);
     
  //        option.addEventListener(('click'), event => {
  //              dropdown.classList.remove('is-active')
  //              input.value = movie.Title;
     
  //              onMovieSelect(movie);
     
  //        })
     
  //        resultsWrapper.appendChild(option);
  //      }
  //    };
  //    input.addEventListener('input', debounce(onInput, 500));
     
  //    document.addEventListener('click', event =>{
  //      if(!root.contains(event.target)){
  //          dropdown.classList.remove('is-active')
  //      }
  //    });
     
  //    }


    

///// ************************************* extracting selection logic
///// what to do when user clicks on an option 



// const createAutoComplete = ({root, renderOption, onOptionSelect, inputValue}) => {

//   root.innerHTML = `
//      <label><b>Search For a Movie</b></label>
//      <input class="input" />
//      <div class="dropdown">
//        <div class="dropdown-menu">
//          <div class="dropdown-content results"></div>
//        </div>
//      </div>
//    `;
   
//    const input = root.querySelector('input');
//    const dropdown = root.querySelector('.dropdown');
//    const resultsWrapper = root.querySelector('.results');
   
   
//    const debounce = (func, delay = 1000) =>{
//      let timeOutId;
//      return (...args) => {
//          if (timeOutId){
//              clearTimeout(timeOutId)
//          }
//          timeOutId = setTimeout(()=> {
//              func.apply(null,args)
//          },delay)
         
//      }
//    }
   
//    const onInput = async event => {
//    const movies = await fetchData(event.target.value);
   
//      if(!movies.length){
//          dropdown.classList.remove('is-active')
//          return;
//      }
   
//      resultsWrapper.innerHTML = ' '
   
//      dropdown.classList.add('is-active');
//      for (let movie of movies) {
//        const option = document.createElement('a');
   
//        option.classList.add('dropdown-item');
//        option.innerHTML = renderOption(movie);
   
//        option.addEventListener(('click'), event => {
//              dropdown.classList.remove('is-active')
//              input.value = inputValue(movie);
//              onOptionSelect(movie)
             
   
//        })
   
//        resultsWrapper.appendChild(option);
//      }
//    };
//    input.addEventListener('input', debounce(onInput, 500));
   
//    document.addEventListener('click', event =>{
//      if(!root.contains(event.target)){
//          dropdown.classList.remove('is-active')
//      }
//    });
   
//    }




  
//// ******************************* removing movie refrences

const createAutoComplete = ({root, renderOption, onOptionSelect, inputValue, fetchData}) => {

  root.innerHTML = `
     <label><b>Search</b></label>
     <input class="input" />
     <div class="dropdown">
       <div class="dropdown-menu">
         <div class="dropdown-content results"></div>
       </div>
     </div>
   `;
   
   const input = root.querySelector('input');
   const dropdown = root.querySelector('.dropdown');
   const resultsWrapper = root.querySelector('.results');
   
   
   const debounce = (func, delay = 1000) =>{
     let timeOutId;
     return (...args) => {
         if (timeOutId){
             clearTimeout(timeOutId)
         }
         timeOutId = setTimeout(()=> {
             func.apply(null,args)
         },delay)
         
     }
   }
   
   const onInput = async event => {
   const items = await fetchData(event.target.value);
   
     if(!items.length){
         dropdown.classList.remove('is-active')
         return
     }
   
     resultsWrapper.innerHTML = ' '
   
     dropdown.classList.add('is-active');
     for (let item of items) {
       const option = document.createElement('a');
   
       option.classList.add('dropdown-item');
       option.innerHTML = renderOption(item);
   
       option.addEventListener(('click'), event => {
             dropdown.classList.remove('is-active')
             input.value = inputValue(item);
             onOptionSelect(item)
             
   
       })
   
       resultsWrapper.appendChild(option);
     }
   };
   input.addEventListener('input', debounce(onInput, 500));
   
   document.addEventListener('click', event =>{
     if(!root.contains(event.target)){
         dropdown.classList.remove('is-active')
     }
   });
   
   }