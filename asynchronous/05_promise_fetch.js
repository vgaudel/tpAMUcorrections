function myGenericJsGetFetchData(url){
  return new Promise((resolveWithJsData,reject)=>{
         fetch(url)
        .then( (response) => {
           if (response.status !== 200) {
               var errString = 'Problem. Status Code: ' + response.status;
               console.log(errString);  reject(errString);   return;
               }
               // Examine the text in the response :
               response.json().then(function(data) {
                  resolveWithJsData(data);
               })
        })
     .catch((err) =>{ console.log('Fetch Error :-S', err);   reject(err); });
    });
}

myGenericJsGetFetchData("http://localhost:3000/products/50")
           .then( (data) => {    console.log(data);
                   })
            .catch((err) => { console.log(err); });
            



const promesse = new Promise((resolve, reject) => {
  const succes = true;

  if (succes) {
    resolve("Opération réussie");
  } else {
    reject("Une erreur est survenue");
  }
});

promesse.then((result) => console.log(result));