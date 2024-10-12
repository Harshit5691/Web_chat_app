export const sampleChats = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: ["1", "2"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tanmay Saxena",
        _id: "2",
        groupChat: false,
        members: ["1", "2"],
    },
];
export const sampleUsers = [
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John Doe",
        _id: "1",
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Tanmay Saxena",
        _id: "2",
    },
];
export const sampleNotifications = [
    {
        sender:{
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },
    {
        sender:{
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Tanmay Saxena",
        },
        _id: "2",
    },
];
export const sampleMessages = [
    {
        attachments:[],
        content:"Hey from Mughal Ketan Goud",
        _id:"sfnsdjkfsdnfkjsbnd",
        sender:{
            _id:"user._id",
            name:"Ketan Goud",
        },
        chat: "chatId",
        createdAt:"2024-10-08T10:41:30.630Z",
    },
    {
        attachments:[
            {
                public_id:"asdsad 2",
                url:"https://www.w3schools.com/howto/img_avatar.png",
            }
        ],
        content:"",
        _id:"sfnsdjkfsdnfkdddjsbnd",
        sender:{
            _id:"sdfsdfsdf",
            name:"Aneesh",
        },
        chat: "chatId",
        createdAt:"2024-10-08T10:41:30.630Z",
    }
];
export const dashboardData = {
    users:[
        {
            name:"John Doe",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            _id:"1",
            username:"johndoe",
            friends:10,
            groups:5,
        },
        {
            name:"Tanmay Saxena",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
            _id:"2",
            username:"tanmaysaxena",
            friends:100,
            groups:50,
        }
    ],
    chats:[{
        name:"Aukat Group",
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        _id:"1",
        totalMembers:2,
        members:[{_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"}, {_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
        totalMessages:100,
        creator:{
            name:"John Doe",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
        }
    },{
        name:"Taxsena",
        avatar:["https://www.w3schools.com/howto/img_avatar.png"],
        _id:"2",
        totalMembers:2,
        members:[{_id:"1",avatar:"https://www.w3schools.com/howto/img_avatar.png"}, {_id:"2",avatar:"https://www.w3schools.com/howto/img_avatar.png"}],
        totalMessages:100,
        creator:{
            name:"Tanmay Saxena",
            avatar:"https://www.w3schools.com/howto/img_avatar.png",
        }
    }],
};