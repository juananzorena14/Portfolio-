<?php
// Define supported languages and corresponding directories
$supported_languages = array(
    'es' => '/index.html',
    'en' => '/en/index.html',
);

// Get the user's preferred language from the Accept-Language header
function get_user_language() {
    $languages = explode(',', $_SERVER['HTTP_ACCEPT_LANGUAGE']);
    foreach ($languages as $language) {
        $language = explode(';', $language);
        if (strlen($language[0]) == 2) {
            return $language[0];
        }
    }
    return 'en';
}

// Redirect the user to the appropriate directory based on their preferred language
function redirect_to_language_directory() {
    $user_language = get_user_language();
    if (array_key_exists($user_language, $supported_languages)) {
        header('Location: ' . $supported_languages[$user_language]);
        exit;
    }
}

// Call the function to redirect the user
redirect_to_language_directory();
?>