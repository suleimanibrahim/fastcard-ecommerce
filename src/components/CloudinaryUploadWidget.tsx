// Add this to declare the cloudinary property on window
declare global {
  interface Window {
    cloudinary: {
      openUploadWidget: (
        options: object,
        callback: (
          error: unknown,
          result: { event?: string; info?: { secure_url?: string } }
        ) => void
      ) => void;
    };
  }
}

const CloudinaryUploadWidget = () => {
  const cloudName = "your_cloud_name"; // استبدلها بالاسم الحقيقي
  const uploadPreset = "your_unsigned_upload_preset"; // هنشوف ازاي نعمله دلوقتي

  // إنشاء الـ Upload Widget
  const openWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        sources: ["local", "url", "camera"],
        multiple: false,
        cropping: true,
        folder: "react_uploads"
      },
      (
        error: unknown,
        result: { event?: string; info?: { secure_url?: string } }
      ) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          alert(`Uploaded file URL: ${result.info?.secure_url}`);
        }
      }
    );
  };

  return (
    <div>
      <button type="button" onClick={openWidget}>
        Upload Image
      </button>
    </div>
  );
};

export default CloudinaryUploadWidget;
