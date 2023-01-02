<?php 
declare(strict_types=1);

include 'vendor/autoload.php';
include 'init.php';

header('Access-Control-Allow-Origin: *');

$uri = '/scanditest';
$_SERVER['REQUEST_URI'] = substr($_SERVER['REQUEST_URI'], (strlen(BASE_URI)));

$productController = 'App\Modules\Products\Controller::';

$request = Laminas\Diactoros\ServerRequestFactory::fromGlobals(
    $_SERVER, $_GET, $_POST, $_COOKIE, $_FILES
);






$responseFactory = new Laminas\Diactoros\ResponseFactory();

$strategy = new League\Route\Strategy\JsonStrategy($responseFactory);
$router   = (new League\Route\Router)->setStrategy($strategy);

$router->map('GET', '/getAll', $productController . 'getAll');
$router->map('POST', '/createProduct', $productController . 'createProduct');


$response = $router->dispatch($request);

// send the response to the browser
(new Laminas\HttpHandlerRunner\Emitter\SapiEmitter)->emit($response);