<?php

/**
 * Login Route Page
 * Project LOGGED v2
 * ---
 * @author PlanetTheCloud <github.com/PlanetTheCloud>
 */

# Load all the required files and functionalities
require __DIR__ . '/../app/bootstrap.php';

# Set page parameters
Page::setParameters([
    'title' => 'Admin',
    'file' => 'admin.php'
]);

# Display the page
Page::render();
