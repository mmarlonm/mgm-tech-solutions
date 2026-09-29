import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HomeHero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background WebGL Grid Shader
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) return;

    const vsSource = `
      attribute vec4 aVertexPosition;
      varying vec2 v_texCoord;
      void main() {
        gl_Position = aVertexPosition;
        v_texCoord = aVertexPosition.xy * 0.5 + 0.5;
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;

      float hash(vec2 p) {
        p = fract(p * vec2(123.34, 456.21));
        p += dot(p, p + 45.32);
        return fract(p.x * p.y);
      }

      void main() {
        vec2 uv = v_texCoord;
        vec2 g = uv * 18.0;
        vec2 id = floor(g);
        vec2 f = fract(g);
        
        float m = 0.0;
        for(float y=-1.0; y<=1.0; y++) {
          for(float x=-1.0; x<=1.0; x++) {
            vec2 offs = vec2(x, y);
            float n = hash(id + offs);
            float p = sin(u_time * 0.8 + n * 6.28) * 0.5 + 0.5;
            float d = length(offs + 0.5 - f + vec2(sin(u_time*0.5+n), cos(u_time*0.5+n))*0.3);
            m += smoothstep(0.08, 0.0, d) * p;
          }
        }
        
        vec3 color = mix(vec3(0.039, 0.058, 0.11), vec3(0.42, 0.99, 0.61), m * 0.22);
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const initShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    };

    const vertexShader = initShader(gl.VERTEX_SHADER, vsSource);
    const fragmentShader = initShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) return;

    const shaderProgram = gl.createProgram();
    if (!shaderProgram) return;
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [-1.0, 1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    gl.enableVertexAttribArray(vertexPosition);
    gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(shaderProgram, 'u_time');
    const resolutionLocation = gl.getUniformLocation(shaderProgram, 'u_resolution');

    let animationId: number;
    const renderShader = (time: number) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width;
        canvas.height = rect.height;
        gl.viewport(0, 0, canvas.width, canvas.height);
      }

      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(renderShader);
    };

    animationId = requestAnimationFrame(renderShader);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Three.js Interactive Wireframe Sphere + Synaptic Particles
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Group for all rotating elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Main wireframe icosahedron
    const geo = new THREE.IcosahedronGeometry(2.4, 2);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x6dfe9c,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const sphere = new THREE.Mesh(geo, mat);
    globeGroup.add(sphere);

    // Inner glowing sphere
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x70afff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const innerSphere = new THREE.Mesh(innerGeo, innerMat);
    globeGroup.add(innerSphere);

    // Particle nodes on vertex points
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const colorGreen = new THREE.Color(0x6dfe9c);
    const colorBlue = new THREE.Color(0xa4c9ff);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + (Math.random() - 0.5) * 0.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particlePos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.4 ? colorGreen : colorBlue;
      particleColors[i * 3] = mixedColor.r;
      particleColors[i * 3 + 1] = mixedColor.g;
      particleColors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);

    // Outer orbital ring
    const ringGeo = new THREE.TorusGeometry(3.2, 0.015, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x6dfe9c,
      transparent: true,
      opacity: 0.25,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 3;
    globeGroup.add(ring);

    camera.position.z = 5.2;

    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetX = (event.clientX - windowHalfX) * 0.0008;
      targetY = (event.clientY - windowHalfY) * 0.0008;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      globeGroup.rotation.y += 0.003 + (targetX * 0.05);
      globeGroup.rotation.x += 0.001 + (targetY * 0.05);
      sphere.rotation.z += 0.001;
      innerSphere.rotation.y -= 0.002;
      ring.rotation.z += 0.004;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background WebGL Shader Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />

      {/* Dark gradient vignettes */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1929] via-[#0b1929]/70 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1929] via-transparent to-[#0b1929]/80 pointer-events-none" />

      {/* Interactive 3D Three.js Container */}
      <div
        ref={containerRef}
        className="absolute inset-y-0 right-0 w-full lg:w-3/5 h-full opacity-80 pointer-events-auto cursor-grab active:cursor-grabbing"
      />
    </div>
  );
};
