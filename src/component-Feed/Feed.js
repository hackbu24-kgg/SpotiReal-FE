import './Feed.css'

export default function Feed() {
    return(
        <div>
            <h1>SpotiReal Feed</h1>
            <Post /><br></br>
            <Post /><br></br>
            <Post /><br></br>
        </div>
    )
}

function Post() {
    return (
        <div className="post">
            <p>username</p>
            <img className="albumcover" src="https://media.licdn.com/dms/image/C5612AQHajKUAvBMIjg/article-cover_image-shrink_600_2000/0/1585067392980?e=2147483647&v=beta&t=qMIpxX_oq0TIhrPc9KgNlW2jTtla1FH4nFJFSx_nkh8" alt="placeholder image" />
        </div>
    )
}

function PostButton() {
    return (
        <div>

        </div>
    )
}