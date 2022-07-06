import dbConnect from "../../../utils/database";
import Exercise from "../../../models/Exercises";

dbConnect;

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;
  switch (method) {
    case "GET":
      try {
        const exercise = await Exercise.findById(id);

        if (!exercise) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: exercise });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const exercise = await Exercise.findById(id);
        const update = { ...exercise._doc, ...req.body };
        const newExercise = await Exercise.findByIdAndUpdate(id, update, {
          new: true,
          runValidators: true,
        });

        if (!exercise) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: newExercise });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const exercisePost = await Exercise.deleteOne({ _id: id });

        if (!exercisePost) {
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
