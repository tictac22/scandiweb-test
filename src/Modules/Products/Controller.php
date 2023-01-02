<?php 


namespace App\Modules\Products;

use App\System\Errors\ExcSku;
use Laminas\Diactoros\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class Controller {

	protected Service $service;
	function __construct()
	{
		$this->service = new Service();
	}
	function getAll(): array  {
		return $this->service->getAll();
	}

	function createProduct(ServerRequestInterface $request)  {
		try {
			$requestBody = json_decode($request->getBody(),true);
			$this->service->createProduct($requestBody);
			return (new Response())->withStatus(200);

		} catch(ExcSku $error) {
			$response = new Response();
			$response->getBody()->write(json_encode(['sku' => $error->getMessage()]));
			return $response->withStatus(400);
		}
	}

}