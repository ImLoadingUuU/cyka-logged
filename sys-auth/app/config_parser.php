<?php

namespace ConfigParser;

use Arr;
use InvalidConfigException;

/**
 * NOTE TO SELF: Should check if the sensitive config still use default values and lock the system
 */
$config = [];

# Handle Branding Config
$branding = require SYSTEM . '/config/branding.php';
$required = ['name', 'logo', 'slogan', 'main_website', 'favicon', 'accent_color', 'background_color', 'language', 'contact_email', 'report_abuse_email'];
foreach ($required as $key) {
    if (!isset($branding[$key])) {
        throw new InvalidConfigException("Missing '{$key}' field in 'branding' config.");
    }
}
$config['branding'] = $branding;
unset($branding, $required, $key);

# Handle Multisite Config
$multisite = require SYSTEM . '/config/multisite.php';
$required = ['secret_key', 'members'];
foreach ($required as $key) {
    if (!isset($multisite[$key])) {
        throw new InvalidConfigException("Missing '{$key}' field in 'multisite' config.");
    }
}

$required = ['domain', 'protocol', 'roles', 'allow_direct_signup', 'allow_direct_login'];
$domains = [];
foreach ($multisite['members'] as $i => $member) {
    foreach ($required as $key) {
        if (!isset($multisite['members'][$i][$key])) {
            throw new InvalidConfigException("Missing '{$key}' field in 'multisite' member '{$i}' config.");
        }
    }
    $multisite['members'][$i]['identifier'] = md5(json_encode($member));
    $domains[] = $member['domain'];
}

var_dump($multisite);

// # Handle App Config
// $app_config = require SYSTEM . '/config/app.php';
// $app_config = Arr::dot($app_config);

// $required = ['system.debug_mode', 'system.use_https', 'system.cpanel_url', 'system.enable_multisite', 'branding.name', 'branding.logo', 'branding.slogan', 'branding.main_website', 'branding.favicon', 'branding.accent_color', 'branding.background_color', 'branding.language', 'branding.contact_email', 'branding.report_abuse_email',];



// file_put_contents(
//     SYSTEM . '/app/cache/config/app.json',
//     json_encode(array_merge(['loaded_from' => 'cache'], $app_config))
// );

// # Handle Multisite Config
// if($app_config['system.enable_multisite']){
//     $multisite_config = require SYSTEM.'/config/multisite.php';
// }

// return array_merge(['loaded_from' => 'config'], $app_config);
