import { Button, Card, Input } from 'antd';
import React, { useState } from 'react'
import VideoCard from './../Card/VideoCard'
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { createBucket, deleteBucket, editBucket, getBuckets } from './../../redux/actions/bucketActions';


const Bucket = ({ bucket, createBucket, deleteBucket, editBucket, getBuckets }) => {
    const [isEditing, setIsEditing,] = useState(false)
    const [bucketLocal, setBucketLocal] = useState(bucket);

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
        />
    )
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
        createBucket: (bucket) => dispatch(createBucket(bucket)),
        deleteBucket: (bucket) => dispatch(deleteBucket(bucket)),
        editBucket: (bucket) => dispatch(editBucket(bucket)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bucket)
