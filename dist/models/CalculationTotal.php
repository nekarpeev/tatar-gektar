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
        $berry_price = $post['berry_price'];
        $berry_quantity = $post['berry_quantity'];
        $area_ga = intval($post['area_ga']);
        $subsidies = $post['subsidies'];

        $this->costs = self::checkSubsidies($subsidies, $area_ga);

        $this->incomes = intval($berry_price * $berry_quantity);
        $this->profit = $this->incomes - $this->costs;

    }
}