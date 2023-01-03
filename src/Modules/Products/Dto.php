<?php 


namespace App\Modules\Products;


class Dto {
	static function getCreateDto():array {
		return [
				'name' => 'required|min:1',
				'sku' => 'required|min:1',
				'price' => 'required|numeric',
				'swithcerParam'  => 'required|array',
		];
	}
	static function getDeleteDto():array {
		return [
				'ids'  => 'required|array',
		];
	}
}