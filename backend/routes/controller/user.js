// 로그인, 회원가입

const { User, Sequelize: { Op }, } = require("../../models");

// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function httpGetUser(req, res) {
    const { userId, userName } = req.user;
    res.status(200).json({ userId: userId, userName: userName });
}

// sign-in
async function httpLogin(req, res) {
    try {
        const { userEmail, password } = req.body;
        const user = await User.findOne({ where: { userEmail, password } }); // user 조회, findOne 사용 가능, 이메일과 패스워드가 둘 다 맞아야함

        // 공백 확인
        if (userEmail === "" || password === "") {
            res.status(412).send({
                errorMessage: "빠짐 없이 입력해주세요.",
            });
            return;
        }

        // user 정보 불일치
        if (!user) {
            res.status(400).send({
                errorMessage: "이메일 또는 패스워드가 잘못됐습니다.",
            });
            return;
        }
        // user 정보 일치
        const token = jwt.sign({ userId: user.userId }, "my-secret-key");
        res.send({
            token,
            user: { userId: user.userId, userEmail: user.userEmail, userName: user.userName },
        });

    } catch (err) {
        console.log(err);
        res.status(400).send({
            errorMessage: "요청한 데이터 형식이 올바르지 않습니다.",
        });
    }

    // return res.status(200).json({ ok: true, msg: "" });
}

// sign-up
async function httpAddUser(req, res) {
    try {
        const { userEmail, password, confirmPassword, userName } = req.body;
        console.log(req.body);

        // 공백 확인
        if (userEmail === "" || password === "" || confirmPassword === "" || userName === "") {
            res.status(412).send({
                errorMessage: "빠짐 없이 입력해주세요.",
            });
            return;
        }

        // 이메일 양식 확인
        const emailForm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if (emailForm.test(userEmail) !== true) {
            res.status(400).send({
                errorMessage: "이메일 형식으로 입력해주세요.",
            });
            return;
        }
        

        // 암호화 추가하기

        // 패스워드 양식 확인
        if (password.length < 7 == true) {
            res.status(400).send({
                errorMessage: "패스워드는 6자 이상으로 입력해주세요.",
            });
            return;
        }

        // 패스워드 불일치(입력, 재입력 칸)
        if (password !== confirmPassword) {
            res.status(400).send({
                errorMessage: "패스워드가 패스워드 확인란과 동일하지 않습니다.",
            });
            return; // return 을 해야지 본 코드에서 나감 (비번 동일하지 않을 경우 괄호 밖 코드 실행 안함)
        }

        // 이미 동일 정보가 있을 경우
        const existUsers = await User.findAll({ // find 지원안하기 때문에 findAll로 변경
            where: {
                [Op.or]: [{ userEmail }], // [Op.or]: 조건[{ email }]이 하나라도 맞으면 가져와라 / Op라는 객체는 시퀄라이즈가 지원
            },
        });
        if (existUsers.length) {
            res.status(400).send({
                errorMessage: "이미 가입된 이메일 또는 닉네임이 있습니다.",
            });
            return;
        }

        // 회원가입 정보를 db에 저장
        await User.create({ userEmail, userName, password }); // 비동기 함수라 await 붙여줌, save() 안해줘도 되기 때문에 지웠음

        res.status(201).send({});

    } catch (err) {
        console.log(err);
        res.status(400).send({
            errorMessage: "요청한 데이터 형식이 올바르지 않습니다.",
        });
    }
}

module.exports = {
    httpGetUser,
    httpLogin,
    httpAddUser,
};