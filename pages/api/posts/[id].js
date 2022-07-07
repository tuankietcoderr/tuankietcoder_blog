import dbConnect from "../../../utils/database";
import Post from "../../../models/Posts";

dbConnect;

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const post = await Post.findById(id);

        if (!post) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: post });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const post = await Post.findById(id);
        const update = { ...post._doc, ...req.body };
        console.log(req.body);
        const newPost = await Post.findByIdAndUpdate(id, update, {
          new: true,
          runValidators: true,
        });
        console.log(update);
        // console.log(newPost);

        if (!post) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: newPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedPost = await Post.deleteOne({ _id: id });

        if (!deletedPost) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
