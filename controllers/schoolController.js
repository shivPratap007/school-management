const db = require("../config/db.js");
const haversine = require("haversine");

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const query =
      "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    const [result] = await db.execute(query, [
      name,
      address,
      latitude,
      longitude,
    ]);

    res.status(201).json({
      message: "School added successfully!",
      schoolId: result.insertId,
    });
  } catch (err) {
    console.error("Error adding school:", err);
    res.status(500).json({ error: "Failed to add school." });
  }
};

exports.listSchools = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
      return res
        .status(400)
        .json({ error: "Latitude and longitude are required" });
    }

    const [rows] = await db.execute(
      "SELECT id, name, address, latitude, longitude FROM schools"
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "No schools found" });
    }

    const userLocation = {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
    };

    const sortedSchools = rows
      .map((school) => ({
        ...school,
        distance: haversine(userLocation, {
          latitude: school.latitude,
          longitude: school.longitude,
        }),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (error) {
    console.error("Error listing schools:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving schools" });
  }
};
