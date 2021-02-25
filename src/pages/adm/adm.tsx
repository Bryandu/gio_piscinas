import React, { useEffect, useState } from "react";
import firebase from "firebase";

const Adm = () => {
  const [firefunctions, setFirefunctions] = useState({
    db: firebase.database,
    storage: firebase.storage,
  });
  const [image, setImage] = useState<File>();

  useEffect(() => {
    !firefunctions &&
      setFirefunctions({ db: firebase.database, storage: firebase.storage });
  }, [firefunctions]);

  function preview(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const preview = document.getElementById(
          "previewPhoto"
        ) as HTMLImageElement;
        if (reader.result) {
          preview.src = String(reader.result);
        }
        preview.style.display = "block";
      };
      reader.readAsDataURL(e.target.files[0]);
      setImage(e.target.files[0]);

      console.log(e.target.files[0]);
    }
  }

  function sendImage() {
    const { storage } = firefunctions;
    console.log(image);
    const imgref = storage()
      .ref()
      .child("images/" + image?.name);

    if (image) {
      imgref.put(image).then((snapshot) => {
        console.log("imagen enviada");
      });
    }
  }

  return (
    <div>
      <label htmlFor="photo">Upload</label>
      <input
        type="file"
        name="photo"
        id="photoinput"
        accept="image/*"
        onChange={(e) => preview(e)}
      />
      <img alt="foto" id="previewPhoto" />
      <button onClick={sendImage}>Enviar foto</button>
    </div>
  );
};

export default Adm;
