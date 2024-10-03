//PicsArt Api
import FormData from "form-data";
import fetch from "node-fetch"; // Import if you're using node-fetch for ES modules

export function upscaleconfig(imageUrl) {
  const formData = new FormData();

  formData.append("output_type", "cutout");
  formData.append("bg_blur", "0");
  formData.append("scale", "fit");
  formData.append("auto_center", "false");
  formData.append("stroke_size", "0");
  formData.append("stroke_color", "FFFFFF");
  formData.append("stroke_opacity", "100");
  formData.append("shadow", "disabled");
  formData.append("shadow_opacity", "20");
  formData.append("shadow_blur", "50");
  formData.append("format", "PNG");
  formData.append("image_url", imageUrl); // External URL expected here

  const url = "https://api.picsart.io/tools/1.0/removebg";
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "X-Picsart-API-Key":
        "eyJraWQiOiI5NzIxYmUzNi1iMjcwLTQ5ZDUtOTc1Ni05ZDU5N2M4NmIwNTEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJhdXRoLXNlcnZpY2UtMmI3OGEyZGItNWZlMS00YzU5LTg0NjUtMjM0MmIxOWRjODJjIiwiYXVkIjoiMzAzNjIyODI5MTU3MTAxIiwibmJmIjoxNzI3ODQ1ODAwLCJzY29wZSI6WyJiMmItYXBpLmdlbl9haSIsImIyYi1hcGkuaW1hZ2VfYXBpIl0sImlzcyI6Imh0dHBzOi8vYXBpLnBpY3NhcnQuY29tL3Rva2VuLXNlcnZpY2UiLCJvd25lcklkIjoiMzAzNjIyODI5MTU3MTAxIiwiaWF0IjoxNzI3ODQ1ODAwLCJqdGkiOiJiNmNjYTVjZi1iYjljLTQyMDAtOTdmOS0yNGUzYTI3MTIxODcifQ.Io56i7vGp3m7mOWm4xmrMIbX0cPLN23lT1nPxGcGKZZVV21XIiwa-NbH77L9zWVAaS8MAw-mpcTPf4GPNQP9OXN5iDgKtwY-5aQdcV8-xmkSnwx2mZMt-6oJYXNCrD5IEYll0AUIe1PhuP3shGFwmhhCOCmLRwZFeSIn7Hup6T44ImBbtZ9dzQgM1Dv3ZPRzVKj3gs9p-Te6m9TGLSCKw-ybR71ABwcgj-VqGXCVz9wVVxOyhwKaSdyLqac3e91gNo6NtqY5jEc08MOZV31W_R0B7ucgOgymmDEAVGEIwEaz4N_YmQsYqmhhXgmvCf-qQyXYQcs0DRHiGIbu7MCBkg",
    },
    body: formData,
  };

  // Return the fetch promise
  return fetch(url, options)
    .then((res) => res.json())
    .catch((err) => {
      console.error("Error:", err);
      throw err; // Propagate the error so the calling function can catch it
    });
}

export function upscale(req, res) {
  const imagePath = req.query.data;
  console.log(imagePath);

  upscaleconfig(imagePath)
    .then((response) => {
      res.render("upload", { username: req.username, filePath: response.data.url ,ex:null});
    })
    .catch((error) => {
      console.error("Error during upscaling:", error);
      res.status(500).send("Error upscaling image");
    });
}

