import React from 'react';
import { Table } from 'antd';

const DashboardMiniTable = (props) => {
    return (
        <div className="dashboard-mini-table">
            <h5 className="mt-22 pl-27 mb-6">{ props.table.title }</h5>
            <Table dataSource={props.table.dataSource} columns={props.table.columns} />
        </div>
    )
}

export default DashboardMiniTable
