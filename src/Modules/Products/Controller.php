<?php 


namespace App\Modules\Products;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

use App\System\Exceptions\ExcBody;
use App\System\Validation as Validator;
use Throwable;

use App\Modules\_Base\Controller as BaseController;
class Controller extends BaseController {

	protected Service $service;
	function __construct()
	{
		$this->service = new Service();
	}
	function getAll(): array  {
		return $this->service->getAll();
	}

	function createProduct(ServerRequestInterface $request):ResponseInterface {
		$body = $request->getBody();	
		$requestBody = json_decode($body,true);
		try {
			Validator::validate($requestBody,Dto::getDto());
			$this->service->createProduct($requestBody);
			return $this->sendRequest(201);

		} catch(Throwable $error) {
			if($error instanceof ExcBody) {
				return $this->sendRequest(400,$error->getErrors());
			}
			return $this->sendRequest(409,['sku' => $error->getMessage()]);
		}
	}
	function deleteProducts(ServerRequestInterface $request):ResponseInterface {
		$requestBody = json_decode($request->getBody(),true);
		$this->service->deleteProducts($requestBody['ids']);
		return  $this->sendRequest(200);
	}
}