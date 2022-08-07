import env from "./env.js";
import axios from "axios";

axios({
    url: env.DOWNLOAD_URL,
    method: "GET", 
    responseType: "blob", 
}).then(response => {
    const blob = new Blob([response.data]);
    const fileObjectUrl = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = fileObjectUrl;
    link.style.display = "none";

    link.download = extractDownloadFilename(response);
    const extractDownloadFilename = (response) => {
        const disposition = response.headers["content-disposition"];
        const fileName = decodeURI(
        disposition
            .match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/)[1]
            .replace(/['"]/g, "")
        );
        return fileName;
    };
});
