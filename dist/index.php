<?php

ini_set("display_errors",1);
error_reporting(E_ALL);



require_once 'RequestController.php';
require_once 'models/CalculationDetailed.php';
require_once 'models/CalculationTotal.php';
require_once 'models/Calculation.php';

RequestController::actionRequest();


