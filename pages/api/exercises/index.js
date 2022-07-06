import dbConnect from "../../../utils/database";
import Exercise from "../../../models/Exercises";

dbConnect();

export default async function handler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const exercises = await Exercise.find({});
        res.status(200).json({ success: true, data: exercises });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const exercise = await Exercise.create(req.body);

        res.status(201).json({ success: true, data: exercise });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
