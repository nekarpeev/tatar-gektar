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
            $subsidies = $post['subsidies'];
            $area = $post['area_ga'];

            $calculationTotal = new CalculationTotal();
            $calculationTotal->setterCosts();
            $calculationTotal->checkArea($area);
            $calculationTotal->checkSubsidies($subsidies);
            $calculationTotal->setTotal($post);

            $calculationDetailed = new CalculationDetailed();
            $calculationDetailed->setterCosts();
            $calculationDetailed->checkArea($area);
            $calculationDetailed->checkSubsidies($subsidies);
            $calculationDetailed->setIncomes($post);

            $result['calculationTotal'] = $calculationTotal->getResult();
            $result['calculationDetailed'] = $calculationDetailed->getResult();

            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        }
    }

}
