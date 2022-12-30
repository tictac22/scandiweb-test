<?php 


namespace App\Modules\Products;

use Laminas\Diactoros\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class Controller {

	function test(ServerRequestInterface $request): ResponseInterface {
		$response = new Response;
		$response->getBody()->write('<h1>Hello, World!</h1>');
		return $response;
	}

}