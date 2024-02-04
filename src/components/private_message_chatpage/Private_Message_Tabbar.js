import { Icon } from "@iconify/react";

import "../style.css";
import imgURL from "../static/avatar.png";

const PrivateMessageTabbar = () => {
    return (
        <>
            <div className="d-flex flex-row align-items-stretch align-items-center justify-content-between w-100" style={{ minHeight: '32px' }}>
                <div className="d-flex flex-row align-items-center">
                    <img src={ imgURL } className="ms-3 me-3 rounded-circle" style={{ width: '24px', height: '24px' }} alt=""></img>
                    <span className="me-3 text-white fw-bolder">Dummy</span>
                </div>
                <div className="d-flex flex-row align-items-center gap-3 me-2">
                    <Icon icon="material-symbols:phone-in-talk-watchface-indicator" className="tabbar_logo" />
                    <Icon icon="ph:video-camera-fill" className="tabbar_logo" />
                    <Icon icon="solar:pin-bold" className="tabbar_logo" />
                    <Icon icon="whh:addfriend" className="tabbar_logo" style={{ fontSize: '22px' }} />
                    <Icon icon="ic:round-account-circle" className="tabbar_logo_active" style={{ fontSize: '28px' }} />
                    <span className="rounded-2 ps-2 pe-2 py-1 gap-5 d-flex flex-row justify-content-between align-items-center" style={{ backgroundColor: 'rgba(30, 31, 34)', color: 'rgba(148, 155, 164)', fontSize: '14px' }}>
                        Search
                        <Icon icon="mingcute:search-2-line" className="tabbar_logo_disabled" style={{ fontSize: '18px' }} />
                    </span>
                    <Icon icon="material-symbols:inbox" className="tabbar_logo" style={{ fontSize: '28px' }} />
                    <Icon icon="ph:question-fill" className="tabbar_logo" style={{ fontSize: '28px' }} />
                </div>
            </div>
        </>
    )
}

export default PrivateMessageTabbar;
