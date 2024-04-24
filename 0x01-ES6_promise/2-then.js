export default function handleResponseFromAPI(promise) {
  return promise.then(
    function(result) {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    },
    function(error) {
      console.log('Got a response from the API');
      return new Error();
    }
  );
}
