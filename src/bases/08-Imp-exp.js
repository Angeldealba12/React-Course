import  heroes  from '../data/heroes'

// get object in an array by one of its property

export const getHeroeById = (id) => {
    return heroes.find((e) => e.id === id)
}

// console.log(getHeroeById(2));

// get objetcs in an array by one if its properties

export const getHeroesbyOwner = (owner) =>heroes.filter((e) => e.owner === owner)

// console.log(getHeroesbyOwner('DC'));

