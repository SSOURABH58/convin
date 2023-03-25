//create a videoCard component that will be used to display the list of mp3/mp4 links that you have played i.e the card name, the link and the time it was played
//
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Input } from 'antd'
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deleteCard, editCard } from './../../redux/actions/cardActions';
import Paragraph from 'antd/es/typography/Paragraph';
import { openModal } from '../../redux/actions/modalActions';
// import './VideoCard.css'


const VideoCard = ({ card, openModal }) => {
    const [cardLocal, setCardLocal] = useState(card)
    const [isEditing, setIsEditing] = useState(false)

    const handleEditCard = () => {
        editCard(cardLocal)
        setIsEditing(false)
    }

    const handleCancelEditCard = () => {
        setCardLocal(card)
        setIsEditing(false)
    }

    const handleDeleteCard = () => {
        deleteCard(cardLocal?.id)
    }

    const handleLinkClick = () => {
        openModal(cardLocal)
    }


    return (
        <Card
            hoverable={true}
            size='small'
            style={{
                marginBottom: 5,
                cursor: "grab"
            }}
            title={isEditing ? <Input
                placeholder='Card Name ...'
                bordered={false}
                type="text" value={cardLocal.name}
                onChange={(e) => setCardLocal(state => ({ ...state, name: e.target.value }))} /> : cardLocal?.name}
            extra={isEditing ? <>
                <Button
                    type="link"
                    size='small'
                    onClick={handleEditCard}
                ><CheckOutlined /></Button>
                <Button
                    type="link"
                    size='small'
                    onClick={handleCancelEditCard}
                ><CloseOutlined /></Button>
            </> : <>
                <Button
                    type="link"
                    size='small'
                    onClick={() => setIsEditing(state => !state)}
                ><EditOutlined /></Button>
                <Button
                    type="link"
                    size='small'
                    onClick={handleDeleteCard}
                ><DeleteOutlined /></Button>
            </>}
        >
            {isEditing ? <Input
                placeholder='Card Link ...'
                bordered={false}
                type="text" value={cardLocal.link}
                onChange={(e) => setCardLocal(state => ({ ...state, link: e.target.value }))} /> :
                <Paragraph style={{ cursor: "pointer", color: "#69b1ff" }} onClick={handleLinkClick} ellipsis={true}>{cardLocal?.link}</Paragraph>}

        </Card>
    )
}

const mapStateToProps = (state) => ({
    cards: state.cards.cards
})

const mapDispatchToProps = {
    deleteCard,
    editCard,
    openModal
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoCard)


