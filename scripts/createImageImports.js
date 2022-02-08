const fs = require("fs");
const path = require("path");

const photoAlbumPath = path.join(process.cwd(), "src/images/venue");

const main = () => {
  fs.readdir(photoAlbumPath, (err, files) => {
    if (err) {
      return console.error(`Unable to read dir: ${err}`);
    }
    files.forEach((filename) => {
      const basename = filename.replace(".jpg", "");
      const importStmt = `import ${basename} from '../images/photo-album/${filename}'`;
      console.log(importStmt);
      const imageObjStr = `{ src: ${basename}, annotation: "" },`;
      // console.log(imageObjStr);
    });
  });
};

main();
