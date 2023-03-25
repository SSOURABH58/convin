//create a page that will display the list of mp3/mp4 links that you have played i.e the card name, the link and the time it was played

import React from 'react';
import { connect } from 'react-redux';
// import { getHistory } from '../../actions/historyActions';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';
// import './History.css';

const History = ({ history }) => {
    const columns = [
        {
            title: 'Card Name',
            dataIndex: 'cardName',
            key: 'cardName',
        },
        {
            title: 'Link',
            dataIndex: 'link',
            key: 'link',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
    ];

    const data = history.map((item, index) => {
        return {
            key: index,
            cardName: item.cardName,
            link: item.link,
            time: item.time,
        };
    });

    return (
        <div className="History">
            <Table columns={columns} dataSource={data} />
            <Link to="/">
                <Button type="primary">Back</Button>
            </Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        history: state.history,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // getHistory: () => dispatch(getHistory()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

