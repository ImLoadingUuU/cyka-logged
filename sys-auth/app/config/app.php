<?php

/**
 * Project LOGGED v1.9 Main Configuration File
 * @author PlanetCloud (https://www.byet.net/index.php?/profile/528767-planetcloud/)
 * ---
 * PLEASE Read the documentation for more information.
 */

return [

    # System Settings
    'system' => [

        # Site Settings
        'debug_mode' => false,
        'cpanel_url' => 'rf.gd',
        'accent_color' => 'pink',
        'background_color' => 'cyan',
        'language' => 'en',
        // Translation packs

        # Form Settings
        'enable_login_form' => true,
        'enable_signup_form' => true,
        'enable_multisite_support' => true,
        // Multisite support (including domain selector must be on a separate, distributable file)
        // The idea is that one file shall be distributed across the sites and it somehow
        // magically works together

        # Additional Features
        'feature' => [
            'remember_username' => true,
            'language_selector' => true,
            'use_custom_captcha' => true
            // Need to add captcha lock
        ]
    ],

    # Company Settings
    'company' => [
        'name' => 'Hosting Company',
        'logo' => '',
        'logo_type' => 'text',
        'slogan' => 'Host your websites for free',
        'main_domain' => 'http://hosting.com',
        'favicon' => '',
        'contact_email' => 'hello@hosting.com',
        'report_abuse_email' => 'abuse@hosting.com'
    ],

];