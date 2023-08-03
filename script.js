let sensor = new Gyroscope({ frequency: 0 });
let x, y, z;

const reportBox = document.querySelector('.report-box');
const ball = document.querySelector('.ball');
sensor.start();
sensor.addEventListener("reading", (e) => {
  let report = ''; // Initialize the report variable inside the event listener

  report += 'X-axis Angle Velocity: ' + sensor.x + '<br>';
  report += 'Y-axis Angle Velocity: ' + sensor.y + '<br>';
  report += 'Z-axis Angle Velocity: ' + sensor.z + '<br>';
  report += 'Ball current X: ' + ball.offsetLeft + '<br>';
  report += 'Ball current Y: ' + ball.offsetTop + '<br>';
  report += 'Ball rotation: ' + z + 'deg<br>';
  reportBox.innerHTML = report;

  x = sensor.x * 100;
  y = sensor.y * 100;
  z = sensor.z * -33;

  ball.style.left = (ball.offsetLeft + x + 'px');
  ball.style.top = (ball.offsetTop - y + 'px');
  ball.style.transform = ('rotate(' + z + 'deg)'); // Added parentheses for correct syntax
});
sensor.addEventListener('error', (e) => {
  document.querySelector('body').innerText = `
    ${e.error.name}, ${e.error.message} // Corrected the syntax here as well
  `
})
