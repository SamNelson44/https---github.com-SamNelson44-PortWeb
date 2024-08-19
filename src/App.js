import React, { useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import DarkLightButton from './components/DarkLightButton';
import { DarkLightProvider } from './Contexts/DarkLightContext';

function App() {
  useEffect(() => {
    const canvas = document.getElementById('backgroundCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    // Particle constructor
    function Particle(x, y, dx, dy, radius) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;

      this.draw = function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      };

      this.update = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      };
    }

    function init() {
      particles = [];
      for (let i = 0; i < 100; i++) {
        let radius = Math.random() * 5 + 1;
        let x = Math.random() * (canvas.width - radius * 2) + radius;
        let y = Math.random() * (canvas.height - radius * 2) + radius;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, dx, dy, radius));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => particle.update());
    }

    init();
    animate();

    // Adjust canvas size when the window resizes
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
  }, []); // Empty dependency array to run this effect only once

  return (
    <DarkLightProvider>
      <div className="App">
        <div className='outerContainer'>
          <canvas id="backgroundCanvas"></canvas>
          <h1 className="title">Sam Nelson</h1>
          <h4 className='subTitle'>Developer & Student</h4>
          <Tabs />
          <DarkLightButton />
        </div>
      </div>
    </DarkLightProvider>
  );
}

export default App;
