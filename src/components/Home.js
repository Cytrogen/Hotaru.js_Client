import ServerSidebar from './child_components/Server_Sidebar';
import FriendsListSideBar from './child_components/Friends_List_Sidebar';
import Chat from './child_components/Chat';

const Home = () => {
    return (
        <div className='vh-100 vw-100 background-color d-flex flex-row'>
            <ServerSidebar />
            <FriendsListSideBar />
            <Chat />
        </div>
    );
}

export default Home;
