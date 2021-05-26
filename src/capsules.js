import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';

export const CapsuleList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="type" />
            <TextField source="status" />
            <TextField source="serial" />
            <TextField source="last_update" />
            <TextField source="land_landings" />
            <TextField source="water_landings" />
            <TextField source="reuse_count" />
        </Datagrid>
    </List>
);