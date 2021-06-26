<?php

/**
 * Project LOGGED v1.9 Main Application File
 * @author PlanetCloud (https://www.byet.net/index.php?/profile/528767-planetcloud/)
 * ---
 * PLEASE Read the documentation for more information.
 */

# Definitions
define('SYSTEM', $_SERVER['DOCUMENT_ROOT'] . '/sys-auth');
define('APP', SYSTEM . '/app');

# Prevent direct access
if (strpos($_SERVER['REQUEST_URI'], 'sys-auth') !== false) {
    die(header('HTTP/1.1 403 Forbidden'));
}

# Start session
session_start();

# Load classes
foreach (glob(APP . "/classes/*.php") as $class) {
    require $class;
}

# Parse config
die('x');


# Setup config related functions
require 'config.php';
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
