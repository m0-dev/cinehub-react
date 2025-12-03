function MovieCard({movie}: { movie: { title: string; url: string; release_date: string }}) {
    function onFavoriteClick() {
        alert("Favorite Buton clicked")
    }

    return <div className="movie-card">
        <div className="movie-image">
            <img 
                src={movie.url || `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`}
                alt={movie.title}
            />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ❤
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
}

export default MovieCard