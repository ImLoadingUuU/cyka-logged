<?php

# Prevent direct file access
if (strpos($_SERVER['REQUEST_URI'], 'sys-auth') !== false) {
    die(header('HTTP/1.1 403 Forbidden'));
}

# Definitions
define('ROOT', $_SERVER['DOCUMENT_ROOT']);
define('SYSTEM', ROOT . '/sys-auth');
define('APP', ROOT . '/sys-auth/app');

# Load classes
foreach (glob(SYSTEM . "/app/classes/*.php") as $class) {
    require $class;
}
unset($class);

# Parse configuration
$config = json_decode(file_get_contents(SYSTEM . '/app/cache/config/app.config.json'), true);
if (!$config) {
    $config = require 'config_parser.php';
}


# Start session
session_start([
    'cookie_httponly' => true,
    //'cookie_secure' => true,
    'use_trans_sid' => false,
    'gc_maxlifetime' => 7200
]);

// Add session timeout


# Parse config
die('x');


# Setup config related functions

$cfg = Arr::dot($config);
$cfg['sys.domain_selection'] = $config['sys']['domain_selection'];

function config(String $key)
{
    global $cfg;

    if (isset($cfg[$key])) {
        return $cfg[$key];
    }
    return null;
}

function error($msg = false)
{
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }
    if (!$msg) {
        $_SESSION['errorMessage'] = 'Something went wrong.';
    } else {
        $_SESSION['errorMessage'] = $msg;
    }
    die(header("Location: /error"));
}
