<?php 

namespace App\Modules\Products;

use App\System\Errors\ExcSku;
use Error;

class Service {

	protected Repository $repository;
	function __construct()
	{
		$this->repository = new Repository();
	}
	function getAll():array {
		return $this->repository->getAll();
	}

	function createProduct($fields) {

		try {
			$this->repository->createProduct($fields);
		} catch (\Throwable $th) {
			if($th->getCode() == 23000) {
				throw new ExcSku();				
			}
			throw new Error('error on server Side');
		}
	}
	function deleteProducts(array $ids) {
		return $this->repository->deleteProducts($ids);
	}
}