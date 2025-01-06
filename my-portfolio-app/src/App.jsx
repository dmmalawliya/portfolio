import React from 'react';
import SkillCard from './components/SkillCard';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Cloud, Database, Code } from 'lucide-react';

const App = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
    <Navbar />
    <Hero />

    <main className="max-w-6xl mx-auto px-4 py-16">
      <section id="skills" className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard 
            icon={Cloud}
            title="Cloud & DevOps"
            items={["AWS/Azure Architecture", "Kubernetes Orchestration", "CI/CD Pipeline Design", "Infrastructure as Code"]}
          />
          <SkillCard 
            icon={Database}
            title="Data Engineering"
            items={["ETL Pipeline Development", "Big Data Processing", "Data Warehouse Design", "Real-time Analytics"]}
          />
          <SkillCard 
            icon={Code}
            title="Development"
            items={["Python/Go Development", "Microservices Architecture", "API Design & Integration", "Test Automation"]}
          />
        </div>
      </section>
    </main>
  </div>
);

export default App;
