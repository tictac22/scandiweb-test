<?php 


namespace App\Modules\Products;


class Dto {
	static function getDto():array {
		return [
				'name' => 'required|min:1',
				'sku' => 'required|min:1',
				'price' => 'required|numeric',
				'swithcerParam'  => 'required|array',
		];
	}
}