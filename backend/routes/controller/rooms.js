
const { Location, Accomodation, Sequelize: { Op }, } = require("../../models");

// async function httpGetLocation(req, res){
    // const location =await Location.findOne({ where: { loctionId, locationName } });
    // res.status(200).json({ location: location  });
// }

async function httpGetRoomlist(req, res){

    try{
        const locationId = req.params.locationId;
        console.log(locationId)
        const roomList =await Accomodation.findAll({ where: { locationId } });
        res.status(200).json({ data: roomList  });
    
    } catch (err) {
        console.log(err);
        res.status(400).send({
            errorMessage: "요청한 데이터 형식이 올바르지 않습니다.",
        });
    }
}
    
async function httpGetRoomDetail(req, res){
    try{
        const { locationId, accomoId } = req.params;
        console.log(locationId)
        console.log(accomoId)
        const room = await Accomodation.findOne({ where: { locationId, accomoId } });
        res.status(200).json({ data : room });
    } catch(err) {
        console.log(err);
        res.status(400).send({
            errorMessage: "요청한 데이터 형식이 올바르지 않습니다.",
        });
    }
}
    


module.exports = {
    httpGetRoomDetail,
    httpGetRoomlist
};

// , accomoId, accomoTitle, accomoContent, accomoImg 