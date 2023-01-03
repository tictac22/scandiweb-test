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
		$body = $this->parseBody($request);
		try {
			Validator::validate($body,Dto::getCreateDto());
			$this->service->createProduct($body);
			return $this->sendRequest(201);

		} catch(Throwable $error) {
			if($error instanceof ExcBody) {
				return $this->sendRequest(400,$error->getErrors());
			}
			return $this->sendRequest(409,['sku' => $error->getMessage()]);
		}
	}
	function deleteProducts(ServerRequestInterface $request):ResponseInterface {
		$body = $this->parseBody($request);
		try {
			Validator::validate($body,Dto::getDeleteDto());
		} catch (ExcBody $error) {
			return $this->sendRequest(400,$error->getErrors());
		}

		$this->service->deleteProducts($body['ids']);
		return  $this->sendRequest(200);
	}
}