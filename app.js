// ============================================
// RECIPE APP - PART 3 with IIFE Module Pattern
// ============================================

const RecipeApp = (() => {
    'use strict';
    
    // ============================================
    // PRIVATE: RECIPE DATA
    // ============================================
    const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara🍝",
        time: 25,
        difficulty: "easy",
        description: "A creamy Italian pasta dish made with eggs, cheese, pancetta, and black pepper.",
        category: "pasta",
        ingredients: [
            "400g spaghetti",
            "200g pancetta or guanciale",
            "4 large eggs",
            "100g Pecorino Romano cheese",
            "Black pepper",
            "Salt"
        ],
        steps: [
            "Bring a large pot of salted water to boil",
            "Cook spaghetti according to package directions",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Beat eggs in a bowl",
                    "Grate cheese and add to eggs",
                    "Add generous black pepper",
                    "Mix well"
                ]
            },
            "Cook pancetta in a large pan until crispy",
            "Drain pasta, reserve 1 cup pasta water",
            "Add hot pasta to pancetta pan (off heat)",
            "Quickly mix in egg mixture, adding pasta water to create creamy sauce",
            "Serve immediately with extra cheese"
        ]
    },
    {
        id: 2,
        title: "Chicken Tikka Masala🍛",
        time: 45,
        difficulty: "medium",
        description: "Tender chicken pieces in a creamy, spiced tomato sauce.",
        category: "curry",
        ingredients: [
            "500g chicken breast, cubed",
            "1 cup yogurt",
            "2 tbsp tikka masala spice",
            "1 can crushed tomatoes",
            "1 cup heavy cream",
            "2 onions, diced",
            "4 cloves garlic, minced",
            "2 tbsp ginger, grated"
        ],
        steps: [
            {
                text: "Marinate the chicken",
                substeps: [
                    "Mix yogurt and half the spices",
                    "Add chicken and coat well",
                    "Refrigerate for 30 minutes",
                    "Can marinate up to 24 hours for more flavor"
                ]
            },
            "Heat oil in a large pan",
            "Cook chicken until browned, set aside",
            "Sauté onions until golden",
            "Add garlic, ginger, and remaining spices",
            "Add tomatoes and simmer 10 minutes",
            "Stir in cream and return chicken to pan",
            "Simmer 15 minutes until chicken is cooked through",
            "Garnish with cilantro and serve with rice"
        ]
    },
    {
        id: 3,
        title: "Homemade Croissants🥐",
        time: 180,
        difficulty: "hard",
        description: "Buttery, flaky French pastries that require patience but deliver amazing results.",
        category: "baking",
        ingredients: [
            "500g all-purpose flour",
            "250g cold butter",
            "60g sugar",
            "10g salt",
            "10g instant yeast",
            "300ml cold milk",
            "1 egg for egg wash"
        ],
        steps: [
            "Mix flour, sugar, salt, and yeast",
            "Add cold milk and form dough",
            "Refrigerate dough for 1 hour",
            {
                text: "Prepare butter block",
                substeps: [
                    "Flatten butter between parchment paper",
                    "Shape into 15cm square",
                    "Keep cold until ready to use"
                ]
            },
            {
                text: "Laminate the dough",
                substeps: [
                    "Roll dough into rectangle",
                    "Place butter block in center",
                    "Fold dough over butter",
                    {
                        text: "Perform 3 turns",
                        substeps: [
                            "Roll into long rectangle",
                            "Fold into thirds like a letter",
                            "Refrigerate 30 minutes between turns"
                        ]
                    }
                ]
            },
            "Roll out final dough to 3mm thickness",
            "Cut into triangles and roll into croissant shape",
            "Proof for 2 hours until doubled",
            "Brush with egg wash",
            "Bake at 200°C for 15-20 minutes until golden"
        ]
    },
    {
        id: 4,
        title: "Greek Salad🥗",
        time: 15,
        difficulty: "easy",
        description: "Fresh vegetables, feta cheese, and olives tossed in olive oil and herbs.",
        category: "salad",
        ingredients: [
            "4 tomatoes, cut into wedges",
            "1 cucumber, sliced",
            "1 red onion, thinly sliced",
            "200g feta cheese, cubed",
            "1 cup Kalamata olives",
            "Extra virgin olive oil",
            "Dried oregano",
            "Salt and pepper"
        ],
        steps: [
            "Chop tomatoes into wedges",
            "Slice cucumber into thick half-moons",
            "Thinly slice red onion",
            "Combine vegetables in a large bowl",
            "Add olives and feta cheese cubes",
            "Drizzle generously with olive oil",
            "Sprinkle dried oregano, salt, and pepper",
            "Toss gently and serve immediately"
        ]
    },
    {
        id: 5,
        title: "Beef Wellington🥩",
        time: 120,
        difficulty: "hard",
        description: "Tender beef fillet coated with mushroom duxelles and wrapped in puff pastry.",
        category: "meat",
        ingredients: [
            "1kg beef tenderloin",
            "500g mushrooms, finely chopped",
            "200g pâté",
            "500g puff pastry",
            "6 slices prosciutto",
            "2 egg yolks",
            "Fresh thyme",
            "Salt and pepper"
        ],
        steps: [
            "Season beef with salt and pepper",
            "Sear beef on all sides until browned, let cool",
            {
                text: "Prepare mushroom duxelles",
                substeps: [
                    "Finely chop mushrooms",
                    "Sauté until all moisture evaporates",
                    "Add thyme and season",
                    "Cool completely"
                ]
            },
            "Lay prosciutto slices overlapping on plastic wrap",
            "Spread pâté over prosciutto",
            "Spread mushroom duxelles on top",
            "Place beef on top and roll tightly in plastic wrap",
            "Refrigerate for 30 minutes",
            "Roll out puff pastry",
            "Unwrap beef and place on pastry",
            "Wrap pastry around beef, seal edges with egg wash",
            "Brush entire surface with egg wash",
            "Bake at 200°C for 25-30 minutes until golden",
            "Rest for 10 minutes before slicing"
        ]
    },
    {
        id: 6,
        title: "Vegetable Stir Fry🥦",
        time: 20,
        difficulty: "easy",
        description: "Colorful mixed vegetables cooked quickly in a savory sauce.",
        category: "vegetarian",
        ingredients: [
            "2 cups broccoli florets",
            "1 bell pepper, sliced",
            "1 cup snap peas",
            "2 carrots, julienned",
            "3 tbsp soy sauce",
            "2 tbsp sesame oil",
            "2 cloves garlic, minced",
            "1 tbsp ginger, grated",
            "1 tbsp cornstarch"
        ],
        steps: [
            "Prep all vegetables and have them ready",
            "Mix soy sauce, sesame oil, and cornstarch for sauce",
            "Heat wok or large pan over high heat",
            "Add oil and swirl to coat",
            "Add garlic and ginger, stir for 30 seconds",
            "Add hard vegetables first (carrots, broccoli)",
            "Stir fry for 2-3 minutes",
            "Add softer vegetables (peppers, snap peas)",
            "Pour in sauce and toss everything together",
            "Cook for 2 more minutes until vegetables are tender-crisp",
            "Serve immediately over rice"
        ]
    },
    {
        id: 7,
        title: "Pad Thai🍜",
        time: 30,
        difficulty: "medium",
        description: "Thai stir-fried rice noodles with shrimp, peanuts, and tangy tamarind sauce.",
        category: "noodles",
        ingredients: [
            "200g rice noodles",
            "300g shrimp, peeled",
            "3 eggs",
            "3 tbsp tamarind paste",
            "2 tbsp fish sauce",
            "2 tbsp palm sugar",
            "1/2 cup peanuts, crushed",
            "Bean sprouts",
            "Green onions",
            "Lime wedges"
        ],
        steps: [
            "Soak rice noodles in warm water for 30 minutes",
            {
                text: "Prepare the sauce",
                substeps: [
                    "Mix tamarind paste, fish sauce, and palm sugar",
                    "Whisk until sugar dissolves",
                    "Taste and adjust balance"
                ]
            },
            "Heat wok over high heat with oil",
            "Scramble eggs and set aside",
            "Cook shrimp until pink, set aside",
            "Drain noodles and add to wok",
            "Pour sauce over noodles and toss",
            "Add eggs and shrimp back to wok",
            "Toss everything together",
            "Serve topped with peanuts, bean sprouts, and green onions",
            "Squeeze lime juice over before eating"
        ]
    },
    {
        id: 8,
        title: "Margherita Pizza🍕",
        time: 60,
        difficulty: "medium",
        description: "Classic Italian pizza with fresh mozzarella, tomatoes, and basil.",
        category: "pizza",
        ingredients: [
            "500g pizza dough",
            "200g San Marzano tomatoes",
            "250g fresh mozzarella",
            "Fresh basil leaves",
            "Extra virgin olive oil",
            "2 cloves garlic",
            "Salt",
            "Semolina flour for dusting"
        ],
        steps: [
            "Let pizza dough come to room temperature",
            {
                text: "Prepare pizza sauce",
                substeps: [
                    "Crush tomatoes by hand",
                    "Add minced garlic and salt",
                    "Drizzle with olive oil",
                    "No cooking needed - use fresh"
                ]
            },
            "Preheat oven to maximum temperature (250°C+)",
            "If using pizza stone, preheat it for 45 minutes",
            "Stretch dough into 12-inch circle",
            "Transfer to semolina-dusted pizza peel",
            "Spread thin layer of sauce, leaving 1-inch border",
            "Tear mozzarella and distribute evenly",
            "Slide onto pizza stone or baking sheet",
            "Bake 8-12 minutes until crust is golden and cheese bubbles",
            "Remove and immediately top with fresh basil",
            "Drizzle with olive oil and serve hot"
        ]
    }
];

    // ============================================
    // PRIVATE: DOM REFERENCES
    // ============================================
    
    // DOM Selection - Get the container where recipes will be displayed
    const recipeContainer = document.querySelector('#recipe-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');
    
    // NEW: Search and counter references
    const searchInput = document.querySelector('#search-input');
    const clearSearchBtn = document.querySelector('#clear-search');
    const recipeCountDisplay = document.querySelector('#recipe-count');

    // ============================================
    // PRIVATE: RECURSIVE STEP RENDERING
    // ============================================
    
    // Recursive function to render steps at any nesting level
    const renderSteps = (steps, level = 0) => {
        return steps.map(step => {
            if (typeof step === 'string') {
                // Base case: simple string step
                return `<li class="step-level-${level}">${step}</li>`;
            } else {
                // Recursive case: step with substeps
                return `
                    <li class="step-level-${level}">
                        ${step.text}
                        <ol class="substeps">
                            ${renderSteps(step.substeps, level + 1)}
                        </ol>
                    </li>
                `;
            }
        }).join('');
    };

    // Helper function to create HTML for steps (including nested substeps)
    const createStepsHTML = (steps) => {
        return `
            <ol class="steps-list">
                ${renderSteps(steps, 0)}
            </ol>
        `;
    };

    // ============================================
    // PRIVATE: CARD CREATION
    // ============================================
    
    // Function to create HTML for a single recipe card
    const createRecipeCard = (recipe) => {
        // Check if favorited
        const isFavorited = favorites.includes(recipe.id);
        const heartIcon = isFavorited ? '❤️' : '🤍';
        
        return `
            <div class="recipe-card" data-id="${recipe.id}">
                <!-- NEW: Favorite Button -->
                <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" 
                        data-recipe-id="${recipe.id}">
                    ${heartIcon}
                </button>
                
                <h3>${recipe.title}</h3>
                <div class="recipe-meta">
                    <span>⏱️ ${recipe.time} min</span>
                    <span class="difficulty ${recipe.difficulty}">${recipe.difficulty}</span>
                </div>
                <p>${recipe.description}</p>
                
                <div class="card-actions">
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="steps">
                        📋 Show Steps
                    </button>
                    <button class="toggle-btn" data-recipe-id="${recipe.id}" data-toggle="ingredients">
                        🥗 Show Ingredients
                    </button>
                </div>
                
                <div class="ingredients-container" data-recipe-id="${recipe.id}">
                    <h4>Ingredients:</h4>
                    <ul>
                        ${recipe.ingredients ? recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('') : ''}
                    </ul>
                </div>
                
                <div class="steps-container" data-recipe-id="${recipe.id}">
                    <h4>Cooking Steps:</h4>
                    ${recipe.steps ? createStepsHTML(recipe.steps) : ''}
                </div>
            </div>
        `;
    };

    // Function to render recipes to the DOM
    const renderRecipes = (recipesToRender) => {
        // Use map() to transform each recipe into HTML
        const htmlStrings = recipesToRender.map(recipe => createRecipeCard(recipe));
        
        // Join all HTML strings together
        const allHtml = htmlStrings.join('');
        
        // Set innerHTML of recipeContainer
        recipeContainer.innerHTML = allHtml;
    };

    // ============================================
    // PRIVATE: STATE MANAGEMENT
    // ============================================
    // Track current filter and sort settings
    let currentFilter = 'all';
    let currentSort = 'none';
    
    // NEW: Add search and favorites state
    let searchQuery = '';
    let favorites = JSON.parse(localStorage.getItem('recipeFavorites')) || [];
    let debounceTimer;

    // ============================================
    // PRIVATE: FILTER FUNCTIONS
    // ============================================
    // PRIVATE: FILTER FUNCTIONS
    // ============================================
    // These functions don't modify the original array
    // They return a NEW filtered array

    // Filter recipes by difficulty level
    const filterByDifficulty = (recipes, difficulty) => {
        return recipes.filter(recipe => recipe.difficulty === difficulty);
    };

    // Filter recipes by maximum cooking time
    const filterByTime = (recipes, maxTime) => {
        return recipes.filter(recipe => recipe.time <= maxTime);
    };

    // Filter recipes by category
    const filterByCategory = (recipes, category) => {
        return recipes.filter(recipe => recipe.category === category);
    };

    // NEW: Search filter
    const filterBySearch = (recipes, query) => {
        if (!query || query.trim() === '') {
            return recipes;
        }
        
        const lowerQuery = query.toLowerCase().trim();
        
        return recipes.filter(recipe => {
            // Search in title
            const titleMatch = recipe.title.toLowerCase().includes(lowerQuery);
            
            // Search in ingredients (use .some())
            const ingredientMatch = recipe.ingredients.some(ingredient => 
                ingredient.toLowerCase().includes(lowerQuery)
            );
            
            // Search in description
            const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
            
            return titleMatch || ingredientMatch || descriptionMatch;
        });
    };
    
    // NEW: Favorites filter
    const filterFavorites = (recipes) => {
        return recipes.filter(recipe => favorites.includes(recipe.id));
    };

    // Apply the current filter
    const applyFilter = (recipes, filterType) => {
        switch(filterType) {
            case 'easy':
                return filterByDifficulty(recipes, 'easy');
            case 'medium':
                return filterByDifficulty(recipes, 'medium');
            case 'hard':
                return filterByDifficulty(recipes, 'hard');
            case 'quick':
                return filterByTime(recipes, 30);
            case 'pasta':
                return filterByCategory(recipes, 'pasta');
            case 'curry':
                return filterByCategory(recipes, 'curry');
            case 'favorites':
                return filterFavorites(recipes);
            case 'all':
            default:
                return recipes;  // Return all recipes (no filter)
        }
    };

    // ============================================
    // PRIVATE: SORT FUNCTIONS
    // ============================================
    // ============================================
    // PRIVATE: SORT FUNCTIONS
    // ============================================
    // sort() mutates the original array, so we create a copy first

    // Sort recipes by name (A-Z)
    const sortByName = (recipes) => {
        // Create a copy with spread operator, then sort
        return [...recipes].sort((a, b) => a.title.localeCompare(b.title));
    };

    // Sort recipes by cooking time (fastest first)
    const sortByTime = (recipes) => {
        // Create a copy with spread operator, then sort
        return [...recipes].sort((a, b) => a.time - b.time);
    };

    // Apply the current sort
    const applySort = (recipes, sortType) => {
        switch(sortType) {
            case 'name':
                return sortByName(recipes);
            case 'time':
                return sortByTime(recipes);
            case 'none':
            default:
                return recipes;  // Return as-is (no sorting)
        }
    };

    // Update recipe counter
    const updateRecipeCounter = (showing, total) => {
        if (recipeCountDisplay) {
            recipeCountDisplay.textContent = `Showing ${showing} of ${total} recipes`;
        }
    };

    // ============================================
    // PRIVATE: MAIN UPDATE FUNCTION
    // ============================================
    // This function combines search + filter + sort + render

    const updateDisplay = () => {
        // Step 1: Start with all recipes
        let recipesToDisplay = recipes;
        
        // Step 2: Apply search first (narrows results)
        recipesToDisplay = filterBySearch(recipesToDisplay, searchQuery);
        
        // Step 3: Apply current filter (further narrows)
        recipesToDisplay = applyFilter(recipesToDisplay, currentFilter);
        
        // Step 4: Apply current sort (reorders)
        recipesToDisplay = applySort(recipesToDisplay, currentSort);
        
        // Step 5: Update counter
        updateRecipeCounter(recipesToDisplay.length, recipes.length);
        
        // Step 6: Render the filtered and sorted recipes
        renderRecipes(recipesToDisplay);
        
        // Step 7: Update active buttons
        updateActiveButtons();
        
        // Step 8: Log for debugging
        console.log(`Displaying ${recipesToDisplay.length} recipes (Filter: ${currentFilter}, Sort: ${currentSort}, Search: "${searchQuery}")`);
    };

    // ============================================
    // PRIVATE: UI HELPER FUNCTIONS
    // ============================================

    // Update which button looks "active"
    const updateActiveButtons = () => {
        // Update filter buttons
        filterButtons.forEach(btn => {
            const filterType = btn.dataset.filter;
            if (filterType === currentFilter) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update sort buttons
        sortButtons.forEach(btn => {
            const sortType = btn.dataset.sort;
            if (sortType === currentSort) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    };

    // ============================================
    // PRIVATE: FAVORITES MANAGEMENT
    // ============================================

    // Save favorites to localStorage
    const saveFavorites = () => {
        localStorage.setItem('recipeFavorites', JSON.stringify(favorites));
    };

    // Toggle favorite status
    const toggleFavorite = (recipeId) => {
        const id = parseInt(recipeId);
        
        if (favorites.includes(id)) {
            // Remove from favorites
            favorites = favorites.filter(fav => fav !== id);
        } else {
            // Add to favorites
            favorites.push(id);
        }
        
        saveFavorites();
        updateDisplay();
    };

    // ============================================
    // PRIVATE: EVENT HANDLERS
    // ============================================

    // Handle filter button clicks
    const handleFilterClick = (event) => {
        const filterType = event.target.dataset.filter;
        
        // Update state
        currentFilter = filterType;
        
        // Update UI
        updateActiveButtons();
        updateDisplay();
    };

    // Handle sort button clicks
    const handleSortClick = (event) => {
        const sortType = event.target.dataset.sort;
        
        // Update state
        currentSort = sortType;
        
        // Update UI
        updateActiveButtons();
        updateDisplay();
    };

    // NEW: Handle toggle button clicks (using event delegation)
    const handleToggleClick = (event) => {
        // Check if clicked element is a toggle button
        if (!event.target.classList.contains('toggle-btn')) {
            return; // Exit if not a toggle button
        }
        
        const button = event.target;
        const recipeId = button.dataset.recipeId;
        const toggleType = button.dataset.toggle;
        
        // Find the corresponding container
        const container = document.querySelector(
            `.${toggleType}-container[data-recipe-id="${recipeId}"]`
        );
        
        if (container) {
            // Toggle visibility
            container.classList.toggle('visible');
            
            // Update button text
            const isVisible = container.classList.contains('visible');
            if (toggleType === 'steps') {
                button.textContent = isVisible ? '📋 Hide Steps' : '📋 Show Steps';
            } else if (toggleType === 'ingredients') {
                button.textContent = isVisible ? '🥗 Hide Ingredients' : '🥗 Show Ingredients';
            }
        }
    };

    // NEW: Search input handler
    const handleSearchInput = (event) => {
        const query = event.target.value;
        
        // Show/hide clear button
        if (clearSearchBtn) {
            clearSearchBtn.style.display = query ? 'block' : 'none';
        }
        
        // Implement debouncing
        // Clear existing timer
        clearTimeout(debounceTimer);
        
        // Set new timer
        debounceTimer = setTimeout(() => {
            // Update search query and display after 300ms
            searchQuery = query;
            updateDisplay();
        }, 300);
    };

    // NEW: Clear search handler
    const handleClearSearch = () => {
        searchQuery = '';
        if (searchInput) {
            searchInput.value = '';
        }
        if (clearSearchBtn) {
            clearSearchBtn.style.display = 'none';
        }
        updateDisplay();
    };

    // NEW: Favorite button handler (event delegation)
    const handleFavoriteClick = (event) => {
        if (!event.target.classList.contains('favorite-btn')) {
            return;
        }
        
        const recipeId = event.target.dataset.recipeId;
        toggleFavorite(recipeId);
    };

    // ============================================
    // PRIVATE: EVENT LISTENER SETUP
    // ============================================

    const setupEventListeners = () => {
        // Attach click handlers to all filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', handleFilterClick);
        });
        
        // Attach click handlers to all sort buttons
        sortButtons.forEach(btn => {
            btn.addEventListener('click', handleSortClick);
        });
        
        // NEW: Event delegation for toggle buttons
        // One listener on parent catches all toggle button clicks
        recipeContainer.addEventListener('click', handleToggleClick);
        
        // NEW: Search input listener
        if (searchInput) {
            searchInput.addEventListener('input', handleSearchInput);
        }
        
        // NEW: Clear search button listener
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', handleClearSearch);
        }
        
        // NEW: Favorite button listener (event delegation)
        recipeContainer.addEventListener('click', handleFavoriteClick);
        
        console.log('Event listeners attached!');
    };

    // ============================================
    // PRIVATE: INITIALIZATION
    // ============================================

    const init = () => {
        console.log('🍳 RecipeJS initializing...');
        setupEventListeners();
        updateDisplay();
        console.log('✅ RecipeJS ready!');
        console.log(`📊 ${recipes.length} recipes loaded`);
        console.log(`❤️  ${favorites.length} favorites saved`);
    };

    // ============================================
    // PUBLIC API
    // ============================================
    // Return only what should be accessible from outside
    return {
        init: init,
        updateDisplay: updateDisplay
    };

})(); // End of IIFE - immediately invoked

// ============================================
// START THE APP
// ============================================
RecipeApp.init();