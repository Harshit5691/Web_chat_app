export const getOtherMembers = (members,userId) => 
    members.find((member)=>{return member._id.toString() !== userId.toString()});