<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.03.2018
 * Time: 14:05
 */

require_once 'Calculation.php';

class CalculationTotal extends Calculation {

    public function setTotal($post) {

        $totalQuantity = self::getSumQuantity($post);

        $berry_price = $post['berry_price'];
        $berry_quantity = $totalQuantity;
        $costsSum = self::getterCostsSum();

        $this->incomes = intval($berry_price * $berry_quantity);
        $this->profit = $this->incomes - $costsSum;

    }

    public function getSumQuantity($post) {
        return array_sum($post['berry_quantity']);
    }

    public function getResult() {
        $result['costsSum'] = $this->getterCostsSum();
        $result['incomes'] = $this->incomes;
        $result['profit'] = $this->profit;

        return $result;
    }
}

