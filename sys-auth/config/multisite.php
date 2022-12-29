<?php

/**
 * Project LOGGED v1.9 Multisite Configuration File
 * @author PlanetCloud (https://www.byet.net/index.php?/profile/528767-planetcloud/)
 * ---
 * PLEASE Read the documentation for more information.
 */

// Define a network here
return [
    'network_secret_key' => 'KEY',
    'members' => [
        [
            'domain' => 'DOM',
            'protocol' => 'https',
            'identifier' => 'ID', // added by system
            'roles' => ['sender', 'receiver'],
            'allow_direct_signup' => false,
            'allow_direct_login' => false,
        ],
    ]
    // Whoami?
];