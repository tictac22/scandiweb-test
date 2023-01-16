<?php 


namespace App\Modules\Products;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

use App\System\Exceptions\ExcBody;
use App\System\Validation as Validator;
use Throwable;

use App\System\Interfaces\IController;
use Laminas\Diactoros\Response;

class Controller extends Service implements IController {

	function get(): array
	{
		return $this->getAllProducts();
	}

	function create(ServerRequestInterface $request):ResponseInterface 
	{
		$body = $this->parseBody($request);
		try {
			Validator::validate($body,Dto::getCreateDto());
			$this->createProduct($body);
			return $this->sendRequest(201);

		} catch(Throwable $error) {
			if($error instanceof ExcBody) {
				return $this->sendRequest(400,$error->getErrors());
			}
			return $this->sendRequest(409,['sku' => $error->getMessage()]);
		}
	}

	function delete(ServerRequestInterface $request):ResponseInterface 
	{
		$body = $this->parseBody($request);
		try {
			Validator::validate($body,Dto::getDeleteDto());
		} catch (ExcBody $error) {
			return $this->sendRequest(400,$error->getErrors());
		}

		$this->deleteProducts($body['ids']);
		return  $this->sendRequest(200);
	}

	function sendRequest(int $status,array $body = []):ResponseInterface 
	{
		$response = new Response();
		$response->getBody()->write(json_encode($body));
		return $response->withStatus($status);
	}
	
	function parseBody(ServerRequestInterface $request):mixed 
	{
		return json_decode($request->getBody(),true);
	}
}