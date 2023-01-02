<?php 


namespace App\Modules\Products;

use App\System\Db;

class Repository extends Db {

	function getAll():array
	{
		$sql = 'SELECT product.*, 
		GROUP_CONCAT(attribute.name) AS attributes, 
		GROUP_CONCAT(product_attribute.value) AS attributes__value 
		FROM product 
		LEFT JOIN product_attribute USING(product_sku) 
		LEFT JOIN attribute ON product_attribute.attribute_id = attribute.attribute_id 
		GROUP BY(product_sku)';

		$query = $this->db->prepare($sql);
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
			$this->db->beginTransaction();
		
			$productSql = 'INSERT INTO product (product_sku, name, price) VALUES (:sku,:name,:price)';
			
			$productQuery = $this->db->prepare($productSql);
			$productQuery->execute(
				[	'name' => $fields['name'],
					'price' => $fields['price'],
					'sku' => $fields['sku']
				]);
			
				
			$sqlProduct_Attribute = 'INSERT INTO product_attribute (product_sku, attribute_id, value) VALUES';
			$sqlProduct_Attribute .= $this->formatParams($fields['swithcerParam'],$fields['sku']);

			$productQuery = $this->db->prepare($sqlProduct_Attribute);
			$productQuery->execute();
				
			$this->db->commit();
	}
	private function formatParams(array $fields,string $sku):string {	    
		$formatParams = '';

		foreach($fields as $param) {
			
			$formatParams .= "($sku,{$param['id']},{$param['value']}),";
		}

		return substr($formatParams,0,-1);
	}
}