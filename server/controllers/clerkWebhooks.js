import User from "../models/User.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    const WHook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"]
    };

    // Verify webhook (req.body should be raw)
    const payloadString = req.body.toString("utf8");
    await WHook.verify(payloadString, headers);

    const { data, type } = JSON.parse(payloadString);
    const userData = {
      _id: data.id,
      email: data.email_addresses[0].email_address,
      username: `${data.first_name} ${data.last_name}`,
      image: data.image_url,
    };

    switch (type) {
      case "user.created":
        await User.create(userData);
        break;
      case "user.updated":
        await User.findByIdAndUpdate(data.id, userData, { new: true });
        break;
      default:
        break;
    }

    return res.json({ success: true, message: "Webhook received" });
  } catch (error) {
    console.error(error.message);
    return res.status(400).json({ success: false, message: error.message });
  }
};

export default clerkWebhooks;
