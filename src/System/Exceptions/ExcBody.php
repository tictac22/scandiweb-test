<?php 


namespace App\System\Exceptions;

use Exception;


class ExcBody extends Exception{
	protected $errors;

	public function __construct(string $msg, array $errors){
		parent::__construct($msg);
		$this->errors = $errors;
	}

	public function getErrors(){
		return $this->errors;
	}
}