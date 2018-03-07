<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.03.2018
 * Time: 14:47
 */

abstract class Calculation {

    private $costs;
    private $costsSum;

    public $incomes;
    public $profit;

    const SUBSIDIES = 245000;

    public function setterCosts() {
        $this->costs['1st_year'] = 1800000;
        $this->costs['2st_year'] = 380000;
        $this->costs['3st_year'] = 380000;
        $this->costs['4st_year'] = 380000;
    }

    public function getterCostsSum() {
        return $this->costsSum;
    }

    public function getterCosts() {
        return $this->costs;
    }

    public function checkArea($area) {
        if($area == 0) {
            $this->costs['1st_year'] /= 2;
            $this->costs['2st_year'] /= 2;
            $this->costs['3st_year'] /= 2;
            $this->costs['4st_year'] /= 2;
        }
    }

    public function checkSubsidies($subsidies) {

        if($subsidies == 1) {
            $this->costs['1st_year'] -= self::SUBSIDIES;
        }
        $this->costsSum = array_sum($this->costs);
    }

    public abstract function getResult();



}