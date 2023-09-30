import { AppBar, Tab, Toolbar, styled } from "@mui/material";

const Header = styled(AppBar)`
    background: #111111
`
const Tabs = styled('p')`
    font-size: 20px;
    margin-right: 20px
`

const NavBar = () => {
    return (
        <Header position="static">
            <Toolbar>
                <Tabs>CRUD Application - MERN</Tabs>
                <Tabs>All Users</Tabs>
                <Tabs>New User</Tabs>
            </Toolbar>
        </Header>
    )
}

export default NavBar;