import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { useMutation } from "@apollo/react-hooks";
import { GET_DASHBOARD_ITEMS } from "../components/Dashboard/graphql/queries";
import { UPDATE_DASHBOARD_ITEM } from "../components/Dashboard/graphql/mutations";
const ReactGridLayout = WidthProvider(RGL);

const Dashboard = ({ children, dashboardItems }) => {
    const [updateDashboardItem] = useMutation(UPDATE_DASHBOARD_ITEM, {
        refetchQueries: [
            {
                query: GET_DASHBOARD_ITEMS
            }
        ]
    });

    const onLayoutChange = newLayout => {
        newLayout.forEach(l => {
            const item = dashboardItems.find(i => i.id.toString() === l.i);
            const toUpdate = JSON.stringify({
                x: l.x,
                y: l.y,
                w: l.w,
                h: l.h
            });

            if (item && toUpdate !== item.layout) {
                updateDashboardItem({
                    variables: {
                        id: item.id,
                        input: {
                            layout: toUpdate
                        }
                    }
                });
            }
        });
    };

    return (
        <ReactGridLayout cols={12} rowHeight={50} onLayoutChange={onLayoutChange}>
            {children}
        </ReactGridLayout>
    );
};

export default Dashboard;
