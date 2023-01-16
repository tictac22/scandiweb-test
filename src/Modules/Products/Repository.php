<?php 


namespace App\Modules\Products;

use App\System\Db;

class Repository extends Db {

	function getAllProducts():array
	{
		$sql = 'SELECT product.*, 
		GROUP_CONCAT(attribute.name) AS attributes, 
		GROUP_CONCAT(product_attribute.value) AS attributes__value 
		FROM product 
		LEFT JOIN product_attribute USING(product_id) 
		LEFT JOIN attribute ON product_attribute.attribute_id = attribute.attribute_id 
		GROUP BY(product_id)
		ORDER BY(product_id) DESC
		';

		$query = $this->prepare($sql);
		$query->execute();
		$result = $query->fetchAll();


		foreach($result as &$product) {
			$attributes = explode(',',$product['attributes']);
			$attributes__values = explode(',',$product['attributes__value']);

			$product['attributes'] = [];

			for($i =0; $i < count($attributes); $i++) {
				$product['attributes'][$attributes[$i]] = $attributes__values[$i];
			}
		}		
		return $result;
	}

	function createProduct(array $fields) 
	{		
			$this->beginTransaction();
			$productSql = 'INSERT INTO product (product_sku, name, price) VALUES (:sku,:name,:price)';
			
			$productQuery = $this->prepare($productSql);
			$productQuery->execute(
				[	'name' => $fields['name'],
					'price' => $fields['price'],
					'sku' => $fields['sku']
				]);
			
			$id = $this->lastInsertId();

			$sqlProduct_Attribute = 'INSERT INTO product_attribute (product_id, attribute_id, value) VALUES';
			$sqlProduct_Attribute .= $this->formatParams($id,$fields['swithcerParam']);

			$attributeQuery = $this->prepare($sqlProduct_Attribute);
			$attributeQuery->execute();
			$this->commit();
	}
	private function formatParams(string $id,array $fields):string 
	{	    
		$formatParams = '';

		foreach($fields as $param) {
			
			$formatParams .= "($id,{$param['id']},{$param['value']}),";
		}

		return substr($formatParams,0,-1);
	}

	function deleteProducts(array $ids) 
	{
		$in  = str_repeat('?,', count($ids) - 1) . '?';
		$sql = "DELETE FROM product WHERE product_id in ($in)";
		$query = $this->prepare($sql);
		$query->execute($ids);
	}
}