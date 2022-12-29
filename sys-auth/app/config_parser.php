<?php

namespace ConfigParser;

use Arr;
use InvalidConfigException;

/**
 * NOTE TO SELF: Should check if the sensitive config still use default values and lock the system
 */

# Handle App Config
$app_config = require SYSTEM . '/config/app.php';
$app_config = Arr::dot($app_config);

$required = ['system.debug_mode', 'system.use_https', 'system.cpanel_url', 'system.enable_multisite', 'branding.name', 'branding.logo', 'branding.slogan', 'branding.main_website', 'branding.favicon', 'branding.accent_color', 'branding.background_color', 'branding.language', 'branding.contact_email', 'branding.report_abuse_email',];

$app_config_keys = array_keys($app_config);
foreach ($required as $key) {
    if (!in_array($key, $app_config_keys)) {
        throw new InvalidConfigException('Missing required keys');
    }
}

file_put_contents(
    SYSTEM . '/app/cache/config/app.json',
    json_encode(array_merge(['loaded_from' => 'cache'], $app_config))
);

# Handle Multisite Config
if($app_config['system.enable_multisite']){
    $multisite_config = require SYSTEM.'/config/multisite.php';
}

return array_merge(['loaded_from' => 'config'], $app_config);
