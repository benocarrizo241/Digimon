window.onload = function() {

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Desktop Browser Market Share in 2016"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: 51, label: "Tomate" },
                { y: 26, label: "Lechuga" },
                { y: 10, label: "Pimenton" },
                { y: 13, label: "Pepino" },
                
            ]
        }]
    });
    chart.render();
    
    }