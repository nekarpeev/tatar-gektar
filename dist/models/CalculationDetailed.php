<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.03.2018
 * Time: 14:18
 */
require_once 'Calculation.php';

class CalculationDetailed extends Calculation {

    public function setIncomes($post) {
        $berry_price = $post['berry_price'];
        $berry_quantity = $post['berry_quantity'];
        $costs = self::getterCosts();

        $this->incomes['1st_year'] = intval($berry_price * $berry_quantity['1st_year']);
        $this->incomes['2st_year'] = intval($berry_price * $berry_quantity['2st_year']);
        $this->incomes['3st_year'] = intval($berry_price * $berry_quantity['3st_year']);
        $this->incomes['4st_year'] = intval($berry_price * $berry_quantity['4st_year']);

        $this->profit['1st_year'] = $this->incomes['1st_year'] - $costs['1st_year'];
        $this->profit['2st_year'] = $this->incomes['2st_year'] - $costs['2st_year'];
        $this->profit['3st_year'] = $this->incomes['3st_year'] - $costs['3st_year'];
        $this->profit['4st_year'] = $this->incomes['4st_year'] - $costs['4st_year'];
    }

    public function getResult() {
        $result['costs'] = $this->getterCosts();
        $result['incomes'] = $this->incomes;
        $result['profit'] = $this->profit;

        return $result;
    }
}