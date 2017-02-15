Highcharts.chart('container', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        backgroundColor: 'transparent',
        plotShadow: false
    },

    title: {
        text: 'Inventario por tipo de proyecto',
        align: 'center',
        fontFamily: 'Avenir-Bold',
        verticalAlign: 'middle',
        y: -128
    },
    credits:{
    enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -30,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -180,
            endAngle: 180,
            center: ['50%', '65%']
        }
    },
    series: [{
        type: 'pie',
        name: 'Proyectos',
        innerSize: '50%',
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