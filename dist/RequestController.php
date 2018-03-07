<?php
/**
 * Created by PhpStorm.
 * User: User
 * Date: 06.03.2018
 * Time: 14:19
 */

class RequestController {

    public static function actionRequest() {

        if(isset($_POST['submit'])) {
            $post = $_POST;

            $calculationTotal = new CalculationTotal();
            $calculationTotal->setTotal($post);

            $calculationDetailed = new CalculationDetailed();
            $calculationDetailed->setCoasts();
            $calculationDetailed->setIncomes($post);

            $result['calculationTotal'] = $calculationTotal;
            $result['calculationDetailed'] = $calculationDetailed;

            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }
    }

}
