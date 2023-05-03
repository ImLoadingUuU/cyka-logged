<?php

/**
 * System Configuration
 * ---
 * Read the documentation for explainations.
 */

return [
    'installation_url' => 'localhost',

    'development_mode' => true,
    'maintenance_mode' => false,
    'maintenance_key' => 'MAINTENANCE_KEY',
    'lockdown_mode' => false,

    'language' => 'en',
    'use_https' => false,

    'cpanel_url' => 'share.sitenexus.me',
    'domain_selection' => [
        'share.sitenexus.me'
    ],
    'amp' => [
      'captcha' => true,
      'password' => "admin"
    ],
    'blacklisted_tld' => [
        'tk',
        'de'
    ],
    'default_plan' => 'Starter',

    'features' => [
        'login' => [
            'language_selector' => true,
            'remember_me' => true,
        ],
        'signup' => [
            'recaptcha' => true,
            'recaptcha_key_secret' => "6LdKHcklAAAAAKqKWQzbSd4FcVg0GUWxa_3vg-tm",
            'recaptcha_key_public' => "6LdKHcklAAAAALeLtKHH4_WHALcESZFW3Yd0bPau",
        ]
    ],
];
