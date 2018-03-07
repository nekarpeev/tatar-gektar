document.addEventListener('DOMContentLoaded', function () {

    var costs = 2940000,
        incomes = 5600000,
        profit = incomes - costs,
        year = 4,

        berry_quantity_min = 5000,
        berry_quantity_max = 10000,
        berry_quantity_from_1year = 10000,
        berry_quantity_from_2year = 8000,
        berry_quantity_from_3year = 7000,
        berry_quantity_from_4year = 5000;

    var formSelector = '#calc_form';

    $("#berry_price").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 180,
        max: 300,
        from: 200,
        step: 20,
        prefix: "Руб.",
        grid: true,
        onFinish: function () {
            mainRequest();
        }
    });

    $("#berry_quantity1").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: berry_quantity_min,
        max: berry_quantity_max,
        from: berry_quantity_from_1year,
        step: 500,
        prefix: "Кг.",
        grid: true,
        onFinish: function () {
            mainRequest();
        }
    });

    $("#berry_quantity2").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: berry_quantity_min,
        max: berry_quantity_max,
        from: berry_quantity_from_2year,
        step: 500,
        prefix: "Кг.",
        grid: true,
        onFinish: function () {
            mainRequest();
        }
    });
    $("#berry_quantity3").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: berry_quantity_min,
        max: berry_quantity_max,
        from: berry_quantity_from_3year,
        step: 500,
        prefix: "Кг.",
        grid: true,
        onFinish: function () {
            mainRequest();
        }
    });
    $("#berry_quantity4").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: berry_quantity_min,
        max: berry_quantity_max,
        from: berry_quantity_from_4year,
        step: 500,
        prefix: "Кг.",
        grid: true,
        onFinish: function () {
            mainRequest();
        }
    });

    var slider_berry_quantity1 = $("#berry_quantity1").data("ionRangeSlider");
    var slider_berry_quantity2 = $("#berry_quantity2").data("ionRangeSlider");
    var slider_berry_quantity3 = $("#berry_quantity3").data("ionRangeSlider");
    var slider_berry_quantity4 = $("#berry_quantity4").data("ionRangeSlider");

    function sliderUpdate0() {
        slider_berry_quantity1.update({
            min: berry_quantity_min / 2,
            max: berry_quantity_max / 2,
            from: berry_quantity_from_1year / 2
        });
        slider_berry_quantity2.update({
            min: berry_quantity_min / 2,
            max: berry_quantity_max / 2,
            from: berry_quantity_from_2year / 2
        });
        slider_berry_quantity3.update({
            min: berry_quantity_min / 2,
            max: berry_quantity_max / 2,
            from: berry_quantity_from_3year / 2
        });
        slider_berry_quantity4.update({
            min: berry_quantity_min / 2,
            max: berry_quantity_max / 2,
            from: berry_quantity_from_4year / 2
        });
    }

    function sliderUpdate1() {
        slider_berry_quantity1.update({
            min: berry_quantity_min,
            max: berry_quantity_max,
            from: berry_quantity_from_1year
        });
        slider_berry_quantity2.update({
            min: berry_quantity_min,
            max: berry_quantity_max,
            from: berry_quantity_from_2year
        });
        slider_berry_quantity3.update({
            min: berry_quantity_min,
            max: berry_quantity_max,
            from: berry_quantity_from_3year
        });
        slider_berry_quantity4.update({
            min: berry_quantity_min,
            max: berry_quantity_max,
            from: berry_quantity_from_4year
        });
    }

    function mainRequest() {

        $.ajax({
            type: "POST",
            url: "dist/index.php",
            data: $(formSelector).serialize(),
            dataType: 'json',
            success: function (response) {
                console.log('calc success');
                console.log(response);
                updateChart(response);
                updateChart_1(response);
                renderMainIndicators(response);
            },
            error: function (error) {
                console.log('calc error');
                console.log(error);
            }
        });
    };

    function updateChart(response) {

        console.log(response['calculationTotal']);

        chart.options.data[0].dataPoints[0].y = response['calculationTotal']['costsSum'];
        chart.options.data[0].dataPoints[1].y = response['calculationTotal']['incomes'];
        chart.options.data[0].dataPoints[2].y = response['calculationTotal']['profit'];

        chart.render();
    }

    function updateChart_1(response) {

        console.log(response['calculationDetailed']);

        chart_1.options.data[0].dataPoints[0].y = response['calculationDetailed']['costs']['1st_year'];
        chart_1.options.data[0].dataPoints[1].y = response['calculationDetailed']['incomes']['1st_year'];
        chart_1.options.data[0].dataPoints[2].y = response['calculationDetailed']['profit']['1st_year'];

        chart_1.options.data[0].dataPoints[4].y = response['calculationDetailed']['costs']['2st_year'];
        chart_1.options.data[0].dataPoints[5].y = response['calculationDetailed']['incomes']['2st_year'];
        chart_1.options.data[0].dataPoints[6].y = response['calculationDetailed']['profit']['2st_year'];

        chart_1.options.data[0].dataPoints[8].y = response['calculationDetailed']['costs']['3st_year'];
        chart_1.options.data[0].dataPoints[9].y = response['calculationDetailed']['incomes']['3st_year'];
        chart_1.options.data[0].dataPoints[10].y = response['calculationDetailed']['profit']['3st_year'];

        chart_1.options.data[0].dataPoints[12].y = response['calculationDetailed']['costs']['4st_year'];
        chart_1.options.data[0].dataPoints[13].y = response['calculationDetailed']['incomes']['4st_year'];
        chart_1.options.data[0].dataPoints[14].y = response['calculationDetailed']['profit']['4st_year'];

        chart_1.render();
    }

    $('.area_ga').on('change', function () {

        var $val = $(this).val();
        if ($val == 0) {
            sliderUpdate0();
        }
        else {
            sliderUpdate1();
        }
        mainRequest();
    });

    $('.subsidies').on('change', function () {
        mainRequest();
    });


    /**
     * Canvas block
     */

    CanvasJS.addColorSet("greenShades", ['#C0504E', '#F6A84B', "#51CDA0"]);
    CanvasJS.addColorSet("greenShades_1", ['#C0504E', '#F6A84B', "#51CDA0", ' ', '#C0504E', '#F6A84B', "#51CDA0", ' ', '#C0504E', '#F6A84B', "#51CDA0", ' ', '#C0504E', '#F6A84B', "#51CDA0"]);

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light2", "dark1", "dark2"
        animationEnabled: false, // change to true
        colorSet: "greenShades",
        title: {
            text: "Экономический эффект за 4 года"
        },
        data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "column",
                dataPoints: [
                    {label: "Расходы, руб.", x: 1, y: costs},
                    {label: "Доходы, руб.", x: 2, y: incomes},
                    {label: "Чистая прибыль, руб.", x: 3, y: profit}
                ]
            }
        ]
    });
    chart.render();

    var chart_1 = new CanvasJS.Chart("chart_1_Container", {
        theme: "light2", // "light2", "dark1", "dark2"
        animationEnabled: false, // change to true
        colorSet: "greenShades_1",
        title: {
            text: "Разделение по годам"
        },
        data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "column",
                dataPoints: [
                    {label: "Расходы 1 год, руб.", x: 1, y: costs},
                    {label: "Доходы 1 год, руб.", x: 2, y: incomes},
                    {label: "ЧП 1 год, руб.", x: 3, y: profit},

                    {label: " ", x: 4, y: 0},

                    {label: "Расходы 2 год, руб.", x: 5, y: costs},
                    {label: "Доходы 2 год, руб.", x: 6, y: incomes},
                    {label: "ЧП 2 год, руб.", x: 7, y: profit},

                    {label: " ", x: 8, y: 0},

                    {label: "Расходы 3 год, руб.", x: 9, y: costs},
                    {label: "Доходы 3 год, руб.", x: 10, y: incomes},
                    {label: "ЧП 3 год, руб.", x: 11, y: profit},

                    {label: " ", x: 12, y: 0},

                    {label: "Расходы 4 год, руб.", x: 13, y: costs},
                    {label: "Доходы 4 год, руб.", x: 14, y: incomes},
                    {label: "ЧП 4 год, руб.", x: 15, y: profit}
                ]
            }
        ]
    });
    chart_1.render();


    /**
     * render main indicators
     */
    function renderMainIndicators(response) {
        var profitability = response['calculationTotal']['profit']/response['calculationTotal']['incomes'] * 100,
            mid_profit = response['calculationTotal']['profit']/year,

            paybackPeriod = response['calculationTotal']['costsSum']/mid_profit;

        $('#resume_title_costs').html(response['calculationTotal']['costsSum']);
        $('#resume_title_incomes').html(response['calculationTotal']['incomes']);
        $('#resume_title_profit').html(response['calculationTotal']['profit']);
        $('#resume_title_profitability').html(profitability.toFixed());
        $('#resume_title_payback_period').html(paybackPeriod.toFixed(1));


    }


    /**
     *
     * salary block
     */

    var net_profit_one_berry = 120;


    $("#salary_slider").ionRangeSlider({
        hide_min_max: true,
        keyboard: true,
        min: 30000,
        max: 100000,
        from: 50000,
        step: 5000,
        prefix: "Руб.",
        grid: true,
        onFinish: function () {
            salaryCalc();
        }
    });

    function salaryCalc() {
        var $val = $('#salary_slider').val();

        $('#salary_title').html($val.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));

        var quantity = $val / net_profit_one_berry;
        quantity = quantity.toFixed();

        $('#quantity_title').html(quantity);
        console.log($val);
    }

    mainRequest();
});