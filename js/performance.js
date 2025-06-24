const labels = [
      'Speed', 'Passing', 'Shooting', 'Dribbling', 'Defense',
      'Stamina', 'Vision', 'Tactical', 'Teamwork'
    ];

    const data = {
      labels: labels,
      datasets: [{
        label: 'Player Performance',
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10], // Initial percentages
        backgroundColor: 'rgba(255, 255, 255, 0.05)',     // translucent white fill
        borderColor: '#fff',                              // white line
        pointBackgroundColor: '#fff',                     // white points
        pointBorderColor: '#004d40',                      // match bg
        pointHoverBackgroundColor: '#004d40',
        pointHoverBorderColor: '#fff'
      }]
    };

    const config = {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: '#fff' // legend text
            }
          },
        },
        scales: {
          r: {
            angleLines: {
              color: 'rgba(255, 255, 255, 0.2)' // soft white
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.2)' // soft white
            },
            pointLabels: {
              color: '#fff' // labels around the edge
            },
            ticks: {
              color: '#ccc', // numbers
              backdropColor: 'transparent'
            },
            suggestedMin: 0,
            suggestedMax: 100
          }
        }
      }
    };
    
const radarChart = new Chart(document.getElementById('radarChart'), config);

    function updateValue(index) {
      const current = radarChart.data.datasets[0].data[index];
      radarChart.data.datasets[0].data[index] = Math.min(current + 10, 100); // increase max to 100
      radarChart.update();
    }