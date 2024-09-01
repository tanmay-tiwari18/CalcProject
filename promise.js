function fetchData(){
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
         const success = true;
  
         if (success){
          resolve('data is fetched successfully');
         }else{
          reject('their is an error in fetching data ');
         }
      },2000)
    });
  }
  
  fetchData().then(message => console.log(message)).catch(error => console.log(error));
  console.log("after");