
// Get the user's browser language
var userLanguage = navigator.language || navigator.userLanguage;

console.log('User language:', userLanguage);

// Redirect to the Spanish page if the browser language is Spanish
if (userLanguage === 'es' || userLanguage === 'es-ES' || userLanguage === 'es-419') {
  console.log('Redirecting to Spanish page...');
  window.location.replace("http://anaanzorena.com/index.html");
}
// Otherwise, redirect to the English page
else {
  console.log('Redirecting to English page...');
  window.location.replace("http://anaanzorena.com/en/index.html");
}

//Check if the code has already been executed in this session
if (!sessionStorage.getItem('languageCodeRun')) {
    // Get the user's browser language
    var userLanguage = navigator.language || navigator.userLanguage;
  
    console.log('User language:', userLanguage);
  
    // Redirect to the Spanish page if the browser language is Spanish
    if (userLanguage === 'es' || userLanguage === 'es-ES' || userLanguage === 'es-419') {
      console.log('Redirecting to Spanish page...');
      window.location.replace("/index.html");
    }
    // Otherwise, redirect to the English page
    else {
      console.log('Redirecting to English page...');
      window.location.replace("/en/index.html");
    }
  
    // Set the flag to indicate that the code has been executed
    sessionStorage.setItem('languageCodeRun', true);
  }

console.log("Funciona language")