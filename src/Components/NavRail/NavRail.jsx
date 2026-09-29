import "./NavRail.css"

export default function NavRail() {
    return (
        <div className='nav-rail-container'>
            <div className="rail-btn-container-top">
                <div className="rail-btn-container">
                    <button className='rail-btn'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#FAFAFA" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>wds-ic-chat-filled</title><path fill="#FAFAFA" fill-rule="evenodd" d="M22 6.67C22 5.19 20.8 4 19.33 4H1.8a1 1 0 0 0-.85 1.53L3 9v8.33C3 18.81 4.2 20 5.67 20h13.66c1.48 0 2.67-1.2 2.67-2.67V6.67ZM7 10a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8Z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div className="rail-btn-container">
                    <button className='rail-btn'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#FFFFFF" fill-opacity="0.6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>ic-call</title><path fill="#FFFFFF" d="M19.95 21c-2.08 0-4.14-.45-6.17-1.36a18.3 18.3 0 0 1-5.55-3.87 18.47 18.47 0 0 1-3.87-5.54C3.46 8.18 3 6.13 3 4.04A1.02 1.02 0 0 1 4.05 3H8.1c.23 0 .44.08.63.24a.9.9 0 0 1 .32.56l.65 3.5c.03.27.03.5-.02.67-.05.19-.15.35-.28.48L6.97 10.9c.34.62.73 1.21 1.2 1.79.45.57.96 1.13 1.5 1.66A17.59 17.59 0 0 0 13.1 17l2.35-2.35a1.61 1.61 0 0 1 1.3-.4l3.45.7c.23.07.43.19.57.36.16.18.23.37.23.59v4.05A1.02 1.02 0 0 1 19.95 21ZM6.03 9l1.64-1.65L7.25 5H5.03c.08.68.2 1.36.34 2.03.16.66.37 1.32.66 1.97Zm8.95 8.95a12.42 12.42 0 0 0 4.02 1v-2.2l-2.35-.48-1.67 1.68Z" fill-opacity="0.6"></path></svg>
                    </button>
                </div>
                <div className="rail-btn-container">
                    <button className='rail-btn'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#FFFFFF" fill-opacity="0.6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>wds-ic-status</title><path fill="#FFFFFF" d="M13.56 3.14c.1-.55.62-.92 1.15-.77a10 10 0 0 1 6.98 12.1.91.91 0 0 1-1.23.6c-.52-.18-.78-.75-.66-1.3a8 8 0 0 0-5.44-9.41c-.53-.17-.9-.68-.8-1.22Zm5.34 14.65c.42.35.48.98.08 1.37a10 10 0 0 1-13.96 0c-.4-.39-.34-1.02.08-1.38a1.11 1.11 0 0 1 1.46.09 8 8 0 0 0 10.88 0c.4-.38 1.03-.44 1.45-.09ZM3.54 15.08c-.52.19-1.1-.08-1.23-.62A10 10 0 0 1 9.29 2.37c.53-.15 1.05.22 1.15.77.1.54-.27 1.05-.8 1.22a8 8 0 0 0-5.44 9.42c.12.54-.14 1.1-.66 1.3Z" fill-opacity="0.6"></path><path fill="#FFFFFF" fill-rule="evenodd" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" clip-rule="evenodd" fill-opacity="0.6"></path></svg>
                    </button>
                </div>
                <div className="rail-btn-container">
                    <button className='rail-btn'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#FFFFFF" fill-opacity="0.6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>wds-ic-channels</title><path fill="#FFFFFF" fill-rule="evenodd" d="M15.83 8.63A1 1 0 0 1 17.2 9a5.98 5.98 0 0 1 0 6 1 1 0 0 1-1.73-1 3.98 3.98 0 0 0 0-4 1 1 0 0 1 .36-1.37Zm-7.66 0A1 1 0 0 1 8.53 10a3.98 3.98 0 0 0 0 4 1 1 0 0 1-1.73 1 5.98 5.98 0 0 1 0-6 1 1 0 0 1 1.37-.37Z" clip-rule="evenodd" fill-opacity="0.6"></path><path fill="#FFFFFF" d="M13.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill-opacity="0.6"></path><path fill="#FFFFFF" fill-rule="evenodd" d="m5.33 16.48-.23.8c-.24.77-.48 1.6-.68 2.3.7-.2 1.53-.44 2.3-.68l.8-.23.72.39a8 8 0 1 0-3.3-3.3l.4.72Zm-2.15.22A48.91 48.91 0 0 0 2 21a1 1 0 0 0 1 1c.31 0 2.46-.63 4.3-1.18a10 10 0 1 0-4.12-4.12Z" clip-rule="evenodd" fill-opacity="0.6"></path></svg>
                    </button>
                </div>
                <div className="rail-btn-container">
                    <button className='rail-btn'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#FFFFFF" fill-opacity="0.6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>wds-ic-communities</title><path fill="#FFFFFF" fill-rule="evenodd" d="M6.37 18.67a1.81 1.81 0 0 1-.58-1.24c-.01-.5-.03-1.5.03-1.94a2.7 2.7 0 0 1 .4-1.1 2.84 2.84 0 0 1 .9-.82c.46-.28.98-.46 1.4-.58A12.2 12.2 0 0 1 12 12.5a12.69 12.69 0 0 1 3.47.49 5.76 5.76 0 0 1 1.52.65c.28.19.56.44.78.76a2.41 2.41 0 0 1 .41 1.1c.06.43.04 1.43.03 1.93a1.9 1.9 0 0 1-.58 1.24c-.22.2-.48.33-.75.33H7.12c-.27 0-.53-.13-.75-.33Zm13.6-3.27c.04.6.03.86.02 1.6v.49a4.58 4.58 0 0 1-.3 1.51h2.97c.72 0 1.31-1.85 1.33-2.58.01-.4.02-.13-.02-.46a2.34 2.34 0 0 0-.95-1.6 4.27 4.27 0 0 0-1.41-.68h-.02v-.01a7.72 7.72 0 0 0-2.35-.27 4.18 4.18 0 0 1 .72 2Zm-2.04-3.95a2.65 2.65 0 0 0 3.16.06 2.67 2.67 0 1 0-3.16-.06ZM14.9 9.62A3.54 3.54 0 0 0 15.5 7a3.56 3.56 0 1 0-.61 2.62Zm-7.88.4a2.67 2.67 0 1 0-5.16-1.38 2.67 2.67 0 0 0 5.16 1.38Zm-4.42 3.6-.18.05h-.03a4.3 4.3 0 0 0-1.41.69 2.3 2.3 0 0 0-.95 1.6c-.04.33-.03 1.06-.02 1.46.02.73.61 1.58 1.33 1.58H4.3a4.58 4.58 0 0 1-.3-1.51V17c-.01-.74-.02-1 .03-1.6 0-.05 0-.1.02-.15a4.48 4.48 0 0 1 .7-1.85 7.22 7.22 0 0 0-2.16.22Zm9.4.88c-1.21 0-2.22.2-2.92.4-.37.12-.68.23-.91.38-.23.13-.3.25-.34.34a.7.7 0 0 0-.03.14s0-.01 0 0L7.79 17h8.42v-1.24c-.01-.01 0 .01 0 0a.7.7 0 0 0-.04-.14c-.03-.09-.11-.2-.34-.34a3.84 3.84 0 0 0-.91-.37c-.7-.2-1.7-.41-2.92-.41ZM12 6a1.55 1.55 0 1 0 0 3.11c.86 0 1.56-.7 1.56-1.55C13.56 6.7 12.86 6 12 6Z" clip-rule="evenodd" fill-opacity="0.6"></path></svg>
                    </button>
                </div>
                <hr className="dividing-line"/>
                <div className="rail-btn-container">
                    <button className='rail-btn'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#FAFAFA" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>wds-ic-logo-meta-ai-color</title><g clip-path="url(#WDSIconWdsIcLogoMetaAiColor__a)" fill="#FAFAFA"><path fill="url(&quot;#WDSIconWdsIcLogoMetaAiColor__b&quot;)" d="M8.07 15.54c1.74 0 2.88 2.43 2.88 4.26 0 1.56-.81 3.27-2.25 3.27-1.68 0-2.88-2.34-2.88-4.29 0-1.59.81-3.24 2.25-3.24m6.21.96c2.16 0 4.71 1.89 4.71 3.81 0 1.26-1.11 1.95-2.4 1.95-2.13 0-4.65-1.86-4.65-3.84 0-1.29 1.08-1.92 2.34-1.92m-9.03-6.03c1.23 0 1.95.81 1.95 2.01 0 2.16-2.28 4.53-4.35 4.53-1.2 0-1.98-.81-1.98-2.04 0-2.1 2.28-4.5 4.38-4.5m15.75.66c1.53 0 2.55.81 2.55 2.04 0 1.98-2.7 3.48-4.74 3.48-1.56 0-2.55-.9-2.55-2.07 0-1.92 2.64-3.45 4.74-3.45m-2.04-7.86c1.38 0 2.1 1.44 2.1 2.88 0 1.92-1.29 4.53-3.18 4.53-1.38 0-2.13-1.38-2.13-2.85 0-1.98 1.35-4.56 3.21-4.56M5.46 4.35c1.98 0 4.02 1.08 4.02 2.67 0 1.5-1.8 2.37-3.57 2.37-1.98 0-4.02-1.08-4.02-2.64 0-1.44 1.71-2.4 3.57-2.4m5.55-3.9c2.07 0 4.05 2.58 4.05 4.71 0 1.23-.66 2.13-1.89 2.13-2.07 0-4.08-2.58-4.08-4.68 0-1.2.66-2.16 1.92-2.16"></path></g><defs><linearGradient id="WDSIconWdsIcLogoMetaAiColor__b" x1="14.12" x2="20.68" y1="-1.69" y2="20.78" gradientUnits="userSpaceOnUse"><stop stop-color="#f356ff"></stop><stop offset="1" stop-color="#4641ff"></stop></linearGradient><clipPath id="WDSIconWdsIcLogoMetaAiColor__a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath><linearGradient id="WDSIconWdsIcLogoMetaAiColor__b" x1="14.12" x2="20.68" y1="-1.69" y2="20.78" gradientUnits="userSpaceOnUse"><stop stop-color="#f356ff"></stop><stop offset="1" stop-color="#4641ff"></stop></linearGradient></defs></svg>
                    </button>
                </div>
            </div>

            <div className="rail-btn-container-bottom">
                <div className="rail-btn-container">
                    <button className='rail-btn'>
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" fill="#FFFFFF" fill-opacity="0.6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>ic-filter</title><path fill="#FFFFFF" d="M13.25 12.5 12.1 11a.48.48 0 0 0-.4-.2c-.17 0-.3.07-.4.2l-1.68 2.2a.47.47 0 0 0-.06.53c.1.18.25.27.46.27h7.96c.21 0 .37-.1.46-.28.09-.18.07-.35-.07-.52l-2.42-3.17a.48.48 0 0 0-.4-.2c-.17 0-.3.06-.4.2l-1.9 2.47ZM8 18c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V4c0-.55.2-1.02.59-1.41C6.98 2.19 7.45 2 8 2h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v12c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H8Zm0-2h12V4H8v12Zm-4 6c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V7c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v13h13c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71A.94.94 0 0 1 17 22H4Z" fill-opacity="0.6"></path></svg>
                    </button>
                </div>
                <div className="rail-btn-container">
                    <button className='rail-btn'>
                        <img 
                            src="/fotos/contact00_me.jpeg" 
                            alt="Imagen de perfil"
                            className="img-profil-user"
                        />    
                    </button>                
                </div>
            </div>
        </div>
    )
}
