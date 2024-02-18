import './Feed.css'

export default function Feed() {
    return(
        <div>
            <h1>Feed</h1>
            <Post /><br></br>
            <Post /><br></br>
            <Post /><br></br>
        </div>
    )
}

function Post() {
    return (
        <div className="post">
            <dt className="username">username</dt>
            <dd>
                artist - song name
                <img className="albumcover" src="https://media.licdn.com/dms/image/C5612AQHajKUAvBMIjg/article-cover_image-shrink_600_2000/0/1585067392980?e=2147483647&v=beta&t=qMIpxX_oq0TIhrPc9KgNlW2jTtla1FH4nFJFSx_nkh8" alt="album cover" />
                <br></br>
                timestamp
                    
            </dd>
        </div>
    )
}

function PostButton() {
    return (
        <div>

        </div>
    )
}