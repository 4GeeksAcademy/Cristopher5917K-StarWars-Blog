const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://swapi.dev/api/",
			characters:[],
			planets:[],
			vehicles:[],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				if (!getStore().characters?.length) {
					try {
						const response = await fetch(getStore().urlBase + "people")
						const data = await response.json()
						console.log(data)
						if (response.ok) {
							setStore({
								characters: data.results,
							})
							
						}

					} catch (error) {
						console.log(error)
						return false
					}
				}
			},

			getPlanets: async () => {
				if (!getStore().planets?.length) {
					try {
						const response = await fetch(getStore().urlBase + "planets")
						const data = await response.json()
						console.log(data)

						if (response.ok) {
							setStore({
								planets: data.results
							})
							
						}

					} catch (error) {
						console.log(error)
						return false
					}
				}
			},

			getVehicles: async () => {
				if (!getStore().vehicles?.length) {
					try {
						const response = await fetch(getStore().urlBase + "vehicles")
						const data = await response.json()
						console.log(data)
						if (response.ok) {
							setStore({
								vehicles: data.results,
							})
							
						}


					} catch (error) {
						console.log(error)
					}

				}
			},

			addFavorite: async (favorite) => {
				const store = getStore();
				if (!store.favorites.some(item => item.uid === favorite.uid)) {
					setStore({
						favorites: [...store.favorites, favorite]
					});
				}
			},

			deleteFavorite: async (id) => {
				const updatedFavorites = getStore().favorites.filter(item => item.uid !== id);
				setStore({ favorites: updatedFavorites });
			},



		}
	};
};

export default getState;
