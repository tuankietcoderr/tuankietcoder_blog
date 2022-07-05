import dbConnect from "../../../utils/database";
import Category from "../../../models/Categories";

dbConnect;

export default async function handler(req, res) {
  const {
    query: { slug },
    method,
  } = req;
  console.log(method);
  switch (method) {
    case "GET":
      try {
        const category = await Category.findOne({ slug });

        if (!category) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: category });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const category = await Category.findOneAndUpdate({ slug }, req.body, {
          new: true,
          runValidators: true,
        });

        if (!category) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: category });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deletedCategory = await Category.deleteOne({ slug: slug });

        if (!deletedCategory) {
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
