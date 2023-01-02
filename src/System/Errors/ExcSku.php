<?php 


namespace App\System\Errors;

use Exception;

class ExcSku extends Exception 
{

	function __construct()
	{
		parent::__construct('Such SKU is already taken');

	}
}