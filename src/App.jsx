import React, { useEffect, useState } from 'react'
import style from './style.module.css'
//Importing the API ,it is the name of the class and fetchPopular is the async function inside the class  
import { TVShowApi } from './api/tv-show'
import { BACKDROP_BASE_URL } from './config'
import TVShowDetails from './components/TVShowDetails/TVShowDetails'
import Logo from './components/Logo/Logo'
import logoImg from './assets/logo.png'
import TVShowListItems from './components/TVShowListItems/TVShowListItems'
import TVShowList from './components/TVShowList/TVShowList'
import SearchBar from './components/SearchBar/SearchBar'

const App = () => {
    // creating  a state for tv shows
    const [currentTVShow, setCurrentTVShow] = useState();
    const [recommendationLists, setRecommendationLists] = useState([])
    // Creating an async function to get the response
    const fetchPopulars = async () => {
        //Fetching the TVShowAPI and storing it in the popularTVShowLists
        try {
            const popularTVShowLists = await TVShowApi.fetchPopulars()
            if (popularTVShowLists.length > 0) {
                setCurrentTVShow(popularTVShowLists[0])
            }
        } catch (error) {
            alert("Something went wrong when fetching popular tv shows")
        }

    }

    const fetchRecommendations = async (tvShowId) => {
        //Fetching the TVShowAPI and storing it in the popularTVShowLists
        try {
            const recommendationListResp = await TVShowApi.fetchRecommendations(tvShowId)
            if (recommendationListResp.length > 0) {
                setRecommendationLists(recommendationListResp.slice(0, 10))
            }
        } catch (error) {
            alert("Something went wrong when fetching recommended tv shows")
        }
    }
    //Using an useEffect to fetch the TV shows to render 
    useEffect(() => {
        fetchPopulars();
    }, [])

    useEffect(() => {
        if (currentTVShow) {
            fetchRecommendations(currentTVShow.id)
        }
    }, [currentTVShow])

    console.log(recommendationLists)

    const updateCurrentTVShow = (tvShow) => {
        setCurrentTVShow(tvShow)
    }
    const fetchByTitle = async (title) => {
        //Fetching the TVShowAPI and storing it in the popularTVShowLists
        try {
            const searchResponse = await TVShowApi.fetchByTitle(title)
            if (searchResponse.length > 0) {
                setCurrentTVShow(searchResponse[0])
            }
        } catch (error) {
            alert("Something went wrong when fetching by title tv shows")
        }
    }
    return (
        <div className={style.main_container} style={{ background: currentTVShow ? `linear-gradient(rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url('${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}') no-repeat center / cover` : '#000000' }}>
            <div className={style.header}>
                <div className="row">
                    <div className="col-4">
                        <Logo title="WatoWatch" subtitle="Explore shows you may like" img={logoImg} />
                    </div>
                    <div className="col-md-12 col-lg-4">
                        <SearchBar onSubmit={fetchByTitle} />
                    </div>
                </div>
            </div>
            {/* Only rendering TV show details if it is present and passing the props as the currentTVSHow for rendering it in TVShowDetails component */}
            <div className={style.tv_show_detail}>{currentTVShow && <TVShowDetails tvShow={currentTVShow} />}</div>
            <div className={style.recommended_tv_shows}>{currentTVShow && <TVShowList tvShowList={recommendationLists} onClickItem={updateCurrentTVShow} />}</div>

        </div>
    )
}

export default App