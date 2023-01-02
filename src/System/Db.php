<?php


namespace App\System;

use PDO;

abstract class Db extends PDO
{
	function __construct()
	{	
		parent::__construct(DB_URL,DB_USER,DB_PASSWORD,[
			PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
		]);
	}
}