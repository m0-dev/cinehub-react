import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        {id: 1, title: "John Wick", release_date: "2022", url: ""},
        {id: 2, title: "Transporter", release_date: "2011", url: ""},
        {id: 3, title: "Wicked 2", release_date: "1980", url: ""},
        {id: 4, title: "Dance", release_date: "2004", url: ""},
        {id: 5, title: "The Matrix", release_date: "1998", url: ""},
    ]
    
    return <div className="dashboard">
        <form className="search-form">
            <input 
            type="text"
            placeholder="Suche ..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Suche</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                    <MovieCard movie={movie} key={movie.id} />
                )
            )}
        </div>
    </div>
}

export default Dashboard