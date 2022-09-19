import { Box } from "@chakra-ui/react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Component/miscellaneous/SideDrawer";
import Mychats from "../Component/Mychats";
import ChatBox from "../Component/ChatBox";
import { useState } from "react";



const ChatPage = () => {

    const { user } = ChatState();
    const [fetchAgain, setFetchAgain] = useState(false);

    return (
        <div style={{ width: "100%" }}>
            {user && <SideDrawer />}
            <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
                {user && (<Mychats fetchAgain={fetchAgain} />)}
                {user && (<ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />)}
            </Box>
        </div>

    );
}

export default ChatPage