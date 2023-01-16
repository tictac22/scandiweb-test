<?php 

namespace App\Modules\Products;

use App\System\Exceptions\ExcSku;
use Error;

abstract class Service extends Repository {

	function getAllProducts():array 
	{
		return parent::getAllProducts();
	}

	function createProduct($fields) 
	{
		try {
			parent::createProduct($fields);
		} catch (\Throwable $th) {
			if($th->getCode() == 23000) {
				throw new ExcSku();				
			}
			throw new Error('error on server Side');
		}
	}

	function deleteProducts(array $ids) 
	{
		return parent::deleteProducts($ids);
	}
}