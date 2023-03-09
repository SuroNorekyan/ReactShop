import React from "react";

export const Table = ({data}) =>{
    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Job</th>
                </tr>
                {data.map(item =>
                    <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.surname}</td>
                    <td>{item.job}</td>
                </tr>
                    )}
                
            </tbody>
        </table>
    )
}