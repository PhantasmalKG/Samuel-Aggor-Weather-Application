import {useState, useEffect} from 'react'

export const useDataRetrieval = (city) => {

    //useState Hooks     
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //API Key
    const apiKey = import.meta.env.VITE_API_KEY;

    //useEffect Hook to fetch data from the API
    useEffect(() => {

        if (!city) {
            return;
        }

        const controller = new AbortController();

        const fetchWeatherData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${apiKey}`, { signal: controller.signal });
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);


            } catch (error) {
                if (error.name !== 'AbortError') {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }

            
        };

        fetchWeatherData();
    
        return () => controller.abort();
    
    }, [city, apiKey]);


    


  return (
    console.log(data),
    { data, loading, error }
  )
}
