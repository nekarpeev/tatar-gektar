<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.03.2018
 * Time: 14:47
 */

class Calculation {

    public $costs;
    public $incomes;
    public $profit;

    const SUBSIDIES = 245000;
    Const YEARS = 4;

    public static function checkSubsidies($subsidies, $costs) {

        if($subsidies == 1) {
            $costs -= self::SUBSIDIES;
        }

        return $costs;

    }
}