import React, { useEffect, useCallback, useRef } from 'react';

const DriftingLeaves = () => {
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const createLeafSVG = (color) => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 64 64");
    svg.setAttribute("fill", "none");
    svg.style.width = "100%";
    svg.style.height = "100%";
    
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M12 52C20 30 36 12 52 12C43.5 19.5 28.5 38.5 12 52Z");
    path.setAttribute("fill", color === 'orange' ? "#ff8c42" : "#7dd800");
    path.setAttribute("stroke", color === 'orange' ? "#e67e22" : "#5cb800");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    
    svg.appendChild(path);
    return svg;
  };

  const spawnLeaf = useCallback(() => {
    const leaf = document.createElement('div');
    leaf.style.cssText = `
      position: fixed;
      width: 32px;
      height: 32px;
      opacity: 0.7;
      pointer-events: none;
      z-index: 1000;
      top: -100px;
      left: -100px;
    `;
    
    // Random color (30% chance for orange)
    const isOrange = Math.random() < 0.3;
    const color = isOrange ? 'orange' : 'green';
    
    // Create more natural, varied animation paths
    const createRandomPath = () => {
      const startSide = Math.random() < 0.5 ? 'left' : 'right';
      const duration = 15000 + Math.random() * 8000; // 15-23 seconds (adjusted for less frequent spawning)
      
      // Fewer waypoints for smoother motion
      const waypoints = [];
      const numPoints = 4; // Fixed 4 waypoints for consistent smoothness
      
      for (let i = 0; i <= numPoints; i++) {
        const progress = i / numPoints;
        
        // Base path from one side to the other
        let baseX, baseY;
        if (startSide === 'left') {
          baseX = -50 + (progress * (window.innerWidth + 100));
        } else {
          baseX = window.innerWidth + 50 - (progress * (window.innerWidth + 100));
        }
        
        baseY = -50 + (progress * (window.innerHeight * 0.9));
        
        // Much smaller variations to prevent stopping
        const xVariation = Math.sin(progress * Math.PI * 2) * 80; // Smooth sine wave drift
        const yVariation = (Math.random() - 0.5) * 30; // Much smaller ±15px vertical drift
        
        const finalX = baseX + xVariation;
        const finalY = baseY + yVariation;
        
        // Smoother rotation - consistent speed with slight variation
        const baseRotationSpeed = Math.random() < 0.5 ? 120 : -120; // Slower rotation
        const rotation = progress * baseRotationSpeed + (Math.random() - 0.5) * 15; // Smaller rotation variation
        
        waypoints.push({
          transform: `translate(${finalX}px, ${finalY}px) rotate(${rotation}deg)`,
          offset: progress
          // Remove individual easing - let it be linear between points
        });
      }
      
      return {
        keyframes: waypoints,
        duration: duration
      };
    };
    
    const selectedAnimation = createRandomPath();

    
    // Random size variation - apply initial position with scale
    const scale = 0.8 + Math.random() * 0.4;
    
    // Set initial position immediately to prevent flash
    const initialKeyframe = selectedAnimation.keyframes[0];
    leaf.style.transform = `${initialKeyframe.transform} scale(${scale})`;
    
    leaf.appendChild(createLeafSVG(color));
    document.body.appendChild(leaf);
    
    // Apply scale to all keyframes
    const scaledKeyframes = selectedAnimation.keyframes.map(keyframe => ({
      ...keyframe,
      transform: `${keyframe.transform} scale(${scale})`
    }));
    
    // Start animation with gentle constant speed
    const animation = leaf.animate(scaledKeyframes, {
      duration: selectedAnimation.duration,
      easing: 'linear', // Constant speed instead of ease-in-out
      fill: 'forwards'
    });
    
    // Remove leaf after animation
    animation.addEventListener('finish', () => {
      if (leaf.parentNode) {
        leaf.parentNode.removeChild(leaf);
      }
    });
    
    // Fallback cleanup
    setTimeout(() => {
      if (leaf.parentNode) {
        leaf.parentNode.removeChild(leaf);
      }
    }, selectedAnimation.duration + 1000);
    
  }, []);

  const scheduleNextLeaf = useCallback(() => {
    const delay = 8000 + Math.random() * 7000; // 8-15 seconds between leaves
    timeoutRef.current = setTimeout(() => {
      spawnLeaf();
      scheduleNextLeaf();
    }, delay);
  }, [spawnLeaf]);

  useEffect(() => {
    // Start the leaf system
    scheduleNextLeaf();
    
    // Spawn first leaf after 1 second for testing
    const initialTimeout = setTimeout(spawnLeaf, 1000);
    
    return () => {
      // Cleanup timeouts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      clearTimeout(initialTimeout);
      
      // Remove any existing leaves
      const existingLeaves = document.querySelectorAll('[style*="pointer-events: none"][style*="z-index: 1000"]');
      existingLeaves.forEach(leaf => {
        if (leaf.parentNode) {
          leaf.parentNode.removeChild(leaf);
        }
      });
    };
  }, [scheduleNextLeaf, spawnLeaf]);

  return null; // This component doesn't render anything
};

export default DriftingLeaves;