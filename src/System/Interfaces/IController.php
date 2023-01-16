<?php

namespace App\System\Interfaces;
use Laminas\Diactoros\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

// abstract class Controller {

// 	protected function sendRequest(int $status,array $body = []):ResponseInterface 
// 	{
// 		$response = new Response();
// 		$response->getBody()->write(json_encode($body));
// 		return $response->withStatus($status);
// 	}
	
// 	protected function parseBody(ServerRequestInterface $request) 
// 	{
// 		return json_decode($request->getBody(),true);
// 	}
// }

interface IController {

	function sendRequest(int $status,array $body = []):ResponseInterface;
		// $response = new Response();
		// $response->getBody()->write(json_encode($body));
		// return $response->withStatus($status);
	
	function parseBody(ServerRequestInterface $request): mixed;
			//return json_decode($request->getBody(),true);
}