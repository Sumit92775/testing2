import React from 'react'
import { Tree, Collapse, Button, Form, Input, Divider } from 'antd';

const SearchFilter = () => {
    const BusinessType = [
        {
            title: 'Business',
            key: 'business',
        },
        {
            title: 'Freelancer',
            key: 'freelancer',
            children: [
                {
                    title: 'Male',
                    key: 'freelancer-male'
                },
                {
                    title: 'Female',
                    key: 'freelancer-female'
                }
            ],
        },
    ],
    Ratings = [
        {
            title: <span>4 <span className="material-icons">star</span> &amp; above</span>,
            key: 1
        },
        {
            title: <span>3 <span className="material-icons">star</span> &amp; above</span>,
            key: 2
        },
        {
            title: <span>2 <span className="material-icons">star</span> &amp; above</span>,
            key: 3
        },
        {
            title: <span>1 <span className="material-icons">star</span> &amp; above</span>,
            key: 4
        }
    ],
    DemographyServing = [
        {
            title: 'Male',
            key: 1
        },
        {
            title: 'Female',
            key: 2
        },
        {
            title: 'Kids',
            key: 3
        },
    ],
    Price = [
        {
            title: `Under ${process.env.currency}50`,
            key: 1
        },
        {
            title: `Under ${process.env.currency}100`,
            key: 2
        },
        {
            title: `Under ${process.env.currency}300`,
            key: 3
        },
    ],
    Categories = [
        {
            // title: <span><span className="material-icons mr-5">restaurant</span> <strong>Restaurants</strong></span>,
            title: 'Restaurants',
            icon: 'restaurant',
            key: 1,
            children: [
                {
                    title: `Fine Dining`,
                    key: '1-1'
                },
                {
                    title: `Casual Dining`,
                    key: '1-2'
                },
                {
                    title: `Food Truck`,
                    key: '1-3'
                },
            ]
        },
        {
            title: `Bakery & Desert`,
            key: 2
        },
        {
            title: 'Beauty Shop',
            key: 3
        },
    ];


    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };

    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };

    return (
        <div className="search-filter card no-shadow sticky t-110">
            <h5 className="pl-12">Filters</h5>
            <Divider className="mt-5 mb-0" />
            <Form>
                <Collapse className="filteration-bar" defaultActiveKey={['1']} ghost>
                    <Collapse.Panel header={<h6>Business Type</h6>} key="1" showArrow={false} extra={<span className="material-icons fz-28">arrow_right</span>}>
                        <Tree className="no-switcher" checkable onSelect={onSelect} onCheck={onCheck} selectable={false} defaultExpandAll={true} treeData={BusinessType} />
                    </Collapse.Panel>
                    <Divider className="mt-15 mb-0" />
                    <Collapse.Panel header={<h6>Rating</h6>} key="2" showArrow={false} extra={<span className="material-icons fz-28">arrow_right</span>}>
                        {/* <Checkbox.Group options={plainOptions} value={checkedList} onChange={onChange} /> */}
                        <Tree className="no-switcher" checkable onSelect={onSelect} onCheck={onCheck} selectable={false} defaultExpandAll={true} treeData={Ratings} />
                    </Collapse.Panel>
                    <Divider className="mt-15 mb-0" />
                    <Collapse.Panel header={<h6>Demography Serving</h6>} key="3" showArrow={false} extra={<span className="material-icons fz-28">arrow_right</span>}>
                        <Tree className="no-switcher" checkable onSelect={onSelect} onCheck={onCheck} selectable={false} defaultExpandAll={true} treeData={DemographyServing} />
                    </Collapse.Panel>
                    <Divider className="mt-15 mb-0" />
                    <Collapse.Panel header={<h6>Date and Time</h6>} key="4" showArrow={false} extra={<span className="material-icons fz-28">arrow_right</span>}>
                        <p>test</p>
                    </Collapse.Panel>
                    <Divider className="mt-15 mb-0" />
                    <Collapse.Panel header={<h6>Price</h6>} key="5" showArrow={false} extra={<span className="material-icons fz-28">arrow_right</span>}>
                        <Tree className="no-switcher" checkable onSelect={onSelect} onCheck={onCheck} selectable={false} defaultExpandAll={true} treeData={Price} />
                        <div className="price-range-filter mt-5">
                            <Form.Item name="min">
                                <Input className="medium" placeholder="Min" />
                            </Form.Item>
                            <Form.Item name="max">
                                <Input className="medium" placeholder="Max" />
                            </Form.Item>
                            <Form.Item name="max">
                                <Button className="primary medium2">Show</Button>
                            </Form.Item>
                        </div>
                    </Collapse.Panel>
                    <Divider className="mt-15 mb-0" />
                    <Collapse.Panel className="mb-2" header={<h6>Categories</h6>} key="6" showArrow={false} extra={<span className="material-icons fz-28">arrow_right</span>}>
                        <Tree className="right-switcher" checkable onSelect={onSelect} onCheck={onCheck} selectable={false} defaultExpandAll={true} treeData={Categories} />
                    </Collapse.Panel>
                </Collapse>
            </Form>
        </div>
    )
}

export default SearchFilter
