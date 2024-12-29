import AboutComponent from '../../components/about/aboutComponent'
import Charts from '../../components/charts/Charts'
import Hero from '../../components/hero/Hero'
import RecipesCom from '../../components/recipes/Recipes'

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutComponent />
      <RecipesCom />
      <Charts />
    </div>
  )
}

export default Home
