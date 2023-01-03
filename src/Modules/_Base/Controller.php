<?php

namespace App\Modules\_Base;
use Laminas\Diactoros\Response;
use Psr\Http\Message\ResponseInterface;

abstract class Controller {

	protected function sendRequest(int $status,array $body = []):ResponseInterface {
		$response = new Response();
		$response->getBody()->write(json_encode($body));
		return $response->withStatus($status);
	}
}