import React, {useEffect, useState} from 'react';


function Table() {


    const [dataList, setDataList] = useState([])
    useEffect(  () => {
        async function fetchData() {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/products`);
            let {data} = await response.json();
            if (data && data['products']) {
                return data['products'];
            }

        }

         fetchData().then((rows)=>{

             if (rows) {
                 setDataList(rows);
             }
         })
    }, [])



    return (
        <table className="table table-striped table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
            </tr>
            </thead>
            <tbody>
            {dataList.map(row => {
              return  <tr key={row.id}>
                    <th scope="row" >{row.id}</th>
                    <td>{row.title}}</td>
                    <td>{row.price}</td>
                    <td>{row.stock}</td>
                    <td>{row.category}</td>
                </tr>
            })}
            </tbody>
        </table>
    )
}

export default Table;
