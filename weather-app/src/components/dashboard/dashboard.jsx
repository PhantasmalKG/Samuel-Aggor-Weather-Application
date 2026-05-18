import React, {useState} from 'react'
import Logo from '../logo/logo'
import Options from '../options/options'
import {Searchbar} from '../Searchbar/Searchbar'
import { useDataRetrieval } from '../../hooks/useDataRetrieval'
import { WeatherDisplay } from '../WeatherDisplay/WeatherDisplay'
import { Footer } from '../Footer/Footer'



function Dashboard() {

  const [city, setCity] = useState(null);

  const { data, loading, error } = useDataRetrieval(city);



  return (
    <>
    <header className="banner_container">
      <Logo />
      <Searchbar onQueryChange={setCity} />
      <Options />
    </header>
    <WeatherDisplay city={city} data={data} loading={loading} error={error} />
    <Footer />
    </>
  )
}

export default Dashboard