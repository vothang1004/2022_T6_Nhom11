import { promisify } from "util";
import fs from "fs";
const writeFilePromised = promisify(fs.writeFile);

function bulkLoadPhotoAlbum(photoAlbums, outputFilePath, fileName) {
  if (!outputFilePath) {
    throw new Error("Filepath required as second arguement");
  }
  if (!fileName) {
    throw new Error("FileName is required as third arguement");
  }
  return writeFilePromised(
    `${outputFilePath}/${fileName}.json`,
    JSON.stringify(photoAlbums, null, 2)
  );
}

export default bulkLoadPhotoAlbum;
