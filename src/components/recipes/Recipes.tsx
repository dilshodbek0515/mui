import { FC, useEffect, useState } from 'react'
import axios from 'axios'

const BASEURL = 'https://dummyjson.com/recipes'
const RecipesCom: FC = () => {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    axios
      .get(`${BASEURL}`)
      .then(res => {
        setData(res.data.recipes)
      })
      .catch(err => console.log(err))
      .finally()
  }, [])

  return (
    <div className='w-full h-auto flex items-center justify-center my-10'>
      <div className='container mx-auto grid grid-cols-5 gap-5'>
        {data?.map((recipe, index) => (
          <div
            key={index}
            className='p-5 flex bg-slate-100 flex-col gap-3 rounded-xl'
          >
            <h2 className='text-xl text-black'>{recipe.name}</h2>
            <p className='text-2xl text-gray-100'>{recipe.cuisine}</p>
            <img
              className='w-full h-auto rounded-xl'
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
        )) || 'Loading...'}
      </div>
    </div>
  )
}

export default RecipesCom
