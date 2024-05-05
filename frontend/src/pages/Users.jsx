import React, { useState } from "react"
import Card from "../components/Card"
import { getUsers } from "../test/users"
import { Pagination } from 'antd';

const numEachPage = 10;


export default function Users() {

    const [pageAt, setPageAt] = useState(1);

    function changePage(value) {
        setPageAt(value)
    }

    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };

    const users = getUsers();

    return (
        <div>
            {console.log(pageAt, users)}
            {users[pageAt - 1].map(user => (
                <Card user={user}></Card>
            ))}
            <Pagination
                total={50}
                defaultCurrent={1}
                defaultPageSize={numEachPage}
                itemRender={itemRender}
                onChange={changePage}
                style={{ marginTop: '20px', fontSize: '20px' }}
            />
        </div>
    )
}
