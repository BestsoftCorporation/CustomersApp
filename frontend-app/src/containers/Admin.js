import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";



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