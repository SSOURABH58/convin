import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { getHistory } from '../../redux/actions/historyAction';
import './History.css';

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
            cardName: item.name,
            link: item.link,
            time: item.time,
        };
    });

    return (
        <div className="History">
            <Table columns={columns} dataSource={data} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        history: state.history.history,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getHistory: () => dispatch(getHistory()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);

