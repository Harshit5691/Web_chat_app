import express from 'express';
import { isAuthenticated } from '../middlewares/auth.js';
import { addMembers, deleteGroup, getChatDetails, getMessages, getMyChats, getMyGroups, leaveGroup, newGroupChat, removeMember, renameGroup, sendAttachments } from '../controllers/chat.js';
import { attachmentsMulter } from '../middlewares/multer.js';

const app = express.Router();

app.use(isAuthenticated);
app.post("/new",newGroupChat);
app.get("/my",getMyChats);
app.get("/my/groups",getMyGroups);
app.put("/addmembers",addMembers);
app.put("/removemember",removeMember);
app.delete("/leave/:id",leaveGroup);
app.post("/message",attachmentsMulter, sendAttachments);
app.get("/message/:id",getMessages);
app.route("/:id").get(getChatDetails).put(renameGroup).delete(deleteGroup);
export default app;