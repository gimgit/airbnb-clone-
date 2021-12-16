
const { Location, Accomodation, Sequelize: { Op }, } = require("../../models");

// async function httpGetLocation(req, res){
    // const location =await Location.findOne({ where: { loctionId, locationName } });
    // res.status(200).json({ location: location  });
// }

async function httpGetRoomlist(req, res){
    const { locationId } = req.params;
    const roomList =await Accomodation.findAll({ where: { locationId} });
    res.status(200).json({ roomList: roomList  });
}
    
async function httpGetRoomDetail(req, res){
    const { locationId, accomoId } = req.params;
    const room =await Location.findOne({ where: { userEmail, password } });
    res.status(200).json({ });
}


module.exports = {
    httpGetRoomDetail,
    httpGetRoomlist
};

// , accomoId, accomoTitle, accomoContent, accomoImg 