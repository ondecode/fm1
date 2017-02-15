Highcharts.setOptions({
     colors: ['#5C3082', '#7CB5EC', '#E4D354', '#F15C80', '#8085E9', '#90ED7D', '#FA7548', '#6AF9C4']
    });
Highcharts.chart('container', {
    chart: {
        style: {
            fontFamily: 'Avenir-Demi'
        },
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        backgroundColor: 'transparent',
        plotShadow: false
    },

    title: {
        text: 'Inventario por tipo de proyecto',
        align: 'center',
        verticalAlign: 'middle',
        y: -128,
         style: {
            color: '#171D31'
        }
    },
    credits:{
    enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            borderColor: 'null',
            allowPointSelect: false,
            dataLabels: {
                enabled: false
            },
            startAngle: -180,
            endAngle: 180,
            center: ['50%', '65%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Proyectos',
        innerSize: '75%',
        data: [
            ['Medio',   23],
            ['Residencial', 24],
            ['Lotes', 2],
            ['Playa',    2],
            ['Comercial',    2],
            ['Oficinas',    3],
            ['Interés Social', 8],
            {
                name: 'Proprietary or Undetectable',
                y: 0,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});