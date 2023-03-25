import { Button, Card, Input, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Bucket from '../../components/Bucket/Bucket';
import { getBuckets, createBucket } from '../../redux/actions/bucketActions';
import './Home.css';

const Home = ({ buckets, getBuckets, createBucket }) => {

    const [newBucket, setNewBucket] = useState({ name: "" });

    useEffect(() => {
        getBuckets();
    }, [getBuckets]);

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
                    <Bucket bucket={bucket} key={bucket.id} />
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
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getBuckets: () => dispatch(getBuckets()),
        createBucket: (bucket) => dispatch(createBucket(bucket))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

