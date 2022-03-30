import React, { useEffect, useState, useCallback } from 'react';
import RestaurantCard from './RestaurantCard';
import Search from './Search';

function Result() {
  const [restData, setRestData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/restaurant');
        const restaurantData = await response.json();
        setRestData(restaurantData);
        setSearchResults(restaurantData);
      } catch (e) {
        console.log('error', e);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchValue === '') {
      setSearchResults(restData);
    } else {
      const newRestData = restData.filter((item) => {
        return item.name === searchValue;
      });

      setSearchResults(newRestData);
    }
  }, [searchValue, restData]);

  const onSearchByName = useCallback((value) => {
    setSearchValue(value);
  }, []);

  return (
    <>
      <Search onSearchByName={onSearchByName}></Search>
      <div className='results'>
        {searchResults.map((item) => {
          const { name, distance, id, rating } = item;
          return (
            <RestaurantCard
              name={name}
              distance={distance}
              key={id}
              rating={rating}
              image={'image/dominos_social_logo.jpeg'}
            />
          );
        })}
      </div>
    </>
  );
}

export default Result;
