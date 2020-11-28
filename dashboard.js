import React, { useEffect, useState } from 'react';
import { Table, Nav, NavItem, NavLink, TabContent, TabPane, Button, Spinner } from "reactstrap";
import classnames from 'classnames';
import Layout from '../components/Layout';
import { getAllContacts, getAllOrders, logOut } from '../utils/api';
import { formatDateAndTime, formatOrders, getTotalPrice } from "../utils/helppers";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
`;

const TabContainer = styled(TabContent)`
  margin-top: 20px;
`;

const NoData = styled.tr`
  text-align: center;
`;

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('1');
    const [orders, setOrders] = useState([]);
    const [contacts, setContacts] = useState([]);
    const [loadingOrders, setLoadingOrders] = useState(true);
    const [loadingContacts, setLoadingContacts] = useState(true);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        (async function() {
            if (activeTab === '1') {
                const response = await getAllOrders();
                response && setOrders(response);
                setLoadingOrders(false);
            }
            if (activeTab === '2') {
                const response = await getAllContacts();
                response && setContacts(response);
                setLoadingContacts(false)
            }
        })()
    }, [activeTab])

    return (
        <Layout>
            <Container>
                <Header>
                    <Button onClick={logOut}>Izloguj se</Button>
                </Header>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => { toggle('1'); }}
                        >
                            Orders
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => { toggle('2'); }}
                        >
                            Contacts
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContainer activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Table bordered>
                            <thead>
                            <tr>
                                <th>Datum i vreme</th>
                                <th>Email</th>
                                <th>Telefon</th>
                                <th>Adresa</th>
                                <th>Porudžbine</th>
                                <th>Ukupno</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orders.length ? orders.map(({ id, createdAt, orders, email, phone, address }) => (
                                <tr key={id}>
                                    <th>{formatDateAndTime(createdAt)}</th>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{address}</td>
                                    <td>{formatOrders(orders)}</td>
                                    <td>{`${getTotalPrice(orders)} RSD`}</td>
                                </tr>
                            )) : (
                                <NoData>
                                    <th colSpan="6">
                                        {loadingOrders ? <Spinner size="sm" /> : 'Nema porudžbina.'}
                                    </th>
                                </NoData>
                            )}
                            </tbody>
                        </Table>
                    </TabPane>
                    <TabPane tabId="2">
                        <Table bordered>
                            <thead>
                            <tr>
                                <th>Datum i vreme</th>
                                <th>Email</th>
                                <th>Naslov</th>
                                <th>Poruka</th>
                            </tr>
                            </thead>
                            <tbody>
                            {contacts.length ? contacts.map(({ id, contactedAt, email, subject, message }) => (
                                <tr key={id}>
                                    <th>{formatDateAndTime(contactedAt)}</th>
                                    <td>{email}</td>
                                    <td>{subject}</td>
                                    <td>{message}</td>
                                </tr>
                            )) : (
                                <NoData>
                                    <th colSpan="5">
                                        {loadingContacts ? <Spinner size="sm" /> : 'Nema kontakta.'}
                                    </th>
                                </NoData>
                            )}
                            </tbody>
                        </Table>
                    </TabPane>
                </TabContainer>
            </Container>
        </Layout>
    )
}

export default Dashboard;
