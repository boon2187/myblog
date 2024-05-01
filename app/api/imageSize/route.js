import axios from "axios";
import sizeOf from "image-size";

export async function POST(req, res) {
  try {
    const { imageUrl } = req.body;
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });
    const dimensions = sizeOf(response.data);
    res
      .status(200)
      .json({ width: dimensions.width, height: dimensions.height });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving image size" });
  }
}
