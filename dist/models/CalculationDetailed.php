<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.03.2018
 * Time: 14:18
 */
require_once 'Calculation.php';

class CalculationDetailed extends Calculation {

    public function setCoasts() {
        $this->costs['1st_year'] = 1800000;
        $this->costs['2st_year'] = 380000;
        $this->costs['3st_year'] = 380000;
        $this->costs['4st_year'] = 380000;
    }

    public function setIncomes($post) {
        $berry_price = $post['berry_price'];
        $berry_quantity = $post['berry_quantity'];
        $subsidies = $post['subsidies'];

        $this->costs['1st_year'] = self::checkSubsidies($subsidies, $this->costs['1st_year']);

        $berry_quantity_for_year = $berry_quantity / self::YEARS;

        $this->incomes = intval($berry_price * $berry_quantity_for_year);

        $this->profit['1st_year'] = $this->incomes - $this->costs['1st_year'];
        $this->profit['2st_year'] = $this->incomes - $this->costs['2st_year'];
        $this->profit['3st_year'] = $this->incomes - $this->costs['3st_year'];
        $this->profit['4st_year'] = $this->incomes - $this->costs['4st_year'];
    }

}