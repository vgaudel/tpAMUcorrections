async function myGenericJsGetFetchData(url) {
  try {
    const response = await fetch(url);

    if (response.status !== 200) {
      throw new Error('Problem. Status Code: ' + response.status);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.log('Fetch Error :-S', err);
    throw err;
  }
}

async function main() {
  try {
    const data = await myGenericJsGetFetchData('http://localhost:3000/products/50');
    console.log('Donnée reçue :');
    console.log(data);
  } catch (err) {
    console.log('Erreur capturée dans main :', err.message);
  }
}

main();