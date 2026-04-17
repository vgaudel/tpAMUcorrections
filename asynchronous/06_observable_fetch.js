const { Observable } = require('../tpAMUcorrections/node_modules/rxjs');

function myGenericJsGetObservableData$(url) {
  return new Observable((observer) => {
    fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Problem. Status Code: ' + response.status);
        }

        return response.json();
      })
      .then((data) => {
        observer.next(data);
        observer.complete();
      })
      .catch((err) => {
        console.log('Fetch Error :-S', err);
        observer.error(err);
      });
  });
}

myGenericJsGetObservableData$('http://localhost:3000/products/50').subscribe({
  next: (data) => {
    console.log('Donnée reçue :');
    console.log(data);
  },
  error: (err) => {
    console.log('Erreur :', err.message || err);
  },
  complete: () => {
    console.log('Observable terminé');
  }
});
