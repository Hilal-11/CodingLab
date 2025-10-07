'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import './graphStyle.css'
export default function TrackProgress() {
  const constraintsRef = useRef(null);
  const nodeLabels = [
    'Arrays', 'Recursion', 'Strings', 'Queues', 'Stacks', 'Linked Lists', 'Trees', 'Graphs',
    'Hash Tables', 'Sorting', 'Searching', 'Dynamic Programming', 'Greedy Algorithms',
    'Backtracking', 'Bit Manipulation', 'Heaps', 'Tries', 'Divide and Conquer', 'Math',
    'Sliding Window', 'Two Pointers', 'Binary Search', 'Topological Sort', 'Union Find',
    'Breadth-First Search', 'Depth-First Search', 'Shortest Path', 'Minimum Spanning Tree',
    'Segment Tree', 'Fenwick Tree', 'Priority Queue', 'AVL Tree', 'Red-Black Tree',
    'Suffix Array', 'KMP Algorithm', 'Rabin-Karp', 'Aho-Corasick', 'Disjoint Set',
    'Bellman-Ford', 'Dijkstra\'s Algorithm', 'Floyd-Warshall', 'Euler Tour',
    'Hamiltonian Path', 'Articulation Point', 'Bridge Finding', 'Network Flow',
    'Ford-Fulkerson', 'Edmonds-Karp', 'Game Theory', 'Number Theory'
  ];
  const n = nodeLabels.length

  return (
    <div style={{
            backgroundImage: 'radial-gradient(circle at 0.5px 0.5px , rgba(90,110,114,0.7) 1px , transparent 0.5px)',
            backgroundSize: "10px 10px",
            backgroundRepeat : "repeat"
          }}  className="draggable-container">
      <div className='draggable-window' ref={constraintsRef}>
        {
            
          nodeLabels.map((node, index) =>{
            const angle = (360 / n) * index;
          
             return (
              <motion.div
              key={index}
              drag
              style={{
              transform: `rotate(${angle}deg) translate(100%) rotate(-${angle}deg)`,
            }}
              dragConstraints={constraintsRef}
              className="dragable-node absolute "
              whileDrag={{ scale: 1.05 }}
              whileHover={{ cursor: 'grab' }}
              >
            </motion.div>
            )})
        }
      </div>
    </div>
  );
}