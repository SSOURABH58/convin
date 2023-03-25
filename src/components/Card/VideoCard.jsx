//create a videoCard component that will be used to display the list of mp3/mp4 links that you have played i.e the card name, the link and the time it was played
//
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from 'antd'
// import './VideoCard.css'


const VideoCard = ({ card }) => {

    return (
        <div className="videoCard">
            <Card
                hoverable
                style={{ width: 240 }}
                actions={[
                    // toggle a model to display the video
                ]}
            >
                {/* // display the card name and other properties in the db of card */}
                <h3>{card.name}</h3>
                <p>{card.link}</p>
                <p>{card.time}</p>

            </Card>
        </div>
    )
}

export default VideoCard

