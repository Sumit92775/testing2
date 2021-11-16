import { Table, Button, Select, DatePicker, Form, Rate, Tooltip } from 'antd';
import * as moment from 'moment';
import cx from 'classnames';

const {Option} = Select;

const TransactionHistory = ({ showTransactionTypeFilter=true }) => {
    const types = [ 'Booking', 'Service Commission', 'Refund'],
    dataSource = [
        {
            key: 0,
            date_time: new Date(),
            transaction: 'Service Commission Taken for Booking #15912501',
            amount: -10
        },
        {
            key: 1,
            date_time: new Date(),
            transaction: 'Refundfor Booking #15912501',
            amount: 100
        },
        {
            key: 2,
            date_time: new Date(),
            transaction: 'Refund for Booking #15912499',
            amount: 100
        }
    ],
    columns = [
        {
            title: 'Date',
            dataIndex: 'date_time',
            key: 'date_time',
            render: function date_time(date_time) {
                return <p>{ moment(date_time).format(`${process.env.date_format} ${process.env.time_format}`) }</p>
            }
        },
        {
            title: 'Transaction',
            dataIndex: 'transaction',
            key: 'transaction'
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: function amount(amount) {
                return <p className={ cx('txt', amount > 0 ? 'success' : 'danger') }>{ amount < 0 ? '-' : ' '}$ { amount * (amount < 0 ? -1 : 1) }</p>
            }
        }
    ],
    transactionFilter = showTransactionTypeFilter ? (
        <Form.Item className="auto-width">
            <Select className="medium" defaultValue={types[0]}>
                {types.map(option => (
                    <Option key={option} value={option}>{option}</Option>
                    ))}
            </Select>
        </Form.Item>
    ) : null;

    for(let i = 3; i < 20; i++) {
        dataSource.push({
            key: i,
            date_time: new Date(),
            transaction: 'Payment for Booking #15912500',
            amount: 100
        })    
    }

    return (
        <div>
            <h5 className="mb-28">Transaction History Of Halais</h5>
            <Form className="stats-filter medium">
                <Form.Item className="auto-width">
                    <DatePicker />
                </Form.Item>
                { transactionFilter }
                <Form.Item className="auto-width">
                    <Button className="primary medium full-width">Apply Filters</Button>
                </Form.Item>
            </Form>

            <Table className="transaction mt-45" dataSource={dataSource} columns={columns} />
        </div>
    )
}

export default TransactionHistory
