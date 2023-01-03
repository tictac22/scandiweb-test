<?php 


namespace App\System\Exceptions;

use Exception;

class ExcSku extends Exception 
{

	function __construct()
	{
		parent::__construct('Such SKU is already taken');

	}
}