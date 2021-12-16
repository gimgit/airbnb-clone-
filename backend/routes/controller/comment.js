const { Comment } = require("../../models");

// // 댓글 조회
// async function httpGetComments(req, res) {
//     const { accomoId } = req.params;
//     try {
//         const comments = await Comment.findAll({
//             where : {
//                 accomoId : accomoId,
//             }
//         });

//         res.status(200).json({ 
//             comments: comments 
//         });
//     } catch(err) {
//         console.log(err)
//     }
// }

// 댓글 등록
async function httpAddComment(req, res) {
    const { commentContent, rating } = req.body;
    const { accomoId } = req.params;
    const { userId, userName } = res.locals.user;
  
    try {
      if (commentContent === null) return res.status(400).send();
      
      const newComment = await Comment.create({
        accomoId: accomoId,
        commentContent: commentContent,
        userId: userId,
        userName: userName,
        rating: rating
      });
  
      res.status(201).json({ code: 201, msg: "작성완료", comment: newComment });
    } catch (err) {
      console.log(err);
    }
  }

// 댓글 수정
  async function httpEditComment(req, res) {
    const { commentContent, rating } = req.body;
    const { commentId } = req.params;
    const { userId } = res.locals.user;
    try {
      const existingComment = await Comment.findOne({
        where: { commentId: commentId, userId: userId },
      });
  
      if (!existingComment) return res.status(400).send();
  
      await Comment.update(
        {
          commentContent: commentContent,
          rating: rating,
        },
        {
          where: {
            commentId: commentId,
            userId: userId,
            rating: rating,
          },
        }
      );
  
      res.status(204).json({
        ok: true,
        msg: "수정완료!",
      });
    } catch (err) {
      console.log(err);
    }
  }

  // 댓글 삭제
  async function httpDeleteComment(req, res) {
    const { accomoId, commentId } = req.params;
    const { userId } = res.locals.user;
    
    try {
      const existingComment = await Comment.findOne({
        where: { commentId: commentId, accomoId: accomoId, userId: userId },
      });
  
      if (!existingComment) return res.status(400).send();
  
      await Comment.destroy({
        where: { commentId: commentId, accomoId: accomoId, userId: userId },
      });
  
      res.status(204).send();
    } catch (err) {
      console.log(err);
    }
  }



module.exports = { httpAddComment, httpEditComment, httpDeleteComment };

