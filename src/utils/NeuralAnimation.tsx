import React, { useEffect, useRef, useState } from 'react';

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
  pulsePhase: number;
  pulseSpeed: number;
}

interface NeuralAnimationProps {
  width?: number;
  height?: number;
  neuronCount?: number;
  color?: string;
  backgroundColor?: string;
  maxConnections?: number;
  interactive?: boolean;
  mouseRadius?: number;
  pulseEnabled?: boolean;
}

const NeuralAnimation: React.FC<NeuralAnimationProps> = ({
  width = 400,
  height = 400,
  neuronCount = 40,
  color = '#4FD1C5',
  backgroundColor = 'transparent',
  maxConnections = 3,
  interactive = true,
  mouseRadius = 150,
  pulseEnabled = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const neurons = useRef<Neuron[]>([]);
  const animationFrameId = useRef<number>();
  const [mousePos, setMousePos] = useState<{x: number, y: number} | null>(null);
  
  // Handle mouse movement for interactive effects
  const handleMouseMove = (event: MouseEvent) => {
    if (!canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    });
  };
  
  // Handle mouse leave
  const handleMouseLeave = () => {
    setMousePos(null);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Add mouse event listeners
    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    // Initialize neurons with velocity, radius, and pulse properties
    neurons.current = Array.from({ length: neuronCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5, // Random velocity x
      vy: (Math.random() - 0.5) * 0.5, // Random velocity y
      radius: Math.random() * 2 + 1.5, // Variable size for depth effect
      connections: [],
      pulsePhase: Math.random() * Math.PI * 2, // Random starting phase
      pulseSpeed: 0.03 + Math.random() * 0.02, // Random pulse speed
    }));

    // Create dynamically changing connections
    const updateConnections = () => {
      neurons.current.forEach((neuron, i) => {
        // Clear connections periodically to create dynamic network effect
        if (Math.random() < 0.005) {
          neuron.connections = [];
          const connectionCount = Math.floor(Math.random() * maxConnections) + 1;
          
          // Find nearest neurons to connect to for more natural appearance
          const distances = neurons.current
            .map((n, idx) => ({
              idx,
              dist: Math.sqrt((neuron.x - n.x) ** 2 + (neuron.y - n.y) ** 2)
            }))
            .filter(n => n.idx !== i)
            .sort((a, b) => a.dist - b.dist)
            .slice(0, connectionCount);
          
          neuron.connections = distances.map(d => d.idx);
        }
      });
    };
    
    // Initialize connections
    neurons.current.forEach((neuron, i) => {
      const connectionCount = Math.floor(Math.random() * maxConnections) + 1;
      for (let j = 0; j < connectionCount; j++) {
        let targetIdx;
        do {
          targetIdx = Math.floor(Math.random() * neuronCount);
        } while (targetIdx === i || neuron.connections.includes(targetIdx));
        neuron.connections.push(targetIdx);
      }
    });

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      if (backgroundColor !== 'transparent') {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, width, height);
      }
      
      // Update connections occasionally
      updateConnections();

      // Update and draw connections with pulse effect
      neurons.current.forEach((neuron, i) => {
        neuron.connections.forEach(targetIdx => {
          const target = neurons.current[targetIdx];
          
          // Calculate distance between neurons
          const dx = target.x - neuron.x;
          const dy = target.y - neuron.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Only draw connections within reasonable distance
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(target.x, target.y);
            
            // Create pulse effect along the connections
            let opacity = 0.2;
            let lineWidth = 0.5;
            
            if (pulseEnabled) {
              // Calculate pulse phase for this connection
              const pulse = Math.sin(neuron.pulsePhase + target.pulsePhase);
              opacity = 0.05 + Math.abs(pulse) * 0.25;
              lineWidth = 0.5 + Math.abs(pulse) * 1;
            }
            
            // Adjust for mouse proximity
            if (mousePos) {
              // Calculate midpoint of the connection
              const midX = (neuron.x + target.x) / 2;
              const midY = (neuron.y + target.y) / 2;
              
              // Calculate distance from mouse to midpoint
              const mouseDx = midX - mousePos.x;
              const mouseDy = midY - mousePos.y;
              const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);
              
              // Enhance connections near mouse
              if (mouseDistance < mouseRadius) {
                const intensity = 1 - (mouseDistance / mouseRadius);
                opacity = Math.min(1, opacity + intensity * 0.5);
                lineWidth = lineWidth + intensity * 1.5;
              }
            }
            
            ctx.strokeStyle = color;
            ctx.globalAlpha = opacity;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
          }
        });
      });

      // Draw neurons and update their positions
      neurons.current.forEach((neuron, i) => {
        // Update pulse phase
        neuron.pulsePhase += neuron.pulseSpeed;
        
        // Calculate neuron brightness based on pulse
        let alpha = 0.6;
        let nodeRadius = neuron.radius;
        
        if (pulseEnabled) {
          const pulse = Math.sin(neuron.pulsePhase);
          alpha = 0.3 + Math.abs(pulse) * 0.5;
          nodeRadius = neuron.radius * (0.8 + Math.abs(pulse) * 0.4);
        }
        
        // Adjust for mouse proximity
        if (mousePos) {
          const dx = neuron.x - mousePos.x;
          const dy = neuron.y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRadius) {
            // Enhance neurons near mouse
            const intensity = 1 - (distance / mouseRadius);
            alpha = Math.min(1, alpha + intensity * 0.5);
            nodeRadius = nodeRadius + intensity * 3;
            
            // Add subtle repulsion from mouse
            const repulsionForce = 0.2 * intensity;
            const angle = Math.atan2(dy, dx);
            neuron.vx += Math.cos(angle) * repulsionForce;
            neuron.vy += Math.sin(angle) * repulsionForce;
          }
        }
        
        // Draw neuron with glow effect
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, nodeRadius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = alpha;
        ctx.fill();
        
        // Add subtle glow
        const gradient = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, nodeRadius * 3
        );
        gradient.addColorStop(0, `${color}40`); // Semi-transparent
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, nodeRadius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.15;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        
        // Apply velocity with slight inertia and natural damping
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;
        
        // Add slight random movement for organic feel
        neuron.vx += (Math.random() - 0.5) * 0.05;
        neuron.vy += (Math.random() - 0.5) * 0.05;
        
        // Apply damping for stability
        neuron.vx *= 0.98;
        neuron.vy *= 0.98;
        
        // Keep within bounds with soft boundary
        if (neuron.x < 0 || neuron.x > width) {
          neuron.vx *= -1;
          neuron.x = Math.max(0, Math.min(width, neuron.x));
        }
        if (neuron.y < 0 || neuron.y > height) {
          neuron.vy *= -1;
          neuron.y = Math.max(0, Math.min(height, neuron.y));
        }
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      
      // Clean up event listeners
      if (interactive && canvas) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, [width, height, neuronCount, color, backgroundColor, maxConnections, interactive, mouseRadius, pulseEnabled]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default NeuralAnimation;