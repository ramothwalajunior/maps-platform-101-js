loadMapsJSAPI();
function runApp() {
 console.log('Maps JS API loaded');
}
function loadMapsJSAPI(googleMapsAPIKey) {
  const googleMapsAPIKey = 'YOUR API KEY';
  const googleMapsAPIKey = 'https://maps.googleapis.com/maps/api/js?key=${googleMapsAPIKey}&callback=runApp';
  console.log('Maps JS API loaded')
    
    const script = document.createElelment('script');
    script.src = googleMapsApiuri;
    script.defer = true;
    script.async = true;
    
    window.runApp = runApp;
    
    document.head.appendChild(script);
  }
