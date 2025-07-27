import React from 'react';

const CategoryCard = ({ icon, name, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`group flex flex-col items-center p-6 rounded-2xl transition-all duration-300 ${
      isActive
        ? 'bg-primary-500 text-white shadow-lg scale-105'
        : 'bg-white hover:bg-primary-50 text-gray-700 hover:scale-105 shadow-md hover:shadow-lg'
    }`}
  >
    <div className={`text-4xl mb-3 ${isActive ? 'text-white' : 'text-gray-800'}`}>{icon}</div>
    <span className="text-sm font-medium">{name}</span>
    <div className={`mt-2 w-10 h-1 rounded-full transition-all duration-300 ${
      isActive ? 'bg-white' : 'bg-transparent group-hover:bg-primary-300'
    }`} />
  </button>
);

const Categories = ({ activeCategory, onCategoryChange }) => {
  const categories = [
    { id: 'all', name: 'All', icon: '🍽️' },
    { id: 'pizza', name: 'Pizza', icon: '🍕' },
    { id: 'burger', name: 'Burgers', icon: '🍔' },
    { id: 'sushi', name: 'Sushi', icon: '🍱' },
    { id: 'indian', name: 'Indian', icon: '🍛' },
    { id: 'chinese', name: 'Chinese', icon: '🥡' },
    { id: 'dessert', name: 'Desserts', icon: '🍰' },
    { id: 'drinks', name: 'Drinks', icon: '🥤' },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-lg text-gray-600">Choose from your favorite food categories</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              {...category}
              isActive={activeCategory === category.id}
              onClick={() => onCategoryChange(category.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
