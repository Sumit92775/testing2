import React from 'react';
import { Button, DatePicker, Table } from 'antd';

const TransactionCard = (props) => {
    
    function onChange(date, dateString) {
        console.log("Date String: ",dateString);
        props.sortTxnByDate(dateString)
      }

    return (
        <div className="dashboard-mini-table">
            <div style={{width : "100%", display : "flex", justifyContent : "space-between", alignItems : "center", borderBottom : "1px solid #E8EAEF"}}>
                <h5 className="pt-22 ml-27 pb-20" style={{width : "fit-content"}}>{ props.table.title }</h5>
                <DatePicker onChange={onChange} style={{width : "fit-content", marginInlineEnd : "22px", borderRadius : "6px"}} />
            </div>
            <Table rowClassName={(record, index) => 'failed'} dataSource={props.table.dataSource} columns={props.table.columns} />
        </div>
    )
}

export default TransactionCard;
