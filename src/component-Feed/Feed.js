import './Feed.css'

export default function Feed() {
    return(
        <div className="feed">
            <h1>Feed</h1>
            <div><PostButton loggedin={true} /></div>
            <PostList />
        </div>
    )
}

function PostList() {
    return (
        <>
            <Post artist="artist1"/><br></br>
            <Post artist="artist2"/><br></br>
            <Post artist="artist3"/><br></br>
        </>
    )
    // need to return a list of however many posts there are
}

function Post(artist) {
    return (
        <div className="post">
            <img className="albumcover" src="https://media.licdn.com/dms/image/C5612AQHajKUAvBMIjg/article-cover_image-shrink_600_2000/0/1585067392980?e=2147483647&v=beta&t=qMIpxX_oq0TIhrPc9KgNlW2jTtla1FH4nFJFSx_nkh8" alt="album cover" />
            <dt className="username">PlaceholderUsername</dt>
            <dd>
                artist - song name
                
                <br></br>
                timestamp
                    
            </dd>
        </div>
    )
}

function PostButton(loggedin) {
    if (loggedin) {
        return (
            <>
                +
            </>
        )
    }
    else {
        return (
            <></>
        )
    }
}