import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const data = [

    {
        "id": 1,
        "Name": "Marko Stojkovic",
        "Phone": "+381606221290",
        "Company": "SomeCompany",
        "Email": "gamer98forever@gmail.com",
        "Subject": "Sub",
        "ProblemDescription": "Some problem",
        "CallbackDateTime": "2021-08-26 23:09:21",
        "created_at": "2021-08-26T23:12:36.000000Z",
        "updated_at": "2021-08-26T23:12:36.000000Z"
    },
    {
        "id": 2,
        "Name": "sdfsf",
        "Phone": "1231231",
        "Company": "dsfsdf",
        "Email": "sfsdf@gmail.com",
        "Subject": "adasd",
        "ProblemDescription": "sadasd",
        "CallbackDateTime": "2021-08-26 23:09:21",
        "created_at": "2021-08-30T21:16:24.000000Z",
        "updated_at": "2021-08-30T21:16:24.000000Z"
    },
    {
        "id": 3,
        "Name": "sdfsf",
        "Phone": "1231231",
        "Company": "dsfsdf",
        "Email": "sfsdf@gmail.com",
        "Subject": "adasd",
        "ProblemDescription": "sadasd",
        "CallbackDateTime": "2021-08-26 23:09:21",
        "created_at": "2021-08-30T21:17:47.000000Z",
        "updated_at": "2021-08-30T21:17:47.000000Z"
    }


];

const columns = [
    {
        dataField: "id",
        hidden: true,
    },
    {
        dataField: "Name",
        text: "Name",
        sort: true,
    },
    {
        dataField: "Phone",
        text: "Phone",
        sort: true,
    },
    {
        dataField: "Company",
        text: "Company",
        sort: true,
    },
    {
        dataField: "Email",
        text: "Email",
        sort: true,
    },
    {
        dataField: "Subject",
        text: "Subject",
        sort: true,
    },
    {
        dataField: "ProblemDescription",
        text: "ProblemDescription",
        sort: true,
    },
    {
        dataField: "CallbackDateTime",
        text: "CallbackDateTime",
        sort: true,
    },
];



const BasicTable = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(
                "http://localhost:8000/api/admin", {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('TOKEN'),
                    Accept: 'application/json'
                }
            }
            )
            .then(response => {
                setData(JSON.parse(JSON.stringify(response.data)));
            })
            .catch(function (error) {
                console.log(error);
                alert(error);
            });
    }, []);

    return (
        <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            striped
            hover
            condensed
            pagination={paginationFactory({})}
        />
    );
};

export default BasicTable;