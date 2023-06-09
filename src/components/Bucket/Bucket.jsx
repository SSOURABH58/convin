import { Button, Card, Input } from 'antd';
import React, { useMemo, useState } from 'react'
import VideoCard from './../Card/VideoCard'
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deleteBucket, editBucket } from './../../redux/actions/bucketActions';
import { createCard, moveCard } from './../../redux/actions/cardActions';
import { Droppable, Draggable } from 'react-drag-and-drop';


const Bucket = ({ bucket, deleteBucket, editBucket, createCard, moveCard, allCards }) => {
    const [isEditing, setIsEditing,] = useState(false)
    const [bucketLocal, setBucketLocal] = useState(bucket);
    const [newCard, setNewCard] = useState({ name: "", link: "" });

    const cards = useMemo(() => allCards?.filter(card => card.bucket_id === bucket.id), [allCards, bucket])
    console.log("bucket:", bucket, "cards:", cards);

    const handleEditBucket = () => {
        editBucket(bucketLocal);
        setIsEditing(false);
    }

    const handleCancelEditBucket = () => {
        setBucketLocal(bucket);
        setIsEditing(false);
    }

    const handleDeleteBucket = () => {
        deleteBucket(bucketLocal?.id);
    }

    const handleCreateCard = () => {
        createCard({ ...newCard, bucket_id: bucketLocal?.id });
        setNewCard({ name: "", link: "" });
    }

    const handleOnDrop = (data) => {
        const card = allCards.find(card => card.id.toString() === data.card);
        moveCard({ ...card, bucket_id: bucketLocal?.id });
    }


    return (
        <Card
            size='small'
            style={{
                margin: 8,
                width: 200,
                textAlign: "left",
            }}
            title={isEditing ? <Input
                placeholder='Bucket Name ...'
                bordered={false}
                type="text" value={bucketLocal.name}
                onChange={(e) => setBucketLocal(state => ({ ...state, name: e.target.value }))} /> : bucketLocal?.name}
            extra={isEditing ? <>
                <Button
                    type="link"
                    size='small'
                    onClick={handleEditBucket}
                ><CheckOutlined /></Button>
                <Button
                    type="link"
                    size='small'
                    onClick={handleCancelEditBucket}
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
                    onClick={handleDeleteBucket}
                ><DeleteOutlined /></Button>
            </>
            }
        >
            <Droppable types={['card']} onDrop={(data) => handleOnDrop(data)}>

                {cards?.map((card, index) => <Draggable key={card.id} data={card.id} type={"card"}>
                    <VideoCard card={card} index={card.id} />
                </Draggable>)}

                <Card
                    size='small'
                    style={{
                        marginBottom: 5
                    }}
                    title={<Input
                        placeholder='New Card Name ...'
                        bordered={false}
                        type="text" value={newCard.name}
                        onChange={(e) => setNewCard(state => ({ ...state, name: e.target.value }))} />}
                    extra={<Button
                        type="link"
                        size='small'
                        onClick={handleCreateCard}
                    >Add</Button>}
                >
                    <Input
                        placeholder='New Video Link ...'
                        bordered={false}
                        type="text"
                        value={newCard.link}
                        onChange={(e) => setNewCard(state => ({ ...state, link: e.target.value }))}
                    />
                </Card>
            </Droppable>


        </Card>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        buckets: state.bucket.buckets,
        allCards: state.cards.cards,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBucket: (bucket) => dispatch(deleteBucket(bucket)),
        editBucket: (bucket) => dispatch(editBucket(bucket)),
        createCard: (card) => dispatch(createCard(card)),
        moveCard: (card) => dispatch(moveCard(card)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bucket)
