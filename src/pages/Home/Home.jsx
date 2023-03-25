import { Button, Card, Input, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Bucket from '../../components/Bucket/Bucket';
import { getBuckets, createBucket } from '../../redux/actions/bucketActions';
import './Home.css';
import { getCards } from '../../redux/actions/cardActions';

const Home = ({ buckets, cards, getBuckets, createBucket, getCards }) => {

    const [newBucket, setNewBucket] = useState({ name: "" });

    useEffect(() => {
        getBuckets();
        getCards();
    }, [getBuckets, getCards]);

    const createBucketHandler = () => {
        console.log(newBucket);
        newBucket.name && createBucket(newBucket);
        setNewBucket({ name: "" });
    }

    console.log("buckets:", buckets);
    return (
        <div className="Home">

            {buckets?.map(bucket => {
                return (
                    <Bucket bucket={bucket} key={bucket.id} cards={cards.filter(card => card.bucket_id === bucket.id)} />
                )
            })}
            <Card
                size='small'
                style={{
                    margin: 10,
                    width: 200,
                }}
                title={<Input
                    placeholder='New Bucket ...'
                    bordered={false}
                    type="text" value={newBucket.name}
                    onChange={(e) => setNewBucket({ name: e.target.value })} />}
                extra={<Button
                    type="link"
                    onClick={createBucketHandler}
                >Add</Button>}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        buckets: state.bucket.buckets,
        cards: state.cards.cards
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBuckets: () => dispatch(getBuckets()),
        createBucket: (bucket) => dispatch(createBucket(bucket)),
        getCards: () => dispatch(getCards())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

