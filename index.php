<?php 
declare(strict_types=1);

include 'vendor/autoload.php';

$uri = '/scanditest';
$_SERVER['REQUEST_URI'] = substr($_SERVER['REQUEST_URI'], (strlen($uri)));

$productController = 'App\Modules\Products\Controller';

$request = Laminas\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER, $_GET, $_POST, $_COOKIE, $_FILES
);




$router = new League\Route\Router;

$router->map('GET', '/', $productController . '::test');


$response = $router->dispatch($request);

// send the response to the browser
(new Laminas\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);