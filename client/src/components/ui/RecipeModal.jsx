import React from 'react';

const RecipeModal = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        <div className="relative">
          <img
            src={item.image_url || 'https://via.placeholder.com/600x400?text=Food+Image'}
            alt={item.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute top-4 left-4">
            {item.isVeg ? (
              <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full flex items-center text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Vegetarian
              </span>
            ) : (
              <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full flex items-center text-sm font-medium">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Non-Vegetarian
              </span>
            )}
          </div>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
            <span className="text-2xl font-bold text-orange-500">
              ${parseFloat(item.price).toFixed(2)}
            </span>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 mb-6">{item.description}</p>

            <h3 className="text-lg font-semibold mb-2">Recipe Details</h3>
            <div className="mb-6">
              <h4 className="font-medium mb-2">Ingredients:</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                {item.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {item.recipe && (
              <div className="mb-6">
                <h4 className="font-medium mb-2">Preparation Method:</h4>
                <ol className="list-decimal pl-5 text-gray-600 space-y-2">
                  {item.recipe.steps?.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {item.nutritional_info && (
              <div className="mb-6">
                <h4 className="font-medium mb-2">Nutritional Information:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  {Object.entries(item.nutritional_info).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 p-2 rounded">
                      <span className="font-medium text-gray-700">{key}: </span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t">
          <button
            onClick={() => {
              onAddToCart(item);
              onClose();
            }}
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart • ${parseFloat(item.price).toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
