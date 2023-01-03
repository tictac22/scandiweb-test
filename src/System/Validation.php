<?php 

namespace App\System;

use App\System\Exceptions\ExcBody;

use Rakit\Validation\Validator;

class Validation {

	static function validate(mixed $body,array $rules) {
		$validator = new Validator;
		$validation = $validator->make($body, $rules);
		$validation->validate();
		if ($validation->fails()) {
			$errors = $validation->errors();
			throw new ExcBody('invalid body',$errors->firstOfAll());
		}
	}
}