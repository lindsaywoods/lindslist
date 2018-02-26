import React from "react";

const ListItem = (props) => {
    return (
        <li>
        {props.data} 
            <div className="trashbuttonoutline">
                <button className="trashbutton" onClick={() => props.delete(props.itemIndex)}>
                    {/* <p>delete</p> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                        <ellipse cx="40.881" cy="52.812" rx="1.875" ry="2.812" />
                        <ellipse cx="59.631" cy="52.812" rx="1.875" ry="2.812" />
                        <path className="trashicon" d="M55.882 58.438a.937.937 0 0 0-.938.938 4.692 4.692 0 0 1-4.687 4.688 4.692 4.692 0 0 1-4.688-4.688.937.937 0 1 0-1.875 0 6.57 6.57 0 0 0 6.563 6.562 6.57 6.57 0 0 0 6.562-6.562.937.937 0 0 0-.937-.938z" />
                        <path d="M78.382 19.062H60.474a4.691 4.691 0 0 0-4.592-3.75h-11.25a4.692 4.692 0 0 0-4.593 3.75H22.132a2.815 2.815 0 0 0-2.812 2.812c0 1.24.811 2.283 1.928 2.655l3.699 51.786v.002c.176 2.459 2.363 4.62 4.683 4.622h.002l.009-.002h41.231l.009.002h.002c2.32-.002 4.508-2.163 4.684-4.622v-.002l3.698-51.786a2.804 2.804 0 0 0 1.929-2.655 2.816 2.816 0 0 0-2.812-2.812zm-33.75-1.874h11.25c1.221 0 2.252.787 2.64 1.875h-16.53a2.807 2.807 0 0 1 2.64-1.875zm29.064 58.996v.002c-.104 1.474-1.47 2.871-2.809 2.876h-41.26c-1.339-.005-2.704-1.403-2.809-2.876v-.002L23.14 24.687h54.235l-3.679 51.497zm4.686-53.372h-56.25c-.517 0-.938-.421-.938-.938s.421-.938.938-.938h56.25a.94.94 0 0 1 0 1.876z" />
                    </svg> */}
                    {/* <img src="/dev/styles/assets/smileytrash.svg" alt=""/> */}
                </button> 
            </div>
            <button className="strikebutton" onClick={() => props.strikethrough(props.itemIndex)}>
                <p>strikethrough</p>
                {/* <svg class="strikeicon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                    <path d="M94 49.5h-3.5V30a.5.5 0 0 0-.5-.5H70a.5.5 0 0 0-.5.5v19.5H55.39l-4.91-19.62a.52.52 0 0 0-1 0L44.61 49.5H30.5V40a10.5 10.5 0 0 0-21 0v9.5H6a.5.5 0 0 0 0 1h3.5V60a10.5 10.5 0 0 0 21 0v-9.5h13.86l-4.84 19.38a.5.5 0 0 0 .48.62h20a.5.5 0 0 0 .48-.62L55.64 50.5H69.5V70a.5.5 0 0 0 .5.5h20a.5.5 0 0 0 .5-.5V50.5H94a.5.5 0 0 0 0-1zM10.5 40a9.5 9.5 0 0 1 19 0v9.5h-19zm19 20a9.5 9.5 0 0 1-19 0v-9.5h19zM50 32.06l4.36 17.44h-8.72zm9.36 37.44H40.64l4.75-19h9.22zm11.14-39h19v19h-19zm19 39h-19v-19h19z" data-name="Layer 2" />
                </svg> */}
            </button>
            {/* <button className={this.state.active ? "strikethrough" : null} onClick={this.toggleClass}>strikethrough</button> */}
            
        </li >
    );
}

export default ListItem;