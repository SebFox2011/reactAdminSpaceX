// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField, UrlField } from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="agency" />
            <UrlField source="image" />
            <UrlField source="wikipedia" />
            <TextField source="launches" />
            <TextField source="status" />
        </Datagrid>
    </List>
);