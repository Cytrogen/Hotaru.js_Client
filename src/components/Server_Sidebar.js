import imgURL from './static/Hotaru.png';

const ServerSidebar = () => {
    return (
        <div style={{ width: "72px", height: "100vh", paddingTop: "12px", backgroundColor: "rgba(30,31,34)" }}>
            {/* TODO: make hover state */}
            {/* TODO: when user click the server avatar, it should direct the user to /channels/{server id}/{channel id} */}
            <div className="mx-auto" style={{ width: '75%' }}>
                <img className="rounded-4" src={ imgURL } alt="" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="mx-auto mt-2" style={{ width: '32px', height: '2px', borderRadius: '1px', backgroundColor: 'rgba(53,54,60)' }} />
        </div>
    );
}

export default ServerSidebar;
