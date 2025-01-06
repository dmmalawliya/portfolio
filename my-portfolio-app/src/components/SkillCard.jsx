import React from 'react';
import { ChevronRight } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-blue-600 mr-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCard;
